<template>
    <form @submit.prevent>
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
            <button>Register</button>
            <span>Already have an account? <a class="hypertext-btn" @click="$router.push('/login')">Login
                    In</a></span>
        </div>
    </form>
</template>

<script>

export default {
    data() {
        return {
            login: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    },
    methods: {

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
</style>
