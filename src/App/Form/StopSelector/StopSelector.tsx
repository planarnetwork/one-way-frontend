import React, { useState } from "react";
import './StopSelector.css';

const Autosuggest = require("react-autosuggest");

export function StopSelector({ id, value, stops, onChange }: StopSelectorProps) {
  const [suggestions, setSuggestions] = useState(stops.data);
  const [inputValue, setInputValue] = useState('');

  const onSelectedChange = (event: any, { suggestion }: any) => {
    onChange(suggestion.id);
  };

  const onInputChange = (event: any, { newValue }: any) => {
    setInputValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value } : any) => {
    const inputValue = value.trim().toUpperCase();
    const inputLength = inputValue.length;
    const results = inputLength < 3 ? [] : stops.data.filter(l =>
      (inputLength <= 4 && inputValue === l.code) || l.name.toUpperCase().startsWith(inputValue)
    );

    setSuggestions(results);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions(stops.data);
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

function getSuggestionValue(suggestion: Stop) {
  return suggestion.name;
}

function renderSuggestion(suggestion: Stop) {
  return (
    <span>{suggestion.name}</span>
  );
}

export interface StopData {
  data: Stop[]
}

export interface Stop {
  name: string,
  description: string,
  longitude: string,
  latitude: string,
  id: string,
  code: string
}

export interface StopSelectorProps {
  id: string,
  value: string,
  stops: StopData,
  onChange: (value: string) => any
}
