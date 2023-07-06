import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue';

export const useUserStore = defineStore('userStore', () => {

  const loginData = ref([
    {
      userId: 1,
      login: '123',
      password: 'qwerty',
      role: 'user'
    },
    {
      userId: 2,
      login: '1234',
      password: 'qwerty',
      role: 'user'
    },
    {
      userId: 3,
      login: '1235',
      password: 'qwerty',
      role: 'user'
    },
    {
      userId: 4,
      login: 'admin',
      password: 'admin',
      role: 'admin'
    },
    {
      userId: 5,
      login: 'admin2',
      password: 'admin',
      role: 'admin'
    }
  ]);
  const users = ref([
    {
      id: 1,
      name: 'John',
      email: 'j.trvlt@yahoo.com',
      role: 'user',
      isEditing: false,

    },
    {
      id: 2,
      name: 'Adolf',
      email: 'adolBf@gmail.com',
      role: 'user',
      isEditing: false,
    },
    {
      id: 3,
      name: 'Alex',
      email: 'alex-hirsh@gmail.com',
      role: 'user',
      isEditing: false,
    },
    {
      id: 4,
      name: 'Admin',
      email: 'coolAdmin@bk.co',
      role: 'admin',
      isEditing: false,
    },
    {
      id: 5,
      name: 'Admin333',
      email: 'coolAdmin21321@bk.co',
      role: 'admin',
      isEditing: false,
    }
  ]);
  const usersInLocalStorage = localStorage.getItem('users');
  if (usersInLocalStorage) {
    users.value = JSON.parse(usersInLocalStorage)._value
  }
  const loginInLocalStorage = localStorage.getItem('loginData');
  if (loginInLocalStorage) {
    loginData.value = JSON.parse(loginInLocalStorage)._value
  }


  let tabVersion = ref(1);

  const setTabVersion = (role) => {
    tabVersion.value = role == 'admin' ? 2 : 3;
  };

  watch(() => users, (state) => {
    localStorage.setItem('users', JSON.stringify(state))
  }, { deep: true });
  watch(() => loginData, (state) => {
    localStorage.setItem('loginData', JSON.stringify(state))
  }, { deep: true });

  return {
    users, loginData,
    tabVersion, setTabVersion,
  }
})