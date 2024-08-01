<script setup lang="ts">
import registerMultiStepsIllustration from '@images/pages/register-multi-step-illustration.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'
import { useForm } from "laravel-precognition-vue-inertia"
import Layout from '@/layouts/blank.vue'
import LoadingDialog from '@/pages/pages/dialog-examples/CreateStoreLoader.vue'
import { ref } from "vue"
import { router} from '@inertiajs/vue3'
import {VForm} from "vuetify/components/VForm"

import illustrationJohn from '@images/pages/illustration-john.png'

defineOptions({ layout: Layout })

const currentStep = ref(0)
const isCurrentStepValid = ref(true);
const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const isSubmitting = ref(false);
const showLoadingDialog = ref(false);
const commandMessage = ref(''); // Holds the message to be shown in the dialog

const items = [
  {
    title: 'Store',
    subtitle: 'Store Details',
  },
  {
    title: 'Personal',
    subtitle: 'Enter Information',
  },
  {
    title: 'Submit',
    subtitle: 'Create Store',
  },
]

const refStoreForm = ref<VForm>()
const refAccountForm = ref<VForm>()
const refSubmitForm = ref<VForm>()

const form = useForm('post', route('user.store'), {
  store_name:'',
  first_name:'',
  last_name: '',
  email: '',
  phone_number: '',
  password: '',
  password_confirmation: '',
})

const storeForm = useForm('post', route('user.store'), {
  store_name:'',
});

const accountForm = ref({
  first_name:'',
  last_name: '',
  email: '',
  phone_number: '',
  password: '',
  password_confirmation: '',
});

const validateStoreForm = () => {
  refStoreForm.value?.validate().then(valid => {
    if (valid.valid && storeForm.valid('store_name')) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}

const validateAccountForm = () => {
  refAccountForm.value?.validate().then(valid => {
    if (valid.valid) {
      currentStep.value++
      isCurrentStepValid.value = true
    }
    else { isCurrentStepValid.value = false }
  })
}


const validateSubmitForm = async () => {
  const valid = await refSubmitForm.value?.validate();

  if (valid) {
    const combinedData = {
      ...storeForm.data(),
      ...accountForm.value,
    };

    showLoadingDialog.value = true;
    isSubmitting.value = true;

    commandMessage.value = 'Initializing store...'; // Set initial message

    setTimeout(() => {
      commandMessage.value = 'Wait a moment, Your store is almost finished!';
    }, 1500);

    setTimeout(() => {
      commandMessage.value = 'Your Store is ready to go!';
    }, 2500); // 2000 milliseconds = 2 seconds

    router.post(route('user.store'), combinedData, {
      onStart: () => {
        // Handle start
      },
      onSuccess: () => {
        // Handle success
        showLoadingDialog.value = false;
        isSubmitting.value = false;
        commandMessage.value = 'Store created successfully!';
        // You can add additional success handling here, like redirecting the user
      },
      onError: (errors) => {
        // Handle error
        console.error('Validation errors:', errors);
        showLoadingDialog.value = false;
        isSubmitting.value = false;
        commandMessage.value = 'There was an error creating the store.';
      },
      onFinish: () => {
        // Handle finish
      },
    });
  }
};

const onSubmit = async () => {
  try {
    showLoadingDialog.value = true;
    isSubmitting.value = true;

    await form.post(route('user.store'), {
      onStart: () => {
        commandMessage.value = 'Initializing store...'; // Set initial message

        setTimeout(() => {
          commandMessage.value = 'Wait a moment, Your store is almost finished!';
        }, 1500);

        setTimeout(() => {
          commandMessage.value = 'Your Store is ready to go!';
        }, 2500); // 2000 milliseconds = 2 seconds
      },
      onSuccess: () => {
        // Hide the loading dialog on successful submission
        showLoadingDialog.value = false;
        isSubmitting.value = false;
        // You can add additional success handling here, like redirecting the user
      },
      onError: (errors) => {
        // Handle validation errors here
        console.error('Validation errors:', errors);
        showLoadingDialog.value = false; // Hide the dialog on error
        isSubmitting.value = false;
      }
    });
  } catch (error) {
    // Handle any error that occurred during form submission
    console.error('Submission error:', error);
    showLoadingDialog.value = false; // Hide the dialog on error
    isSubmitting.value = false;
  }
};


// const categories = [
//   {
//     icon: 'ri-bar-chart-box-line',
//     color: 'info',
//     title: 'CRM Application',
//     subtitle: 'Scales with any business',
//     slug: 'crm-application',
//   },
//   {
//     icon: 'ri-shopping-cart-line',
//     color: 'success',
//     title: 'Ecommerce Platforms',
//     subtitle: 'Grow Your Business With App',
//     slug: 'ecommerce-application',
//   },
//   {
//     icon: 'ri-video-upload-line',
//     color: 'error',
//     title: 'Online Learning platform',
//     subtitle: 'Start learning today',
//     slug: 'online-learning-application',
//   },
// ]


// const createAppData = ref({
//   category: 'crm-application',
//   framework: 'vue-framework',
//   database: 'firebase-database',
//   cardNumber: null,
//   cardName: '',
//   cardExpiry: '',
//   cardCvv: '',
//   isSave: false,
// })

</script>

<template>
  <Link :href="route('welcome')">
    <div class="app-logo auth-logo">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="app-logo-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </Link>

  <VRow
      no-gutters
      class="auth-wrapper"
  >
    <VCol
        md="4"
        class="d-none d-md-flex align-center"
    >
      <!-- here your illustration -->
      <VImg
          :src="registerMultiStepsIllustration"
          class="auth-illustration"
          height="560px"
      />
    </VCol>

    <VCol
        cols="12"
        md="8"
        class="auth-card-v2 d-flex align-center justify-center pa-10"
        style="background-color: rgb(var(--v-theme-surface));"
    >
      <VCard
          flat
          class="mt-12"
      >
        <AppStepper
            v-model:current-step="currentStep"
            :items="items"
            :direction="$vuetify.display.smAndUp ? 'horizontal' : 'vertical'"
            class="mb-12"
        />

        <VWindow
            v-model="currentStep"
            class="disable-tab-transition"
            style="max-inline-size: 685px;"
        >
            <VWindowItem>
              <VForm ref="refStoreForm" @submit.prevent="validateStoreForm">
              <h4 class="text-h4 mb-1">
                Store Information
              </h4>
              <p class="text-body-1 mb-5">
                Enter Your Store Name
              </p>
              <VTextField
                  v-model="storeForm.store_name"
                  label="Store Name"
                  placeholder="MyStore"
                  @input="storeForm.validate('store_name')"
                  :rules="[requiredValidator, alphaDashValidator]"
                  :error-messages="storeForm.errors.store_name"
              />
<!--              <h5 class="text-h5 mb-4 mt-6">-->
<!--                Category-->
<!--              </h5>-->
<!--              <VRadioGroup v-model="createAppData.category">-->
<!--                <VList class="card-list">-->
<!--                  <VListItem-->
<!--                      v-for="category in categories"-->
<!--                      :key="category.title"-->
<!--                      @click="createAppData.category = category.slug"-->
<!--                  >-->
<!--                    <template #prepend>-->
<!--                      <VAvatar-->
<!--                          size="46"-->
<!--                          rounded-->
<!--                          variant="tonal"-->
<!--                          :color="category.color"-->
<!--                          class="me-1"-->
<!--                      >-->
<!--                        <VIcon-->
<!--                            :icon="category.icon"-->
<!--                            size="30"-->
<!--                        />-->
<!--                      </VAvatar>-->
<!--                    </template>-->

<!--                    <VListItemTitle class="font-weight-medium mb-1">-->
<!--                      {{ category.title }}-->
<!--                    </VListItemTitle>-->
<!--                    <VListItemSubtitle class="text-body-2 me-2">-->
<!--                      {{ category.subtitle }}-->
<!--                    </VListItemSubtitle>-->

<!--                    <template #append>-->
<!--                      <VRadio :value="category.slug" />-->
<!--                    </template>-->
<!--                  </VListItem>-->
<!--                </VList>-->
<!--              </VRadioGroup>-->

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


              </VForm>
            </VWindowItem>

            <VWindowItem>
              <VForm ref="refAccountForm" @submit.prevent="validateAccountForm">
              <h4 class="text-h4 mb-1">
                Account Information
              </h4>
              <p class="text-body-1 mb-5">
                Enter Your Account Details
              </p>

              <VRow>
                <VCol
                    cols="12"
                    md="6"
                >
                  <VTextField
                      v-model="accountForm.first_name"
                      label="First Name"
                      placeholder="John"
                  />
                </VCol>

                <VCol
                    cols="12"
                    md="6"
                >
                  <VTextField
                      v-model="accountForm.last_name"
                      label="Last Name"
                      placeholder="Doe"
                  />
                </VCol>

                <VCol
                    cols="12"
                    md="6"
                >
                  <VTextField
                      v-model="accountForm.phone_number"
                      type="number"
                      label="Mobile"
                      placeholder="98 7654 3210"
                  />
                </VCol>

                <VCol
                    cols="12"
                    md="6"
                >
                  <VTextField
                      v-model="accountForm.email"
                      label="Email"
                      placeholder="johndoe@email.com"
                  />
                </VCol>

                <VCol
                    cols="12"
                    md="6"
                >
                  <VTextField
                      v-model="accountForm.password"
                      label="Password"
                      placeholder="Enter Password"
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
                      v-model="accountForm.password_confirmation"
                      label="Confirm Password"
                      placeholder="Enter Confirm Password"
                      :type="isConfirmPasswordVisible ? 'text' : 'password'"
                      :append-inner-icon="isConfirmPasswordVisible ? 'ri-eye-off-line' : 'ri-eye-line'"
                      @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
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

            <VWindowItem class="text-center">
              <VForm ref="refSubmitForm" @submit.prevent="validateSubmitForm">
              <h5 class="text-h5 mb-2 mt-3">
                Submit 🥳
              </h5>
              <p class="text-body-2 mb-4">
                Submit to kickstart your store.
              </p>

              <VImg
                  :src="illustrationJohn"
                  width="261"
                  class="mx-auto"
              />
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
                      type="submit">
                    Submit
                    <VIcon
                        icon="ri-check-line"
                        end
                        class="flip-in-rtl"
                    />
                  </VBtn>
                </div>
              </VCol>
              </VForm>
            </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
  </VRow>
  <!-- Loading Dialog -->
  <LoadingDialog :value="showLoadingDialog" :command="commandMessage"/>
</template>

<style lang="scss">
@use "@core-scss/template/pages/page-auth.scss";
</style>
