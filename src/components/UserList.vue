<template>
    <div class="userlist">
        <div v-for="user of userList" :key="user.id">
            <user-item :user="user" @remove="$emit('remove', post)" />
        </div>
    </div>
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
    width: 60vw;
}
</style>
