<template>
  <div class="my-button">
    <button
      type="button"
      class="item item--pointer"
      :class="{ 'item--next': blue, 'item--previous': !blue }"
      @click="$emit('clicked')"
    >
      <div class="flex-row flex-row--space-between flex-row--aligned">
        <font-awesome-icon v-if="!blue" icon="arrow-alt-circle-left" />
        {{ text }}
        <font-awesome-icon
          v-if="blue"
          icon="arrow-alt-circle-right"
          color="white"
        />
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    blue: { type: Boolean, required: false, default: true },
    text: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.my-button {
  .item {
    height: 40px;
    width: 100px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border: none;
    border: 1px solid $light-blue;

    &--next {
      background-color: $light-blue;
      color: white;
    }

    &--previous {
      background-color: white;
      color: $light-blue;
    }

    &--pointer {
      cursor: pointer;
    }
  }
}
</style>