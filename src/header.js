import React from 'react'
import Date from 'react-date-object'

function Header(props){
    return(
        <div className = "header">
<h1 className = "banner">My Todos...</h1>
<p className = "counter">
            {props.totalTasks} Tasks<br/>
            {/* {props.completedTasks} */}
          </p>
</div>
    )
}

export default Header