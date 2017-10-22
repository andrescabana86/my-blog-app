import {rootUrl, headers} from './config.header.js';


export const getAll = () =>
	fetch(`${rootUrl}/categories`, { headers })
		.then(res => res.json())
		.then(data => data.categories);

export const getPosts = (categoryId) =>
	fetch(`${rootUrl}/${categoryId}/posts/`, { headers })
		.then(res => res.json());
