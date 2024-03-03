import css from "./Options.module.css";

const Options = ({handleClick, resetClick, totalFeedback}) => {
    return (
        <div className={css.container}>
            <button onClick={()=> handleClick('good')}>Good</button>
            <button onClick={()=> handleClick('neutral')}>Neutral</button>
            <button onClick={() => handleClick('bad')}>Bad</button>
            {totalFeedback !== 0 && <button onClick={() => resetClick()}>Reset</button>}
        </div>
    );
};

export default Options;