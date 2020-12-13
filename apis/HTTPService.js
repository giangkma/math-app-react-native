import Axios from "axios";

export const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const configAxios = {
    headers: headers,
};

const nonAuth = async (method, url, data) => {
    configAxios.url = url;
    configAxios.data = data;
    configAxios.method = method;
    const res = await Axios(configAxios);
    return res;
};
const Auth = async (method, url, data, accessToken) => {
    headers.Authorization = `Bearer ${accessToken}`;
    configAxios.method = method;
    configAxios.url = url;
    configAxios.data = data;
    const res = await Axios(configAxios);
    return res;
};

export const Get = async ({ url }) => {
    const res = await nonAuth("GET", url, null);
    return res;
};

export const Post = async ({ url, data }) => {
    const res = await nonAuth("POST", url, data);
    return res;
};

export const Put = async ({ url, data }) => {
    const res = await nonAuth("PUT", url, data);
    return res;
};

export const Delete = async ({ url }) => {
    const res = await nonAuth("DELETE", url);
    return res;
};

export const AuthGet = async ({ url, accessToken }) => {
    const res = await Auth("GET", url, null, accessToken);
    return res;
};

export const AuthPost = async ({ url, data, accessToken }) => {
    const res = await Auth("POST", url, data, accessToken);
    return res;
};

export const AuthPut = async ({ url, data, accessToken }) => {
    const res = await Auth("PUT", url, data, accessToken);
    return res;
};

export const AuthDelete = async ({ url, accessToken }) => {
    const res = await Auth("DELETE", url, null, accessToken);
    return res;
};
