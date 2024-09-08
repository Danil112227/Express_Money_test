<template>
  <v-app id="inspire">
    <v-app-bar
      app
      elevate-on-scroll
      color="white"
      flat
      height="90"
    >
      <v-container 
        class="py-0 fill-height flex-nowrap top-menu-container"
      >
        <router-link :to="{ name: 'home' }">
          <v-img
            max-height="90"
            max-width="237"
            :src="require('@/assets/logo.png')"
          />
        </router-link>
       
        <nav class="header__nav">
          <ul class="topmenu d-flex justify-c">
            <li>
              <router-link :to="{ name: 'home' }">
                <span>Главная</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'rules'}">
                <span>Правила</span><i class="fa fa-angle-down" />
              </router-link>
              <ul class="sub-menu">
                <li>
                  <router-link :to="{ name: 'privacy'}">
                    <span>Политика конфиденциальности</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'security' }">
                    <span>Безопасность</span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link :to="{ name: 'FAQ' }">
                <span>FAQ</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'feedback' }">
                <span>Отзывы</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'contact'}">
                <span>Контакты</span>
              </router-link>
            </li>
          </ul>
        </nav>
        
    

    
        <v-spacer />
        <template v-if="user">
          Привет {{ user.name }}
          <v-btn 
            class="white--text text-capitalize px-10 ml-3"
            large
            color="#6377F7"
            max-height="36"
            max-width="62"
            @click="$store.dispatch('logout')"
          >
            Выйти
          </v-btn>
        </template>
        <template
          v-else
        >
          <v-btn 
            class="white--text text-capitalize px-10"
            large
            color="#6377F7"
            max-height="36"
            max-width="62"
            @click="showPopup"
          >
            Войти
          </v-btn>
          <v-btn 
            class="ml-3 text-capitalize"
            large
            color="#F1C613"
            max-height="36"
          >
            Регистрация
          </v-btn>
        </template>
      </v-container>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>


    <v-overlay :value="isPopupShowing">
      <LoginForm 
        @closePopup="onClosePopup"
      />
    </v-overlay>
  </v-app>
</template>


<script>
  import LoginForm from "@/components/LoginForm.vue";



export default {
  components: {
    LoginForm,
},
methods: {
  onClosePopup () {
    this.isPopupShowing = false
  },
  showPopup () {
    this.isPopupShowing = true
  }
},
data () {
  return {
    isPopupShowing: false
  }
  
},
computed: {
  user () {
    return this.$store.state.user
  }
}
    
}
</script>



<style lang='scss'>
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');
    
    
    
    $body-font-family: 'IMB Plex Sans';
    $title-font: 'IMB Plex Sans';
    
     .v-application {
       font-family: $body-font-family, sans-serif !important;
        .title { // To pin point specific classes of some components
           font-family: $title-font, sans-serif !important;
        }
     }
    
     .top-menu-container {
      max-width: 1150px !important;
     }
    
     .v-btn{
      font-size: 16px !important;
     }
    
     .header__nav {
      margin-left: 55px;
     }
    
     .topmenu > li {
      display: inline-block;
      position: relative;
    }
    .topmenu > li:last-child {
      margin-right: 0;
    }

    .topmenu a {
      color: #000 !important;
    }
    
    a {
      display: block;
      padding: 10px 0;
      margin: 0 12px;
      text-decoration: none;
      outline: none;
      transition: .5s linear;
    }
    
    .v-application a:hover {
      color: #1976d2 !important;
    }
    
    .sub-menu { 
      font-size: 14px;
      text-decoration: none;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      z-index: 10;
      -webkit-transition: all 0.5s ease-in-out;
      -moz-transition: all 0.5s ease-in-out;
      -o-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      float: none;
      display: none;
      background: #fff;
      box-shadow: 0 0 5px #e1e9f2;
      border: 1px solid #eaeef4;
      border-radius: 4px;
      padding: 10px 4px !important;
      height: auto;
      width: 235px;
      margin: 0;
    }
    
    .header__nav .sub-menu {
      display: none;
    }
    
    .header__nav ul li:hover .sub-menu {
      display: block;
      list-style-type: none;
    }
    </style>