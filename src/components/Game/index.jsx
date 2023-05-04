

export const Game = ({ question, onClickVariant, step, questions }) => {
    const percent = Math.round((step / questions.length) * 100);
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percent}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1><span>це...</span>
            <ul>
                {question.variants.map((q, i) => (
                    <li
                        onClick={() => {
                            onClickVariant(q);
                        }}
                        key={q}
                    >
                        {q}
                    </li>
                ))}
            </ul>
        </>

    )
}

