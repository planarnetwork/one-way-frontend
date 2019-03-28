import React, { useState } from "react";
import './StopSelector.css';

const Autosuggest = require("react-autosuggest");

export function StopSelector({ id, value, stops, onChange }: StopSelectorProps) {
  const [suggestions, setSuggestions] = useState(stops);
  const [inputValue, setInputValue] = useState('');

  const onSelectedChange = (event: any, { suggestion }: any) => {
    onChange(suggestion[0]);
  };

  const onInputChange = (event: any, { newValue }: any) => {
    setInputValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value } : any) => {
    const inputValue = value.trim().toUpperCase();
    const inputLength = inputValue.length;
    const results = inputLength < 3 ? [] : stops.filter(([id, name]) =>
      name.toUpperCase().startsWith(inputValue)
    );

    setSuggestions(results);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions(stops);
  };

  return (
    <div className="col-3">
      <Autosuggest
        highlightFirstSuggestion={true}
        suggestions={suggestions}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSelectedChange}
        inputProps={{
          value: inputValue,
          id: id,
          placeholder: id,
          onChange: onInputChange
        }}
      />
    </div>
  );
}

function getSuggestionValue([id, name]: Stop) {
  return name;
}

function renderSuggestion([id, name]: Stop) {
  return (
    <span>{name}</span>
  );
}

export type StopData = Stop[];

export type Stop = [string, string];

export interface StopSelectorProps {
  id: string,
  value: string,
  stops: StopData,
  onChange: (value: string) => any
}
