import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeComponent from "../../screens/home";
// connect redux
const useConnect = () => {
    const mapState = {
        questions: useSelector((state) => state.questions),
        role: useSelector((state) => state.role),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            // onFetchListUserReportThunk: () =>
            //     dispatch(fetchListUserReportThunk()),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const HomeContainer = ({ navigation }) => {
    const { questions, role } = useConnect();
    // useEffect(() => {
    //     (async () => {
    //         await onFetchListUserReportThunk();
    //     })();
    // }, [onFetchListUserReportThunk]);
    return (
        <HomeComponent
            numQuestions={questions.length}
            role={role}
            navigation={navigation}
        />
    );
};
export default HomeContainer;
