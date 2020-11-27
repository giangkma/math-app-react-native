import { createStore, compose, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configStore = () => {
    const store = createStore(
        rootReducers,
        composeEnhancer(applyMiddleware(thunk))
    );
    const persistor = persistStore(store);
    return { store, persistor };
};

export default configStore;
