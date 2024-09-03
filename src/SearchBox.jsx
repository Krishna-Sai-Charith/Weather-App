import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState('');
  const url = "http://api.weatherapi.com/v1/current.json";
  const apiKey = "9770cf516b264cb4bfb120503240209";

  async function getWeather() {
    let response = await fetch(`${url}?key=${apiKey}&q=${city}`);
    let json = await response.json();
    let result = {
      temp: json.current.temp_c,
      condition: json.current.condition.text,
      icon: json.current.condition.icon,
      location: json.location.name,
      region: json.location.region,
      time: json.location.localtime,
      feelslike: json.current.feelslike_c,
      country: json.location.country
    };
    console.log(result);
    return result;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    let newInfo = await getWeather(); // Wait for the data to be fetched
    console.log(city);
    setCity('');
    updateInfo(newInfo);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City" variant="outlined" value={city} onChange={handleChange} required />
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
      </form>
    </>
  )
}

export default SearchBox;
