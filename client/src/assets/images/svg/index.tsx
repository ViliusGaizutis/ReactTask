import React, { FunctionComponent } from 'react';

import * as S from 'styles/global';

export const IconSearch: FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="-1 -1 23.5 23.5">
    <path d="M11 22C4.935 22 0 17.065 0 11S4.935 0 11 0s11 4.935 11 11-4.935 11-11 11zm0-20c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9z" />
    <path d="M23 24a.997.997 0 0 1-.707-.293l-4.795-4.795a1 1 0 0 1 1.415-1.414l4.794 4.795A.999.999 0 0 1 23 24z" />
  </svg>
);

export const IconLocation: FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
    <path
      d="M14 2.25c5.385 0 9.75 4.365 9.75 9.75 0 4.12-2.895 8.61-8.61 13.518a1.75 1.75 0 0 1-2.283-.002l-.378-.328C7.017 20.408 4.25 16.028 4.25 12c0-5.385 4.365-9.75 9.75-9.75Zm0 6a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
      fillRule="nonzero"
    />
  </svg>
);

export const IconLightMode: FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.4 395.4" xmlSpace="preserve">
    <path d="m358.27 229.48 37.13-31.78-37.13-31.78a7.999 7.999 0 0 1-2.12-9.3l19.69-44.72-47.25-12.45a7.993 7.993 0 0 1-5.96-7.46l-1.66-48.85-48 9.21a8.004 8.004 0 0 1-8.59-4.15L241.69 4.93l-39.22 29.19a7.995 7.995 0 0 1-9.55 0L153.71 4.93 131.02 48.2a8.004 8.004 0 0 1-8.59 4.15l-48-9.21-1.66 48.85a7.993 7.993 0 0 1-5.96 7.46L19.56 111.9l19.69 44.72c1.42 3.23.56 7.01-2.12 9.3L0 197.7l37.13 31.78a7.999 7.999 0 0 1 2.12 9.3L19.56 283.5l47.25 12.45c3.42.9 5.84 3.93 5.96 7.46l1.66 48.85 48-9.21a8.002 8.002 0 0 1 8.59 4.15l22.69 43.27 39.21-29.19a7.995 7.995 0 0 1 9.55 0l39.22 29.19 22.69-43.27a8.004 8.004 0 0 1 8.59-4.15l48 9.21 1.66-48.85a7.993 7.993 0 0 1 5.96-7.46l47.25-12.45-19.69-44.72a7.999 7.999 0 0 1 2.12-9.3zM197.7 345.7c-81.61 0-148-66.39-148-148s66.39-148 148-148 148 66.39 148 148-66.39 148-148 148z" />
    <path d="M197.7 65.7c-72.79 0-132 59.21-132 132s59.21 132 132 132c72.78 0 132-59.21 132-132s-59.22-132-132-132z" />
  </svg>
);

export const IconDarkMode: FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <g>
      <path
        d="M225.742 147.182C226.32 145.808 227.122 144.54 228.154 143.396C231.374 140.176 236.427 139.144 240.679 140.979C242.171 141.557 243.321 142.359 244.465 143.396C245.503 144.54 246.305 145.808 246.882 147.182C247.454 148.562 247.796 150.054 247.796 151.551C247.796 153.043 247.454 154.535 246.882 155.915C246.304 157.295 245.502 158.557 244.465 159.707C243.321 160.739 242.171 161.541 240.679 162.119C239.299 162.691 237.807 163.039 236.31 163.039C233.208 163.039 230.336 161.771 228.154 159.707C227.122 158.557 226.32 157.295 225.742 155.915C225.17 154.535 224.822 153.043 224.822 151.551C224.822 150.054 225.17 148.562 225.742 147.182Z"
        fill="black"
      />
      <path
        d="M101.795 51.499C106.164 47.247 113.742 47.247 118.106 51.499C119.144 52.643 119.946 53.793 120.523 55.285C121.095 56.665 121.437 58.157 121.437 59.654C121.437 62.638 120.175 65.628 118.105 67.81C115.923 69.874 113.051 71.142 109.95 71.142C108.458 71.142 106.966 70.794 105.586 70.222C104.094 69.644 102.832 68.842 101.794 67.81C101.334 67.232 100.762 66.66 100.42 65.97C99.96 65.398 99.612 64.708 99.382 64.018C99.04 63.328 98.81 62.638 98.692 61.948C98.58 61.146 98.462 60.456 98.462 59.654C98.464 56.665 99.731 53.681 101.795 51.499Z"
        fill="black"
      />
      <path
        d="M78.821 212.319C82.041 209.099 87.094 208.067 91.346 209.902C92.72 210.48 93.988 211.282 95.132 212.319C97.202 214.501 98.464 217.485 98.464 220.475C98.464 221.277 98.352 221.967 98.234 222.769C98.122 223.459 97.892 224.149 97.55 224.839C97.32 225.529 96.972 226.219 96.512 226.909C96.17 227.481 95.592 228.053 95.132 228.631C93.988 229.663 92.72 230.465 91.346 231.043C89.966 231.615 88.474 231.963 86.977 231.963C83.993 231.963 81.003 230.695 78.821 228.631C78.361 228.053 77.789 227.481 77.447 226.909C76.987 226.219 76.639 225.529 76.409 224.839C76.067 224.149 75.837 223.459 75.719 222.769C75.607 221.967 75.489 221.277 75.489 220.475C75.489 217.485 76.757 214.501 78.821 212.319Z"
        fill="black"
      />
      <path
        d="M3.728 324.739C7.205 321.559 12.253 320.813 16.488 322.871C49.34 338.772 84.648 346.832 121.437 346.832C254.453 346.832 362.667 238.619 362.667 105.602C362.667 76.088 357.4 47.258 347.012 19.926C345.341 15.523 346.518 10.553 349.99 7.37301C353.467 4.18701 358.527 3.43501 362.75 5.50501C453.415 49.379 512 142.779 512 243.449C512 389.13 393.477 507.653 247.796 507.653C138.758 507.653 39.474 439.19 0.75 337.293C-0.922 332.889 0.255997 327.92 3.728 324.739ZM247.796 484.678C380.812 484.678 489.026 376.465 489.026 243.448C489.026 161.019 446.016 83.935 377.436 40.006C382.888 61.326 385.642 83.285 385.642 105.603C385.642 251.284 267.119 369.807 121.438 369.807C91.183 369.807 61.837 364.826 33.849 354.96C75.007 433.558 157.756 484.678 247.796 484.678Z"
        fill="black"
      />
      <path
        d="M247.796 484.678C380.812 484.678 489.026 376.465 489.026 243.448C489.026 161.019 446.016 83.935 377.436 40.006C382.888 61.326 385.642 83.285 385.642 105.603C385.642 251.284 267.119 369.807 121.438 369.807C91.183 369.807 61.837 364.826 33.849 354.96C75.007 433.558 157.756 484.678 247.796 484.678Z"
        fill="black"
      />
    </g>
  </svg>
);

export const IconMenu: FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.2 490.2" xmlSpace="preserve">
    <path d="M128.4 106.5c0 12.1-9.8 21.9-21.9 21.9H21.9C9.8 128.4 0 118.6 0 106.5V21.9C0 9.8 9.8 0 21.9 0h84.6c12.1 0 21.9 9.8 21.9 21.9v84.6zm180.9-84.6c0-12.1-9.8-21.9-21.9-21.9h-84.6c-12.1 0-21.9 9.8-21.9 21.9v84.6c0 12.1 9.8 21.9 21.9 21.9h84.6c12.1 0 21.9-9.8 21.9-21.9V21.9zm180.9 0c0-12.1-9.8-21.9-21.9-21.9h-84.6c-12.1 0-21.9 9.8-21.9 21.9v84.6c0 12.1 9.8 21.9 21.9 21.9h84.6c12.1 0 21.9-9.8 21.9-21.9V21.9zM309.3 202.8c0-12.1-9.8-21.9-21.9-21.9h-84.6c-12.1 0-21.9 9.8-21.9 21.9v84.6c0 12.1 9.8 21.9 21.9 21.9h84.6c12.1 0 21.9-9.8 21.9-21.9v-84.6zm180.9 0c0-12.1-9.8-21.9-21.9-21.9h-84.6c-12.1 0-21.9 9.8-21.9 21.9v84.6c0 12.1 9.8 21.9 21.9 21.9h84.6c12.1 0 21.9-9.8 21.9-21.9v-84.6zm-361.8 0c0-12.1-9.8-21.9-21.9-21.9H21.9C9.8 180.9 0 190.7 0 202.8v84.6c0 12.1 9.8 21.9 21.9 21.9h84.6c12.1 0 21.9-9.8 21.9-21.9v-84.6zm159 159h-84.6c-12.1 0-21.9 9.8-21.9 21.9v84.6c0 12.1 9.8 21.9 21.9 21.9h84.6c12.1 0 21.9-9.8 21.9-21.9v-84.6c0-12.1-9.8-21.9-21.9-21.9zm96.3 128.4h84.6c12.1 0 21.9-9.8 21.9-21.9v-84.6c0-12.1-9.8-21.9-21.9-21.9h-84.6c-12.1 0-21.9 9.8-21.9 21.9v84.6c0 12.1 9.8 21.9 21.9 21.9zM106.5 361.8H21.9C9.8 361.8 0 371.6 0 383.7v84.6c0 12.1 9.8 21.9 21.9 21.9h84.6c12.1 0 21.9-9.8 21.9-21.9v-84.6c0-12.1-9.8-21.9-21.9-21.9z" />
  </svg>
);

export const IconStar: FunctionComponent = () => (
  <svg viewBox="-0.5 -0.5 32 31" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.44163 29.7159C7.75379 29.649 7.08726 29.4404 6.48396 29.1033C5.88067 28.7662 5.35368 28.3079 4.9362 27.7572C4.51871 27.2065 4.21973 26.5753 4.05814 25.9033C3.89654 25.2314 3.87581 24.5333 3.99722 23.853L4.50216 21.0506C4.59869 20.513 4.56321 19.9601 4.39881 19.4392C4.23442 18.9184 3.94599 18.4453 3.55834 18.0606L1.53777 16.057C0.876064 15.4011 0.411099 14.5731 0.195463 13.6667C-0.0201736 12.7603 0.0221055 11.8117 0.31755 10.9281C0.612995 10.0444 1.14984 9.26114 1.86729 8.66672C2.58474 8.07231 3.45419 7.69051 4.37733 7.56451L7.19838 7.17908C7.73918 7.1053 8.25393 6.90118 8.69831 6.58427C9.14269 6.26736 9.50338 5.84715 9.74929 5.35988L11.0312 2.81558C11.4509 1.98389 12.0948 1.28618 12.8902 0.801283C13.6857 0.31639 14.6009 0.0636626 15.5324 0.0716644C16.464 0.0796662 17.3747 0.34806 18.1617 0.846546C18.9487 1.34503 19.5805 2.05373 19.9859 2.89251L21.2232 5.45618C21.4605 5.9484 21.814 6.37546 22.2532 6.70055C22.6924 7.02564 23.2042 7.23896 23.7443 7.32213L26.5574 7.75481C27.4783 7.89656 28.3411 8.29314 29.0483 8.89972C29.7555 9.50629 30.2789 10.2987 30.5592 11.1872C30.8395 12.0757 30.8657 13.025 30.6346 13.9276C30.4036 14.8302 29.9246 15.6501 29.2518 16.2947L27.1965 18.2642C26.802 18.6415 26.5053 19.1092 26.3321 19.6269C26.1589 20.1446 26.1144 20.6967 26.2025 21.2355L26.6588 24.0473C26.8083 24.9667 26.6975 25.9096 26.3391 26.7693C25.9807 27.6291 25.389 28.3714 24.6308 28.9124C23.8725 29.4534 22.978 29.7715 22.0485 29.8308C21.1189 29.8901 20.1913 29.6881 19.3705 29.2478L16.8617 27.9023C16.3808 27.6431 15.844 27.5051 15.2977 27.5002C14.7515 27.4953 14.2122 27.6237 13.7268 27.8742L11.1951 29.1775C10.3475 29.6161 9.39202 29.8029 8.44163 29.7159V29.7159Z"
      fill="black"
    />
  </svg>
);

export const IconChevron: FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve">
    <path d="M502.689 324.653 269.957 150.109a23.272 23.272 0 0 0-27.927 0L9.311 324.653c-10.282 7.713-12.367 22.3-4.655 32.582 4.572 6.097 11.56 9.311 18.637 9.311 4.858 0 9.759-1.517 13.945-4.656l218.758-164.072L474.763 361.89c10.285 7.714 24.871 5.627 32.582-4.655 7.711-10.282 5.626-24.87-4.656-32.582z" />
  </svg>
);

export const IconAirQuality: FunctionComponent = () => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M198.91 155.31h8.26a30.81 30.81 0 0 0 30.77-30.77v-.34h-18v.34a12.79 12.79 0 0 1-12.77 12.77h-8.26a12.79 12.79 0 0 1-12.77-12.77V92.76A12.79 12.79 0 0 1 198.91 80h8.26a12.79 12.79 0 0 1 12.77 12.77h18A30.81 30.81 0 0 0 207.17 62h-8.26a30.8 30.8 0 0 0-30.77 30.77v31.78a30.8 30.8 0 0 0 30.77 30.76ZM283.47 155.31a34.94 34.94 0 0 0 34.9-34.9V96.89a34.9 34.9 0 1 0-69.8 0v23.52a34.93 34.93 0 0 0 34.9 34.9Zm-16.9-58.42a16.9 16.9 0 1 1 33.8 0v23.52a16.9 16.9 0 1 1-33.8 0ZM362.8 155.25l-17.13 5.44a20.44 20.44 0 0 0 6.18 39.92h27.4v-18h-27.4a2.44 2.44 0 0 1-.73-4.76l17.13-5.44a21.64 21.64 0 0 0 15.14-20.69v-2.13a21.74 21.74 0 0 0-21.72-21.71h-8.54a21.74 21.74 0 0 0-21.71 21.71v2.63h18v-2.63a3.72 3.72 0 0 1 3.71-3.71h8.54a3.72 3.72 0 0 1 3.72 3.71v2.13a3.69 3.69 0 0 1-2.59 3.53ZM227.17 197.14a69.65 69.65 0 0 1 66.56 49.92 25.71 25.71 0 0 0 25 18.6h.14a53.1 53.1 0 0 1 53.08 54 51.68 51.68 0 0 1-5.07 21.34 59.37 59.37 0 0 1 16.61 7 69.36 69.36 0 0 0 6.44-28 71.1 71.1 0 0 0-71.08-72.3h-.18A7.86 7.86 0 0 1 311 242a87.33 87.33 0 0 0-167.69 0 7.87 7.87 0 0 1-7.68 5.62h-.16A71.1 71.1 0 0 0 64.41 320c.64 38.52 33 69.87 72.09 69.87h28.64a59.43 59.43 0 0 1 5.92-18H136.5c-29.35 0-53.62-23.41-54.1-52.17a53.1 53.1 0 0 1 53.08-54h.18a26.81 26.81 0 0 0 5.26-.53 37.07 37.07 0 0 1 10.05 25l20.33-.58a56.61 56.61 0 0 0-13.56-36 26 26 0 0 0 2.86-6.42 69.66 69.66 0 0 1 66.57-50.03Z" />
    <path d="M354.22 356.33a32.91 32.91 0 0 0-13.34 26.05l-18-.51a50.25 50.25 0 0 1 17-37 54.55 54.55 0 0 0-103.78 3 11.76 11.76 0 0 1-11.38 8.44h-.1a43.23 43.23 0 0 0-43.23 44c.39 23.71 20.23 42.5 43.94 42.5h126.25c23.71 0 43.55-18.79 43.95-42.5a43.23 43.23 0 0 0-41.31-43.98Z" />
  </svg>
);

export const IconBlobOne: FunctionComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M156.3 152.2c16-11.9 27.9-32.1 23.9-48.2-4-16.2-23.8-28.3-39.9-32.7-16-4.4-28.1-.9-42.5-3.2-14.4-2.2-31.1-10.1-38.4-5.7-7.4 4.3-5.6 21-4.9 37 .6 15.9 0 31.3 7.4 43.3 7.4 11.9 22.8 20.5 40.5 22.9 17.7 2.4 37.9-1.4 53.9-13.4Z" />
  </svg>
);

export const IconBlobTwo: FunctionComponent = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M137.8 32.9c12.5 8.7 24.7 16.4 34.9 27.4s18.5 25.3 17.7 39.3c-.7 13.9-10.4 27.4-19.6 40.3-9.1 12.9-17.6 25.3-29.3 34.8-11.7 9.5-26.6 16.2-42.3 17.6-15.8 1.5-32.3-2.4-45.1-11.3-12.7-8.9-21.6-22.9-27.6-37.2-6-14.4-9-29.1-10.6-44.7-1.5-15.6-1.5-32 5.9-44 7.3-12 22-19.4 36.3-27.1 14.3-7.8 28.1-15.7 41.3-14.8 13.3 1 26 10.9 38.4 19.7Z" />
  </svg>
);

interface WaveProps {
  reversed?: boolean;
}

export const Wave: FunctionComponent<WaveProps> = ({ reversed }) => (
  <S.Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" reversed={reversed}>
    <path d="M0,192L34.3,208C68.6,224,137,256,206,245.3C274.3,235,343,181,411,186.7C480,192,549,256,617,240C685.7,224,754,128,823,106.7C891.4,85,960,139,1029,160C1097.1,181,1166,171,1234,181.3C1302.9,192,1371,224,1406,240L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z" />
  </S.Wave>
);

export const FeedbackHeroImg: FunctionComponent = () => (
  <svg viewBox="0 0 844 641" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_2)">
      <path
        d="M424.443 -1.90735e-06H48.125C35.3658 0.0143648 23.1334 5.0893 14.1113 14.1114C5.08923 23.1335 0.0143349 35.366 0 48.1251V490.001C0.0143376 502.76 5.08925 514.993 14.1113 524.015C23.1334 533.037 35.3659 538.112 48.125 538.126H424.443C437.203 538.112 449.435 533.037 458.457 524.015C467.479 514.993 472.554 502.76 472.568 490.001V48.1251C472.554 35.366 467.479 23.1335 458.457 14.1114C449.435 5.0893 437.203 0.0143648 424.443 -1.90735e-06V-1.90735e-06Z"
        fill="#F2F2F2"
      />
      <path
        d="M424.444 13.8542H48.125C39.0389 13.8644 30.3279 17.4783 23.903 23.9032C17.4782 30.328 13.8642 39.039 13.854 48.1251V490.001C13.8642 499.087 17.4782 507.798 23.903 514.223C30.3279 520.648 39.0389 524.262 48.125 524.272H424.444C433.53 524.262 442.241 520.648 448.666 514.223C455.09 507.798 458.704 499.087 458.714 490.001V48.1251C458.704 39.0391 455.09 30.3281 448.666 23.9033C442.241 17.4785 433.53 13.8645 424.444 13.8542V13.8542Z"
        fill="white"
      />
      <path
        d="M367.808 142.34H177.506C175.38 142.34 173.342 141.495 171.839 139.993C170.336 138.49 169.492 136.451 169.492 134.326C169.492 132.2 170.336 130.162 171.839 128.659C173.342 127.156 175.38 126.312 177.506 126.312H367.808C368.86 126.312 369.902 126.519 370.874 126.922C371.847 127.324 372.73 127.915 373.474 128.659C374.219 129.403 374.809 130.287 375.212 131.259C375.614 132.231 375.822 133.273 375.822 134.326C375.822 135.378 375.614 136.42 375.212 137.393C374.809 138.365 374.219 139.248 373.474 139.993C372.73 140.737 371.847 141.327 370.874 141.73C369.902 142.133 368.86 142.34 367.808 142.34V142.34Z"
        fill="#F2F2F2"
      />
      <path
        d="M400.866 169.387H177.506C175.382 169.385 173.346 168.54 171.845 167.037C170.344 165.534 169.501 163.497 169.501 161.373C169.501 159.249 170.344 157.212 171.845 155.71C173.346 154.207 175.382 153.362 177.506 153.359H400.866C402.99 153.362 405.026 154.207 406.527 155.71C408.028 157.212 408.871 159.249 408.871 161.373C408.871 163.497 408.028 165.534 406.527 167.037C405.026 168.54 402.99 169.385 400.866 169.387V169.387Z"
        fill="#F2F2F2"
      />
      <path
        d="M367.808 263.553H177.506C175.38 263.553 173.342 262.709 171.839 261.206C170.336 259.703 169.492 257.665 169.492 255.539C169.492 253.414 170.336 251.375 171.839 249.872C173.342 248.369 175.38 247.525 177.506 247.525H367.808C368.86 247.525 369.902 247.732 370.874 248.135C371.847 248.538 372.73 249.128 373.474 249.872C374.219 250.617 374.809 251.5 375.212 252.472C375.614 253.445 375.822 254.487 375.822 255.539C375.822 256.592 375.614 257.634 375.212 258.606C374.809 259.578 374.219 260.462 373.474 261.206C372.73 261.95 371.847 262.54 370.874 262.943C369.902 263.346 368.86 263.553 367.808 263.553V263.553Z"
        fill="#F2F2F2"
      />
      <path
        d="M400.866 290.601H177.506C175.382 290.599 173.346 289.753 171.845 288.25C170.344 286.748 169.501 284.711 169.501 282.587C169.501 280.463 170.344 278.426 171.845 276.923C173.346 275.42 175.382 274.575 177.506 274.573H400.866C402.99 274.575 405.026 275.42 406.527 276.923C408.028 278.426 408.871 280.463 408.871 282.587C408.871 284.711 408.028 286.748 406.527 288.25C405.026 289.753 402.99 290.599 400.866 290.601V290.601Z"
        fill="#F2F2F2"
      />
      <path
        d="M367.808 384.767H177.506C175.38 384.767 173.342 383.922 171.839 382.419C170.336 380.917 169.492 378.878 169.492 376.753C169.492 374.627 170.336 372.589 171.839 371.086C173.342 369.583 175.38 368.739 177.506 368.739H367.808C368.861 368.737 369.904 368.944 370.877 369.346C371.851 369.748 372.735 370.338 373.48 371.083C374.225 371.827 374.816 372.711 375.22 373.684C375.623 374.657 375.831 375.699 375.831 376.753C375.831 377.806 375.623 378.849 375.22 379.822C374.816 380.794 374.225 381.678 373.48 382.423C372.735 383.167 371.851 383.757 370.877 384.159C369.904 384.561 368.861 384.768 367.808 384.767V384.767Z"
        fill="#F2F2F2"
      />
      <path
        d="M400.866 411.814H177.506C175.382 411.812 173.346 410.967 171.845 409.464C170.344 407.961 169.501 405.924 169.501 403.8C169.501 401.676 170.344 399.639 171.845 398.137C173.346 396.634 175.382 395.789 177.506 395.786H400.866C402.99 395.789 405.026 396.634 406.527 398.137C408.028 399.639 408.871 401.676 408.871 403.8C408.871 405.924 408.028 407.961 406.527 409.464C405.026 410.967 402.99 411.812 400.866 411.814Z"
        fill="#F2F2F2"
      />
      <path
        d="M134.877 181.666H67.5312C66.5124 181.665 65.5356 181.26 64.8152 180.539C64.0948 179.819 63.6896 178.842 63.6885 177.823V117.876C63.6896 116.857 64.0948 115.88 64.8152 115.16C65.5356 114.439 66.5124 114.034 67.5312 114.033H134.877C135.896 114.034 136.873 114.439 137.593 115.16C138.314 115.88 138.719 116.857 138.72 117.876V177.823C138.719 178.842 138.314 179.819 137.593 180.539C136.873 181.26 135.896 181.665 134.877 181.666Z"
        fill="#E6E6E6"
      />
      <path
        d="M134.877 302.879H67.5312C66.5124 302.878 65.5356 302.473 64.8152 301.753C64.0948 301.032 63.6896 300.055 63.6885 299.037V239.089C63.6896 238.071 64.0948 237.094 64.8152 236.373C65.5356 235.653 66.5124 235.248 67.5312 235.247H134.877C135.896 235.248 136.873 235.653 137.593 236.373C138.314 237.094 138.719 238.071 138.72 239.089V299.037C138.719 300.055 138.314 301.032 137.593 301.753C136.873 302.473 135.896 302.878 134.877 302.879V302.879Z"
        fill="#E6E6E6"
      />
      <path
        d="M134.877 424.093H67.5312C66.5124 424.092 65.5356 423.687 64.8152 422.966C64.0948 422.246 63.6896 421.269 63.6885 420.25V360.303C63.6896 359.284 64.0948 358.307 64.8152 357.587C65.5356 356.866 66.5124 356.461 67.5312 356.46H134.877C135.896 356.461 136.873 356.866 137.593 357.587C138.314 358.307 138.719 359.284 138.72 360.303V420.25C138.719 421.269 138.314 422.246 137.593 422.966C136.873 423.687 135.896 424.092 134.877 424.093Z"
        fill="#E6E6E6"
      />
      <path
        d="M755.955 417.91L758.94 391.802L773.909 260.894L776.895 234.785C778.33 222.107 774.678 209.377 766.739 199.389C758.8 189.4 747.224 182.968 734.549 181.505L394.886 142.665C382.208 141.23 369.478 144.882 359.49 152.821C349.501 160.759 343.069 172.336 341.606 185.011L341.598 185.078L320.673 368.068L320.666 368.136C319.23 380.814 322.883 393.544 330.821 403.533C338.76 413.521 350.337 419.953 363.012 421.417L702.674 460.256C715.352 461.692 728.082 458.039 738.071 450.101C748.059 442.162 754.491 430.585 755.955 417.91V417.91Z"
        fill="#E6E6E6"
      />
      <path
        d="M742.19 416.337L745.727 385.413L759.594 264.135L763.13 233.211C764.153 224.183 761.552 215.118 755.898 208.005C750.245 200.891 742.001 196.311 732.975 195.269L393.313 156.429C384.284 155.407 375.219 158.008 368.106 163.661C360.993 169.315 356.412 177.559 355.37 186.585L355.362 186.652L334.438 369.642L334.43 369.71C333.408 378.739 336.009 387.804 341.662 394.917C347.316 402.03 355.56 406.61 364.586 407.652L704.248 446.492C713.276 447.514 722.341 444.913 729.455 439.26C736.568 433.607 741.148 425.363 742.19 416.337V416.337Z"
        fill="white"
      />
      <path
        d="M686.593 250.416L497.524 228.797C496.477 228.678 495.464 228.354 494.543 227.844C493.622 227.334 492.81 226.647 492.155 225.823C491.499 224.999 491.012 224.054 490.722 223.041C490.432 222.029 490.344 220.969 490.464 219.923C490.583 218.877 490.908 217.864 491.419 216.943C491.93 216.023 492.618 215.212 493.443 214.557C494.268 213.902 495.213 213.416 496.226 213.127C497.239 212.838 498.298 212.751 499.345 212.872L688.414 234.492C690.524 234.735 692.451 235.806 693.772 237.47C695.093 239.134 695.699 241.253 695.458 243.364C695.217 245.474 694.147 247.402 692.485 248.725C690.823 250.047 688.704 250.655 686.593 250.416Z"
        fill="#E6E6E6"
      />
      <path
        d="M716.365 281.045L494.451 255.669C493.404 255.55 492.392 255.227 491.471 254.716C490.549 254.206 489.738 253.519 489.082 252.695C488.427 251.871 487.94 250.926 487.65 249.914C487.36 248.901 487.272 247.842 487.392 246.796C487.511 245.749 487.836 244.737 488.347 243.816C488.858 242.895 489.546 242.085 490.37 241.43C491.195 240.775 492.141 240.289 493.153 240C494.166 239.711 495.226 239.624 496.272 239.745L718.186 265.12C719.231 265.24 720.243 265.564 721.163 266.075C722.084 266.585 722.894 267.272 723.549 268.096C724.204 268.92 724.69 269.865 724.98 270.876C725.269 271.888 725.357 272.947 725.237 273.993C725.118 275.038 724.793 276.05 724.283 276.97C723.772 277.891 723.085 278.701 722.261 279.356C721.438 280.011 720.493 280.497 719.481 280.787C718.469 281.077 717.41 281.164 716.365 281.045Z"
        fill="#E6E6E6"
      />
      <path
        d="M710.177 334.641L383.008 297.23C380.898 296.986 378.97 295.915 377.65 294.252C376.329 292.588 375.723 290.468 375.964 288.358C376.205 286.248 377.275 284.319 378.937 282.997C380.599 281.675 382.718 281.066 384.829 281.305L711.998 318.717C713.045 318.835 714.057 319.159 714.979 319.669C715.9 320.179 716.711 320.866 717.367 321.69C718.023 322.514 718.509 323.46 718.799 324.472C719.089 325.484 719.177 326.544 719.058 327.59C718.938 328.636 718.613 329.649 718.102 330.569C717.591 331.49 716.903 332.301 716.079 332.956C715.254 333.611 714.308 334.097 713.296 334.386C712.283 334.675 711.224 334.762 710.177 334.641H710.177Z"
        fill="#E6E6E6"
      />
      <path
        d="M708.156 361.634L379.935 324.102C377.825 323.859 375.898 322.788 374.577 321.124C373.256 319.461 372.65 317.341 372.891 315.23C373.133 313.12 374.202 311.192 375.864 309.87C377.526 308.547 379.645 307.939 381.756 308.178L709.977 345.709C712.087 345.953 714.014 347.024 715.335 348.687C716.655 350.351 717.262 352.471 717.02 354.581C716.779 356.691 715.71 358.62 714.048 359.942C712.386 361.264 710.266 361.873 708.156 361.634V361.634Z"
        fill="#E6E6E6"
      />
      <path
        d="M704.156 387.298L376.987 349.887C375.94 349.768 374.927 349.444 374.006 348.934C373.085 348.424 372.273 347.737 371.617 346.913C370.962 346.089 370.475 345.144 370.185 344.131C369.895 343.119 369.807 342.059 369.927 341.013C370.046 339.967 370.371 338.954 370.882 338.033C371.393 337.113 372.081 336.302 372.906 335.647C373.73 334.992 374.676 334.506 375.689 334.217C376.702 333.928 377.761 333.841 378.807 333.962L705.977 371.373C708.087 371.617 710.014 372.688 711.335 374.352C712.656 376.015 713.262 378.135 713.021 380.245C712.779 382.355 711.71 384.284 710.048 385.606C708.386 386.929 706.267 387.537 704.156 387.298V387.298Z"
        fill="#E6E6E6"
      />
      <path
        d="M702.135 414.291L373.914 376.759C371.804 376.516 369.877 375.444 368.556 373.781C367.235 372.117 366.629 369.998 366.87 367.887C367.111 365.777 368.181 363.849 369.843 362.526C371.505 361.204 373.624 360.595 375.735 360.835L703.956 398.366C705.002 398.485 706.015 398.808 706.936 399.319C707.857 399.829 708.669 400.516 709.325 401.34C709.98 402.164 710.467 403.109 710.757 404.121C711.047 405.134 711.135 406.193 711.015 407.24C710.896 408.286 710.571 409.298 710.06 410.219C709.549 411.14 708.861 411.951 708.036 412.606C707.212 413.261 706.266 413.746 705.253 414.035C704.241 414.325 703.181 414.411 702.135 414.291V414.291Z"
        fill="#E6E6E6"
      />
      <path
        d="M450.703 263.025L383.793 255.374C382.781 255.257 381.857 254.744 381.223 253.946C380.589 253.148 380.297 252.132 380.412 251.12L387.222 191.561C387.339 190.548 387.853 189.624 388.65 188.99C389.448 188.356 390.465 188.065 391.477 188.179L458.387 195.83C459.399 195.947 460.323 196.461 460.957 197.258C461.591 198.056 461.883 199.072 461.768 200.085L454.958 259.644C454.841 260.656 454.327 261.58 453.53 262.214C452.732 262.848 451.716 263.14 450.703 263.025V263.025Z"
        fill="#D6E8F6"
      />
      <path
        d="M403.728 60.6429C402.275 66.3211 402.12 72.254 403.275 78.0003C405.7 90.1438 413.217 100.849 422.499 108.81C434.094 118.756 448.996 123.891 463.644 127.395C477.248 130.649 491.215 132.36 504.671 136.224C515.047 139.304 525.242 142.961 535.21 147.178C554.607 155.184 573.522 164.368 592.124 174.065C597.166 176.681 602.175 179.356 607.152 182.091C607.639 182.301 608.104 182.558 608.541 182.857C608.624 182.928 608.789 182.949 608.859 183.034C608.985 183.188 608.296 182.563 608.652 183.13C609.096 184.072 609.444 185.056 609.691 186.068L613.849 197.82C615.041 201.19 615.892 205.087 617.882 208.091C619.292 210.187 621.292 211.818 623.628 212.778C625.964 213.739 628.532 213.986 631.009 213.489C633.64 212.837 636.029 211.443 637.89 209.472C640.577 206.964 643.524 204.75 646.68 202.868C658.662 195.66 672.722 193.448 685.575 188.304C691.746 185.981 697.471 182.614 702.502 178.353C706.885 174.44 710.394 169.647 712.8 164.286C717.743 153.419 718.1 140.781 715.467 129.266C712.561 116.869 706.236 105.536 697.211 96.5536C687.116 86.3298 674.673 78.851 661.695 72.8742C647.916 66.5285 633.439 61.7277 619.008 57.1151C602.812 51.9374 586.469 47.2993 569.979 43.2009C553.466 39.1018 536.841 35.549 520.106 32.5424C504.048 29.6574 487.771 26.8034 471.474 25.7216C457.077 24.7658 442.073 25.7619 428.938 32.2311C417.258 37.9831 407.197 47.8204 403.728 60.6429Z"
        fill="#D6E8F6"
      />
      <path
        d="M476.622 88.8232C475.977 88.5762 475.39 88.1982 474.898 87.7131C474.405 87.2279 474.019 86.6462 473.763 86.0044C473.506 85.3626 473.386 84.6747 473.408 83.984C473.431 83.2933 473.596 82.6147 473.894 81.991L475.124 79.4231C475.36 78.9305 475.472 78.3879 475.452 77.8422C475.432 77.2964 475.279 76.7637 475.008 76.2899L473.591 73.8219C473.128 73.0139 472.899 72.0922 472.932 71.1611C472.964 70.2299 473.257 69.3265 473.776 68.553C474.296 67.7795 475.021 67.1668 475.871 66.7841C476.72 66.4014 477.66 66.2641 478.583 66.3877L481.405 66.7648C481.946 66.8372 482.497 66.777 483.009 66.5894C483.522 66.4018 483.981 66.0924 484.348 65.6879L486.259 63.5751C486.884 62.8846 487.69 62.3828 488.586 62.1264C489.482 61.8701 490.431 61.8693 491.327 62.1243C492.223 62.3792 493.03 62.8798 493.656 63.5692C494.283 64.2587 494.704 65.1097 494.872 66.026L495.384 68.8261C495.483 69.3636 495.71 69.8692 496.047 70.2992C496.384 70.7292 496.821 71.0707 497.32 71.2943L499.917 72.4581C500.767 72.8392 501.494 73.4506 502.015 74.2231C502.536 74.9956 502.83 75.8984 502.865 76.8295C502.899 77.7606 502.672 78.6827 502.21 79.4916C501.748 80.3005 501.068 80.9639 500.248 81.4068L497.744 82.7601C497.264 83.0192 496.853 83.3914 496.549 83.8446C496.245 84.2978 496.055 84.8183 495.997 85.3611L495.691 88.1932C495.591 89.1193 495.234 89.9989 494.66 90.7327C494.086 91.4665 493.319 92.0251 492.444 92.3455C491.569 92.6658 490.623 92.7352 489.711 92.5456C488.799 92.356 487.958 91.9151 487.284 91.2727L485.222 89.3096C484.827 88.932 484.346 88.6565 483.821 88.5068C483.295 88.3571 482.741 88.3377 482.207 88.4504L479.42 89.035C478.486 89.2329 477.516 89.1594 476.622 88.8232V88.8232Z"
        fill="white"
      />
      <path
        d="M515.042 100.352C513.855 99.896 512.884 99.0084 512.323 97.867C511.992 97.1556 511.826 96.3782 511.84 95.5934C511.853 94.8087 512.045 94.0374 512.401 93.3377L513.53 90.9816C513.77 90.4799 513.885 89.9272 513.864 89.3713C513.844 88.8153 513.688 88.2727 513.411 87.7902L512.098 85.5008C511.703 84.8476 511.459 84.1146 511.383 83.3552C511.307 82.5957 511.401 81.8289 511.659 81.1106C512.056 80.0514 512.801 79.1585 513.772 78.5782C514.743 77.9978 515.882 77.7644 517.003 77.9162L519.792 78.289C520.344 78.3627 520.905 78.3012 521.428 78.1097C521.95 77.9182 522.418 77.6025 522.792 77.1898L524.507 75.2939C525.136 74.5671 525.954 74.0281 526.87 73.7362C527.786 73.4443 528.765 73.4107 529.699 73.6393C530.607 73.8847 531.427 74.383 532.063 75.0761C532.699 75.7692 533.125 76.6287 533.292 77.5546L533.798 80.3221C533.899 80.87 534.131 81.3852 534.474 81.8234C534.818 82.2615 535.263 82.6095 535.772 82.8372L538.179 83.9158C538.883 84.2122 539.512 84.662 540.019 85.2323C540.527 85.8026 540.901 86.479 541.115 87.2123C541.415 88.3023 541.337 89.462 540.892 90.5017C540.448 91.5414 539.664 92.3994 538.668 92.9354L536.193 94.273C535.704 94.5373 535.286 94.9165 534.976 95.378C534.666 95.8394 534.473 96.3694 534.413 96.9221L534.131 99.537C534.066 100.297 533.833 101.034 533.449 101.693C533.065 102.353 532.539 102.919 531.91 103.35C530.967 103.978 529.839 104.266 528.71 104.166C527.582 104.067 526.521 103.585 525.703 102.801L523.663 100.858C523.26 100.475 522.771 100.196 522.236 100.044C521.702 99.8915 521.138 99.8717 520.594 99.9858L517.84 100.564C516.906 100.761 515.935 100.688 515.042 100.352V100.352Z"
        fill="white"
      />
      <path
        d="M553.247 112.857C552.602 112.61 552.015 112.232 551.522 111.747C551.03 111.262 550.644 110.68 550.387 110.038C550.131 109.396 550.01 108.709 550.033 108.018C550.055 107.327 550.221 106.649 550.518 106.025L551.749 103.457C551.985 102.964 552.097 102.422 552.077 101.876C552.057 101.33 551.904 100.798 551.633 100.324L550.216 97.8557C549.752 97.0477 549.524 96.126 549.557 95.1949C549.589 94.2638 549.882 93.3604 550.401 92.5868C550.921 91.8133 551.646 91.2006 552.496 90.8179C553.345 90.4353 554.285 90.2979 555.208 90.4215L558.03 90.7986C558.571 90.871 559.122 90.8109 559.634 90.6233C560.147 90.4356 560.606 90.1263 560.973 89.7217L562.884 87.6089C563.509 86.9184 564.315 86.4167 565.211 86.1603C566.106 85.9039 567.056 85.9032 567.952 86.1581C568.848 86.4131 569.655 86.9136 570.281 87.6031C570.908 88.2926 571.329 89.1435 571.497 90.0598L572.009 92.8599C572.108 93.3975 572.335 93.9031 572.672 94.3331C573.009 94.7631 573.446 95.1046 573.945 95.3281L576.542 96.4919C577.392 96.873 578.119 97.4844 578.64 98.2569C579.161 99.0294 579.455 99.9323 579.489 100.863C579.524 101.794 579.297 102.717 578.835 103.525C578.372 104.334 577.693 104.998 576.873 105.441L574.369 106.794C573.888 107.053 573.478 107.425 573.174 107.878C572.87 108.332 572.68 108.852 572.622 109.395L572.316 112.227C572.216 113.153 571.859 114.033 571.285 114.767C570.711 115.5 569.944 116.059 569.069 116.379C568.194 116.7 567.248 116.769 566.336 116.579C565.424 116.39 564.583 115.949 563.908 115.306L561.847 113.343C561.452 112.966 560.971 112.69 560.446 112.541C559.92 112.391 559.366 112.372 558.832 112.484L556.045 113.069C555.111 113.267 554.14 113.193 553.247 112.857V112.857Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M590.691 124.171C590.045 123.924 589.458 123.546 588.966 123.061C588.473 122.575 588.087 121.994 587.831 121.352C587.574 120.71 587.454 120.022 587.476 119.332C587.499 118.641 587.664 117.962 587.962 117.339L589.192 114.771C589.428 114.278 589.541 113.735 589.52 113.19C589.5 112.644 589.348 112.111 589.076 111.637L587.66 109.169C587.196 108.361 586.967 107.44 587 106.509C587.033 105.577 587.325 104.674 587.845 103.901C588.364 103.127 589.089 102.514 589.939 102.132C590.788 101.749 591.728 101.612 592.651 101.735L595.474 102.112C596.015 102.185 596.565 102.125 597.078 101.937C597.59 101.749 598.049 101.44 598.416 101.035L600.327 98.9226C600.952 98.2321 601.758 97.7303 602.654 97.4739C603.55 97.2176 604.499 97.2168 605.395 97.4718C606.291 97.7267 607.098 98.2273 607.724 98.9167C608.351 99.6062 608.772 100.457 608.94 101.373L609.453 104.174C609.551 104.711 609.778 105.217 610.115 105.647C610.453 106.077 610.889 106.418 611.388 106.642L613.985 107.806C614.836 108.187 615.562 108.798 616.083 109.571C616.604 110.343 616.898 111.246 616.933 112.177C616.967 113.108 616.74 114.03 616.278 114.839C615.816 115.648 615.136 116.311 614.317 116.754L611.812 118.108C611.332 118.367 610.922 118.739 610.617 119.192C610.313 119.645 610.123 120.166 610.065 120.709L609.759 123.541C609.659 124.467 609.302 125.346 608.728 126.08C608.154 126.814 607.387 127.373 606.512 127.693C605.638 128.013 604.691 128.083 603.779 127.893C602.867 127.703 602.026 127.263 601.352 126.62L599.29 124.657C598.895 124.28 598.414 124.004 597.889 123.854C597.363 123.705 596.809 123.685 596.275 123.798L593.488 124.382C592.555 124.58 591.584 124.507 590.691 124.171V124.171Z"
        fill="#1B87D1"
      />
      <path
        opacity="0.2"
        d="M628.134 135.484C627.488 135.237 626.901 134.859 626.409 134.374C625.917 133.889 625.53 133.307 625.274 132.666C625.018 132.024 624.897 131.336 624.92 130.645C624.942 129.954 625.107 129.276 625.405 128.652L626.636 126.084C626.871 125.592 626.984 125.049 626.964 124.503C626.943 123.958 626.791 123.425 626.519 122.951L625.103 120.483C624.639 119.675 624.411 118.753 624.443 117.822C624.476 116.891 624.768 115.988 625.288 115.214C625.807 114.441 626.533 113.828 627.382 113.445C628.232 113.063 629.171 112.925 630.095 113.049L632.917 113.426C633.458 113.498 634.008 113.438 634.521 113.251C635.033 113.063 635.493 112.754 635.859 112.349L637.77 110.236C638.396 109.546 639.202 109.044 640.097 108.788C640.993 108.531 641.942 108.53 642.838 108.785C643.734 109.04 644.541 109.541 645.168 110.23C645.794 110.92 646.215 111.771 646.383 112.687L646.896 115.487C646.994 116.025 647.222 116.53 647.559 116.96C647.896 117.39 648.333 117.732 648.831 117.955L651.429 119.119C652.279 119.5 653.006 120.112 653.526 120.884C654.047 121.657 654.342 122.56 654.376 123.491C654.41 124.422 654.184 125.344 653.721 126.153C653.259 126.962 652.58 127.625 651.76 128.068L649.255 129.421C648.775 129.68 648.365 130.053 648.06 130.506C647.756 130.959 647.567 131.479 647.508 132.022L647.202 134.854C647.102 135.78 646.745 136.66 646.171 137.394C645.598 138.128 644.83 138.686 643.956 139.007C643.081 139.327 642.134 139.396 641.222 139.207C640.31 139.017 639.469 138.576 638.795 137.934L636.733 135.971C636.338 135.593 635.857 135.318 635.332 135.168C634.807 135.018 634.253 134.999 633.718 135.112L630.931 135.696C629.998 135.894 629.027 135.821 628.134 135.484Z"
        fill="#1B87D1"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_2">
        <rect width="843.579" height="640.517" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
