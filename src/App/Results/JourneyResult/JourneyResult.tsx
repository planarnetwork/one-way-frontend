
import * as React from "react";
import { Leg, LegResult } from "./LegResult/LegResult";
import { toTimeString } from "../../../Util/time";

export function JourneyResult({ journey }: JourneyResultProps) {
  const [fLeg, lLeg] = firstAndLast(journey.legs);

  return (
    <div>
      <div>
        {fLeg.origin} ({toTimeString(journey.departureTime)}) - ({toTimeString(journey.arrivalTime)}) {lLeg.destination}
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
  legs: Leg[],
  departureTime: number,
  arrivalTime: number
}

function firstAndLast<T>(items: T[]): [T, T] {
  return [items[0], items[items.length - 1]];
}

