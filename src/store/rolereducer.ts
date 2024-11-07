import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import Roles from '../data/roles.json'

const initialState = {
    role: "Unknown Personnel"
}

export const roleSlice = createSlice({
    initialState: initialState,
    name: "Role",
    reducers: {
        setRole: (state  , action: PayloadAction<number>) => {
            state.role = Roles[action.payload];
        }
    }
})

export const {setRole} = roleSlice.actions;
export default roleSlice.reducer;