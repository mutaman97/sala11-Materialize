<script setup>
import {useTheme} from 'vuetify'
import ScrollToTop from '@core/components/ScrollToTop.vue'
import BuyNow from '@core/components/BuyNow.vue'
import initCore from '@core/initCore'
import {
    initConfigStore,
    useConfigStore,
} from '@core/stores/config'
import {hexToRgb} from '@layouts/utils'

const {global} = useTheme()

// ℹ️ Sync current theme with initial loader theme
initCore()
initConfigStore()

const configStore = useConfigStore()


import navItems from '@/navigation/vertical'
// import { useConfigStore } from '@core/stores/config'
import {themeConfig} from '@themeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavBarNotifications from '@/layouts/components/NavBarNotifications.vue'
import NavSearchBar from '@/layouts/components/NavSearchBar.vue'
import NavbarShortcuts from '@/layouts/components/NavbarShortcuts.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
import NavBarI18n from '@core/components/I18n.vue'

// @layouts plugin
import {VerticalNavLayout} from '@layouts'

const {layoutAttrs, injectSkinClasses} = useSkins()

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
}, {immediate: true})
// !SECTION
</script>

<template>

    <VLocaleProvider :rtl="configStore.isAppRTL">
        <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
        <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
            <!--      <div class="layout-wrapper layout-blank">-->


            <VerticalNavLayout :nav-items="navItems">

                <!-- 👉 navbar -->
                <template #navbar="{ toggleVerticalOverlayNavActive }">
                    <div class="d-flex h-100 align-center">
                        <IconBtn
                            id="vertical-nav-toggle-btn"
                            class="ms-n2 d-lg-none"
                            @click="toggleVerticalOverlayNavActive(true)"
                        >
                            <VIcon icon="ri-menu-line"/>
                        </IconBtn>

                        <NavSearchBar class="ms-lg-n2"/>

                        <VSpacer/>

                        <NavBarI18n
                            v-if="themeConfig.app.i18n.enable && themeConfig.app.i18n.langConfig?.length"
                            :languages="themeConfig.app.i18n.langConfig"
                        />
                        <NavbarThemeSwitcher/>
                        <NavbarShortcuts/>
                        <NavBarNotifications class="me-2"/>
                        <UserProfile/>
                    </div>
                </template>
                <AppLoadingIndicator ref="refLoadingIndicator"/>


                <Suspense
                    :timeout="0"
                    @fallback="isFallbackStateActive = true"
                    @resolve="isFallbackStateActive = false"
                >
                    <slot/>
                </Suspense>


                <!-- 👉 Footer -->
                <template #footer>
                    <Footer/>
                </template>

                <!-- 👉 Customizer -->
                <TheCustomizer/>


            </VerticalNavLayout>

            <!--      </div>-->
            <BuyNow/>
            <ScrollToTop/>
        </VApp>
    </VLocaleProvider>
</template>

<style>
.layout-wrapper.layout-blank {
    flex-direction: column;
}
</style>
