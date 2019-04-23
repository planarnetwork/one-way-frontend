import * as React from "react";
import { useState, useEffect } from "react";
import { StopData, StopSelector } from "./StopSelector/StopSelector";

import "./Form.css";

export function Form({ onSubmit, stops }: FormInputProps) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("0600");

  useEffect(() => {
    if (origin.length > 2 && destination.length > 2 && time.length === 4) {
      onSubmit({ origin, destination, time, date: date.toISOString().substr(0, 10) });
    }
  }, [origin, destination, date, time]);

  return (
    <div className="row Form">
      <StopSelector id="origin" value={origin} onChange={setOrigin} stops={stops} />
      <StopSelector id="destination" value={destination} onChange={setDestination} stops={stops} />
      <div className="col-3">
        <input placeholder="date" value={date.toJSON().slice(0, 10)} onChange={e => setDate(new Date(e.target.value))} name="date" type="date"/>
      </div>
      <div className="col-3">
        <input placeholder="time" value={time} onChange={e => setTime(e.target.value)} name="time" type="text"/>
      </div>
    </div>
  )
}

export interface FormInputProps {
  onSubmit: (form: FormData) => any,
  stops: StopData
}

export interface FormData {
  origin: string,
  destination: string,
  date: string,
  time: string
}
