<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'
import { VAlert, VBtn, VCard, VCardText, VCheckbox, VCol, VDivider, VImg, VRow, VTextField } from 'vuetify/components'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { themeConfig } from '@themeConfig'

import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import authV2LoginMaskDark from '@images/pages/auth-v2-login-mask-dark.png'
import authV2LoginMaskLight from '@images/pages/auth-v2-login-mask-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { Head, Link, useForm } from '@inertiajs/vue3'

import { ref } from 'vue'
import { router } from '@inertiajs/vue3'

const authThemeImg = useGenerateImageVariant(
  authV2LoginIllustrationLight,
  authV2LoginIllustrationDark,
  authV2LoginIllustrationBorderedLight,
  authV2LoginIllustrationBorderedDark,
  true
)

const authThemeMask = useGenerateImageVariant(authV2LoginMaskLight, authV2LoginMaskDark)

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const isPasswordVisible = ref(false)

const ability = useAbility()

import axios from 'axios';

interface UserAbilityRule {
  action: string;
  subject: string;
}

interface UserData {
  id: number;
  fullName: string;
  username: string;
  avatar: string;
  email: string;
  role: string;
}

// Hardcode initial ability rules
// const initialAbilityRules = [
//   {
//     action: 'manage',
//     subject: 'all',
//   },
// ];
//
// ability.update(initialAbilityRules); // Set initial ability rules

const refVForm = ref<VForm>()

const form = useForm({
  email: 'merchant@gmail.com',
  password: '@O999o19o12',
});

const rememberMe = ref(false)

const userData = ref<UserData | null>(null);
const userAbilityRules = ref<UserAbilityRule[]>([]);

// const submit = async () => {
//   try {
//     // Perform the login request using Inertia form.post
//     await form.post('/login', {
//       onFinish: () => {
//         form.reset('password'); // Reset the password field after submission
//       },
//       onSuccess: async () => {
//         try {
//           // Fetch user data after successful login
//           const userDataResponse = await axios.get('/user-data'); // Adjust this URL if needed
//           const { userData, userAbilityRules } = userDataResponse.data;
//
//           // Use raw data if `_rawValue` is present
//           const rawUserData = userData._rawValue || userData;
//           const rawUserAbilityRules = userAbilityRules._rawValue || userAbilityRules;
//
//           // Update cookies and application state
//           useCookie('userAbilityRules').value = rawUserAbilityRules;
//           useCookie('userData').value = rawUserData;
//           useCookie('accessToken').value = form.data.accessToken; // Ensure accessToken is included in form response
//
//           // Update ability with fetched rules
//           ability.update(rawUserAbilityRules);
//
//           console.log('Login successful');
//
//           // Redirect to `to` query if it exists or redirect to index route
//           // await nextTick(() => {
//           //   router.replace(route.query.to ? String(route.query.to) : '/');
//           // });
//         } catch (error) {
//           console.error('Error fetching user data:', error);
//           // Handle error response
//           if (error.response && error.response.data && error.response.data.errors) {
//             errors.value = error.response.data.errors;
//           }
//         }
//       },
//       onError: (error) => {
//         console.error('Error during login:', error);
//         // Handle form submission errors
//         if (error.response && error.response.data && error.response.data.errors) {
//           errors.value = error.response.data.errors;
//         }
//       },
//     });
//   } catch (error) {
//     console.error('Unexpected error during login:', error);
//     // Handle unexpected errors
//     errors.value = { global: 'An unexpected error occurred. Please try again later.' };
//   }
// };

const fetchUserData = () => {
  return axios.get('/user-data'); // Adjust this URL to match your actual endpoint
};

// const submit = async () => {
//   try {
//     // Perform the login request
//     const loginResponse = await axios.post('/login', {
//       email: form.email,
//       password: form.password,
//     });
//
//     // Extract accessToken from the login response
//     const { accessToken } = loginResponse.data;
//
//     // Fetch user data after successful login
//     const userDataResponse = await axios.get('/user-data'); // Adjust this URL if needed
//     const { userData, userAbilityRules } = userDataResponse.data;
//
//     // Use raw data if `_rawValue` is present
//     const rawUserData = userData._rawValue || userData;
//     const rawUserAbilityRules = userAbilityRules._rawValue || userAbilityRules;
//
//     // Update cookies and application state
//     useCookie('userAbilityRules').value = rawUserAbilityRules;
//     useCookie('userData').value = rawUserData;
//     useCookie('accessToken').value = accessToken;
//
//     // Update ability with fetched rules
//     ability.update(rawUserAbilityRules);
//
//     console.log('Login successful');
//
//     // Redirect to `to` query if it exists or redirect to index route
//     // await nextTick(() => {
//     //   router.replace(route.query.to ? String(route.query.to) : '/');
//     // });
//   } catch (error) {
//     console.error('Error during login or fetching user data:', error);
//     // Handle error response
//     if (error.response && error.response.data && error.response.data.errors) {
//       errors.value = error.response.data.errors;
//     }
//   }
// };


const submit = async () => {
  form.post('/login', {
    onFinish: () => {
      form.reset('password')
    },
    onSuccess: () => {
      fetchUserData()
        .then((response) => {
          const { userData, userAbilityRules } = response.data;
          // Access the raw content if it contains metadata
          const rawUserData = userData._rawValue || userData; // Adjust based on actual structure
          const rawUserAbilityRules = userAbilityRules._rawValue || userAbilityRules;

          useCookie('userAbilityRules').value = rawUserAbilityRules
          ability.update(rawUserAbilityRules)

          useCookie('userData').value = rawUserData
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    },
    onError: (error) => {
      form.errors = error
    }
  })
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid) {
        submit()
      }
    })
}
</script>

<template>
  <RouterLink to="/">
    <div class="auth-logo app-logo">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="app-logo-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </RouterLink>

  <VRow no-gutters class="auth-wrapper">
    <VCol md="8" class="d-none d-md-flex align-center justify-center position-relative">
      <div class="d-flex align-center justify-center pa-10">
        <img :src="authThemeImg" class="auth-illustration w-100" alt="auth-illustration" />
      </div>
      <VImg :src="authThemeMask" class="d-none d-md-flex auth-footer-mask" alt="auth-mask" />
    </VCol>

    <VCol cols="12" md="4" class="auth-card-v2 d-flex align-center justify-center" style="background-color: rgb(var(--v-theme-surface));">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-5 pa-lg-7">
        <VCardText>
          <h4 class="text-h4 mb-1">
            Welcome to <span class="text-capitalize">{{ themeConfig.app.title }}!</span> 👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>
        <VCardText>
          <VAlert color="primary" variant="tonal">
            <p class="text-caption mb-2 text-primary">
              Admin Email: <strong>admin@demo.com</strong> / Pass: <strong>admin</strong>
            </p>
            <p class="text-caption mb-0 text-primary">
              Client Email: <strong>client@demo.com</strong> / Pass: <strong>client</strong>
            </p>
          </VAlert>
        </VCardText>

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <VTextField
                  v-model="form.email"
                  label="Email"
                  placeholder="johndoe@email.com"
                  type="email"
                  autofocus
                  :rules="[requiredValidator, emailValidator]"
                  :error-messages="form.errors.email"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <VTextField
                  v-model="form.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :error-messages="form.errors.password"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center flex-wrap justify-space-between my-6 gap-x-2">
                  <VCheckbox v-model="rememberMe" label="Remember me" />
                  <RouterLink class="text-primary" :to="{ name: 'forgot-password' }">
                    Forgot Password?
                  </RouterLink>
                </div>

                <VBtn block type="submit">
                  Login
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol cols="12" class="text-body-1 text-center">
                <span class="d-inline-block">New on our platform?</span>
                <RouterLink class="text-primary ms-1 d-inline-block text-body-1" :to="{ name: 'register' }">
                  Create an account
                </RouterLink>
              </VCol>

              <VCol cols="12" class="d-flex align-center">
                <VDivider />
                <span class="mx-4 text-high-emphasis">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol cols="12" class="text-center">
                <AuthProvider />
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
