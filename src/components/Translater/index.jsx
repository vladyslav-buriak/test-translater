import randomWords from "random-words";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchWord } from "../../redux/Game/asyncActions";
import { addWord } from "../../redux/Game/slice";


export const Translater = () => {
    const { translate } = useSelector((state) => state.game)
    const [value, setValue] = useState(translate)
    const nameField = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWord(value))

    }, [value])
    return (
        <>
            <input ref={nameField} type="text"></input>
            <button onClick={() => {
                setValue(nameField.current.value)
                dispatch(addWord({
                    title: nameField.current.value,
                    variants: [translate, ...randomWords(3)].sort(),
                    correct: translate,
                }))
            }}>click</button>
            <p>{translate}</p>
        </>
    );
};