import { _ as _sfc_main$5 } from "./AppCardCode-DkpMhnYF.js";
import { ref, withCtx, unref, isRef, createVNode, createTextVNode, openBlock, createBlock, useSSRContext, withModifiers } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./AppStepper-DSePPp52.js";
import { V as VCard } from "./VCard-BPXR3fWJ.js";
import { V as VCardText } from "./VCardText-C84ViOu1.js";
import { V as VDivider } from "./VDivider-o5iRKh3w.js";
import { V as VForm } from "./VForm-J0SV9LXx.js";
import { V as VWindow, a as VWindowItem } from "./VWindowItem-DbEW2JYm.js";
import { V as VRow, a as VCol } from "./VRow-DasIRXDq.js";
import { V as VTextField } from "./VTextField-C5xFQjHM.js";
import { V as VSelect } from "./VSelect-5lJOBAar.js";
import { V as VBtn, a as VIcon } from "../ssr.js";
import { r as requiredValidator, e as emailValidator, p as passwordValidator, d as confirmedValidator, u as urlValidator } from "./validators-CW3JK3pA.js";
import "prismjs";
import "vue-prism-component";
import "@vueuse/core";
import "./index-D5WAZiYx.js";
import "./VSlideGroup-Bvz86g7R.js";
import "./VSlideGroupItem-CIJ0uuo8.js";
import "./VAvatar-D2wIwigQ.js";
import "./VImg-D-rbsD1g.js";
import "./form-DJQTvsmB.js";
import "./forwardRefs-IZGbB77j.js";
import "./lazy-kVEey9ha.js";
import "./ssrBoot-Co4_dNdy.js";
/* empty css               */
/* empty css                    */
import "./VCounter-DhMMJgFl.js";
import "./VField-DXNiYeaA.js";
import "./easing-BikAOx6-.js";
import "./VInput-Bla8Vlgt.js";
import "./VList-Bay5Fixr.js";
import "./dialog-transition-CtM2qLK8.js";
import "./VMenu-KUYgjPyD.js";
import "./VOverlay-BlPDiq4k.js";
import "./scopeId-3C34eX5s.js";
import "./VCheckboxBtn-CCkh1QvV.js";
import "./VSelectionControl-DW0YMxqK.js";
import "./VChip-BFfBWJ68.js";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "@inertiajs/vue3/server";
import "unplugin-vue-router/runtime";
import "unplugin-vue-router/data-loaders/basic";
import "pinia";
import "cookie-es";
import "destr";
import "vue-router";
import "@casl/vue";
import "@casl/ability";
import "outvariant";
import "@open-draft/until";
import "@mswjs/cookies";
import "strict-event-emitter";
import "@sindresorhus/is";
import "@bundled-es-modules/statuses";
import "path-to-regexp";
import "@mswjs/interceptors";
import "@bundled-es-modules/cookie";
import "headers-polyfill";
import "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js";
import "@floating-ui/dom";
import "vue3-perfect-scrollbar";
import "@antfu/utils";
import "./helpers-DX2i3Kdq.js";
const basic = { ts: `<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Account Details
                </h6>
                <p class="text-sm mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Personal Info
                </h6>
                <p class="text-sm mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Social Links
                </h6>
                <p class="text-sm mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="outlined"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="ri-arrow-left-line"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            append-icon="ri-check-line"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="ri-arrow-right-line"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
`, js: `<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->
      <VForm>
        <VWindow
          v-model="currentStep"
          class="disable-tab-transition"
        >
          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Account Details
                </h6>
                <p class="text-sm mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.username"
                  placeholder="CarterLeonardo"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.email"
                  placeholder="carterleonardo@gmail.com"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Personal Info
                </h6>
                <p class="text-sm mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.firstName"
                  label="First Name"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.lastName"
                  label="Last Name"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.country"
                  label="Country"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="formData.language"
                  label="Language"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>
            </VRow>
          </VWindowItem>

          <VWindowItem>
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Social Links
                </h6>
                <p class="text-sm mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.twitter"
                  placeholder="https://twitter.com/abc"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.facebook"
                  placeholder="https://facebook.com/abc"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.LinkedIn"
                  placeholder="https://linkedin.com/abc"
                  label="LinkedIn"
                />
              </VCol>
            </VRow>
          </VWindowItem>
        </VWindow>

        <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
          <VBtn
            color="secondary"
            variant="outlined"
            :disabled="currentStep === 0"
            @click="currentStep--"
          >
            <VIcon
              icon="ri-arrow-left-line"
              start
              class="flip-in-rtl"
            />
            Previous
          </VBtn>

          <VBtn
            v-if="numberedSteps.length - 1 === currentStep"
            color="success"
            append-icon="ri-check-line"
            @click="onSubmit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            Next

            <VIcon
              icon="ri-arrow-right-line"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VForm>
    </VCardText>
  </VCard>
</template>
` };
const validation = { ts: `<script setup lang="ts">
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true

      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    }
    else { isCurrentStepValid.value = false }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Account Details
                </h6>
                <p class="text-sm mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="outlined"
                    disabled
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="ri-arrow-right-line"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Personal Info
                </h6>
                <p class="text-sm mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="ri-arrow-right-line"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Social Links
                </h6>
                <p class="text-sm mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`, js: `<script setup>
import { VForm } from 'vuetify/components/VForm'

const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()

const accountForm = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
})

const personalForm = ref({
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
})

const socialForm = ref({
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validatePersonalForm = () => {
  refPersonalForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    } else {
      isCurrentStepValid.value = false
    }
  })
}

const validateSocialLinkForm = () => {
  refSocialLinkForm.value?.validate().then(valid => {
    if (valid.valid) {
      isCurrentStepValid.value = true
      console.log({
        ...accountForm.value,
        ...personalForm.value,
        ...socialForm.value,
      })
    } else {
      isCurrentStepValid.value = false
    }
  })
}
<\/script>

<template>
  <VCard>
    <VCardText>
      <!-- 👉 Stepper -->
      <AppStepper
        v-model:current-step="currentStep"
        :items="numberedSteps"
        :is-active-step-valid="isCurrentStepValid"
      />
    </VCardText>

    <VDivider />

    <VCardText>
      <!-- 👉 stepper content -->

      <VWindow
        v-model="currentStep"
        class="disable-tab-transition"
      >
        <VWindowItem>
          <VForm
            ref="refAccountForm"
            @submit.prevent="validateAccountForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Account Details
                </h6>
                <p class="text-sm mb-0">
                  Enter your Account Details
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.username"
                  placeholder="CarterLeonardo"
                  :rules="[requiredValidator]"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.email"
                  placeholder="carterleonardo@gmail.com"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.password"
                  label="Password"
                  placeholder="············"
                  :rules="[requiredValidator, passwordValidator]"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountForm.cPassword"
                  label="Confirm Password"
                  placeholder="············"
                  :rules="[requiredValidator, confirmedValidator(accountForm.cPassword, accountForm.password)]"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="outlined"
                    disabled
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="ri-arrow-right-line"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refPersonalForm"
            @submit.prevent="validatePersonalForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Personal Info
                </h6>
                <p class="text-sm mb-0">
                  Setup Information
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.firstName"
                  label="First Name"
                  :rules="[requiredValidator]"
                  placeholder="Leonard"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="personalForm.lastName"
                  label="Last Name"
                  :rules="[requiredValidator]"
                  placeholder="Carter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.country"
                  label="Country"
                  :rules="[requiredValidator]"
                  placeholder="Select Country"
                  :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="personalForm.language"
                  label="Language"
                  :rules="[requiredValidator]"
                  placeholder="Select Language"
                  :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn type="submit">
                    Next
                    <VIcon
                      icon="ri-arrow-right-line"
                      end
                      class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem>
          <VForm
            ref="refSocialLinkForm"
            @submit.prevent="validateSocialLinkForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Social Links
                </h6>
                <p class="text-sm mb-0">
                  Add Social Links
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.twitter"
                  placeholder="https://twitter.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Twitter"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.facebook"
                  placeholder="https://facebook.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Facebook"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.googlePlus"
                  placeholder="https://plus.google.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="Google+"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="socialForm.LinkedIn"
                  placeholder="https://likedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="tonal"
                    @click="currentStep--"
                  >
                    <VIcon
                      icon="ri-arrow-left-line"
                      start
                      class="flip-in-rtl"
                    />
                    Previous
                  </VBtn>

                  <VBtn
                    color="success"
                    type="submit"
                  >
                    submit
                  </VBtn>
                </div>
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
` };
const vertical = { ts: `<script setup lang="ts">
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',

})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Account Details
                    </h6>
                    <p class="text-sm mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Personal Info
                    </h6>
                    <p class="text-sm mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Social Links
                    </h6>
                    <p class="text-sm mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="outlined"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="ri-arrow-left-line"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                append-icon="ri-check-line"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="ri-arrow-right-line"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
`, js: `<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    subtitle: 'Setup Account Details',
  },
  {
    title: 'Personal Info',
    subtitle: 'Add personal info',
  },
  {
    title: 'Social Links',
    subtitle: 'Add social links',
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: '',
  email: '',
  password: '',
  cPassword: '',
  firstName: '',
  lastName: '',
  country: undefined,
  language: undefined,
  twitter: '',
  facebook: '',
  googlePlus: '',
  LinkedIn: '',
})

const onSubmit = () => {
  console.log(formData.value)
}
<\/script>

<template>
  <VCard>
    <VRow>
      <VCol
        cols="12"
        md="4"
        :class="$vuetify.display.smAndDown ? 'border-b' : 'border-e'"
      >
        <VCardText>
          <!-- 👉 Stepper -->
          <AppStepper
            v-model:current-step="currentStep"
            direction="vertical"
            :items="numberedSteps"
          />
        </VCardText>
      </VCol>
      <!-- 👉 stepper content -->
      <VCol
        cols="12"
        md="8"
      >
        <VCardText>
          <VForm>
            <VWindow
              v-model="currentStep"
              class="disable-tab-transition"
            >
              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Account Details
                    </h6>
                    <p class="text-sm mb-0">
                      Enter your Account Details
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.username"
                      placeholder="CarterLeonardo"
                      label="Username"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.email"
                      placeholder="carterleonardo@gmail.com"
                      label="Email"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.password"
                      placeholder="············"
                      label="Password"
                      :type="isPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isPasswordVisible = !isPasswordVisible"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.cPassword"
                      placeholder="············"
                      label="Confirm Password"
                      :type="isCPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isCPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Personal Info
                    </h6>
                    <p class="text-sm mb-0">
                      Setup Information
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.firstName"
                      label="First Name"
                      placeholder="Leonard"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.lastName"
                      label="Last Name"
                      placeholder="Carter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.country"
                      label="Country"
                      placeholder="Select Country"
                      :items="['UK', 'USA', 'Canada', 'Australia', 'Germany']"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VSelect
                      v-model="formData.language"
                      label="Language"
                      placeholder="Select Language"
                      :items="['English', 'Spanish', 'French', 'Russian', 'German']"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>

              <VWindowItem>
                <VRow>
                  <VCol cols="12">
                    <h6 class="text-h6">
                      Social Links
                    </h6>
                    <p class="text-sm mb-0">
                      Add Social Links
                    </p>
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.twitter"
                      placeholder="https://twitter.com/abc"
                      label="Twitter"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.facebook"
                      placeholder="https://facebook.com/abc"
                      label="Facebook"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.googlePlus"
                      placeholder="https://plus.google.com/abc"
                      label="Google+"
                    />
                  </VCol>

                  <VCol
                    cols="12"
                    md="6"
                  >
                    <VTextField
                      v-model="formData.LinkedIn"
                      placeholder="https://linkedin.com/abc"
                      label="LinkedIn"
                    />
                  </VCol>
                </VRow>
              </VWindowItem>
            </VWindow>

            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="outlined"
                :disabled="currentStep === 0"
                @click="currentStep--"
              >
                <VIcon
                  icon="ri-arrow-left-line"
                  start
                  class="flip-in-rtl"
                />
                Previous
              </VBtn>

              <VBtn
                v-if="numberedSteps.length - 1 === currentStep"
                color="success"
                append-icon="ri-check-line"
                @click="onSubmit"
              >
                submit
              </VBtn>

              <VBtn
                v-else
                @click="currentStep++"
              >
                Next

                <VIcon
                  icon="ri-arrow-right-line"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </VForm>
        </VCardText>
      </VCol>
    </VRow>
  </VCard>
</template>
` };
const _sfc_main$3 = {
  __name: "DemoFormWizardNumberedBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const numberedSteps = [
      {
        title: "Account Details",
        subtitle: "Setup Account Details"
      },
      {
        title: "Personal Info",
        subtitle: "Add personal info"
      },
      {
        title: "Social Links",
        subtitle: "Add social links"
      }
    ];
    const currentStep = ref(0);
    const isPasswordVisible = ref(false);
    const isCPasswordVisible = ref(false);
    const formData = ref({
      username: "",
      email: "",
      password: "",
      cPassword: "",
      firstName: "",
      lastName: "",
      country: void 0,
      language: void 0,
      twitter: "",
      facebook: "",
      googlePlus: "",
      linkedIn: ""
    });
    const onSubmit = () => {
      console.log(formData.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppStepper = _sfc_main$4;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppStepper, {
                    "current-step": unref(currentStep),
                    "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    items: numberedSteps
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppStepper, {
                      "current-step": unref(currentStep),
                      "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                      items: numberedSteps
                    }, null, 8, ["current-step", "onUpdate:currentStep"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindow, {
                          modelValue: unref(currentStep),
                          "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                          class: "disable-tab-transition"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VWindowItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h6 class="text-h6"${_scopeId7}> Account Details </h6><p class="text-sm mb-0"${_scopeId7}> Enter your Account Details </p>`);
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).username,
                                                  "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                  placeholder: "CarterLeonardo",
                                                  label: "Username"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).username,
                                                    "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                    placeholder: "CarterLeonardo",
                                                    label: "Username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).email,
                                                  "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                  placeholder: "carterleonardo@gmail.com",
                                                  label: "Email"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).email,
                                                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                    placeholder: "carterleonardo@gmail.com",
                                                    label: "Email"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).password,
                                                  "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                  label: "Password",
                                                  placeholder: "············",
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).password,
                                                    "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                    label: "Password",
                                                    placeholder: "············",
                                                    type: unref(isPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).cPassword,
                                                  "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                  label: "Confirm Password",
                                                  placeholder: "············",
                                                  type: unref(isCPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).cPassword,
                                                    "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                    label: "Confirm Password",
                                                    placeholder: "············",
                                                    type: unref(isCPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).username,
                                                  "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                  placeholder: "CarterLeonardo",
                                                  label: "Username"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).email,
                                                  "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                  placeholder: "carterleonardo@gmail.com",
                                                  label: "Email"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).password,
                                                  "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                  label: "Password",
                                                  placeholder: "············",
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).cPassword,
                                                  "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                  label: "Confirm Password",
                                                  placeholder: "············",
                                                  type: unref(isCPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Account Details "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).username,
                                                "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                placeholder: "CarterLeonardo",
                                                label: "Username"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).email,
                                                "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                placeholder: "carterleonardo@gmail.com",
                                                label: "Email"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).password,
                                                "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                label: "Password",
                                                placeholder: "············",
                                                type: unref(isPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).cPassword,
                                                "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                label: "Confirm Password",
                                                placeholder: "············",
                                                type: unref(isCPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VWindowItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h6 class="text-h6"${_scopeId7}> Personal Info </h6><p class="text-sm mb-0"${_scopeId7}> Setup Information </p>`);
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                  label: "First Name",
                                                  placeholder: "Leonard"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).firstName,
                                                    "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                    label: "First Name",
                                                    placeholder: "Leonard"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                  label: "Last Name",
                                                  placeholder: "Carter"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).lastName,
                                                    "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                    label: "Last Name",
                                                    placeholder: "Carter"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(formData).country,
                                                  "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                  label: "Country",
                                                  placeholder: "Select Country",
                                                  items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(formData).country,
                                                    "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                    label: "Country",
                                                    placeholder: "Select Country",
                                                    items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(formData).language,
                                                  "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                  label: "Language",
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "French", "Russian", "German"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(formData).language,
                                                    "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                    label: "Language",
                                                    placeholder: "Select Language",
                                                    items: ["English", "Spanish", "French", "Russian", "German"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                  label: "First Name",
                                                  placeholder: "Leonard"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                  label: "Last Name",
                                                  placeholder: "Carter"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(formData).country,
                                                  "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                  label: "Country",
                                                  placeholder: "Select Country",
                                                  items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(formData).language,
                                                  "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                  label: "Language",
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "French", "Russian", "German"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).firstName,
                                                "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                label: "First Name",
                                                placeholder: "Leonard"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).lastName,
                                                "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                label: "Last Name",
                                                placeholder: "Carter"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(formData).country,
                                                "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                label: "Country",
                                                placeholder: "Select Country",
                                                items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(formData).language,
                                                "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                label: "Language",
                                                placeholder: "Select Language",
                                                items: ["English", "Spanish", "French", "Russian", "German"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VWindowItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h6 class="text-h6"${_scopeId7}> Social Links </h6><p class="text-sm mb-0"${_scopeId7}> Add Social Links </p>`);
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).twitter,
                                                  "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                  placeholder: "https://twitter.com/abc",
                                                  label: "Twitter"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).twitter,
                                                    "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                    placeholder: "https://twitter.com/abc",
                                                    label: "Twitter"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).facebook,
                                                  "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                  placeholder: "https://facebook.com/abc",
                                                  label: "Facebook"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).facebook,
                                                    "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                    placeholder: "https://facebook.com/abc",
                                                    label: "Facebook"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).googlePlus,
                                                  "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                  placeholder: "https://plus.google.com/abc",
                                                  label: "Google+"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).googlePlus,
                                                    "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                    placeholder: "https://plus.google.com/abc",
                                                    label: "Google+"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(formData).linkedIn,
                                                  "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                  placeholder: "https://linkedin.com/abc",
                                                  label: "LinkedIn"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).linkedIn,
                                                    "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                    placeholder: "https://linkedin.com/abc",
                                                    label: "LinkedIn"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).twitter,
                                                  "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                  placeholder: "https://twitter.com/abc",
                                                  label: "Twitter"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).facebook,
                                                  "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                  placeholder: "https://facebook.com/abc",
                                                  label: "Facebook"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).googlePlus,
                                                  "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                  placeholder: "https://plus.google.com/abc",
                                                  label: "Google+"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).linkedIn,
                                                  "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                  placeholder: "https://linkedin.com/abc",
                                                  label: "LinkedIn"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Social Links "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).twitter,
                                                "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                placeholder: "https://twitter.com/abc",
                                                label: "Twitter"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).facebook,
                                                "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                placeholder: "https://facebook.com/abc",
                                                label: "Facebook"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).googlePlus,
                                                "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                placeholder: "https://plus.google.com/abc",
                                                label: "Google+"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).linkedIn,
                                                "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                placeholder: "https://linkedin.com/abc",
                                                label: "LinkedIn"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, " Account Details "),
                                            createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).username,
                                              "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                              placeholder: "CarterLeonardo",
                                              label: "Username"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).email,
                                              "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                              placeholder: "carterleonardo@gmail.com",
                                              label: "Email"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).password,
                                              "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                              label: "Password",
                                              placeholder: "············",
                                              type: unref(isPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).cPassword,
                                              "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                              label: "Confirm Password",
                                              placeholder: "············",
                                              type: unref(isCPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                            createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).firstName,
                                              "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                              label: "First Name",
                                              placeholder: "Leonard"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).lastName,
                                              "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                              label: "Last Name",
                                              placeholder: "Carter"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(formData).country,
                                              "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                              label: "Country",
                                              placeholder: "Select Country",
                                              items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(formData).language,
                                              "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                              label: "Language",
                                              placeholder: "Select Language",
                                              items: ["English", "Spanish", "French", "Russian", "German"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, " Social Links "),
                                            createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).twitter,
                                              "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                              placeholder: "https://twitter.com/abc",
                                              label: "Twitter"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).facebook,
                                              "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                              placeholder: "https://facebook.com/abc",
                                              label: "Facebook"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).googlePlus,
                                              "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                              placeholder: "https://plus.google.com/abc",
                                              label: "Google+"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).linkedIn,
                                              "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                              placeholder: "https://linkedin.com/abc",
                                              label: "LinkedIn"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"${_scopeId3}>`);
                        _push4(ssrRenderComponent(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          disabled: unref(currentStep) === 0,
                          onClick: ($event) => currentStep.value--
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                icon: "ri-arrow-left-line",
                                start: "",
                                class: "flip-in-rtl"
                              }, null, _parent5, _scopeId4));
                              _push5(` Previous `);
                            } else {
                              return [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-left-line",
                                  start: "",
                                  class: "flip-in-rtl"
                                }),
                                createTextVNode(" Previous ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (numberedSteps.length - 1 === unref(currentStep)) {
                          _push4(ssrRenderComponent(VBtn, {
                            color: "success",
                            "append-icon": "ri-check-line",
                            onClick: onSubmit
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` submit `);
                              } else {
                                return [
                                  createTextVNode(" submit ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(VBtn, {
                            onClick: ($event) => currentStep.value++
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` Next `);
                                _push5(ssrRenderComponent(VIcon, {
                                  icon: "ri-arrow-right-line",
                                  end: "",
                                  class: "flip-in-rtl"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createTextVNode(" Next "),
                                  createVNode(VIcon, {
                                    icon: "ri-arrow-right-line",
                                    end: "",
                                    class: "flip-in-rtl"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(VWindow, {
                            modelValue: unref(currentStep),
                            "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            class: "disable-tab-transition"
                          }, {
                            default: withCtx(() => [
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, " Account Details "),
                                          createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).username,
                                            "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                            placeholder: "CarterLeonardo",
                                            label: "Username"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).email,
                                            "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                            placeholder: "carterleonardo@gmail.com",
                                            label: "Email"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).password,
                                            "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                            label: "Password",
                                            placeholder: "············",
                                            type: unref(isPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).cPassword,
                                            "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                            label: "Confirm Password",
                                            placeholder: "············",
                                            type: unref(isCPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                          createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).firstName,
                                            "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                            label: "First Name",
                                            placeholder: "Leonard"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).lastName,
                                            "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                            label: "Last Name",
                                            placeholder: "Carter"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(formData).country,
                                            "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                            label: "Country",
                                            placeholder: "Select Country",
                                            items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(formData).language,
                                            "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                            label: "Language",
                                            placeholder: "Select Language",
                                            items: ["English", "Spanish", "French", "Russian", "German"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, " Social Links "),
                                          createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).twitter,
                                            "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                            placeholder: "https://twitter.com/abc",
                                            label: "Twitter"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).facebook,
                                            "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                            placeholder: "https://facebook.com/abc",
                                            label: "Facebook"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).googlePlus,
                                            "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                            placeholder: "https://plus.google.com/abc",
                                            label: "Google+"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).linkedIn,
                                            "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                            placeholder: "https://linkedin.com/abc",
                                            label: "LinkedIn"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                            createVNode(VBtn, {
                              color: "secondary",
                              variant: "outlined",
                              disabled: unref(currentStep) === 0,
                              onClick: ($event) => currentStep.value--
                            }, {
                              default: withCtx(() => [
                                createVNode(VIcon, {
                                  icon: "ri-arrow-left-line",
                                  start: "",
                                  class: "flip-in-rtl"
                                }),
                                createTextVNode(" Previous ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            numberedSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                              key: 0,
                              color: "success",
                              "append-icon": "ri-check-line",
                              onClick: onSubmit
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" submit ")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(VBtn, {
                              key: 1,
                              onClick: ($event) => currentStep.value++
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Next "),
                                createVNode(VIcon, {
                                  icon: "ri-arrow-right-line",
                                  end: "",
                                  class: "flip-in-rtl"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, null, {
                      default: withCtx(() => [
                        createVNode(VWindow, {
                          modelValue: unref(currentStep),
                          "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                          class: "disable-tab-transition"
                        }, {
                          default: withCtx(() => [
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, " Account Details "),
                                        createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).username,
                                          "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                          placeholder: "CarterLeonardo",
                                          label: "Username"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).email,
                                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                          placeholder: "carterleonardo@gmail.com",
                                          label: "Email"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).password,
                                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                          label: "Password",
                                          placeholder: "············",
                                          type: unref(isPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).cPassword,
                                          "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                          label: "Confirm Password",
                                          placeholder: "············",
                                          type: unref(isCPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                        createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).firstName,
                                          "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                          label: "First Name",
                                          placeholder: "Leonard"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).lastName,
                                          "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                          label: "Last Name",
                                          placeholder: "Carter"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(formData).country,
                                          "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                          label: "Country",
                                          placeholder: "Select Country",
                                          items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(formData).language,
                                          "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                          label: "Language",
                                          placeholder: "Select Language",
                                          items: ["English", "Spanish", "French", "Russian", "German"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, " Social Links "),
                                        createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).twitter,
                                          "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                          placeholder: "https://twitter.com/abc",
                                          label: "Twitter"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).facebook,
                                          "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                          placeholder: "https://facebook.com/abc",
                                          label: "Facebook"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).googlePlus,
                                          "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                          placeholder: "https://plus.google.com/abc",
                                          label: "Google+"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).linkedIn,
                                          "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                          placeholder: "https://linkedin.com/abc",
                                          label: "LinkedIn"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                          createVNode(VBtn, {
                            color: "secondary",
                            variant: "outlined",
                            disabled: unref(currentStep) === 0,
                            onClick: ($event) => currentStep.value--
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                icon: "ri-arrow-left-line",
                                start: "",
                                class: "flip-in-rtl"
                              }),
                              createTextVNode(" Previous ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "onClick"]),
                          numberedSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                            key: 0,
                            color: "success",
                            "append-icon": "ri-check-line",
                            onClick: onSubmit
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" submit ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(VBtn, {
                            key: 1,
                            onClick: ($event) => currentStep.value++
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Next "),
                              createVNode(VIcon, {
                                icon: "ri-arrow-right-line",
                                end: "",
                                class: "flip-in-rtl"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_AppStepper, {
                    "current-step": unref(currentStep),
                    "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    items: numberedSteps
                  }, null, 8, ["current-step", "onUpdate:currentStep"])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VForm, null, {
                    default: withCtx(() => [
                      createVNode(VWindow, {
                        modelValue: unref(currentStep),
                        "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                        class: "disable-tab-transition"
                      }, {
                        default: withCtx(() => [
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, " Account Details "),
                                      createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).username,
                                        "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                        placeholder: "CarterLeonardo",
                                        label: "Username"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).email,
                                        "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                        placeholder: "carterleonardo@gmail.com",
                                        label: "Email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).password,
                                        "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                        label: "Password",
                                        placeholder: "············",
                                        type: unref(isPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).cPassword,
                                        "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                        label: "Confirm Password",
                                        placeholder: "············",
                                        type: unref(isCPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                      createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).firstName,
                                        "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                        label: "First Name",
                                        placeholder: "Leonard"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).lastName,
                                        "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                        label: "Last Name",
                                        placeholder: "Carter"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(formData).country,
                                        "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                        label: "Country",
                                        placeholder: "Select Country",
                                        items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(formData).language,
                                        "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                        label: "Language",
                                        placeholder: "Select Language",
                                        items: ["English", "Spanish", "French", "Russian", "German"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, " Social Links "),
                                      createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).twitter,
                                        "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                        placeholder: "https://twitter.com/abc",
                                        label: "Twitter"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).facebook,
                                        "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                        placeholder: "https://facebook.com/abc",
                                        label: "Facebook"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).googlePlus,
                                        "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                        placeholder: "https://plus.google.com/abc",
                                        label: "Google+"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).linkedIn,
                                        "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                        placeholder: "https://linkedin.com/abc",
                                        label: "LinkedIn"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                        createVNode(VBtn, {
                          color: "secondary",
                          variant: "outlined",
                          disabled: unref(currentStep) === 0,
                          onClick: ($event) => currentStep.value--
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              icon: "ri-arrow-left-line",
                              start: "",
                              class: "flip-in-rtl"
                            }),
                            createTextVNode(" Previous ")
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"]),
                        numberedSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                          key: 0,
                          color: "success",
                          "append-icon": "ri-check-line",
                          onClick: onSubmit
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" submit ")
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(VBtn, {
                          key: 1,
                          onClick: ($event) => currentStep.value++
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Next "),
                            createVNode(VIcon, {
                              icon: "ri-arrow-right-line",
                              end: "",
                              class: "flip-in-rtl"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedBasic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoFormWizardNumberedValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const numberedSteps = [
      {
        title: "Account Details",
        subtitle: "Setup Account Details"
      },
      {
        title: "Personal Info",
        subtitle: "Add personal info"
      },
      {
        title: "Social Links",
        subtitle: "Add social links"
      }
    ];
    const currentStep = ref(0);
    const isPasswordVisible = ref(false);
    const isCPasswordVisible = ref(false);
    const isCurrentStepValid = ref(true);
    const refAccountForm = ref();
    const refPersonalForm = ref();
    const refSocialLinkForm = ref();
    const accountForm = ref({
      username: "",
      email: "",
      password: "",
      cPassword: ""
    });
    const personalForm = ref({
      firstName: "",
      lastName: "",
      country: void 0,
      language: void 0
    });
    const socialForm = ref({
      twitter: "",
      facebook: "",
      googlePlus: "",
      linkedIn: ""
    });
    const validateAccountForm = () => {
      var _a;
      (_a = refAccountForm.value) == null ? void 0 : _a.validate().then((valid) => {
        if (valid.valid) {
          currentStep.value++;
          isCurrentStepValid.value = true;
        } else {
          isCurrentStepValid.value = false;
        }
      });
    };
    const validatePersonalForm = () => {
      var _a;
      (_a = refPersonalForm.value) == null ? void 0 : _a.validate().then((valid) => {
        if (valid.valid) {
          currentStep.value++;
          isCurrentStepValid.value = true;
        } else {
          isCurrentStepValid.value = false;
        }
      });
    };
    const validateSocialLinkForm = () => {
      var _a;
      (_a = refSocialLinkForm.value) == null ? void 0 : _a.validate().then((valid) => {
        if (valid.valid) {
          isCurrentStepValid.value = true;
          console.log({
            ...accountForm.value,
            ...personalForm.value,
            ...socialForm.value
          });
        } else {
          isCurrentStepValid.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppStepper = _sfc_main$4;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppStepper, {
                    "current-step": unref(currentStep),
                    "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    items: numberedSteps,
                    "is-active-step-valid": unref(isCurrentStepValid)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppStepper, {
                      "current-step": unref(currentStep),
                      "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                      items: numberedSteps,
                      "is-active-step-valid": unref(isCurrentStepValid)
                    }, null, 8, ["current-step", "onUpdate:currentStep", "is-active-step-valid"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VDivider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VWindow, {
                    modelValue: unref(currentStep),
                    "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    class: "disable-tab-transition"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VForm), {
                                ref_key: "refAccountForm",
                                ref: refAccountForm,
                                onSubmit: validateAccountForm
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h6 class="text-h6"${_scopeId7}> Account Details </h6><p class="text-sm mb-0"${_scopeId7}> Enter your Account Details </p>`);
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(accountForm).username,
                                                  "onUpdate:modelValue": ($event) => unref(accountForm).username = $event,
                                                  placeholder: "CarterLeonardo",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Username"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountForm).username,
                                                    "onUpdate:modelValue": ($event) => unref(accountForm).username = $event,
                                                    placeholder: "CarterLeonardo",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    label: "Username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(accountForm).email,
                                                  "onUpdate:modelValue": ($event) => unref(accountForm).email = $event,
                                                  placeholder: "carterleonardo@gmail.com",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                  label: "Email"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountForm).email,
                                                    "onUpdate:modelValue": ($event) => unref(accountForm).email = $event,
                                                    placeholder: "carterleonardo@gmail.com",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                    label: "Email"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(accountForm).password,
                                                  "onUpdate:modelValue": ($event) => unref(accountForm).password = $event,
                                                  label: "Password",
                                                  placeholder: "············",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountForm).password,
                                                    "onUpdate:modelValue": ($event) => unref(accountForm).password = $event,
                                                    label: "Password",
                                                    placeholder: "············",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                                                    type: unref(isPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(accountForm).cPassword,
                                                  "onUpdate:modelValue": ($event) => unref(accountForm).cPassword = $event,
                                                  label: "Confirm Password",
                                                  placeholder: "············",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(accountForm).cPassword, unref(accountForm).password)],
                                                  type: unref(isCPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(accountForm).cPassword,
                                                    "onUpdate:modelValue": ($event) => unref(accountForm).cPassword = $event,
                                                    label: "Confirm Password",
                                                    placeholder: "············",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(accountForm).cPassword, unref(accountForm).password)],
                                                    type: unref(isCPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  disabled: ""
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-arrow-left-line",
                                                        start: "",
                                                        class: "flip-in-rtl"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(` Previous `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-left-line",
                                                          start: "",
                                                          class: "flip-in-rtl"
                                                        }),
                                                        createTextVNode(" Previous ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, { type: "submit" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Next `);
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-arrow-right-line",
                                                        end: "",
                                                        class: "flip-in-rtl"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(" Next "),
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-right-line",
                                                          end: "",
                                                          class: "flip-in-rtl"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                    createVNode(VBtn, {
                                                      color: "secondary",
                                                      variant: "outlined",
                                                      disabled: ""
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-left-line",
                                                          start: "",
                                                          class: "flip-in-rtl"
                                                        }),
                                                        createTextVNode(" Previous ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VBtn, { type: "submit" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Next "),
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-right-line",
                                                          end: "",
                                                          class: "flip-in-rtl"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(accountForm).username,
                                                  "onUpdate:modelValue": ($event) => unref(accountForm).username = $event,
                                                  placeholder: "CarterLeonardo",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  label: "Username"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(accountForm).email,
                                                  "onUpdate:modelValue": ($event) => unref(accountForm).email = $event,
                                                  placeholder: "carterleonardo@gmail.com",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                  label: "Email"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(accountForm).password,
                                                  "onUpdate:modelValue": ($event) => unref(accountForm).password = $event,
                                                  label: "Password",
                                                  placeholder: "············",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(accountForm).cPassword,
                                                  "onUpdate:modelValue": ($event) => unref(accountForm).cPassword = $event,
                                                  label: "Confirm Password",
                                                  placeholder: "············",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(accountForm).cPassword, unref(accountForm).password)],
                                                  type: unref(isCPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                  createVNode(VBtn, {
                                                    color: "secondary",
                                                    variant: "outlined",
                                                    disabled: ""
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-arrow-left-line",
                                                        start: "",
                                                        class: "flip-in-rtl"
                                                      }),
                                                      createTextVNode(" Previous ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VBtn, { type: "submit" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Next "),
                                                      createVNode(VIcon, {
                                                        icon: "ri-arrow-right-line",
                                                        end: "",
                                                        class: "flip-in-rtl"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Account Details "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(accountForm).username,
                                                "onUpdate:modelValue": ($event) => unref(accountForm).username = $event,
                                                placeholder: "CarterLeonardo",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                label: "Username"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(accountForm).email,
                                                "onUpdate:modelValue": ($event) => unref(accountForm).email = $event,
                                                placeholder: "carterleonardo@gmail.com",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                                label: "Email"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(accountForm).password,
                                                "onUpdate:modelValue": ($event) => unref(accountForm).password = $event,
                                                label: "Password",
                                                placeholder: "············",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                                                type: unref(isPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(accountForm).cPassword,
                                                "onUpdate:modelValue": ($event) => unref(accountForm).cPassword = $event,
                                                label: "Confirm Password",
                                                placeholder: "············",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(accountForm).cPassword, unref(accountForm).password)],
                                                type: unref(isCPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                createVNode(VBtn, {
                                                  color: "secondary",
                                                  variant: "outlined",
                                                  disabled: ""
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-arrow-left-line",
                                                      start: "",
                                                      class: "flip-in-rtl"
                                                    }),
                                                    createTextVNode(" Previous ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VBtn, { type: "submit" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Next "),
                                                    createVNode(VIcon, {
                                                      icon: "ri-arrow-right-line",
                                                      end: "",
                                                      class: "flip-in-rtl"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VForm), {
                                  ref_key: "refAccountForm",
                                  ref: refAccountForm,
                                  onSubmit: withModifiers(validateAccountForm, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, " Account Details "),
                                            createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(accountForm).username,
                                              "onUpdate:modelValue": ($event) => unref(accountForm).username = $event,
                                              placeholder: "CarterLeonardo",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              label: "Username"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(accountForm).email,
                                              "onUpdate:modelValue": ($event) => unref(accountForm).email = $event,
                                              placeholder: "carterleonardo@gmail.com",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                              label: "Email"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(accountForm).password,
                                              "onUpdate:modelValue": ($event) => unref(accountForm).password = $event,
                                              label: "Password",
                                              placeholder: "············",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                                              type: unref(isPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(accountForm).cPassword,
                                              "onUpdate:modelValue": ($event) => unref(accountForm).cPassword = $event,
                                              label: "Confirm Password",
                                              placeholder: "············",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(accountForm).cPassword, unref(accountForm).password)],
                                              type: unref(isCPasswordVisible) ? "text" : "password",
                                              "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                              "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                              createVNode(VBtn, {
                                                color: "secondary",
                                                variant: "outlined",
                                                disabled: ""
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-arrow-left-line",
                                                    start: "",
                                                    class: "flip-in-rtl"
                                                  }),
                                                  createTextVNode(" Previous ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VBtn, { type: "submit" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Next "),
                                                  createVNode(VIcon, {
                                                    icon: "ri-arrow-right-line",
                                                    end: "",
                                                    class: "flip-in-rtl"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VForm), {
                                ref_key: "refPersonalForm",
                                ref: refPersonalForm,
                                onSubmit: validatePersonalForm
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h6 class="text-h6"${_scopeId7}> Personal Info </h6><p class="text-sm mb-0"${_scopeId7}> Setup Information </p>`);
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(personalForm).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(personalForm).firstName = $event,
                                                  label: "First Name",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Leonard"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(personalForm).firstName,
                                                    "onUpdate:modelValue": ($event) => unref(personalForm).firstName = $event,
                                                    label: "First Name",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "Leonard"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(personalForm).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(personalForm).lastName = $event,
                                                  label: "Last Name",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Carter"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(personalForm).lastName,
                                                    "onUpdate:modelValue": ($event) => unref(personalForm).lastName = $event,
                                                    label: "Last Name",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "Carter"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(personalForm).country,
                                                  "onUpdate:modelValue": ($event) => unref(personalForm).country = $event,
                                                  label: "Country",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Select Country",
                                                  items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(personalForm).country,
                                                    "onUpdate:modelValue": ($event) => unref(personalForm).country = $event,
                                                    label: "Country",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "Select Country",
                                                    items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VSelect, {
                                                  modelValue: unref(personalForm).language,
                                                  "onUpdate:modelValue": ($event) => unref(personalForm).language = $event,
                                                  label: "Language",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "French", "Russian", "German"]
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(personalForm).language,
                                                    "onUpdate:modelValue": ($event) => unref(personalForm).language = $event,
                                                    label: "Language",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "Select Language",
                                                    items: ["English", "Spanish", "French", "Russian", "German"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "secondary",
                                                  variant: "tonal",
                                                  onClick: ($event) => currentStep.value--
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-arrow-left-line",
                                                        start: "",
                                                        class: "flip-in-rtl"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(` Previous `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-left-line",
                                                          start: "",
                                                          class: "flip-in-rtl"
                                                        }),
                                                        createTextVNode(" Previous ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, { type: "submit" }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` Next `);
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-arrow-right-line",
                                                        end: "",
                                                        class: "flip-in-rtl"
                                                      }, null, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createTextVNode(" Next "),
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-right-line",
                                                          end: "",
                                                          class: "flip-in-rtl"
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                    createVNode(VBtn, {
                                                      color: "secondary",
                                                      variant: "tonal",
                                                      onClick: ($event) => currentStep.value--
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-left-line",
                                                          start: "",
                                                          class: "flip-in-rtl"
                                                        }),
                                                        createTextVNode(" Previous ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"]),
                                                    createVNode(VBtn, { type: "submit" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" Next "),
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-right-line",
                                                          end: "",
                                                          class: "flip-in-rtl"
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(personalForm).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(personalForm).firstName = $event,
                                                  label: "First Name",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Leonard"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(personalForm).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(personalForm).lastName = $event,
                                                  label: "Last Name",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Carter"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(personalForm).country,
                                                  "onUpdate:modelValue": ($event) => unref(personalForm).country = $event,
                                                  label: "Country",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Select Country",
                                                  items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(personalForm).language,
                                                  "onUpdate:modelValue": ($event) => unref(personalForm).language = $event,
                                                  label: "Language",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "French", "Russian", "German"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                  createVNode(VBtn, {
                                                    color: "secondary",
                                                    variant: "tonal",
                                                    onClick: ($event) => currentStep.value--
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-arrow-left-line",
                                                        start: "",
                                                        class: "flip-in-rtl"
                                                      }),
                                                      createTextVNode(" Previous ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"]),
                                                  createVNode(VBtn, { type: "submit" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" Next "),
                                                      createVNode(VIcon, {
                                                        icon: "ri-arrow-right-line",
                                                        end: "",
                                                        class: "flip-in-rtl"
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(personalForm).firstName,
                                                "onUpdate:modelValue": ($event) => unref(personalForm).firstName = $event,
                                                label: "First Name",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "Leonard"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(personalForm).lastName,
                                                "onUpdate:modelValue": ($event) => unref(personalForm).lastName = $event,
                                                label: "Last Name",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "Carter"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(personalForm).country,
                                                "onUpdate:modelValue": ($event) => unref(personalForm).country = $event,
                                                label: "Country",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "Select Country",
                                                items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(personalForm).language,
                                                "onUpdate:modelValue": ($event) => unref(personalForm).language = $event,
                                                label: "Language",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "Select Language",
                                                items: ["English", "Spanish", "French", "Russian", "German"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                createVNode(VBtn, {
                                                  color: "secondary",
                                                  variant: "tonal",
                                                  onClick: ($event) => currentStep.value--
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-arrow-left-line",
                                                      start: "",
                                                      class: "flip-in-rtl"
                                                    }),
                                                    createTextVNode(" Previous ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"]),
                                                createVNode(VBtn, { type: "submit" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" Next "),
                                                    createVNode(VIcon, {
                                                      icon: "ri-arrow-right-line",
                                                      end: "",
                                                      class: "flip-in-rtl"
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VForm), {
                                  ref_key: "refPersonalForm",
                                  ref: refPersonalForm,
                                  onSubmit: withModifiers(validatePersonalForm, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                            createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(personalForm).firstName,
                                              "onUpdate:modelValue": ($event) => unref(personalForm).firstName = $event,
                                              label: "First Name",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "Leonard"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(personalForm).lastName,
                                              "onUpdate:modelValue": ($event) => unref(personalForm).lastName = $event,
                                              label: "Last Name",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "Carter"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(personalForm).country,
                                              "onUpdate:modelValue": ($event) => unref(personalForm).country = $event,
                                              label: "Country",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "Select Country",
                                              items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VSelect, {
                                              modelValue: unref(personalForm).language,
                                              "onUpdate:modelValue": ($event) => unref(personalForm).language = $event,
                                              label: "Language",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "Select Language",
                                              items: ["English", "Spanish", "French", "Russian", "German"]
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                              createVNode(VBtn, {
                                                color: "secondary",
                                                variant: "tonal",
                                                onClick: ($event) => currentStep.value--
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-arrow-left-line",
                                                    start: "",
                                                    class: "flip-in-rtl"
                                                  }),
                                                  createTextVNode(" Previous ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(VBtn, { type: "submit" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Next "),
                                                  createVNode(VIcon, {
                                                    icon: "ri-arrow-right-line",
                                                    end: "",
                                                    class: "flip-in-rtl"
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VWindowItem, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(VForm), {
                                ref_key: "refSocialLinkForm",
                                ref: refSocialLinkForm,
                                onSubmit: validateSocialLinkForm
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h6 class="text-h6"${_scopeId7}> Social Links </h6><p class="text-sm mb-0"${_scopeId7}> Add Social Links </p>`);
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(socialForm).twitter,
                                                  "onUpdate:modelValue": ($event) => unref(socialForm).twitter = $event,
                                                  placeholder: "https://twitter.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "Twitter"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(socialForm).twitter,
                                                    "onUpdate:modelValue": ($event) => unref(socialForm).twitter = $event,
                                                    placeholder: "https://twitter.com/abc",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                    label: "Twitter"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(socialForm).facebook,
                                                  "onUpdate:modelValue": ($event) => unref(socialForm).facebook = $event,
                                                  placeholder: "https://facebook.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "Facebook"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(socialForm).facebook,
                                                    "onUpdate:modelValue": ($event) => unref(socialForm).facebook = $event,
                                                    placeholder: "https://facebook.com/abc",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                    label: "Facebook"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(socialForm).googlePlus,
                                                  "onUpdate:modelValue": ($event) => unref(socialForm).googlePlus = $event,
                                                  placeholder: "https://plus.google.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "Google+"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(socialForm).googlePlus,
                                                    "onUpdate:modelValue": ($event) => unref(socialForm).googlePlus = $event,
                                                    placeholder: "https://plus.google.com/abc",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                    label: "Google+"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VTextField, {
                                                  modelValue: unref(socialForm).linkedIn,
                                                  "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                                  placeholder: "https://likedin.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "LinkedIn"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(socialForm).linkedIn,
                                                    "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                                    placeholder: "https://likedin.com/abc",
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                    label: "LinkedIn"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "secondary",
                                                  variant: "tonal",
                                                  onClick: ($event) => currentStep.value--
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VIcon, {
                                                        icon: "ri-arrow-left-line",
                                                        start: "",
                                                        class: "flip-in-rtl"
                                                      }, null, _parent9, _scopeId8));
                                                      _push9(` Previous `);
                                                    } else {
                                                      return [
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-left-line",
                                                          start: "",
                                                          class: "flip-in-rtl"
                                                        }),
                                                        createTextVNode(" Previous ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VBtn, {
                                                  color: "success",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(` submit `);
                                                    } else {
                                                      return [
                                                        createTextVNode(" submit ")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                    createVNode(VBtn, {
                                                      color: "secondary",
                                                      variant: "tonal",
                                                      onClick: ($event) => currentStep.value--
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VIcon, {
                                                          icon: "ri-arrow-left-line",
                                                          start: "",
                                                          class: "flip-in-rtl"
                                                        }),
                                                        createTextVNode(" Previous ")
                                                      ]),
                                                      _: 1
                                                    }, 8, ["onClick"]),
                                                    createVNode(VBtn, {
                                                      color: "success",
                                                      type: "submit"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(" submit ")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(socialForm).twitter,
                                                  "onUpdate:modelValue": ($event) => unref(socialForm).twitter = $event,
                                                  placeholder: "https://twitter.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "Twitter"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(socialForm).facebook,
                                                  "onUpdate:modelValue": ($event) => unref(socialForm).facebook = $event,
                                                  placeholder: "https://facebook.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "Facebook"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(socialForm).googlePlus,
                                                  "onUpdate:modelValue": ($event) => unref(socialForm).googlePlus = $event,
                                                  placeholder: "https://plus.google.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "Google+"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(socialForm).linkedIn,
                                                  "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                                  placeholder: "https://likedin.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "LinkedIn"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                  createVNode(VBtn, {
                                                    color: "secondary",
                                                    variant: "tonal",
                                                    onClick: ($event) => currentStep.value--
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VIcon, {
                                                        icon: "ri-arrow-left-line",
                                                        start: "",
                                                        class: "flip-in-rtl"
                                                      }),
                                                      createTextVNode(" Previous ")
                                                    ]),
                                                    _: 1
                                                  }, 8, ["onClick"]),
                                                  createVNode(VBtn, {
                                                    color: "success",
                                                    type: "submit"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" submit ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Social Links "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(socialForm).twitter,
                                                "onUpdate:modelValue": ($event) => unref(socialForm).twitter = $event,
                                                placeholder: "https://twitter.com/abc",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                label: "Twitter"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(socialForm).facebook,
                                                "onUpdate:modelValue": ($event) => unref(socialForm).facebook = $event,
                                                placeholder: "https://facebook.com/abc",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                label: "Facebook"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(socialForm).googlePlus,
                                                "onUpdate:modelValue": ($event) => unref(socialForm).googlePlus = $event,
                                                placeholder: "https://plus.google.com/abc",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                label: "Google+"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(socialForm).linkedIn,
                                                "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                                placeholder: "https://likedin.com/abc",
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                label: "LinkedIn"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                createVNode(VBtn, {
                                                  color: "secondary",
                                                  variant: "tonal",
                                                  onClick: ($event) => currentStep.value--
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VIcon, {
                                                      icon: "ri-arrow-left-line",
                                                      start: "",
                                                      class: "flip-in-rtl"
                                                    }),
                                                    createTextVNode(" Previous ")
                                                  ]),
                                                  _: 1
                                                }, 8, ["onClick"]),
                                                createVNode(VBtn, {
                                                  color: "success",
                                                  type: "submit"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" submit ")
                                                  ]),
                                                  _: 1
                                                })
                                              ])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(VForm), {
                                  ref_key: "refSocialLinkForm",
                                  ref: refSocialLinkForm,
                                  onSubmit: withModifiers(validateSocialLinkForm, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, " Social Links "),
                                            createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(socialForm).twitter,
                                              "onUpdate:modelValue": ($event) => unref(socialForm).twitter = $event,
                                              placeholder: "https://twitter.com/abc",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                              label: "Twitter"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(socialForm).facebook,
                                              "onUpdate:modelValue": ($event) => unref(socialForm).facebook = $event,
                                              placeholder: "https://facebook.com/abc",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                              label: "Facebook"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(socialForm).googlePlus,
                                              "onUpdate:modelValue": ($event) => unref(socialForm).googlePlus = $event,
                                              placeholder: "https://plus.google.com/abc",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                              label: "Google+"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(socialForm).linkedIn,
                                              "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                              placeholder: "https://likedin.com/abc",
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                              label: "LinkedIn"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                              createVNode(VBtn, {
                                                color: "secondary",
                                                variant: "tonal",
                                                onClick: ($event) => currentStep.value--
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VIcon, {
                                                    icon: "ri-arrow-left-line",
                                                    start: "",
                                                    class: "flip-in-rtl"
                                                  }),
                                                  createTextVNode(" Previous ")
                                                ]),
                                                _: 1
                                              }, 8, ["onClick"]),
                                              createVNode(VBtn, {
                                                color: "success",
                                                type: "submit"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" submit ")
                                                ]),
                                                _: 1
                                              })
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 512)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(unref(VForm), {
                                ref_key: "refAccountForm",
                                ref: refAccountForm,
                                onSubmit: withModifiers(validateAccountForm, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, " Account Details "),
                                          createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(accountForm).username,
                                            "onUpdate:modelValue": ($event) => unref(accountForm).username = $event,
                                            placeholder: "CarterLeonardo",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            label: "Username"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(accountForm).email,
                                            "onUpdate:modelValue": ($event) => unref(accountForm).email = $event,
                                            placeholder: "carterleonardo@gmail.com",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                            label: "Email"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(accountForm).password,
                                            "onUpdate:modelValue": ($event) => unref(accountForm).password = $event,
                                            label: "Password",
                                            placeholder: "············",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                                            type: unref(isPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(accountForm).cPassword,
                                            "onUpdate:modelValue": ($event) => unref(accountForm).cPassword = $event,
                                            label: "Confirm Password",
                                            placeholder: "············",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(accountForm).cPassword, unref(accountForm).password)],
                                            type: unref(isCPasswordVisible) ? "text" : "password",
                                            "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                            "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "outlined",
                                              disabled: ""
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-left-line",
                                                  start: "",
                                                  class: "flip-in-rtl"
                                                }),
                                                createTextVNode(" Previous ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VBtn, { type: "submit" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Next "),
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-right-line",
                                                  end: "",
                                                  class: "flip-in-rtl"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(unref(VForm), {
                                ref_key: "refPersonalForm",
                                ref: refPersonalForm,
                                onSubmit: withModifiers(validatePersonalForm, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                          createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(personalForm).firstName,
                                            "onUpdate:modelValue": ($event) => unref(personalForm).firstName = $event,
                                            label: "First Name",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "Leonard"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(personalForm).lastName,
                                            "onUpdate:modelValue": ($event) => unref(personalForm).lastName = $event,
                                            label: "Last Name",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "Carter"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(personalForm).country,
                                            "onUpdate:modelValue": ($event) => unref(personalForm).country = $event,
                                            label: "Country",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "Select Country",
                                            items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(personalForm).language,
                                            "onUpdate:modelValue": ($event) => unref(personalForm).language = $event,
                                            label: "Language",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "Select Language",
                                            items: ["English", "Spanish", "French", "Russian", "German"]
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "tonal",
                                              onClick: ($event) => currentStep.value--
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-left-line",
                                                  start: "",
                                                  class: "flip-in-rtl"
                                                }),
                                                createTextVNode(" Previous ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(VBtn, { type: "submit" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Next "),
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-right-line",
                                                  end: "",
                                                  class: "flip-in-rtl"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512)
                            ]),
                            _: 1
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode(unref(VForm), {
                                ref_key: "refSocialLinkForm",
                                ref: refSocialLinkForm,
                                onSubmit: withModifiers(validateSocialLinkForm, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, " Social Links "),
                                          createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(socialForm).twitter,
                                            "onUpdate:modelValue": ($event) => unref(socialForm).twitter = $event,
                                            placeholder: "https://twitter.com/abc",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                            label: "Twitter"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(socialForm).facebook,
                                            "onUpdate:modelValue": ($event) => unref(socialForm).facebook = $event,
                                            placeholder: "https://facebook.com/abc",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                            label: "Facebook"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(socialForm).googlePlus,
                                            "onUpdate:modelValue": ($event) => unref(socialForm).googlePlus = $event,
                                            placeholder: "https://plus.google.com/abc",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                            label: "Google+"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(socialForm).linkedIn,
                                            "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                            placeholder: "https://likedin.com/abc",
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                            label: "LinkedIn"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "tonal",
                                              onClick: ($event) => currentStep.value--
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VIcon, {
                                                  icon: "ri-arrow-left-line",
                                                  start: "",
                                                  class: "flip-in-rtl"
                                                }),
                                                createTextVNode(" Previous ")
                                              ]),
                                              _: 1
                                            }, 8, ["onClick"]),
                                            createVNode(VBtn, {
                                              color: "success",
                                              type: "submit"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" submit ")
                                              ]),
                                              _: 1
                                            })
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 512)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VWindow, {
                      modelValue: unref(currentStep),
                      "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                      class: "disable-tab-transition"
                    }, {
                      default: withCtx(() => [
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(unref(VForm), {
                              ref_key: "refAccountForm",
                              ref: refAccountForm,
                              onSubmit: withModifiers(validateAccountForm, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, " Account Details "),
                                        createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(accountForm).username,
                                          "onUpdate:modelValue": ($event) => unref(accountForm).username = $event,
                                          placeholder: "CarterLeonardo",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          label: "Username"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(accountForm).email,
                                          "onUpdate:modelValue": ($event) => unref(accountForm).email = $event,
                                          placeholder: "carterleonardo@gmail.com",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                          label: "Email"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(accountForm).password,
                                          "onUpdate:modelValue": ($event) => unref(accountForm).password = $event,
                                          label: "Password",
                                          placeholder: "············",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                                          type: unref(isPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(accountForm).cPassword,
                                          "onUpdate:modelValue": ($event) => unref(accountForm).cPassword = $event,
                                          label: "Confirm Password",
                                          placeholder: "············",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(accountForm).cPassword, unref(accountForm).password)],
                                          type: unref(isCPasswordVisible) ? "text" : "password",
                                          "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                          "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "outlined",
                                            disabled: ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-left-line",
                                                start: "",
                                                class: "flip-in-rtl"
                                              }),
                                              createTextVNode(" Previous ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VBtn, { type: "submit" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Next "),
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-right-line",
                                                end: "",
                                                class: "flip-in-rtl"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(unref(VForm), {
                              ref_key: "refPersonalForm",
                              ref: refPersonalForm,
                              onSubmit: withModifiers(validatePersonalForm, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                        createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(personalForm).firstName,
                                          "onUpdate:modelValue": ($event) => unref(personalForm).firstName = $event,
                                          label: "First Name",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "Leonard"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(personalForm).lastName,
                                          "onUpdate:modelValue": ($event) => unref(personalForm).lastName = $event,
                                          label: "Last Name",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "Carter"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(personalForm).country,
                                          "onUpdate:modelValue": ($event) => unref(personalForm).country = $event,
                                          label: "Country",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "Select Country",
                                          items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(personalForm).language,
                                          "onUpdate:modelValue": ($event) => unref(personalForm).language = $event,
                                          label: "Language",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "Select Language",
                                          items: ["English", "Spanish", "French", "Russian", "German"]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "tonal",
                                            onClick: ($event) => currentStep.value--
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-left-line",
                                                start: "",
                                                class: "flip-in-rtl"
                                              }),
                                              createTextVNode(" Previous ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(VBtn, { type: "submit" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Next "),
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-right-line",
                                                end: "",
                                                class: "flip-in-rtl"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
                          ]),
                          _: 1
                        }),
                        createVNode(VWindowItem, null, {
                          default: withCtx(() => [
                            createVNode(unref(VForm), {
                              ref_key: "refSocialLinkForm",
                              ref: refSocialLinkForm,
                              onSubmit: withModifiers(validateSocialLinkForm, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, " Social Links "),
                                        createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(socialForm).twitter,
                                          "onUpdate:modelValue": ($event) => unref(socialForm).twitter = $event,
                                          placeholder: "https://twitter.com/abc",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                          label: "Twitter"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(socialForm).facebook,
                                          "onUpdate:modelValue": ($event) => unref(socialForm).facebook = $event,
                                          placeholder: "https://facebook.com/abc",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                          label: "Facebook"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(socialForm).googlePlus,
                                          "onUpdate:modelValue": ($event) => unref(socialForm).googlePlus = $event,
                                          placeholder: "https://plus.google.com/abc",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                          label: "Google+"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(socialForm).linkedIn,
                                          "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                          placeholder: "https://likedin.com/abc",
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                          label: "LinkedIn"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "tonal",
                                            onClick: ($event) => currentStep.value--
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-left-line",
                                                start: "",
                                                class: "flip-in-rtl"
                                              }),
                                              createTextVNode(" Previous ")
                                            ]),
                                            _: 1
                                          }, 8, ["onClick"]),
                                          createVNode(VBtn, {
                                            color: "success",
                                            type: "submit"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" submit ")
                                            ]),
                                            _: 1
                                          })
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 512)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(_component_AppStepper, {
                    "current-step": unref(currentStep),
                    "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    items: numberedSteps,
                    "is-active-step-valid": unref(isCurrentStepValid)
                  }, null, 8, ["current-step", "onUpdate:currentStep", "is-active-step-valid"])
                ]),
                _: 1
              }),
              createVNode(VDivider),
              createVNode(VCardText, null, {
                default: withCtx(() => [
                  createVNode(VWindow, {
                    modelValue: unref(currentStep),
                    "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                    class: "disable-tab-transition"
                  }, {
                    default: withCtx(() => [
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(unref(VForm), {
                            ref_key: "refAccountForm",
                            ref: refAccountForm,
                            onSubmit: withModifiers(validateAccountForm, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, " Account Details "),
                                      createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(accountForm).username,
                                        "onUpdate:modelValue": ($event) => unref(accountForm).username = $event,
                                        placeholder: "CarterLeonardo",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        label: "Username"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(accountForm).email,
                                        "onUpdate:modelValue": ($event) => unref(accountForm).email = $event,
                                        placeholder: "carterleonardo@gmail.com",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "emailValidator" in _ctx ? _ctx.emailValidator : unref(emailValidator)],
                                        label: "Email"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(accountForm).password,
                                        "onUpdate:modelValue": ($event) => unref(accountForm).password = $event,
                                        label: "Password",
                                        placeholder: "············",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "passwordValidator" in _ctx ? _ctx.passwordValidator : unref(passwordValidator)],
                                        type: unref(isPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(accountForm).cPassword,
                                        "onUpdate:modelValue": ($event) => unref(accountForm).cPassword = $event,
                                        label: "Confirm Password",
                                        placeholder: "············",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), ("confirmedValidator" in _ctx ? _ctx.confirmedValidator : unref(confirmedValidator))(unref(accountForm).cPassword, unref(accountForm).password)],
                                        type: unref(isCPasswordVisible) ? "text" : "password",
                                        "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                        "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "type", "append-inner-icon", "onClick:appendInner"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "outlined",
                                          disabled: ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-left-line",
                                              start: "",
                                              class: "flip-in-rtl"
                                            }),
                                            createTextVNode(" Previous ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VBtn, { type: "submit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Next "),
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-right-line",
                                              end: "",
                                              class: "flip-in-rtl"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(unref(VForm), {
                            ref_key: "refPersonalForm",
                            ref: refPersonalForm,
                            onSubmit: withModifiers(validatePersonalForm, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                      createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(personalForm).firstName,
                                        "onUpdate:modelValue": ($event) => unref(personalForm).firstName = $event,
                                        label: "First Name",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "Leonard"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(personalForm).lastName,
                                        "onUpdate:modelValue": ($event) => unref(personalForm).lastName = $event,
                                        label: "Last Name",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "Carter"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(personalForm).country,
                                        "onUpdate:modelValue": ($event) => unref(personalForm).country = $event,
                                        label: "Country",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "Select Country",
                                        items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(personalForm).language,
                                        "onUpdate:modelValue": ($event) => unref(personalForm).language = $event,
                                        label: "Language",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "Select Language",
                                        items: ["English", "Spanish", "French", "Russian", "German"]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "tonal",
                                          onClick: ($event) => currentStep.value--
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-left-line",
                                              start: "",
                                              class: "flip-in-rtl"
                                            }),
                                            createTextVNode(" Previous ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(VBtn, { type: "submit" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Next "),
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-right-line",
                                              end: "",
                                              class: "flip-in-rtl"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ]),
                        _: 1
                      }),
                      createVNode(VWindowItem, null, {
                        default: withCtx(() => [
                          createVNode(unref(VForm), {
                            ref_key: "refSocialLinkForm",
                            ref: refSocialLinkForm,
                            onSubmit: withModifiers(validateSocialLinkForm, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, " Social Links "),
                                      createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(socialForm).twitter,
                                        "onUpdate:modelValue": ($event) => unref(socialForm).twitter = $event,
                                        placeholder: "https://twitter.com/abc",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                        label: "Twitter"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(socialForm).facebook,
                                        "onUpdate:modelValue": ($event) => unref(socialForm).facebook = $event,
                                        placeholder: "https://facebook.com/abc",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                        label: "Facebook"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(socialForm).googlePlus,
                                        "onUpdate:modelValue": ($event) => unref(socialForm).googlePlus = $event,
                                        placeholder: "https://plus.google.com/abc",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                        label: "Google+"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(socialForm).linkedIn,
                                        "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                        placeholder: "https://likedin.com/abc",
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                        label: "LinkedIn"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "tonal",
                                          onClick: ($event) => currentStep.value--
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-left-line",
                                              start: "",
                                              class: "flip-in-rtl"
                                            }),
                                            createTextVNode(" Previous ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(VBtn, {
                                          color: "success",
                                          type: "submit"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" submit ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedValidation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoFormWizardNumberedVertical",
  __ssrInlineRender: true,
  setup(__props) {
    const numberedSteps = [
      {
        title: "Account Details",
        subtitle: "Setup Account Details"
      },
      {
        title: "Personal Info",
        subtitle: "Add personal info"
      },
      {
        title: "Social Links",
        subtitle: "Add social links"
      }
    ];
    const currentStep = ref(0);
    const isPasswordVisible = ref(false);
    const isCPasswordVisible = ref(false);
    const formData = ref({
      username: "",
      email: "",
      password: "",
      cPassword: "",
      firstName: "",
      lastName: "",
      country: void 0,
      language: void 0,
      twitter: "",
      facebook: "",
      googlePlus: "",
      linkedIn: ""
    });
    const onSubmit = () => {
      console.log(formData.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppStepper = _sfc_main$4;
      _push(ssrRenderComponent(VCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VRow, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "4",
                    class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_AppStepper, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                direction: "vertical",
                                items: numberedSteps
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppStepper, {
                                  "current-step": unref(currentStep),
                                  "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  direction: "vertical",
                                  items: numberedSteps
                                }, null, 8, ["current-step", "onUpdate:currentStep"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(_component_AppStepper, {
                                "current-step": unref(currentStep),
                                "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                direction: "vertical",
                                items: numberedSteps
                              }, null, 8, ["current-step", "onUpdate:currentStep"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VForm, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VWindow, {
                                      modelValue: unref(currentStep),
                                      "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                      class: "disable-tab-transition"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VWindowItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<h6 class="text-h6"${_scopeId9}> Account Details </h6><p class="text-sm mb-0"${_scopeId9}> Enter your Account Details </p>`);
                                                          } else {
                                                            return [
                                                              createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                              createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).username,
                                                              "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                              placeholder: "CarterLeonardo",
                                                              label: "Username"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).username,
                                                                "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                                placeholder: "CarterLeonardo",
                                                                label: "Username"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).email,
                                                              "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                              placeholder: "carterleonardo@gmail.com",
                                                              label: "Email"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).email,
                                                                "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                                placeholder: "carterleonardo@gmail.com",
                                                                label: "Email"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).password,
                                                              "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                              placeholder: "············",
                                                              label: "Password",
                                                              type: unref(isPasswordVisible) ? "text" : "password",
                                                              "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).password,
                                                                "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                                placeholder: "············",
                                                                label: "Password",
                                                                type: unref(isPasswordVisible) ? "text" : "password",
                                                                "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                                "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).cPassword,
                                                              "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                              placeholder: "············",
                                                              label: "Confirm Password",
                                                              type: unref(isCPasswordVisible) ? "text" : "password",
                                                              "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                              "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).cPassword,
                                                                "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                                placeholder: "············",
                                                                label: "Confirm Password",
                                                                type: unref(isCPasswordVisible) ? "text" : "password",
                                                                "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                                "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                            createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).username,
                                                              "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                              placeholder: "CarterLeonardo",
                                                              label: "Username"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).email,
                                                              "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                              placeholder: "carterleonardo@gmail.com",
                                                              label: "Email"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).password,
                                                              "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                              placeholder: "············",
                                                              label: "Password",
                                                              type: unref(isPasswordVisible) ? "text" : "password",
                                                              "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).cPassword,
                                                              "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                              placeholder: "············",
                                                              label: "Confirm Password",
                                                              type: unref(isCPasswordVisible) ? "text" : "password",
                                                              "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                              "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                          createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).username,
                                                            "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                            placeholder: "CarterLeonardo",
                                                            label: "Username"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).email,
                                                            "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                            placeholder: "carterleonardo@gmail.com",
                                                            label: "Email"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).password,
                                                            "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                            placeholder: "············",
                                                            label: "Password",
                                                            type: unref(isPasswordVisible) ? "text" : "password",
                                                            "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                            "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).cPassword,
                                                            "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                            placeholder: "············",
                                                            label: "Confirm Password",
                                                            type: unref(isCPasswordVisible) ? "text" : "password",
                                                            "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                            "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VWindowItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<h6 class="text-h6"${_scopeId9}> Personal Info </h6><p class="text-sm mb-0"${_scopeId9}> Setup Information </p>`);
                                                          } else {
                                                            return [
                                                              createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                              createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).firstName,
                                                              "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                              label: "First Name",
                                                              placeholder: "Leonard"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).firstName,
                                                                "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                                label: "First Name",
                                                                placeholder: "Leonard"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).lastName,
                                                              "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                              label: "Last Name",
                                                              placeholder: "Carter"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).lastName,
                                                                "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                                label: "Last Name",
                                                                placeholder: "Carter"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              modelValue: unref(formData).country,
                                                              "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                              label: "Country",
                                                              placeholder: "Select Country",
                                                              items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                modelValue: unref(formData).country,
                                                                "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                                label: "Country",
                                                                placeholder: "Select Country",
                                                                items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VSelect, {
                                                              modelValue: unref(formData).language,
                                                              "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                              label: "Language",
                                                              placeholder: "Select Language",
                                                              items: ["English", "Spanish", "French", "Russian", "German"]
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VSelect, {
                                                                modelValue: unref(formData).language,
                                                                "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                                label: "Language",
                                                                placeholder: "Select Language",
                                                                items: ["English", "Spanish", "French", "Russian", "German"]
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                            createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).firstName,
                                                              "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                              label: "First Name",
                                                              placeholder: "Leonard"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).lastName,
                                                              "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                              label: "Last Name",
                                                              placeholder: "Carter"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              modelValue: unref(formData).country,
                                                              "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                              label: "Country",
                                                              placeholder: "Select Country",
                                                              items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VSelect, {
                                                              modelValue: unref(formData).language,
                                                              "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                              label: "Language",
                                                              placeholder: "Select Language",
                                                              items: ["English", "Spanish", "French", "Russian", "German"]
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                          createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).firstName,
                                                            "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                            label: "First Name",
                                                            placeholder: "Leonard"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).lastName,
                                                            "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                            label: "Last Name",
                                                            placeholder: "Carter"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            modelValue: unref(formData).country,
                                                            "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                            label: "Country",
                                                            placeholder: "Select Country",
                                                            items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VSelect, {
                                                            modelValue: unref(formData).language,
                                                            "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                            label: "Language",
                                                            placeholder: "Select Language",
                                                            items: ["English", "Spanish", "French", "Russian", "German"]
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VWindowItem, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(VRow, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(VCol, { cols: "12" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`<h6 class="text-h6"${_scopeId9}> Social Links </h6><p class="text-sm mb-0"${_scopeId9}> Add Social Links </p>`);
                                                          } else {
                                                            return [
                                                              createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                              createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).twitter,
                                                              "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                              placeholder: "https://twitter.com/abc",
                                                              label: "Twitter"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).twitter,
                                                                "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                                placeholder: "https://twitter.com/abc",
                                                                label: "Twitter"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).facebook,
                                                              "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                              placeholder: "https://facebook.com/abc",
                                                              label: "Facebook"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).facebook,
                                                                "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                                placeholder: "https://facebook.com/abc",
                                                                label: "Facebook"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).googlePlus,
                                                              "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                              placeholder: "https://plus.google.com/abc",
                                                              label: "Google+"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).googlePlus,
                                                                "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                                placeholder: "https://plus.google.com/abc",
                                                                label: "Google+"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(ssrRenderComponent(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(ssrRenderComponent(VTextField, {
                                                              modelValue: unref(formData).linkedIn,
                                                              "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                              placeholder: "https://linkedin.com/abc",
                                                              label: "LinkedIn"
                                                            }, null, _parent10, _scopeId9));
                                                          } else {
                                                            return [
                                                              createVNode(VTextField, {
                                                                modelValue: unref(formData).linkedIn,
                                                                "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                                placeholder: "https://linkedin.com/abc",
                                                                label: "LinkedIn"
                                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                    } else {
                                                      return [
                                                        createVNode(VCol, { cols: "12" }, {
                                                          default: withCtx(() => [
                                                            createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                            createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).twitter,
                                                              "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                              placeholder: "https://twitter.com/abc",
                                                              label: "Twitter"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).facebook,
                                                              "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                              placeholder: "https://facebook.com/abc",
                                                              label: "Facebook"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).googlePlus,
                                                              "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                              placeholder: "https://plus.google.com/abc",
                                                              label: "Google+"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        }),
                                                        createVNode(VCol, {
                                                          cols: "12",
                                                          md: "6"
                                                        }, {
                                                          default: withCtx(() => [
                                                            createVNode(VTextField, {
                                                              modelValue: unref(formData).linkedIn,
                                                              "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                              placeholder: "https://linkedin.com/abc",
                                                              label: "LinkedIn"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                          ]),
                                                          _: 1
                                                        })
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VRow, null, {
                                                    default: withCtx(() => [
                                                      createVNode(VCol, { cols: "12" }, {
                                                        default: withCtx(() => [
                                                          createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                          createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).twitter,
                                                            "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                            placeholder: "https://twitter.com/abc",
                                                            label: "Twitter"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).facebook,
                                                            "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                            placeholder: "https://facebook.com/abc",
                                                            label: "Facebook"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).googlePlus,
                                                            "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                            placeholder: "https://plus.google.com/abc",
                                                            label: "Google+"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      }),
                                                      createVNode(VCol, {
                                                        cols: "12",
                                                        md: "6"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VTextField, {
                                                            modelValue: unref(formData).linkedIn,
                                                            "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                            placeholder: "https://linkedin.com/abc",
                                                            label: "LinkedIn"
                                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VWindowItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                        createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).username,
                                                          "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                          placeholder: "CarterLeonardo",
                                                          label: "Username"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).email,
                                                          "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                          placeholder: "carterleonardo@gmail.com",
                                                          label: "Email"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).password,
                                                          "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                          placeholder: "············",
                                                          label: "Password",
                                                          type: unref(isPasswordVisible) ? "text" : "password",
                                                          "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                          "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).cPassword,
                                                          "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                          placeholder: "············",
                                                          label: "Confirm Password",
                                                          type: unref(isCPasswordVisible) ? "text" : "password",
                                                          "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                          "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VWindowItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                        createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).firstName,
                                                          "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                          label: "First Name",
                                                          placeholder: "Leonard"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).lastName,
                                                          "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                          label: "Last Name",
                                                          placeholder: "Carter"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          modelValue: unref(formData).country,
                                                          "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                          label: "Country",
                                                          placeholder: "Select Country",
                                                          items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VSelect, {
                                                          modelValue: unref(formData).language,
                                                          "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                          label: "Language",
                                                          placeholder: "Select Language",
                                                          items: ["English", "Spanish", "French", "Russian", "German"]
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VWindowItem, null, {
                                              default: withCtx(() => [
                                                createVNode(VRow, null, {
                                                  default: withCtx(() => [
                                                    createVNode(VCol, { cols: "12" }, {
                                                      default: withCtx(() => [
                                                        createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                        createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).twitter,
                                                          "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                          placeholder: "https://twitter.com/abc",
                                                          label: "Twitter"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).facebook,
                                                          "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                          placeholder: "https://facebook.com/abc",
                                                          label: "Facebook"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).googlePlus,
                                                          "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                          placeholder: "https://plus.google.com/abc",
                                                          label: "Google+"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    }),
                                                    createVNode(VCol, {
                                                      cols: "12",
                                                      md: "6"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VTextField, {
                                                          modelValue: unref(formData).linkedIn,
                                                          "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                          placeholder: "https://linkedin.com/abc",
                                                          label: "LinkedIn"
                                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`<div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      disabled: unref(currentStep) === 0,
                                      onClick: ($event) => currentStep.value--
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VIcon, {
                                            icon: "ri-arrow-left-line",
                                            start: "",
                                            class: "flip-in-rtl"
                                          }, null, _parent7, _scopeId6));
                                          _push7(` Previous `);
                                        } else {
                                          return [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-left-line",
                                              start: "",
                                              class: "flip-in-rtl"
                                            }),
                                            createTextVNode(" Previous ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    if (numberedSteps.length - 1 === unref(currentStep)) {
                                      _push6(ssrRenderComponent(VBtn, {
                                        color: "success",
                                        "append-icon": "ri-check-line",
                                        onClick: onSubmit
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` submit `);
                                          } else {
                                            return [
                                              createTextVNode(" submit ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      _push6(ssrRenderComponent(VBtn, {
                                        onClick: ($event) => currentStep.value++
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` Next `);
                                            _push7(ssrRenderComponent(VIcon, {
                                              icon: "ri-arrow-right-line",
                                              end: "",
                                              class: "flip-in-rtl"
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createTextVNode(" Next "),
                                              createVNode(VIcon, {
                                                icon: "ri-arrow-right-line",
                                                end: "",
                                                class: "flip-in-rtl"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    }
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode(VWindow, {
                                        modelValue: unref(currentStep),
                                        "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                        class: "disable-tab-transition"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                      createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).username,
                                                        "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                        placeholder: "CarterLeonardo",
                                                        label: "Username"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).email,
                                                        "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                        placeholder: "carterleonardo@gmail.com",
                                                        label: "Email"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).password,
                                                        "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                        placeholder: "············",
                                                        label: "Password",
                                                        type: unref(isPasswordVisible) ? "text" : "password",
                                                        "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                        "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).cPassword,
                                                        "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                        placeholder: "············",
                                                        label: "Confirm Password",
                                                        type: unref(isCPasswordVisible) ? "text" : "password",
                                                        "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                        "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                      createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).firstName,
                                                        "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                        label: "First Name",
                                                        placeholder: "Leonard"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).lastName,
                                                        "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                        label: "Last Name",
                                                        placeholder: "Carter"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        modelValue: unref(formData).country,
                                                        "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                        label: "Country",
                                                        placeholder: "Select Country",
                                                        items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VSelect, {
                                                        modelValue: unref(formData).language,
                                                        "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                        label: "Language",
                                                        placeholder: "Select Language",
                                                        items: ["English", "Spanish", "French", "Russian", "German"]
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VWindowItem, null, {
                                            default: withCtx(() => [
                                              createVNode(VRow, null, {
                                                default: withCtx(() => [
                                                  createVNode(VCol, { cols: "12" }, {
                                                    default: withCtx(() => [
                                                      createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                      createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).twitter,
                                                        "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                        placeholder: "https://twitter.com/abc",
                                                        label: "Twitter"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).facebook,
                                                        "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                        placeholder: "https://facebook.com/abc",
                                                        label: "Facebook"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).googlePlus,
                                                        "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                        placeholder: "https://plus.google.com/abc",
                                                        label: "Google+"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(VCol, {
                                                    cols: "12",
                                                    md: "6"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VTextField, {
                                                        modelValue: unref(formData).linkedIn,
                                                        "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                        placeholder: "https://linkedin.com/abc",
                                                        label: "LinkedIn"
                                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "outlined",
                                          disabled: unref(currentStep) === 0,
                                          onClick: ($event) => currentStep.value--
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-left-line",
                                              start: "",
                                              class: "flip-in-rtl"
                                            }),
                                            createTextVNode(" Previous ")
                                          ]),
                                          _: 1
                                        }, 8, ["disabled", "onClick"]),
                                        numberedSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                          key: 0,
                                          color: "success",
                                          "append-icon": "ri-check-line",
                                          onClick: onSubmit
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" submit ")
                                          ]),
                                          _: 1
                                        })) : (openBlock(), createBlock(VBtn, {
                                          key: 1,
                                          onClick: ($event) => currentStep.value++
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Next "),
                                            createVNode(VIcon, {
                                              icon: "ri-arrow-right-line",
                                              end: "",
                                              class: "flip-in-rtl"
                                            })
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VForm, null, {
                                  default: withCtx(() => [
                                    createVNode(VWindow, {
                                      modelValue: unref(currentStep),
                                      "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                      class: "disable-tab-transition"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VWindowItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                    createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).username,
                                                      "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                      placeholder: "CarterLeonardo",
                                                      label: "Username"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).email,
                                                      "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                      placeholder: "carterleonardo@gmail.com",
                                                      label: "Email"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).password,
                                                      "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                      placeholder: "············",
                                                      label: "Password",
                                                      type: unref(isPasswordVisible) ? "text" : "password",
                                                      "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                      "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).cPassword,
                                                      "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                      placeholder: "············",
                                                      label: "Confirm Password",
                                                      type: unref(isCPasswordVisible) ? "text" : "password",
                                                      "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                      "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VWindowItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                    createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).firstName,
                                                      "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                      label: "First Name",
                                                      placeholder: "Leonard"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).lastName,
                                                      "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                      label: "Last Name",
                                                      placeholder: "Carter"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      modelValue: unref(formData).country,
                                                      "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                      label: "Country",
                                                      placeholder: "Select Country",
                                                      items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VSelect, {
                                                      modelValue: unref(formData).language,
                                                      "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                      label: "Language",
                                                      placeholder: "Select Language",
                                                      items: ["English", "Spanish", "French", "Russian", "German"]
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VWindowItem, null, {
                                          default: withCtx(() => [
                                            createVNode(VRow, null, {
                                              default: withCtx(() => [
                                                createVNode(VCol, { cols: "12" }, {
                                                  default: withCtx(() => [
                                                    createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                    createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).twitter,
                                                      "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                      placeholder: "https://twitter.com/abc",
                                                      label: "Twitter"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).facebook,
                                                      "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                      placeholder: "https://facebook.com/abc",
                                                      label: "Facebook"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).googlePlus,
                                                      "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                      placeholder: "https://plus.google.com/abc",
                                                      label: "Google+"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(VCol, {
                                                  cols: "12",
                                                  md: "6"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VTextField, {
                                                      modelValue: unref(formData).linkedIn,
                                                      "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                      placeholder: "https://linkedin.com/abc",
                                                      label: "LinkedIn"
                                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                      createVNode(VBtn, {
                                        color: "secondary",
                                        variant: "outlined",
                                        disabled: unref(currentStep) === 0,
                                        onClick: ($event) => currentStep.value--
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-left-line",
                                            start: "",
                                            class: "flip-in-rtl"
                                          }),
                                          createTextVNode(" Previous ")
                                        ]),
                                        _: 1
                                      }, 8, ["disabled", "onClick"]),
                                      numberedSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                        key: 0,
                                        color: "success",
                                        "append-icon": "ri-check-line",
                                        onClick: onSubmit
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" submit ")
                                        ]),
                                        _: 1
                                      })) : (openBlock(), createBlock(VBtn, {
                                        key: 1,
                                        onClick: ($event) => currentStep.value++
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Next "),
                                          createVNode(VIcon, {
                                            icon: "ri-arrow-right-line",
                                            end: "",
                                            class: "flip-in-rtl"
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VForm, null, {
                                default: withCtx(() => [
                                  createVNode(VWindow, {
                                    modelValue: unref(currentStep),
                                    "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                    class: "disable-tab-transition"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).username,
                                                    "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                    placeholder: "CarterLeonardo",
                                                    label: "Username"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).email,
                                                    "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                    placeholder: "carterleonardo@gmail.com",
                                                    label: "Email"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).password,
                                                    "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                    placeholder: "············",
                                                    label: "Password",
                                                    type: unref(isPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).cPassword,
                                                    "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                    placeholder: "············",
                                                    label: "Confirm Password",
                                                    type: unref(isCPasswordVisible) ? "text" : "password",
                                                    "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                    "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).firstName,
                                                    "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                    label: "First Name",
                                                    placeholder: "Leonard"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).lastName,
                                                    "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                    label: "Last Name",
                                                    placeholder: "Carter"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(formData).country,
                                                    "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                    label: "Country",
                                                    placeholder: "Select Country",
                                                    items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VSelect, {
                                                    modelValue: unref(formData).language,
                                                    "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                    label: "Language",
                                                    placeholder: "Select Language",
                                                    items: ["English", "Spanish", "French", "Russian", "German"]
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VWindowItem, null, {
                                        default: withCtx(() => [
                                          createVNode(VRow, null, {
                                            default: withCtx(() => [
                                              createVNode(VCol, { cols: "12" }, {
                                                default: withCtx(() => [
                                                  createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).twitter,
                                                    "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                    placeholder: "https://twitter.com/abc",
                                                    label: "Twitter"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).facebook,
                                                    "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                    placeholder: "https://facebook.com/abc",
                                                    label: "Facebook"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).googlePlus,
                                                    "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                    placeholder: "https://plus.google.com/abc",
                                                    label: "Google+"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(VCol, {
                                                cols: "12",
                                                md: "6"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).linkedIn,
                                                    "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                    placeholder: "https://linkedin.com/abc",
                                                    label: "LinkedIn"
                                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
                                      disabled: unref(currentStep) === 0,
                                      onClick: ($event) => currentStep.value--
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-left-line",
                                          start: "",
                                          class: "flip-in-rtl"
                                        }),
                                        createTextVNode(" Previous ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled", "onClick"]),
                                    numberedSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                      key: 0,
                                      color: "success",
                                      "append-icon": "ri-check-line",
                                      onClick: onSubmit
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" submit ")
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(VBtn, {
                                      key: 1,
                                      onClick: ($event) => currentStep.value++
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Next "),
                                        createVNode(VIcon, {
                                          icon: "ri-arrow-right-line",
                                          end: "",
                                          class: "flip-in-rtl"
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCol, {
                      cols: "12",
                      md: "4",
                      class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(_component_AppStepper, {
                              "current-step": unref(currentStep),
                              "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                              direction: "vertical",
                              items: numberedSteps
                            }, null, 8, ["current-step", "onUpdate:currentStep"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["class"]),
                    createVNode(VCol, {
                      cols: "12",
                      md: "8"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VForm, null, {
                              default: withCtx(() => [
                                createVNode(VWindow, {
                                  modelValue: unref(currentStep),
                                  "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  class: "disable-tab-transition"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Account Details "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).username,
                                                  "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                  placeholder: "CarterLeonardo",
                                                  label: "Username"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).email,
                                                  "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                  placeholder: "carterleonardo@gmail.com",
                                                  label: "Email"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).password,
                                                  "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                  placeholder: "············",
                                                  label: "Password",
                                                  type: unref(isPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).cPassword,
                                                  "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                  placeholder: "············",
                                                  label: "Confirm Password",
                                                  type: unref(isCPasswordVisible) ? "text" : "password",
                                                  "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                  "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).firstName,
                                                  "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                  label: "First Name",
                                                  placeholder: "Leonard"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).lastName,
                                                  "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                  label: "Last Name",
                                                  placeholder: "Carter"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(formData).country,
                                                  "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                  label: "Country",
                                                  placeholder: "Select Country",
                                                  items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VSelect, {
                                                  modelValue: unref(formData).language,
                                                  "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                  label: "Language",
                                                  placeholder: "Select Language",
                                                  items: ["English", "Spanish", "French", "Russian", "German"]
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VWindowItem, null, {
                                      default: withCtx(() => [
                                        createVNode(VRow, null, {
                                          default: withCtx(() => [
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("h6", { class: "text-h6" }, " Social Links "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).twitter,
                                                  "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                  placeholder: "https://twitter.com/abc",
                                                  label: "Twitter"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).facebook,
                                                  "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                  placeholder: "https://facebook.com/abc",
                                                  label: "Facebook"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).googlePlus,
                                                  "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                  placeholder: "https://plus.google.com/abc",
                                                  label: "Google+"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).linkedIn,
                                                  "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                  placeholder: "https://linkedin.com/abc",
                                                  label: "LinkedIn"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
                                    disabled: unref(currentStep) === 0,
                                    onClick: ($event) => currentStep.value--
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-left-line",
                                        start: "",
                                        class: "flip-in-rtl"
                                      }),
                                      createTextVNode(" Previous ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"]),
                                  numberedSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                    key: 0,
                                    color: "success",
                                    "append-icon": "ri-check-line",
                                    onClick: onSubmit
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" submit ")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(VBtn, {
                                    key: 1,
                                    onClick: ($event) => currentStep.value++
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Next "),
                                      createVNode(VIcon, {
                                        icon: "ri-arrow-right-line",
                                        end: "",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]))
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VRow, null, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    cols: "12",
                    md: "4",
                    class: _ctx.$vuetify.display.smAndDown ? "border-b" : "border-e"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(_component_AppStepper, {
                            "current-step": unref(currentStep),
                            "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                            direction: "vertical",
                            items: numberedSteps
                          }, null, 8, ["current-step", "onUpdate:currentStep"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(VCol, {
                    cols: "12",
                    md: "8"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VForm, null, {
                            default: withCtx(() => [
                              createVNode(VWindow, {
                                modelValue: unref(currentStep),
                                "onUpdate:modelValue": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                class: "disable-tab-transition"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Account Details "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Enter your Account Details ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).username,
                                                "onUpdate:modelValue": ($event) => unref(formData).username = $event,
                                                placeholder: "CarterLeonardo",
                                                label: "Username"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).email,
                                                "onUpdate:modelValue": ($event) => unref(formData).email = $event,
                                                placeholder: "carterleonardo@gmail.com",
                                                label: "Email"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).password,
                                                "onUpdate:modelValue": ($event) => unref(formData).password = $event,
                                                placeholder: "············",
                                                label: "Password",
                                                type: unref(isPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).cPassword,
                                                "onUpdate:modelValue": ($event) => unref(formData).cPassword = $event,
                                                placeholder: "············",
                                                label: "Confirm Password",
                                                type: unref(isCPasswordVisible) ? "text" : "password",
                                                "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "append-inner-icon", "onClick:appendInner"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Personal Info "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Setup Information ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).firstName,
                                                "onUpdate:modelValue": ($event) => unref(formData).firstName = $event,
                                                label: "First Name",
                                                placeholder: "Leonard"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).lastName,
                                                "onUpdate:modelValue": ($event) => unref(formData).lastName = $event,
                                                label: "Last Name",
                                                placeholder: "Carter"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(formData).country,
                                                "onUpdate:modelValue": ($event) => unref(formData).country = $event,
                                                label: "Country",
                                                placeholder: "Select Country",
                                                items: ["UK", "USA", "Canada", "Australia", "Germany"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VSelect, {
                                                modelValue: unref(formData).language,
                                                "onUpdate:modelValue": ($event) => unref(formData).language = $event,
                                                label: "Language",
                                                placeholder: "Select Language",
                                                items: ["English", "Spanish", "French", "Russian", "German"]
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VWindowItem, null, {
                                    default: withCtx(() => [
                                      createVNode(VRow, null, {
                                        default: withCtx(() => [
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("h6", { class: "text-h6" }, " Social Links "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Add Social Links ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).twitter,
                                                "onUpdate:modelValue": ($event) => unref(formData).twitter = $event,
                                                placeholder: "https://twitter.com/abc",
                                                label: "Twitter"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).facebook,
                                                "onUpdate:modelValue": ($event) => unref(formData).facebook = $event,
                                                placeholder: "https://facebook.com/abc",
                                                label: "Facebook"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).googlePlus,
                                                "onUpdate:modelValue": ($event) => unref(formData).googlePlus = $event,
                                                placeholder: "https://plus.google.com/abc",
                                                label: "Google+"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).linkedIn,
                                                "onUpdate:modelValue": ($event) => unref(formData).linkedIn = $event,
                                                placeholder: "https://linkedin.com/abc",
                                                label: "LinkedIn"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
                                  disabled: unref(currentStep) === 0,
                                  onClick: ($event) => currentStep.value--
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-left-line",
                                      start: "",
                                      class: "flip-in-rtl"
                                    }),
                                    createTextVNode(" Previous ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"]),
                                numberedSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
                                  key: 0,
                                  color: "success",
                                  "append-icon": "ri-check-line",
                                  onClick: onSubmit
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" submit ")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(VBtn, {
                                  key: 1,
                                  onClick: ($event) => currentStep.value++
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Next "),
                                    createVNode(VIcon, {
                                      icon: "ri-arrow-right-line",
                                      end: "",
                                      class: "flip-in-rtl"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-wizard/form-wizard-numbered/DemoFormWizardNumberedVertical.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "form-wizard-numbered",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCardCode = _sfc_main$5;
      _push(ssrRenderComponent(VRow, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    variant: "outlined",
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$3, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$3)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      variant: "outlined",
                      title: "Basic",
                      code: basic
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$3)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    variant: "outlined",
                    title: "Validation",
                    code: validation
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$2, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      variant: "outlined",
                      title: "Validation",
                      code: validation
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$2)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCol, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_AppCardCode, {
                    variant: "outlined",
                    title: "Vertical",
                    code: vertical
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$1, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppCardCode, {
                      variant: "outlined",
                      title: "Vertical",
                      code: vertical
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1)
                      ]),
                      _: 1
                    }, 8, ["code"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    variant: "outlined",
                    title: "Basic",
                    code: basic
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$3)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    variant: "outlined",
                    title: "Validation",
                    code: validation
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$2)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              }),
              createVNode(VCol, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_AppCardCode, {
                    variant: "outlined",
                    title: "Vertical",
                    code: vertical
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$1)
                    ]),
                    _: 1
                  }, 8, ["code"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/form-wizard-numbered.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
