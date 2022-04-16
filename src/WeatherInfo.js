import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  console.log(props);
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row mt-4">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={68} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="datatext m-4">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
