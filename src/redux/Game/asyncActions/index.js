import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


export const fetchWord = createAsyncThunk("game/fetchWords",
    async (arg) => {
        const options = {
            method: 'POST',
            url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'b45f99b225mshb87def930f7fe71p1e16a9jsn04fd5ac273e6',
                'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
            },
            data: {
                from: 'en',
                to: 'ru',
                q: [`${arg}`]
            }
        };

        try {
            const { data } = await axios.request(options);

            return data
        } catch (error) {
            console.error(error);
        }

    }
);