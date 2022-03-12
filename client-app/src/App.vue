<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {ref} from "vue";

const menuBtn = ref(null);
const menu = ref(null);
const overlay = ref(null);
const topBar = ref(null);

function activeMenu() {
  menuBtn.value.classList.toggle("is-active");
  menu.value.classList.toggle("is-active");
  overlay.value.classList.toggle("is-active");
  topBar.value.classList.toggle("opaque");
}
</script>

<template>
  <!-- invisible top bar with visible menu button -->
  <div class="top-bar flex flex-row justify-between items-center" ref="topBar">
    <button class="hamburger hamburger--collapse" type="button" ref="menuBtn" @click.prevent.stop="activeMenu">
      <span class="hamburger-box mt-1">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <button class="btn mr-2">Buy now</button>
  </div>


  <div class="content-wrapper">
    <!-- menu -->
    <div class="side-bar-overlay" ref="overlay"/>
    <div class="side-bar" ref="menu">
      <div class="flex flex-col no-wrap items-start justify-center">
        <div class="menu-item">
          <ion-icon name="home" />
          <a href="#">Home</a>
        </div>
        <div class="menu-item">
          <ion-icon name="book" />
          <a href="#">Neuroscience of Writing</a>
        </div>
        <div class="menu-item">
          <ion-icon name="trophy" />
          <a href="#">Testimonials</a>
        </div>
        <div class="menu-item">
          <ion-icon name="mail" />
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>


    <!-- -->
    <div class="content">
      <div class="flex flex-col sm:flex-row">
        <h1 class="mt-2 mb-4 pt-2 px-6 super-tight clr-primary">
          Hayabusa #0321<br/>
          Hazelnut
        </h1>
        <div class="flex flex-row flex-no-wrap justify-center items-center pt-2 pb-4">
          <ion-icon name="star"/>
          <ion-icon name="star"/>
          <ion-icon name="star"/>
          <ion-icon name="star"/>
          <ion-icon name="star"/>
        </div>
      </div>

      <p class="clr-primary px-4 text-size-sm mb-6 max-w-130">
        The Hayabusa #0321 combines elegant design with contemporary pragmatism.
        Its unique gridded layout is meticulously contrived for journaling,
        academic and professional notetaking, mindmapping, diagramming,
        technical sketching, and more...
      </p>

<!--      <c-card class="bg-tertiary mb-8 mx-2">-->
<!--        <div class="p-4 text-right clr-light">-->
<!--          <h6 class="sm:px-6 pt-3">FULLY</h6>-->
<!--          <p class="sm:px-6 pt-2 max-w-100 italic ml-auto">-->
<!--            Redeem your two-month subscription-->
<!--          </p>-->
<!--        </div>-->
<!--        <img class="product-img card-img-bottom" src="@/assets/images/12.jpg" alt="Product image."/>-->
<!--      </c-card>-->

      <c-card class="bg-light mb-8 mx-2">
        <div class="p-4 text-left">
          <h6 class="sm:px-6 pt-3">Unique, Adaptive Layout</h6>
          <p class="sm:px-6 pt-2 max-w-105 italic">
            Experience the most satisfying page layout for adaptive journaling and methodological notetaking.
          </p>
        </div>
        <img class="product-img card-img-bottom" src="@/assets/images/12.jpg" alt="Product image."/>
      </c-card>

      <c-card class="bg-light mb-8 mx-2">
        <div class="p-4 text-right">
          <h6 class="sm:px-6 pt-3">Ethically Sourced</h6>
          <p class="sm:px-6 pt-2 max-w-100 italic ml-auto">
            The #0321 is meticulously crafted from <span class="whitespace-nowrap">ethically sourced,</span> <span class="whitespace-nowrap">eco-friendly</span> materials.
          </p>
        </div>
        <img class="product-img card-img-bottom" src="@/assets/images/12.jpg" alt="Product image."/>
      </c-card>

      <c-card class="bg-light mb-8 mx-2">
        <div class="p-4 text-left">
          <h6 class="sm:px-6 pt-3">Robust, Functional, Beautiful</h6>
          <p class="sm:px-6 pt-2 max-w-115 italic">
            <strong>Never run out of pages again.</strong><br/>
            The #0321's rich, warm hazelnut brown covers cocoon 240 thick, tearable cream-coloured pages
            bound together by a robust stainless steel coil. The suitably thick 100gsm pages are immune to ink bleeding and ghosting.
          </p>
        </div>
        <img class="product-img card-img-bottom" src="@/assets/images/12.jpg" alt="Product image."/>
      </c-card>

      <c-card class="bg-light mb-8 mx-2">
        <div class="p-4 text-right">
          <h6 class="sm:px-6 pt-3">Designed To Maximize Productivity</h6>
          <p class="sm:px-6 pt-2 max-w-110 italic ml-auto">
            An oversized memo pocket securely situated on the inside back cover
            provides abundant space for documents, cheatsheets, factsheets, notecards,
            and other kinds of reference materials.
          </p>
        </div>
        <img class="product-img card-img-bottom" src="@/assets/images/12.jpg" alt="Product image."/>
      </c-card>

    <hr class="mx-4 border-clr-muted"/>
      <div class="text-right text-xs p-4 block clr-muted">
        <router-link to="/TandCs" class="block mb-1">Terms of Service</router-link>
        <router-link to="/Privacy" class="block mb-1">Privacy Policy</router-link>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
$max-width: 640px;

.product-img {
  z-index: -10;
  width: auto;
  height: 100%;
  @screen md {
    //max-height: 55vh;
  }
  //filter: brightness(110%);
  //padding: 1rem;
  //margin-top: 1rem;
  //margin-bottom: 1rem;

  &.card-img-top {
    border-radius: 21px 21px 0 0;
  }

  &.card-img-bottom {
    border-radius: 0 0 21px 21px;
  }
}

.content-wrapper {
  overflow: hidden;
  //background-color: $clr-light;
  //@include box-shadow(2rem);
  max-width: $max-width;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;

  .content {
    padding-top: 5.5rem;
    z-index: -10;
    * {
      z-index: -10;
    }
  }
}

.side-bar-overlay {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: $clr-dark;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  display: block;
  pointer-events: none;

  &.is-active {
    opacity: 0.89;
    pointer-events: auto;
  }

  transition: opacity 0.5s ease-in;
}

.top-bar {
  max-width: $max-width * 1.13;
  height: 3.4rem;
  padding-top: 0.12rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  border-radius: 0 0 21px 21px;
  /* From https://css.glass */
  background: transparentize($clr-light, 0.21);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.34);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.12);

  &.opaque {
    background: transparentize($clr-light, 0.06);
  }
}


.side-bar {
  background-image: url("@/assets/images/pattern.svg");
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.34);
  z-index: 100;
  opacity: 0.55;
  transform: translate(-110%, 50%);
  transition: all 0.3s ease-in-out;

  &.is-active {
    opacity: 0.99;
    transform: translate(0, 0);
  }

  background-color: $clr-dark;
  //height: calc(100vh - 3.8rem);
  height: calc(100vh - 8rem);
  bottom: 0;
  position: fixed;

  width: 89vw;
  left: 0;
  border-radius: 0 21px 21px 0;
  @screen sm {
    height: calc(100vh - 8rem);
    width: $max-width * 0.89;
    left: 1rem;
    bottom: 1rem;
    border-radius: 21px;
  }

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .menu-item {
    ion-icon {
      margin-right: 0.4rem;
    }
    margin-bottom: 0.55rem;
  }
}

</style>
