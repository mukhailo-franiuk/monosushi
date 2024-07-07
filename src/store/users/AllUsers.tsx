import { createSlice } from "@reduxjs/toolkit";

export const AllUsers = createSlice({
    name : 'users',
    initialState : {
        allUsers : []
    },
    reducers : {
        allUsersList : (state , data) => {
            state.allUsers = data.payload;
        }
    }
})   
export const { allUsersList } = AllUsers.actions;
export const getAllUsers = (state:any) => state.allUsers.allUsers;
export default AllUsers.reducer;