import axios from 'axios';

const apiEndpoint = 'http://localhost:3001/graphql';
const headers = {
	'content-type': 'application/json',
};
const graphqlQuery = {
	query: 'query fetchProducts { allProducts{ fields }}',
};

export async function getProducts() {
	const response = axios({
		url: apiEndpoint,
		method: 'post',
		headers: headers,
		data: graphqlQuery,
	});
	return response;
}
