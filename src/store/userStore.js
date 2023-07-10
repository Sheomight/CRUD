import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue';

export const useUserStore = defineStore('userStore', () => {

  const users = ref([
    {
      id: 1,
      name: 'John',
      email: 'j.trvlt@yahoo.com',
      isEditing: false,

    },
    {
      id: 2,
      name: 'Adolf',
      email: 'adolBf@gmail.com',
      isEditing: false,
    },
    {
      id: 3,
      name: 'Alex',
      email: 'alex-hirsh@gmail.com',
      isEditing: false,
    },
    {
      id: 4,
      name: 'Admin',
      email: 'coolAdmin@bk.co',
      isEditing: false,
    },
    {
      id: 5,
      name: 'Admin333',
      email: 'coolAdmin21321@bk.co',
      isEditing: false,
    }
  ]);

  const usersInLocalStorage = localStorage.getItem('users');

  if (usersInLocalStorage) {
    users.value = JSON.parse(usersInLocalStorage)._value
  }

  watch(() => users, (state) => {
    localStorage.setItem('users', JSON.stringify(state))
  }, { deep: true });


  return {
    users,
  }
})