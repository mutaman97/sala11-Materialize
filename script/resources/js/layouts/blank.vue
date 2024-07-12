<script setup>
import { useTheme } from 'vuetify'
import ScrollToTop from '@core/components/ScrollToTop.vue'
import initCore from '@core/initCore'
import {
    initConfigStore,
    useConfigStore,
} from '@core/stores/config'
import { hexToRgb } from '@layouts/utils'

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
initCore()
initConfigStore()

const configStore = useConfigStore()

const { injectSkinClasses } = useSkins()

// ℹ️ This will inject classes in body tag for accurate styling
injectSkinClasses()

// SECTION: Loading Indicator
const isFallbackStateActive = ref(false)
const refLoadingIndicator = ref(null)

watch([
    isFallbackStateActive,
    refLoadingIndicator,
], () => {
    if (isFallbackStateActive.value && refLoadingIndicator.value)
        refLoadingIndicator.value.fallbackHandle()
    if (!isFallbackStateActive.value && refLoadingIndicator.value)
        refLoadingIndicator.value.resolveHandle()
}, { immediate: true })
// !SECTION
</script>

<template>
    <VLocaleProvider :rtl="configStore.isAppRTL">
        <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
        <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
            <AppLoadingIndicator ref="refLoadingIndicator" />

            <div class="layout-wrapper layout-blank">
                <Suspense
                    :timeout="0"
                    @fallback="isFallbackStateActive = true"
                    @resolve="isFallbackStateActive = false"
                >
                    <slot />
                </Suspense>
            </div>
            <ScrollToTop />
        </VApp>
    </VLocaleProvider>
</template>

<style>
.layout-wrapper.layout-blank {
    flex-direction: column;
}
</style>
