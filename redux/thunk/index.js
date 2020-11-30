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
    APIfetchUsers,
    APIupdateUser
} from "../../apis";
import { STATUS_CODE } from "../../untils/constants";

export const loginThunk = (username, password) => {
    return async (dispatch) => {
        dispatch(actionShowLoading());
        const res = await APIfetchUsers();
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            const user = await data.find(
                (user) =>
                    user.username === username && user.password === password
            );
            if (user) {
                setTimeout(async () => {
                    await dispatch(actionSetUser(user));
                    if ((username === "admin")) {
                        await dispatch(actionSetToken("admin"));
                    } else {
                        await dispatch(actionSetToken("user"));
                    }
                    dispatch(actionHideLoading());
                    showAlert("Đăng nhập thành công !");
                    return true;
                }, 2000);
            } else {
                setTimeout(() => {
                    dispatch(actionHideLoading());
                    showAlert("Tài khoản hoặc mật khẩu không chính xác !");
                    return false;
                }, 2000);
            }
        }
    };
};

export const fetchInformationUserThunk = () => {
    return async (dispatch, getState) => {
        const user = await getState().user;
        const res = await APIfetchUsers();
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            const newInforUser = data.find((item) => item.id === user.id);
            dispatch(actionSetUser(newInforUser));
        } else {
            showAlert("Lấy dữ liệu người dùng thất bại !");
        }
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

export const checkInformationThunk = (fullName, password) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const ranks = await getState().ranks;
        let userAlreadyExists = null;
        let userDuplicateName = null;
        await ranks.map((item) => {
            if (item.name === fullName && item.password === password) {
                //trường hợp trùng tên || ng dùng nhập sai pass
                userAlreadyExists = item;
                return false;
            } else if (
                item.name === fullName &&
                item.password !== password
            ) {
                //trường hợp trùng tên || ng dùng nhập sai pass
                userDuplicateName = item;
                return false;
            }
        });
        dispatch(actionHideLoading());
        if (userAlreadyExists) {
            //Người dùng đã tồn tại
            dispatch(actionSetUser({ fullName, password }));
            return true;
        } else if (userDuplicateName) {
            //Tên đã tồn tại, sai mật khẩu
            return false;
        } else {
            //chưa có dữ liệu user trong database
            dispatch(actionSetUser({ fullName, password }));
            return true;
        }
    };
};

export const updateRanksThunk = (
    fullName,
    password,
    classUser,
    scoreUser
) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const ranks = await getState().ranks;
        const user = ranks.find(
            (item) =>
                item.name === fullName &&
                item.password === password &&
                item.class === classUser
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
                name: fullName,
                password: password,
                score: scoreUser,
                class: classUser,
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

export const updateInformationUserThunk = (user, id) => {
    return async (dispatch, getState) => {
        dispatch(actionShowLoading());
        const res = await APIupdateUser(user, id);
        const { status, data } = res;
        if (status === STATUS_CODE.SUCCESS) {
            showAlert("Thay đổi mật khẩu thành công !");
            dispatch(actionSetUser(data));
            dispatch(actionHideLoading());
            return true;
        } else {
            dispatch(actionHideLoading());
            showAlert("Đã xảy ra lỗi !");
            return false;
        }
    };
};