import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        token: null,
        userLogin: null,
        userId: null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    actions: {
        initializeFromLocalStorage() {
            if (typeof window !== "undefined") {
                const token = localStorage.getItem("authToken");
                const userLogin = localStorage.getItem("authUsername");
                const userId = localStorage.getItem("userId");
                if (token && userLogin && userId) {
                    this.setAuth(token, userLogin, userId);
                }
            }
        },
        setAuth(token, userLogin, userId) {
            this.token = token;
            this.userLogin = userLogin;
            this.userId = userId;
            if (typeof window !== "undefined") {
                localStorage.setItem("authToken", token);
                localStorage.setItem("authUsername", userLogin);
                localStorage.setItem("userId", userId);
            }
        },
        logout() {
            this.token = null;
            this.userLogin = null;
            this.userId = null;
            if (typeof window !== "undefined") {
                localStorage.removeItem("authToken");
                localStorage.removeItem("authUsername");
                localStorage.removeItem("userId");
            }
        },
    },
});
