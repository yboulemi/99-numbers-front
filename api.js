// API's base URL
//const BASE_URL = "http://localhost:3252/api";
const BASE_URL = "https://99-numbers.com:8443/api";

// Helper function to make an API request
async function apiRequest(endpoint, method, data = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
            // Include the authorization header with the token for protected endpoints
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            const errorData = await response.json(); 
            throw new Error(errorData.message || 'Unknown error'); 
        }
        return await response.json();
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }
}

// Function to perform a registration
export async function register(email, login, password) {
    if (process.client) {
        const apiResult = await apiRequest("/user/register", "POST", {
            email,
            login,
            password,
        });
        if (
            apiResult.token &&
            apiResult.userId &&
            apiResult.login
        ) {
            console.log("Registration successful");
        } else {
            throw new Error("Registration failed");
        }
        return apiResult;
    }
}


// Function to perform a login
export async function login(email, password) {
    if (process.client) {
        const apiResult = await apiRequest("/user/login", "POST", {
            email,
            password,
        });
        if (
            apiResult.data.token &&
            apiResult.data.userId &&
            apiResult.data.login
        ) {
            console.log("Login successful");
        } else {
            throw new Error("Login failed");
        }
        return apiResult;
    }
}

// Function to delete your account
export async function deleteUser() {
    if (process.client) {
        // Ensure there's a logged-in user
        if (!localStorage.getItem("authToken")) {
            throw new Error("User is not logged in");
        }
        const apiResult = await apiRequest(
            "/user/delete/" + localStorage.getItem("userId"),
            "DELETE",
        );
        return apiResult;
    }
}

// Function to modify your password
export async function modifyPassword(newPassword) {
    if (process.client) {
        // Retrieve userId from localStorage if needed for the request body
        const userId = localStorage.getItem("userId");

        if (!userId || !localStorage.getItem("authToken")) {
            throw new Error("User is not logged in");
        }

        const apiResult = await apiRequest("/user/modify-password", "PATCH", {
            userId,
            newPassword,
        });
        return apiResult;
    }
}


// Function to create a new pick
export async function createPick(number_picked) {
    // Retrieve userId from localStorage
    const user_id = localStorage.getItem("userId");

    // Check if the user is logged in (i.e., both userId and authToken are present)
    if (!user_id || !localStorage.getItem("authToken")) {
        throw new Error("User is not logged in");
    }

    // Proceed with the API request if the user is logged in
    const data = await apiRequest("/pick/", "POST", { user_id, number_picked });
    return data;
}

// Function to get all user picks with their outcomes
export async function getUserPicks() {
    // Check if the user is logged in
    const userId = localStorage.getItem("userId");
    if (!userId || !localStorage.getItem("authToken")) {
        throw new Error("User is not logged in");
    }

    // Proceed with the API request if the user is logged in
    const data = await apiRequest(`/pick/user/${userId}`, "GET");
    return data;
}

export async function getPicksFromLatestRoundForUser() {
    const userId = localStorage.getItem("userId");
    if (!userId || !localStorage.getItem("authToken")) {
        throw new Error("User is not logged in");
    }

    const data = await apiRequest(`/pick/user/${userId}/latest-round`, "GET");
    return data;
}

export async function checkUserHasPlayedToday() {
    const userId = localStorage.getItem("userId");
    if (!userId || !localStorage.getItem("authToken")) {
        throw new Error("User is not logged in");
    }

    const data = await apiRequest(`/user/${userId}/has-played-today`, "GET");
    return data.hasPlayedToday;
}

// admin functions
// Function to get all users (admin only)
export async function getAllUsers() {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
        throw new Error("user is not logged in");
    }

    // Proceed with the API request if the user is logged in and has admin rights
    try {
        const users = await apiRequest('/admin/users', 'GET');
        return users;
    } catch (error) {
        console.error('Failed to retrieve all users:', error);
        throw error;
    }
}

export async function updateUserRole(userId, newRole) {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
        throw new Error("User is not logged in");
    }

    const data = {
        newRole
    };

    // Proceed with the API request if the user is logged in and has admin rights
    try {
        const response = await apiRequest(`/admin/user/${userId}/role`, 'PATCH', data);
        return response;
    } catch (error) {
        console.error('Failed to update user role:', error);
        throw error;
    }
}

