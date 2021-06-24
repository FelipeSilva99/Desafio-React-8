import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    text:'',
    list:[]
  }
  
  add= () =>{
    const{text,list} = this.state;
    if(text.length > 0){
      this.setState({
        list: list.concat(text),
      })
    }else{
      alert('A lista esta vazia!')
    }
    this.setState({
      text: '',
    })
  };

  remove= (e, index) => {
    this.setState({
      list:this.state.list.filter((index) => ! index)
    })
  };

  handleChange= (e) =>{
    this.setState({
      text:e.target.value
    })
  };


  render() {
    return (
      <div className>
        <h1>Todo List</h1>
        <input onChange={this.handleChange} type="text" value={this.state.text} placeholder='preencha aqui'/>
        <button onClick={this.add}>add</button>
        {this.state.list.map((item,index) =>(
          <div>
            <div>{item}</div>
            <button onClick={(e) => this.remove(index)}>X</button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
