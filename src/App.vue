<template>
  <div id="app" class="app">
    <Toolbar class="app__toolbar" @showIcons="showIcons" />
    <div class="app__icons app__icons--hidded" id="icons">
      <ToolbarIcons :row="false" />
    </div>
    <Body class="app__body" />
    <Footer class="app__footer" />
  </div>
</template>

<script>
import Toolbar from "./layout/Toolbar.vue";
import Body from "./layout/Body.vue";
import Footer from "./layout/Footer.vue";
import ToolbarIcons from "./components/ToolbarIcons.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    Body,
    Footer,
    ToolbarIcons,
  },
  methods: {
    showIcons() {
      let icons = document.getElementById("icons");
      const isHidded =
        Array.from(icons.classList).findIndex(
          (item) => item == "app__icons--hidded"
        ) > -1;
      if (isHidded) {
        icons.classList.remove("app__icons--hidded");
        icons.classList.add("app__icons--visible");
      } else {
        icons.classList.remove("app__icons--visible");
        icons.classList.add("app__icons--hidded");
      }
    },
  },
};
</script>

<style lang="scss">
.app {
  background-color: $grey-background;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 0;

  &__toolbar {
    position: fixed;
    left: 0;
    top: 0;
    height: 80px;
    width: 100vw;
    z-index: 5;
  }

  &__icons {
    position: absolute;
    left: 0;
    z-index: 40;
    background-color: white;
    border: 1px solid black;
    height: 150px;
    width: 150px;
    padding: 10px;

    &--hidded {
      animation: slideUp 0.25s ease;
      top: -200px;
    }

    &--visible {
      animation: slideDown 0.25s ease;
      top: 80px;
    }
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-200px);
    }

    50% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(60px);
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(100px);
    }

    50% {
      transform: translateY(40px);
    }

    100% {
      transform: translateY(-200px);
    }
  }

  &__body {
    padding-top: 80px;
    padding-bottom: 80px;
    height: 100%;
    width: 100%;
  }

  &__footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 80px;
    width: 100vw;
    z-index: 5;
  }
}
</style>
