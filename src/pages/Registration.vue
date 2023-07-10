<template>
    <form @submit.prevent class="form">
        <div class="form__inner">
            <legend>Registration</legend>
            <label>Login</label>
            <input type="text" placeholder="Create your login" v-model="login">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" v-model="email">
            <label>Password</label>
            <input type="password" placeholder="Create your password" v-model="password">
            <label>Confirm your password</label>
            <input type="password" placeholder="Repeat your password" v-model="passwordConfirm">
            <button @click="registration">Register</button>
            <span>Already have an account? <a class="hypertext-btn" @click="$router.push('/login')">Login
                    In</a></span>
        </div>
    </form>
</template>

<script>
import router from '@/router/router';
import { useAuthorizationStore } from '@/store/authorizationStore';


export default {
    data() {
        return {
            login: '',
            email: '',
            password: '',
            passwordConfirm: '',
            loginStore: useAuthorizationStore().loginData
        }
    },
    methods: {
        registration() {
            this.loginStore.push({ email: this.email, password: this.password });
            router.push('/login')
        }
    }
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
    height: 570px;
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
