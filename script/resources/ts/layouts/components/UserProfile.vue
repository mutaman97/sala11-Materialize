<script setup lang="ts">
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { router} from '@inertiajs/vue3'
import {usePage} from "@inertiajs/vue3";
import {ref} from "vue";
// const router = useRouter()
const ability = useAbility()
const isCreateStoreVisible = ref(false)


// TODO: Get type from backend
const userData = useCookie<any>('userData')
const activeStore = useCookie<any>('activeStore')

const logout = async () => {
  // Redirect to login page
  await router.post(route('logout'))

  // Remove "userData" from cookie
  userData.value = null

  // ℹ️ We had to remove abilities in then block because if we don't nav menu items mutation is visible while redirecting user to login page
  // Remove "userAbilities" from cookie
  useCookie('userAbilityRules').value = null

  // Reset ability to initial ability
  ability.update([])
}

const userProfileList = [
  { type: 'divider' },
  {
    type: 'navItem',
    icon: 'ri-user-line',
    title: 'Profile',
    to: { name: 'apps-user-view-id', params: { id: 21 } },
  },
  {
    type: 'navItem',
    icon: 'ri-settings-4-line',
    title: 'Settings',
    to: { name: 'pages-account-settings-tab', params: { tab: 'account' } },
  },
  {
    type: 'navItem',
    icon: 'ri-file-text-line',
    title: 'Billing Plan',
    to: { name: 'pages-account-settings-tab', params: { tab: 'billing-plans' } },
    chipsProps: { color: 'error', text: '4', size: 'small' },
  },
  { type: 'divider' },
  {
    type: 'navItem',
    icon: 'ri-money-dollar-circle-line',
    title: 'Pricing',
    to: { name: 'pages-pricing' },
  },
  {
    type: 'navItem',
    icon: 'ri-question-line',
    title: 'FAQ',
    to: { name: 'pages-faq' },
  },
]
// Use Inertia.js to get the current page
const page = usePage()
const storesData = page.props.sharedData.userData.stores
const createStoreChildren = (data) => ({
  label: data.id,
  id: data.id,
})

// Convert the array of data to an array of store child objects
const storeChildren = storesData.map(createStoreChildren)

// Define a reactive variable to store the selected store URL
const selectedStore = ref(activeStore || storesData[0].id)

const handleStoreSelection = (storeUrl: string) => {
  selectedStore.value = storeUrl

  useCookie('activeStore').value = selectedStore.value

  console.log('Selected store URL:', selectedStore.value)

  router.get(route('merchant.dashboard'), { store_id: selectedStore.value });
}
</script>

<template>
  <VBadge
    v-if="userData"
    dot
    bordered
    location="bottom right"
    offset-x="2"
    offset-y="2"
    color="success"
    class="user-profile-badge"
  >
    <VAvatar
      class="cursor-pointer"
      size="38"
      :color="!(userData && userData.avatar) ? 'primary' : undefined"
      :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
    >
      <VImg
        v-if="userData && userData.avatar"
        :src="userData.avatar"
      />
      <span
          v-else
          class="text-3xl font-weight-medium"
      >
        {{ avatarText(selectedStore) }}
      </span>

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="15px"
      >
        <VList>
          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template
              v-for="store in storeChildren"
              :key="store.id"
            >
              <VListItem
              :value="store.id"
              :active="store.id === selectedStore"
              @click="handleStoreSelection(store.id)"
              class="px-4">
                <div class="d-flex gap-x-2 align-center">
                  <VAvatar
                    :color="!(userData && userData.avatar) ? 'primary' : undefined"
                    :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
                  >
                    <VImg
                      v-if="userData && userData.avatar"
                      :src="userData.avatar"
                    />
                    <span
                        v-else
                        class="text-3xl font-weight-medium"
                    >
                      {{ avatarText(store.id) }}
                    </span>
                  </VAvatar>

                  <div>
                    <div class="text-body-2 font-weight-medium text-high-emphasis">
                      {{ store.id || store.id }}
                    </div>
                    <div class="text-capitalize text-caption text-disabled">
                      {{ store.id }}
                    </div>
                  </div>
                  <VIcon
                    class="ml-auto"
                    v-if="store.id === selectedStore"
                    icon="ri-checkbox-circle-line"
                  />
                </div>
              </VListItem>
            </template>
            <VListItem class="px-4">
              <VBtn
                @click="isCreateStoreVisible = !isCreateStoreVisible"
                block
                size="small"
                append-icon="ri-store-2-line"
              >
                Add Store
              </VBtn>
            </VListItem>

            <template
              v-for="item in userProfileList"
              :key="item.title"
            >
              <VListItem
                v-if="item.type === 'navItem'"
                :to="item.to"
                class="px-4"
              >
                <template #prepend>
                  <VIcon
                    :icon="item.icon"
                    size="22"
                  />
                </template>

                <VListItemTitle>{{ item.title }}</VListItemTitle>

                <template
                  v-if="item.chipsProps"
                  #append
                >
                  <VChip
                    v-bind="item.chipsProps"
                    variant="elevated"
                  />
                </template>
              </VListItem>

              <VDivider
                v-else
                class="my-1"
              />
            </template>

            <VListItem class="px-4">
              <VBtn
                block
                color="error"
                size="small"
                append-icon="ri-logout-box-r-line"
                @click="logout"
              >
                Logout
              </VBtn>
            </VListItem>
          </PerfectScrollbar>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>

  <CreateStoreDialog v-model:is-dialog-visible="isCreateStoreVisible" />

</template>

<style lang="scss">
.user-profile-badge {
  &.v-badge--bordered.v-badge--dot .v-badge__badge::after {
    color: rgb(var(--v-theme-background));
  }
}
</style>
