import * as yup from "yup";

export const AccountSchema = yup.object().shape({
    password: yup
        .string()
        .required("Hãy nhập mật khẩu cũ")
        .min(5, "Mật khẩu phải lớn hơn 5 ký tự"),
    newPassword: yup
        .string()
        .required("Hãy nhập mật khẩu mới")
        .min(5, "Mật khẩu phải lớn hơn 5 ký tự"),
    reNewPassword: yup
        .string()
        .required("Hãy nhập lại mật khẩu mới")
        .min(5, "Mật khẩu phải lớn hơn 5 ký tự")
        .oneOf([yup.ref("newPassword"), null], "Mật khẩu mới không trùng nhau"),
});

export const LoginSchema = yup.object().shape({
    username: yup
        .string()
        .required("Hãy nhập tài khoản")
        .min(5, "Tài khoản phải lớn hơn 5 ký tự"),
    password: yup
        .string()
        .required("Hãy nhập mật khẩu")
        .min(5, "Mật khẩu phải lớn hơn 5 ký tự"),
});

export const SignupSchema = yup.object().shape({
    fullName: yup
        .string()
        .required("Hãy nhập họ và tên")
        .min(5, "Họ và tên phải lớn hơn 5 ký tự"),
    username: yup
        .string()
        .required("Hãy nhập tài khoản")
        .min(5, "Tài khoản phải lớn hơn 5 ký tự"),
    password: yup
        .string()
        .required("Hãy nhập mật khẩu")
        .min(5, "Mật khẩu phải lớn hơn 5 ký tự"),
    confirmPassword: yup
        .string()
        .required("Hãy nhập mật khẩu")
        .min(5, "Mật khẩu phải lớn hơn 5 ký tự")
        .oneOf([yup.ref("password"), null], "Mật khẩu không trùng nhau"),
});

export const validationFormQuestion = (title, correctAnswer, classQuestion) => {
    const errors = {};
    if (!title) {
        errors.title = "Hãy nhập đề bài";
    } else if (typeof title === "undefined") {
        errors.title = "Đề bài không hợp lệ";
    }
    // ==============================PASSWORD================================
    if (!correctAnswer) {
        errors.correctAnswer = "Hãy nhập đáp án là số nguyên";
    }

    if (classQuestion === 0) {
        errors.classQuestion = "Hãy chọn lớp mà bạn muốn thêm câu hỏi";
    }

    return errors;
};

export const validationIdQuestion = (idQuestion) => {
    const errors = {};
    if (!idQuestion) {
        errors.idQuestion = "Hãy nhập ID câu hỏi";
    } else if (typeof idQuestion === "undefined") {
        errors.idQuestion = "ID không hợp lệ";
    }
    return errors;
};
