import { Dispatch } from 'redux';

// Store
import { RootState } from 'redux/store';
import {
  getLocationHourlyWeather,
  getLocationThreeHourlyWeather,
  getLocationDailyWeather,
  getLocationHourlyAirQuality,
  getLocationDailyAirQuality
} from 'redux/actionCreators/location';

export enum WeatherType {
  hourly = 'hourly',
  threeHourly = 'threeHourly',
  daily = 'daily'
}

export enum AirQualityType {
  hourly = 'hourly',
  daily = 'daily'
}

export const selectLocationWeather = (
  { location: { weather } }: RootState,
  selectedForecastType: WeatherType | AirQualityType
) => {
  switch (selectedForecastType) {
    case WeatherType.hourly:
    default:
      return weather.hourly;
    case WeatherType.threeHourly: {
      return weather.threeHourly;
    }
    case WeatherType.daily: {
      return weather.daily;
    }
  }
};

export const selectLocationAirQuality = (
  { location: { airQuality } }: RootState,
  selectedForecastType: WeatherType | AirQualityType
) => {
  switch (selectedForecastType) {
    case AirQualityType.hourly:
    default:
      return airQuality.hourly;
    case AirQualityType.daily: {
      return airQuality.daily;
    }
  }
};

export const getLocationWeather = (
  query: string,
  selectedForecastType: WeatherType | AirQualityType,
  dispatch: Dispatch<any>
) => {
  switch (selectedForecastType) {
    case WeatherType.hourly:
    default:
      dispatch(getLocationHourlyWeather(query));
      break;
    case WeatherType.threeHourly: {
      dispatch(getLocationThreeHourlyWeather(query));
      break;
    }
    case WeatherType.daily: {
      dispatch(getLocationDailyWeather(query));
      break;
    }
  }
};

export const getLocationAirQuality = (
  query: string,
  selectedForecastType: WeatherType | AirQualityType,
  dispatch: Dispatch<any>
) => {
  switch (selectedForecastType) {
    case AirQualityType.hourly:
    default:
      dispatch(getLocationHourlyAirQuality(query));
      break;
    case AirQualityType.daily: {
      dispatch(getLocationDailyAirQuality(query));
      break;
    }
  }
};
