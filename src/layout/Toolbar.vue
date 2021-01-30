<template>
  <div class="toolbar flex-row flex-row--space-between flex-row--aligned">
    <!-- hamburguer icon -->
    <div class="toolbar__hamburguer" @click="showIcons">
      <font-awesome-icon icon="bars" color="black" class="icon icon--small" />
    </div>
    <!-- logo -->
    <div class="image-padding">
      <img class="toolbar__image" alt="logo" src="../assets/wam.jpeg" />
    </div>
    <!-- rigth items -->
     <ToolbarIcons class="toolbar__icons-rigth" />
  </div>
</template>

<script>
import ToolbarIcons from "../components/ToolbarIcons.vue";

export default {
  name: "Toolbar",
  components: {
    ToolbarIcons
  },
  data: function () {
    return {
      showCardIcons: false,
    };
  },
  methods: {
    showIcons(){
      this.$emit("showIcons");
    }
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
  background-color: white;
  position: absolute;

  &__image {
    height: 60px;
    width: 120px;
  }

  &__hamburguer {
    display: none;
  }

  .image-padding {
    padding-left: 100px;
  }

  @media (max-width: 600px) {
    &__hamburguer {
      display: block;
      padding-left: 20px;
      cursor: pointer;
    }

    &__icons-rigth {
      display: none;
    }

    .image-padding {
      align-self: flex-end;
    }
  }
}
</style>