import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // Initialize state without directly accessing localStorage
    token: null,
    userLogin: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    // This action is used to initialize state from localStorage when on the client-side
    initializeFromLocalStorage() {
      if (typeof window !== 'undefined') {
        this.token = localStorage.getItem('authToken');
        this.userLogin = localStorage.getItem('authUsername');
      }
    },
    setAuth(token, login) {
      this.token = token;
      this.userLogin = login;
      if (typeof window !== 'undefined') {
        localStorage.setItem('authToken', token);
        localStorage.setItem('authUsername', login);
      }
    },
    logout() {
      this.token = null;
      this.userLogin = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUsername');
      }
    },
  },
});
