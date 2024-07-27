<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import authV2RegisterIllustrationBorderedDark from '@images/pages/auth-v2-register-illustration-bordered-dark.png'
import authV2RegisterIllustrationBorderedLight from '@images/pages/auth-v2-register-illustration-bordered-light.png'
import authV2RegisterIllustrationDark from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2RegisterIllustrationLight from '@images/pages/auth-v2-register-illustration-light.png'
import authV2RegisterMaskDark from '@images/pages/auth-v2-register-mask-dark.png'
import authV2RegisterMaskLight from '@images/pages/auth-v2-register-mask-light.png'
import { useForm } from "laravel-precognition-vue-inertia";
import { ref } from 'vue'

const authThemeMask = useGenerateImageVariant(authV2RegisterMaskLight, authV2RegisterMaskDark)

const authThemeImg = useGenerateImageVariant(
  authV2RegisterIllustrationLight,
  authV2RegisterIllustrationDark,
  authV2RegisterIllustrationBorderedLight,
  authV2RegisterIllustrationBorderedDark,
  true)

// definePage({
//   meta: {
//     layout: 'blank',
//     unauthenticatedOnly: true,
//   },
// })

import Layout from '@/layouts/blank.vue'

defineOptions({ layout: Layout })

const form = useForm('post', '/user/store', {
  first_name:'',
  last_name: '',
  email: '',
  phone_number: '',
  password: '',
})

const isPasswordVisible = ref(false)

// const onSubmit = () => form.submit();

// State for form submission error
const errors = ref<{ [key: string]: string[] }>({});

const onSubmit = async () => {
  try {
    await form.submit();
  } catch (e) {
    // Handle errors returned by the backend
    if (e.response && e.response.data && e.response.data.errors) {
      errors.value = e.response.data.errors;
    }
  }
}

</script>

<template>
  <RouterLink to="/">
    <div class="app-logo auth-logo">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="app-logo-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </RouterLink>

  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      md="8"
      class="d-none d-md-flex align-center justify-center position-relative"
    >
      <!-- here your illustrator -->
      <div class="d-flex align-center justify-center pa-10">
        <img
          :src="authThemeImg"
          class="auth-illustration w-100"
          alt="auth-illustration"
        >
      </div>
      <VImg
        :src="authThemeMask"
        class="d-none d-md-flex auth-footer-mask"
        alt="auth-mask"
      />
    </VCol>

    <VCol
      cols="12"
      md="4"
      class="auth-card-v2 d-flex align-center justify-center"
      style="background-color: rgb(var(--v-theme-surface));"
    >
      <VCard
        flat
        :max-width="500"
        class="mt-12 mt-sm-0 pa-5 pa-lg-7"
      >
        <VCardText>
          <h4 class="text-h4 mb-1">
            Adventure starts here 🚀
          </h4>
          <p class="mb-0">
            Make your app management easy and fun!
          </p>
        </VCardText>

        <VCardText>
          <VForm @submit.prevent="onSubmit">
            <VRow>
              <!-- Other fields here -->

              <VCol cols="12">
                <VTextField
                    v-model="form.first_name"
                    @change="form.validate('first_name')"
                    label="First Name"
                    placeholder="Johndoe"
                    :error-messages="form.errors.first_name"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                    v-model="form.last_name"
                    @change="form.validate('last_name')"
                    label="Last Name"
                    placeholder="Johndoe"
                    :error-messages="form.errors.last_name"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                    v-model="form.email"
                    @change="form.validate('email')"
                    label="Email"
                    type="email"
                    placeholder="johndoe@email.com"
                    :error-messages="form.errors.email"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                    v-model="form.phone_number"
                    @change="form.validate('phone_number')"
                    label="Phone Number"
                    placeholder="1234567890"
                    :error-messages="form.errors.phone_number"
                />
              </VCol>

              <VCol cols="12">
                <VTextField
                    v-model="form.password"
                    @change="form.validate('password')"
                    label="Password"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    :error-messages="form.errors.password"
                />
              </VCol>

              <VCol cols="12">
                <VBtn block type="submit">Sign up</VBtn>
              </VCol>
            </VRow>
          </VForm>

        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
