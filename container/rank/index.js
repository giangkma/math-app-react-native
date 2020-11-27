import * as React from "react";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFilterRanksInClass } from "../../redux/actions";
import { fetchRanksThunk } from "../../redux/thunk";
import RankComponent from "../../screens/rank";
import { showAlert } from "../../untils/functions";
// connect redux
const useConnect = () => {
    const mapState = {
        ranksInClass: useSelector((state) => state.ranksInClass),
    };
    const dispatch = useDispatch();
    const mapDispatch = React.useMemo(
        () => ({
            onFetchRanksThunk: () => dispatch(fetchRanksThunk()),
            onFilterRanksInClassThunk: (className) =>
                dispatch(actionFilterRanksInClass(className)),
        }),
        [dispatch]
    );

    return {
        ...mapState,
        ...mapDispatch,
    };
};
const RankContainer = ({ navigation }) => {
    const {
        onFetchRanksThunk,
        ranksInClass,
        onFilterRanksInClassThunk,
    } = useConnect();
    const [nameClassRanks, setNameClassRanks] = React.useState(0);
    const backHome = useCallback(async () => {
        navigation.navigate("Trang chủ");
        setNameClassRanks(0);
    }, []);
    const selectClassRanks = useCallback(
        (nameClass) => {
            setNameClassRanks(nameClass);
            onFilterRanksInClassThunk(nameClass);
        },
        [ranksInClass]
    );
    const onUpdateDataRank = async () => {
        const res = await onFetchRanksThunk();
        onFilterRanksInClassThunk(nameClassRanks);
        if (res) {
            showAlert("Cập nhật thành công !");
        }
    };
    useEffect(() => {
        (async () => {
            await onFetchRanksThunk();
        })();
    }, []);
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
