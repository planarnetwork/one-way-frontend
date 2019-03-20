import * as React from "react";
import { useState, useEffect } from "react";
import { StopData, StopSelector } from "./StopSelector/StopSelector";

export function Form({ onSubmit, stops }: FormInputProps) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("1400");

  useEffect(() => {
    if (origin.length > 2 && destination.length > 2 && time.length === 4) {
      onSubmit({ origin, destination, date, time });
    }
  }, [origin, destination, date, time]);

  return (
    <div>
      <StopSelector id="origin" value={origin} onChange={setOrigin} stops={stops} />
      <StopSelector id="destination" value={destination} onChange={setDestination} stops={stops} />
      {/*<input placeholder="origin" value={origin} onChange={e => setOrigin(e.target.value)} name="origin" type="text"/>*/}
      {/*<input placeholder="destination" value={destination} onChange={e => setDestination(e.target.value)} name="destination" type="text"/>*/}
      <input placeholder="date" value={date.toJSON().slice(0, 10)} onChange={e => setDate(new Date(e.target.value))} name="date" type="date"/>
      <input placeholder="time" value={time} onChange={e => setTime(e.target.value)} name="time" type="text"/>
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
  date: Date,
  time: string
}
