<template>
    <div class="form">
        <h1>Add new user</h1>
        <form id="user-add" @submit.prevent>
            <div class="form__group">
                <label>Name</label>
                <input type="text" id="user-name" placeholder="Enter user name" v-model="user.name">
            </div>
            <div class="form__group">
                <label>e-mail</label>
                <input type="text" id="user-email" placeholder="Enter user e-mail" v-model="user.email">
            </div>
            <button @click="addNewUser">Add user</button>
        </form>
    </div>
</template>
<script >
export default {
    data() {
        return {
            user: {
                id: null,
                name: '',
                email: '',
                role: 'user',
                isEditing: false
            }
        }
    },
    emits: ['create'],
    props: {
        currentId: {
            type: Number,
            required: true
        }
    },
    methods: {
        addNewUser() {
            this.user.id = this.currentId;
            this.user.isEditing = false;
            this.$emit('create', this.user);
            this.user = {
                id: null,
                name: '',
                email: ''
            }
        },

    }
}
</script>


<style scoped>
.form {
    width: 600px;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    border: 1px dotted gray;
}

.form__group {
    display: flex;
    flex-direction: column;
    height: 70px;
}
</style>
