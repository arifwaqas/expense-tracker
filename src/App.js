import { useState } from 'react/cjs/react.development';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';


const DUMMY_EXPENSES = [{
	key: 'e1',
	title: 'Toilet Paper',
	amount: 94.12,
	date: new Date(2020, 7, 14)
},
{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
{
	key: 'e3',
	title: 'Car Insurance',
	amount: 294.67,
	date: new Date(2021, 2, 28)
},
{
	key: 'e4',
	title: 'New Desk (Wooden)',
	amount: 450,
	date: new Date(2021, 5, 12)
}];

const App = () => {
	

	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	console.log(expenses);

	const saveNewExpenseRootHandler = ( newExpenseData) => {

		const newData = newExpenseData;

		setExpenses((prevState) => {
			return [{
				key: newData.id,
				title: newData.title,
				amount: newData.amount,
				date: newData.date
			}, ...prevState]
		});
	}

	return (
		<div>
			<h2>Let's get started!</h2>
			<NewExpense onSaveNewExpenseRoot = {saveNewExpenseRootHandler}/>
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
