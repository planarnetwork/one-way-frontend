import * as React from "react";
import axios from "axios";
import { Form, FormData } from "./Form/Form";
import { useState, useEffect } from "react";
import { Results } from "./Results/Results";
import "./App.css";

export function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function onFormSubmit(form: FormData) {
    setLoading(true);

    const params = Object
      .entries(form)
      .map(kv => kv.join("="))
      .join("&");

    const response = await axios("/jp?" + params);

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
