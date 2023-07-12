<template>
    <form @submit.prevent class="form">
        <div class="form__inner">
            <legend>Authorization</legend>
            <label>Login</label>
            <input type="text" placeholder="Enter your login" v-model="email">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" v-model="password">
            <button @click="logIn">Login in #1</button>
            <button @click="authorization">Login in #2</button>
            <span>Don't have an account? <a class="hypertext-btn" @click="$router.push('/registration')">Register
                    here!</a></span>
        </div>
    </form>
</template>

<script>
import { useAuthorizationStore } from '@/store/authorizationStore';
import router from '@/router/router';
import axios from 'axios';

export default {
    data() {
        return {
            email: 'john@mail.com',
            password: 'changeme',
            authorizationStore: useAuthorizationStore(),
            loginData: useAuthorizationStore().loginData,
        }
    },
    methods: {
        authorization() {
            if (this.loginData.filter(user => JSON.stringify(user) == JSON.stringify({ email: this.email, password: this.password })).length > 0) {
                this.authorizationStore.userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNDM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.Z5nZb8tvEm2q4gkj2oDK2x2ZdxoBrkOz0SXE1OK5ScQ';
                console.log(this.authorizationStore.userToken);
                router.push('/usersbase');
                router.beforeEach((to, from, next) => {
                    if (to.path !== '/login' && !this.authorizationStore.userToken) next({ path: '/login' })
                    else next()
                })
            }
        },
        async logIn() {
            let url = 'https://api.escuelajs.co/api/v1/auth/login';

            try {
                const response = await axios.post(url, { email: this.email, password: this.password });
                if (response && response.data) {
                    this.authorizationStore.userToken = { accessToken: response.data.access_token, refreshToken: response.data.refresh_token };
                    console.log(this.authorizationStore.userToken);
                    router.push('/usersbase');
                    router.beforeEach((to, from, next) => {
                        if (to.path !== '/login' && !this.authorizationStore.userToken) next({ path: '/login' })
                        else next()
                    })
                }
            } catch (e) {
                console.error(e);
            }
        }

    },
}
</script>


<style scoped>
legend {
    font-weight: 600;
    font-size: 24px;
}

.form {
    display: flex;
    justify-content: center;
}

.form__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 450px;
    width: 450px;
    padding: 20px;
    box-shadow: 0px 5px 20px 2px blue;
    margin-top: 30px;
    background-color: rgb(0, 143, 209);
    color: #fff;

}

input {
    width: 80%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    border-bottom: 2px solid rgb(0, 77, 200);
    color: rgb(255, 255, 255);
}

input::placeholder {
    color: #c8c8c8;
}

input:focus {
    outline: none;
    border-bottom: 5px solid rgb(0, 77, 200);

}

button {
    width: 150px;
    height: 50px;
    background-color: rgb(0, 53, 139);
    border: 1px solid rgb(14, 95, 156);
    border-radius: 15px;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: rgb(0, 16, 139);
    border: 1px solid rgb(0, 49, 139);
}

span {
    font-size: 14px;
}

.hypertext-btn {
    font-size: inherit;
    padding: 0;
    margin: 0;
    border: none;
    background-color: none;
    color: blue;
    cursor: pointer;
}

.hypertext-btn:hover {
    color: darkblue;
    text-decoration: underline;
}
</style>
