<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btns">
            <button style="margin-left: 20px" @click="$router.push('/usersbase')">Список пользователей</button>
            <div class="user-btn">
                <button style="margin-left: 20px" @click="$router.push('/login')">Login</button>
                <button style="margin-left: 20px" @click="$router.push('/registration')">Registration</button>
            </div>
            <button class="user-btn" style="margin-left: 20px; display: none;" @click="logout">Log
                out</button>
        </div>
    </div>
</template>

<script>
import router from '@/router/router';
export default {
    data() {
        return {
        }
    },
    mounted() {
    },
    methods: {
        logout() {
            router.push('/');
        }
    }
}
</script>


<style scoped>
.navbar {
    height: 50px;
    background-color: rgb(58, 148, 227);
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}

.navbar__btns {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
}
</style>
