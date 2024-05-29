import { configureStore
} from "@reduxjs/toolkit";
import MenuReducer from "@/redux/slice/menuSlice";
import ToolBoxReducer from "@/redux/slice/ToolBoxslice";
export const store = configureStore({
    reducer: {
        menu: MenuReducer,
        toolBox:ToolBoxReducer
    }
})