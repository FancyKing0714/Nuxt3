<template>
  <div>
    <div class="ruleta relative mx-auto w-72 h-72 sm:w-96 sm:h-96" ref="ruleta">
      <div class="center" ref="center" @click="handleSpin"></div>
    </div>
    <!-- <p>{{ time }}</p> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(["time"]);
const ruleta = ref("");
const tamanyoRuleta = 360;
const numeroCasillas = 12;
const anguloCasillas = 30; // calculated from 360 / numeroCasillas
const grados = 75; // calculated from (180 - anguloCasillas) / 2
const alturaCasilla = 129.9038105676658; // calculated from Math.tan((grados * Math.PI) / 180) * (tamanyoRuleta / 2)
const handleSpin = () => {
  let numID = "number-";
  const num = 1 + Math.round(Math.random() * (numeroCasillas - 1));
  numID += num;

  const animacionRuletaEl = document.getElementById("animacionRuleta");
  if (animacionRuletaEl) {
    animacionRuletaEl.remove();
  }
//   console.log("=>", time);
  if(props.time==0) {
//   console.log("=<", time);
      const styleEl = document.createElement("style");
      styleEl.id = "animacionRuleta";
    styleEl.textContent = `
                        #number-${num} { animation-name: number-${num}; } 
                        @keyframes number-${num} {
                        from { transform: rotate(0); } 
                        to { transform: rotate(${
                          360 * (numeroCasillas - 1) - anguloCasillas * num
                        }deg); }
                        }
                    `;
    document.head.appendChild(styleEl);
  }

  ruleta.value?.removeAttribute("id");
  ruleta.value?.setAttribute("id", numID);
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.ruleta {
  background-image: url("/imgs/wheel/wheel_current.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.ruleta {
  /*background-color: #303030;*/
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  animation-timing-function: cubic-bezier(0, 0.4, 0.4, 1.04);
  animation-duration: 10s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.center {
  height: 60px;
  content: "";
  width: 60px;
  position: absolute;
  z-index: 9999;
  border-radius: 360px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
</style>
