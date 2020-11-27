import { showAlert } from "../../untils/functions";
import {
    actionSetQuestions,
    actionSetRanks,
    actionSetToken,
    actionSetUser,
    actionUploadQuestionSuccess,
    actionUpdateRanksSuccess,
    actionUploadRanksSuccess,
    actionShowLoading,
    actionHideLoading,
} from "../actions";
import {
    APIfetchQuestions,
    APIfetchRanks,
    APIupdateQuestion,
    APIuploadQuestion,
    APIupdateRankUser,
    APIpostRankUser,
} from "../../apis";
import { STATUS_CODE } from "../../untils/constants";

export const loginThunk = (username, password) => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        if ((username === "admin", password === "admin")) {
            await dispatch(actionSetToken("accessToken"));
            showAlert("Đăng nhập thành công !");
            dispatch(actionHideLoading());
            return true;
        }
        dispatch(actionHideLoading());
        showAlert("Tài khoản hoặc mật khẩu không chính xác !");
        return false;
    };
};

export const fetchQuestionsThunk = () => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIfetchQuestions();
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionSetQuestions(data));
        } else {
            showAlert("Lấy dữ liệu câu hỏi thất bại !");
        }
        dispatch(actionHideLoading());
    };
};

export const searchQuestionsThunk = (id) => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIfetchQuestions(id);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionHideLoading());
            return data;
        } else {
            dispatch(actionHideLoading());
            showAlert("Không tìm thấy câu hỏi này !");
            return false;
        }
    };
};

export const uploadQuestionThunk = (question) => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIuploadQuestion(question);
        const { status, data } = res;
        if (status === STATUS_CODE.CREATED) {
            showAlert("Thêm thành công !");
            dispatch(actionUploadQuestionSuccess(data));
            dispatch(actionHideLoading());
            return true;
        } else {
            dispatch(actionHideLoading());
            showAlert("Đã xảy ra lỗi !");
            return false;
        }
    };
};

export const updateQuestionThunk = (question, id) => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIupdateQuestion(question, id);
        const { status } = res;
        if (status === STATUS_CODE.SUCCESS) {
            showAlert("Cập nhật thành công !");
            dispatch(actionHideLoading());
            return true;
        } else {
            dispatch(actionHideLoading());
            showAlert("Đã xảy ra lỗi !");
            return false;
        }
    };
};

export const fetchRanksThunk = () => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIfetchRanks();
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            dispatch(actionSetRanks(data));
            dispatch(actionHideLoading());
            return true;
        } else {
            dispatch(actionHideLoading());
            showAlert("Lấy dữ liệu xếp hạng thất bại !");
            return false;
        }
    };
};

export const checkInformationThunk = (nameUser, passwordUser) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const ranks = await getState().ranks;
        let userAlreadyExists = null;
        let userDuplicateName = null;
        await ranks.map((item) => {
            if (item.name === nameUser && item.password === passwordUser) {
                //trường hợp trùng tên || ng dùng nhập sai pass
                userAlreadyExists = item;
                return false;
            } else if (
                item.name === nameUser &&
                item.password !== passwordUser
            ) {
                //trường hợp trùng tên || ng dùng nhập sai pass
                userDuplicateName = item;
                return false;
            }
        });
        dispatch(actionHideLoading());
        if (userAlreadyExists) {
            //Người dùng đã tồn tại
            dispatch(actionSetUser({ nameUser, passwordUser }));
            return true;
        } else if (userDuplicateName) {
            //Tên đã tồn tại, sai mật khẩu
            return false;
        } else {
            //chưa có dữ liệu user trong database
            dispatch(actionSetUser({ nameUser, passwordUser }));
            return true;
        }
    };
};

export const updateRanksThunk = (
    nameUser,
    passwordUser,
    classNameUser,
    scoreUser
) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const ranks = await getState().ranks;
        const user = ranks.find(
            (item) =>
                item.name === nameUser &&
                item.password === passwordUser &&
                item.class === classNameUser
        );
        if (user) {
            //tìm thấy user trong Ranks => update score cho user
            const { id, score } = user;
            const newScore = score + scoreUser;
            const res = await APIupdateRankUser({ score: newScore }, id);
            const { status, data } = res;
            dispatch(actionHideLoading());
            if (status === STATUS_CODE.SUCCESS) {
                dispatch(actionUpdateRanksSuccess(data));
                showAlert("Cập nhật xếp hạng thành công !");
                return true;
            } else {
                showAlert("Đã xảy ra lỗi !");
                return false;
            }
        } else {
            //không tìm thấy => post score cho user
            const res = await APIpostRankUser({
                name: nameUser,
                password: passwordUser,
                score: scoreUser,
                class: classNameUser,
            });
            const { status, data } = res;
            dispatch(actionHideLoading());
            if (status === STATUS_CODE.CREATED) {
                showAlert("Cập nhật xếp hạng thành công !");
                dispatch(actionUploadRanksSuccess(data));
                return true;
            } else {
                showAlert("Đã xảy ra lỗi !");
                return false;
            }
        }
    };
};
