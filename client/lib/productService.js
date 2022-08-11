import http from './httpService';

const apiEndpoint = 'http://localhost:3001/graphql';
const graphqlQuery = {
	query: 'query fetchProducts { allProducts{ fields }}',
};

export async function getProducts() {
	return http.post(apiEndpoint, graphqlQuery);
}
