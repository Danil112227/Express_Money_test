<template>
  <div class="wrapper contact__wrapper">
    <div class="content__wrap d-flex justify-space-between  px-3 py-6">
      <div class="content">
        <div class="title title__contact">
          <div class="title__nav">
            <router-link :to="{ name: 'home' }">
              Обмен валют
            </router-link>
          </div>
          <h1 class="info__card__title">
            Контакты
          </h1>
        </div>
        <div class="page__wrap">
          <div class="page__content">
            <form
              action=""
              class="post__form"
            >
              <div class="form__title title">
                <h1 class="info__card__title mb-5">
                  Форма контактов
                </h1>
              </div>
              <ContactInput 
                v-model="name"
                title="Ваше имя"
              />
              <ContactInput 
                v-model="email"
                title="Ваше e-mail"
              />
              <ContactInput 
                v-model="exchangeId"
                title="ID обмена"
              />
              <label for="form_field_text">
                <span class="form__field__label__ins">
                  Сообщение 
                  <span class="req">*</span>
                  :
                </span>
              </label>
              <textarea
                id="form_field_text"
                class="textarea mb-5"
                autocomplete="off"
              />
              <div class="login__buttom pb-3">
                <input
                  @click="onclick"
                  type="submit"
                  formtarget="_top"
                  name="submit"
                  class="rb_submit"
                  value="Отправить сообщение"
                >
              </div>
            </form>
          </div>
        </div>
      </div>
      <SideBar />
    </div>
    <FooterEnd />
  </div>
</template>

<script>
  import ContactInput from '@/components/ContactInput.vue';
  import SideBar from '@/components/SideBar.vue';
  import FooterEnd from '@/components/FooterEnd.vue';

  export default {
    components: {
      ContactInput,
      SideBar,
      FooterEnd,
    },
    data () {
      return {
          name: '',
          email:'',
          exchangeId:'',
          massage:'',
      }
    },
    methods: {
      onclick () {
        console.log("it works!")
      }
    }
  }
</script>

<style>
  .contact__wrapper {
    max-width: 1150px;
    margin: 0 auto;
  }

  .content {
    width: 74%;
  }

  .textarea {
    border: 1px solid #e8e9ef;
    box-shadow: inset 1px 1px 1px #e8e9ef;
    background: #f6f7fc;
    border-radius: 3px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    color: #000;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: 100px;
    min-height: 100px;
    padding: 15px;
    font: 13px 'IBM Plex Sans', sans-serif;
    vertical-align: baseline;
  }

  .title__contact {
    width: 100%;
    padding-bottom: 25px;
  }

  .title__nav a {
    font-size: 14px;
    color: #000;
    text-decoration: none;
    margin: 0;
    padding: 0 0 15px 0;
    
  }

  .page__wrap {
    margin: 0 0 20px 0;
    padding: 20px 20px 5px;
    background: #fff;
    box-shadow: 0 0 5px #e1e9f2;
    border-radius: 4px;
  }

  .page__content {
    margin: 0 0 20px 0;
    background: #fff;
    box-shadow: 0 0 5px #e1e9f2;
    border-radius: 4px;
    padding: 20px 20px 5px;
  }

</style>