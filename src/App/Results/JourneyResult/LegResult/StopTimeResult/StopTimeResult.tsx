
import * as React from "react";
import { toTimeString } from "../../../../../Util/time";

export function StopTimeResult({ stopTime }: StopTimeResultProps) {
  return (
    <li>
      {stopTime.dropOff ? toTimeString(stopTime.arrivalTime) : "--:--"}
      {stopTime.pickUp ? toTimeString(stopTime.departureTime) : "--:--"}
      {stopTime.stop}
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
