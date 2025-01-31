import { HTMLInputTypeAttribute, ChangeEvent } from 'react';

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
    forecast?: WeatherInfo[] | AirQualityInfo[];
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

export interface AirQualityInfo {
  date?: string;
  time?: string;
  AQI?: number;
  pollutant?: string;
  pollutantPhrase?: string;
  AQI_CO?: number;
  AQI_NO2?: number;
  AQI_O3?: number;
  AQI_GO3?: number;
  AQI_SO2?: number;
  AQI_PM2P5?: number;
  AQI_PM10?: number;
}

export type Theme = 'light' | 'dark';

export interface StylesProps {
  themeType?: string;
}

export type ChangeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export type InputType = 'input' | 'textarea' | 'radio' | 'rating';

export type InputOptions = Record<string, string | number>;

export type InputValidation = {
  [InputValidator.required]: boolean;
  [InputValidator.minLength]: number;
  [InputValidator.maxLength]: number;
};

export enum InputValidator {
  required = 'required',
  minLength = 'minLength',
  maxLength = 'maxLength'
}

export interface InputProps {
  id?: string;
  name?: string;
  value?: string | number;
  inputType?: InputType;
  inputConfig?: {
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    rows?: number;
    options?: InputOptions;
  };
  valid?: boolean;
  errMsg?: string;
  theme?: string;
  onChange?: (e: ChangeEventType) => void;
  onFocus?: (e: ChangeEventType) => void;
  handleClearValue?: (e: ChangeEventType) => void;
  clearEnabled?: boolean;
}

export enum FeedbackFormInput {
  name = 'name',
  rating = 'rating',
  reason = 'reason',
  suggestion = 'suggestion',
  recommendation = 'recommendation',
  more = 'more'
}

export type Feedback = {
  [FeedbackFormInput.name]: string;
  [FeedbackFormInput.rating]: number;
  [FeedbackFormInput.reason]: string;
  [FeedbackFormInput.suggestion]: string;
  [FeedbackFormInput.recommendation]: string;
  [FeedbackFormInput.more]: string;
  timestamp: Date;
};
