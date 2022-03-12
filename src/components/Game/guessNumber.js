import classes from './GuessNumber.module.css';

const GuessNumber = () => {

    function checkValue(){
        alert('Hello..');
    }
    
    return (
        <div>
            <h1>Guess My Number 🤔</h1>
            <p className={classes.guess_wrap}>
                <span className={classes.guess_no}>?</span>
            </p>
            <div className={classes.info}>
                <div className={classes.number_field}>
                    <input type="number" placeholder='Enter Number to Check'/>
                    <input type="button" value="Check!" onClick={checkValue}/>
                </div>
                <div>
                    <p>Too High</p>
                    <p>Score: 20</p>
                    <p>HighScore: 0</p>
                </div>
            </div>
        </div>
    )
}

export default GuessNumber;