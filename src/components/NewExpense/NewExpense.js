import { React } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';


const NewExpense = (props) => {

    const saveExpenseDataHandler = (newExpenseData) => {

        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString(),
        };

        console.log(expenseData);
        
        props.onSaveNewExpenseRoot(expenseData);

    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} />
    </div>

}

export default NewExpense;