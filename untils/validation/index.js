export const validationLogin = (username, password) => {
    const errors = {};
    if (!username) {
        errors.username = "Hãy nhập tài khoản";
    } else if (typeof username === "undefined") {
        errors.username = "Tài khoản không hợp lệ";
    }
    // ==============================PASSWORD================================
    if (!password) {
        errors.password = "Hãy nhập mật khẩu";
    } else if (
        typeof password === "undefined" ||
        password.split(" ").length > 1
    ) {
        errors.password = "Mật khẩu không hợp lệ";
    }

    return errors;
};

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
