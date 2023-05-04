import { useSelector } from "react-redux";

const MyProgress = () => {
    const { questions } = useSelector((state) => state.game)

    const { progress } = useSelector((state) => state.progress)

    return (
        <>
            {progress?.map((p, i) => <div className="my-progress" key={i}>
                <div className="my-progress__content">
                    <p > Правильні відповиді</p>
                    <p className="my-progress__text">{p.match}</p>
                    <p>{p.date}</p>
                </div>

                <div
                    className="my-progress__content">
                    <p> Кількість запитань</p>
                    <p className="my-progress__text">{questions.length}</p>

                </div>
            </div>)}

        </>

    )
}

export default MyProgress;