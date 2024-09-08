<template>
  <div class="footer__wrapper">
    <div class="horizontLine"></div>
    <div class="footer d-flex justify-space-between  px-3 py-8">
      <p class="text-caption footer__left">
        Сервис обмена электронных валют.
      </p>
      <div class="footer__soc d-flex justify-start">
        <a href="vk.com">
          <img
            src="@/assets/vk-ico.png"
            alt="vk"
          >
        </a>
        <a href="vk.com">
          <img
            src="@/assets/vk-ico.png"
            alt="vk"
          >
        </a>
        <a href="vk.com">
          <img
            src="@/assets/vk-ico.png"
            alt="vk"
          >
        </a>
        <a href="vk.com">
          <img
            src="@/assets/vk-ico.png"
            alt="vk"
          >
        </a>
        <a href="vk.com">
          <img
            src="@/assets/vk-ico.png"
            alt="vk"
          >
        </a>
      </div>
      <div class="footer-right">
        <img
          class="mb-1"
          src="@/assets/bestchange.gif"
          alt="bestchange"
        >
        <img
          class="ml-2"
          src="@/assets/glazok.png"
          alt="glazok"
        >
      </div>
    </div>
    <div class="footer__links d-flex justify-center pt-5">
      <router-link :to="{ name: 'security'}">
        <span>Безопасность</span>
      </router-link>
      <router-link :to="{ name: 'rules'}">
        <span>Правила</span>
      </router-link>
      <router-link :to="{ name: 'privacy'}">
        <span>Политика конфиденциальности
        </span>
      </router-link>
    </div>
  </div>
</template>

<style>

    .footer__soc {
        width: 30%;
    }
    .footer__soc a {
        margin: 0 5px 0 0;
    }

    .p__footer {
        color: #949494;
    }

    .footer__links span {
        text-decoration: underline !important;
        color: #6377F7 !important;
        font-size: 14px !important;
        padding-top: 0;
    }

    .footer__links a {
        padding: 0;

    }

    .horizontLine {
      border-top: 1px solid #e0e2eb;
      width: 100%;
      width: 100vw;
      position: relative;
      left: calc(-50vw + 50%);
    }
</style>