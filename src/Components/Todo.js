import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props)

        this.state={
            tasks:[{task:"completing video", id:1},{task:"Going to home", id:2 },{task:"Riding Bike", id:3 }], currenttask:" "}
    }
    handleChange=(r)=>{
        this.setState({
            currenttask:r.target.value
        })
    }
    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currenttask,id:this.state.tasks.length+1}],
            currenttask:""
        })
    }
    handleDelete=(id)=>{
        let arr=this.state.tasks.filter((objtask)=>{
            return objtask.id !=id
        })
        this.setState({
            tasks:[...arr]
        })

    }
  render() {
      
    return (<div>
        <h1>ToDo-Listx</h1>
         <input type="text"value={this.state.currenttask} onChange={this.handleChange}/> 
         <button onClick={this.handleSubmit}>Submit</button>
            {
                this.state.tasks.map((objtask)=>(
                    <div key={objtask.id}> 
                        <h1>{objtask.task}</h1>
                        <button onClick={()=>this.handleDelete(objtask.id)}> Delete</button>
                    </div>
                ))
            }
        </div>)
  }
}

export default Todo