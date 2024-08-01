<script lang="ts" setup>
import { ref, defineProps, watch } from 'vue';

const props = defineProps({
  value: Boolean,
  command: String,
});

const visible = ref(props.value);
const message = ref(props.command);

watch(() => props.value, (newValue) => {
  visible.value = newValue;
});

watch(() => props.command, (newValue) => {
  message.value = newValue;
});
</script>

<template>
  <!-- Dialog -->
  <VDialog
    v-model="visible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3 text-white">
        {{ message }}
        <VProgressLinear
          indeterminate
          class="mt-4"
          color="#fff"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
