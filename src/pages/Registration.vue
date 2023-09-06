<template>
    <form @submit.prevent class="form">
        <div class="form__inner">
            <legend>Registration</legend>
            <label>Email</label>
            <my-input type="email" placeholder="Enter your email" v-model="email" required />
            <label>Password</label>
            <my-input type="password" placeholder="Create your password" v-model="password" :class="{
                'danger': hasError
            }" required />
            <label>Confirm your password</label>
            <my-input type="password" placeholder="Repeat your password" v-model="passwordConfirm" :class="{
                'danger': hasError
            }" required />
            <span class="danger__text" v-if="hasError">Your passwords do not match</span>
            <my-button @click="registration">Register</my-button>
            <span>Already have an account? <a class="hypertext-btn" @click="$router.push('/login')">Login
                    In</a></span>
        </div>
    </form>
</template>

<script>
import router from '@/router/router';
import { useAuthorizationStore } from '@/store/authorizationStore';
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';

export default {
    components: {
        MyInput, MyButton
    },
    data() {
        return {
            email: '',
            password: '',
            passwordConfirm: '',
            loginStore: useAuthorizationStore().loginData,
            hasError: false
        }
    },
    methods: {
        registration() {
            if (this.password == this.passwordConfirm && (this.email && this.password && this.passwordConfirm)) {
                this.loginStore.push({ email: this.email, password: this.password });
                this.hasError = false
                router.push('/login')
            } else this.hasError = true
        },
    }
}
</script>


<style scoped>
legend {
    font-weight: 600;
    font-size: 24px;
}

input {
    width: 80%;
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

/* button {
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
} */

span {
    font-size: 14px;
}

.danger {
    background-color: indianred;
}

.danger__text {
    color: rgb(223, 46, 46);
    font-weight: 600;
    font-size: 16px;
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
