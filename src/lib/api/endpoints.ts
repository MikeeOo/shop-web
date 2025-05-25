export const API: string = '/api';

export const ENDPOINTS: Record<string, string> = {
	AUTH: `${API}/auth`,
	USERS: `${API}/users`,
};

export const ENDPOINT_MAP: Record<string, Record<string, string>> = {
	AUTH: {
		LOGIN: `${ENDPOINTS.AUTH}/login`,
		REGISTER: `${ENDPOINTS.AUTH}/register`,
		LOGOUT: `${ENDPOINTS.AUTH}/logout`,
		VERIFY: `${ENDPOINTS.AUTH}/verify`,
		FORGOT_PASSWORD: `${ENDPOINTS.AUTH}/forgot-password`,
		RESET_PASSWORD: `${ENDPOINTS.AUTH}/reset-password`,
		UPDATE_PASSWORD: `${ENDPOINTS.AUTH}/update-password`,
		UPDATE_PROFILE: `${ENDPOINTS.AUTH}/update-profile`,
		DELETE_PROFILE: `${ENDPOINTS.AUTH}/delete-profile`,
	},
	USERS: {
		GET_USERS: `${ENDPOINTS.USERS}/users`,
		GET_USER: `${ENDPOINTS.USERS}/users/:id`,
		CREATE_USER: `${ENDPOINTS.USERS}/users`,
		UPDATE_USER: `${ENDPOINTS.USERS}/users/:id`,
		DELETE_USER: `${ENDPOINTS.USERS}/users/:id`,
	},
};
