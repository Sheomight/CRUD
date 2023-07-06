<template>
    <form>

    </form>
</template>

<script>
import { useUserStore } from '../store/userStore'

export default {
    data() {
        return {
            login: '',
            password: '',
            userStore: useUserStore(),
            userData: useUserStore().loginData
        }
    },

    methods: {
        register() {
            this.userData.push({ userId: this.currentId, login: this.login, password: this.password, role: 'admin' })
        },
    }
}
</script>


<style scoped>
legend {
    font-weight: 600;
    font-size: 24px;
}

.form__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 350px;
    border: 1px solid black;
    padding: 20px;
}

span {
    font-size: 11px;
}

.hypertext-btn {
    font-size: inherit;
    padding: 0;
    margin: 0;
    border: none;
    background-color: white;
    color: blue;
    cursor: pointer;
}

.registration-btn:hover {
    text-decoration: underline;
}
</style>
