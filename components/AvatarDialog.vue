
<template>
  <q-dialog
    v-model="store.state.isAvatarDiaolg"
    @hide="store.commit('handleOnAvatarDialog', false);"
  >
    <q-card style="width: 700px; max-width: 90vw" class="bg-gray-900 p-4">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-3">
        <div class="grid grid-cols-2 gap-2 md:grid-cols-1 md:col-span-2">
          <div class="square">
            <svg
              id="svga-svgcanvas"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.com/svgjs"
              class="svga-svg"
              viewBox="0 0 200 200"
              preserveAspectRatio="xMinYMin meet"
            >
              <defs id="SvgjsDefs1007">
                <radialGradient
                  id="SvgjsRadialGradient2907"
                  cx="100"
                  cy="114"
                  r="41"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-facehighlight-gradient-single-0"
                >
                  <stop
                    id="SvgjsStop2908"
                    stop-opacity="0.5"
                    stop-color="#ffc9b5"
                    offset="0"
                    data-stoptype="hl1"
                  ></stop>
                  <stop
                    id="SvgjsStop2909"
                    stop-opacity="0"
                    stop-color="#f5af95"
                    offset="0.9"
                    data-stoptype="tone"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient2911"
                  cx="100"
                  cy="54"
                  r="37"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-facehighlight-gradient-single-1"
                >
                  <stop
                    id="SvgjsStop2912"
                    stop-opacity="0.5"
                    stop-color="#ffc9b5"
                    offset="0"
                    data-stoptype="hl1"
                  ></stop>
                  <stop
                    id="SvgjsStop2913"
                    stop-opacity="0"
                    stop-color="#f5af95"
                    offset="0.9"
                    data-stoptype="tone"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient2949"
                  cx="-568.659"
                  cy="-521.042"
                  r="59.751"
                  gradientTransform="matrix(0.096 -0.0248 0.0245 0.0961 141.2814 119.9893)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-left-1"
                >
                  <stop
                    id="SvgjsStop2950"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2951"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient2953"
                  cx="-582.838"
                  cy="-519.099"
                  r="59.745"
                  gradientTransform="matrix(0.0991 8.856319e-004 -0.0011 0.0991 131.1134 135.9855)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-left-2"
                >
                  <stop
                    id="SvgjsStop2954"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2955"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </radialGradient>
                <linearGradient
                  id="SvgjsLinearGradient2959"
                  x1="122.67"
                  y1="88.268"
                  x2="123.606"
                  y2="87.152"
                  gradientTransform="matrix(1 0 0 1 -52 0)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-left-5"
                >
                  <stop
                    id="SvgjsStop2960"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2961"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="SvgjsLinearGradient2963"
                  x1="127.212"
                  y1="82.296"
                  x2="126.463"
                  y2="83.189"
                  gradientTransform="matrix(1 0 0 1 -52 0)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-left-6"
                >
                  <stop
                    id="SvgjsStop2964"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2965"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="SvgjsLinearGradient2967"
                  x1="129.636"
                  y1="79.822"
                  x2="127.91"
                  y2="81.879"
                  gradientTransform="matrix(1 0 0 1 -52 0)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-left-7"
                >
                  <stop
                    id="SvgjsStop2968"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2969"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </linearGradient>
                <radialGradient
                  id="SvgjsRadialGradient2972"
                  cx="-568.654"
                  cy="-521.042"
                  r="59.752"
                  gradientTransform="matrix(0.096 -0.0248 0.0245 0.0961 193.2804 119.9894)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-right-1"
                >
                  <stop
                    id="SvgjsStop2973"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2974"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient2976"
                  cx="-582.833"
                  cy="-519.102"
                  r="59.747"
                  gradientTransform="matrix(0.0991 8.856319e-004 -0.0011 0.0991 183.1126 135.9856)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-right-2"
                >
                  <stop
                    id="SvgjsStop2977"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2978"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </radialGradient>
                <linearGradient
                  id="SvgjsLinearGradient2982"
                  x1="122.67"
                  y1="88.268"
                  x2="123.606"
                  y2="87.152"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-right-5"
                >
                  <stop
                    id="SvgjsStop2983"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2984"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="SvgjsLinearGradient2986"
                  x1="127.212"
                  y1="82.296"
                  x2="126.463"
                  y2="83.189"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-right-6"
                >
                  <stop
                    id="SvgjsStop2987"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2988"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="SvgjsLinearGradient2990"
                  x1="129.636"
                  y1="79.822"
                  x2="127.91"
                  y2="81.879"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesiris-gradient-right-7"
                >
                  <stop
                    id="SvgjsStop2991"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop2992"
                    stop-opacity="0"
                    stop-color="#ffffff"
                    offset="1"
                    data-stoptype="#ffffff"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="SvgjsLinearGradient3065"
                  x1="100"
                  y1="171"
                  x2="100"
                  y2="131"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-chinshadow-gradient-single-0"
                >
                  <stop
                    id="SvgjsStop3066"
                    stop-opacity="0.8"
                    stop-color="#e69375"
                    offset="0"
                    data-stoptype="sd1"
                  ></stop>
                  <stop
                    id="SvgjsStop3067"
                    stop-opacity="1"
                    stop-color="#c7633d"
                    offset="0.7"
                    data-stoptype="sd3"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="SvgjsLinearGradient3069"
                  x1="100"
                  y1="142"
                  x2="100"
                  y2="139"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-mouth-gradient-single-0"
                >
                  <stop
                    id="SvgjsStop3070"
                    stop-opacity="1"
                    stop-color="#eda184"
                    offset="0.1"
                    data-stoptype="sd05"
                  ></stop>
                  <stop
                    id="SvgjsStop3071"
                    stop-opacity="1"
                    stop-color="#e69375"
                    offset="1"
                    data-stoptype="sd1"
                  ></stop>
                </linearGradient>
                <radialGradient
                  id="SvgjsRadialGradient3357"
                  cx="129.041"
                  cy="83.945"
                  r="15.117"
                  gradientTransform="matrix(-0.9945 0.1042 0.1042 0.9945 192.8281 -12.4633)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesback-gradient-left-0"
                >
                  <stop
                    id="SvgjsStop3358"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop3359"
                    stop-opacity="1"
                    stop-color="#fcfdfd"
                    offset="0.315"
                    data-stoptype="#fcfdfd"
                  ></stop>
                  <stop
                    id="SvgjsStop3360"
                    stop-opacity="1"
                    stop-color="#f4f7f8"
                    offset="0.504"
                    data-stoptype="#f4f7f8"
                  ></stop>
                  <stop
                    id="SvgjsStop3361"
                    stop-opacity="1"
                    stop-color="#e5ecef"
                    offset="0.66"
                    data-stoptype="#e5ecef"
                  ></stop>
                  <stop
                    id="SvgjsStop3362"
                    stop-opacity="1"
                    stop-color="#d8e2e7"
                    offset="0.76"
                    data-stoptype="#d8e2e7"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient3364"
                  cx="128.643"
                  cy="83.986"
                  r="15.116"
                  gradientTransform="matrix(0.9945 0.1042 -0.1042 0.9945 7.1738 -12.4633)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesback-gradient-right-0"
                >
                  <stop
                    id="SvgjsStop3365"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop3366"
                    stop-opacity="1"
                    stop-color="#fcfdfd"
                    offset="0.316"
                    data-stoptype="#fcfdfd"
                  ></stop>
                  <stop
                    id="SvgjsStop3367"
                    stop-opacity="1"
                    stop-color="#f4f7f8"
                    offset="0.505"
                    data-stoptype="#f4f7f8"
                  ></stop>
                  <stop
                    id="SvgjsStop3368"
                    stop-opacity="1"
                    stop-color="#e5ecef"
                    offset="0.661"
                    data-stoptype="#e5ecef"
                  ></stop>
                  <stop
                    id="SvgjsStop3369"
                    stop-opacity="1"
                    stop-color="#d8e2e7"
                    offset="0.76"
                    data-stoptype="#d8e2e7"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient3371"
                  cx="129.041"
                  cy="83.945"
                  r="15.117"
                  gradientTransform="matrix(-0.9945 0.1042 0.1042 0.9945 192.8281 -12.4633)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesfront-gradient-left-0"
                >
                  <stop
                    id="SvgjsStop3372"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop3373"
                    stop-opacity="1"
                    stop-color="#fcfdfd"
                    offset="0.316"
                    data-stoptype="#fcfdfd"
                  ></stop>
                  <stop
                    id="SvgjsStop3374"
                    stop-opacity="1"
                    stop-color="#f4f7f8"
                    offset="0.505"
                    data-stoptype="#f4f7f8"
                  ></stop>
                  <stop
                    id="SvgjsStop3375"
                    stop-opacity="1"
                    stop-color="#e5ecef"
                    offset="0.661"
                    data-stoptype="#e5ecef"
                  ></stop>
                  <stop
                    id="SvgjsStop3376"
                    stop-opacity="1"
                    stop-color="#d8e2e7"
                    offset="0.76"
                    data-stoptype="#d8e2e7"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient3380"
                  cx="121.986"
                  cy="82.496"
                  fx="133.239"
                  fy="82.527"
                  r="16.003"
                  gradientTransform="matrix(0.9998 0.0208 0.0166 -0.7998 -45.3195 145.9395)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesfront-gradient-left-3"
                >
                  <stop
                    id="SvgjsStop3381"
                    stop-opacity="1"
                    stop-color="#e69375"
                    offset="0"
                    data-stoptype="sd1"
                  ></stop>
                  <stop
                    id="SvgjsStop3382"
                    stop-opacity="0.3"
                    stop-color="#e69375"
                    offset="0.7"
                    data-stoptype="sd1"
                  ></stop>
                  <stop
                    id="SvgjsStop3383"
                    stop-opacity="0"
                    stop-color="#f5af95"
                    offset="1"
                    data-stoptype="tone"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient3385"
                  cx="68.931"
                  cy="105.995"
                  r="29.524"
                  gradientTransform="matrix(1.0336 0 0 1.0336 -1.6796 1.3127)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesfront-gradient-left-4"
                >
                  <stop
                    id="SvgjsStop3386"
                    stop-opacity="0"
                    stop-color="#000000"
                    offset="0.95"
                    data-stoptype="#000000"
                  ></stop>
                  <stop
                    id="SvgjsStop3387"
                    stop-opacity="0.2"
                    stop-color="#000000"
                    offset="1"
                    data-stoptype="#000000"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient3391"
                  cx="128.643"
                  cy="83.986"
                  r="15.116"
                  gradientTransform="matrix(0.9945 0.1042 -0.1042 0.9945 7.1738 -12.4633)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesfront-gradient-right-0"
                >
                  <stop
                    id="SvgjsStop3392"
                    stop-opacity="1"
                    stop-color="#ffffff"
                    offset="0"
                    data-stoptype="#ffffff"
                  ></stop>
                  <stop
                    id="SvgjsStop3393"
                    stop-opacity="1"
                    stop-color="#fcfdfd"
                    offset="0.316"
                    data-stoptype="#fcfdfd"
                  ></stop>
                  <stop
                    id="SvgjsStop3394"
                    stop-opacity="1"
                    stop-color="#f4f7f8"
                    offset="0.505"
                    data-stoptype="#f4f7f8"
                  ></stop>
                  <stop
                    id="SvgjsStop3395"
                    stop-opacity="1"
                    stop-color="#e5ecef"
                    offset="0.661"
                    data-stoptype="#e5ecef"
                  ></stop>
                  <stop
                    id="SvgjsStop3396"
                    stop-opacity="1"
                    stop-color="#d8e2e7"
                    offset="0.76"
                    data-stoptype="#d8e2e7"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient3400"
                  cx="121.587"
                  cy="82.496"
                  fx="132.839"
                  fy="82.527"
                  r="16.003"
                  gradientTransform="matrix(-0.9998 0.0208 -0.0166 -0.7998 244.5208 145.9478)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesfront-gradient-right-3"
                >
                  <stop
                    id="SvgjsStop3401"
                    stop-opacity="1"
                    stop-color="#e69375"
                    offset="0"
                    data-stoptype="sd1"
                  ></stop>
                  <stop
                    id="SvgjsStop3402"
                    stop-opacity="0.3"
                    stop-color="#e69375"
                    offset="0.7"
                    data-stoptype="sd1"
                  ></stop>
                  <stop
                    id="SvgjsStop3403"
                    stop-opacity="0"
                    stop-color="#f5af95"
                    offset="1"
                    data-stoptype="tone"
                  ></stop>
                </radialGradient>
                <radialGradient
                  id="SvgjsRadialGradient3405"
                  cx="69.316"
                  cy="105.995"
                  r="29.524"
                  gradientTransform="matrix(-1.0336 0 0 1.0336 201.6796 1.3127)"
                  gradientUnits="userSpaceOnUse"
                  class="svga-on-canvas-eyesfront-gradient-right-4"
                >
                  <stop
                    id="SvgjsStop3406"
                    stop-opacity="0"
                    stop-color="#000000"
                    offset="0.95"
                    data-stoptype="#000000"
                  ></stop>
                  <stop
                    id="SvgjsStop3407"
                    stop-opacity="0.2"
                    stop-color="#000000"
                    offset="1"
                    data-stoptype="#000000"
                  ></stop>
                </radialGradient>
              </defs>
              <g id="svga-group-wrapper">
                <g id="svga-group-backs-single">
                  <path
                    id="SvgjsPath3351"
                    d="M225 225H-25V-25h250V225z"
                    data-colored="true"
                    data-fillType="tone"
                    data-strokeType="none"
                    fill="#ecf0f1"
                    stroke-width="none"
                    opacity="1"
                  ></path>
                </g>
                <g
                  id="svga-group-humanwrap-move"
                  data-updown="0"
                  data-leftright="0"
                  data-rotate="0"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  <g
                    id="svga-group-humanwrap"
                    data-scaleX="1.1500006000000005"
                    data-scaleY="1.1500006000000005"
                    transform="matrix(1.1500005000000004,0,0,1.1500005000000004,-14.97930154207151,-17.657866960537604)"
                  >
                    <g
                      id="svga-group-hair-back-move"
                      data-updown="0"
                      data-leftright="0"
                      data-rotate="0"
                      transform="matrix(1,0,0,1,0,0)"
                    >
                      <g
                        id="svga-group-hair-back"
                        data-scaleX="1"
                        data-scaleY="1"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <path
                          id="SvgjsPath3352"
                          d="M100.5,100.5h-1v-1h1V100.5z"
                          data-colored="true"
                          data-fillType="tone"
                          data-strokeType="none"
                          fill="#2a232b"
                          stroke-width="none"
                          opacity="1"
                        ></path>
                      </g>
                    </g>
                    <g id="svga-group-humanbody-single">
                      <path
                        id="SvgjsPath2914"
                        d="M195.417 199.778c-2.196-4.746-8.195-11.779-14.86-13.722 -8.239-2.403-26.837-5.308-33.733-6.923 -5.528-1.296-16.662-11.294-20.564-14.65 -0.7-0.6-1.273-1.839-1.287-2.76 -0.139-10.864 4.195-39.724 4.195-39.724H100 70.833c0 0 4.334 28.859 4.193 39.724 -0.011 0.921-0.587 2.16-1.285 2.76 -3.902 3.356-15.036 13.354-20.564 14.65 -6.897 1.615-25.495 4.619-33.733 7.022 -6.667 1.942-12.664 8.876-14.86 13.622 -3.708 8.008-4.584 22.5-4.584 35h100 100C200 222.278 199.123 207.786 195.417 199.778z"
                        data-colored="true"
                        data-fillType="tone"
                        data-strokeType="none"
                        data-fromskin="true"
                        fill="#f5af95"
                        stroke-width="none"
                        opacity="1"
                        stroke="none"
                      ></path>
                      <path
                        id="SvgjsPath2915"
                        d="M159.156 184.058c24.342 3.542 34.586 8.708 37.794 50.721H200c0-12.5-0.877-26.992-4.583-35 -2.196-4.746-8.195-11.779-14.86-13.722 -8.239-2.403-26.837-5.308-33.733-6.923 -5.528-1.296-18.242-12.069-21.643-16.35 3.36 4.704 12.791 15.605 21.054 18.46C150.188 182.61 153.48 183.232 159.156 184.058zM53.766 181.244c8.263-2.854 17.693-13.756 21.054-18.46 -3.4 4.28-16.114 15.054-21.643 16.35 -6.896 1.615-25.494 4.619-33.733 7.022 -6.665 1.942-12.664 8.876-14.86 13.622 -3.706 8.008-4.583 22.5-4.583 35h3.05c3.188-41.744 13.475-47.183 37.794-50.721C46.52 183.232 49.813 182.61 53.766 181.244z"
                        data-colored="true"
                        data-fillType="hl1"
                        data-strokeType="none"
                        data-fromskin="true"
                        fill="#ffc9b5"
                        stroke-width="none"
                        opacity="1"
                        stroke="none"
                      ></path>
                      <path
                        id="SvgjsPath2916"
                        d="M95.646 197.62c0 0-5.074-1.609-7.083-2.379 -10.449-4.009-44.395-6.607-44.395-6.607s35.754 1.419 43.644 2.779c-0.458-4.767-3.017-20.004-3.017-20.004s5.149 16.815 6.409 21.057C91.878 194.734 95.646 197.62 95.646 197.62zM106.445 196.278c-0.089 0.073-0.191 0.168-0.302 0.268C106.256 196.461 106.358 196.372 106.445 196.278zM95.646 197.62c0 0 2.893 2.992 4.347 3.03 1.91 0.051 4.828-2.899 6.151-4.104 -1.265 0.957-4.159 1.391-5.31 1.436C99.504 198.033 95.646 197.62 95.646 197.62zM116.664 190.101c-1.545 0.248-4.386 0.789-4.386 0.789l2.287-14.89c-0.646 3.071-4.474 16.211-8.12 20.278 1.91-1.616 6.158-2.391 8.324-2.704 10.236-1.484 10.232-1.483 41.062-4.94C155.831 188.634 126.76 188.479 116.664 190.101z"
                        data-colored="true"
                        data-fillType="sd1"
                        data-strokeType="none"
                        data-fromskin="true"
                        fill="#e69375"
                        stroke-width="none"
                        opacity="1"
                        stroke="none"
                      ></path>
                      <path
                        id="SvgjsPath2917"
                        d="M195.417 199.778c-2.196-4.746-8.195-11.779-14.86-13.722 -8.239-2.403-26.837-5.308-33.733-6.923 -5.528-1.296-16.662-11.294-20.564-14.65 -0.7-0.6-1.273-1.839-1.287-2.76 -0.139-10.864 4.195-39.724 4.195-39.724H100 70.833c0 0 4.334 28.859 4.193 39.724 -0.011 0.921-0.587 2.16-1.285 2.76 -3.902 3.356-15.036 13.354-20.564 14.65 -6.897 1.615-25.495 4.619-33.733 7.022 -6.667 1.942-12.664 8.876-14.86 13.622 -3.708 8.008-4.584 22.5-4.584 35h100 100C200 222.278 199.123 207.786 195.417 199.778z"
                        data-colored="true"
                        data-fillType="none"
                        data-strokeType="sd3"
                        data-fromskin="true"
                        fill="none"
                        stroke="#c7633d"
                        stroke-width="1.5"
                        opacity="1"
                      ></path>
                    </g>
                    <g id="svga-group-chinshadow-single">
                      <path
                        id="SvgjsPath3064"
                        d="M100.021 171.866c8.183 0 16.871-4.943 24.199-10.675 -0.001-6.702 1.451-19.105 2.652-28.205 -15.382-2.247-38.406-2.279-53.766-0.152 1.184 8.96 2.625 21.206 2.671 28.02C83.119 166.767 91.822 171.866 100.021 171.866z"
                        data-colored="false"
                        data-fillType="gradient"
                        data-strokeType="none"
                        data-fromskin="true"
                        fill="url(#SvgjsLinearGradient3065)"
                        opacity="1"
                      ></path>
                    </g>
                    <g id="svga-group-clothes-single">
                      <path
                        id="SvgjsPath3347"
                        d="M111.806 235.888c-19.135 0-41.455-0.074-68.233-0.229l-23.679-0.128c-14.298-0.078-15.141-0.094-16.887-0.094l-4.899 0.007c-4.571-41.875 14.41-52.87 43.762-56.708 7.789-1.097 15.449-3.097 21.459-6.972 16.327 22.243 64.811 17.562 73.103-0.629 1.39 0.53 2.539 1.215 3.977 1.734 4.666 3.433 11.072 5.836 17.628 6.199 26.008 1.441 44.419 12.996 44.057 54.64 0.003 0.165 0.004 1.175-0.013 1.49 -12.513 0-17.206 0.121-27.034 0.262 -13.331 0.19-29.923 0.427-63.229 0.427C111.813 235.888 111.81 235.888 111.806 235.888z"
                        data-colored="true"
                        data-fillType="tone"
                        data-strokeType="none"
                        fill="#386e77"
                        stroke-width="none"
                        opacity="1"
                      ></path>
                      <path
                        id="SvgjsPath3348"
                        d="M201.055 234.64c-0.41-7.385-4.064-28.058-10.36-37.541 -12.482-18.805-42.26-12.206-49.132-19.693 -4.986 10.159-24.975 16.595-31.594 17.54 19.181-6.36 27.237-10.959 30.42-21.87 6.405 8.33 41.074 1.971 54.717 24.331C199.101 203.954 202.9 224.793 201.055 234.64zM55.811 177.628c1.357-0.315 2.034-1.249 3.381-1.614l-1.426-1.891c-9.049 7.052-42.909 2.645-54.519 24.036 -3.659 6.741-6.127 22.788-4.192 36.439 0.537-8.384 0.799-26.314 7.095-35.798 11.324-17.06 31.974-12.553 47.619-19.775 6.983 8.6 17.888 12.828 28.984 14.577C68.832 189.971 60.85 183.84 55.811 177.628z"
                        data-colored="true"
                        data-fillType="hl1"
                        data-strokeType="none"
                        fill="#4d7e86"
                        stroke-width="none"
                        opacity="1"
                      ></path>
                      <path
                        id="SvgjsPath3349"
                        d="M135.31 173.244c-5.532 11.514-47.35 24.923-70.93 0.879 -1.466 0.622-5.852 2.112-5.852 2.112 17.176 23.386 67.511 23.534 80.909-0.114C139.378 176.098 136.672 173.936 135.31 173.244z"
                        data-colored="true"
                        data-fillType="sd1"
                        data-strokeType="none"
                        fill="#265e68"
                        stroke-width="none"
                        opacity="1"
                      ></path>
                      <path
                        id="SvgjsPath3350"
                        d="M136.38 171.002c-9.413 18.822-58.397 21.485-73.012 0.632 -5.337 1.578-10.469 4.941-15.636 5.782C16.812 182.021-6.046 184.335-2 235.552c9.94 0-6.611-0.065 45.571 0.215 123.59 0.71 119.562-0.461 158.606-0.461 0.029-0.14 0.015-1.452 0.021-1.596 2.096-56.436-30.852-53.104-53.12-56.995 -3.144-0.718-6.066-2.773-8.635-3.945C139.024 172.121 137.818 171.538 136.38 171.002zM63.014 172.265c12.974 23.392 64.219 18.699 74.113 0.101 1.2 0.504 1.507 0.704 2.898 1.197 -10.248 21.489-60.942 28.337-81.677 1.163C58.494 174.685 61.552 172.813 63.014 172.265zM-0.845 234.778c-2.421-26.431 1.797-48.043 32.78-53.345 10.276-1.896 16.557-1.962 25.384-5.794 16.763 27.405 72.098 23.158 83.598-1.305 1.652 1.409 4.228 3.03 7.405 3.785 18.098 4.299 54.838-0.894 52.898 56.658C147.163 234.075 102.355 232.433-0.845 234.778z"
                        data-colored="true"
                        data-fillType="sd3"
                        data-strokeType="none"
                        fill="#0c4049"
                        stroke-width="none"
                        opacity="1"
                      ></path>
                    </g>
                    <g
                      id="svga-group-head"
                      data-updown="0"
                      data-leftright="0"
                      data-rotate="0"
                      transform="matrix(1,0,0,1,0,0)"
                    >
                      <g
                        id="svga-group-ears-left-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-ears-left"
                          data-scaleX="1"
                          data-scaleY="1"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <path
                            id="SvgjsPath2927"
                            d="M45.671 84.344c-1.485-2.462-6.327-9.199-10.031-8.254 -3.012 0.772-2.973 4.971-3.206 7.455 -0.34 3.644-0.464 9.992 0.525 12.568 0.951 2.473 3.96 7.252 5.828 9.075 2.299 2.235 5.97 9.358 6.422 10.097 0.711 1.168 2.137 2.84 4.325 2.708 3.071-0.185 5.724-3.087 5.965-4.485C56.8 105.918 49.536 90.75 45.671 84.344z"
                            data-colored="true"
                            data-fillType="tone"
                            data-strokeType="sd3"
                            fill="#f5af95"
                            stroke="#c7633d"
                            stroke-width="1.5"
                            opacity="1"
                          ></path>
                          <path
                            id="SvgjsPath2928"
                            d="M44.2 99.341c-0.143-0.563 0.007-1.513 0.154-2.429 0.133-0.835 0.258-1.624 0.182-2.182 -0.289-2.09-1.915-6.06-2.976-8.212 -1.223-2.476-3.199-5.595-5.679-6.399 -1.024-0.333-1.699 0.065-2.089 0.468 -0.288 0.296-0.353 0.645-0.259 0.687 0.095 0.041 0.307-0.248 0.617-0.519 0.254-0.222-0.508-0.04 0 0 -0.205 1.04-0.865 6.302-0.41 10.143 0.358 3.022 1.05 5.279 1.263 5.617 0.031 0.356 0.083 0.705 0.16 1.043 1.002 4.41 7.518 10.177 9.034 11.82 0.28 0.303 0.574 0.483 0.646 0.409s-0.101-0.373-0.379-0.678c-1.498-1.632-7.971-7.381-8.939-11.635 -1.027-4.514 3.912-11.207 4.699-12.623 0.401 0.665 0.742 1.303 1.004 1.835 0.207 0.417 0.434 0.906 0.67 1.435 -0.463 0.738-5.118 6.127-3.934 10.441 0.438 1.591 3.822 3.642 5.131 4.203 0.72 0.31 0.99 0.772 1.304 1.306 0.364 0.624 0.033 2.229 1.23 2.739 0.244 0.104 0.464 0.146 0.659 0.146 0.338 0 0.594-0.13 0.783-0.284 0.02 0.271 0.019 0.619 0.009 0.941 -0.012 0.418 0.047 0.609 0.148 0.617 0.103 0.009 0.21-0.174 0.223-0.587 0.017-0.51 0.014-1.141-0.077-1.444 -0.269-0.889-1.088-1.894-1.957-2.957C44.563 102.197 44.422 100.213 44.2 99.341zM34.969 95.432c-2.348-6.923 1.283-13.229 1.81-14.179 1.012 0.399 2.562 2.193 3.221 3.235C39.52 85.321 35.067 90.775 34.969 95.432zM45.772 106.464c-1.084-0.462-0.706-1.984-1.056-2.584 -0.318-0.542-0.646-1.102-1.479-1.46 -0.18-0.078-0.379-0.196-0.583-0.332 -2.682-6.075 0.293-8.73 1.039-9.273 0.229 0.742 0.399 1.423 0.476 1.97 0.068 0.5-0.059 1.298-0.181 2.068 -0.153 0.955-0.31 1.944-0.147 2.584 0.244 0.953 0.411 2.97 1.291 4.048 0.781 0.956 1.583 1.942 1.857 2.746C46.871 106.391 46.5 106.775 45.772 106.464z"
                            data-colored="true"
                            data-fillType="sd3"
                            data-strokeType="none"
                            fill="#c7633d"
                            stroke-width="none"
                            opacity="1"
                            stroke="none"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="svga-group-ears-right-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-ears-right"
                          data-scaleX="1"
                          data-scaleY="1"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <path
                            id="SvgjsPath2929"
                            d="M154.066 84.344c1.486-2.462 6.328-9.199 10.031-8.254 3.012 0.772 2.973 4.971 3.207 7.455 0.34 3.644 0.463 9.992-0.525 12.568 -0.951 2.473-3.961 7.252-5.828 9.075 -2.299 2.235-5.971 9.358-6.422 10.097 -0.711 1.168-2.137 2.84-4.326 2.708 -3.07-0.185-5.723-3.087-5.965-4.485C142.938 105.918 150.203 90.75 154.066 84.344z"
                            data-colored="true"
                            data-fillType="tone"
                            data-strokeType="sd3"
                            fill="#f5af95"
                            stroke="#c7633d"
                            stroke-width="1.5"
                            opacity="1"
                          ></path>
                          <path
                            id="SvgjsPath2930"
                            d="M154.322 103.243c-0.869 1.063-1.688 2.068-1.957 2.957 -0.092 0.304-0.094 0.935-0.078 1.444 0.014 0.413 0.121 0.596 0.225 0.587 0.102-0.008 0.16-0.199 0.148-0.617 -0.01-0.322-0.012-0.67 0.008-0.941 0.189 0.154 0.445 0.284 0.783 0.284 0.195 0 0.416-0.042 0.66-0.146 1.195-0.511 0.865-2.116 1.229-2.739 0.314-0.534 0.584-0.997 1.305-1.306 1.309-0.561 4.693-2.611 5.131-4.203 1.184-4.314-3.471-9.704-3.934-10.441 0.234-0.529 0.463-1.018 0.668-1.435 0.264-0.532 0.604-1.171 1.006-1.835 0.787 1.416 5.725 8.108 4.699 12.623 -0.969 4.254-7.441 10.003-8.939 11.635 -0.279 0.305-0.453 0.604-0.381 0.678 0.074 0.074 0.367-0.106 0.646-0.409 1.516-1.643 8.031-7.41 9.033-11.82 0.078-0.338 0.131-0.687 0.162-1.043 0.211-0.337 0.904-2.594 1.262-5.617 0.455-3.841-0.205-9.103-0.41-10.143 0.508-0.04-0.254-0.222 0 0 0.311 0.271 0.523 0.56 0.617 0.519 0.094-0.042 0.029-0.39-0.258-0.687 -0.391-0.403-1.066-0.801-2.09-0.468 -2.48 0.804-4.457 3.923-5.68 6.399 -1.061 2.152-2.686 6.122-2.975 8.212 -0.076 0.558 0.049 1.347 0.182 2.182 0.146 0.916 0.297 1.866 0.154 2.429C155.316 100.213 155.176 102.197 154.322 103.243zM159.738 84.488c0.66-1.042 2.209-2.835 3.221-3.235 0.527 0.95 4.158 7.256 1.811 14.179C164.672 90.775 160.219 85.321 159.738 84.488zM152.75 106.229c0.273-0.804 1.076-1.79 1.857-2.746 0.879-1.078 1.047-3.095 1.291-4.048 0.162-0.64 0.006-1.629-0.146-2.584 -0.123-0.77-0.25-1.568-0.182-2.068 0.076-0.547 0.246-1.228 0.475-1.97 0.746 0.543 3.721 3.199 1.039 9.273 -0.203 0.136-0.402 0.254-0.584 0.332 -0.832 0.358-1.16 0.918-1.479 1.46 -0.35 0.6 0.029 2.123-1.055 2.584C153.238 106.775 152.867 106.391 152.75 106.229z"
                            data-colored="true"
                            data-fillType="sd3"
                            data-strokeType="none"
                            fill="#c7633d"
                            stroke-width="none"
                            opacity="1"
                            stroke="none"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="svga-group-faceshape-wrap"
                        data-scaleX="1"
                        data-scaleY="1"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g id="svga-group-faceshape-single">
                          <path
                            id="SvgjsPath3061"
                            d="M158.785 78.006l-0.005 0c-0.01 0.046-12.197 40.27-15.879 52.418 -0.715 2.358-1.931 4.551-3.556 6.386 -6.375 7.194-23.768 25.057-39.324 25.057 -15.849 0-33.591-19.045-39.708-26.214 -1.442-1.688-2.507-3.633-3.172-5.765 -3.607-11.551-16.126-51.648-16.137-51.694h-0.001c-1.298-4.992-1.994-10.231-2.002-15.634C38.949 28.536 66.155 0.92 99.773 0.867c33.621-0.053 60.913 27.476 60.964 61.499C160.746 67.769 160.068 73.01 158.785 78.006z"
                            data-colored="true"
                            data-fillType="tone"
                            data-strokeType="none"
                            fill="#f5af95"
                            stroke-width="none"
                            opacity="1"
                            stroke="none"
                          ></path>
                          <path
                            id="SvgjsPath3062"
                            d="M132.168 10.26c14.31 11.135 23.671 29.457 23.699 50.208 0.009 5.404-0.615 10.645-1.796 15.641l-0.004 0c-0.009 0.046-11.223 40.27-14.608 52.417 -0.658 2.358-1.776 4.551-3.271 6.385 -5.865 7.195-21.866 25.059-36.178 25.059 -14.582 0-30.904-19.047-36.531-26.215 -1.327-1.689-2.306-3.633-2.918-5.764 -3.318-11.552-14.836-51.649-14.846-51.695h-0.001c-1.194-4.992-1.834-10.231-1.842-15.634 -0.029-20.827 9.348-39.239 23.713-50.412C50.392 21.159 38.967 40.508 39.001 62.56c0.008 5.403 0.704 10.643 2.002 15.634h0.001c0.01 0.046 12.53 40.143 16.137 51.694 0.666 2.132 1.73 4.076 3.172 5.765 6.116 7.169 23.858 26.214 39.708 26.214 15.557 0 32.949-17.862 39.324-25.057 1.625-1.835 2.841-4.027 3.556-6.386 3.682-12.148 15.869-52.372 15.879-52.418l0.005 0c1.283-4.997 1.961-10.237 1.952-15.641C160.704 40.389 149.297 21.135 132.168 10.26z"
                            data-colored="true"
                            data-fillType="sd05"
                            data-strokeType="none"
                            fill="#eda184"
                            stroke-width="none"
                            opacity="1"
                            stroke="none"
                          ></path>
                          <path
                            id="SvgjsPath3063"
                            d="M158.785 78.006l-0.005 0c-0.01 0.046-12.197 40.27-15.879 52.418 -0.715 2.358-1.931 4.551-3.556 6.386 -6.375 7.194-23.768 25.057-39.324 25.057 -15.849 0-33.591-19.045-39.708-26.214 -1.442-1.688-2.507-3.633-3.172-5.765 -3.607-11.551-16.126-51.648-16.137-51.694h-0.001c-1.298-4.992-1.994-10.231-2.002-15.634C38.949 28.536 66.155 0.92 99.773 0.867c33.621-0.053 60.913 27.476 60.964 61.499C160.746 67.769 160.068 73.01 158.785 78.006z"
                            data-colored="true"
                            data-fillType="none"
                            data-strokeType="sd3"
                            fill="none"
                            stroke="#c7633d"
                            stroke-width="1.5"
                            opacity="1"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="svga-group-mouth-single-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-mouth-single"
                          data-scaleX="1"
                          data-scaleY="1"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <path
                            id="SvgjsPath3068"
                            d="M96.227 139.237l8.297-0.207C103.563 143.5 96.884 142.858 96.227 139.237z"
                            data-colored="false"
                            data-fillType="gradient"
                            data-strokeType="none"
                            data-fromskin="true"
                            fill="url(#SvgjsLinearGradient3069)"
                            opacity="1"
                          ></path>
                          <path
                            id="SvgjsPath3072"
                            d="M96.343 139.52c-0.371-0.05-0.315-0.579 0.08-0.542 0.043 0.006 4.308 0.546 7.878-0.215 0.386-0.075 0.5 0.455 0.13 0.534C101.634 139.895 98.015 139.755 96.343 139.52zM100.083 135.95c-1.503 0-2.96-0.521-4.424-0.776 -1.64-0.287-3.274-0.041-4.915 0.104 -1.676 0.149-5.333-0.013-6.365-0.666 -0.578-0.367-0.47-1.221 0.181-1.449 0.614-0.22 1.571 0.236 2.191 0.347 2.872 0.515 4.384-0.034 6.902-0.118 3.851-0.116 4.26 1.501 9.064 0.53 5.165-1.044 7.491-0.254 11.197-1.37 0.508-0.154 1.112-0.56 1.645-0.286 0.615 0.318 0.585 1.185-0.049 1.464 -3.406 1.502-7.174 0.895-10.955 1.526C103.073 135.502 101.596 135.95 100.083 135.95z"
                            data-colored="true"
                            data-fillType="sd3"
                            data-strokeType="none"
                            data-fromskin="true"
                            fill="#c7633d"
                            stroke-width="none"
                            opacity="1"
                            stroke="none"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="svga-group-eyes-left-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-eyes-left"
                          data-scaleX="1"
                          data-scaleY="1"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <g id="svga-group-eyesback-left">
                            <path
                              id="SvgjsPath3356"
                              d="M61.752 82.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.598 89.758 62.974 88.04 61.752 82.523z"
                              data-colored="false"
                              data-fillType="gradient"
                              data-strokeType="none"
                              fill="url(#SvgjsRadialGradient3357)"
                              opacity="1"
                            ></path>
                          </g>
                          <g
                            id="svga-group-eyesiriswrapper-left"
                            transform="matrix(1,0,0,1,0.25,0.25)"
                          >
                            <g
                              id="svga-group-eyesiriscontrol-left"
                              data-updown="0"
                              data-leftright="0"
                              data-rotate="0"
                              transform="matrix(1,0,0,1,0,0)"
                            >
                              <g
                                id="svga-group-eyesiris-left"
                                data-scaleX="1"
                                data-scaleY="1"
                                transform="matrix(1,0,0,1,0,0)"
                              >
                                <path
                                  id="SvgjsPath2947"
                                  d="M80 84c0 3.313-2.687 6-6 6 -3.313 0-6-2.687-6-6l0 0c0-3.314 2.687-6 6-6C77.313 77.999 80 80.686 80 84L80 84z"
                                  data-colored="true"
                                  data-fillType="tone"
                                  data-strokeType="none"
                                  fill="#4e60a3"
                                  stroke-width="none"
                                  opacity="1"
                                ></path>
                                <path
                                  id="SvgjsPath2948"
                                  d="M73.328 78.066c-0.023 0.003-0.047 0.006-0.071 0.009 0.029 0.135 0.057 0.271 0.085 0.406C73.336 78.344 73.333 78.204 73.328 78.066zM73.341 78.48c0.07 1.972 0.185 3.729 0.517 4.364C74.033 82.148 73.735 80.414 73.341 78.48zM73.859 82.845c-0.043 0.167-0.108 0.281-0.208 0.319 -0.1 0.038-0.226-0.006-0.368-0.103 0.041 0.167 0.037 0.297-0.036 0.378 -0.072 0.081-0.201 0.101-0.373 0.078 0.113 0.13 0.171 0.249 0.146 0.353 -0.027 0.104-0.134 0.182-0.293 0.242 0.159 0.063 0.266 0.141 0.291 0.245 0.025 0.104-0.033 0.223-0.145 0.352 0.17-0.021 0.301 0.001 0.371 0.082 0.071 0.081 0.075 0.212 0.035 0.379 0.141-0.097 0.265-0.139 0.365-0.1 0.101 0.038 0.166 0.152 0.206 0.32 0.081-0.152 0.171-0.249 0.28-0.26 0.104-0.014 0.216 0.059 0.329 0.188 0.001-0.172 0.037-0.299 0.127-0.36 0.088-0.061 0.219-0.049 0.379 0.013 -0.078-0.152-0.105-0.281-0.055-0.377 0.05-0.095 0.173-0.146 0.344-0.166 -0.141-0.099-0.227-0.2-0.225-0.308 0-0.108 0.084-0.209 0.227-0.306 -0.17-0.021-0.291-0.072-0.342-0.167 -0.049-0.095-0.022-0.225 0.058-0.377 -0.162 0.06-0.292 0.072-0.38 0.011 -0.089-0.061-0.125-0.188-0.125-0.36 -0.112 0.128-0.224 0.199-0.33 0.185C74.029 83.092 73.938 82.998 73.859 82.845zM74.466 82.92c0.479-0.535 1.021-2.209 1.57-4.104C75.182 80.593 74.467 82.202 74.466 82.92zM76.035 78.816c0.06-0.122 0.121-0.246 0.178-0.37 -0.021-0.007-0.042-0.017-0.063-0.026C76.112 78.553 76.074 78.686 76.035 78.816zM74.972 83.27c0.672-0.252 1.931-1.483 3.297-2.905C76.688 81.541 75.306 82.634 74.972 83.27zM78.269 80.365c0.1-0.075 0.203-0.15 0.305-0.225 -0.014-0.018-0.03-0.033-0.042-0.049C78.445 80.181 78.358 80.274 78.269 80.365zM75.254 83.814c0.713 0.088 2.4-0.417 4.272-1.041C77.578 83.081 75.848 83.406 75.254 83.814zM79.526 82.774c0.11-0.016 0.225-0.034 0.337-0.052 -0.004-0.019-0.009-0.038-0.014-0.057C79.742 82.701 79.632 82.738 79.526 82.774zM75.253 84.427c0.59 0.412 2.318 0.747 4.262 1.063C77.65 84.857 75.967 84.342 75.253 84.427zM79.516 85.49c0.095 0.033 0.191 0.067 0.285 0.098 0.005-0.017 0.009-0.033 0.012-0.05C79.716 85.523 79.615 85.507 79.516 85.49zM74.965 84.97c0.333 0.637 1.708 1.738 3.282 2.924C76.888 86.464 75.638 85.226 74.965 84.97zM78.248 87.892c0.059 0.062 0.12 0.126 0.179 0.189 0.01-0.012 0.019-0.021 0.03-0.032C78.387 87.997 78.315 87.944 78.248 87.892zM74.46 85.317c-0.003 0.719 0.703 2.331 1.547 4.113C75.468 87.533 74.937 85.855 74.46 85.317zM76.007 89.431c0.021 0.075 0.043 0.152 0.063 0.229 0.015-0.006 0.025-0.01 0.039-0.014C76.076 89.574 76.041 89.5 76.007 89.431zM73.851 85.389c-0.336 0.637-0.461 2.39-0.542 4.361C73.713 87.82 74.022 86.087 73.851 85.389zM73.309 89.75c-0.017 0.075-0.031 0.151-0.047 0.228 0.014 0.003 0.025 0.003 0.039 0.005C73.303 89.906 73.307 89.826 73.309 89.75zM73.28 85.169c-0.596 0.407-1.521 1.904-2.508 3.61C72.026 87.259 73.106 85.867 73.28 85.169zM70.772 88.779c-0.053 0.063-0.108 0.13-0.162 0.193 0.013 0.008 0.024 0.014 0.038 0.024C70.688 88.924 70.731 88.851 70.772 88.779zM72.875 84.71c-0.716 0.083-2.231 0.978-3.898 2.029C70.795 85.977 72.395 85.248 72.875 84.71zM68.976 86.741c-0.086 0.036-0.174 0.072-0.263 0.11 0.006 0.013 0.015 0.027 0.023 0.04C68.817 86.842 68.897 86.791 68.976 86.741zM72.728 84.113c-0.671-0.257-2.429-0.168-4.395-0.011C70.297 84.27 72.055 84.367 72.728 84.113zM68.333 84.102c-0.107-0.01-0.217-0.02-0.323-0.029 0 0.019-0.002 0.038 0 0.056C68.119 84.119 68.228 84.11 68.333 84.102zM72.875 83.519c-0.473-0.539-2.069-1.277-3.881-2.051C70.653 82.528 72.163 83.432 72.875 83.519zM68.994 81.468c-0.104-0.067-0.209-0.134-0.315-0.201 -0.009 0.019-0.019 0.038-0.029 0.055C68.766 81.371 68.882 81.419 68.994 81.468zM73.284 83.061c-0.169-0.698-1.241-2.094-2.485-3.623C71.775 81.15 72.692 82.651 73.284 83.061zM70.799 79.438c-0.067-0.115-0.132-0.232-0.199-0.349 -0.019 0.013-0.039 0.026-0.056 0.039C70.628 79.231 70.716 79.335 70.799 79.438z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsRadialGradient2949)"
                                  opacity="0.7"
                                ></path>
                                <path
                                  id="SvgjsPath2952"
                                  d="M74.886 78.086c-0.024-0.003-0.047-0.007-0.07-0.01 -0.007 0.138-0.016 0.277-0.024 0.414C74.822 78.356 74.855 78.22 74.886 78.086zM74.791 78.489c-0.442 1.922-0.787 3.649-0.629 4.35C74.511 82.211 74.671 80.459 74.791 78.489zM74.161 82.839c-0.084 0.15-0.176 0.243-0.283 0.254 -0.106 0.01-0.216-0.064-0.327-0.195 -0.004 0.171-0.042 0.297-0.133 0.356 -0.09 0.059-0.221 0.045-0.38-0.021 0.076 0.155 0.101 0.285 0.049 0.378 -0.053 0.094-0.176 0.142-0.345 0.158 0.137 0.101 0.22 0.204 0.217 0.312 -0.002 0.107-0.089 0.207-0.231 0.302 0.169 0.024 0.29 0.079 0.337 0.174 0.048 0.096 0.018 0.225-0.064 0.375 0.161-0.057 0.292-0.065 0.379-0.002 0.087 0.063 0.12 0.19 0.116 0.363 0.117-0.125 0.229-0.196 0.337-0.179 0.105 0.014 0.194 0.113 0.27 0.268 0.045-0.167 0.113-0.279 0.216-0.315 0.101-0.036 0.225 0.01 0.363 0.111 -0.036-0.167-0.029-0.299 0.044-0.378 0.073-0.079 0.205-0.096 0.376-0.072 -0.111-0.132-0.168-0.251-0.138-0.355 0.028-0.104 0.136-0.18 0.299-0.237 -0.16-0.064-0.263-0.145-0.288-0.25 -0.023-0.105 0.037-0.223 0.154-0.349 -0.172 0.016-0.301-0.006-0.37-0.088 -0.07-0.082-0.072-0.214-0.028-0.379 -0.142 0.094-0.268 0.134-0.367 0.093C74.261 83.122 74.199 83.007 74.161 82.839zM74.729 83.07c0.601-0.394 1.557-1.871 2.578-3.558C76.022 81.007 74.916 82.375 74.729 83.07zM77.307 79.511c0.089-0.102 0.18-0.206 0.268-0.311 -0.019-0.013-0.036-0.028-0.055-0.042C77.449 79.277 77.378 79.396 77.307 79.511zM75.127 83.538c0.715-0.07 2.25-0.934 3.937-1.953C77.231 82.312 75.614 83.01 75.127 83.538zM79.063 81.584c0.117-0.046 0.235-0.092 0.354-0.138 -0.01-0.021-0.021-0.04-0.028-0.059C79.281 81.453 79.173 81.52 79.063 81.584zM75.259 84.137c0.666 0.27 2.426 0.218 4.395 0.101C77.693 84.03 75.938 83.896 75.259 84.137zM79.654 84.237c0.112 0.013 0.226 0.025 0.339 0.037 0-0.02 0.001-0.039 0.002-0.058C79.881 84.223 79.766 84.23 79.654 84.237zM75.1 84.729c0.462 0.551 2.046 1.321 3.842 2.129C77.303 85.763 75.811 84.831 75.1 84.729zM78.941 86.858c0.083 0.057 0.167 0.114 0.25 0.168 0.009-0.015 0.017-0.03 0.025-0.045C79.126 86.942 79.032 86.9 78.941 86.858zM74.68 85.179c0.156 0.701 1.2 2.12 2.414 3.674C76.151 87.119 75.264 85.599 74.68 85.179zM77.094 88.85c0.042 0.075 0.083 0.153 0.125 0.229 0.012-0.009 0.024-0.016 0.037-0.024C77.202 88.987 77.147 88.917 77.094 88.85zM74.103 85.383c-0.188 0.693 0.076 2.433 0.43 4.373C74.502 87.784 74.424 86.026 74.103 85.383zM74.532 89.756c0.001 0.078 0.003 0.158 0.003 0.238 0.014-0.002 0.027-0.004 0.041-0.004C74.562 89.913 74.547 89.833 74.532 89.756zM73.496 85.294c-0.49 0.528-1.064 2.189-1.652 4.072C72.733 87.607 73.481 86.013 73.496 85.294zM71.843 89.366c-0.035 0.068-0.07 0.138-0.104 0.208 0.012 0.006 0.023 0.009 0.036 0.015C71.797 89.516 71.821 89.439 71.843 89.366zM73 84.934c-0.68 0.239-1.962 1.446-3.357 2.838C71.25 86.628 72.652 85.563 73 84.934zM69.644 87.772c-0.067 0.047-0.137 0.098-0.205 0.145 0.01 0.011 0.02 0.02 0.029 0.032C69.525 87.89 69.585 87.832 69.644 87.772zM72.728 84.385c-0.713-0.104-2.407 0.368-4.291 0.952C70.392 85.071 72.125 84.781 72.728 84.385zM68.437 85.339c-0.092 0.013-0.187 0.024-0.283 0.039 0.003 0.015 0.008 0.03 0.013 0.044C68.258 85.396 68.348 85.366 68.437 85.339zM72.741 83.772c-0.582-0.423-2.303-0.792-4.242-1.149C70.353 83.294 72.025 83.843 72.741 83.772zM68.499 82.623c-0.101-0.037-0.205-0.075-0.305-0.112 -0.005 0.019-0.011 0.037-0.015 0.054C68.288 82.584 68.395 82.604 68.499 82.623zM73.038 83.235c-0.318-0.643-1.668-1.769-3.219-2.986C71.147 81.704 72.372 82.968 73.038 83.235zM69.818 80.25c-0.083-0.091-0.167-0.183-0.251-0.275 -0.014 0.016-0.029 0.031-0.042 0.046C69.624 80.097 69.723 80.173 69.818 80.25zM73.551 82.899c0.017-0.718-0.656-2.344-1.464-4.142C72.587 80.663 73.085 82.35 73.551 82.899zM72.087 78.757c-0.034-0.128-0.067-0.259-0.101-0.389 -0.021 0.007-0.043 0.015-0.063 0.023C71.977 78.513 72.033 78.636 72.087 78.757z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsRadialGradient2953)"
                                  opacity="0.4"
                                ></path>
                                <path
                                  id="SvgjsPath2956"
                                  d="M76.354 84c0 1.3-1.053 2.353-2.353 2.353 -1.299 0-2.354-1.053-2.354-2.353 0-1.299 1.055-2.354 2.354-2.354C75.301 81.646 76.354 82.7 76.354 84z"
                                  data-colored="true"
                                  data-fillType="tone"
                                  data-strokeType="none"
                                  fill="#4e60a3"
                                  stroke-width="none"
                                  opacity="1"
                                ></path>
                                <path
                                  id="SvgjsPath2957"
                                  d="M76.354 84c0 1.3-1.053 2.353-2.353 2.353 -1.299 0-2.354-1.053-2.354-2.353 0-1.299 1.055-2.354 2.354-2.354C75.301 81.646 76.354 82.7 76.354 84z"
                                  data-colored="false"
                                  data-fillType="#000000"
                                  data-strokeType="none"
                                  fill="#000000"
                                  stroke-width="none"
                                  opacity="0.9"
                                ></path>
                                <path
                                  id="SvgjsPath2958"
                                  d="M70.717 86.748c0.449-0.302 1.059-0.18 1.36 0.268 0.301 0.449 0.182 1.059-0.268 1.36 -0.45 0.303-1.059 0.183-1.36-0.267C70.148 87.66 70.268 87.049 70.717 86.748L70.717 86.748z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsLinearGradient2959)"
                                  opacity="0.5"
                                ></path>
                                <path
                                  id="SvgjsPath2962"
                                  d="M75.86 83.672c-0.251 0.374-0.969 0.331-1.606-0.096 -0.638-0.427-0.95-1.078-0.7-1.451l0-0.001c0.25-0.374 0.969-0.331 1.605 0.097C75.798 82.647 76.11 83.297 75.86 83.672 75.86 83.672 75.86 83.672 75.86 83.672z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsLinearGradient2963)"
                                  opacity="0.5"
                                ></path>
                                <path
                                  id="SvgjsPath2966"
                                  d="M78.716 82.673c-0.568 0.873-2.036 0.925-3.275 0.117 -1.24-0.808-1.784-2.17-1.215-3.043 0.568-0.872 2.036-0.924 3.275-0.117C78.74 80.439 79.284 81.802 78.716 82.673L78.716 82.673z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsLinearGradient2967)"
                                  opacity="0.75"
                                ></path>
                              </g>
                            </g>
                          </g>
                          <g id="svga-group-eyesfront-left">
                            <path
                              id="SvgjsPath3378"
                              d="M53.294 83c0.809 10.899 11.637 23.583 20.506 22.236 10.498 0.106 20.864-7.868 20.864-22.305s-5.087-26.528-21.127-26.528C62.037 56.402 53.294 68.563 53.294 83zM61.752 82.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.598 89.758 62.974 88.04 61.752 82.523z"
                              data-colored="true"
                              data-fillType="tone"
                              data-strokeType="none"
                              data-fromskin="true"
                              fill="#f5af95"
                              stroke-width="none"
                              opacity="1"
                              stroke="none"
                            ></path>
                            <path
                              id="SvgjsPath3379"
                              d="M72.262 90.163c3.614 0.398 13.873-1.561 14.253-2.847 0.687-2.32-4.534-6.921-12.052-7.844C68.003 78.68 62.9 79.816 61.907 81.6c0.898-6.4 7.7-11.397 15.987-11.434 8.911-0.037 16.148 5.676 16.172 12.765 0.021 7.088-7.185 12.862-16.095 12.902 -8.913 0.037-16.149-5.676-16.173-12.764 0-0.105 0.016-0.208 0.019-0.313C63.147 88.083 68.651 89.764 72.262 90.163z"
                              data-colored="false"
                              data-fillType="gradient"
                              data-strokeType="none"
                              data-fromskin="true"
                              fill="url(#SvgjsRadialGradient3380)"
                              opacity="1"
                            ></path>
                            <path
                              id="SvgjsPath3384"
                              d="M61.752 82.523c-0.506-2.285 5.191-3.973 12.711-3.051 7.518 0.923 12.738 5.524 12.052 7.844 -0.38 1.286-10.639 3.245-14.253 2.847C68.598 89.758 62.974 88.04 61.752 82.523z"
                              data-colored="false"
                              data-fillType="gradient"
                              data-strokeType="none"
                              fill="url(#SvgjsRadialGradient3385)"
                              opacity="1"
                            ></path>
                            <path
                              id="SvgjsPath3388"
                              d="M62.148 77.417c4.208-1.978 9.35-2.16 13.838-1.005 2.404 0.561 4.965 1.285 7.063 2.638 1.945 1.135 3.525 2.5 5.002 4.19 -1.342-1.701-2.773-3.118-4.623-4.27 -2.276-1.416-4.769-2.294-7.364-2.916C71.478 74.928 66.342 75.184 62.148 77.417z"
                              data-colored="true"
                              data-fillType="sd3"
                              data-strokeType="none"
                              data-fromskin="true"
                              fill="#c7633d"
                              stroke-width="none"
                              opacity="1"
                              stroke="none"
                            ></path>
                            <path
                              id="SvgjsPath3389"
                              d="M62.769 78.02c0.88-0.352 4.065-1 5.456-1.066 1.687-0.082 5.073 0.125 6.735 0.424 3.374 0.608 9.251 2.483 11.678 7.184 0.746 1.445 0.074 2.456-0.123 2.675 0.3-2.426-4.838-6.746-12.052-7.604 -7.52-0.894-13.217 0.743-12.711 2.958 1.222 5.348 6.846 7.013 10.51 7.405 4.099 0.439 11.684-1.539 12.686-1.753 -1.999 1.009-7.524 2.095-9.767 2.303 -0.744 0.07-2.24 0.104-2.986 0.085 -5.949-0.158-10.169-3.175-11.729-7.26C59.464 80.745 60.56 78.902 62.769 78.02z"
                              data-colored="true"
                              data-fillType="tone"
                              data-strokeType="none"
                              fill="#000000"
                              stroke-width="none"
                              opacity="1"
                              stroke="none"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="svga-group-eyes-right-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-eyes-right"
                          data-scaleX="1"
                          data-scaleY="1"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <g id="svga-group-eyesback-right">
                            <path
                              id="SvgjsPath3363"
                              d="M137.849 82.523c0.506-2.285-5.191-3.973-12.711-3.051 -7.518 0.923-12.738 5.524-12.052 7.844 0.38 1.286 10.639 3.245 14.253 2.847C131.003 89.758 136.627 88.04 137.849 82.523z"
                              data-colored="false"
                              data-fillType="gradient"
                              data-strokeType="none"
                              fill="url(#SvgjsRadialGradient3364)"
                              opacity="1"
                            ></path>
                          </g>
                          <g
                            id="svga-group-eyesiriswrapper-right"
                            transform="matrix(1,0,0,1,-0.25,0.25)"
                          >
                            <g
                              id="svga-group-eyesiriscontrol-right"
                              data-updown="0"
                              data-leftright="0"
                              data-rotate="0"
                              transform="matrix(1,0,0,1,0,0)"
                            >
                              <g
                                id="svga-group-eyesiris-right"
                                data-scaleX="1"
                                data-scaleY="1"
                                transform="matrix(1,0,0,1,0,0)"
                              >
                                <path
                                  id="SvgjsPath2970"
                                  d="M132 84c0 3.313-2.687 6-5.999 6 -3.313 0-6.001-2.687-6.001-6l0 0c0-3.314 2.688-6 6.001-6C129.313 77.999 132 80.686 132 84L132 84z"
                                  data-colored="true"
                                  data-fillType="tone"
                                  data-strokeType="none"
                                  fill="#4e60a3"
                                  stroke-width="none"
                                  opacity="1"
                                ></path>
                                <path
                                  id="SvgjsPath2971"
                                  d="M125.328 78.066c-0.023 0.003-0.047 0.006-0.071 0.009 0.029 0.135 0.058 0.271 0.085 0.406C125.336 78.344 125.333 78.204 125.328 78.066zM125.341 78.48c0.069 1.972 0.185 3.729 0.518 4.364C126.033 82.148 125.735 80.414 125.341 78.48zM125.858 82.845c-0.042 0.167-0.108 0.281-0.207 0.319 -0.101 0.038-0.226-0.006-0.367-0.103 0.04 0.167 0.036 0.297-0.036 0.378 -0.072 0.081-0.201 0.101-0.372 0.078 0.112 0.13 0.171 0.249 0.146 0.353 -0.028 0.104-0.134 0.182-0.293 0.242 0.158 0.063 0.265 0.141 0.29 0.245 0.025 0.104-0.032 0.223-0.145 0.352 0.17-0.021 0.3 0.001 0.37 0.082 0.071 0.081 0.075 0.212 0.035 0.379 0.141-0.097 0.266-0.139 0.365-0.1 0.102 0.038 0.166 0.152 0.206 0.32 0.08-0.152 0.172-0.249 0.279-0.26 0.105-0.014 0.217 0.059 0.329 0.188 0.002-0.172 0.037-0.299 0.128-0.36 0.087-0.061 0.219-0.049 0.379 0.013 -0.078-0.152-0.104-0.281-0.056-0.377 0.051-0.095 0.174-0.146 0.345-0.166 -0.141-0.099-0.228-0.2-0.225-0.308 -0.001-0.108 0.084-0.209 0.227-0.306 -0.171-0.021-0.291-0.072-0.342-0.167 -0.05-0.095-0.022-0.225 0.057-0.377 -0.161 0.06-0.291 0.072-0.38 0.011s-0.124-0.188-0.125-0.36c-0.111 0.128-0.224 0.199-0.33 0.185C126.029 83.092 125.938 82.998 125.858 82.845zM126.466 82.92c0.479-0.535 1.021-2.209 1.569-4.104C127.182 80.593 126.468 82.202 126.466 82.92zM128.035 78.816c0.06-0.122 0.121-0.246 0.179-0.37 -0.021-0.007-0.042-0.017-0.063-0.026C128.112 78.553 128.074 78.686 128.035 78.816zM126.972 83.27c0.673-0.252 1.932-1.483 3.298-2.905C128.688 81.541 127.307 82.634 126.972 83.27zM130.27 80.365c0.1-0.075 0.202-0.15 0.305-0.225 -0.015-0.018-0.03-0.033-0.042-0.049C130.445 80.181 130.358 80.274 130.27 80.365zM127.255 83.814c0.713 0.088 2.399-0.417 4.271-1.041C129.578 83.081 127.848 83.406 127.255 83.814zM131.526 82.774c0.11-0.016 0.225-0.034 0.337-0.052 -0.005-0.019-0.009-0.038-0.014-0.057C131.742 82.701 131.632 82.738 131.526 82.774zM127.253 84.427c0.591 0.412 2.318 0.747 4.263 1.063C129.65 84.857 127.967 84.342 127.253 84.427zM131.516 85.49c0.095 0.033 0.19 0.067 0.285 0.098 0.005-0.017 0.009-0.033 0.013-0.05C131.716 85.523 131.614 85.507 131.516 85.49zM126.965 84.97c0.332 0.637 1.708 1.738 3.282 2.924C128.889 86.464 127.638 85.226 126.965 84.97zM130.248 87.892c0.059 0.062 0.119 0.126 0.178 0.189 0.01-0.012 0.02-0.021 0.031-0.032C130.387 87.997 130.315 87.944 130.248 87.892zM126.461 85.317c-0.003 0.719 0.702 2.331 1.547 4.113C127.468 87.533 126.937 85.855 126.461 85.317zM128.008 89.431c0.021 0.075 0.043 0.152 0.063 0.229 0.015-0.006 0.026-0.01 0.039-0.014C128.076 89.574 128.041 89.5 128.008 89.431zM125.851 85.389c-0.336 0.637-0.461 2.39-0.542 4.361C125.713 87.82 126.022 86.087 125.851 85.389zM125.309 89.75c-0.017 0.075-0.031 0.151-0.047 0.228 0.014 0.003 0.024 0.003 0.039 0.005C125.303 89.906 125.307 89.826 125.309 89.75zM125.279 85.169c-0.596 0.407-1.521 1.904-2.508 3.61C124.026 87.259 125.105 85.867 125.279 85.169zM122.771 88.779c-0.052 0.063-0.107 0.13-0.161 0.193 0.013 0.008 0.024 0.014 0.037 0.024C122.688 88.924 122.731 88.851 122.771 88.779zM124.874 84.71c-0.716 0.083-2.23 0.978-3.897 2.029C122.795 85.977 124.395 85.248 124.874 84.71zM120.977 86.741c-0.087 0.036-0.175 0.072-0.263 0.11 0.006 0.013 0.014 0.027 0.023 0.04C120.817 86.842 120.897 86.791 120.977 86.741zM124.729 84.113c-0.672-0.257-2.43-0.168-4.396-0.011C122.298 84.27 124.055 84.367 124.729 84.113zM120.333 84.102c-0.106-0.01-0.217-0.02-0.322-0.029 -0.001 0.019-0.003 0.038-0.001 0.056C120.119 84.119 120.228 84.11 120.333 84.102zM124.876 83.519c-0.474-0.539-2.069-1.277-3.882-2.051C122.653 82.528 124.163 83.432 124.876 83.519zM120.994 81.468c-0.104-0.067-0.21-0.134-0.315-0.201 -0.009 0.019-0.019 0.038-0.028 0.055C120.766 81.371 120.883 81.419 120.994 81.468zM125.284 83.061c-0.169-0.698-1.241-2.094-2.485-3.623C123.775 81.15 124.692 82.651 125.284 83.061zM122.799 79.438c-0.067-0.115-0.133-0.232-0.198-0.349 -0.019 0.013-0.039 0.026-0.057 0.039C122.629 79.231 122.716 79.335 122.799 79.438z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsRadialGradient2972)"
                                  opacity="0.7"
                                ></path>
                                <path
                                  id="SvgjsPath2975"
                                  d="M126.886 78.086c-0.024-0.003-0.047-0.007-0.07-0.01 -0.008 0.138-0.016 0.277-0.024 0.414C126.821 78.356 126.854 78.22 126.886 78.086zM126.791 78.489c-0.443 1.922-0.787 3.649-0.63 4.35C126.511 82.211 126.671 80.459 126.791 78.489zM126.161 82.839c-0.084 0.15-0.177 0.243-0.283 0.254 -0.106 0.01-0.216-0.064-0.327-0.195 -0.004 0.171-0.042 0.297-0.133 0.356 -0.09 0.059-0.221 0.045-0.38-0.021 0.075 0.155 0.101 0.285 0.049 0.378 -0.054 0.094-0.176 0.142-0.346 0.158 0.138 0.101 0.22 0.204 0.217 0.312 -0.002 0.107-0.089 0.207-0.23 0.302 0.17 0.024 0.289 0.079 0.337 0.174 0.048 0.096 0.018 0.225-0.064 0.375 0.162-0.057 0.293-0.065 0.38-0.002 0.087 0.063 0.12 0.19 0.115 0.363 0.117-0.125 0.229-0.196 0.337-0.179 0.105 0.014 0.194 0.113 0.27 0.268 0.046-0.167 0.113-0.279 0.216-0.315 0.101-0.036 0.226 0.01 0.363 0.111 -0.035-0.167-0.028-0.299 0.045-0.378 0.072-0.079 0.204-0.096 0.375-0.072 -0.11-0.132-0.168-0.251-0.138-0.355 0.027-0.104 0.136-0.18 0.299-0.237 -0.159-0.064-0.263-0.145-0.288-0.25 -0.022-0.105 0.038-0.223 0.154-0.349 -0.172 0.016-0.302-0.006-0.37-0.088 -0.07-0.082-0.072-0.214-0.027-0.379 -0.143 0.094-0.269 0.134-0.368 0.093C126.262 83.122 126.198 83.007 126.161 82.839zM126.729 83.07c0.601-0.394 1.557-1.871 2.578-3.558C128.022 81.007 126.916 82.375 126.729 83.07zM129.307 79.511c0.089-0.102 0.18-0.206 0.269-0.311 -0.02-0.013-0.037-0.028-0.056-0.042C129.449 79.277 129.378 79.396 129.307 79.511zM127.127 83.538c0.715-0.07 2.249-0.934 3.937-1.953C129.231 82.312 127.614 83.01 127.127 83.538zM131.063 81.584c0.116-0.046 0.234-0.092 0.354-0.138 -0.01-0.021-0.021-0.04-0.028-0.059C131.281 81.453 131.173 81.52 131.063 81.584zM127.259 84.137c0.666 0.27 2.426 0.218 4.396 0.101C129.692 84.03 127.938 83.896 127.259 84.137zM131.654 84.237c0.111 0.013 0.226 0.025 0.339 0.037 0.001-0.02 0.001-0.039 0.002-0.058C131.882 84.223 131.766 84.23 131.654 84.237zM127.1 84.729c0.463 0.551 2.046 1.321 3.842 2.129C129.303 85.763 127.811 84.831 127.1 84.729zM130.941 86.858c0.082 0.057 0.167 0.114 0.25 0.168 0.009-0.015 0.018-0.03 0.024-0.045C131.126 86.942 131.032 86.9 130.941 86.858zM126.681 85.179c0.155 0.701 1.199 2.12 2.413 3.674C128.151 87.119 127.265 85.599 126.681 85.179zM129.095 88.85c0.041 0.075 0.082 0.153 0.124 0.229 0.012-0.009 0.023-0.016 0.037-0.024C129.202 88.987 129.146 88.917 129.095 88.85zM126.103 85.383c-0.188 0.693 0.076 2.433 0.43 4.373C126.502 87.784 126.424 86.026 126.103 85.383zM126.532 89.756c0.001 0.078 0.003 0.158 0.003 0.238 0.015-0.002 0.026-0.004 0.04-0.004C126.562 89.913 126.547 89.833 126.532 89.756zM125.495 85.294c-0.489 0.528-1.064 2.189-1.652 4.072C124.733 87.607 125.48 86.013 125.495 85.294zM123.843 89.366c-0.035 0.068-0.069 0.138-0.104 0.208 0.012 0.006 0.022 0.009 0.035 0.015C123.797 89.516 123.821 89.439 123.843 89.366zM125 84.934c-0.68 0.239-1.961 1.446-3.356 2.838C123.25 86.628 124.652 85.563 125 84.934zM121.644 87.772c-0.067 0.047-0.138 0.098-0.205 0.145 0.01 0.011 0.02 0.02 0.029 0.032C121.525 87.89 121.586 87.832 121.644 87.772zM124.728 84.385c-0.713-0.104-2.406 0.368-4.29 0.952C122.392 85.071 124.126 84.781 124.728 84.385zM120.438 85.339c-0.093 0.013-0.188 0.024-0.283 0.039 0.004 0.015 0.008 0.03 0.013 0.044C120.258 85.396 120.348 85.366 120.438 85.339zM124.741 83.772c-0.582-0.423-2.303-0.792-4.242-1.149C122.353 83.294 124.025 83.843 124.741 83.772zM120.499 82.623c-0.101-0.037-0.205-0.075-0.305-0.112 -0.006 0.019-0.011 0.037-0.015 0.054C120.287 82.584 120.395 82.604 120.499 82.623zM125.038 83.235c-0.318-0.643-1.669-1.769-3.22-2.986C123.147 81.704 124.372 82.968 125.038 83.235zM121.818 80.25c-0.083-0.091-0.167-0.183-0.251-0.275 -0.015 0.016-0.028 0.031-0.043 0.046C121.623 80.097 121.724 80.173 121.818 80.25zM125.551 82.899c0.017-0.718-0.656-2.344-1.464-4.142C124.588 80.663 125.085 82.35 125.551 82.899zM124.087 78.757c-0.034-0.128-0.067-0.259-0.102-0.389 -0.021 0.007-0.043 0.015-0.063 0.023C123.977 78.513 124.033 78.636 124.087 78.757z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsRadialGradient2976)"
                                  opacity="0.4"
                                ></path>
                                <path
                                  id="SvgjsPath2979"
                                  d="M128.354 84c0 1.3-1.054 2.353-2.353 2.353 -1.3 0-2.354-1.053-2.354-2.353 0-1.299 1.055-2.354 2.354-2.354C127.302 81.646 128.354 82.7 128.354 84z"
                                  data-colored="true"
                                  data-fillType="tone"
                                  data-strokeType="none"
                                  fill="#4e60a3"
                                  stroke-width="none"
                                  opacity="1"
                                ></path>
                                <path
                                  id="SvgjsPath2980"
                                  d="M128.354 84c0 1.3-1.054 2.353-2.353 2.353 -1.3 0-2.354-1.053-2.354-2.353 0-1.299 1.055-2.354 2.354-2.354C127.302 81.646 128.354 82.7 128.354 84z"
                                  data-colored="false"
                                  data-fillType="#000000"
                                  data-strokeType="none"
                                  fill="#000000"
                                  stroke-width="none"
                                  opacity="0.9"
                                ></path>
                                <path
                                  id="SvgjsPath2981"
                                  d="M122.718 86.748c0.448-0.302 1.059-0.18 1.359 0.268 0.302 0.449 0.183 1.059-0.268 1.36 -0.45 0.303-1.059 0.183-1.359-0.267C122.148 87.66 122.268 87.049 122.718 86.748L122.718 86.748z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsLinearGradient2982)"
                                  opacity="0.5"
                                ></path>
                                <path
                                  id="SvgjsPath2985"
                                  d="M127.859 83.672c-0.251 0.374-0.969 0.331-1.605-0.096 -0.638-0.427-0.95-1.078-0.7-1.451l0.001-0.001c0.25-0.374 0.969-0.331 1.605 0.097C127.798 82.647 128.11 83.297 127.859 83.672 127.859 83.672 127.859 83.672 127.859 83.672z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsLinearGradient2986)"
                                  opacity="0.5"
                                ></path>
                                <path
                                  id="SvgjsPath2989"
                                  d="M130.717 82.673c-0.569 0.873-2.036 0.925-3.276 0.117 -1.239-0.808-1.784-2.17-1.215-3.043 0.568-0.872 2.035-0.924 3.275-0.117C130.74 80.439 131.284 81.802 130.717 82.673L130.717 82.673z"
                                  data-colored="false"
                                  data-fillType="gradient"
                                  data-strokeType="none"
                                  fill="url(#SvgjsLinearGradient2990)"
                                  opacity="0.75"
                                ></path>
                              </g>
                            </g>
                          </g>
                          <g id="svga-group-eyesfront-right">
                            <path
                              id="SvgjsPath3398"
                              d="M126.063 56.402c-16.04 0-21.127 12.091-21.127 26.528s10.366 22.412 20.864 22.305c8.869 1.347 19.697-11.337 20.506-22.236C146.307 68.563 137.563 56.402 126.063 56.402zM127.339 90.163c-3.614 0.398-13.873-1.561-14.253-2.847 -0.687-2.32 4.534-6.921 12.052-7.844 7.52-0.922 13.217 0.767 12.711 3.051C136.627 88.04 131.003 89.758 127.339 90.163z"
                              data-colored="true"
                              data-fillType="tone"
                              data-strokeType="none"
                              data-fromskin="true"
                              fill="#f5af95"
                              stroke-width="none"
                              opacity="1"
                              stroke="none"
                            ></path>
                            <path
                              id="SvgjsPath3399"
                              d="M127.339 90.163c-3.614 0.398-13.873-1.561-14.253-2.847 -0.687-2.32 4.534-6.921 12.052-7.844 6.46-0.792 11.563 0.345 12.556 2.128 -0.898-6.4-7.7-11.397-15.987-11.434 -8.911-0.037-16.148 5.676-16.172 12.765 -0.021 7.088 7.185 12.862 16.095 12.902 8.913 0.037 16.149-5.676 16.173-12.764 0-0.105-0.016-0.208-0.019-0.313C136.453 88.083 130.949 89.764 127.339 90.163z"
                              data-colored="false"
                              data-fillType="gradient"
                              data-strokeType="none"
                              data-fromskin="true"
                              fill="url(#SvgjsRadialGradient3400)"
                              opacity="1"
                            ></path>
                            <path
                              id="SvgjsPath3404"
                              d="M137.849 82.523c0.506-2.285-5.191-3.973-12.711-3.051 -7.518 0.923-12.738 5.524-12.052 7.844 0.38 1.286 10.639 3.245 14.253 2.847C131.003 89.758 136.627 88.04 137.849 82.523z"
                              data-colored="false"
                              data-fillType="gradient"
                              data-strokeType="none"
                              fill="url(#SvgjsRadialGradient3405)"
                              opacity="1"
                            ></path>
                            <path
                              id="SvgjsPath3408"
                              d="M137.452 77.417c-4.208-1.978-9.35-2.16-13.838-1.005 -2.404 0.561-4.965 1.285-7.063 2.638 -1.945 1.135-3.525 2.5-5.002 4.19 1.342-1.701 2.773-3.118 4.623-4.27 2.276-1.416 4.769-2.294 7.364-2.916C128.123 74.928 133.259 75.184 137.452 77.417z"
                              data-colored="true"
                              data-fillType="sd3"
                              data-strokeType="none"
                              data-fromskin="true"
                              fill="#c7633d"
                              stroke-width="none"
                              opacity="1"
                              stroke="none"
                            ></path>
                            <path
                              id="SvgjsPath3409"
                              d="M136.832 78.02c-0.88-0.352-4.065-1-5.456-1.066 -1.687-0.082-5.073 0.125-6.735 0.424 -3.374 0.608-9.251 2.483-11.678 7.184 -0.746 1.445-0.074 2.456 0.123 2.675 -0.3-2.426 4.838-6.746 12.052-7.604 7.52-0.894 13.217 0.743 12.711 2.958 -1.222 5.348-6.846 7.013-10.51 7.405 -4.099 0.439-11.684-1.539-12.686-1.753 1.999 1.009 7.524 2.095 9.767 2.303 0.744 0.07 2.24 0.104 2.986 0.085 5.949-0.158 10.169-3.175 11.729-7.26C140.137 80.745 139.041 78.902 136.832 78.02z"
                              data-colored="true"
                              data-fillType="tone"
                              data-strokeType="none"
                              fill="#000000"
                              stroke-width="none"
                              opacity="1"
                              stroke="none"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g id="svga-group-facehighlight-single">
                        <path
                          id="SvgjsPath2906"
                          d="M141 113.974c0.035 22.622-18.292 40.994-40.938 41.025 -22.642 0.037-41.028-18.273-41.063-40.9 -0.035-22.62 18.292-41.064 40.937-41.1C122.579 72.964 140.967 91.349 141 113.974z"
                          data-colored="false"
                          data-fillType="gradient"
                          data-strokeType="none"
                          data-fromskin="true"
                          fill="url(#SvgjsRadialGradient2907)"
                          opacity="1"
                        ></path>
                        <path
                          id="SvgjsPath2910"
                          d="M137.5 53.999c0 20.711-16.789 37.5-37.499 37.5 -20.711 0-37.501-16.789-37.501-37.5s16.79-37.5 37.501-37.5C120.711 16.499 137.5 33.288 137.5 53.999z"
                          data-colored="false"
                          data-fillType="gradient"
                          data-strokeType="none"
                          data-fromskin="true"
                          fill="url(#SvgjsRadialGradient2911)"
                          opacity="1"
                        ></path>
                      </g>
                      <g
                        id="svga-group-eyebrows-left-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-eyebrows-left-rotate"
                          data-updown="0"
                          data-leftright="0"
                          data-rotate="0"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <g
                            id="svga-group-eyebrows-left"
                            data-scaleX="1"
                            data-scaleY="1"
                            transform="matrix(1,0,0,1,0,0)"
                          >
                            <path
                              id="SvgjsPath2931"
                              d="M54 74.189c9.954-9.974 16.761-5.915 30.589-3.264 0.845 0.162 6.32 1.539 5.31 3.469 -0.483 0.924-2.036 0.814-2.903 0.798C73.308 74.936 66.652 65.197 54 74.189z"
                              data-colored="true"
                              data-fillType="#000000"
                              data-strokeType="none"
                              fill="#2a232b"
                              stroke-width="none"
                              opacity="1"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="svga-group-eyebrows-right-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-eyebrows-right-rotate"
                          data-updown="0"
                          data-leftright="0"
                          data-rotate="0"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <g
                            id="svga-group-eyebrows-right"
                            data-scaleX="1"
                            data-scaleY="1"
                            transform="matrix(1,0,0,1,0,0)"
                          >
                            <path
                              id="SvgjsPath2932"
                              d="M146 74.189c-9.953-9.974-16.761-5.915-30.589-3.264 -0.846 0.162-6.32 1.539-5.311 3.469 0.483 0.924 2.036 0.814 2.903 0.798C126.691 74.936 133.348 65.197 146 74.189z"
                              data-colored="true"
                              data-fillType="#000000"
                              data-strokeType="none"
                              fill="#2a232b"
                              stroke-width="none"
                              opacity="1"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="svga-group-nose-single-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-nose-single"
                          data-scaleX="1"
                          data-scaleY="1"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <path
                            id="SvgjsPath3419"
                            d="M99.084 89.999c0 0-0.887 20.454-0.765 24.946 0.035 1.275 2.489 4.617 2.322 7.054 0 0-4.788-0.349-6.345-0.898 -1.629-0.578-4.151-1.704-3.154-4.85C92.562 111.776 99.084 89.999 99.084 89.999z"
                            data-colored="true"
                            data-fillType="sd1"
                            data-strokeType="none"
                            data-fromskin="true"
                            fill="#e69375"
                            stroke-width="none"
                            opacity="1"
                            stroke="none"
                          ></path>
                          <path
                            id="SvgjsPath3420"
                            d="M98.638 119.598c0 0-1.985-0.705-3.239-0.669 -1.142 0.035-1.306-0.726-1.191-1.158 0.116-0.433 0.507-0.701 1.61-0.407C96.921 117.658 98.638 119.598 98.638 119.598zM101.593 119.6c0 0 1.98-0.653 3.239-0.667 1.142-0.014 1.308-0.726 1.191-1.157 -0.116-0.435-0.508-0.705-1.61-0.411C103.31 117.662 101.593 119.6 101.593 119.6z"
                            data-colored="true"
                            data-fillType="sd3"
                            data-strokeType="none"
                            data-fromskin="true"
                            fill="#c7633d"
                            stroke-width="none"
                            opacity="1"
                            stroke="none"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="svga-group-beardwrap"
                        data-scaleX="1"
                        data-scaleY="1"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-beard-single-move"
                          data-updown="0"
                          data-leftright="0"
                          data-rotate="0"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <g
                            id="svga-group-beard-single"
                            data-scaleX="1"
                            data-scaleY="1"
                            transform="matrix(1,0,0,1,0,0)"
                          >
                            <path
                              id="SvgjsPath3042"
                              d="M100,18.13L100,18.13L100,18.13L100,18.13z"
                              data-colored="true"
                              data-fillType="tone"
                              data-strokeType="none"
                              fill="#2a232b"
                              stroke-width="none"
                              opacity="1"
                            ></path>
                          </g>
                        </g>
                      </g>
                      <g
                        id="svga-group-mustache-single-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-mustache-single"
                          data-scaleX="1"
                          data-scaleY="1"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <path
                            id="SvgjsPath3040"
                            d="M100,18.13L100,18.13L100,18.13L100,18.13z"
                            data-colored="true"
                            data-fillType="tone"
                            data-strokeType="none"
                            fill="#2a232b"
                            stroke-width="none"
                            opacity="1"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="svga-group-hair-front"
                        data-scaleX="1"
                        data-scaleY="1"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <path
                          id="SvgjsPath3354"
                          d="M158.43 41.325C140-4.765 100 0.405 100 0.405s-40-5.169-58.43 40.92c-9.245 23.12 2.158 50.324 2.158 50.324h5.826c-5.094-21.752 0.796-17.662 1.176-21.722 0.118-1.255-0.3-3.367-0.421-4.622 -0.592-6.112 1.982-18.029 5.245-23.173 1.603-2.526 5.369-6.659 8.174-7.699 9.97-3.694 20.044 0.715 22.854 1.421 4.461 1.12 22.373 1.12 26.836 0 3.343-0.839 13.182-4.905 22.854-1.321 2.806 1.04 6.871 4.972 8.474 7.499 3.263 5.144 5.537 16.16 4.945 22.272 -0.121 1.255-0.539 4.367-0.422 5.623 0.107 1.147 2.617 3.689 2.898 4.807 1.16 4.612-1.722 16.915-1.722 16.915h5.825C156.271 91.649 167.676 64.445 158.43 41.325z"
                          data-colored="true"
                          data-fillType="tone"
                          data-strokeType="none"
                          fill="#2a232b"
                          stroke-width="none"
                          opacity="1"
                        ></path>
                        <path
                          id="SvgjsPath3355"
                          d="M154.938 31.163C136.178-3.114 101.979-0.631 100-0.455c-1.979-0.176-36.177-2.659-54.938 31.618C30.57 57.641 41.57 88.137 42.907 91.612c0.076 0.197 1.576 0.038 1.576 0.038 -0.006-0.015-0.104-0.392-0.166-0.55 -1.209-3.12-12.189-33.18 2.061-59.216C65.111-2.342 99.595 1.007 99.94 1.046L100 0.504l0.06 0.542c0.345-0.039 34.829-3.388 53.563 30.837 14.563 26.61 2.773 57.423 1.996 59.383 -0.021 0.055-0.107 0.375-0.111 0.383 0 0 1.506 0.169 1.575-0.011C158.374 88.294 169.467 57.709 154.938 31.163z"
                          data-colored="true"
                          data-fillType="sd3"
                          data-strokeType="none"
                          fill="#000000"
                          stroke-width="none"
                          opacity="1"
                        ></path>
                      </g>
                      <g
                        id="svga-group-glasses-single-move"
                        data-updown="0"
                        data-leftright="0"
                        data-rotate="0"
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <g
                          id="svga-group-glasses-single"
                          data-scaleX="1"
                          data-scaleY="1"
                          transform="matrix(1,0,0,1,0,0)"
                        >
                          <path
                            id="SvgjsPath3033"
                            d="M100,18.13L100,18.13L100,18.13L100,18.13z"
                            data-colored="true"
                            data-fillType="tone"
                            data-strokeType="none"
                            fill="#26120b"
                            stroke-width="none"
                            opacity="1"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
                <rect
                  id="SvgjsRect1057"
                  width="200"
                  height="15"
                  x="0"
                  y="185"
                  fill="#ecf0f1"
                  opacity="0.5"
                  style="display: none"
                ></rect>
                <text
                  id="SvgjsText1058"
                  font-family="Roboto, Helvetica, Arial, sans-serif"
                  font-size="10px"
                  text-anchor="start"
                  font-weight="400"
                  size="10px"
                  anchor="start"
                  weight="400"
                  fill="#333333"
                  x="38.76297378540039"
                  y="182.42838287353516"
                  style="display: none"
                >
                  <tspan id="SvgjsTspan1059" dy="13" x="38.76297378540039">
                    Created on svgAvatars.com
                  </tspan>
                </text>
              </g>
            </svg>
          </div>
          <div>
            <div class="w-full my-2">
              <q-btn-group class="w-full grid grid-cols-8">
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_upward"/></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_downward"/></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_back"/></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="arrow_forward"/></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="zoom_out"/></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="zoom_in"/></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="undo"/></q-btn>
                <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid"><q-icon class="w-full" size="xs" name="redo"/></q-btn>
              </q-btn-group>
            </div>
            <div class="relative w-full">
              <q-color v-if="colorPickerhandle" v-model="customColor" no-header-tabs class="absolute top-full right-0 mt-3 md:ml-2 md:mt-0 md:-translate-y-full md:translate-x-full bg-gray-900 z-[10]" @hide="onColorPicker(false)"/>
              <div class="w-full" v-for="tab in tabSet">
                <div class="relative w-full flex flex-row flex-wrap" v-if="tab == subTitle">
                  <div class="!w-1/6 square border-gray-900 border-[2px] border-solid" v-for="color in avatar[tab].colors" :style="{backgroundColor: color}"></div>
                  <div class="!absolute right-0 bottom-0 !w-1/6 square border-gray-900 border-[2px] border-solid">
                    <q-btn class="w-full h-full p-0 m-0" :class="colorPickerhandle&&'bg-blue-500'" flat @click="onColorPicker"><q-icon class="w-full h-full" name="tune"/></q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative col-span-3">
          <div class="w-full mt-2 md:mt-0 mb-2">
            <q-btn-toggle
              class="w-full !grid grid-cols-5"
              v-model="title"
              text-color="white"
              toggle-color="primary"
              :options="[
                {label: 'Face', value: 'face'},
                {label: 'Eyes', value: 'eyes'},
                {label: 'Hair', value: 'hair'},
                {label: 'Cloth', value: 'clothes'},
                {label: 'Back', value: 'backs'}
              ]"
            />
          </div>
          <div class="w-full mb-2">
            <q-btn-toggle
              v-if="title == 'face'"
              class="w-full !grid grid-cols-4"
              v-model="subTitle"
              text-color="white"
              toggle-color="primary"
              :options="[
                {label: 'Shape', value: 'face'},
                {label: 'Mouth', value: 'mouth'},
                {label: 'Nose', value: 'nose'},
                {label: 'Ears', value: 'ears'}
              ]"
            />
            <q-btn-toggle
              v-if="title == 'eyes'"
              class="w-full !grid grid-cols-4"
              v-model="subTitle"
              text-color="white"
              toggle-color="primary"
              :options="[
                {label: 'Shape', value: 'eyes'},
                {label: 'Iris', value: 'iris'},
                {label: 'Brows', value: 'brows'},
                {label: 'Glasses', value: 'glasses'}
              ]"
            />
            <q-btn-toggle
              v-if="title == 'hair'"
              class="w-full !grid grid-cols-3"
              v-model="subTitle"
              text-color="white"
              toggle-color="primary"
              :options="[
                {label: 'Head', value: 'hair'},
                {label: 'Mustache', value: 'mustache'},
                {label: 'Beard', value: 'beard'}
              ]"
            />
            <q-btn-toggle
              v-if="title == 'clothes'"
              class="w-full !grid grid-cols-1"
              v-model="subTitle"
              text-color="white"
              toggle-color="primary"
              :options="[
                {label: 'Basic', value: 'clothes'}
              ]"
            />
            <q-btn-toggle
              v-if="title == 'backs'"
              class="w-full !grid grid-cols-1"
              v-model="subTitle"
              text-color="white"
              toggle-color="primary"
              :options="[
                {label: 'Basic', value: 'backs'}
              ]"
            />
          </div>
          <div class="w-full flex flex-row flew-wrap mb-2">
            <div class="!w-1/5 bg-white border-[2px] border-solid border-gray-900 square" v-for="shape in avatar[subTitle].shapes">
              <!-- <div v-if="'glasseshairmustachebeardbacks'.includes(subTitle)" class="w-full"><q-icon name="close"></q-icon></div> -->
              <SubTitleItem :shape.sync="shape" :type.sync="subTitle" :mat.sync="avatar[subTitle].mat"/>
            </div>
          </div>
          <div class="w-full my-2 pb-[40px]">
            <q-btn-group class="w-full">
              <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid" v-for="action in avatar[subTitle].controls">
                <q-icon v-if="svgIcon[action].toLowerCase()!=''" :name="svgIcon[action].toLowerCase()"/>
                <svg v-if="action == 'tightly'" class="h-[21px] mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M12.594,8l3.241,3.205c0.22,0.216,0.22,0.567,0,0.783l-0.858,0.85c-0.219,0.217-0.575,0.217-0.795,0L9.683,8.393c-0.221-0.216-0.221-0.568,0-0.785l4.499-4.445c0.22-0.217,0.576-0.217,0.795,0l0.858,0.849c0.22,0.217,0.22,0.568,0,0.785L12.594,8z M0.164,11.205c-0.219,0.216-0.219,0.567,0,0.783l0.859,0.85c0.221,0.217,0.575,0.217,0.795,0l4.499-4.445c0.22-0.217,0.22-0.568,0-0.785L1.818,3.163c-0.221-0.217-0.576-0.217-0.795,0L0.164,4.012c-0.219,0.217-0.219,0.568,0,0.785L3.405,8L0.164,11.205z" data-colored="true" fill="#ffffff"></path></svg>
                <svg v-if="action == 'eb1'" class="w-2/3 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M5.453,8.316C5.129,7.499,4.146,6.352,1.492,5.521C1.087,5.393,0.868,4.982,1.003,4.602c0.135-0.379,0.572-0.586,0.98-0.458c2.996,0.938,4.917,2.505,5.015,4.088c0.026,0.4-0.3,0.767-0.728,0.767C5.875,8.998,5.531,8.514,5.453,8.316z M9.021,8.313C8.66,8.077,8.593,7.626,8.841,7.301c0.983-1.288,3.5-1.651,6.569-0.948c0.415,0.095,0.669,0.489,0.567,0.877c-0.102,0.39-0.518,0.628-0.937,0.533c-2.718-0.623-4.315-0.188-4.939,0.282C9.908,8.191,9.5,8.625,9.021,8.313z" data-colored="true" fill="#ffffff"></path></svg>
                <svg v-if="action == 'eb2'" class="w-2/3 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M9.729,8.998c-0.428,0-0.753-0.366-0.728-0.767c0.098-1.583,2.02-3.149,5.016-4.088c0.407-0.128,0.845,0.079,0.979,0.458c0.136,0.38-0.083,0.792-0.488,0.919c-2.654,0.831-3.638,1.978-3.961,2.796C10.469,8.514,10.125,8.998,9.729,8.998z M5.898,8.045C5.274,7.576,3.677,7.141,0.959,7.764C0.54,7.858,0.124,7.62,0.022,7.23C-0.079,6.842,0.175,6.448,0.59,6.353c3.069-0.703,5.586-0.34,6.569,0.948c0.248,0.325,0.181,0.776-0.18,1.012C6.5,8.625,6.092,8.191,5.898,8.045z" data-colored="true" fill="#ffffff"></path></svg>
                <svg v-if="action == 'eb3'" class="w-2/3 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M5.453,8.316C5.129,7.499,4.146,6.352,1.492,5.521C1.087,5.393,0.868,4.982,1.003,4.602c0.135-0.379,0.572-0.586,0.98-0.458c2.996,0.938,4.917,2.505,5.015,4.088c0.026,0.4-0.3,0.767-0.728,0.767C5.875,8.998,5.531,8.514,5.453,8.316z M9.729,8.998c-0.428,0-0.753-0.366-0.728-0.767c0.098-1.583,2.02-3.149,5.016-4.088c0.407-0.128,0.845,0.079,0.979,0.458c0.136,0.38-0.083,0.792-0.488,0.919c-2.654,0.831-3.638,1.978-3.961,2.796C10.469,8.514,10.125,8.998,9.729,8.998z" data-colored="true" fill="#ffffff"></path></svg>
                <svg v-if="action == 'eb4'" class="w-2/3 mx-auto" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 16" preserveAspectRatio="xMinYMin meet"><path class="svga-control-icon-path" d="M5.728,6.662C4.873,6.458,3.369,6.605,1.166,8.303C0.829,8.562,0.367,8.506,0.133,8.176C-0.1,7.848-0.019,7.371,0.32,7.111C2.807,5.195,5.192,4.52,6.545,5.348c0.343,0.208,0.456,0.685,0.211,1.036C6.528,6.708,5.935,6.711,5.728,6.662z M9.244,6.383C8.999,6.033,9.111,5.556,9.455,5.348c1.353-0.828,3.737-0.152,6.225,1.764c0.339,0.26,0.421,0.737,0.187,1.065c-0.233,0.33-0.695,0.386-1.032,0.127c-2.203-1.698-3.707-1.845-4.563-1.641C10.065,6.712,9.471,6.708,9.244,6.383z" data-colored="true" fill="#ffffff"></path></svg>
              </q-btn>
            </q-btn-group>
          </div>
          <div class="absolute bottom-0 w-full">
            <q-btn-group class="w-full grid grid-cols-3">
              <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid" :label="tran('random', store.state.lang)"></q-btn>
              <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid" :label="tran('reset', store.state.lang)"></q-btn>
              <q-btn class="w-full p-0 border-gray-400 border-[1px] border-solid" :label="tran('save', store.state.lang)"></q-btn>
            </q-btn-group>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup lang="ts">
import {ref} from "vue";
import { useStore } from "vuex";
import { tran } from "~~/utils/translation";
import avatar from "./avatar.json";
import svgIcon from "./svgIcon.json";
import SubTitleItem from './SubTitleItem';

const store = useStore();

const tabSet=['face','mouth','nose','ears','eyes','iris','brows','glasses','hair','mustache','beard','clothes','backs'];
const customColor=ref('#ffffff');
const colorPickerhandle=ref(false);
const title=ref('face');
const subTitle=ref('face');
watch(()=>title.value,()=>{
    subTitle.value = title.value;
})

const onColorPicker=()=>{
  colorPickerhandle.value=!colorPickerhandle.value;
}
</script>