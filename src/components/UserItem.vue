<template>
    <tr v-if="!user.isEditing" class="user">
        <td class="user__name">
            {{ user.name }}
        </td>
        <td class="user__email">
            {{ user.email }}
        </td>
        <td class="action-btns">
            <action-btn class="edit-btn" @click="editUser(user)">E</action-btn>
            <action-btn class="danger-btn" @click="$emit('remove', user)">D</action-btn>
        </td>
    </tr>
    <tr v-else class="user">
        <td class="user__name">
            <my-input class="user__input" v-model="changedName" />
        </td>
        <td class="user__email">
            <my-input class="user__input" v-model="changedEmail" />
        </td>
        <td class="action-btns">
            <action-btn class="confirm-btn" @click="confirmEditing(user)">Ok</action-btn>
            <action-btn class="danger-btn" @click="stopEditing(user)">X</action-btn>
        </td>
    </tr>
</template>


<script>
import ActionButton from '@/components/UI/ActionButton.vue';
import MyInput from '@/components/UI/MyInput.vue';


export default {
    components: {
        ActionButton, MyInput
    },
    props: {
        user: {
            type: Object,
            requaired: true
        }
    },
    emits: ['remove'],
    data() {
        return {
            changedName: '',
            changedEmail: '',
        }
    },
    methods: {
        editUser(user) {
            user.isEditing = true;
            this.changedName = user.name;
            this.changedEmail = user.email;
        },
        confirmEditing(user) {
            user.name = this.changedName;
            user.email = this.changedEmail;
            this.stopEditing(user);
        },
        stopEditing(user) {
            this.changedEmail = '';
            this.changedName = '';
            user.isEditing = false;
        },
    }
}
</script>


<style  scoped>
td {
    height: 65px;
    border: 1px solid black;
    padding: 10px 20px;
}

.user__input {
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid teal;
    color: #000;
    width: 90%;
    height: 100%;
}

.user__input:focus {
    border-bottom: 3px solid teal;
}

.user {
    border: 1px dotted gray;
    padding: 20px;
}

.user__name {
    width: 45%;
}

.user__email {
    width: 45%;
}

.action-btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.danger-btn {
    background-color: red;
}

.confirm-btn {
    background-color: green;
}

.edit-btn {
    background-color: darkblue;
}
</style>
