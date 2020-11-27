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

const request = async (method, url, data) => {
    configAxios.url = url;
    configAxios.data = data;
    configAxios.method = method;
    const res = await Axios(configAxios);
    return res;
};

export const Get = async ({ url }) => {
    const res = await request("GET", url, null);
    return res;
};

export const Post = async ({ url, data }) => {
    const res = await request("POST", url, data);
    return res;
};

export const Put = async ({ url, data }) => {
    const res = await request("PUT", url, data);
    return res;
};

export const Delete = async ({ url }) => {
    const res = await request("DELETE", url);
    return res;
};
