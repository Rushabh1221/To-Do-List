import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Plan from "./plan";

export default class App extends Component {

  state = {
    items: [],
    text:""
  }

  handleChange = (e) => {
     this.setState({text: e.target.value});
  };

  handleAdd = (e) => {
    if(this.state.text !== ""){
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text: ""});
    }
  };

  handleDelete = (id) => {
    console.log("Deleted..", id);
    const oldItems = [...this.state.items];
    const items = oldItems.filter((elm, i) => {
      return i !== id
    } );
    this.setState({items: items});
  };

  render() {
    return (
      <div className="container-fluid my-5">
       <h1 className="text-primary text-center m-3">TO-DO List <i class='fas fa-tasks'></i></h1> 
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">

            <h1 className="text-center mb-3">What's Your Today's Plan</h1>

            <div className="row">

              <div className="col-9">
                <input type="text" className="form-control" name="" placeholder="Write your plan.." value={this.state.text} onChange={this.handleChange}/>
              </div>
              <div className="col-3">
                <buttom className="btn btn-success px-5 font-weight-bold" onClick={this.handleAdd}>ADD</buttom>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                 { 
                   this.state.items.map((value, i) => {
                     return <Plan key={i} id={i} value={value} del={this.handleDelete}/> 
                   })
                 }
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    )
  }
}



