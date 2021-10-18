import React, {Component} from 'react';
import './App.css';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';
import ClearToDo from './ClearToDo';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
    }
     state = {
    data: [],
    }
    loadData() {
      const url ='http://localhost:3000/todos'
      fetch(url)
      .then(result => result.json())
      .then(result => {
      this.setState({
      data: result,
      })
      })
     };
     addData(data) {
      const newTodo = {todo: data, done: false };
      const url ='http://localhost:3000/todos/add'
      fetch(url, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
      'Content-Type': 'application/json'
      }
      })
      .then(result => result.json())
      .then(result => {
      this.loadData();
       })
      }
    handleSubmit(inputData){
     this.addData(inputData);
    }
    clearData(){
      const url ='http://localhost:3000/todos/clear'
      fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result);
      this.setState({
      data: result,
      })
      })
     };
    handleClear(){
      console.log("here");
      this.clearData();

    }
     componentDidMount() {
          this.loadData();
    };
render(){  return (
    <div>
      <ToDoList data={this.state}/>
       <NewToDo handleSubmit={this.handleSubmit} />
       <ClearToDo handleClear={this.handleClear} />
   </div>
   )
}
}
export default App;
