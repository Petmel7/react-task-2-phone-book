import { Component } from "react";
import '../components/Statics.css';

export class Statics extends Component {

    state = {
        visible: false,
        good: 0,
        neutral: 0,
        bad: 0,
    }
    
    // plusGood = () => {
    //     this.setState((prevState) => ({
    //     good: prevState.good + 1,
    // }))
    // };
    
    // plusNeutral = () => {
    //     this.setState(prevState => ({
    //         neutral: prevState.neutral + 1,
    //     }))
    // }

    // plusBad = () => {
    //     this.setState(prevState => ({
    //         bad: prevState.bad + 1,
    //     }))
    // }

    // toggle = () => {
    //     this.setState(prevState => ({
    //         visible: !prevState.visible
    //     }))
    // }

    plusActivity = (activity) => {
        this.setState(prevState => ({
            visible: true,
            [activity]: prevState[activity] + 1,
    }))
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        const positivePercentage = total > 0 ? (good/total) * 100 : 0;

        return (
            <>
                <h1>Please leave feeatback</h1>

                <div className="button">
                    <button className="buttonGood"
                        onClick={() =>this.plusActivity('good')}>
                        Good
                    </button>
                    <button className="buttonNeutral"
                        onClick={() => this.plusActivity('neutral')}>
                        Neutral
                    </button>
                    <button className="buttonBad"
                        onClick={() => this.plusActivity('bad')}>
                        Bad
                    </button>
                </div>
                
                <h2>Statics</h2>

                {this.state.visible ?
                    
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
}
