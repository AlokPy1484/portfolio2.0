"use client"

import { bind, setTheme, setVolume } from "cuelume"
import { useEffect } from "react"




export default function CuelumeProvide() {

    useEffect(() => {
        bind()

        setVolume(0.8)

        setTheme("default")
    }, [])

    return null


}