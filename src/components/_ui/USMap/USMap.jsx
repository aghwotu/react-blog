import React, { useMemo, useState } from 'react';
import * as d3 from "d3"
import usMapString from "./us.geojson"
import statesString from "./states.geojson"

import "./USMap.scss"

let projection = d3.geoAlbersUsa()
projection.translate([410, 250])
const path = d3.geoPath(projection)
const usMap = JSON.parse(usMapString)
const usMapPath = path(usMap)
const statesObject = JSON.parse(statesString)
const statesPaths = {}
const stateCenters = {}
statesObject.features.forEach(state => {
    statesPaths[state.properties.name] = path(state)
    stateCenters[state.properties.name] = path.centroid(state)
})

const color1 = "#dce5ee"
// const color2 = "#2c3e50"
const color2 = "#546de5"

const height = 500
const width = 800

const USMap = ({ data, itemsByState, className }) => {
    const [hoveredState, setHoveredState] = useState(null)

    const {
        colorScale, orderedStates, topStates
     } = useMemo(() => {
        const colorScale = d3.scaleLinear()
            .domain(d3.extent(Object.values(data)))
            .range([color1, color2])

        const orderedStates = Object.keys(data).map(state => ({
            name: state,
            value: data[state],
        })).sort((a,b) => b.value > a.value ? 1 : -1)

        const topStates = orderedStates.slice(0, 3).map(state => ({
            ...state,
            middle: stateCenters[state.name],
        }))

        return {
            colorScale, orderedStates, topStates
        }
    }, [data])

    return (
        <>
            <div className={`USMap ${className}`}>
                <svg {...{height, width}} viewBox={`0 0 ${width} ${height}`}>
                    <path d={usMapPath} className="USMap__outline" />

                    {Object.keys(statesPaths).map(state => (
                        <path
                            key={state}
                            d={statesPaths[state]}
                            className={`USMap__state USMap__state--is-${hoveredState == state ? "hovered" : "normal"}`}
                            fill={colorScale(data[state]) || "#fff"}
                            onMouseEnter={e => setHoveredState(state)}
                            onMouseLeave={e => setHoveredState(null)}
                        >
                            <title>
                                { state }: { data[state] || 0 } { data[state] == 1 ? "book" : "books" }.
                            </title>
                        </path>
                    ))}

                    {topStates.map(({ name, value, middle }) => (
                        <g className="USMap__annotation" transform={`translate(${middle.join(", ")})`}>
                            <g transform={`translate(${(
                                name == "New York" ? [-36, -21] :
                                name == "Massachusetts" ? [40, 0] :
                                name == "Maine" ? [49, 1] :
                                    [0, 0]
                            ).join(", ")})`}>
                                <text transform={`translate(0, -8)`} className="USMap__annotation__name">
                                    { stateAbbreviationsMap[name] }
                                </text>
                                <text transform={`translate(0, 8)`} className="USMap__annotation__value">
                                    { value }
                                </text>
                            </g>
                        </g>
                    ))}
                </svg>
                <div className="USMap__legend">
                    <div className="USMap__legend__color" style={{
                        background: `linear-gradient(to right, ${colorScale.range().join(", ")})`,
                    }} />
                    <div className="USMap__legend__items">
                        {colorScale.ticks(5).map(d => (
                            <div className="USMap__legend__item" key={d}>
                                <div className="USMap__legend__item__value">
                                    { d }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {hoveredState && (
                <USMapTooltip
                    state={hoveredState}
                    value={data[hoveredState]}
                    items={itemsByState[hoveredState]}
                    center={stateCenters[hoveredState]}
                />
            )}
        </>
    )
}

export default USMap


const USMapTooltip = ({ state, value, items=[], center}) => (
    <div
        className="USMapTooltip"
        style={{
            transform: `translate(${center[0]}px, ${center[1]}px)`
        }}>
            <div className="USMapTooltip__wrapper">
                <h6>
                    { state }
                </h6>

                <div className="USMapTooltip__byline">
                    mentioned by { value || 0 } { value == 1 ? "book" : "books" }
                </div>

                <div className="USMapTooltip__items">
                    {items.map(item => (
                        <div className="USMapTooltip__item" key={item}>
                            { item }
                        </div>
                    ))}
                </div>
            </div>
    </div>
)


const stateAbbreviationsMap = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma": "OK",
    "Oregon": "OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY",
}
