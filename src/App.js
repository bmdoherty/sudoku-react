import React, { Component } from 'react';

import Grid from './model/sudoku/Grid';

import HighlightButton from './components/HighlightButton';
import ApplyButton from './components/ApplyButton';
import Log from './components/Log.js';
import Cell from './components/Cell.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      grid: new Grid('000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000'),
      highLight: {used:[]},
      items: []
    };


    // This binding is necessary to make `this` work in the callback
    this.highLight = this.highLight.bind(this);
    this.apply = this.apply.bind(this);
  }

  componentDidMount() {
    // 043080250\n600000000\n000001094\n900004070\n000608000\n010200003\n820500000\n000000005\n034090710
    // 300200000\n000107000\n706030500\n070009080\n900020004\n010800050\n009040301\n000702000\n000008006
    //let text = '000000000\n007020400\n008504900\n009000800\n510080027\n000203000\n000000000\n435000196\n180000054'
    let text = '300200000\n000107000\n706030500\n070009080\n900020004\n010800050\n009040301\n000702000\n000008006'
    let grid = new Grid(text)

    this.setState({ grid: grid }); 
  }

  highLight() {
    let step = this.state.grid.next()
    let cell = this.state.grid.cells[step.id]
    let digitClasses = {}
    let boxClasses = {}    
    let cellContent = {}
    let item = {}
    let ruleOut = []
    let squares = []
    let rows = []
    let columns = []

    if(cell){
      item = {text:`${step.type}: The cell at ${cell.row},${cell.column},${cell.square} must be ${step.digit} ${JSON.stringify(step)}`, key:cell.id}  
      rows = [cell.row]
      columns = [cell.column]
      squares = [cell.square]
      ruleOut = [...cell.canSee].filter(cell => [...cell.possibilities].includes(step.digit) ).map(v=>v.id)
    } else {
      item = {text:`${JSON.stringify(step)}`, key:this.state.step}
    }
    
    let digits = [step.digit]

    // hidden
    if(step.type === 'hiddenSingle'){
      let colors = [1,2,3,4,5,6,7,8,9]
      let unfilledCellsInHouse = this.state.grid[step.house.type][step.house.id].cells.filter( v => v.digit === 0).filter(v=> v.id !== cell.id)
      let nextColor
      let color
      let bgcolor 
      for( let unfilledCell of unfilledCellsInHouse){
        let seenByCells = [...unfilledCell.canSee].filter( v => v.digit === step.digit)
        let seenBy 

        let seenInSquare = seenByCells.filter( v=> v.squareID === unfilledCell.squareID)
        if(seenInSquare.length){
        
            seenBy = seenInSquare[0] 
            if(!digitClasses[seenBy.id]){
              nextColor = colors.shift()
              color = ' color' + nextColor
              bgcolor = ' bgcolor' + nextColor
              digitClasses[seenBy.id] = color + bgcolor
              digitClasses[unfilledCell.id] = ' color' + nextColor              
            } else {
              digitClasses[seenBy.id] = digitClasses[seenBy.id] 
              digitClasses[unfilledCell.id] = ' color' + nextColor              
            }


        }
        else{
          
          let seenOutsideSquare = seenByCells.filter( v=> v.squareID !== cell.squareID)
          if(seenOutsideSquare.length){
            seenBy = seenOutsideSquare[0] 
            if(!digitClasses[seenBy.id]){
              nextColor = colors.shift()
              color = ' color' + nextColor
              bgcolor = ' bgcolor' + nextColor
              digitClasses[seenBy.id] = color + bgcolor
              digitClasses[unfilledCell.id] = ' color' + nextColor              
            } else {
              digitClasses[seenBy.id] = digitClasses[seenBy.id] 
              digitClasses[unfilledCell.id] = ' color' + nextColor              
            }
          }  
        }
      
        cellContent[unfilledCell.id] = 'X'
      }
    }

    if(step.type === 'naked'){
      //let colors = [1,2,3,4,5,6,7,8,9]
      for( let id of step.ids){
        boxClasses[id] = ' targetCell '
      }
      ruleOut = this.state.grid[step.house.type][step.house.id].cells
      .filter( v => v.digit === 0) //unused
      .filter( v => step.ids.indexOf(v.id) === -1)  // not in naked
      .filter( v => [...v.possibilities].some(p=> [...step.digits].includes(p))) // has digits as possibles
      .map(v=>v.id) 

      digits = [...step.digits]

      let cells = this.state.grid[step.house.type][step.house.id].cells.filter( v=> step.ids.includes(v.id))
      rows = cells.map( v=> `${v.row}`).join(' ')
      columns = cells.map( v=> `${v.column}`).join(' ')
      squares = cells.map( v=> `${v.square}`).join(' ')

    }    


    let highLight = {
      on:true,
      rows: rows,
      columns: columns,
      squares: squares,
      cell:cell,
      digits:digits,
      ruleOut: ruleOut,
      type:step.type,
      house:step.house,
      boxClasses: boxClasses,
      digitClasses: digitClasses,
      cellContent: cellContent

    } 
    this.setState({ highLight: highLight }); 
    this.state.items.unshift(item)
  }

  apply() {
    this.setState({ highLight: {on:false} }); 

    
    this.state.grid.apply(this.state.grid.next())

    this.setState({ step: this.state.step+1 }); 
  }

  showSquare(square){

    if( this.state.highLight.on && this.state.highLight.squares.includes(square)){
        return 'show'       
    }
    return ''    
  }  

  showRow(row){
    if( this.state.highLight.on && this.state.highLight.rows.includes(row)){
      return 'highlight5'       
  }
  return ''   
  }   

  showColumn(column){
    if( this.state.highLight.on && this.state.highLight.columns.includes(column)){
      return 'highlight5'       
    }
        return ''
  }    


  render() {

    const { grid, items } = this.state
    let self = this;

    console.log('grid render')
    
 
    return (
      <div className="App">

        <div className="grid">
          <div className="columnDetail"></div>    
          <div className={`columnDetail ${self.showColumn('C1')}`} id='column1'>C1</div>
          <div className={`columnDetail ${self.showColumn('C2')}`} id='column2'>C2</div>
          <div className={`columnDetail ${self.showColumn('C3')}`} id='column3'>C3</div>
          <div className={`columnDetail ${self.showColumn('C4')}`} id='column4'>C4</div>
          <div className={`columnDetail ${self.showColumn('C5')}`} id='column5'>C5</div>
          <div className={`columnDetail ${self.showColumn('C6')}`} id='column6'>C6</div>
          <div className={`columnDetail ${self.showColumn('C7')}`} id='column7'>C7</div>
          <div className={`columnDetail ${self.showColumn('C8')}`} id='column8'>C8</div>
          <div className={`columnDetail ${self.showColumn('C9')}`} id='column9'>C9</div>

          <div className={`columnDetail ${self.showRow('R1')}`} id='row1'>R1</div>
          {grid.cells.filter( cell => cell.rowID === 0).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })}     

          <div className={`columnDetail ${self.showRow('R2')}`}  id='row2'>R2</div>
          {grid.cells.filter( cell => cell.rowID === 1).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })} 

          <div className={`columnDetail ${self.showRow('R3')}`}  id='row3'>R3</div>
          {grid.cells.filter( cell => cell.rowID === 2).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })}     

          <div className={`columnDetail ${self.showRow('R4')}`}  id='row4'>R4</div>
          {grid.cells.filter( cell => cell.rowID === 3).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })}    

          <div className={`columnDetail ${self.showRow('R5')}`}  id='row5'>R5</div>
          {grid.cells.filter( cell => cell.rowID === 4).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })}   

          <div className={`columnDetail ${self.showRow('R6')}`}  id='row6'>R6</div>  
          {grid.cells.filter( cell => cell.rowID === 5).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })}    

          <div className={`columnDetail ${self.showRow('R7')}`}  id='row7'>R7</div>      
          {grid.cells.filter( cell => cell.rowID === 6).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })}    

          <div className={`columnDetail ${self.showRow('R8')}`}  id='row8'>R8</div>  
          {grid.cells.filter( cell => cell.rowID === 7).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })}    

          <div className={`columnDetail ${self.showRow('R9')}`}  id='row9'>R9</div>  
          {grid.cells.filter( cell => cell.rowID === 8).map(function(cell){
            return <Cell cell={cell} highlight={self.state.highLight} key={cell.id} />
          })}    

          <div className={`S1 ${self.showSquare('S1')}`}>S1</div>
          <div className={`S2 ${self.showSquare('S2')}`}>S2</div>
          <div className={`S3 ${self.showSquare('S3')}`}>S3</div>
          <div className={`S4 ${self.showSquare('S4')}`}>S4</div>
          <div className={`S5 ${self.showSquare('S5')}`}>S5</div>
          <div className={`S6 ${self.showSquare('S6')}`}>S6</div>
          <div className={`S7 ${self.showSquare('S7')}`}>S7</div>
          <div className={`S8 ${self.showSquare('S8')}`}>S8</div>
          <div className={`S9 ${self.showSquare('S9')}`}>S9</div>          

        </div>
        <div className='notes'>
          <HighlightButton action={this.highLight} step={this.state.step} />

          <ApplyButton action={this.apply} step={this.state.step} />

          <Log items={items}/>
        </div>
      </div>
    );
  }
}

export default App;
