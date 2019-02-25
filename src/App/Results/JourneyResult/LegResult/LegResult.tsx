
import * as React from "react";

export function LegResult({ leg }: LegResultProps) {
  return (
    <div>
      {leg.origin} - {leg.destination}
    </div>
  );
}

export interface LegResultProps {
  leg: Leg
}

export interface Leg {
  origin: string,
  destination: string
}
