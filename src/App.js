import React from 'react'
import Task from "./tasks.js";
import Header from './header.js'
import Footer from './footer.js'

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      totalTasks : 0 ,
    //  completedTasks : 0 ,
      tasks : [] ,
      newTask : "" 
    }
    this.newEntry = this.newEntry.bind(this)
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.doneTask = this.doneTask.bind(this)

  }

  newEntry(event){
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name] : value
    })
  }


  addTask(){
    if(this.state.newTask){
      const about = this.state.newTask 
      const completed = false
    this.setState((prevState) => {
      return{
      tasks : [ {about,completed} , ...this.state.tasks] , 
      newTask : ""  ,
      totalTasks : prevState.totalTasks+1
      }
        })
  }
    }

    deleteTask(task){
     let index = this.state.tasks.indexOf(task)
      this.setState((prevState) => {
        return {
        tasks : this.state.tasks.filter( (_,i) => i!==index) ,
        totalTasks : prevState.totalTasks-1 ,
        // completedTasks :(!task.completed)?prevState.completedTasks-1:prevState.completedTasks+0
        }
      })
    }
 
    doneTask(task){
      this.setState((prevState) => {
      const updated = prevState.tasks.map( (todo) => {
        if(todo == task)
        {
          
          todo.completed = !todo.completed
        }
        return todo
      })
              return {
              tasks:updated ,
              // completedTasks :(task.completed)?prevState.completedTasks+1:prevState.completedTasks-1
                  }
      })
    }

 
    render()
  {
        const taskArray = this.state.tasks.map( (task) => <Task task = {task} deleteTask = {this.deleteTask} doneTask = {this.doneTask} /> ) 
  return (
    <div>
    <Header totalTasks = {this.state.totalTasks} />
<br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className = "newTask">  
        <form onSubmit = {this.addTask} className = "newTaskForm">
          <input type = "text" placeholder = "Enter a new TASK" name = "newTask" value = {this.state.newTask} onChange = {this.newEntry} maxLength = "70" required />
          <button style = {{display : "none"}} className = "addButton" onClick = {this.addTask}>Add Task</button>
          </form>
      
          <br/><br/>
          {taskArray}
          <Footer/>
        </div>
    </div>
  )
  }
}

export default App;
