<script setup lang="ts">
import type { ECommerceProduct } from '@db/apps/ecommerce/types'
import Layout from '@/layouts/seller.vue'
import { onMounted, ref, computed } from 'vue'
import { usePage } from "@inertiajs/vue3"

defineOptions({ layout: Layout })

// Widget data
const widgetData = ref([
  { title: 'In-Store Sales', value: '$5,345', icon: 'ri-home-6-line', desc: '5k orders', change: 5.7 },
  { title: 'Website Sales', value: '$74,347', icon: 'ri-computer-line', desc: '21k orders', change: 12.4 },
  { title: 'Discount', value: '$14,235', icon: 'ri-gift-line', desc: '6k orders' },
  { title: 'Affiliate', value: '$8,345', icon: 'ri-money-dollar-circle-line', desc: '150 orders', change: -3.5 },
])

// Table headers
const headers = [
  { title: 'Product', key: 'product' },
  { title: 'Category', key: 'category' },
  { title: 'Stock', key: 'stock', sortable: false },
  { title: 'SKU', key: 'sku' },
  { title: 'Price', key: 'price' },
  { title: 'QTY', key: 'qty' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', sortable: false },
]

// Filters and search options
const selectedStatus = ref<string | undefined>()
const selectedCategory = ref<string | undefined>()
const selectedStock = ref<boolean | undefined>()
const searchQuery = ref<string>('')

// Selected rows
const selectedRows = ref<number[]>([])

// Dropdown options
const status = ref([
  { title: 'Scheduled', value: 'Scheduled' },
  { title: 'Publish', value: 'Published' },
  { title: 'Inactive', value: 'Inactive' },
])
const categories = ref([
  { title: 'Accessories', value: 'Accessories' },
  { title: 'Home Decor', value: 'Home Decor' },
  { title: 'Electronics', value: 'Electronics' },
  { title: 'Shoes', value: 'Shoes' },
  { title: 'Office', value: 'Office' },
  { title: 'Games', value: 'Games' },
])
const stockStatus = ref([
  { title: 'In Stock', value: true },
  { title: 'Out of Stock', value: false },
])

// Data table options
const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref<string | undefined>()
const orderBy = ref<string | undefined>()

// Get data from Inertia
const pageData = usePage()
const allProducts = ref(pageData.props.posts)

// Computed properties
const products = computed(() => allProducts.value?.data || [])
const totalProduct = computed(() => allProducts.value?.total || 0)

// Methods
const updateOptions = async (options: any) => {
  page.value = options.page
  itemsPerPage.value = options.itemsPerPage
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order

  // Fetch updated data
  const url = new URL(route('seller.product.index'))
  url.searchParams.append('page', page.value)
  url.searchParams.append('itemsPerPage', itemsPerPage.value)
  if (sortBy.value) url.searchParams.append('sortBy', sortBy.value)
  if (orderBy.value) url.searchParams.append('orderBy', orderBy.value)
  if (searchQuery.value) url.searchParams.append('q', searchQuery.value)

  try {
    const response = await fetch(url.toString())
    const result = await response.json()
    allProducts.value = result.allProducts
  } catch (error) {
    console.error('Error fetching updated products:', error)
  }
}

const resolveCategory = (category: string) => {
  const mapping: Record<string, { color: string; icon: string }> = {
    Accessories: { color: 'error', icon: 'ri-headphone-line' },
    'Home Decor': { color: 'info', icon: 'ri-home-6-line' },
    Electronics: { color: 'primary', icon: 'ri-computer-line' },
    Shoes: { color: 'success', icon: 'ri-footprint-line' },
    Office: { color: 'warning', icon: 'ri-briefcase-line' },
    Games: { color: 'primary', icon: 'ri-gamepad-line' },
  }
  return mapping[category] || {}
}

const resolveStatus = (statusMsg: string) => {
  const mapping: Record<string, { text: string; color: string }> = {
    Scheduled: { text: 'Scheduled', color: 'warning' },
    Published: { text: 'Publish', color: 'success' },
    Inactive: { text: 'Inactive', color: 'error' },
  }
  return mapping[statusMsg] || {}
}
</script>

<template>
  <div>
    <!-- 👉 widgets -->
    <VCard class="mb-6">
      <VCardText class="px-2">
        <VRow>
          <template v-for="(data, index) in widgetData" :key="index">
            <VCol cols="12" sm="6" md="3" class="px-6">
              <div class="d-flex justify-space-between">
                <div class="d-flex flex-column gap-y-1">
                  <p class="text-capitalize mb-0">{{ data.title }}</p>
                  <h4 class="text-h4">{{ data.value }}</h4>
                  <div class="d-flex align-center">
                    <div class="text-no-wrap me-2">{{ data.desc }}</div>
                    <VChip v-if="data.change" size="small" :color="data.change > 0 ? 'success' : 'error'">
                      {{ data.change > 0 ? '+' : '' }}{{ data.change }}%
                    </VChip>
                  </div>
                </div>
                <VAvatar variant="tonal" rounded="lg" size="44">
                  <VIcon :icon="data.icon" size="28" />
                </VAvatar>
              </div>
            </VCol>
          </template>
        </VRow>
      </VCardText>
    </VCard>

    <!-- 👉 products -->
    <VCard>
      <VCardText>
        <VRow>
          <VCol cols="12" sm="4">
            <VSelect v-model="selectedStatus" label="Status" :items="status" clearable />
          </VCol>
          <VCol cols="12" sm="4">
            <VSelect v-model="selectedCategory" label="Category" :items="categories" clearable />
          </VCol>
          <VCol cols="12" sm="4">
            <VSelect v-model="selectedStock" label="Stock" :items="stockStatus" clearable />
          </VCol>
        </VRow>
        <VTextField v-model="searchQuery" placeholder="Search Product" class="mb-4" />
      </VCardText>

      <VDivider />

      <VCardText>
        <VDataTableServer
            v-model:model-value="selectedRows"
            v-model:items-per-page="itemsPerPage"
            v-model:page="page"
            :headers="headers"
            :items="products"
            :items-length="totalProduct"
            @update:options="updateOptions"
        >
          <template #item.product="{ item }">
            <div class="d-flex align-center gap-x-3">
              <VAvatar v-if="item.media" size="38" :image="item.media" />
              <div>
                <span>{{ item.title }}</span>
              </div>
            </div>
          </template>
          <template #item.category="{ item }">
            <VChip :color="resolveCategory(item.category)?.color" label>
              <VIcon :icon="resolveCategory(item.category)?.icon" />
              {{ item.category }}
            </VChip>
          </template>
        </VDataTableServer>
      </VCardText>
    </VCard>
  </div>
</template>
