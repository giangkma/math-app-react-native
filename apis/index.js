import { API_QUESTION, API_RANK } from "../untils/constants";
import { Get, Post, Put } from "./HTTPService";

export const APIfetchQuestions = async (id) => {
    const url = id ? `${API_QUESTION}/${id}` : API_QUESTION;
    const res = await Get({ url });
    return res;
};

export const APIuploadQuestion = async (data) => {
    const url = API_QUESTION;
    const res = await Post({ url, data });
    return res;
};

export const APIupdateQuestion = async (data, id) => {
    const url = `${API_QUESTION}/${id}`;
    const res = await Put({ url, data });
    return res;
};

export const APIfetchRanks = async () => {
    const url = API_RANK;
    const res = await Get({ url });
    return res;
};

export const APIupdateRankUser = async (data, id) => {
    const url = `${API_RANK}/${id}`;
    const res = await Put({ url, data });
    return res;
};

export const APIpostRankUser = async (data) => {
    const url = API_RANK;
    const res = await Post({ url, data });
    return res;
};
