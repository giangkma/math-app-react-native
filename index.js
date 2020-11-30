import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./commons/loading";
import configStore from "./redux/configStore";
import * as React from "react";
import App from "./App";

const rootApp = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    );
};
const { store, persistor } = configStore();
registerRootComponent(rootApp);
