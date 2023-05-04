import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    progress:[
        {
            match: 0,
            date: "25.01.2025",
        },
    ],
}

export const progressSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        addResults: (state, action) => {
            state.progress.push(action.payload)
            
        },
    },
})


export const { addResults } = progressSlice.actions

export default progressSlice.reducer