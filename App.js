import * as React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./commons/loading";
import Navigator from "./navigatiors";
import configStore from "./redux/configStore";
const { store, persistor } = configStore();

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <StatusBar backgroundColor="#009387" barStyle="light-content" />
                <Navigator />
                <Loading />
            </PersistGate>
        </Provider>
    );
};

export default App;
