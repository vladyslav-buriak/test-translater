import { createSlice } from '@reduxjs/toolkit'
import { fetchWord } from '../asyncActions';

const initialState = {
    questions: [
        {
            title: "dog",
            variants: ["собака", "майонез", "авто"],
            match: "собака",
        },
        {
            title: "table ",
            variants: ["дерево", "ліжко", "стіл"],
            match: "стіл",
        },
        {
            title: "kind",
            variants: ["ледачий", "веселий", "добрий"],
            match: "добрий",
        },

    ],
    translate: "",
    step: 0,

}

export const gameSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        increment: (state) => {
            state.step += 1
        },
        decrement: (state) => {
            state.step = 0
        },
        addWord: (state, action) => {
            state.questions.push(action.payload)
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchWord.pending, (state, action) => {
            state.translate = "";
        });
        builder.addCase(
            fetchWord.fulfilled,
            (state, action) => {
                state.translate = action.payload;

            }
        );
        builder.addCase(fetchWord.rejected, (state, action) => {

            state.fetchWord = "";
        });

    },

});



export const { increment, decrement, incrementCorrect, addWord } = gameSlice.actions

export default gameSlice.reducer