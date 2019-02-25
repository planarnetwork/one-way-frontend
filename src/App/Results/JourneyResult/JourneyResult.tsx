
import * as React from "react";
import { Leg, LegResult } from "./LegResult/LegResult";

export function JourneyResult({ journey }: JourneyResultProps) {
  return (
    <div>
      <div>
        {journey.legs[0].origin} - {journey.legs[journey.legs.length - 1].destination}
      </div>
      <div>
        {journey.legs.map((l, i) => <LegResult key={i} leg={l}/>)}
      </div>
    </div>
  )
}

export interface JourneyResultProps {
  journey: Journey
}

export interface Journey {
  legs: Leg[]
}
