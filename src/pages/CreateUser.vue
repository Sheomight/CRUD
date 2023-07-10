<template>
    <div class="user">
        <user-form @create="addNewUser" :current-id="userList.length" />
        <user-list :userList="this.userList" @remove="removeUser" />
    </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'
import UserList from '@/components/UserList.vue'
import { useUserStore } from '../store/userStore'

export default {
    components: {
        UserForm,
        UserList,
    },
    data() {
        return {
            userList: useUserStore().users,
        }
    },
    methods: {
        addNewUser(user) {
            this.userList.push(user);
        },
        removeUser(user) {
            this.userList.splice(this.userList.indexOf(user), 1)
        }

    },
}

</script>

<style scoped></style>
