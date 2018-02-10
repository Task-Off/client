import React from 'react';

import App from '../app/components/app';
import GroupForm from '../app/components/group-form';
import Groups from '../app/components/groups';
import Login from '../app/components/login';
import NavBar from '../app/components/navbar';
import Profile from '../app/components/profile';
import Stats from '../app/components/stats';
import TaskForm from '../app/components/task-form';
import Tasks from '../app/components/task';

describe('<App/>', () => {
  test('', () => {
    const wrapper = shallow(<App />);

    let = "";
    let = "";
    
    let noteCreate = (state) => {
        expect(Category.state().name).toEqual(name);
        expect(Category.state().budget).toEqual(budget);
    }
    
    let Category = shallow(<CategoryForm handler={noteCreate} />);
    
    Category.find("#categoryName").simulate( 'change', { target: {name:"name", value:name} } );
    Category.find("#budgetAmt").simulate( 'change', { target: {name:"budget", value:budget} } );
    Category.find("#categorySubmitButton").simulate( 'submit', { preventDefault:()=>{} } );
  });

});

describe('<ExpenseForm/>', () => {
  test('add a new expense', () => {
    const wrapper = shallow(<ExpenseForm />);

    let expense = "PCC";
    let cost = "100";
    
    let noteCreate = (state) => {
        expect(Expense.state().expense).toEqual(expense);
        expect(Expense.state().cost).toEqual(cost);
    }
    
    let Expense = shallow(<ExpenseForm handler={noteCreate} />);
    
    Expense.find("#expenseName").simulate('change', { target: {name:"expense", value:expense}});
    Expense.find("#expenseAmt").simulate('change', { target: {name:"cost", value:cost}});
    Expense.find("#expenseSubmitButton").simulate('submit', {preventDefault:()=>{}});
  });
});