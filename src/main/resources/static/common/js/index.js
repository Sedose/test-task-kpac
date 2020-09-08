const KPAC_API = '/api/v1/kpacs/';
const KPAC_SET_API = '/api/v1/kpac-sets/';

function toQueryParams(requestParams) {
    return Object.keys(requestParams)
        .filter(key => requestParams[key])
        .map(key => `${key}=${requestParams[key]}`)
        .join('&');
}

async function retrieveJsonResponse(url) {
    const response = await fetch(url);
    return await response.json();
}