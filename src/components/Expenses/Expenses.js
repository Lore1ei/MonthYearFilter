
import '../UI/Card.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredByData =  props.items.filter(item =>{
        return item.date.getFullYear().toString() === filteredYear;
    })

    return(
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onFilterChangeHandler={filterChangeHandler}/>
                <ExpensesChart expenses={filteredByData}/>
                <ExpensesList items={filteredByData}/>
            </Card>
        </div>
    )
}

export default Expenses;