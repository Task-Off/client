import React from 'react';
import request from 'superagent';

let API = `${__API_URL__}`;

const renderIf = (test, component, alternative) => {
  return test ? component : alternative
}

class TaskForm extends React.Component{
 constructor(props) {
   super(props);
   this.state = {
     name:this.props.name || '',
     completed:this.props.completed || false,
     groupID:this.props.groupID || '',
     _id:this.props._id || '',
     completedBy:this.props.completedBy || '',
     userName:this.props.userName,
     completedByName: this.props.completedByName || ''
   }

   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.handleOnChange = this.handleOnChange.bind(this);
   this.getCompletedByName = this.getCompletedByName.bind(this);
 }

 componentWillMount() {
    if(this.state.completed) {
      this.getCompletedByName(this.state.completedBy);
    }
 }

 componentWillReceiveProps(props){ 
    if(this.state.completed) {
      this.getCompletedByName(this.state.completedBy);
    }
 }

 getCompletedByName(id) {
    request.get(`${API}/user/firstname/${id}`) 
      .then(res => {
        console.log('res.text is ', res.text)
        let completedByName = res.text;
        this.setState({['completedByName']: completedByName});
      })
 }

 handleChange(e){
   let {name, value} = e.target;
   this.setState({[name]: value});
 };

 handleSubmit(e){
   e.preventDefault();
    console.log('in submit to post a task, this.state::::',this.state)
     this.props.handle(this.state);
     if (!this.props.name) this.setState({name:''})
 }

 handleOnChange(e){
   console.log('this.props.userID is ', this.props.userID)
   let task = Object.assign(this.state, {
     completed:!this.state.completed,
     completedBy:this.props.userID,
     name: this.state.name
    })
   this.setState({task}, () => {
      this.props.handle(this.state);
   })
 }
 
 render(){
   console.log('@@@@@@@@this.state is ', this.state)
   return(
     <div className='task-form-div'>
       <form autoComplete="off" className='newTasks' id={this.props.name ? "listForm" : null}
         onSubmit={this.handleSubmit}>
         <input    
           className={this.props.name ? "listInput" : "newInput"}
           id={this.state.completed ? "completedTask" : "incompleteTask"}
           type='text'
           name='name'
           placeholder='What needs to be done?'
           value={this.state.name}
           onChange={this.handleChange}
         />
         {
           renderIf (!this.props.name,
            <button id='taskButton' type='submit'> {this.props.button} </button>,
            <div id = {`checkedTest${this.state._id}`}className = 'currentTask'>
              <input  
                    type="checkbox" 
                    id='checkbox'
                    onChange= {this.handleOnChange} 
                    checked = {this.state.completed}  
              />
              {
                renderIf(this.state.completed,
                  <input
                    type = "text"
                    value = {this.state.completedByName}
                    />,
                    null
                )
              }
            </div>
           )
         }
       </form>
     </div>
   )
 }
}

export default TaskForm;
