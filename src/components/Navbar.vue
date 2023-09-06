<template>
    <div class="navbar">
        <div @click="$router.push('/')" class="navbar__title">CRUD</div>
        <div class="navbar__btns" v-if="authorizationStore.userToken">
            <my-button class="navbar__btn" @click="$router.push('/usersbase')">Users list</my-button>
            <my-button class="navbar__btn" @click="logout">Log out</my-button>
        </div>
        <div class="navbar__btns" v-else>
            <my-button class="navbar__btn" @click="$router.push('/login')">Sign in</my-button>
            <my-button class="navbar__btn" @click="$router.push('/registration')">Registration</my-button>
        </div>
    </div>
</template>

<script>
import router from '@/router/router';
import { useAuthorizationStore } from '@/store/authorizationStore';
import MyButton from '@/components/UI/MyButton.vue';


export default {
    components: {
        MyButton
    },
    data() {
        return {
            authorizationStore: useAuthorizationStore(),
        }
    },
    methods: {
        logout() {
            this.authorizationStore.userToken = null;
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
    cursor: pointer;
}

.navbar__btns {
    margin-left: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    width: 20%;
}
</style>
