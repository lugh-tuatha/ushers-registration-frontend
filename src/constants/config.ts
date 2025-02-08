const ENVIRONMENT = import.meta.env.VITE_ENV
console.log(ENVIRONMENT)
export const API_BASE_URL = 
    ENVIRONMENT === 'development'
        ? 'http://localhost:5000/api/v1'
        : 'https://ushers-registration-backend.onrender.com/api/v1';