import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) =>{
    const [isEditing, SetIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        SetIsEditing(false);
    }

    const startEditing = () =>{
        SetIsEditing(true);
    }

    const stopEditing = () =>{
        SetIsEditing(false);
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
            {isEditing && <ExpenseForm onStop={stopEditing}  onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense;