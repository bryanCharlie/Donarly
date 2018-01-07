const API_ENDPOINT_BASE = 'http://127.0.0.1:5000';
const CC_PUBLIC_KEY = 'pk_test_hoqO8vgA9RK-VSXr6gCU1Q';

let config = {
    user_key: 'charity_user',
    API_AUTH_ENDPOINT: `${API_ENDPOINT_BASE}/auth`,
    API_DONATION_ENDPOINT: `${API_ENDPOINT_BASE}/donations`,
    API_USERS_ENDPOINT: `${API_ENDPOINT_BASE}/users`,
    API_TRANSACTION_ENDPOINT: `${API_ENDPOINT_BASE}/transactions`,
    API_CHARITIES_ENDPOINT: `${API_ENDPOINT_BASE}/charities`,
    DEFAULT_PAGE_SIZE: 25
};

export default config;
