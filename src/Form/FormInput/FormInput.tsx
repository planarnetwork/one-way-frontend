import { useEffect, useState } from "react";
import * as React from "react";

export function FormInput({ onChange }: FormInputProps) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("1400");

  useEffect(() => onChange({ origin, destination, date, time }));

  return (
    <div>
      <input placeholder="origin" value={origin} onChange={e => setOrigin(e.target.value)} name="origin" type="text"/>
      <input placeholder="destination" value={destination} onChange={e => setDestination(e.target.value)} name="destination" type="text"/>
      <input placeholder="date" value={date.toJSON().slice(0, 10)} onChange={e => setDate(new Date(e.target.value))} name="date" type="date"/>
      <input placeholder="time" value={time} onChange={e => setTime(e.target.value)} name="time" type="text"/>
    </div>
  )
}

export interface FormData {
  origin: string,
  destination: string,
  date: Date,
  time: string
}

export interface FormInputProps {
  onChange: (input: FormData) => any;
}
