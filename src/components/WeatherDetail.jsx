import { useParams } from "react-router-dom";

const WeatherDetail = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Weather Detail for ID: {id}</h1>
    </>
  );
};

export default WeatherDetail;
