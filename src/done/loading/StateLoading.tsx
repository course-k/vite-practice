import { useEffect, useState } from "react";

const url =
  "https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m&timezone=Asia%2FTokyo";
interface WeatherData {
  // API レスポンスの型定義
  hourly: {
    temperature_2m: number[];
    time: string[];
  };
  // その他の必要なプロパティ
}
const StateLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<WeatherData>();

  const fetchData = async () => {
    console.log("start");
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setData(result);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  } else {
    return (
      <>
        <h2>Temperature Forecast</h2>
        {data && data.hourly && (
          <ul>
            {data.hourly.time.map((time, index) => (
              <li key={time}>
                {time}: {data.hourly.temperature_2m[index]}°C
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
};

export default StateLoading;
