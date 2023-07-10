import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue';

export const useLoginStore = defineStore('loginStore', () => {
    const loginData = ref([
        {
            email: 'john@mail.com',
            password: 'changeme',
        },
    ]);

    let accessToken = ref('');
    const accessTokenInLocalStorage = localStorage.getItem('accessToken');

    if (accessTokenInLocalStorage) {
        accessToken.value = JSON.parse(accessTokenInLocalStorage)._value;
    }

    let refreshToken = ref('');
    const refreshTokenInLocalStorage = localStorage.getItem('refreshToken');

    if (refreshTokenInLocalStorage) {
        refreshToken.value = JSON.parse(refreshTokenInLocalStorage)._value;
    }

    const loginInLocalStorage = localStorage.getItem('loginData');

    if (loginInLocalStorage) {
        loginData.value = JSON.parse(loginInLocalStorage)._value;
    }

    watch(() => loginData, (state) => {
        localStorage.setItem('loginData', JSON.stringify(state))
    }, { deep: true });

    return {
        loginData,
        loginInLocalStorage,
    }
})