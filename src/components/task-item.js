import React from 'react';
import request from 'superagent';

let API = `${__API_URL__}`;

const renderIf = (test, component, alternative) => {
  return test ? component : alternative
}

let initialState = '';

class TaskItem extends React.Component{
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
    if(props) this.setState(this.props);
 }

 getCompletedByName(id) {
    request.get(`${API}/user/firstname/${id}`) 
      .then(res => {
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
     this.props.handle(this.state);
     e.target.value = ''
 }

 handleOnChange(e){
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
  
   return(

     <div className='task-form-div'>
       <form autoComplete="off" className='newTasks' id={this.props.completed ? "listForm" : "uncompleted"}
         onSubmit={this.handleSubmit}>
         <input    
           className={this.props.name ? "listInput" : "newInput"}
           id={this.props.completed ? "completedTask" : "incompleteTask"}
           type='text'
           name='name'
           placeholder='What needs to be done?'
           value={this.props.name}
           onChange={this.handleChange}
         />
         {
           renderIf (!this.props.name,
            <button id='taskButton' type='submit'> {this.props.button} </button>,
            <div id = {`checkedTest${this.props._id}`}className = 'currentTask'>
              <input  
                    type="checkbox" 
                    id='checkbox'
                    onChange= {this.handleOnChange} 
                    checked = {this.props.completed}  
              />
              {
                renderIf(this.props.completed,
                  <input
                    type = "text"
                    id="completedName"
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

export default TaskItem;
