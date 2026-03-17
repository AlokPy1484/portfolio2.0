import * as React from "react"
import type { TCountryCode } from "countries-list"

import { DottedMap } from "../../components/ui/dotted-map"
import type { Marker } from "../../components/ui/dotted-map"

type CountryCode = Lowercase<TCountryCode>

type MyMarker = Marker & {
  overlay: {
    countryCode: CountryCode
    label: string
  }
}

const markers: MyMarker[] = [
// {
//   lat: 28.6139,
//   lng: 77.2090,
//   size: 2.8,
//   overlay: { countryCode: "in", label: "Delhi" },
// },
{
  lat: 18.5204,
  lng: 73.8567,
  size: 2.8,
  overlay: { countryCode: "in", label: "Pune" },
}
// {
//   lat: 40.4173,
//   lng: -82.9071,
//   size: 2.8,
//   overlay: { countryCode: "us", label: "Ohio" },
// }
]

export function Map() {
  const id = React.useId()
  return (
    <div className="relative md:w-[750px] min-w-[380px] overflow-hidden rounded-lg border">
      <div className="to-background absolute md:w-[750px]  inset-0 bg-radial from-transparent to-200%" />
      <DottedMap<MyMarker>
        markers={markers}
        renderMarkerOverlay={({ marker, x, y, r, index }) => {
          const { countryCode, label } = marker.overlay
          const href = `https://flagcdn.com/w80/${countryCode}.webp` // FlagCDN  [oai_citation:7‡Flagpedia](https://flagpedia.net/download/api)

          const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-")
          const imgR = r * 0.75

          const fontSize = r * 0.9
          const pillH = r * 1.5
          const pillW = label.length * (fontSize * 0.62) + r * 1.4
          const pillX = x + r + r * 0.6
          const pillY = y - pillH / 2

          return (
            <g style={{ pointerEvents: "none" }}>
              <clipPath id={clipId}>
                <circle cx={x} cy={y} r={imgR} />
              </clipPath>

              <image
                href={href}
                x={x - imgR}
                y={y - imgR}
                width={imgR * 2}
                height={imgR * 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipId})`}
              />

              <rect
                x={pillX}
                y={pillY}
                width={pillW}
                height={pillH}
                rx={pillH / 2}
                fill="rgba(0,0,0,0.55)"
              />
              <text
                x={pillX + r * 0.7}
                y={y + fontSize * 0.35}
                fontSize={fontSize}
                fill="white"
              >
                {label}
              </text>
            </g>
          )
        }}
      />
    </div>
  )
}
