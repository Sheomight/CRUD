<template>
    <form @submit.prevent class="form">
        <div class="form__inner">
            <legend>Sign in</legend>
            <label>Email</label>
            <my-input placeholder="Enter your login" v-model="email" :class="{
                danger: hasError
            }" />
            <label>Password</label>
            <my-input type="password" placeholder="Enter your password" v-model="password" :class="{
                danger: hasError
            }" />
            <span v-if="hasError" class="danger__text">Wrong email or password</span>
            <my-button @click="logIn">Login in #1</my-button>
            <my-button @click="authorization">Login in #2</my-button>
            <span>Don't have an account? <a class="hypertext-btn" @click="$router.push('/registration')">Register
                    here!</a></span>
        </div>
    </form>
</template>

<script>
import { useAuthorizationStore } from '@/store/authorizationStore';
import router from '@/router/router';
import axios from 'axios';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';


export default {
    components: {
        MyInput, MyButton
    },
    data() {
        return {
            email: 'john@mail.com',
            password: 'changeme',
            authorizationStore: useAuthorizationStore(),
            loginData: useAuthorizationStore().loginData,
            hasError: false
        }
    },
    methods: {
        authorization() {
            if (this.loginData.find(user => user.email == this.email) && this.loginData.find(user => user.password == this.password)) {
                this.authorizationStore.userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNDM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.Z5nZb8tvEm2q4gkj2oDK2x2ZdxoBrkOz0SXE1OK5ScQ';
                console.log(this.authorizationStore.userToken);
                this.hasError = false;
                router.push('/usersbase');
                router.beforeEach((to, from, next) => {
                    if (to.path !== '/login' && !this.authorizationStore.userToken) next({ path: '/login' })
                    else next()
                })
            } else this.hasError = true
        },
        async logIn() {
            let url = 'https://api.escuelajs.co/api/v1/auth/login';

            try {
                const response = await axios.post(url, { email: this.email, password: this.password });
                if (response && response.data) {
                    this.authorizationStore.userToken = { accessToken: response.data.access_token, refreshToken: response.data.refresh_token };
                    console.log(this.authorizationStore.userToken);
                    router.push('/usersbase');
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

.danger {
    background-color: indianred;
}

.danger__text {
    color: rgb(223, 46, 46);
    font-weight: 600;
    font-size: 16px;
}

span {
    font-size: 14px;
}

input {
    width: 80%;
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
