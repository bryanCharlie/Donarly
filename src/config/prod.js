const API_ENDPOINT_BASE = '';

let config = {
    user_key: 'charity_user',
    API_AUTH_ENDPOINT: `${API_ENDPOINT_BASE}/auth`,
    API_DONATION_ENDPOINT: `${API_ENDPOINT_BASE}/donations`,
    API_PROFILE_ENDPOINT: `${API_ENDPOINT_BASE}/users`,
    API_TRANSACTION_ENDPOINT: `${API_ENDPOINT_BASE}/transactions`
};

export default config;