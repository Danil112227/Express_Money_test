<template>
  <div class="sidebar">
    <SideBarLogin />
    <SideBarFeedBackList />
    <div class="last__side__bar__item">
      <div class="exchangeSumo">
        <a href="https://exchangesumo.com/exchanger/990/Express-money/">
          <img
            src="@/assets/3.svg"
            class="svgExchange"
          >
        </a>
      </div>
    </div>  
  </div>
</template>

<script>
import SideBarLogin from '@/components/SideBarLogin.vue';
import SideBarFeedBackList from '@/components/SideBarFeedBackList.vue'; 

export default {
    components: {
        SideBarLogin,
        SideBarFeedBackList,
        
    }
}
</script>

<style>
     .sidebar {
    width: 24%;
  }
  .exchangeSumo {
    margin: 0 0 20px 0;
    background: #fff;
    box-shadow: 0 0 5px #e1e9f2;
    border-radius: 4px;
    padding: 20px 20px;
  }

  .exchangeSumo a {
    margin: 0 !important;
    padding: 0 !important; 
  }

  .svgExchange {
    width: 100%;
  height: 100%;
  object-fit: contain;
  }
</style>