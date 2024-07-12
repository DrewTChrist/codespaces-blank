import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserLoginStore = defineStore('userLoginStore', () => {
  const authenticated = ref(false)
  const authFailed = ref(false)
  return { authenticated }
})
