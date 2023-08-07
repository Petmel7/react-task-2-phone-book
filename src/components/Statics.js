import { Component } from "react";

export class Statics extends Component {

state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }
    
    addGood = () => {
        this.setState((prevState) => ({
        good: prevState.good + 1,
    }))
    };
    
    addNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }))
    }

    addBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }))
    }

    addActivity = (activity) => {
        this.setState(prevState => ({
    [`${activity}Count`]: prevState[`${activity}Count`]
}))
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad

    // const totalCount = state.reduce((total, stat) =>
    //     (stat.prevState && total + 1), 0,);
        
        

        return (
            <>
                <h1>Please leave feeatback</h1>

                <button onClick={this.addGood}>Good</button>
                <button onClick={this.addNeutral}>Neutral</button>
                <button onClick={this.addBad}>Bad</button>

                <h2>Good: {good}</h2>
                <h2>Neutral: {neutral}</h2>
                <h2>Bad: {bad}</h2>
                <h2>Total: {total} </h2>
            </>
        )
    }
}