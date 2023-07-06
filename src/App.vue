<template>
  <header>

  </header>
  <div v-if="userStore.tabVersion == 1">
    <autorisation-form class="autorisation" :current-id="userStore.loginData.length" />
  </div>
  <div class="editMode" v-else-if="userStore.tabVersion == 2">
    <user-form @create="addNewUser" :current-id="userList.length" />
    <user-list :userList="this.userList" @remove="removeUser" />
  </div>
  <div v-else>
    <h1>Hello World!!</h1>
  </div>
</template>

<script>
import { useUserStore } from './store/userStore'
import AutorisationForm from './components/AutorisationForm.vue'
import UserForm from './components/UserForm.vue'
import UserList from './components/UserList.vue'
import ActionButton from './components/UI/ActionButton.vue'

export default {
  components: {
    AutorisationForm,
    UserForm,
    UserList,
    ActionButton,
  },
  data() {
    return {
      userStore: useUserStore(),
      userList: [],

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
  mounted() {
    this.userList = this.userStore.users
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  padding: 20px 30px;
}

header {
  display: flex;
  justify-content: space-between;
}

.autorisation {
  width: 30%;
  margin: 0 auto;
}
</style>
