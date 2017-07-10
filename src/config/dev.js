const API_ENDPOINT_BASE = 'http://127.0.0.1:5000';

let config = {
    user_key: 'charity_user',
    API_AUTH_ENDPOINT: `${API_ENDPOINT_BASE}/auth`,
    API_DONATION_ENDPOINT: `${API_ENDPOINT_BASE}/donations`,
    API_USERS_ENDPOINT: `${API_ENDPOINT_BASE}/users`,
    API_TRANSACTION_ENDPOINT: `${API_ENDPOINT_BASE}/transactions`
};

export default config;
