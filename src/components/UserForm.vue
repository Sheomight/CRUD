<template>
    <div>
        <form class="form" @submit.prevent="addNewUser">
            <div class="form__inner">
                <h1 class="form__title">Add new user</h1>
                <div class="form__group">
                    <label>Name</label>
                    <my-input id="user-name" placeholder="Enter user name" v-model="user.name" required />
                </div>
                <div class="form__group">
                    <label>e-mail</label>
                    <my-input type="email" id="user-email" placeholder="Enter user e-mail" v-model="user.email" required />
                </div>
                <my-button>Add user</my-button>
            </div>
        </form>
    </div>
</template>
<script>
import MyButton from '@/components/UI/MyButton.vue';
import MyInput from '@/components/UI/MyInput.vue';


export default {
    components: {
        MyButton, MyInput
    },
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
</style>
