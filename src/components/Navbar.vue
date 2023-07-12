<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="navbar__title">CRUD</div>
        <div class="navbar__btns" v-if="authorizationStore.userToken">
            <button class="navbar__btn" @click="$router.push('/usersbase')">Users list</button>
            <button class="navbar__btn" @click="logout">Log out</button>
        </div>
        <div class="navbar__btns" v-else>
            <button class="navbar__btn" @click="$router.push('/login')">Login</button>
            <button class="navbar__btn" @click="$router.push('/registration')">Registration</button>
        </div>
    </div>
</template>

<script>
import router from '@/router/router';
import { useAuthorizationStore } from '@/store/authorizationStore';

export default {
    data() {
        return {
            authorizationStore: useAuthorizationStore(),
        }
    },
    methods: {
        logout() {
            this.authorizationStore.userToken = null;
            console.log(this.authorizationStore.userToken);
            router.push('/login');
        }
    },

}
</script>


<style scoped>
.navbar {
    height: 70px;
    background-color: rgb(58, 148, 227);
    box-shadow: 2px 2px 4px rgb(52, 76, 148);
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__title {
    color: #fff;
    font-weight: 700;
    font-size: 22px;
}

.navbar__btns {
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    width: 20%;
}

.navbar__btn {
    width: 150px;
    height: 50px;
    background-color: rgb(0, 53, 139);
    border: 1px solid rgb(14, 95, 156);
    border-radius: 15px;
    color: white;
    cursor: pointer;
}

.navbar__btn:hover {
    background-color: rgb(0, 16, 139);
    border: 1px solid rgb(0, 49, 139);
}
</style>
