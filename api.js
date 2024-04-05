// API's base URL
const BASE_URL = 'http://localhost:3252/api';

// Helper function to make an API request
async function apiRequest(endpoint, method, data = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            // Include the authorization header with the token for protected endpoints
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }
}

// Function to perform a login
export async function login(email, password) {
    if (process.client) {
        const apiResult = await apiRequest('/user/login', 'POST', { email, password });
        if (apiResult.data.token && apiResult.data.userId && apiResult.data.login) {
            console.log('Login successful');
        } else {
            throw new Error('Login failed');
        }
        return apiResult;
    }
}

// Function to delete your account
export async function deleteUser() {
    if (process.client) {
        // Ensure there's a logged-in user
        if (!localStorage.getItem('authToken')) {
            throw new Error('User is not logged in');
        }
        const apiResult = await apiRequest('/user/delete/' + localStorage.getItem('userId'), 'DELETE');
        return apiResult;
    }
}

// Function to modify your password
export async function modifyPassword(newPassword) {
    if (process.client) {
        // Retrieve userId from localStorage if needed for the request body
        const userId = localStorage.getItem('userId');

        if (!userId || !localStorage.getItem('authToken')) {
            throw new Error('User is not logged in');
        }

        const apiResult = await apiRequest('/user/modify-password', 'PATCH', { userId, newPassword });
        return apiResult;
    }
}


// Example function for a protected API call
// export async function fetchProtectedData() {
//     return await apiRequest('/some/protected/endpoint', 'GET');
// }


// Function to create a new pick
export async function createPick(number_picked) {
    // Retrieve userId from localStorage
    const user_id = localStorage.getItem('userId');
    
    // Check if the user is logged in (i.e., both userId and authToken are present)
    if (!user_id || !localStorage.getItem('authToken')) {
        throw new Error('User is not logged in');
    }

    // Proceed with the API request if the user is logged in
    const data = await apiRequest('/pick/', 'POST', { user_id, number_picked });
    return data;
}

// Function to get all user picks with their outcomes
export async function getUserPicks() {
    // Check if the user is logged in
    const userId = localStorage.getItem('userId');
    if (!userId || !localStorage.getItem('authToken')) {
        throw new Error('User is not logged in');
    }

    // Proceed with the API request if the user is logged in
    const data = await apiRequest(`/pick/user/${userId}`, 'GET');
    return data;
}

export async function getPicksFromLatestRoundForUser() {
    const userId = localStorage.getItem('userId');
    if (!userId || !localStorage.getItem('authToken')) {
        throw new Error('User is not logged in');
    }

    const data = await apiRequest(`/pick/user/${userId}/latest-round`, 'GET');
    return data;
}
