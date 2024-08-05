<script lang="ts" setup>
import {usePage} from "@inertiajs/vue3";
import {ref} from "vue";
import { router } from '@inertiajs/vue3'
import axios from 'axios';

const page = usePage()

const activeStore = useCookie<any>('activeStore')
const selectedStore = ref(activeStore.value || page.props.sharedData.userData.stores[0].id)

const loginLink = ref<string | null>(null);

// Fetch the login link when the component is mounted
const fetchLoginLink = async () => {
  try {
    const post = { id: selectedStore.value };

    const response = await axios.post(route('merchant.domain.login', post ))
    loginLink.value = response.data; // Adjust based on your API response structure
  } catch (error) {
    console.error('Login failed:', error);
    // Handle error, for example, show an error message or fallback URL
  }
};

// Use `onMounted` to fetch the login link
onMounted(() => {
  fetchLoginLink();
});

// const buyNowUrl = (typeof window !== 'undefined' && 'isMarketplace' in window && window.isMarketplace)
//   ? 'https://store.vuetifyjs.com/products/materialize-vuejs-admin-template'
//   : 'https://1.envato.market/materialize_admin'
</script>

<template>
  <a
    class="buy-now-button d-print-none"
    role="button"
    rel="noopener noreferrer"
    :href="loginLink"
    target="_blank"
  >
    Go to Store
    <span class="button-inner" />
    <VIcon
      icon="ri-arrow-right-line"
      end
      class="flip-in-rtl"
    />
  </a>
</template>

<style lang="scss" scoped>
.buy-now-button,
.button-inner {
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 6px;
  margin: 0;
  animation: anime 12s linear infinite;
  appearance: none;
  background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
  background-size: 600%;
  color: rgba(255, 255, 255, 90%);
  cursor: pointer;
  font-size: 0.9375rem;
  font-weight: 500;
  letter-spacing: 0.43px;
  line-height: 1.2;
  min-inline-size: 50px;
  outline: 0;
  padding-block: 0.625rem;
  padding-inline: 1.25rem;
  text-decoration: none;
  text-transform: none;
  vertical-align: middle;
}

.buy-now-button {
  position: fixed;
  z-index: 999;
  inset-block-end: 5%;
  inset-inline-end: 87px;

  &:hover {
    color: white;
    text-decoration: none;
  }

  .button-inner {
    position: absolute;
    z-index: -1;
    filter: blur(12px);
    inset: 0;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  &:not(:hover) .button-inner {
    opacity: 0.8;
  }
}

@keyframes anime {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
