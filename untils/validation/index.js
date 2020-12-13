import * as yup from "yup";
import { randomArrayAnswer } from "../functions";

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

export const validateQuestionPage = (
    data,
    classQuestion,
    title,
    correctAnswer,
    isRandomArrayAsnwer
) => {
    const error = validationClassAndTitle(classQuestion, title);
    if (error) return { message: error };
    else {
        //Trường hợp user chọn "Hệ thống tự random câu hỏi";
        const newData = {};
        if (isRandomArrayAsnwer) {
            const numberCorrectAnswer = Number(data.correctAnswer);
            // kiểm tra đáp án nhập vào có phải là number không, vì nếu là string thì k random dc;
            const error = validationCorrectAnswer(data.correctAnswer);
            if (error) return { message: error };
            else {
                newData.arrayAnswer = randomArrayAnswer(numberCorrectAnswer);
                newData.question = title;
                newData.correctAnswer = numberCorrectAnswer;
            }
        } else {
            //Truong hợp user tự nhập đáp án
            const { answer1, answer2, answer3, answer4 } = data;
            const error = validationAnswerQuestion(
                answer1,
                answer2,
                answer3,
                answer4
            );
            if (error) {
                return { message: error };
            } else {
                if (!correctAnswer)
                    return { message: "Hãy chọn đáp án chính xác !" };
                else {
                    newData.question = title;
                    newData.arrayAnswer = [answer1, answer2, answer3, answer4];
                    newData.correctAnswer = data[correctAnswer];
                }
            }
        }
        return [
            {
                question: newData.question,
                arrayAnswer: newData.arrayAnswer,
                correctAnswer: newData.correctAnswer,
            },
        ];
    }
};

const validationAnswerQuestion = (answer1, answer2, answer3, answer4) => {
    let errors = null;
    if (!answer1 || !answer2 || !answer3 || !answer4) {
        errors = "Hãy nhập đầy đủ các đáp án";
    } else if (
        typeof answer1 === "undefined" ||
        answer1.trim() === "" ||
        typeof answer2 === "undefined" ||
        answer2.trim() === "" ||
        typeof answer3 === "undefined" ||
        answer3.trim() === "" ||
        typeof answer4 === "undefined" ||
        answer4.trim() === ""
    ) {
        errors = "Một số đáp án bạn nhập không hợp lệ, hãy kiểm tra lại !";
    }

    return errors;
};
const validationClassAndTitle = (classQuestion, title) => {
    let errors = null;

    if (!title) {
        errors = "Hãy nhập đề bài";
    } else if (typeof title === "undefined" || title.trim() === "") {
        errors = "Đề bài bạn nhập không hợp lệ, hãy kiểm tra lại !";
    }
    if (classQuestion === 0) {
        errors = "Hãy chọn lớp cho câu hỏi này";
    }

    return errors;
};
const validationCorrectAnswer = (correctAnswer) => {
    let errors = null;
    if (!correctAnswer) {
        errors = "Hãy điền đáp án chính xác";
    } else if (!Number.isInteger(Number(correctAnswer))) {
        errors =
            "Hãy nhập đáp án chính xác là 1 chữ số, để chúng tôi có thể random các đáp án khác giúp bạn !";
    }

    return errors;
};
export const validationIdQuestion = (idQuestion) => {
    let errors = null;
    if (!idQuestion) {
        errors = "Hãy nhập ID câu hỏi";
    } else if (typeof idQuestion === "undefined") {
        errors = "ID không hợp lệ";
    }
    return errors;
};
