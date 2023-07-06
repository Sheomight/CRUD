<template>
    <form @submit.prevent>
        <div v-if="isAutorisation">
            <div class="form__inner" @submit.prevent>
                <legend>Autorisation</legend>
                <label>Login</label>
                <input type="text" placeholder="Enter your login" v-model="login">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" v-model="password">
                <button @click="logIn">Login in</button>
                <span>Don't have account? <button class="hypertext-btn" @click="changeForm">Register
                        here!</button></span>
            </div>
        </div>
        <div v-else>
            <div class="form__inner" @submit.prevent>
                <legend>Registration</legend>
                <label>Login</label>
                <input type="text" placeholder="Create your login" v-model="login">
                <label>Password</label>
                <input type="text" placeholder="Create your password" v-model="password">
                <button @click="register">Register</button>
                <span>Already have an account? <button class="hypertext-btn" @click="changeForm">Login
                        In</button></span>
            </div>
        </div>
    </form>
</template>

<script>
import { useUserStore } from '../store/userStore'

export default {
    data() {
        return {
            isAutorisation: true,
            login: '',
            password: '',
            userStore: useUserStore(),
            userData: useUserStore().loginData
        }
    },
    props: {
        currentId: {
            type: Number,
            required: true
        }
    },
    methods: {
        changeForm() {
            this.isAutorisation = !this.isAutorisation
        },
        logIn() {
            for (let data of this.userData) {
                if (data.login === this.login && data.password === this.password) {
                    this.userStore.setTabVersion(data.role);
                    break;
                }
            }
        },
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

.hypertext-btn:hover {
    color: darkblue;
    text-decoration: underline;
}

.registration-btn:hover {
    text-decoration: underline;
}
</style>
