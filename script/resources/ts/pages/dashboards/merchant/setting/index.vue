<script setup lang="ts">
import UserBioPanel from '@/views/apps/user/view/UserBioPanel.vue'
import UserTabBillingsPlans from '@/views/apps/user/view/UserTabBillingsPlans.vue'
import UserTabConnections from '@/views/apps/user/view/UserTabConnections.vue'
import UserTabNotifications from '@/views/apps/user/view/UserTabNotifications.vue'
import UserTabDatabase from '@/views/apps/user/view/UserTabDatabase.vue'
import UserTabOverview from '@/views/apps/user/view/UserTabOverview.vue'
import UserTabSecurity from '@/views/apps/user/view/UserTabSecurity.vue'
import avatar1 from "@images/avatars/avatar-1.png";
import {ref, computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import {ac} from "@fullcalendar/core/internal-common";

const route = useRoute('apps-user-view-id')
const page = usePage()

const userTab = ref(null)

const tabs = [
  { icon: 'ri-group-line', title: 'Overview' },
  { icon: 'ri-lock-2-line', title: 'Security' },
  { icon: 'ri-bookmark-line', title: 'Billing & Plan' },
  { icon: 'ri-notification-4-line', title: 'Notifications' },
  { icon: 'ri-link-m', title: 'Connections' },
  { icon: 'ri-database-2-line', title: 'Database Settings' },
]
const activeStore = useCookie<any>('activeStore')

const selectedStore = ref(activeStore.value || page.props.sharedData.userData.stores[0].id)

const storeData = computed(() => {
  return page.props.sharedData.userData.stores.find(store => store.id === selectedStore.value);
});

// const activeStoreData = storeData.value;
// console.log(storeData.value)

const userData = {
  id: 1,
  fullName: 'Galasasen Slixby',
  company: 'Yotz PVT LTD',
  role: 'editor',
  username: 'gslixby0',
  country: 'El Salvador',
  contact: '(479) 232-9151',
  email: 'gslixby0@abc.net.au',
  currentPlan: 'enterprise',
  status: 'Inactive',
  avatar: avatar1,
  taskDone: 79,
  projectDone:89
}


</script>

<template>
  <VRow v-if="userData">
    <VCol
      cols="12"
      md="5"
      lg="4"
    >
      <UserBioPanel :user-data="userData" :store-data="storeData" />
    </VCol>

    <VCol
      cols="12"
      md="7"
      lg="8"
    >
      <VTabs
        v-model="userTab"
        class="v-tabs-pill"
      >
        <VTab
          v-for="tab in tabs"
          :key="tab.icon"
        >
          <VIcon
            start
            :icon="tab.icon"
          />
          <span>{{ tab.title }}</span>
        </VTab>
      </VTabs>

      <VWindow
        v-model="userTab"
        class="mt-6 disable-tab-transition"
        :touch="false"
      >
        <VWindowItem>
          <UserTabOverview />
        </VWindowItem>

        <VWindowItem>
          <UserTabSecurity />
        </VWindowItem>

        <VWindowItem>
          <UserTabBillingsPlans />
        </VWindowItem>

        <VWindowItem>
          <UserTabNotifications />
        </VWindowItem>

        <VWindowItem>
          <UserTabConnections />
        </VWindowItem>

        <VWindowItem>
          <UserTabDatabase />
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
  <div v-else>
    <VAlert
      type="error"
      variant="tonal"
    >
      Invoice with ID  {{ route.params.id }} not found!
    </VAlert>
  </div>
</template>
