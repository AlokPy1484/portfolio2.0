import { CSSProperties } from "react";



export const getStripedBackground = (
    theme: string | undefined
): CSSProperties => ({
    backgroundImage:
        theme === "dark"
            ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 5px)"
            : "repeating-linear-gradient(135deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 5px)",
});



export const getCrossPatternBackground = (
    theme: string | undefined
): CSSProperties => ({
    backgroundImage:
        theme === "dark"
            ? "repeating-linear-gradient(135deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.05) 0.01px, transparent 0.5px, transparent 50px), repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.05) 0.01px, transparent 0.5px, transparent 50px)"
            : "repeating-linear-gradient(135deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.04) 0.01px, transparent 0.5px, transparent 50px), repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.04) 0.01px, transparent 0.5px, transparent 50px)",
});