<script setup lang="ts">
import type { ECommerceProduct } from '@db/apps/ecommerce/types'
import Layout from '@/layouts/seller.vue'
import { onMounted, watchEffect, ref, computed } from 'vue'
import { debounce } from 'lodash';

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
  { title: 'Product', key: 'title' },
  { title: 'Category', key: 'category', sortable: false },
  { title: 'Stock', key: 'stock', sortable: false },
  { title: 'SKU', key: 'price.sku' },
  { title: 'Price', key: 'price' },
  { title: 'QTY', key: 'price.qty' },
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
  { title: '1', value: 'Published' },
  { title: '0', value: 'Draft' },
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

// API Data
// const { data: productsData, execute: fetchProducts } = await useApi<any>(
//     createUrl('/apps/ecommerce/products', {
//       query: {
//         q: searchQuery,
//         stock: selectedStock,
//         category: selectedCategory,
//         status: selectedStatus,
//         page,
//         itemsPerPage,
//         sortBy,
//         orderBy,
//       },
//     })
// )

const productsData = ref([]);

// Fetch Products Function
const fetchProducts = async () => {
  const params = {
    q: searchQuery.value,
    stock: selectedStock.value,
    category: selectedCategory.value,
    status: selectedStatus.value,
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    sortBy: sortBy.value,
    orderBy: orderBy.value,
  };

  try {
    const response = await axios.get(route('seller.product.index'), { params });
    productsData.value = response.data.data; // Adjust for Laravel pagination
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Computed properties
const products = computed((): ECommerceProduct[] => productsData.value?.products || [])
const totalProduct = computed(() => productsData.value?.total || 0)

// Methods
const updateOptions = (options: any) => {
  console.log(options)
  page.value = options.page
  sortBy.value = options.sortBy[0]?.key
  orderBy.value = options.sortBy[0]?.order
  fetchProducts().catch(console.error)
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
    0: { text: 'Draft', color: 'error' },
    1: { text: 'Published', color: 'success' },
  }
  return mapping[statusMsg] || {}
}

// const resolveStockStatus = (statusMsg: string) => {
//   const mapping: Record<string, { value: string; color: string }> = {
//     0: { value: 'Draft', color: 'error' },
//     1: { value: 'Published', color: 'success' },
//   }
//   return mapping[statusMsg] || {}
// }


const resolveStockStatus = (status: string) => {
  const mapping: Record<string, { value: boolean; color: string }> = {
    0: { value: false, color: 'error' },
    1: { value: true, color: 'success' },
  };
  return mapping[status] || { value: false, color: 'grey' };
}

const deleteProduct = async (id: number) => {
  try {
    await $api(`apps/ecommerce/products/${id}`, { method: 'DELETE' })
    const index = selectedRows.value.findIndex(row => row === id)
    if (index !== -1) selectedRows.value.splice(index, 1)
    await fetchProducts()
  } catch (error) {
    console.error('Error deleting product:', error)
  }
}

// Automatically re-run when any reactive variable is used
watchEffect(() => {
  fetchProducts()
})


// Lifecycle
onMounted(async () => {
  try {
    await fetchProducts()
  } catch (error) {
    console.error('Error fetching products on mount:', error)
  }
})
</script>


<template>
  <div>
    <!-- 👉 widgets -->
    <VCard class="mb-6">
      <VCardText class="px-2">
        <VRow>
          <template
            v-for="(data, index) in widgetData"
            :key="index"
          >
            <VCol
              cols="12"
              sm="6"
              md="3"
              class="px-6"
            >
              <div
                class="d-flex justify-space-between"
                :class="$vuetify.display.xs
                  ? index !== widgetData.length - 1 ? 'border-b pb-4' : ''
                  : $vuetify.display.sm
                    ? index < (widgetData.length / 2) ? 'border-b pb-4' : ''
                    : ''"
              >
                <div class="d-flex flex-column gap-y-1">
                  <p class="text-capitalize mb-0">
                    {{ data.title }}
                  </p>

                  <h4 class="text-h4">
                    {{ data.value }}
                  </h4>

                  <div class="d-flex align-center">
                    <div class="text-no-wrap me-2">
                      {{ data.desc }}
                    </div>

                    <VChip
                      v-if="data.change"
                      size="small"
                      :color="data.change > 0 ? 'success' : 'error'"
                    >
                      {{ prefixWithPlus(data.change) }}%
                    </VChip>
                  </div>
                </div>

                <VAvatar
                  variant="tonal"
                  rounded="lg"
                  size="44"
                >
                  <VIcon
                    :icon="data.icon"
                    size="28"
                    color="high-emphasis"
                  />
                </VAvatar>
              </div>
            </VCol>
            <VDivider
              v-if="$vuetify.display.mdAndUp ? index !== widgetData.length - 1 : $vuetify.display.smAndUp ? index % 2 === 0 : false"
              vertical
              inset
              length="92"
            />
          </template>
        </VRow>
      </VCardText>
    </VCard>

    <!-- 👉 products -->
    <VCard>
      <VCardItem class="pb-4">
        <VCardTitle>Filters</VCardTitle>
      </VCardItem>
      <VCardText>
        <VRow>
          <!-- 👉 Select Status -->
          <VCol
              cols="12"
              sm="4"
          >
            <VSelect
                v-model="selectedStatus"
                label="Select Status"
                placeholder="Select Status"
                :items="status"
                clearable
                clear-icon="ri-close-line"
            />
          </VCol>

          <!-- 👉 Select Category -->
          <VCol
              cols="12"
              sm="4"
          >
            <VSelect
                v-model="selectedCategory"
                label="Category"
                placeholder="Select Category"
                :items="categories"
                clearable
                clear-icon="ri-close-line"
            />
          </VCol>

          <!-- 👉 Select Stock Status -->
          <VCol
              cols="12"
              sm="4"
          >
            <VSelect
                v-model="selectedStock"
                label="Stock"
                placeholder="Stock"
                :items="stockStatus"
                clearable
                clear-icon="ri-close-line"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex flex-wrap gap-4">
        <div class="d-flex align-center">
          <!-- 👉 Search  -->
          <VTextField
              v-model="searchQuery"
              placeholder="Search Product"
              style="inline-size: 200px;"
              density="compact"
              class="me-3"
          />
        </div>

        <VSpacer />

        <div class="d-flex gap-x-4 align-center">
          <!-- 👉 Export button -->
          <VBtn
              variant="outlined"
              color="secondary"
              prepend-icon="ri-upload-2-line"
          >
            Export
          </VBtn>

          <VBtn
              color="primary"
              prepend-icon="ri-add-line"
              @click="$inertia.visit(route('seller.product.create'))"
          >
            Add Product
          </VBtn>
        </div>
      </VCardText>

      <!-- 👉 Datatable  -->
      <VDataTableServer
          v-model:model-value="selectedRows"
          v-model:items-per-page="itemsPerPage"
          v-model:page="page"
          :headers="headers"
          show-select
          :items="products"
          :items-length="totalProduct"
          class="text-no-wrap rounded-0"
          @update:options="updateOptions"
      >
        <!-- product  -->
        <template #item.product="{ item }">
          <div class="d-flex align-center gap-x-3">
            <VAvatar
                v-if="item.media"
                size="38"
                variant="tonal"
                rounded
                :image="item.media.value"
            />
            <div class="d-flex flex-column">
              <span class="text-base text-high-emphasis font-weight-medium">{{ item.title }}</span>
              <span class="text-sm">{{ item.brands.map(brand => brand.name).join(', ') }}</span>
            </div>
          </div>
        </template>

        <!-- category -->
        <template #item.category="{ item }">
          <VAvatar
              size="30"
              variant="tonal"
              :color="resolveCategory(item.category)?.color"
              class="me-3"
          >
            <VIcon
                :icon="resolveCategory(item.category)?.meta"
                size="18"
            />
          </VAvatar>
          <span class="text-base text-high-emphasis">{{ item.category.map(cat => cat.name).join(', ') }}</span>
        </template>

        <!-- stock -->
        <template #item.stock="{ item }">
          <VSwitch :model-value="resolveStockStatus(item.price.stock_status).value" />
        </template>


        <!-- price -->
        <template #item.price="{ item }">
          <!-- Display price with the old price having a crossing line -->
          <span class="text-base text-high-emphasis">
            <span> {{ item.price.price }} </span>&nbsp;
            <span :style="{ textDecoration: 'line-through', color: 'gray' }">
              {{ item.price.old_price }}
            </span>
          </span>
        </template>

        <!-- status -->
        <template #item.status="{ item }">
          <VChip
              v-bind="resolveStatus(item.status)"
              size="small"
          />
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn size="small">
            <VIcon icon="ri-edit-box-line" />
          </IconBtn>

          <IconBtn size="small">
            <VIcon icon="ri-more-2-fill" />

            <VMenu activator="parent">
              <VList>
                <VListItem
                    value="download"
                    prepend-icon="ri-download-line"
                >
                  Download
                </VListItem>

                <VListItem
                    value="delete"
                    prepend-icon="ri-delete-bin-line"
                    @click="deleteProduct(item.id)"
                >
                  Delete
                </VListItem>

                <VListItem
                    value="duplicate"
                    prepend-icon="ri-stack-line"
                >
                  Duplicate
                </VListItem>
              </VList>
            </VMenu>
          </IconBtn>
        </template>

        <!-- Pagination -->
        <template #bottom>
          <VDivider />

          <div class="d-flex justify-end flex-wrap gap-x-6 px-2 py-1">
            <div class="d-flex align-center gap-x-2 text-medium-emphasis text-base">
              Rows Per Page:
              <VSelect
                  v-model="itemsPerPage"
                  class="per-page-select"
                  variant="plain"
                  :items="[10, 20, 25, 50, 100]"
              />
            </div>

            <p class="d-flex align-center text-base text-high-emphasis me-2 mb-0">
              {{ paginationMeta({ page, itemsPerPage }, totalProduct) }}
            </p>

            <div class="d-flex gap-x-2 align-center me-2">
              <VBtn
                  class="flip-in-rtl"
                  icon="ri-arrow-left-s-line"
                  variant="text"
                  density="comfortable"
                  color="high-emphasis"
                  :disabled="page <= 1"
                  @click="page <= 1 ? page = 1 : page--"
              />

              <VBtn
                  class="flip-in-rtl"
                  icon="ri-arrow-right-s-line"
                  density="comfortable"
                  variant="text"
                  color="high-emphasis"
                  :disabled="page >= Math.ceil(totalProduct / itemsPerPage)"
                  @click="page >= Math.ceil(totalProduct / itemsPerPage) ? page = Math.ceil(totalProduct / itemsPerPage) : page++ "
              />
            </div>
          </div>
        </template>
      </VDataTableServer>
    </VCard>
  </div>
</template>
