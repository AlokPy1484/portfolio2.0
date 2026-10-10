import { createApiClient } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createApiClient();
    const { count, error } = await supabase
        .from("visitor")
        .select("*", { count: "exact", head: true });

    if (error) {
        console.error("Visitor count GET error:", error);
        return NextResponse.json(
            { error: "Failed to get visitor count" },
            { status: 500 }
        );
    }

    return NextResponse.json({
        count: count ?? 0,
    });
}