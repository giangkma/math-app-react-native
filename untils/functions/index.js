import { ToastAndroid } from "react-native";

export const showAlert = (message) => {
    ToastAndroid.show(message, ToastAndroid.LONG);
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
