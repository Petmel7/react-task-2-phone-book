import { useState } from "react";
import '../components/Statics.css';

export default function Statics() {
    const [visible, setVisible] = useState(false)
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const plusActivity = (activity) => {
        setVisible(prevState => ({
        ...prevState,
        [activity]: prevState[activity] + 1,
        visible: true,
    }));
}
    
//     const plusActivity = (activity) => {
//     setVisible(prevState => ({
//         ...prevState,
//         [activity]: prevState[activity] + 1,
//     }));
// };


        const total = good + neutral + bad;
        const positivePercentage = total > 0 ? (good/total) * 100 : 0;

        return (
            <>
                <h1>Please leave feeatback</h1>

                <div className="button">
                    <button className="buttonGood"
                        onClick={() => plusActivity(setGood(good))}>
                        Good
                    </button>
                    <button className="buttonNeutral"
                        onClick={() => plusActivity(setNeutral(neutral))}>
                        Neutral
                    </button>
                    <button className="buttonBad"
                        onClick={() => plusActivity(setBad(bad))}>
                        Bad
                    </button>
                </div>
                
                <h2>Statics</h2>

                {visible ?
                    
                    <ul className="statics">
                        <li>Good: <span>{good}</span></li>
                        <li>Neutral: <span>{neutral}</span></li>
                        <li>Bad: <span>{bad}</span></li>
                        <li>Total: <span>{total}</span></li>
                        <li className="statics-positive">Positive feeadback:
                            <span>{positivePercentage.toFixed(0)}%</span>
                        </li>
                    </ul>

                : <h3 className="No-feedback">No feedback given</h3>}
            </>
        )
    }

