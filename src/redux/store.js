import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import searchReducer from "./searchSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
};

const reducer = combineReducers({
    user: userReducer,
    search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
