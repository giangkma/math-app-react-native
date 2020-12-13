import { useTheme } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { number } from "yup";
import { fetchListUserReportThunk } from "../../redux/thunk";
import SupportComponent from "../../screens/support";
// connect redux
const useConnect = () => {
    const mapState = {
        reports: useSelector((state) => state.reports),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
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
const SupportContainer = ({ navigation }) => {
    const { colors } = useTheme();
    const { reports, onFetchListUserReportThunk } = useConnect();
    useEffect(() => {
        (async () => {
            await onFetchListUserReportThunk();
        })();
    }, [onFetchListUserReportThunk]);
    return (
        <SupportComponent
            navigation={navigation}
            reports={reports}
            colors={colors}
        />
    );
};

export default SupportContainer;
