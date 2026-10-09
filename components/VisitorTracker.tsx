"use client";

import { getVisitorId } from "@/utils/visitor";
import { useEffect } from "react";


export default function VisitorTracker() {
    useEffect(() => {
        const visitorId = getVisitorId();

        fetch("/api/visitor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ visitorId }),
        });
    }, []);

    return null;
}