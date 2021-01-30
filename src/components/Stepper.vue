<template>
  <div class="stepper">
    <div v-for="step in steps" :key="step.number" class="flex-column">
      <div class="flex-row center-items">
        <div
          class="stepper__circle center-items"
          :class="{
            'stepper__circle--blue': !isCompleted(step.number),
            'stepper__circle--green': isCompleted(step.number),
          }"
        >
          <font-awesome-icon
            v-if="isCompleted(step.number)"
            icon="check"
            color="white"
          />
          <span v-else> {{ step.number }} </span>
        </div>
      </div>
      <span>{{ step.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: { step: { type: Number, required: true } },
  data: function () {
    return {
      steps: [
        {
          number: 1,
          text: "Mis datos",
        },
        {
          number: 2,
          text: "Pagos",
        },
      ],
    };
  },
  methods: {
    isCompleted(stepNumber) {
      return this.step > stepNumber;
    },
  },
};
</script>

<style lang="scss" scoped>
.stepper {
  &__circle {
    height: 30px;
    width: 30px;
    border-radius: 80%;
    color: white;
    margin-left: 20px;
    margin-right: 20px;

    &--blue {
      background-color: $light-blue;
    }

    &--green {
      background-color: $green-light;
    }
  }
}
</style>