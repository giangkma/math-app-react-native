import { ToastAndroid } from "react-native";
import { AsyncStorage } from "react-native";
import { Alert } from "react-native";

export const getToken = async () => {
    const res = await AsyncStorage.getItem("accessToken");
    return res;
};
export const setToken = async (accessToken) => {
    await AsyncStorage.setItem("accessToken", JSON.stringify(accessToken));
};
export const removeToken = async () => {
    await AsyncStorage.removeItem("accessToken");
};

export const showToastAndroid = (message) => {
    ToastAndroid.show(message, ToastAndroid.LONG);
};

export const showAlert = (message2, message1 = "Lỗi rồi !") => {
    Alert.alert(message1, message2, [{ text: "Đã hiểu" }]);
};

export const filterSumUserReportQuestion = (report) => {
    const arrayId = report.map((item) => item.idQuestion);
    const arrayIdRemoteDuplicate = [...new Set(arrayId)];
    const newArray = arrayIdRemoteDuplicate
        .map((id) => {
            let countUserReport = 0;
            let className = null;
            let idQuestion = null;
            report.map((item) => {
                if (id === item.idQuestion) {
                    countUserReport++;
                    className = item.className;
                    idQuestion = item.idQuestion;
                }
            });
            return {
                countUserReport: countUserReport,
                className: className,
                idQuestion: idQuestion,
            };
        })
        .sort((a, b) => b.countUserReport - a.countUserReport);
    return newArray;
};
export const filterForDuplicateValues = (array, nameClassRanks) => {
    if (nameClassRanks === 0) {
        const arrayNameUser = array.map((item) => item.name);
        const arrayNameUserRemoteDuplicate = [...new Set(arrayNameUser)];
        const newArray = arrayNameUserRemoteDuplicate.map((name) => {
            let score = 0;
            array.map((item) => {
                if (name === item.name) {
                    score += item.score;
                }
            });
            return {
                name: name,
                score: score,
            };
        });
        return newArray;
    }
    return array;
};

export const shuffleArray = (array) => {
    let i = array.length;
    let j = 0;
    let temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

export const randomArrayAnswer = (correctAnswer) => {
    const numbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    return [
        numbers[0] + correctAnswer,
        numbers[1] + correctAnswer,
        numbers[2] + correctAnswer,
        correctAnswer,
    ];
};

const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};
export const randomID = () => {
    return `${s4() + s4()}`;
};
