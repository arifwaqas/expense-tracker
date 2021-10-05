import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredData, setEnteredData] = useState({
        title: '',
        amount: '',
        date: new Date(2021, 2, 28)
    });

    /* prevState rapidly makes changes and one can have uptodate snapshots using prevState */
    
    const titleChangeHandler = (event) => {
        console.log(event);
        setEnteredData((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            };
        });    
    }
    const amountChangeHandler = (event) => {
        setEnteredData((prevState) => {
            return {
                ...prevState,
                amount: event.target.value,
            };
        });    
    }
    const dateChangeHandler = (event) => {
        setEnteredData((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            };
        });    
    }

    
    const formSubmitHandler = (event) =>{
        event.preventDefault();

        const prevEnteredData = {
            title: enteredData.title,
            amount: enteredData.amount,
            date: new Date(enteredData.date)
        };

        props.onSaveExpenseData(prevEnteredData);

        setEnteredData((prevState) => { return {
            title: '',
            amount: '',
            date: ''
        }});
    }

	return (<form onSubmit={formSubmitHandler}  id='myForm'>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={enteredData.title}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='amount' onChange={amountChangeHandler} value={enteredData.amount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' onChange={dateChangeHandler} value={enteredData.date}/>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>);
};

export default ExpenseForm;
