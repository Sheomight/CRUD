<template>
    <table class="userlist">
        <thead class="userlist__header">
            <tr>
                <td>User name</td>
                <td>User Email</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            <user-item v-for="user of userList" :key="user.id" :user="user" @remove="$emit('remove', post)" />
        </tbody>
    </table>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
    components: {
        UserItem
    },
    props: {
        userList: {
            type: Array,
            reqired: true
        }
    },
    emits: ['remove'],
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>


<style scoped>
.userlist {
    margin: 20px auto;
    width: 80%;
    background-color: rgb(114, 229, 255);
    border: 2px solid black;
}

td {
    border: 1px solid black;
    text-align: center;
}
</style>
