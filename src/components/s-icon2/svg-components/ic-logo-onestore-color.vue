<template>
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    @click="$emit('click', $event)"
  >
    <defs>
      <linearGradient
        id="4cqhxzcrib"
        x1="-7.417%"
        y1="-7.819%"
        x2="90.528%"
        y2="90.813%"
      >
        <stop stop-color="#F3742E" offset="0%" />
        <stop stop-color="#ED0A72" offset="100%" />
      </linearGradient>
      <linearGradient
        id="yo2o4hlicc"
        x1="79.132%"
        y1="-44.272%"
        x2="50%"
        y2="50%"
      >
        <stop stop-color="#FFF" stop-opacity=".5" offset="0%" />
        <stop stop-color="#FFF" stop-opacity="0" offset="100%" />
      </linearGradient>
      <linearGradient
        id="wnep4734we"
        x1="122.18%"
        y1="-44.272%"
        x2="50%"
        y2="50%"
      >
        <stop stop-color="#FFF" stop-opacity=".5" offset="0%" />
        <stop stop-color="#FFF" stop-opacity="0" offset="100%" />
      </linearGradient>
      <path
        id="1u94p0amna"
        d="M9 0h8a9 9 0 0 1 9 9v8a9 9 0 0 1-9 9H9a9 9 0 0 1-9-9V9a9 9 0 0 1 9-9z"
      />
      <path
        id="gij4sormtg"
        d="M8.85 8.058c-.81.497-1.092 1.61-.623 2.472.469.862 1.516 1.16 2.327.662l3.888-2.385-1.85 2.107v8.276c0 .996.767 1.81 1.705 1.81.936 0 1.703-.814 1.703-1.81V6.808c0-.348-.102-.685-.227-.906-.48-.854-1.515-1.16-2.327-.663L8.85 8.058z"
      />
      <filter
        id="cj2wtxhc2f"
        x="-18.8%"
        y="-9.4%"
        width="137.5%"
        height="118.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation=".5"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g transform="translate(3 3)" fill="none" fill-rule="evenodd">
      <mask id="xo7yxzdnyd" fill="#fff">
        <use xlink:href="#1u94p0amna" />
      </mask>
      <use fill="url(#4cqhxzcrib)" xlink:href="#1u94p0amna" />
      <path
        fill="url(#yo2o4hlicc)"
        mask="url(#xo7yxzdnyd)"
        d="m0 6 9 8.309V26H0z"
      />
      <path
        fill="url(#wnep4734we)"
        mask="url(#xo7yxzdnyd)"
        d="M9 14 26 2v24H9z"
      />
      <g mask="url(#xo7yxzdnyd)">
        <use fill="#000" filter="url(#cj2wtxhc2f)" xlink:href="#gij4sormtg" />
        <use fill="#FFF" xlink:href="#gij4sormtg" />
      </g>
    </g>
  </svg>
</template>
