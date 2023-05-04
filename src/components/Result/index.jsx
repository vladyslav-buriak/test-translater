import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResults } from "../../redux/MyProgress/slice";
import { useNavigate } from 'react-router-dom';
import { decrement } from "../../redux/Game/slice";

export const Result = ({ correct }) => {

    const { questions } = useSelector((state) => state.game)
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <div className="result">


            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>
                Ви відгадали {correct}  з {questions.length}
            </h2>
            <button disabled={isDisabled} onClick={() => {

                setIsDisabled(true)
                navigate("/");
                dispatch(addResults({
                    match: correct,
                    date: Date.now(),
                }))
                dispatch(decrement())
            }}>Зберегти резульати</button>

        </div>
    );
}









