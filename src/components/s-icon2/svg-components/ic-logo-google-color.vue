<template>
  <svg
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    @click="$emit('click', $event)"
  >
    <defs>
      <path
        id="ic-logo-google-color_svg__a"
        d="M5.779 2.191a13 13 0 0 1 16.177 1.385l.237.232-3.536 3.535a8 8 0 1 0 1.864 8.388l.08-.232H13v-5h13V13A13 13 0 0 1 .99 17.974 13 13 0 0 1 5.779 2.191z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(3 3)">
      <mask id="ic-logo-google-color_svg__b" fill="#fff">
        <use xlink:href="#ic-logo-google-color_svg__a" />
      </mask>
      <use xlink:href="#ic-logo-google-color_svg__a" fill="#000" />
      <path
        fill="#4285F4"
        d="M28.592 8.27a17.184 17.184 0 0 1 .307 5.601c-.48 4.402-2.634 8.333-5.85 11.212l-6.567-4.863-.707-.378c.204-.382.4-.808.598-1.28l.305-.745L17 17l-6.885-1.313V8.27h18.477z"
        mask="url(#ic-logo-google-color_svg__b)"
      />
      <path
        fill="#34A853"
        d="M13 20.818a7.814 7.814 0 0 0 4.578-1.488l4.71 3.894C19.817 25.574 16.564 27 13 27 7.407 27 2.58 23.486.338 18.406l4.786-3.841c1.025 3.62 4.163 6.253 7.876 6.253z"
        mask="url(#ic-logo-google-color_svg__b)"
      />
      <path
        fill="#FBBC05"
        d="m.98 6.155 6.01 3.98A7.492 7.492 0 0 0 6.418 13c0 1.03.212 2.018.601 2.936L.99 19.86C-.283 17.804-1 15.472-1 13c0-2.466.714-4.793 1.98-6.845z"
        mask="url(#ic-logo-google-color_svg__b)"
      />
      <path
        fill="#EA4335"
        d="M13-1c3.878 0 7.388 1.69 9.923 4.418l-4.065 4.388C17.366 6.186 15.292 5.182 13 5.182c-3.365 0-6.258 2.163-7.534 5.263L.71 6.81C3.087 2.156 7.7-1 13-1z"
        mask="url(#ic-logo-google-color_svg__b)"
      />
    </g>
  </svg>
</template>
