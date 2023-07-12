<template>
    <div>
        <form class="form" @submit.prevent>
            <div class="form__inner">
                <h1 class="form__title">Add new user</h1>
                <div class="form__group">
                    <label>Name</label>
                    <input type="text" id="user-name" placeholder="Enter user name" v-model="user.name">
                </div>
                <div class="form__group">
                    <label>e-mail</label>
                    <input type="email" id="user-email" placeholder="Enter user e-mail" v-model="user.email">
                </div>
                <button @click="addNewUser">Add user</button>
            </div>
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
    display: flex;
    justify-content: center;
}

.form__inner {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    height: 450px;
    width: 450px;
    padding: 20px;
    box-shadow: 0px 5px 20px 2px #3266cc;
    margin: 30px 0;
    background-color: rgb(58, 148, 227);
    color: #fff;
}

.form__group {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90px;
    width: 80%;

}

input {
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    border-bottom: 2px solid rgb(0, 77, 200);
    color: rgb(255, 255, 255);
}

input::placeholder {
    color: #c8c8c8;
}

input:focus {
    outline: none;
    border-bottom: 5px solid rgb(0, 77, 200);

}

button {
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
}
</style>
