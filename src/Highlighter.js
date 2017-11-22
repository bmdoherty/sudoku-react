const off = (grid) => {
  //console.log(`remove highlighting`);
}

const defaultHighlight = (grid, step) => {
  let cell = grid.cells[step.id]

  let highlight = {
    on : true,
    boxClasses : [],
    digitClasses : [],  
    strategy : step.strategy,
    cellContent : {},
    hiddenCells : [], 
    ruleOut : [],
    keep : [],
    digits : [step.digit],   
    rows : [],
    columns : [],
    squares : [],
    facets : []        
  }

  if(cell){
    highlight.boxClasses[cell.id] = 'targetCell' 

    highlight.rows = [cell.row]
    highlight.columns = [cell.column]
    highlight.squares = [cell.square]
    highlight.ruleOut = [...cell.canSee].filter(cell => [...cell.possibilities].includes(step.digit) ).map(v=>v.id)
  }

  return highlight
}

const nakedSingle = (grid, step) => {
  let highlight = defaultHighlight(grid, step)
  let cell = grid.cells[step.id]

  highlight.rows = [cell.row]
  highlight.columns = [cell.column]
  highlight.squares = [cell.square]
  highlight.ruleOut = [...cell.canSee].filter(cell => [...cell.possibilities].includes(step.digit) ).map(v=>v.id)    
  highlight.keep = [step.id]

  // colour if all other digitis used
  if(step.used.length === 8){
    for(let i=0; i<8; i++){
      let cell = grid.cells[step.used[i]]
      highlight.boxClasses[cell.id] = highlight.boxClasses[cell.id]? highlight.boxClasses[cell.id] + ' bgcolor' + cell.digit : 'bgcolor' + cell.digit 
      highlight.digitClasses[cell.id] = highlight.digitClasses[cell.id] ? highlight.digitClasses[cell.id] + ' color' + cell.digit : 'color' + cell.digit
    }
  }  

  return highlight
}

const hiddenSingle = (grid, step) => {
  let highlight = defaultHighlight(grid, step)
  let cell = grid.cells[step.id]
  let colors = [1,2,3,4,5,6,7,8,9]

  let unfilledCellsInHouse = grid[step.house.type][step.house.id].cells.filter( v => v.digit === 0).filter(v=> v.id !== cell.id)
  let nextColor
  let color
  let bgcolor 
  for( let unfilledCell of unfilledCellsInHouse){
    let seenByCells = [...unfilledCell.canSee].filter( v => v.digit === step.digit)
    let seenBy 

    let seenInSquare = seenByCells.filter( v=> v.squareID === unfilledCell.squareID)
    if(seenInSquare.length){
    
        seenBy = seenInSquare[0] 
        if(!highlight.digitClasses[seenBy.id]){
          nextColor = colors.shift()
          color = ' color' + nextColor
          bgcolor = ' bgcolor' + nextColor
          highlight.digitClasses[seenBy.id] = color + bgcolor
          highlight.digitClasses[unfilledCell.id] = ' color' + nextColor              
        } else {
          highlight.digitClasses[seenBy.id] = highlight.digitClasses[seenBy.id] 
          highlight.digitClasses[unfilledCell.id] = ' color' + nextColor              
        }


    }
    else{
      
      let seenOutsideSquare = seenByCells.filter( v=> v.squareID !== unfilledCell.squareID)
      if(seenOutsideSquare.length){
        seenBy = seenOutsideSquare[0] 
        if(!highlight.digitClasses[seenBy.id]){
          nextColor = colors.shift()
          color = ' color' + nextColor
          bgcolor = ' bgcolor' + nextColor
          highlight.digitClasses[seenBy.id] = color + bgcolor
          highlight.digitClasses[unfilledCell.id] = 'color' + nextColor              
        } else {
          highlight.digitClasses[seenBy.id] = highlight.digitClasses[seenBy.id] 
          highlight.digitClasses[unfilledCell.id] = 'color' + nextColor              
        }
      }  
    }
  
    highlight.keep = [step.id]
    highlight.cellContent[unfilledCell.id] = 'X'

    let houseCells = grid[step.house.type][step.house.id].cells.filter(v=> v.id !== cell.id)
    for( let houseCell of houseCells){
      highlight.boxClasses[houseCell.id] = 'highlightRow'
    }
  }

  return highlight
}

const naked = (grid, step) => {
  let highlight = defaultHighlight(grid, step)

    for( let id of step.id){
      highlight.boxClasses[id] = ' targetCell '
    }

    highlight.ruleOut = grid[step.house.type][step.house.id].cells
    .filter( v => v.digit === 0) //unused
    .filter( v => step.id.indexOf(v.id) === -1)  // not in naked
    .filter( v => [...v.possibilities].some(p=> [...step.digits].includes(p))) // has digits as possibles
    .map(v=>v.id) 

    highlight.digits = [...step.digits]


    let cells = grid[step.house.type][step.house.id].cells.filter( v=> step.id.includes(v.id))
    highlight.rows = cells.map( v=> `${v.row}`).join(' ')
    highlight.columns = cells.map( v=> `${v.column}`).join(' ')
    highlight.squares = cells.map( v=> `${v.square}`).join(' ')

    highlight.keep = step.id

    let houseCells = grid[step.house.type][step.house.id].cells.filter( v=> !step.id.includes(v.id))
    for( let houseCell of houseCells){
      highlight.boxClasses[houseCell.id] = ' highlightRow'
    }    

    return highlight
}

const hidden = (grid, step) => {
  let highlight = defaultHighlight(grid, step)

      for( let id of step.id){
        highlight.boxClasses[id] = ' targetCell '
      }
      highlight.ruleOut = []

      highlight.digits = [...step.digits]

      let cells = grid[step.house.type][step.house.id].cells.filter( v=> step.id.includes(v.id))
      highlight.rows = cells.map( v=> `${v.row}`).join(' ')
      highlight.columns = cells.map( v=> `${v.column}`).join(' ')
      highlight.squares = cells.map( v=> `${v.square}`).join(' ')

      highlight.hiddenCells = step.id

      return highlight      
}

const lockedCandidate = (grid, step) => {
  let colors = [1,2,3,4,5,6,7,8,9]

  let highlight = defaultHighlight(grid, step)
  
  for( let id of step.ids){
    highlight.boxClasses[id] = ' targetCell '
  }
        //
        let lockedHouse = grid[step.house.type][step.house.id]
  
        let unfilledCellsInLocked = lockedHouse.cells
        .filter( v => v.digit === 0)
        .filter( v => !step.ids.includes(v.id))
  
        
        let nextColor
        let color
        let bgcolor 
  
        for( let unfilledCell of unfilledCellsInLocked){
          let seenByCells = [...unfilledCell.canSee].filter( v => v.digit === step.digit)
          let seenBy = seenByCells[0] 
  
          if(seenBy){
            if(!highlight.digitClasses[seenBy.id]){
              nextColor = colors.shift()
              color = ' color' + nextColor
              bgcolor = ' bgcolor' + nextColor
              highlight.digitClasses[seenBy.id] = color + bgcolor
              highlight.digitClasses[unfilledCell.id] = ' color' + nextColor              
            } else {
              highlight.digitClasses[seenBy.id] = highlight.digitClasses[seenBy.id] 
              highlight.digitClasses[unfilledCell.id] = ' color' + nextColor              
            }
          }
             
          highlight.cellContent[unfilledCell.id] = 'X'
        }
  
        //      
        highlight.ruleOut = grid[step.locked.type][step.locked.id].cells
        .filter( v => step.ids.indexOf(v.id) === -1 )
        .filter( v => v.possibilities.has(step.digit))  
        .map(v=>v.id)    
        
        highlight.keep = step.ids
  
        highlight.digits = [step.digit]
  
        highlight.locked = step.locked
  
        let cells = grid[step.house.type][step.house.id].cells.filter( v=> step.ids.includes(v.id))
        highlight.rows = cells.map( v=> `${v.row}`).join(' ')
        highlight.columns = cells.map( v=> `${v.column}`).join(' ')
        highlight.squares = cells.map( v=> `${v.square}`).join(' ')

        let houseCells = grid[step.house.type][step.house.id].cells.filter( v=> !step.ids.includes(v.id))
        for( let houseCell of houseCells){
          highlight.boxClasses[houseCell.id] = ' highlightRow'
        }   
        
        let lockedeCells = grid[step.locked.type][step.locked.id].cells.filter( v=> !step.ids.includes(v.id))
        for( let lockedeCell of lockedeCells){
          highlight.boxClasses[lockedeCell.id] = ' highlightRow'
        }           

        return highlight
}

const fish = (grid,step) => {
  let highlight = defaultHighlight(grid, step)

  let targetCells = grid.cells
                    .filter( v=> step.rows.includes(v.rowID))
                    .filter( v=> step.columns.includes(v.columnID))
                    .filter( v=> [...v.possibilities].includes(step.digit))
                    .map(v=>v.id)
  for( let id of targetCells){
    highlight.boxClasses[id] = ' targetCell '
  }


  highlight.keep = targetCells

  highlight.ruleOut = grid.cells
    .filter( v => step.rows.indexOf(v.rowID) === -1 )
    .filter( v => step.columns.indexOf(v.columnID) > -1 )
    .filter( v => v.possibilities.has(step.digit) )
    .map(v=>v.id)       

  let rowCells = grid.cells.filter( v=> step.rows.includes(v.rowID))
  for( let rowCell of rowCells){
    highlight.boxClasses[rowCell.id] = highlight.boxClasses[rowCell.id] + ' highlightRow'
  }   

  let columnCells = grid.cells.filter( v=> step.columns.includes(v.columnID))
  for( let columnCell of columnCells){
    highlight.boxClasses[columnCell.id] = highlight.boxClasses[columnCell.id] + ' highlightRow'
  }     

  highlight.rows = step.rows.map(r=> `R${r+1}`).join(' ')
  highlight.columns = step.columns.map(r=> `C${r+1}`).join(' ')

  highlight.digits = [step.digit]

  return highlight
}

const xyChain = (grid,step) => {
  let highlight = defaultHighlight(grid, step)  


  for(let link of step.chain){
    let facet = {}
    facet.id = link.cell.id
    facet.box = ' targetCell '
    facet.cannotBe = link.cannotBe
    facet.mustBe = link.mustBe

    highlight.facets.push(facet)
  }

  let start = step.chain[0];
  let end = step.chain[step.chain.length - 1];
  let excluded = [...start.cell.canSee]
      .filter(v => end.cell.canSee.has(v))
      .filter(v => v.possibilities.has(start.cannotBe))

  for(let cell of excluded){
    let facet = {}
    facet.id = cell.id
    facet.box = ' highlight2 '
    facet.exclude = start.cannotBe

    highlight.facets.push(facet)
  }

  return highlight
}

export default class Highlighter  {
  constructor() {

    this.currentState = 'Off';
    this.machine = {
          'Off': {
            NakedSingle: 'NakedSingle', 
            HiddenSingle: 'HiddenSingle',  
            Naked: 'Naked',  
            Hidden: 'Hidden',  
            LockedCandidate: 'LockedCandidate',  
            Fish: 'Fish', 
            XYChain:'XYChain',
            clear: 'Off'        
          },
          'NakedSingle': {
            clear: 'Off'
          },
          'HiddenSingle': {
            clear: 'Off'
          },
          'Naked': {
            clear: 'Off'
          },
          'Hidden': {
            clear: 'Off'
          }, 
          'LockedCandidate': {
            clear: 'Off'
          }, 
          'Fish': {
            clear: 'Off'
          },    
          'XYChain': {
            clear: 'Off'
          }                  
        }
     
  }

  transition(state, action) {
    if (this.machine[state][action]) {      
      return this.machine[state][action];
    }  
  }

  changes(grid, step, state){
    let f = {
      'Off': off, 
      'NakedSingle': nakedSingle, 
      'HiddenSingle': hiddenSingle,  
      'Naked': naked,  
      'Hidden': hidden,  
      'LockedCandidate': lockedCandidate,  
      'Fish': fish, 
      'XYChain':xyChain
    }    
    
    return f[state](grid, step)
  }

  input(grid, step) {
    const state = this.currentState;
  
    this.currentState = this.transition(state, step.strategy.type)    

    return this.changes(grid, step, this.currentState)
    
  }
}

  



