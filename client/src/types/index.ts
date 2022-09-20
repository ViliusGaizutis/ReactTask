export interface AuthorizationRequest {
  user?: string;
  password?: string;
}

export interface AuthorizationResponse {
  data: {
    status: HttpResponseStatus;
  };
}
export interface AuthenticationResponse {
  data: {
    status: HttpResponseStatus;
    token: string;
  };
}

export interface LocationInfoResponse {
  data: LocationInfo;
}

export type LocationAllResponse = LocationInfoResponse & {
  data: {
    locations?: LocationInfo[];
    current?: WeatherInfo;
    forecast?: WeatherInfo[];
  };
};

export type HttpResponseStatus = 'success' | 'fail';

export type AccessToken = null | string | undefined;

export interface LocationInfo {
  id?: number;
  name?: string;
  country?: string;
  timezone?: string;
  language?: string;
  adminArea?: string;
  adminArea2?: string;
  adminArea3?: string;
  lon?: number;
  lat?: number;
  state?: string;
}

export interface WeatherInfo {
  date?: string;
  time?: string;
  symbol?: string;
  symbolPhrase?: string;
  temperature?: number;
  maxTemp?: number;
  minTemp?: number;
  maxFeelsLikeTemp?: number;
  minFeelsLikeTemp?: number;
  feelsLikeTemp?: number;
  relHumidity?: number;
  maxRelHumidity?: number;
  minRelHumidity?: number;
  dewPoint?: number;
  maxDewPoint?: number;
  minDewPoint?: number;
  windSpeed?: number;
  maxWindSpeed?: number;
  windDir?: number;
  windDirString?: string;
  windGust?: number;
  maxWindGust?: number;
  precipProb?: number;
  precipRate?: number;
  precipType?: string;
  precipAccum?: number;
  snowRate?: number;
  snowAccum?: number;
  cloudiness?: number;
  thunderProb?: number;
  sunrise?: string;
  sunset?: string;
  sunriseEpoch?: number;
  sunsetEpoch?: number;
  moonrise?: string;
  moonset?: string;
  moonPhase?: number;
  uvIndex?: number;
  solarRadiation?: number;
  solarRadiationSum?: number;
  pressure?: number;
  confidence?: string;
  visibility?: number;
  minVisibility?: number;
}

export type Theme = 'light' | 'dark';

export interface StylesProps {
  themeType?: string;
}
