
import * as React from "react";
import { toTimeString } from "../../../../../Util/time";
import { stopName } from "../../../../../Util/stop";

export function StopTimeResult({ stopTime }: StopTimeResultProps) {
  return (
    <li>
      {stopTime.dropOff ? toTimeString(stopTime.arrivalTime) : toTimeString(stopTime.departureTime) }
      {" " + stopName(stopTime.stop)}
    </li>
  );
}

export interface StopTimeResultProps {
  stopTime: StopTime
}

export interface StopTime {
  stop: string,
  departureTime: number,
  arrivalTime: number,
  pickUp: boolean,
  dropOff: boolean
}
