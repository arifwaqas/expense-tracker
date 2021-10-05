import { useState } from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
	const [ filteredYear, setFilteredYear ] = useState('2020');

	const changeFilteredYearHandler = (newFilteredYear) => {
		setFilteredYear(newFilteredYear);
	};

	const filteredExpenses = props.items.filter(
        e => {
          return e.date.getFullYear().toString() === filteredYear
        }
      )

	return (
		<div className="expenses">
			<ExpenseFilter selected={filteredYear} onChangeFilteredYear={changeFilteredYearHandler} />
			<ExpenseChart expenses = {filteredExpenses} />
			<ExpensesList items = {filteredExpenses} />
		</div>
	);
}

export default Expenses;
