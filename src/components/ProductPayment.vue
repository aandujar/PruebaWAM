<template>
  <div class="product-payment center-items flex-column">
    <!-- titles -->
    <span class="text text--big text--bold">Pago del producto</span>
    <span class="text text--medium"
      >Una vez efectuado el pago del producto, recibirás un email con los
      detalles de la compra.</span
    >
    <div class="container container--border center-items flex-column">
      <font-awesome-icon
        icon="credit-card"
        color="red"
        class="icon icon--big"
      />
      <span class="text text--medium text--bold">Tarjeta de crédito</span>
      <span class="text text--medium"
        >Se redirigirá a una plataforma de pago. Se trata de un proceso seguro.
        Puede que la validación del pago tarde 24 horas en completarse.</span
      >
      <!-- body -->
      <div class="container flex-row flex-row--centered">
        <font-awesome-icon
          icon="credit-card"
          color="black"
          class="icon icon--medium product-payment__items-margin"
        />
        <font-awesome-icon
          icon="credit-card"
          color="black"
          class="icon icon--medium product-payment__items-margin"
        />
      </div>
    </div>
    <!-- error message  -->
    <transition name="slide-fade">
      <div class="container flex-row flex-row--centered" v-show="showError">
        <span class="my-data__error">Debes rellenar todos los campos</span>
      </div>
    </transition>
    <!-- buttons -->
    <div class="container flex-row flex-row--space-between">
      <MyButton :blue="false" text="Anterior" @clicked="goPrevious" />
      <MyButton text="Pagar" @clicked="goNext" />
    </div>
  </div>
</template>

<script>
import MyButton from "../components/MyButton.vue";

export default {
  name: "ProductPayment",
  props: { person: { type: Object, required: true } },
  components: {
    MyButton,
  },
  data: function () {
    return {
      showError: false,
    };
  },
  methods: {
    goPrevious() {
      this.$emit("previous");
    },
    goNext() {
      fetch("http://www.mocky.io/v2/5e3d41272d00003f7ed95c09", {
        method: "POST",
        body: this.person,
      })
        .then(() => this.$emit("next", null))
        .catch(() => this.showErrorMessage());
    },
    showErrorMessage() {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-payment {
  &__items-margin {
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>