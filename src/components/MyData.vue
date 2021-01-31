<template>
  <div class="my-data center-items flex-column">
    <span class="text text--big text--bold">Mis Datos</span>
    <span class="text text--medium"
      >Revisa los datos y completa solo aquellos pendientes antes de continuar
      con el proceso.</span
    >
    <div class="container center-items flex-column">
      <!-- form -->
      <div class="flex-row flex-row--centered my-data--full-width">
        <!-- name -->
        <div class="flex-column my-data--full-width">
          <span class="text text--medium flex-row--start">Nombre</span>
          <input
            class="my-data__textfield my-data--full-width"
            type="text"
            name="Nombre"
            v-model="person.name"
          />
        </div>
      </div>
      <!-- surnames -->
      <div class="flex-row flex-row--centered my-data--full-width">
        <div class="flex-column my-data--full-width">
          <span class="text text--medium flex-row--start">Apellidos</span>
          <input
            class="my-data__textfield my-data--full-width"
            type="text"
            name="Apellidos"
            v-model="person.surnames"
          />
        </div>
      </div>
    </div>
    <!-- error message -->
    <transition name="slide-fade">
      <div class="flex-row flex-row--centered" v-show="showError">
        <span class="my-data__error">Debes rellenar todos los campos</span>
      </div>
    </transition>
    <!-- button  -->
    <div class="container flex-row flex-row--content-end">
      <MyButton text="Continuar" @clicked="checkData" />
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";

export default {
  name: "MyData",
  components: {
    MyButton,
  },
  data: function () {
    return {
      person: {
        name: "Antonio",
        surnames: "",
      },
      showError: false,
    };
  },
  methods: {
    checkData() {
      if (this.person.name.length > 0 && this.person.surnames.length > 0) {
        this.$emit("next", this.person);
      } else {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.my-data {
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  &--full-width {
    width: 100%;
  }

  input:focus {
    outline: none !important;
    border-color: $light-blue;
    box-shadow: 0 0 10px $light-blue;
  }
  &__textfield {
    margin-bottom: 10px;
  }

  &__error {
    color: $red-error;
    margin-bottom: 10px;
  }
}
</style>