<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    @click="$emit('click', $event)"
  >
    <defs>
      <linearGradient
        id="ic-logo-stove-symbol-color_svg__a"
        x1="50%"
        x2="50%"
        y1="0%"
        y2="100%"
      >
        <stop offset="0%" stop-color="#FF1F00" />
        <stop offset="100%" stop-color="#FF7330" />
      </linearGradient>
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path
        fill="url(#ic-logo-stove-symbol-color_svg__a)"
        d="M14 0c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0z"
        transform="translate(2 2)"
      />
      <path
        fill="#FFF"
        d="m14.694 13.559-.004-.003a1.014 1.014 0 0 1-.2-.215.663.663 0 0 1-.123-.378c0-.592.692-.734 1.613-.734 1.476 0 2.584.564 3.198.564.882 0 1.431-.612 1.431-1.433 0-.528-.16-.939-.486-1.271C19.279 9.229 17.13 9 16.076 9c-3.05 0-5.188 1.526-5.188 4.01 0 4.326 5.493 4.136 6.74 5.348.153.157.25.302.25.556 0 .532-.549.787-1.708.787-2.107 0-3.3-1.04-4.144-1.04-.882 0-1.426.742-1.426 1.602C10.6 22.14 13.678 23 15.826 23c3.088 0 5.574-1.388 5.574-4.34 0-4.443-5.472-4.037-6.706-5.101"
      />
    </g>
  </svg>
</template>
