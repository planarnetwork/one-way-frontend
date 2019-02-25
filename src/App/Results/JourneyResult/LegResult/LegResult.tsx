
import * as React from "react";
import { StopTime, StopTimeResult } from "./StopTimeResult/StopTimeResult";

export function LegResult({ leg }: LegResultProps) {
  return (
    <div>
      <h3>{leg.origin} - {leg.destination}</h3>
      <ul>
        { leg.stopTimes && leg.stopTimes.map((st, i) => <StopTimeResult key={i} stopTime={st} />)}
      </ul>
    </div>
  );
}

export interface LegResultProps {
  leg: Leg
}

export interface Leg {
  origin: string,
  destination: string,
  stopTimes: StopTime[]
}
