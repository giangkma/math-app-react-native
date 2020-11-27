import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import QuestionComponent from "../../screens/question";
import {
    searchQuestionsThunk,
    updateQuestionThunk,
    uploadQuestionThunk,
} from "../../redux/thunk";
import {
    validationFormQuestion,
    validationIdQuestion,
} from "../../untils/validation";

// connect redux
const useConnect = () => {
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onUploadQuestionThunk: (question) =>
                dispatch(uploadQuestionThunk(question)),
            onSearchQuestionThunk: (id) => dispatch(searchQuestionsThunk(id)),
            onUpdateQuestionThunk: (question, id) =>
                dispatch(updateQuestionThunk(question, id)),
        }),
        [dispatch]
    );

    return {
        ...mapDispatch,
    };
};
const QuestionContainer = ({ navigation, backHome, numQuestions }) => {
    const {
        onUploadQuestionThunk,
        onSearchQuestionThunk,
        onUpdateQuestionThunk,
    } = useConnect();
    const [title, setTitle] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [classQuestion, setClassQuestion] = useState(0);

    const [errors, setErrors] = React.useState(null);
    const [optionPageQuestion, setOptionPageQuestion] = React.useState("add");
    const [idQuestionEdit, setIdQuestionEdit] = React.useState(null);

    const onResetForm = () => {
        setTitle(null);
        setClassQuestion(null);
        setCorrectAnswer(null);
        setIdQuestionEdit(null);
    };
    const onChangeOptionPageQuestion = (option) => {
        setOptionPageQuestion(option);
        onResetForm();
    };
    const onSelectClassToAdd = (value) => {
        setClassQuestion(value);
    };
    const onSearchQuestion = async () => {
        const err = validationIdQuestion(idQuestionEdit);
        if (err.idQuestion) {
            setErrors(err);
        } else {
            setErrors(null);
            const res = await onSearchQuestionThunk(idQuestionEdit);
            if (res) {
                setTitle(res.question);
                setClassQuestion(res.class);
                setCorrectAnswer(String(res.correctAnswer));
            }
        }
    };
    const onSubmitFormQuestion = async () => {
        const numberCorrectAnswer = parseInt(correctAnswer);
        const err = validationFormQuestion(
            title,
            numberCorrectAnswer,
            classQuestion
        );
        if (err.title || err.correctAnswer || err.classQuestion) {
            setErrors(err);
        } else {
            setErrors(null);
            const data = JSON.stringify({
                class: classQuestion,
                question: title,
                correctAnswer: numberCorrectAnswer,
            });
            const res = idQuestionEdit
                ? await onUpdateQuestionThunk(data, idQuestionEdit)
                : await onUploadQuestionThunk(data);
            if (res) {
                setTitle(null);
                setCorrectAnswer(null);
            }
        }
    };
    return (
        <>
            <QuestionComponent
                errors={errors}
                navigation={navigation}
                backHome={backHome}
                numQuestions={numQuestions}
                setTitle={setTitle}
                title={title}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                onSubmitFormQuestion={onSubmitFormQuestion}
                onSelectClassToAdd={onSelectClassToAdd}
                classQuestion={classQuestion}
                onChangeOptionPageQuestion={onChangeOptionPageQuestion}
                optionPageQuestion={optionPageQuestion}
                setIdQuestionEdit={setIdQuestionEdit}
                onSearchQuestion={onSearchQuestion}
            />
        </>
    );
};

export default QuestionContainer;
