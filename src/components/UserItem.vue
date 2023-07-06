<template>
    <div v-if="!user.isEditing" class="user-slot">
        {{ user.name + ' ' + user.email }}
        <span class="action-btn">
            <action-btn class="edit-btn" @click="editUser(user)">E</action-btn>
            <action-btn class="danger-btn" @click="$emit('remove', user)">D</action-btn>
        </span>
    </div>
    <div v-else class="user-slot">
        <label>Name</label>
        <input v-model="changedName">
        <label>Email</label>
        <input v-model="changedEmail">
        <span class="action-btn">
            <action-btn class="confirm-btn" @click="confirmEditing(user)">Ok</action-btn>
            <action-btn class="danger-btn" @click="stopEditing(user)">X</action-btn>
        </span>
    </div>
</template>


<script>

export default {
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
            this.changedEmail = '';
            this.changedName = '';
            this.stopEditing(user);
        },
        stopEditing(user) {
            user.isEditing = false;
        },
    }
}
</script>


<style  scoped>
.user-slot {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border: 1px dotted gray;
    padding: 20px;
}

.action-btn {
    width: 120px;
    display: flex;
    justify-content: space-between;
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
