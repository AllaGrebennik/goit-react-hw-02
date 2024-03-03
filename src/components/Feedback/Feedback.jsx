import css from "./Feedback.module.css";

const Feedback = ({countFb, totalFeedback, positiveFeedBack}) => {
    return (
        <div className={css.container}>
            <p>Good: {countFb.good}</p>
            <p>Neutral: {countFb.neutral}</p>
            <p>Bad: {countFb.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedBack}%</p>
        </div>
    );
};

export default Feedback;