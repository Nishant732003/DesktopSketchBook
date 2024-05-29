import { configureStore
} from "@reduxjs/toolkit";
import MenuReducer from "@/redux/slice/menuSlice";
export const store = configureStore({
    reducer: {
        menu:MenuReducer
    }
})