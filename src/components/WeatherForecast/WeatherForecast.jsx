import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';
import './WeatherForecast.css';

function WeatherForecast({forecast}) {
  return (
    <div className="weather">
      <WeatherData day={forecast.day} conditions={forecast.conditions} time={forecast.time} />
      <WeatherIcon img={forecast.img} imgAlt={forecast.imgAlt} />
    </div>
  );
}

export default WeatherForecast;
