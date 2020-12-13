import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionComponent from "../../screens/question";
import {
    searchQuestionsThunk,
    updateQuestionThunk,
    uploadQuestionThunk,
} from "../../redux/thunk";
import {
    validateQuestionPage,
    validationAnswerQuestion,
    validationClassAndTitle,
    validationFormQuestion,
    validationIdQuestion,
} from "../../untils/validation";
import {
    randomArrayAnswer,
    showAlert,
    showToastAndroid,
} from "../../untils/functions";

// connect redux
const useConnect = () => {
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onUploadQuestionThunk: (question, className) =>
                dispatch(uploadQuestionThunk(question, className)),
            onSearchQuestionThunk: (id) => dispatch(searchQuestionsThunk(id)),
            onUpdateQuestionThunk: (question, id, className) =>
                dispatch(updateQuestionThunk(question, id, className)),
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
        accessToken,
    } = useConnect();
    const [title, setTitle] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [arrayAnswer, setArrayAnswer] = useState(null);
    const [classQuestion, setClassQuestion] = useState(0);

    const [errors, setErrors] = React.useState(null);
    const [isAddQuestion, setIsAddQuestion] = React.useState(true);
    const [idQuestionEdit, setIdQuestionEdit] = React.useState(null);
    const [isRandomArrayAsnwer, setIsRandomArrayAsnwer] = React.useState(false);

    const handleRandomArrayAnswer = () => {
        setIsRandomArrayAsnwer(!isRandomArrayAsnwer);
        setCorrectAnswer(null);
        setErrors(null);
    };

    const onResetForm = () => {
        setTitle(null);
        setClassQuestion(null);
        setCorrectAnswer(null);
        setIdQuestionEdit(null);
        setErrors(null);
        setArrayAnswer(null);
    };
    const toggleFormAddQuestion = () => {
        onResetForm();
        setIsAddQuestion(!isAddQuestion);
    };
    const onSelectClassToAdd = (value) => {
        setClassQuestion(value);
    };
    const onSearchQuestion = async () => {
        const err = validationIdQuestion(idQuestionEdit);
        if (err) {
            setErrors(err);
        } else {
            setErrors(null);
            const res = await onSearchQuestionThunk(idQuestionEdit);
            if (res) {
                const { arrayAnswer, correctAnswer, question, classId } = res;
                const newArrayAnswer = JSON.parse(arrayAnswer);
                const indexCorrectAnswer = newArrayAnswer.indexOf(
                    correctAnswer
                );
                setArrayAnswer(newArrayAnswer);
                setTitle(question);
                setClassQuestion(classId);
                setCorrectAnswer(`answer${indexCorrectAnswer + 1}`);
            }
        }
    };
    const onSubmitFormQuestion = async (data) => {
        const result = validateQuestionPage(
            data,
            classQuestion,
            title,
            correctAnswer,
            isRandomArrayAsnwer
        );
        if (result.message) setErrors(result.message);
        else {
            setErrors(null);
            const res = !isAddQuestion
                ? await onUpdateQuestionThunk(
                      result[0],
                      idQuestionEdit,
                      classQuestion
                  )
                : await onUploadQuestionThunk(result, classQuestion);
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
                arrayAnswer={arrayAnswer}
                correctAnswer={correctAnswer}
                setCorrectAnswer={setCorrectAnswer}
                onSubmitFormQuestion={onSubmitFormQuestion}
                onSelectClassToAdd={onSelectClassToAdd}
                classQuestion={classQuestion}
                toggleFormAddQuestion={toggleFormAddQuestion}
                isAddQuestion={isAddQuestion}
                setIdQuestionEdit={setIdQuestionEdit}
                onSearchQuestion={onSearchQuestion}
                isRandomArrayAsnwer={isRandomArrayAsnwer}
                handleRandomArrayAnswer={handleRandomArrayAnswer}
            />
        </>
    );
};

export default QuestionContainer;
