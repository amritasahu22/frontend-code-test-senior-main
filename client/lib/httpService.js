// Excepted Error  (404: not found, 400: bad request) - Client Errors
// Unexpected Error - Network Down, Server Down, Database Down,
import axios from 'axios';
import logger from './logService';

axios.interceptors.response.use(null, error => {
	console.log('Interceptor called');

	const expectedError =
		error.response && error.response.status >= 400 && error.response < 500;

	if (!expectedError) {
		logger.log(error);
		console.log('An unexpected error occurred.');
	}

	return Promise.reject(error);
});

axios.defaults.headers.common['content-type'] = 'application/json';

const http = {
	get: axios.get,
	post: axios.post,
};
export default http;
