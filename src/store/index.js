import { createStore } from 'vuex'

import { authStore } from './auth';
import { musicStore } from './music';

const store = createStore({
    modules: {
        auth: authStore,
        music: musicStore
    }
})

export default store;