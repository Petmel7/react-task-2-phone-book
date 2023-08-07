import { Component } from "react";

export class Statics extends Component {

state = {
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

    plusActivity = (activity) => {
        this.setState(prevState => ({
            [`${activity}`]: prevState[`${activity}`] + 1,
    }))
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        const positivePercentage = total > 0 ? (good/total) * 100 : 0;

        return (
            <>
                <h1>Please leave feeatback</h1>

                <button onClick={()=> this.plusActivity('good')}>Good</button>
                <button onClick={()=> this.plusActivity('neutral')}>Neutral</button>
                <button onClick={() => this.plusActivity('bad')}>Bad</button>
                
                <h2>Statics</h2>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total} </li>
                    <li>Positive feeadback: {positivePercentage.toFixed(0)}%</li>
                </ul>
            </>
        )
    }
}