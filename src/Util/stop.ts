
import * as stops from "../Data/stops.json";

const stopNames: Record<string, string> = stops.data.reduce((index, stop) => {
  index[stop.id] = stop.name;

  return index;
}, {} as Record<string, string>);

export function stopName(stopId: string): string {
  return stopNames[stopId];
}
