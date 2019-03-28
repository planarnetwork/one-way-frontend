
import * as React from "react";
import { StopTime, StopTimeResult } from "./StopTimeResult/StopTimeResult";
import { stopName } from "../../../../Util/stop";
import { toMins } from "../../../../Util/time";

export function LegResult({ index, leg }: LegResultProps) {
  const transferText = leg.duration ? "(" + toMins(leg.duration) + " transfer)": ""
  ;
  return (
    <div>
      <h3>Leg {index + 1}: {stopName(leg.origin)} - {stopName(leg.destination)} {transferText}</h3>
      <ul>
        { leg.stopTimes
          && leg.stopTimes
            .filter(st => st.dropOff || st.pickUp)
            .map((st, i) => <StopTimeResult key={i} stopTime={st} />)}
      </ul>
    </div>
  );
}

export interface LegResultProps {
  leg: Leg,
  index: number
}

export interface Leg {
  origin: string,
  destination: string,
  stopTimes: StopTime[]
  duration?: number
}
