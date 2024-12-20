// Styles
import '@core-scss/template/index.scss'
import '@styles/styles.scss'
import './bootstrap';
import Layout from '@/layouts/default.vue'

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { registerPlugins } from '@core/utils/plugins';
import { Link } from '@inertiajs/vue3'; // Import the Link component

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: (name) => resolvePageComponent(`../ts/pages/${name}.vue`, import.meta.glob('../ts/pages/**/*.vue')),

    resolve: (name) => {
        const pages = import.meta.glob('../ts/pages/**/*.vue', { eager: true });
        let page = pages[`../ts/pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },

    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        // Register the Inertia Link component globally
        app.component('Link', Link);

        return app
            .use(plugin)
            .use(registerPlugins)
            .use(ZiggyVue)
            .mount(el);
    },
});
