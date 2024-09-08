<template>
  <form
    @submit.prevent="onSubmit"
    class="log__form__wrapper"
  >
    <div class="log__form__title d-flex justify-space-between">
      <h3>Авторизация</h3>
      <button @click="$emit('closePopup')">
        <img
          src="@/assets/close.png"
          alt="close"
        >
      </button>
    </div>
    <div class="log__form__content">
      <AppInput 
        title="Логин или e-mail"
        v-model="email"
      />
      <AppInput 
        title="Пароль" 
        v-model="password"
      />
      <div class="login__buttom pb-3">
        <input
          type="submit"
          formtarget="_top"
          name="submit"
          class="rb_submit"
          value="Войти"
        >
      </div>
      <div class="rb__line d-flex justify-start pb-2">
        <a
          href="https://express.money/register/"
          class="window_join pr-1"
        >Регистрация</a>
        | 
        <a
          href="https://express.money/lostpass/"
          class="window_join pl-1"
        >Забыли пароль?</a>
      </div>
    </div>
    <div
      class="error__login"
      v-if="error"
    >
      {{ error }}
    </div>
  </form>
</template>

<script>
  import AppInput from "@/components/AppInput.vue"

  export default {
    components: {
      AppInput
    },
    data () {
      return {
        email: '',
        password:'',
        error: ''
      }
    },
    methods: {
      onSubmit () {
        try {
        this.$store.dispatch('login', {login:this.email, password:this.password})
        this.error = ''
        this.$emit('closePopup')
      } catch (error) {
        this.error = error
      }
      }
    },
    watch: {
      email () {
        this.error = ''
      },
      password () {
        this.error = ''
      }
    }
  }

</script>

<style>

  .log__form__wrapper {
    position: relative;
    width: 400px;
    margin: 0 auto;
    color: #000;
    padding: 0px 20px 10px;
    background: #fff;
    border-radius: 4px;
  }

  .log__form__title {
      font-size: 18px;
      font-weight: 600;
      background: #f3f7fc;
      padding: 15px 40px 15px 20px;
      margin: 0 -20px 15px;
      border-radius: 4px 4px 0 0;
  }
  .log__form__title h3 {
      font-weight: 600;
  }

  .login__buttom input {
    border: 1px solid #f1c613;
    background: #f1c613;
    border-radius: 4px;
    max-width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    color: #000;
    cursor: pointer;
    height: 40px;
    padding: 0 25px;
    font: 16px/40px 'IBM Plex Sans', sans-serif;
  }
  

  .window_join {
    text-decoration: underline !important;
    font-size: 14px !important;
    color: #6377F7 !important;
    margin: 0;
    padding: 0;
  }

  .error__login {
    padding: 14px 20px;
    border-radius: 3px;
    background: #f8dfdf !important;
    margin: 0 0 20px 0;
    font-size: 14px;
  }
</style>