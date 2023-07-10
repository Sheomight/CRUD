import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue';

export const useAuthorizationStore = defineStore('authorizationStore', () => {
    const loginData = ref([
        {
            email: 'john@mail.com',
            password: 'changeme',
        },
    ]);

    let userToken = ref(null);
    const userTokenInLocalStorage = localStorage.getItem('userToken');

    if (userTokenInLocalStorage) {
        userToken.value = JSON.parse(userTokenInLocalStorage)._value;
    }

    watch(() => userToken, (state) => {
        localStorage.setItem('userToken', JSON.stringify(state))
    }, { deep: true });


    const loginInLocalStorage = localStorage.getItem('loginData');

    if (loginInLocalStorage) {
        loginData.value = JSON.parse(loginInLocalStorage)._value;
    }

    watch(() => loginData, (state) => {
        localStorage.setItem('loginData', JSON.stringify(state))
    }, { deep: true });

    return {
        loginData, userToken,
        loginInLocalStorage, userTokenInLocalStorage
    }
})