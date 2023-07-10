<template>
    <div>
        <form class="form" id="user-add" @submit.prevent>
            <h1 class="form__title">Add new user</h1>
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
    height: 360px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    border: 1px dotted gray;
}

.form__title {}

.form__group {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    height: 70px;
}
</style>
