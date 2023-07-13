<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.com/svgjs"
    class="svga-svg"
    viewBox="0 0 200 200"
    preserveAspectRatio="xMinYMin meet"
  >
    <defs>
      <linearGradient
        v-for="gradient in gradientList.value"
        :id="gradient?.id"
        :x1="gradient?.x1"
        :y1="gradient?.y1"
        :x2="gradient?.x2"
        :y2="gradient?.y2"
        :gradientTransform="gradient?.gradientTransform"
        :gradientUnits="gradient?.gradientUnits"
      >
        <stop 
          v-for="stop in gradient.stop"
          :stop-opacity="stop?.opacity"
          :stop-color="stop?.color"
          :offset="stop?.offset"
          :data-stoptype="stop?.stoptype"
        ></stop>
      </linearGradient>
      <radialGradient
        v-for="gradient in gradientList.value"
        :id="gradient?.id"
        :cx="gradient?.cx"
        :cy="gradient?.cy"
        :r="gradient?.r"
        :gradientTransform="gradient?.gradientTransform"
        :gradientUnits="gradient?.gradientUnits"
      >
        <stop 
          v-for="stop in gradient.stop"
          :stop-opacity="stop?.opacity"
          :stop-color="stop?.color"
          :offset="stop?.offset"
          :data-stoptype="stop?.stoptype"
        ></stop>
      </radialGradient>
    </defs>
    <g :transform="props.mat">
      <path
        v-for="item in pathList"
        :d="item.d"
        :data-fromskin="item?.fromskin"
        :data-filltype="item?.fillType"
        :fill="item.fill"
        :data-colored="item?.colored"
        :data-stroketype="item.strokeType"
        :stroke-width="item?.strokeWidth"
        :opacity="item?.opacity"
        :stroke="item?.stroke"
      ></path>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  shape: {
    type: Object,
  },
  type: {
    type: String,
  },
  mat: {
    type: String,
  },
});
const pathList = ref([]);
const gradientList = ref([]);
const colorsStorage = {
  male: {
    backs: "#ecf0f1",
    humanbody: "#f0c7b1",
    clothes: "#386e77",
    hair: "#2a232b",
    ears: "#f0c7b1",
    face: "#f0c7b1",
    chinshadow: "#f0c7b1",
    facehighlight: "#f0c7b1",
    brows: "#2a232b",
    eyesback: "#000000",
    eyes: "#000000",
    iris: "#4e60a3",
    glasses: "#26120B",
    mustache: "#2a232b",
    beard: "#2a232b",
    mouth: "#da7c87",
  },
  female: {
    backs: "#ecf0f1",
    humanbody: "#F3D4CF",
    clothes: "#09aac5",
    hair: "#2a232b",
    ears: "#F3D4CF",
    face: "#F3D4CF",
    chinshadow: "#F3D4CF",
    facehighlight: "#F3D4CF",
    brows: "#2a232b",
    eyesback: "#000000",
    eyes: "#000000",
    iris: "#4e60a3",
    glasses: "#26120B",
    mouth: "#f771a9",
  },
};
watch(
  () => props.shape,
  () => {
    let result = [];
    Object.keys(props.shape).map((key) => {
      if (key != "left") result = [...result, ...props.shape[key]];
    });
    drawPathGradient(result);
  }
);

onBeforeMount(() => {
  let result = [];
  Object.keys(props.shape).map((key) => {
    if (key != "left") result = [...result, ...props.shape[key]];
  });
  drawPathGradient(result);
});

const drawPathGradient = (data) => {
  let pathlist = [],
    gradlist = [],
    colorZone;
  data.map((pathData, pathIndex) => {
    let gradient = {
      id:'',
      stop:[],
      type: '',
      x1: "",
      y1: "",
      x2: "",
      y2: "",
      cx: "",
      cy: "",
      fx: "",
      fy: "",
      r: "",
      gradientTransform: "",
      gradientUnits: "",
    };
    let path = {
      d: "",
      colored: true,
      fillType: "",
      strokeType: "",
      stroke: "",
      strokeWidth: "",
      fromskin: false,
      fill: "",
      opacity: 1,
    };
    path.d = pathData.path;
    path.colored = pathData.colored;
    path.fillType = pathData.fill;
    path.strokeType = pathData.stroke;
    if (pathData.fromskin) {
      path.fromskin = pathData.fromskin;
    }
    if (path.colored == true) {
      if (pathData.fromskin) {
        colorZone = "face"; 
      } else {
        colorZone = props.type;
      }
      path.fill = colorTones(path.fillType, colorZone, false);
      path.stroke = colorTones(path.strokeType, colorZone, false); /////
      path.strokeWidth = pathData?.strokeWidth;
    } 
    else {
      if (pathData.fill == "gradient") {
        path.fill = `url(#svg-${props.type}-${pathIndex})`;
        gradient.id = `svg-${props.type}-${pathIndex}`;
        
        pathData.gradientStops.map(stopItem=>{
          let stop={
            offset:'',
            color:'',
            stoptype:'',
            opacity:''
          };
          let colorZone, isGradient=true;
          if (pathData.fromskin) {
						colorZone = 'face';
					} else {
						colorZone = props.type;
					}
          if(stopItem?.offset){
            stop.offset = stopItem?.offset;
          }
          if(stopItem?.color){
            stop.color = colorTones(stopItem?.color, colorZone ,isGradient);
            stop.stoptype = stopItem?.color;
          }
          if(stopItem?.opacity){
            stop.opacity = stopItem?.opacity;
          }
          gradient.stop.push(stop);
        });

        if(pathData?.type){
          console.log(pathData?.type);
          
          gradient.type = pathData?.type;
        }

        if (pathData?.x1) {
          gradient.x1 = pathData?.x1;
        }
        if (pathData?.y1) {
          gradient.y1 = pathData?.y1;
        }
        if (pathData?.x2) {
          gradient.x2 = pathData?.x2;
        }
        if (pathData?.y2) {
          gradient.y2 = pathData?.y2;
        }
        if (pathData?.cx) {
          gradient.cx = pathData?.cx;
        }
        if (pathData?.cy) {
          gradient.cy = pathData?.cy;
        }
        if (pathData?.fx) {
          gradient.fx = pathData?.fx;
        }
        if (pathData?.fy) {
          gradient.fy = pathData?.fy;
        }
        if (pathData?.r) {
          gradient.r = pathData?.r;
        }
        if (pathData?.gradientTransform) {
          gradient.gradientTransform = pathData?.gradientTransform;
        }
        if (pathData?.gradientUnits) {
          gradient.gradientUnits = pathData?.gradientUnits;
        }
      } else {
        path.fill = pathData.fill;
        path.stroke = pathData.stroke;
        path.strokeWidth = pathData.strokeWidth;
      }
    }
    if (pathData.opacity) {
      path.opacity = pathData.opacity;
    }
    pathlist.push(path);
    gradlist.push(gradient);
  });
  pathList.value = pathlist;
  gradientList.value = gradlist;
};
const colorTones = (type, bodyZone, ifGradient) => {
  const colorTheme = colorsStorage["male"];
  let color;
  switch (type) {
    case "none": {
      color = "none";
      break;
    }
    case "tone": {
      color = colorTheme[bodyZone];
      break;
    }
    case "hl05": {
      color = ShadowHighlight(colorTheme[bodyZone], -0.5 * 0.1, 0.5 * 0.06);
      break;
    }
    case "hl1": {
      color = ShadowHighlight(colorTheme[bodyZone], -0.1, 0.06);
      break;
    }
    case "hl2": {
      color = ShadowHighlight(colorTheme[bodyZone], -2 * 0.1, 2 * 0.06);
      break;
    }
    case "sd05": {
      color = ShadowHighlight(colorTheme[bodyZone], 0.5 * 0.1, -0.5 * 0.06);
      break;
    }
    case "sd1": {
      color = ShadowHighlight(colorTheme[bodyZone], 0.1, -0.06);
      break;
    }
    case "sd2": {
      color = ShadowHighlight(colorTheme[bodyZone], 2 * 0.1, -2 * 0.06);
      break;
    }
    case "sd3": {
      color = ShadowHighlight(colorTheme[bodyZone], 3 * 0.1, -3 * 0.06);
      break;
    }
    case "sd35": {
      color = ShadowHighlight(colorTheme[bodyZone], 3.5 * 0.1, -3.5 * 0.06);
      break;
    }
    default: {
      color = colorTheme[bodyZone];
      if (ifGradient) {
        color = type;
      }
      break;
    }
  }
  return color;
};
const ShadowHighlight = (color, ds, dv) => {
  let c = toHsv(color);
  c.s = c.s + ds;
  if (c.s < 0) {
    c.s = 0;
  }
  if (c.s > 1) {
    c.s = 1;
  }
  c.v = c.v + dv;
  if (c.v < 0) {
    c.v = 0;
  }
  if (c.v > 1) {
    c.v = 1;
  }
  return toHex(c);
};
const toHsv = (hex) => {
  const set = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  let r, g, b;
  r = (Number(set[hex.slice(1, 2)]) * 16 + Number(set[hex.slice(2, 3)])) / 256;
  g = (Number(set[hex.slice(3, 4)]) * 16 + Number(set[hex.slice(4, 5)])) / 256;
  b = (Number(set[hex.slice(5, 6)]) * 16 + Number(set[hex.slice(6, 7)])) / 256;
  let h, s, v;
  let max_rgb = r > g ? (r > b ? r : b) : g > b ? g : b;
  let min_rgb = r > g ? (g > b ? b : g) : r > b ? b : r;
  let difference = max_rgb - min_rgb;
  if (max_rgb == min_rgb) h = 0;
  else if (max_rgb == r) h = ((60 * (g - b)) / difference + 360) % 360;
  else if (max_rgb == g) h = (60 * ((b - r) / difference) + 120) % 360;
  else if (max_rgb == b) h = (60 * ((r - g) / difference) + 240) % 360;
  if (max_rgb == 0) s = 0;
  else s = (difference / max_rgb);
  v = max_rgb;
  return { h: h, s: s, v: v };
};
const toHex = (col) => {
  const set = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  };
  let c, x, m, r, g, b;
  c = (col.v * col.s);
  x = c * (1 - Math.abs((col.h / 60) % 2 - 1));
  m = col.v - c;
  if (col.h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (col.h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (col.h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (col.h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (col.h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  r = (r + m) * 256;
  g = (g + m) * 256;
  b = (b + m) * 256;
  if(r>255) r=255;
  if(g>255) g=255;
  if(b>255) b=255;
  return (
    "#" +
    set[Math.floor(r / 16)] +
    set[Math.floor(r % 16)] +
    set[Math.floor(g / 16)] +
    set[Math.floor(g % 16)] +
    set[Math.floor(b / 16)] +
    set[Math.floor(b % 16)]
  );
};
</script>
