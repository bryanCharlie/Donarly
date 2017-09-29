const API_ENDPOINT_BASE = 'http://127.0.0.1:5000';

let config = {
    user_key: 'charity_user',
    API_AUTH_ENDPOINT: `${API_ENDPOINT_BASE}/auth`,
    API_DONATION_ENDPOINT: `${API_ENDPOINT_BASE}/donations`,
    API_PROFILE_ENDPOINT: `${API_ENDPOINT_BASE}/users`,
    API_TRANSACTION_ENDPOINT: `${API_ENDPOINT_BASE}/transactions`,
    API_CHARITIES_ENDPOINT: `${API_ENDPOINT_BASE}/charities`,
    DEFAULT_PAGE_SIZE: 25
};

export default config;
