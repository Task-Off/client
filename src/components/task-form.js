import React from 'react';

class TaskForm extends React.Component {

  constructor(props) {
    super(props);
 
    this.state = {
      name: '',
      completed: false,
      groupID: this.props.groupID,
      _id: '',
      completedBy: '',
      userName: '',
      completedByName:  ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({[name]: value});
  };
 
  handleSubmit(e){
    e.preventDefault();
      this.props.taskCreate(this.state);
      this.setState({name: ''});
  }

  render() {
    
    return (
      <div className='task-form-div'>
         <form autoComplete="off" className='newTasks' onSubmit={this.handleSubmit}>
         <input    
           className="newInput"
           type='text'
           name='name'
           placeholder='What needs to be done?'
           value={this.state.name}
           onChange={this.handleChange}
         />
          <button id='taskButton' type='submit'> {this.props.button} </button>
         </form>
      </div>
    )
  }
}

export default TaskForm;