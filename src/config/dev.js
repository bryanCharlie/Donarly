const API_ENDPOINT_BASE = 'https://flask-json-api.herokuapp.com';
const CC_PUBLIC_KEY = 'pk_test_hoqO8vgA9RK-VSXr6gCU1Q';

let config = {
    user_key: 'charity_user',
    API_AUTH_ENDPOINT: `${API_ENDPOINT_BASE}/auth`,
    API_DONATION_ENDPOINT: `${API_ENDPOINT_BASE}/donations`,
    API_USERS_ENDPOINT: `${API_ENDPOINT_BASE}/users`,
    API_TRANSACTION_ENDPOINT: `${API_ENDPOINT_BASE}/transactions`,
    API_CHARITIES_ENDPOINT: `${API_ENDPOINT_BASE}/charities`,
    API_CREDIT_CARD_ENDPOINT: `${API_ENDPOINT_BASE}/credit-card`,
    DEFAULT_PAGE_SIZE: 25
};

export default config;
