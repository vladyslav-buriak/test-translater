import { useState } from "react";
import { increment, incrementCorrect } from "../../redux/Game/slice";
import { useSelector, useDispatch } from "react-redux";
import * as com from '../../components';

const GamePage = () => {
    const { questions, step } = useSelector((state) => state.game)

    const question = questions[step];
    const [correct, setCorrect] = useState(0);

    const dispatch = useDispatch();
    const onClickVariant = (select) => {

        dispatch(increment())

        if (question.match === select) {
            setCorrect(correct + 1)

        }

        ;
    };

    return (
        <>

            {step !== questions.length ? (
                <com.Game questions={questions} step={step} question={question} onClickVariant={onClickVariant} />

            ) : (
                <com.Result correct={correct} />

            )}


        </>
    )
}

export default GamePage;