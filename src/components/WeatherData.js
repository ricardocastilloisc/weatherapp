import  React  from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtrainfo from './WeatherExtraInfo';

const WeatherData = () => (
<div>
<WeatherTemperature></WeatherTemperature>
<WeatherExtrainfo humidity={80} wind={'10m/s'} ></WeatherExtrainfo>
</div>
);

export default WeatherData;