
import stops from "../Data/stops.json";

const stopNames: Record<string, string> = stops.reduce((index, [id, name]) => {
  index[id] = name;

  return index;
}, {} as Record<string, string>);

export function stopName(stopId: string): string {
  return stopNames[stopId];
}
