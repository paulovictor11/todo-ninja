import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
                primary: '#9652FF',
                success: '#3CD1C2',
                info: '#FFAA2C',
                error: '#F83E70',
                background: colors.grey.lighten4
            }
        }
    }
});
