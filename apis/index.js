import { API, API_REPORT_MOCK } from "../untils/constants";
import { AuthGet, AuthPost, AuthPut, Get, Post, Put } from "./HTTPService";

export const APIlogin = async (username, password) => {
    const data = JSON.stringify({
        username: username,
        password: password,
    });
    const url = `${API}/sign-in`;
    const res = await Post({
        url,
        data,
    });
    return res;
};
export const APIsignup = async (username, password, fullName) => {
    const data = JSON.stringify({
        username: username,
        password: password,
        passwordConfirmation: password,
        fullName: fullName,
    });
    const url = `${API}/sign-up`;
    const res = await Post({
        url,
        data,
    });
    return res;
};
export const APIgetProfile = async (accessToken) => {
    const url = `${API}/me`;
    const res = await AuthGet({ url, accessToken });
    return res;
};

export const APIgetListUserReport = async () => {
    const url = API_REPORT_MOCK;
    const res = await Get({ url });
    return res;
};
export const APIfetchAllQuestionsInClass = async (className, accessToken) => {
    const url = `${API}/classrooms/${className}/questions`;
    const res = await AuthGet({ url, accessToken });
    return res;
};
export const APIfetchOneQuestion = async (idQuestion, accessToken) => {
    const url = `${API}/questions/${idQuestion}`;
    const res = await AuthGet({ url, accessToken });
    return res;
};
export const APIuploadQuestion = async (data, className, accessToken) => {
    const url = `${API}/classrooms/${className}/questions`;
    const res = await AuthPost({ url, data, accessToken });
    return res;
};

export const APIupdateQuestion = async (data, id, className, accessToken) => {
    const url = `${API}/classrooms/${className}/questions/${id}`;
    const res = await AuthPut({ url, data, accessToken });
    return res;
};

export const APIfetchRanks = async (className, accessToken) => {
    const url = `${API}/classrooms/${className}/ranks?limit=30&offset=0`;
    const res = await AuthGet({ url, accessToken });
    return res;
};

export const APIupdateRankUser = async (score, className, accessToken) => {
    const url = `${API}/classrooms/${className}/score`;
    const data = JSON.stringify({
        score: score,
        status: true,
    });
    const res = await AuthPut({ url, data, accessToken });
    return res;
};

export const APIpostRankUser = async (data) => {
    const url = API;
    const res = await Post({ url, data });
    return res;
};
export const APIuserReportQuestion = async (
    idQuestion,
    className,
    fullName
) => {
    const url = API_REPORT_MOCK;
    const data = JSON.stringify({
        fullName: fullName,
        className: className,
        idQuestion: idQuestion,
    });
    const res = await Post({ url, data });
    return res;
};

export const APIfetchUsers = async () => {
    const url = API;
    const res = await Get({ url });
    return res;
};

export const APIUploadUser = async (data) => {
    const url = API;
    const res = await Post({ url, data });
    return res;
};

export const APIupdateUser = async (data, id) => {
    const url = `${API}/${id}`;
    const res = await Put({ url, data });
    return res;
};
