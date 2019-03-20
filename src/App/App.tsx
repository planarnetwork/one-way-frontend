import * as React from "react";
import { AxiosInstance } from "axios";
import { Form, FormData } from "./Form/Form";
import { useState } from "react";
import { Results } from "./Results/Results";
import "./App.css";

export function App({ api }: AppProps) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function onFormSubmit(form: FormData) {
    setLoading(true);

    const params = Object
      .entries(form)
      .map(kv => kv.join("="))
      .join("&");

    const response = await api("/jp?" + params);

    setResults(response.data.data.journeys);
    setLoading(false);
  }

  return (
    <div className="App">
      <Form onSubmit={onFormSubmit}/>
      <Results results={results} loading={loading}/>
    </div>
  )
}

export interface AppProps {
  api: AxiosInstance
}
