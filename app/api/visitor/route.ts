import { NextResponse } from "next/server";
import { createApiClient } from "@/utils/supabase/api";

export async function POST(req: Request) {
    try {
        const { visitorId } = await req.json();

        if (!visitorId) {
            return NextResponse.json(
                { error: "visitorId is required" },
                { status: 400 }
            );
        }

        const supabase = createApiClient();

        // Upsert the visitor — if they already exist, do nothing (no double-counting)
        const { error: visitorError } = await supabase
            .from("visitor")
            .upsert(
                { visitor_id: visitorId },
                { onConflict: "visitor_id", ignoreDuplicates: true }
            );

        if (visitorError) {
            console.error("Visitor upsert error:", visitorError);
            return NextResponse.json(
                { error: "Failed to register visitor" },
                { status: 500 }
            );
        }

        // Get the total unique visitor count
        const { count, error: countError } = await supabase
            .from("visitor")
            .select("*", { count: "exact", head: true });

        if (countError) {
            console.error("Count error:", countError);
            return NextResponse.json(
                { error: "Failed to get count" },
                { status: 500 }
            );
        }

        // Update the visitors_count summary table
        const { error: updateError } = await supabase
            .from("total_visitors")
            .update({ count: count ?? 0 })
            .limit(1);

        if (updateError) {
            console.error("Update count error:", updateError);
        }

        return NextResponse.json({ count });
    } catch {
        return NextResponse.json(
            { error: "Invalid request" },
            { status: 400 }
        );
    }
}