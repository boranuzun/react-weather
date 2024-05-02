import { useParams, useLocation } from "react-router-dom";

const WeatherDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = queryParams.get("lat");
  const longitude = queryParams.get("lon");

  return (
    <>
      <h1>Weather Detail for ID: {id}</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </>
  );
};

export default WeatherDetail;
