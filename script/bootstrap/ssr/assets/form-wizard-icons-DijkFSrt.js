import { _ as _sfc_main$5 } from "./AppCardCode-DkpMhnYF.js";
import { openBlock, createElementBlock, createElementVNode, createStaticVNode, ref, withCtx, unref, isRef, createVNode, toDisplayString, createTextVNode, createBlock, useSSRContext, withModifiers } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: 'johndoe',
  email: 'john.doe@email.com',
  password: 'johndoe@J2',
  cPassword: 'johndoe@J2',
  firstName: 'John',
  lastName: 'Doe',
  country: 'UK',
  language: 'English',
  address: '98 Borough bridge Road, Birmingham',
  landmark: 'Borough bridge',
  pincode: '658921',
  city: 'Birmingham',
  twitter: 'https://twitter.com/abc',
  facebook: 'https://facebook.com/abc',
  googlePlus: 'https://plus.google.com/abc',
  LinkedIn: 'https://linkedin.com/abc',
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
        :items="iconsSteps"
        align="center"
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
                  Address
                </h6>
                <p class="text-sm mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.address"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.landmark"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.pincode"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.city"
                  placeholder="New York"
                  label="City"
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

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                {{ formData.username }}
              </p>
              <p class="mb-1">
                {{ formData.email }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                {{ formData.firstName }}
              </p>
              <p class="mb-1">
                {{ formData.lastName }}
              </p>
              <p class="mb-1">
                {{ formData.country }}
              </p>
              <p class="mb-1">
                {{ formData.language }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                {{ formData.address }}
              </p>
              <p class="mb-1">
                {{ formData.landmark }}
              </p>
              <p class="mb-1">
                {{ formData.pincode }}
              </p>
              <p class="mb-1">
                {{ formData.city }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Social Links
              </h6>

              <p class="mb-1">
                {{ formData.twitter }}
              </p>
              <p class="mb-1">
                {{ formData.facebook }}
              </p>
              <p class="mb-1">
                {{ formData.googlePlus }}
              </p>
              <p class="mb-1">
                {{ formData.LinkedIn }}
              </p>
            </div>
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
            v-if="iconsSteps.length - 1 === currentStep"
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
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)

const formData = ref({
  username: 'johndoe',
  email: 'john.doe@email.com',
  password: 'johndoe@J2',
  cPassword: 'johndoe@J2',
  firstName: 'John',
  lastName: 'Doe',
  country: 'UK',
  language: 'English',
  address: '98 Borough bridge Road, Birmingham',
  landmark: 'Borough bridge',
  pincode: '658921',
  city: 'Birmingham',
  twitter: 'https://twitter.com/abc',
  facebook: 'https://facebook.com/abc',
  googlePlus: 'https://plus.google.com/abc',
  LinkedIn: 'https://linkedin.com/abc',
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
        :items="iconsSteps"
        align="center"
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
                  Address
                </h6>
                <p class="text-sm mb-0">
                  Enter Your Address.
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.address"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.landmark"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.pincode"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="formData.city"
                  placeholder="New York"
                  label="City"
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

          <VWindowItem>
            <div class="text-base">
              <h6 class="text-base font-weight-medium mb-2">
                Account
              </h6>

              <p class="mb-1">
                {{ formData.username }}
              </p>
              <p class="mb-1">
                {{ formData.email }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Personal Info
              </h6>

              <p class="mb-1">
                {{ formData.firstName }}
              </p>
              <p class="mb-1">
                {{ formData.lastName }}
              </p>
              <p class="mb-1">
                {{ formData.country }}
              </p>
              <p class="mb-1">
                {{ formData.language }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Address
              </h6>

              <p class="mb-1">
                {{ formData.address }}
              </p>
              <p class="mb-1">
                {{ formData.landmark }}
              </p>
              <p class="mb-1">
                {{ formData.pincode }}
              </p>
              <p class="mb-1">
                {{ formData.city }}
              </p>

              <VDivider class="my-4" />

              <h6 class="text-base font-weight-medium mb-2">
                Social Links
              </h6>

              <p class="mb-1">
                {{ formData.twitter }}
              </p>
              <p class="mb-1">
                {{ formData.facebook }}
              </p>
              <p class="mb-1">
                {{ formData.googlePlus }}
              </p>
              <p class="mb-1">
                {{ formData.LinkedIn }}
              </p>
            </div>
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
            v-if="iconsSteps.length - 1 === currentStep"
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
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref<VForm>()
const refPersonalForm = ref<VForm>()
const refSocialLinkForm = ref<VForm>()
const refAddressForm = ref<VForm>()

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

const addressForm = ref({
  address: '',
  landmark: '',
  city: '',
  pincode: '',
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

const validateAddressForm = () => {
  refAddressForm.value?.validate().then(valid => {
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
      currentStep.value++
      isCurrentStepValid.value = true
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
        :items="iconsSteps"
        :is-active-step-valid="isCurrentStepValid"
        align="center"
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
                  placeholder="············"
                  label="Password"
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
                  placeholder="············"
                  label="Confirm Password"
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
                    variant="outlined"
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
            ref="refAddressForm"
            @submit.prevent="validateAddressForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Address
                </h6>
                <p class="text-sm mb-0">
                  Enter Your Address
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.address"
                  :rules="[requiredValidator]"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.landmark"
                  :rules="[requiredValidator]"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.pincode"
                  :rules="[requiredValidator]"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.city"
                  :rules="[requiredValidator]"
                  placeholder="New York"
                  label="City"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="outlined"
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
                  placeholder="https://linkedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="outlined"
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
          <div class="text-base">
            <h6 class="text-base font-weight-medium mb-2">
              Account
            </h6>

            <p class="mb-1">
              {{ accountForm.username }}
            </p>
            <p class="mb-1">
              {{ accountForm.email }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Personal Info
            </h6>

            <p class="mb-1">
              {{ personalForm.firstName }}
            </p>
            <p class="mb-1">
              {{ personalForm.lastName }}
            </p>
            <p class="mb-1">
              {{ personalForm.country }}
            </p>
            <p class="mb-1">
              {{ personalForm.language }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Address
            </h6>

            <p class="mb-1">
              {{ addressForm.address }}
            </p>
            <p class="mb-1">
              {{ addressForm.landmark }}
            </p>
            <p class="mb-1">
              {{ addressForm.pincode }}
            </p>
            <p class="mb-1">
              {{ addressForm.city }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Social Links
            </h6>

            <p class="mb-1">
              {{ socialForm.twitter }}
            </p>
            <p class="mb-1">
              {{ socialForm.facebook }}
            </p>
            <p class="mb-1">
              {{ socialForm.googlePlus }}
            </p>
            <p class="mb-1">
              {{ socialForm.LinkedIn }}
            </p>
          </div>

          <div>
            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="outlined"
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
                Submit
                <VIcon
                  icon="ri-check-line"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </div>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`, js: `<script setup>
import { VForm } from 'vuetify/components/VForm'
import customWizardAccount from '@images/svg/wizard-account.svg'
import customWizardAddress from '@images/svg/wizard-address.svg'
import customWizardPersonal from '@images/svg/wizard-personal.svg'
import customWizardSocialLink from '@images/svg/wizard-social-link.svg'
import customWizardSubmit from '@images/svg/wizard-submit.svg'

const iconsSteps = [
  {
    title: 'Account Details',
    icon: customWizardAccount,
  },
  {
    title: 'Personal Info',
    icon: customWizardPersonal,
  },
  {
    title: 'Address',
    icon: customWizardAddress,
  },
  {
    title: 'Social Links',
    icon: customWizardSocialLink,
  },
  {
    title: 'Review & Submit',
    icon: customWizardSubmit,
  },
]

const currentStep = ref(0)
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
const isCurrentStepValid = ref(true)
const refAccountForm = ref()
const refPersonalForm = ref()
const refSocialLinkForm = ref()
const refAddressForm = ref()

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

const addressForm = ref({
  address: '',
  landmark: '',
  city: '',
  pincode: '',
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

const validateAddressForm = () => {
  refAddressForm.value?.validate().then(valid => {
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
      currentStep.value++
      isCurrentStepValid.value = true
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
        :items="iconsSteps"
        :is-active-step-valid="isCurrentStepValid"
        align="center"
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
                  placeholder="············"
                  label="Password"
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
                  placeholder="············"
                  label="Confirm Password"
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
                    variant="outlined"
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
            ref="refAddressForm"
            @submit.prevent="validateAddressForm"
          >
            <VRow>
              <VCol cols="12">
                <h6 class="text-h6">
                  Address
                </h6>
                <p class="text-sm mb-0">
                  Enter Your Address
                </p>
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.address"
                  :rules="[requiredValidator]"
                  placeholder="98 Borough bridge Road, Birmingham"
                  label="Address"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.landmark"
                  :rules="[requiredValidator]"
                  placeholder="Borough bridge"
                  label="Landmark"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.pincode"
                  :rules="[requiredValidator]"
                  placeholder="658921"
                  label="Pincode"
                  type="number"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="addressForm.city"
                  :rules="[requiredValidator]"
                  placeholder="New York"
                  label="City"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="outlined"
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
                  placeholder="https://linkedin.com/abc"
                  :rules="[requiredValidator, urlValidator]"
                  label="LinkedIn"
                />
              </VCol>

              <VCol cols="12">
                <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
                  <VBtn
                    color="secondary"
                    variant="outlined"
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
          <div class="text-base">
            <h6 class="text-base font-weight-medium mb-2">
              Account
            </h6>

            <p class="mb-1">
              {{ accountForm.username }}
            </p>
            <p class="mb-1">
              {{ accountForm.email }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Personal Info
            </h6>

            <p class="mb-1">
              {{ personalForm.firstName }}
            </p>
            <p class="mb-1">
              {{ personalForm.lastName }}
            </p>
            <p class="mb-1">
              {{ personalForm.country }}
            </p>
            <p class="mb-1">
              {{ personalForm.language }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Address
            </h6>

            <p class="mb-1">
              {{ addressForm.address }}
            </p>
            <p class="mb-1">
              {{ addressForm.landmark }}
            </p>
            <p class="mb-1">
              {{ addressForm.pincode }}
            </p>
            <p class="mb-1">
              {{ addressForm.city }}
            </p>

            <VDivider class="my-4" />

            <h6 class="text-base font-weight-medium mb-2">
              Social Links
            </h6>

            <p class="mb-1">
              {{ socialForm.twitter }}
            </p>
            <p class="mb-1">
              {{ socialForm.facebook }}
            </p>
            <p class="mb-1">
              {{ socialForm.googlePlus }}
            </p>
            <p class="mb-1">
              {{ socialForm.LinkedIn }}
            </p>
          </div>

          <div>
            <div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8">
              <VBtn
                color="secondary"
                variant="outlined"
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
                Submit
                <VIcon
                  icon="ri-check-line"
                  end
                  class="flip-in-rtl"
                />
              </VBtn>
            </div>
          </div>
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
    icon: 'ri-article-line',
  },
  {
    title: 'Personal Info',
    icon: 'ri-user-line',
  },
  {
    title: 'Social Links',
    icon: 'ri-links-line',
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
            icon-size="24"
            class="stepper-icon-step-bg"
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
      </VCol>
    </VRow>
  </VCard>
</template>
`, js: `<script setup>
const numberedSteps = [
  {
    title: 'Account Details',
    icon: 'ri-article-line',
  },
  {
    title: 'Personal Info',
    icon: 'ri-user-line',
  },
  {
    title: 'Social Links',
    icon: 'ri-links-line',
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
            icon-size="24"
            class="stepper-icon-step-bg"
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
      </VCol>
    </VRow>
  </VCard>
</template>
` };
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "54",
  height: "54"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("g", { fill: "currentColor" }, [
  /* @__PURE__ */ createElementVNode("path", { d: "M54 7.2V4a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v3.2h1.8v36H.9a.9.9 0 1 0 0 1.8h25.2v1.8c0 .042.019.08.024.12A3.596 3.596 0 0 0 23.4 50.4c0 1.985 1.615 3.6 3.6 3.6s3.6-1.615 3.6-3.6a3.596 3.596 0 0 0-2.724-3.48c.005-.04.024-.078.024-.12V45h25.2a.9.9 0 1 0 0-1.8h-.9v-36zM28.8 50.4c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8M5.4 1.8h43.2a3.6 3.6 0 0 1 3.6 3.6H1.8a3.6 3.6 0 0 1 3.6-3.6m43 41.4H5.6a2 2 0 0 1-2-2v-32a2 2 0 0 1 2-2h42.8a2 2 0 0 1 2 2v32a2 2 0 0 1-2 2" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M45 36.9H31.5a.9.9 0 1 0 0 1.8H45a.9.9 0 1 0 0-1.8M9 32.4h9a.9.9 0 1 0 0-1.8H9a.9.9 0 1 0 0 1.8m18 0h13.5a.9.9 0 1 0 0-1.8H27a.9.9 0 1 0 0 1.8m-5.139-1.539a.93.93 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.261.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.333-.333-.945-.333-1.278 0M27 36.9H13.5a.9.9 0 1 0 0 1.8H27a.9.9 0 1 0 0-1.8M9 38.7a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.9.9 0 0 0-.261-.63c-.333-.342-.936-.342-1.278-.009a.95.95 0 0 0-.261.639c0 .234.099.468.261.639A.95.95 0 0 0 9 38.7m35.361-7.839a.93.93 0 0 0-.261.639c0 .234.099.468.261.639A.95.95 0 0 0 45 32.4a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.333-.333-.936-.333-1.278 0M45 18H31.5a.9.9 0 1 0 0 1.8H45a.9.9 0 1 0 0-1.8m0 6.3h-9a.9.9 0 1 0 0 1.8h9a.9.9 0 1 0 0-1.8m-18 1.8h1.8a.9.9 0 1 0 0-1.8H27a.9.9 0 1 0 0 1.8m0-12.6h13.5a.9.9 0 1 0 0-1.8H27a.9.9 0 1 0 0 1.8m18 0a.95.95 0 0 0 .639-.261.9.9 0 0 0 .261-.639.9.9 0 0 0-.261-.639c-.342-.333-.945-.333-1.278 0a.95.95 0 0 0-.261.639c0 .234.099.468.261.639A.95.95 0 0 0 45 13.5m-17.739 4.761A.93.93 0 0 0 27 18.9c0 .234.099.468.261.639a.95.95 0 0 0 .639.261.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.93.93 0 0 0-.261-.639.94.94 0 0 0-1.278 0m4.5 6.3a.95.95 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.261.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.333-.333-.945-.333-1.278 0M19.5 11.7h-8.4a3 3 0 0 0-3 3v8.4a3 3 0 0 0 3 3h8.4a3 3 0 0 0 3-3v-8.4a3 3 0 0 0-3-3m-1.8 12.6h-4.8a3 3 0 0 1-3-3v-4.8a3 3 0 0 1 3-3h4.8a3 3 0 0 1 3 3v4.8a3 3 0 0 1-3 3" })
], -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, [..._hoisted_3$4]);
}
const customWizardAccount = { render: render$4 };
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "54",
  height: "54"
};
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<g fill="currentColor"><path d="M54 3.864c0-1.986-1.615-3.6-3.6-3.6H3.6a3.604 3.604 0 0 0-3.6 3.6c0 1.673 1.152 3.07 2.7 3.472v43.7l2.7-2.7 5.4 5.4 5.4-5.4 5.4 5.4 5.4-5.4 5.4 5.4 5.4-5.4 5.4 5.4 5.4-5.4 2.7 2.7v-43.7c1.548-.402 2.7-1.8 2.7-3.472M49.5 46.69l-.9-.9-5.4 5.4-5.4-5.4-5.4 5.4-5.4-5.4-5.4 5.4-5.4-5.4-5.4 5.4-5.4-5.4-.9.9V4.764h45zm1.8-41.27V2.965H2.7v2.458a1.8 1.8 0 0 1 .9-3.358h46.8a1.8 1.8 0 0 1 .9 3.358z"></path><path d="M39.6 36.264H26.1a.9.9 0 1 0 0 1.8h13.5a.9.9 0 1 0 0-1.8m3.861.261a.93.93 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.26.95.95 0 0 0 .639-.26.95.95 0 0 0 .261-.64.93.93 0 0 0-.261-.638.94.94 0 0 0-1.278 0m.639-12.861H30.6a.9.9 0 1 0 0 1.8h13.5a.9.9 0 1 0 0-1.8m0 6.3h-9a.9.9 0 1 0 0 1.8h9a.9.9 0 1 0 0-1.8m-18.9.9a.9.9 0 0 0 .9.9h1.8a.9.9 0 1 0 0-1.8h-1.8a.9.9 0 0 0-.9.9m15.3-12.6a.9.9 0 0 0-.9-.9H26.1a.9.9 0 1 0 0 1.8h13.5a.9.9 0 0 0 .9-.9m2.961-.639a.93.93 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.26.93.93 0 0 0 .639-.26.95.95 0 0 0 .261-.64.95.95 0 0 0-.261-.638c-.333-.333-.945-.333-1.278 0m-15.822 7.578a.93.93 0 0 0 .261-.64.93.93 0 0 0-.261-.638c-.333-.333-.936-.333-1.278 0a.93.93 0 0 0-.261.639.93.93 0 0 0 .261.639.95.95 0 0 0 .639.26.95.95 0 0 0 .639-.26m4.5 6.3a.91.91 0 0 0 0-1.278c-.333-.333-.936-.333-1.278 0a.95.95 0 0 0-.261.639c0 .234.099.468.261.639a.95.95 0 0 0 .639.26.95.95 0 0 0 .639-.26M15.3 19.255v-.991a.9.9 0 1 0-1.8 0v.993c-.982.2-1.877.721-2.536 1.502a3.1 3.1 0 0 0-.715 2.342 3.28 3.28 0 0 0 1.245 2.242l2.006 1.56v4.895a2.7 2.7 0 0 1-1.8-2.534.9.9 0 1 0-1.8 0 4.51 4.51 0 0 0 3.6 4.409v.79a.9.9 0 1 0 1.8 0v-.794c.982-.2 1.877-.72 2.537-1.501a3.1 3.1 0 0 0 .714-2.345 3.28 3.28 0 0 0-1.245-2.239l-2.006-1.56V21.13a2.7 2.7 0 0 1 1.8 2.535.9.9 0 1 0 1.8 0 4.51 4.51 0 0 0-3.6-4.41m.9 9.75c.315.244.52.612.56 1.006.04.37-.067.723-.297.995a2.7 2.7 0 0 1-1.163.787v-3.49zm-3.6-5.082a1.48 1.48 0 0 1-.56-1.008 1.32 1.32 0 0 1 .297-.994 2.7 2.7 0 0 1 1.163-.787v3.49z"></path><circle cx="36" cy="10.164" r="1"></circle><circle cx="32.4" cy="10.164" r="1"></circle><circle cx="39.6" cy="10.164" r="1"></circle><circle cx="28.8" cy="10.164" r="1"></circle><circle cx="43.2" cy="10.164" r="1"></circle><circle cx="18" cy="10.164" r="1"></circle><circle cx="21.6" cy="10.164" r="1"></circle><circle cx="25.2" cy="10.164" r="1"></circle><circle cx="46.8" cy="10.164" r="1"></circle><circle cx="14.4" cy="10.164" r="1"></circle><circle cx="10.8" cy="10.164" r="1"></circle><circle cx="7.2" cy="10.164" r="1"></circle></g>', 1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, [..._hoisted_3$3]);
}
const customWizardAddress = { render: render$3 };
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "58",
  height: "54"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("g", { fill: "currentColor" }, [
  /* @__PURE__ */ createElementVNode("path", { d: "M53.857.283H4a4 4 0 0 0-4 4V40.64a4 4 0 0 0 4 4h32.643v9.077l6.75-6.75 6.75 6.75V44.64h3.714a4 4 0 0 0 4-4V4.283a4 4 0 0 0-4-4m-5.643 48.779-4.821-4.822-4.822 4.822V38.517q.02.01.037.019a9.6 9.6 0 0 0 4.785 1.282 9.6 9.6 0 0 0 4.785-1.282c.011-.007.025-.01.036-.019zm.283-13.118q-.228.2-.467.38a8 8 0 0 1-.58.4q-.058.034-.114.07a7 7 0 0 1-.496.272l-.145.07q-.242.117-.492.216-.096.036-.193.07-.233.086-.472.157-.128.036-.259.067a7 7 0 0 1-.43.1c-.123.024-.248.04-.373.057-.114.016-.227.037-.343.047a8 8 0 0 1-.741.038 8 8 0 0 1-.742-.038c-.114-.011-.227-.03-.342-.047q-.187-.024-.373-.057c-.145-.028-.288-.065-.43-.1q-.13-.032-.26-.067a7 7 0 0 1-.471-.157q-.098-.034-.193-.07a8 8 0 0 1-1.133-.559 8 8 0 0 1-.602-.4l-.092-.068a7.7 7.7 0 0 1-3.075-6.15c0-4.253 3.46-7.714 7.714-7.714 4.253 0 7.714 3.46 7.714 7.714a7.69 7.69 0 0 1-2.61 5.769m3.432 6.767h-1.786V37.05a9.6 9.6 0 0 0 2.893-6.875c0-5.317-4.326-9.642-9.643-9.642s-9.643 4.325-9.643 9.642a9.6 9.6 0 0 0 2.893 6.875v5.661H5.929a4 4 0 0 1-4-4v-32.5a4 4 0 0 1 4-4h46a4 4 0 0 1 4 4v32.5a4 4 0 0 1-4 4" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M11.747 12.598a3.32 3.32 0 0 0-.766 2.51c.099.944.585 1.82 1.334 2.402l2.15 1.673v5.243a2.89 2.89 0 0 1-1.93-2.715.964.964 0 1 0-1.928 0 4.83 4.83 0 0 0 3.857 4.724v.847a.964.964 0 1 0 1.929 0v-.85a4.8 4.8 0 0 0 2.718-1.61c.59-.697.861-1.588.765-2.511a3.52 3.52 0 0 0-1.334-2.4l-2.15-1.67v-5.244a2.89 2.89 0 0 1 1.93 2.715.964.964 0 1 0 1.928 0 4.83 4.83 0 0 0-3.857-4.724V9.926a.964.964 0 1 0-1.929 0v1.065a4.8 4.8 0 0 0-2.717 1.607m5.611 8.836c.337.261.556.656.6 1.078.041.396-.072.775-.32 1.066a2.9 2.9 0 0 1-1.245.844v-3.74zM13.5 15.99a1.58 1.58 0 0 1-.6-1.08 1.4 1.4 0 0 1 .32-1.065 2.87 2.87 0 0 1 1.245-.843v3.738zm10.607-1.243h22.179a.964.964 0 1 0 0-1.929H24.107a.964.964 0 1 0 0 1.929m0 5.786h10.607a.964.964 0 1 0 0-1.929H24.107a.964.964 0 1 0 0 1.929m0 5.785h7.714a.964.964 0 1 0 0-1.928h-7.714a.964.964 0 1 0 0 1.928m-13.5 6.75h20.25a.964.964 0 1 0 0-1.928h-20.25a.964.964 0 1 0 0 1.928" })
], -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$2]);
}
const customWizardPersonal = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "54",
  height: "54"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("g", { fill: "currentColor" }, [
  /* @__PURE__ */ createElementVNode("path", { d: "M50 3.6H27.9V.9a.9.9 0 1 0-1.8 0v2.7H4a4 4 0 0 0-4 4v29.8a4 4 0 0 0 4 4h20.827L13.764 52.464a.899.899 0 1 0 1.272 1.272L26.1 42.673V51.3a.9.9 0 1 0 1.8 0v-8.627l11.064 11.063a.9.9 0 0 0 1.272 0 .9.9 0 0 0 0-1.272L29.173 41.4H50a4 4 0 0 0 4-4V7.6a4 4 0 0 0-4-4m-1.8 36H5.8a4 4 0 0 1-4-4V9.4a4 4 0 0 1 4-4h42.4a4 4 0 0 1 4 4v26.2a4 4 0 0 1-4 4" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M32.4 37.8a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 1 0-1.8 0v2.7a.9.9 0 0 0 .9.9m3.6-8.1a.9.9 0 0 0-.9.9v6.3a.9.9 0 1 0 1.8 0v-6.3a.9.9 0 0 0-.9-.9m3.6 1.8a.9.9 0 0 0-.9.9v4.5a.9.9 0 1 0 1.8 0v-4.5a.9.9 0 0 0-.9-.9m3.6-6.3a.9.9 0 0 0-.9.9v10.8a.9.9 0 1 0 1.8 0V26.1a.9.9 0 0 0-.9-.9m3.6 3.6a.9.9 0 0 0-.9.9v7.2a.9.9 0 1 0 1.8 0v-7.2a.9.9 0 0 0-.9-.9M7.2 34.2h9a.9.9 0 1 0 0-1.8h-9a.9.9 0 1 0 0 1.8M20.7 36H7.2a.9.9 0 1 0 0 1.8h13.5a.9.9 0 1 0 0-1.8m6.26-19.254a10 10 0 0 0-.073-.637q-.025-.192-.058-.382a11 11 0 0 0-.153-.7q-.037-.156-.08-.311a10 10 0 0 0-.232-.704q-.052-.15-.11-.297a10 10 0 0 0-.285-.636c-.053-.112-.104-.225-.162-.335a10 10 0 0 0-.296-.513c-.082-.137-.16-.275-.249-.409q-.122-.174-.25-.344c-.124-.171-.245-.344-.38-.508l-.002-.002c-.21-.254-.428-.502-.663-.737a10 10 0 0 0-.706-.634l-.035-.032c-.155-.128-.32-.242-.481-.36-.123-.092-.245-.187-.375-.273-.122-.08-.25-.152-.375-.228a10 10 0 0 0-.55-.318c-.099-.051-.2-.096-.3-.145a10 10 0 0 0-.674-.301q-.134-.05-.266-.097a11 11 0 0 0-.732-.242q-.146-.039-.294-.075a10 10 0 0 0-.71-.156q-.191-.033-.384-.058a11 11 0 0 0-.63-.072 10 10 0 0 0-.487-.024c-.107-.003-.21-.016-.318-.016-.081 0-.16.01-.241.013-.08.001-.158-.006-.238-.002l-.355.021-.01.01C10.495 7.674 6.3 12.127 6.3 17.55c0 5.707 4.643 10.35 10.35 10.35 2.591 0 4.957-.964 6.775-2.544.025-.02.056-.03.08-.053.014-.014.018-.033.032-.048a10.32 10.32 0 0 0 3.419-6.817l.017-.014.018-.396c.004-.08-.004-.157-.002-.236 0-.08.011-.16.011-.242 0-.11-.014-.217-.016-.326q-.007-.239-.025-.478zM17.1 9.023q.136.004.268.013a9 9 0 0 1 .886.12q.09.015.18.034.369.077.724.186l.044.013a8.59 8.59 0 0 1 5.61 5.609q.005.022.012.044.109.355.186.723.019.09.034.181a9 9 0 0 1 .12.886q.009.133.013.268H17.1zm-9 8.527c0-4.254 3.127-7.782 7.2-8.433v8.878l.002.012.031.893h.494l5.68 5.679A8.5 8.5 0 0 1 16.65 26.1c-4.714 0-8.55-3.836-8.55-8.55m14.77 5.847L18.373 18.9h6.71a8.5 8.5 0 0 1-2.213 4.497M35.1 13.5h7.2a.9.9 0 1 0 0-1.8h-7.2a.9.9 0 1 0 0 1.8m11.07-1.539a.88.88 0 0 0-.27.639c0 .243.098.477.261.63.17.171.395.27.639.27a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.342-.333-.955-.324-1.269 0M44.1 9h2.7a.9.9 0 1 0 0-1.8h-2.7a.9.9 0 1 0 0 1.8m-9 0h1.8a.9.9 0 1 0 0-1.8h-1.8a.9.9 0 1 0 0 1.8m5.4 0a.93.93 0 0 0 .639-.261.93.93 0 0 0 .261-.639.93.93 0 0 0-.261-.639c-.333-.333-.955-.333-1.278 0a.92.92 0 0 0-.261.639c0 .243.098.468.261.639.17.162.395.261.639.261" })
], -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
const customWizardSocialLink = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "54",
  height: "54"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("g", { fill: "currentColor" }, [
  /* @__PURE__ */ createElementVNode("path", { d: "M50.4 13.5V2.687A2.69 2.69 0 0 0 47.714 0h-3.627A2.69 2.69 0 0 0 41.4 2.687V13.5H4a4 4 0 0 0-4 4v21.7a4 4 0 0 0 4 4h37.4v2.04l3.6 6.3v1.56a.9.9 0 1 0 1.8 0v-1.56l3.6-6.3V43.2a3.6 3.6 0 0 0 3.6-3.6V17.1a3.6 3.6 0 0 0-3.6-3.6m-1.8-3.6h-5.4V8.1h5.4zm-5.4-7.213c0-.49.398-.887.886-.887h3.628c.488 0 .886.398.886.887V6.3h-5.4zM1.8 38.4V18.3a3 3 0 0 1 3-3h33.6a3 3 0 0 1 3 3v20.1a3 3 0 0 1-3 3H4.8a3 3 0 0 1-3-3m44.1 11.086L43.85 45.9h4.1zm2.7-5.386h-5.4V11.7h5.4zm2.7-2.7a.9.9 0 0 1-.9-.9V16.2a.9.9 0 1 1 1.8 0v24.3a.9.9 0 0 1-.9.9" }),
  /* @__PURE__ */ createElementVNode("path", { d: "M35.1 23.4h-2.7a.9.9 0 1 0 0 1.8h2.7a.9.9 0 1 0 0-1.8m-16.2-1.8h2.7a.9.9 0 1 0 0-1.8h-2.7a.9.9 0 1 0 0 1.8m16.2-1.8h-6.3a.9.9 0 1 0 0 1.8h6.3a.9.9 0 1 0 0-1.8m-9.9 1.8a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.95.95 0 0 0-.261-.639c-.342-.333-.945-.333-1.278 0a.95.95 0 0 0-.261.639c0 .234.099.468.261.639a.93.93 0 0 0 .639.261m-3.6 2.7a.9.9 0 0 0 .9.9h6.3a.9.9 0 1 0 0-1.8h-6.3a.9.9 0 0 0-.9.9m-2.7.9a.95.95 0 0 0 .639-.261.95.95 0 0 0 .261-.639.93.93 0 0 0-.261-.639c-.342-.333-.945-.333-1.278 0A.93.93 0 0 0 18 24.3c0 .234.099.468.261.639a.93.93 0 0 0 .639.261m-9-4.41v-.99a.9.9 0 1 0-1.8 0v.994c-.982.2-1.877.721-2.536 1.502a3.1 3.1 0 0 0-.715 2.342 3.28 3.28 0 0 0 1.245 2.242L8.1 28.44v4.894A2.7 2.7 0 0 1 6.3 30.8a.9.9 0 1 0-1.8 0 4.51 4.51 0 0 0 3.6 4.409V36a.9.9 0 1 0 1.8 0v-.794c.982-.2 1.877-.72 2.537-1.501a3.1 3.1 0 0 0 .714-2.345 3.28 3.28 0 0 0-1.245-2.239L9.9 27.56v-4.894a2.7 2.7 0 0 1 1.8 2.534.9.9 0 1 0 1.8 0 4.51 4.51 0 0 0-3.6-4.41m.9 9.752c.315.243.52.611.56 1.006.04.369-.067.722-.297.994-.313.37-.718.63-1.163.788v-3.49l.9.701zm-3.6-5.083a1.48 1.48 0 0 1-.56-1.008c-.038-.368.067-.72.297-.993.313-.37.718-.63 1.163-.788v3.49l-.9-.7zm14.53 4.601c-1.97 1.026-2.635 2.989-2.876 5.024l-1.117-.936c-.882-.74-2.162.527-1.272 1.272l2.525 2.116c.592.497 1.51.183 1.536-.636.066-1.95.158-4.268 2.114-5.286 1.026-.534.117-2.089-.91-1.554m5.985 3.59c-1.246.289-2.664 1.875-3.542.096-.512-1.04-2.065-.128-1.554.908.465.944 1.35 1.604 2.402 1.737a3 3 0 0 0 1.52-.203c.367-.143 1.742-1.176 2.04-.645.565 1.011 2.12.104 1.554-.908-.484-.865-1.462-1.207-2.42-.985" })
], -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const customWizardSubmit = { render };
const _sfc_main$3 = {
  __name: "DemoFormWizardIconsBasic",
  __ssrInlineRender: true,
  setup(__props) {
    const iconsSteps = [
      {
        title: "Account Details",
        icon: customWizardAccount
      },
      {
        title: "Personal Info",
        icon: customWizardPersonal
      },
      {
        title: "Address",
        icon: customWizardAddress
      },
      {
        title: "Social Links",
        icon: customWizardSocialLink
      },
      {
        title: "Review & Submit",
        icon: customWizardSubmit
      }
    ];
    const currentStep = ref(0);
    const isPasswordVisible = ref(false);
    const isCPasswordVisible = ref(false);
    const formData = ref({
      username: "johndoe",
      email: "john.doe@email.com",
      password: "johndoe@J2",
      cPassword: "johndoe@J2",
      firstName: "John",
      lastName: "Doe",
      country: "UK",
      language: "English",
      address: "98 Borough bridge Road, Birmingham",
      landmark: "Borough bridge",
      pincode: "658921",
      city: "Birmingham",
      twitter: "https://twitter.com/abc",
      facebook: "https://facebook.com/abc",
      googlePlus: "https://plus.google.com/abc",
      linkedIn: "https://linkedin.com/abc"
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
                    items: iconsSteps,
                    align: "center"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppStepper, {
                      "current-step": unref(currentStep),
                      "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                      items: iconsSteps,
                      align: "center"
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
                                                _push8(`<h6 class="text-h6"${_scopeId7}> Address </h6><p class="text-sm mb-0"${_scopeId7}> Enter Your Address. </p>`);
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6" }, " Address "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address. ")
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
                                                  modelValue: unref(formData).address,
                                                  "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                                  placeholder: "98 Borough bridge Road, Birmingham",
                                                  label: "Address"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).address,
                                                    "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                                    placeholder: "98 Borough bridge Road, Birmingham",
                                                    label: "Address"
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
                                                  modelValue: unref(formData).landmark,
                                                  "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                                                  placeholder: "Borough bridge",
                                                  label: "Landmark"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).landmark,
                                                    "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                                                    placeholder: "Borough bridge",
                                                    label: "Landmark"
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
                                                  modelValue: unref(formData).pincode,
                                                  "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                                  placeholder: "658921",
                                                  label: "Pincode",
                                                  type: "number"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).pincode,
                                                    "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                                    placeholder: "658921",
                                                    label: "Pincode",
                                                    type: "number"
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
                                                  modelValue: unref(formData).city,
                                                  "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                                  placeholder: "New York",
                                                  label: "City"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(formData).city,
                                                    "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                                    placeholder: "New York",
                                                    label: "City"
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
                                                createVNode("h6", { class: "text-h6" }, " Address "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address. ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(formData).address,
                                                  "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                                  placeholder: "98 Borough bridge Road, Birmingham",
                                                  label: "Address"
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
                                                  modelValue: unref(formData).landmark,
                                                  "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                                                  placeholder: "Borough bridge",
                                                  label: "Landmark"
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
                                                  modelValue: unref(formData).pincode,
                                                  "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                                  placeholder: "658921",
                                                  label: "Pincode",
                                                  type: "number"
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
                                                  modelValue: unref(formData).city,
                                                  "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                                  placeholder: "New York",
                                                  label: "City"
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
                                              createVNode("h6", { class: "text-h6" }, " Address "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address. ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(formData).address,
                                                "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                                placeholder: "98 Borough bridge Road, Birmingham",
                                                label: "Address"
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
                                                modelValue: unref(formData).landmark,
                                                "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                                                placeholder: "Borough bridge",
                                                label: "Landmark"
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
                                                modelValue: unref(formData).pincode,
                                                "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                                placeholder: "658921",
                                                label: "Pincode",
                                                type: "number"
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
                                                modelValue: unref(formData).city,
                                                "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                                placeholder: "New York",
                                                label: "City"
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
                              _push5(ssrRenderComponent(VWindowItem, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="text-base"${_scopeId5}><h6 class="text-base font-weight-medium mb-2"${_scopeId5}> Account </h6><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).username)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).email)}</p>`);
                                    _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                    _push6(`<h6 class="text-base font-weight-medium mb-2"${_scopeId5}> Personal Info </h6><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).firstName)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).lastName)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).country)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).language)}</p>`);
                                    _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                    _push6(`<h6 class="text-base font-weight-medium mb-2"${_scopeId5}> Address </h6><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).address)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).landmark)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).pincode)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).city)}</p>`);
                                    _push6(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent6, _scopeId5));
                                    _push6(`<h6 class="text-base font-weight-medium mb-2"${_scopeId5}> Social Links </h6><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).twitter)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).facebook)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).googlePlus)}</p><p class="mb-1"${_scopeId5}>${ssrInterpolate(unref(formData).linkedIn)}</p></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "text-base" }, [
                                        createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).username), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).email), 1),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).firstName), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).lastName), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).country), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).language), 1),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).address), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).landmark), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).pincode), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).city), 1),
                                        createVNode(VDivider, { class: "my-4" }),
                                        createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).twitter), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).facebook), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).googlePlus), 1),
                                        createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).linkedIn), 1)
                                      ])
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
                                            createVNode("h6", { class: "text-h6" }, " Address "),
                                            createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address. ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(formData).address,
                                              "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                              placeholder: "98 Borough bridge Road, Birmingham",
                                              label: "Address"
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
                                              modelValue: unref(formData).landmark,
                                              "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                                              placeholder: "Borough bridge",
                                              label: "Landmark"
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
                                              modelValue: unref(formData).pincode,
                                              "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                              placeholder: "658921",
                                              label: "Pincode",
                                              type: "number"
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
                                              modelValue: unref(formData).city,
                                              "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                              placeholder: "New York",
                                              label: "City"
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
                                }),
                                createVNode(VWindowItem, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "text-base" }, [
                                      createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).username), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).email), 1),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).firstName), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).lastName), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).country), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).language), 1),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).address), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).landmark), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).pincode), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).city), 1),
                                      createVNode(VDivider, { class: "my-4" }),
                                      createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).twitter), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).facebook), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).googlePlus), 1),
                                      createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).linkedIn), 1)
                                    ])
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
                        if (iconsSteps.length - 1 === unref(currentStep)) {
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
                                          createVNode("h6", { class: "text-h6" }, " Address "),
                                          createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(formData).address,
                                            "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                            placeholder: "98 Borough bridge Road, Birmingham",
                                            label: "Address"
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
                                            modelValue: unref(formData).landmark,
                                            "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                                            placeholder: "Borough bridge",
                                            label: "Landmark"
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
                                            modelValue: unref(formData).pincode,
                                            "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                            placeholder: "658921",
                                            label: "Pincode",
                                            type: "number"
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
                                            modelValue: unref(formData).city,
                                            "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                            placeholder: "New York",
                                            label: "City"
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
                              }),
                              createVNode(VWindowItem, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "text-base" }, [
                                    createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).username), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).email), 1),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).firstName), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).lastName), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).country), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).language), 1),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).address), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).landmark), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).pincode), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).city), 1),
                                    createVNode(VDivider, { class: "my-4" }),
                                    createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).twitter), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).facebook), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).googlePlus), 1),
                                    createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).linkedIn), 1)
                                  ])
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
                            iconsSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
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
                                        createVNode("h6", { class: "text-h6" }, " Address "),
                                        createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(formData).address,
                                          "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                          placeholder: "98 Borough bridge Road, Birmingham",
                                          label: "Address"
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
                                          modelValue: unref(formData).landmark,
                                          "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                                          placeholder: "Borough bridge",
                                          label: "Landmark"
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
                                          modelValue: unref(formData).pincode,
                                          "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                          placeholder: "658921",
                                          label: "Pincode",
                                          type: "number"
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
                                          modelValue: unref(formData).city,
                                          "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                          placeholder: "New York",
                                          label: "City"
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
                            }),
                            createVNode(VWindowItem, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "text-base" }, [
                                  createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).username), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).email), 1),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).firstName), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).lastName), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).country), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).language), 1),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).address), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).landmark), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).pincode), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).city), 1),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).twitter), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).facebook), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).googlePlus), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).linkedIn), 1)
                                ])
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
                          iconsSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
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
                    items: iconsSteps,
                    align: "center"
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
                                      createVNode("h6", { class: "text-h6" }, " Address "),
                                      createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(formData).address,
                                        "onUpdate:modelValue": ($event) => unref(formData).address = $event,
                                        placeholder: "98 Borough bridge Road, Birmingham",
                                        label: "Address"
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
                                        modelValue: unref(formData).landmark,
                                        "onUpdate:modelValue": ($event) => unref(formData).landmark = $event,
                                        placeholder: "Borough bridge",
                                        label: "Landmark"
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
                                        modelValue: unref(formData).pincode,
                                        "onUpdate:modelValue": ($event) => unref(formData).pincode = $event,
                                        placeholder: "658921",
                                        label: "Pincode",
                                        type: "number"
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
                                        modelValue: unref(formData).city,
                                        "onUpdate:modelValue": ($event) => unref(formData).city = $event,
                                        placeholder: "New York",
                                        label: "City"
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
                          }),
                          createVNode(VWindowItem, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "text-base" }, [
                                createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).username), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).email), 1),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).firstName), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).lastName), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).country), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).language), 1),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).address), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).landmark), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).pincode), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).city), 1),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).twitter), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).facebook), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).googlePlus), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(formData).linkedIn), 1)
                              ])
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
                        iconsSteps.length - 1 === unref(currentStep) ? (openBlock(), createBlock(VBtn, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-wizard/form-wizard-icons/DemoFormWizardIconsBasic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "DemoFormWizardIconsValidation",
  __ssrInlineRender: true,
  setup(__props) {
    const iconsSteps = [
      {
        title: "Account Details",
        icon: customWizardAccount
      },
      {
        title: "Personal Info",
        icon: customWizardPersonal
      },
      {
        title: "Address",
        icon: customWizardAddress
      },
      {
        title: "Social Links",
        icon: customWizardSocialLink
      },
      {
        title: "Review & Submit",
        icon: customWizardSubmit
      }
    ];
    const currentStep = ref(0);
    const isPasswordVisible = ref(false);
    const isCPasswordVisible = ref(false);
    const isCurrentStepValid = ref(true);
    const refAccountForm = ref();
    const refPersonalForm = ref();
    const refSocialLinkForm = ref();
    const refAddressForm = ref();
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
    const addressForm = ref({
      address: "",
      landmark: "",
      city: "",
      pincode: ""
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
    const validateAddressForm = () => {
      var _a;
      (_a = refAddressForm.value) == null ? void 0 : _a.validate().then((valid) => {
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
          currentStep.value++;
          isCurrentStepValid.value = true;
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
                    items: iconsSteps,
                    "is-active-step-valid": unref(isCurrentStepValid),
                    align: "center"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_AppStepper, {
                      "current-step": unref(currentStep),
                      "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                      items: iconsSteps,
                      "is-active-step-valid": unref(isCurrentStepValid),
                      align: "center"
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
                                                  placeholder: "············",
                                                  label: "Password",
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
                                                    placeholder: "············",
                                                    label: "Password",
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
                                                  placeholder: "············",
                                                  label: "Confirm Password",
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
                                                    placeholder: "············",
                                                    label: "Confirm Password",
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
                                                  placeholder: "············",
                                                  label: "Password",
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
                                                  placeholder: "············",
                                                  label: "Confirm Password",
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
                                                placeholder: "············",
                                                label: "Password",
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
                                                placeholder: "············",
                                                label: "Confirm Password",
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
                                              placeholder: "············",
                                              label: "Password",
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
                                              placeholder: "············",
                                              label: "Confirm Password",
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
                                                  variant: "outlined",
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
                                                      variant: "outlined",
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
                                                    variant: "outlined",
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
                                                  variant: "outlined",
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
                                                variant: "outlined",
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
                                ref_key: "refAddressForm",
                                ref: refAddressForm,
                                onSubmit: validateAddressForm
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCol, { cols: "12" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<h6 class="text-h6"${_scopeId7}> Address </h6><p class="text-sm mb-0"${_scopeId7}> Enter Your Address </p>`);
                                              } else {
                                                return [
                                                  createVNode("h6", { class: "text-h6" }, " Address "),
                                                  createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address ")
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
                                                  modelValue: unref(addressForm).address,
                                                  "onUpdate:modelValue": ($event) => unref(addressForm).address = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "98 Borough bridge Road, Birmingham",
                                                  label: "Address"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(addressForm).address,
                                                    "onUpdate:modelValue": ($event) => unref(addressForm).address = $event,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "98 Borough bridge Road, Birmingham",
                                                    label: "Address"
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
                                                  modelValue: unref(addressForm).landmark,
                                                  "onUpdate:modelValue": ($event) => unref(addressForm).landmark = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Borough bridge",
                                                  label: "Landmark"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(addressForm).landmark,
                                                    "onUpdate:modelValue": ($event) => unref(addressForm).landmark = $event,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "Borough bridge",
                                                    label: "Landmark"
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
                                                  modelValue: unref(addressForm).pincode,
                                                  "onUpdate:modelValue": ($event) => unref(addressForm).pincode = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "658921",
                                                  label: "Pincode",
                                                  type: "number"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(addressForm).pincode,
                                                    "onUpdate:modelValue": ($event) => unref(addressForm).pincode = $event,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "658921",
                                                    label: "Pincode",
                                                    type: "number"
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
                                                  modelValue: unref(addressForm).city,
                                                  "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "New York",
                                                  label: "City"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(addressForm).city,
                                                    "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                                                    rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                    placeholder: "New York",
                                                    label: "City"
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
                                                  variant: "outlined",
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
                                                      variant: "outlined",
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
                                                createVNode("h6", { class: "text-h6" }, " Address "),
                                                createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, {
                                              cols: "12",
                                              md: "6"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VTextField, {
                                                  modelValue: unref(addressForm).address,
                                                  "onUpdate:modelValue": ($event) => unref(addressForm).address = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "98 Borough bridge Road, Birmingham",
                                                  label: "Address"
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
                                                  modelValue: unref(addressForm).landmark,
                                                  "onUpdate:modelValue": ($event) => unref(addressForm).landmark = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "Borough bridge",
                                                  label: "Landmark"
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
                                                  modelValue: unref(addressForm).pincode,
                                                  "onUpdate:modelValue": ($event) => unref(addressForm).pincode = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "658921",
                                                  label: "Pincode",
                                                  type: "number"
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
                                                  modelValue: unref(addressForm).city,
                                                  "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                  placeholder: "New York",
                                                  label: "City"
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCol, { cols: "12" }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                  createVNode(VBtn, {
                                                    color: "secondary",
                                                    variant: "outlined",
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
                                              createVNode("h6", { class: "text-h6" }, " Address "),
                                              createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, {
                                            cols: "12",
                                            md: "6"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VTextField, {
                                                modelValue: unref(addressForm).address,
                                                "onUpdate:modelValue": ($event) => unref(addressForm).address = $event,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "98 Borough bridge Road, Birmingham",
                                                label: "Address"
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
                                                modelValue: unref(addressForm).landmark,
                                                "onUpdate:modelValue": ($event) => unref(addressForm).landmark = $event,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "Borough bridge",
                                                label: "Landmark"
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
                                                modelValue: unref(addressForm).pincode,
                                                "onUpdate:modelValue": ($event) => unref(addressForm).pincode = $event,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "658921",
                                                label: "Pincode",
                                                type: "number"
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
                                                modelValue: unref(addressForm).city,
                                                "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                                                rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                                placeholder: "New York",
                                                label: "City"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCol, { cols: "12" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                                createVNode(VBtn, {
                                                  color: "secondary",
                                                  variant: "outlined",
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
                                  ref_key: "refAddressForm",
                                  ref: refAddressForm,
                                  onSubmit: withModifiers(validateAddressForm, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, null, {
                                      default: withCtx(() => [
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("h6", { class: "text-h6" }, " Address "),
                                            createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, {
                                          cols: "12",
                                          md: "6"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VTextField, {
                                              modelValue: unref(addressForm).address,
                                              "onUpdate:modelValue": ($event) => unref(addressForm).address = $event,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "98 Borough bridge Road, Birmingham",
                                              label: "Address"
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
                                              modelValue: unref(addressForm).landmark,
                                              "onUpdate:modelValue": ($event) => unref(addressForm).landmark = $event,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "Borough bridge",
                                              label: "Landmark"
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
                                              modelValue: unref(addressForm).pincode,
                                              "onUpdate:modelValue": ($event) => unref(addressForm).pincode = $event,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "658921",
                                              label: "Pincode",
                                              type: "number"
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
                                              modelValue: unref(addressForm).city,
                                              "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                                              rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                              placeholder: "New York",
                                              label: "City"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCol, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                              createVNode(VBtn, {
                                                color: "secondary",
                                                variant: "outlined",
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
                                                  placeholder: "https://linkedin.com/abc",
                                                  rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator), "urlValidator" in _ctx ? _ctx.urlValidator : unref(urlValidator)],
                                                  label: "LinkedIn"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(VTextField, {
                                                    modelValue: unref(socialForm).linkedIn,
                                                    "onUpdate:modelValue": ($event) => unref(socialForm).linkedIn = $event,
                                                    placeholder: "https://linkedin.com/abc",
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
                                                  variant: "outlined",
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
                                                      variant: "outlined",
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
                                                  placeholder: "https://linkedin.com/abc",
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
                                                    variant: "outlined",
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
                                                placeholder: "https://linkedin.com/abc",
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
                                                  variant: "outlined",
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
                                              placeholder: "https://linkedin.com/abc",
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
                                                variant: "outlined",
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
                              _push5(`<div class="text-base"${_scopeId4}><h6 class="text-base font-weight-medium mb-2"${_scopeId4}> Account </h6><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(accountForm).username)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(accountForm).email)}</p>`);
                              _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              _push5(`<h6 class="text-base font-weight-medium mb-2"${_scopeId4}> Personal Info </h6><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(personalForm).firstName)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(personalForm).lastName)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(personalForm).country)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(personalForm).language)}</p>`);
                              _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              _push5(`<h6 class="text-base font-weight-medium mb-2"${_scopeId4}> Address </h6><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(addressForm).address)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(addressForm).landmark)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(addressForm).pincode)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(addressForm).city)}</p>`);
                              _push5(ssrRenderComponent(VDivider, { class: "my-4" }, null, _parent5, _scopeId4));
                              _push5(`<h6 class="text-base font-weight-medium mb-2"${_scopeId4}> Social Links </h6><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(socialForm).twitter)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(socialForm).facebook)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(socialForm).googlePlus)}</p><p class="mb-1"${_scopeId4}>${ssrInterpolate(unref(socialForm).linkedIn)}</p></div><div${_scopeId4}><div class="d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8"${_scopeId4}>`);
                              _push5(ssrRenderComponent(VBtn, {
                                color: "secondary",
                                variant: "outlined",
                                onClick: ($event) => currentStep.value--
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-arrow-left-line",
                                      start: "",
                                      class: "flip-in-rtl"
                                    }, null, _parent6, _scopeId5));
                                    _push6(` Previous `);
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
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                color: "success",
                                type: "submit"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Submit `);
                                    _push6(ssrRenderComponent(VIcon, {
                                      icon: "ri-check-line",
                                      end: "",
                                      class: "flip-in-rtl"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createTextVNode(" Submit "),
                                      createVNode(VIcon, {
                                        icon: "ri-check-line",
                                        end: "",
                                        class: "flip-in-rtl"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "text-base" }, [
                                  createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(accountForm).username), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(accountForm).email), 1),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).firstName), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).lastName), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).country), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).language), 1),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).address), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).landmark), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).pincode), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).city), 1),
                                  createVNode(VDivider, { class: "my-4" }),
                                  createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).twitter), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).facebook), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).googlePlus), 1),
                                  createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).linkedIn), 1)
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                    createVNode(VBtn, {
                                      color: "secondary",
                                      variant: "outlined",
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
                                        createTextVNode(" Submit "),
                                        createVNode(VIcon, {
                                          icon: "ri-check-line",
                                          end: "",
                                          class: "flip-in-rtl"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
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
                                            placeholder: "············",
                                            label: "Password",
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
                                            placeholder: "············",
                                            label: "Confirm Password",
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
                                              variant: "outlined",
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
                                ref_key: "refAddressForm",
                                ref: refAddressForm,
                                onSubmit: withModifiers(validateAddressForm, ["prevent"])
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, null, {
                                    default: withCtx(() => [
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("h6", { class: "text-h6" }, " Address "),
                                          createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(addressForm).address,
                                            "onUpdate:modelValue": ($event) => unref(addressForm).address = $event,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "98 Borough bridge Road, Birmingham",
                                            label: "Address"
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
                                            modelValue: unref(addressForm).landmark,
                                            "onUpdate:modelValue": ($event) => unref(addressForm).landmark = $event,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "Borough bridge",
                                            label: "Landmark"
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
                                            modelValue: unref(addressForm).pincode,
                                            "onUpdate:modelValue": ($event) => unref(addressForm).pincode = $event,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "658921",
                                            label: "Pincode",
                                            type: "number"
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
                                            modelValue: unref(addressForm).city,
                                            "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                                            rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                            placeholder: "New York",
                                            label: "City"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                            createVNode(VBtn, {
                                              color: "secondary",
                                              variant: "outlined",
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
                                            placeholder: "https://linkedin.com/abc",
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
                                              variant: "outlined",
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
                              createVNode("div", { class: "text-base" }, [
                                createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(accountForm).username), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(accountForm).email), 1),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).firstName), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).lastName), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).country), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).language), 1),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).address), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).landmark), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).pincode), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).city), 1),
                                createVNode(VDivider, { class: "my-4" }),
                                createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).twitter), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).facebook), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).googlePlus), 1),
                                createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).linkedIn), 1)
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                  createVNode(VBtn, {
                                    color: "secondary",
                                    variant: "outlined",
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
                                      createTextVNode(" Submit "),
                                      createVNode(VIcon, {
                                        icon: "ri-check-line",
                                        end: "",
                                        class: "flip-in-rtl"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
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
                                          placeholder: "············",
                                          label: "Password",
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
                                          placeholder: "············",
                                          label: "Confirm Password",
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
                                            variant: "outlined",
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
                              ref_key: "refAddressForm",
                              ref: refAddressForm,
                              onSubmit: withModifiers(validateAddressForm, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("h6", { class: "text-h6" }, " Address "),
                                        createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(addressForm).address,
                                          "onUpdate:modelValue": ($event) => unref(addressForm).address = $event,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "98 Borough bridge Road, Birmingham",
                                          label: "Address"
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
                                          modelValue: unref(addressForm).landmark,
                                          "onUpdate:modelValue": ($event) => unref(addressForm).landmark = $event,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "Borough bridge",
                                          label: "Landmark"
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
                                          modelValue: unref(addressForm).pincode,
                                          "onUpdate:modelValue": ($event) => unref(addressForm).pincode = $event,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "658921",
                                          label: "Pincode",
                                          type: "number"
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
                                          modelValue: unref(addressForm).city,
                                          "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                                          rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                          placeholder: "New York",
                                          label: "City"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                          createVNode(VBtn, {
                                            color: "secondary",
                                            variant: "outlined",
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
                                          placeholder: "https://linkedin.com/abc",
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
                                            variant: "outlined",
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
                            createVNode("div", { class: "text-base" }, [
                              createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(accountForm).username), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(accountForm).email), 1),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).firstName), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).lastName), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).country), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).language), 1),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).address), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).landmark), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).pincode), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).city), 1),
                              createVNode(VDivider, { class: "my-4" }),
                              createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).twitter), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).facebook), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).googlePlus), 1),
                              createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).linkedIn), 1)
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                createVNode(VBtn, {
                                  color: "secondary",
                                  variant: "outlined",
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
                                    createTextVNode(" Submit "),
                                    createVNode(VIcon, {
                                      icon: "ri-check-line",
                                      end: "",
                                      class: "flip-in-rtl"
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
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
                    items: iconsSteps,
                    "is-active-step-valid": unref(isCurrentStepValid),
                    align: "center"
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
                                        placeholder: "············",
                                        label: "Password",
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
                                        placeholder: "············",
                                        label: "Confirm Password",
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
                                          variant: "outlined",
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
                            ref_key: "refAddressForm",
                            ref: refAddressForm,
                            onSubmit: withModifiers(validateAddressForm, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("h6", { class: "text-h6" }, " Address "),
                                      createVNode("p", { class: "text-sm mb-0" }, " Enter Your Address ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(addressForm).address,
                                        "onUpdate:modelValue": ($event) => unref(addressForm).address = $event,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "98 Borough bridge Road, Birmingham",
                                        label: "Address"
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
                                        modelValue: unref(addressForm).landmark,
                                        "onUpdate:modelValue": ($event) => unref(addressForm).landmark = $event,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "Borough bridge",
                                        label: "Landmark"
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
                                        modelValue: unref(addressForm).pincode,
                                        "onUpdate:modelValue": ($event) => unref(addressForm).pincode = $event,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "658921",
                                        label: "Pincode",
                                        type: "number"
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
                                        modelValue: unref(addressForm).city,
                                        "onUpdate:modelValue": ($event) => unref(addressForm).city = $event,
                                        rules: ["requiredValidator" in _ctx ? _ctx.requiredValidator : unref(requiredValidator)],
                                        placeholder: "New York",
                                        label: "City"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                                        createVNode(VBtn, {
                                          color: "secondary",
                                          variant: "outlined",
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
                                        placeholder: "https://linkedin.com/abc",
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
                                          variant: "outlined",
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
                          createVNode("div", { class: "text-base" }, [
                            createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Account "),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(accountForm).username), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(accountForm).email), 1),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Personal Info "),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).firstName), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).lastName), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).country), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(personalForm).language), 1),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Address "),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).address), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).landmark), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).pincode), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(addressForm).city), 1),
                            createVNode(VDivider, { class: "my-4" }),
                            createVNode("h6", { class: "text-base font-weight-medium mb-2" }, " Social Links "),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).twitter), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).facebook), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).googlePlus), 1),
                            createVNode("p", { class: "mb-1" }, toDisplayString(unref(socialForm).linkedIn), 1)
                          ]),
                          createVNode("div", null, [
                            createVNode("div", { class: "d-flex flex-wrap gap-4 justify-sm-space-between justify-center mt-8" }, [
                              createVNode(VBtn, {
                                color: "secondary",
                                variant: "outlined",
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
                                  createTextVNode(" Submit "),
                                  createVNode(VIcon, {
                                    icon: "ri-check-line",
                                    end: "",
                                    class: "flip-in-rtl"
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-wizard/form-wizard-icons/DemoFormWizardIconsValidation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DemoFormWizardIconsVertical",
  __ssrInlineRender: true,
  setup(__props) {
    const numberedSteps = [
      {
        title: "Account Details",
        icon: "ri-article-line"
      },
      {
        title: "Personal Info",
        icon: "ri-user-line"
      },
      {
        title: "Social Links",
        icon: "ri-links-line"
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
                                items: numberedSteps,
                                "icon-size": "24",
                                class: "stepper-icon-step-bg"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_AppStepper, {
                                  "current-step": unref(currentStep),
                                  "onUpdate:currentStep": ($event) => isRef(currentStep) ? currentStep.value = $event : null,
                                  direction: "vertical",
                                  items: numberedSteps,
                                  "icon-size": "24",
                                  class: "stepper-icon-step-bg"
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
                                items: numberedSteps,
                                "icon-size": "24",
                                class: "stepper-icon-step-bg"
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
                                                              label: "Password",
                                                              placeholder: "············",
                                                              type: unref(isPasswordVisible) ? "text" : "password",
                                                              "append-inner-icon": unref(isPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                              "onClick:appendInner": ($event) => isPasswordVisible.value = !unref(isPasswordVisible)
                                                            }, null, _parent10, _scopeId9));
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
                                                              label: "Confirm Password",
                                                              placeholder: "············",
                                                              type: unref(isCPasswordVisible) ? "text" : "password",
                                                              "append-inner-icon": unref(isCPasswordVisible) ? "ri-eye-off-line" : "ri-eye-line",
                                                              "onClick:appendInner": ($event) => isCPasswordVisible.value = !unref(isCPasswordVisible)
                                                            }, null, _parent10, _scopeId9));
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
                              items: numberedSteps,
                              "icon-size": "24",
                              class: "stepper-icon-step-bg"
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
                            items: numberedSteps,
                            "icon-size": "24",
                            class: "stepper-icon-step-bg"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/views/demos/forms/form-wizard/form-wizard-icons/DemoFormWizardIconsVertical.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "form-wizard-icons",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/forms/form-wizard-icons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
