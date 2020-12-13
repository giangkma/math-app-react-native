import * as React from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRanksThunk } from "../../redux/thunk";
import RankComponent from "../../screens/rank";
import { showToastAndroid } from "../../untils/functions";
// connect redux
const useConnect = () => {
    const mapState = {
        ranksInClass: useSelector((state) => state.ranksInClass),
        accessToken: useSelector((state) => state.accessToken),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onFetchRanksThunk: (className, accessToken) =>
                dispatch(fetchRanksThunk(className, accessToken)),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const RankContainer = ({ navigation }) => {
    const { onFetchRanksThunk, ranksInClass, accessToken } = useConnect();
    const [nameClassRanks, setNameClassRanks] = React.useState(1);
    const backHome = useCallback(async () => {
        navigation.navigate("Trang chủ");
        setNameClassRanks(0);
    }, []);
    const selectClassRanks = useCallback(
        (nameClass) => {
            setNameClassRanks(nameClass);
        },
        [ranksInClass]
    );
    const onUpdateDataRank = async () => {
        const res = await onFetchRanksThunk();
        if (res) {
            showToastAndroid("Cập nhật thành công !");
        }
    };
    useEffect(() => {
        (async () => {
            await onFetchRanksThunk(nameClassRanks, accessToken);
        })();
    }, [nameClassRanks, accessToken]);
    return (
        <RankComponent
            navigation={navigation}
            nameClassRanks={nameClassRanks}
            selectClassRanks={selectClassRanks}
            backHome={backHome}
            ranksInClass={ranksInClass}
            onUpdateDataRank={onUpdateDataRank}
        />
    );
};
export default RankContainer;
