import * as React from "react";
import { JourneyResult } from "./JourneyResult/JourneyResult";

export function Results({ results, loading }: FormResultsProps) {
  return (
    <div>
      <h1>Results</h1>
      <div>{ loading ? "Loading" : results.map((j, i) => <JourneyResult key={i} journey={j} />)}</div>
    </div>
  );
}

export interface FormResultsProps {
  results: any[],
  loading: boolean
}
