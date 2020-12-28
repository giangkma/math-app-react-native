import {
    APIfetchAllQuestionsInClass,
    APIfetchOneQuestion,
    APIfetchRanks,
    APIgetListUserReport,
    APIgetProfile,
    APIlogin,
    APIsignup,
    APIupdateQuestion,
    APIupdateRankUser,
    APIuploadQuestion,
    APIuserReportQuestion,
} from "../../apis";
import { STATUS_CODE } from "../../untils/constants";
import { showAlert, showToastAndroid } from "../../untils/functions";
import {
    actionHideLoading,
    actionSetQuestions,
    actionSetRanks,
    actionSetReports,
    actionSetRole,
    actionSetToken,
    actionSetUser,
    actionShowLoading,
    actionUploadQuestionSuccess,
} from "../actions";

export const loginThunk = (username, password) => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIlogin(username, password);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            if (username === "giaovien") {
                dispatch(actionSetRole("admin"));
            } else {
                dispatch(actionSetRole("user"));
            }
            const { accessToken } = data;
            dispatch(actionSetToken(accessToken));
            dispatch(fetchInformationUserThunk());
            dispatch(actionHideLoading());
            showToastAndroid("Đăng nhập thành công !");
            return true;
        } else {
            dispatch(actionHideLoading());
            showToastAndroid("Tài khoản hoặc mật khẩu không chính xác !");
            return false;
        }
    };
};
export const singupThunk = (username, password, fullName) => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIsignup(username, password, fullName);
        const { status } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionHideLoading());
            showToastAndroid("Đăng ký tài khoản thành công !");
            return true;
        } else {
            dispatch(actionHideLoading());
            showToastAndroid("Tài khoản đã tồn tại !");
            return false;
        }
    };
};
export const fetchInformationUserThunk = () => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const accessToken = getState().accessToken;
        const res = await APIgetProfile(accessToken);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionSetUser(data));
        } else {
            showToastAndroid("Lấy dữ liệu người dùng thất bại !");
        }
        dispatch(actionHideLoading());
    };
};
export const userReportQuestionThunk = (idQuestion) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const accessToken = getState().accessToken;
        const res = await APIuserReportQuestion(idQuestion, accessToken);
        const { status } = res;
        if (status === STATUS_CODE.CREATED) {
            showAlert(
                "Cảm ơn bạn đã báo cáo cho chúng tôi ! chúng tôi sẽ xem sét câu hỏi này sớm nhất có thể. Hãy tiếp tục làm bài nhé !",
                "Báo cáo thành công ✔️"
            );
        } else {
            showToastAndroid("Đã xảy ra lỗi !");
        }
        dispatch(actionHideLoading());
    };
};
export const fetchListUserReportThunk = () => {
    return async (dispatch, getState) => {
        const accessToken = getState().accessToken;
        const res = await APIgetListUserReport(accessToken);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionSetReports(data));
        } else {
            showToastAndroid("Lấy dữ liệu người dùng thất bại !");
        }
    };
};

export const fetchQuestionsThunk = (className) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const accessToken = getState().accessToken;
        const res = await APIfetchAllQuestionsInClass(className, accessToken);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionSetQuestions(data));
        } else {
            showToastAndroid("Lấy dữ liệu câu hỏi thất bại !");
        }
        dispatch(actionHideLoading());
    };
};

export const searchQuestionsThunk = (id) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const accessToken = getState().accessToken;
        const res = await APIfetchOneQuestion(id, accessToken);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionHideLoading());
            return data;
        } else {
            dispatch(actionHideLoading());
            showToastAndroid("Không tìm thấy câu hỏi này !");
            return false;
        }
    };
};

export const uploadQuestionThunk = (question, className) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const accessToken = getState().accessToken;
        const res = await APIuploadQuestion(question, className, accessToken);
        const { status, data } = res;
        if (status === STATUS_CODE.CREATED) {
            showToastAndroid("Thêm thành công !");
            dispatch(actionUploadQuestionSuccess(data));
            dispatch(actionHideLoading());
            return true;
        } else {
            dispatch(actionHideLoading());
            showToastAndroid("Đã xảy ra lỗi !");
            return false;
        }
    };
};

export const updateQuestionThunk = (question, id, className) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const accessToken = getState().accessToken;
        const res = await APIupdateQuestion(
            question,
            id,
            className,
            accessToken
        );
        const { status } = res;
        if (status === 204) {
            showToastAndroid("Cập nhật thành công !");
            dispatch(actionHideLoading());
            return true;
        } else {
            dispatch(actionHideLoading());
            showToastAndroid("Đã xảy ra lỗi !");
            return false;
        }
    };
};

export const fetchRanksThunk = (className, accessToken) => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIfetchRanks(className, accessToken);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionSetRanks(data));
            dispatch(actionHideLoading());
            return true;
        } else {
            dispatch(actionHideLoading());
            showToastAndroid("Lấy dữ liệu xếp hạng thất bại !");
            return false;
        }
    };
};

export const updateRanksThunk = (score, className) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const accessToken = getState().accessToken;
        const res = await APIupdateRankUser(score, className, accessToken);
        const { status } = res;
        if (status === 204) {
            showToastAndroid("Cập nhật xếp hạng thành công !");
            dispatch(actionHideLoading());
            return true;
        } else {
            dispatch(actionHideLoading());
            showToastAndroid("Đã xảy ra lỗi !");
            return false;
        }
    };
};
