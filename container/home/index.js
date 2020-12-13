import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    // fetchInformationUserThunk,
    fetchListUserReportThunk,
    fetchQuestionsThunk,
} from "../../redux/thunk";
import HomeComponent from "../../screens/home";
// connect redux
const useConnect = () => {
    const mapState = {
        questions: useSelector((state) => state.questions),
        role: useSelector((state) => state.role),
        user: useSelector((state) => state.user),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            // onFetchInformationUserThunk: () =>
            //     dispatch(fetchInformationUserThunk()),
            onFetchListUserReportThunk: () =>
                dispatch(fetchListUserReportThunk()),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const HomeContainer = ({ navigation }) => {
    const {
        // onFetchInformationUserThunk,
        onFetchListUserReportThunk,
        questions,
        role,
        user,
    } = useConnect();
    useEffect(() => {
        (async () => {
            // await onFetchInformationUserThunk();
            await onFetchListUserReportThunk();
        })();
    }, [onFetchListUserReportThunk]);
    return (
        <HomeComponent
            numQuestions={questions.length}
            role={role}
            navigation={navigation}
        />
    );
};
export default HomeContainer;
