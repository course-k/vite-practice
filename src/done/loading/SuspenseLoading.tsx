import { Suspense } from "react";

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m&timezone=Asia%2FTokyo";

interface WeatherData {
  hourly: {
    temperature_2m: number[];
    time: string[];
  };
}

let weatherData: WeatherData;

const fetchWeatherData = async (): Promise<WeatherData> => {
  const res = await fetch(url);
  const data = await res.json();
  weatherData = data;
  return data;
};

const WeatherDataComponent = () => {
  if (!weatherData) {
    throw fetchWeatherData();
  }

  return (
    <>
      <h2>Temperature Forecast</h2>
      {weatherData.hourly && (
        <ul>
          {weatherData.hourly.time.map((time, index) => (
            <li key={time}>
              {time}: {weatherData.hourly.temperature_2m[index]}°C
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const SuspenseLoading = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <WeatherDataComponent />
    </Suspense>
  );
};

export default SuspenseLoading;
