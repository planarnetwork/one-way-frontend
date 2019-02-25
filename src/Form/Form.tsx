import * as React from "react";
import axios from "axios";
import { FormData, FormInput } from "./FormInput/FormInput";
import { useState } from "react";
import { FormResults } from "./FormResults/FormResults";


export function Form() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  function onFormInputChange(form: FormData) {
    console.log(form);

    if (form.origin.length > 2 && form.destination.length > 2 && form.time.length === 4) {
      getJourneys(form);
    }
  }

  async function getJourneys(form: FormData) {
    setLoading(true);
    const params = Object.entries(form).map(kv => `${kv[0]}=${kv[1]}`).join("&");
    const response = await axios("/jp?" + params);
    console.log(response);
    setLoading(false);
    setResults(response.data.journeys);
  }

  return (
    <div>
      <FormInput onChange={onFormInputChange}/>
      <FormResults results={results} loading={loading}/>
    </div>
  )
}
