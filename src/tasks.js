import React from'react'
// import $ from 'jquery'

class Task extends React.Component{
    
render(){
    const styling = {
        background : "black" ,
        color : "green"
    }
    return(
    <div className = "task" style = {{background : this.props.task.completed?"green":"red" }} onClick = { ()=> this.props.doneTask(this.props.task)}>
                <h1 className = "taskLabel"  >{this.props.task.about}</h1>
                        <button className = "deleteButton"  onClick = { () => this.props.deleteTask(this.props.task)}> X </button>
    </div>
    )
}
}

export default Task