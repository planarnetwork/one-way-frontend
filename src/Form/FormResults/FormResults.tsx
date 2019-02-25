import * as React from "react";

export function FormResults({ results, loading }: FormResultsProps) {

  return (
    <div>
      <h1>Results</h1>
      <p>{ loading }</p>
    </div>
  );
}

export interface FormResultsProps {
  results: any[],
  loading: boolean
}
