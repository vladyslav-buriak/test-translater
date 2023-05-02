import { useEffect, useState,useRef } from "react";
import "./index.scss";
import axios from "axios";
const questions = [
  {
    title: "dog",
    variants: ["собака", "майонез", "авто"],
    correct: "собака",
  },
  {
    title: "table ",
    variants: ["дерево", "ліжко", "стіл"],
    correct: "table",
  },
  {
    title: "добрий",
    variants: ["kind", "leazy", "funny"],
    correct: "kind",
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Ви відгадали {correct} з {questions.length}
      </h2>
      <button>Попробовать снова</button>
    </div>
  );
}

const Home = () => {
  const [value,setValue]= useState("")
  const nameField = useRef(null);
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
      to: 'ar',
      q: 'Hello ! Rapid Translate Multi Traduction'
    }
  };
  
const fetchDate =  async()=>{
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(()=>{
  fetchDate()
},[])
  return (
    <>
      <input ref={nameField} type="text"></input>
      <button onClick={()=>{
       setValue(nameField.current.value)
      }}>click</button>
      <p>{value}</p>
    </>
  );
};
function Game({ question, onClickVariant, step }) {
  const percent = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((q, i) => (
          <li
            onClick={() => {
              onClickVariant(i);
            }}
            key={q}
          >
            {q}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);
  const onClickVariant = (i) => {
    setStep(step + 1);

    question.variants.map((v) => {
      if (v === question.correct) {
        setCorrect(correct + 1);
      }
    });
  };
  return (
    <div className="App">
      <Home />
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
