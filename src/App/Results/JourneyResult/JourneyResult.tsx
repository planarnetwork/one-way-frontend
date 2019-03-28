
import * as React from "react";
import { Leg, LegResult } from "./LegResult/LegResult";
import { toTimeString } from "../../../Util/time";
import { stopName } from "../../../Util/stop";

export function JourneyResult({ journey }: JourneyResultProps) {
  const [fLeg, lLeg] = firstAndLast(journey.legs);

  return (
    <div>
      <h2>
        {stopName(fLeg.origin)} ({toTimeString(journey.departureTime)}) - ({toTimeString(journey.arrivalTime)}) {stopName(lLeg.destination)}
      </h2>
      <div>
        {journey.legs.map((l, i) => <LegResult index={i} key={i} leg={l}/>)}
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

