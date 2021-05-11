import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { AgGridReact } from "ag-grid-react";
import { render } from "react-dom";

import { ColDef } from 'ag-grid-community'

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

interface AppProps { }
interface AppState {
  name: string;
  columnDefs: ColDef[];
  rowData: Hike[];
}

interface Hike {
  place: string,
  mode: string,
  hikerating: number

}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.state = {
      columnDefs: [
        {headerName: "Place", field: "place"},
        {headerName: "Mode", field: "mode"},
        {headerName: "Rating", field: "hikerating"},
      ], 
      rowData: [
        {place: "Nuuksio" , mode: "hard" , hikerating: 4},
        {place: "Sippo" , mode: "easy" , hikerating: 3},
        {place: "Liesjarvi" , mode: "medium" , hikerating: 4},
        {place: "Torrnous" , mode: "medium" , hikerating: 3},
      ]
    }
  }
  

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
      </div>
      <AgGridReact
      columnDefs={this.state.columnDefs}
      //rowData={this.state}
      />
    );
  }
}

render(<App />, document.getElementById('root'));
