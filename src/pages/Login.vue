<template>
    <form @submit.prevent="">
        <div class="form__inner">
            <legend>Authorization</legend>
            <label>Login</label>
            <input type="text" placeholder="Enter your login" v-model="login">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" v-model="password">
            <button @click="logIn">Login in</button>
            <span>Don't have account? <a class="hypertext-btn" @click="$router.push('/registration')">Register
                    here!</a></span>
        </div>
    </form>
</template>

<script>
import { useLoginStore } from '@/store/loginStore';
import router from '@/router/router';
export default {
    data() {
        return {
            login: '',
            password: '',
            loginStore: useLoginStore(),
            loginData: useLoginStore().loginData,
        }
    },
    methods: {
        authorization() {
            this.loginData.filter(user => JSON.stringify(user) == JSON.stringify({ login: this.login, password: this.password })).length > 0;
        },
        async logIn() {
            let url = 'https://api.escuelajs.co/api/v1/auth/login';
            let response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: this.login,
                    password: this.password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .catch(error => console.log('Error:', error));
            this.loginStore.accessToken = response.access_token;
            this.loginStore.refreshToken = response.refreshToken_token;
            router.push('/usersbase')
        }
    },
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
</style>
