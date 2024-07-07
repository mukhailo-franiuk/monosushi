import { configureStore } from "@reduxjs/toolkit";
import AllUsers from "./users/AllUsers";

export default configureStore({
    reducer : {
        allUsers : AllUsers
    }
})