const off = (grid) => {
  //console.log(`remove highlighting`);
}

const nakedSingle = (grid) => {
 // console.log(`highlight nakedSingle`);
}

const hiddenSingle = (grid) => {
  //console.log(`highlight HiddenSingle`);
}

const naked = (grid) => {
  //console.log(`highlight Naked`);
}

const hidden = (grid) => {
  //console.log(`highlight Hidden`);
}

const lockedCandidate = (grid) => {
  //console.log(`highlight LockedCandidate`);
}

const fish = (grid) => {
  //console.log(`highlight fish`);
}

const xyChain = (grid) => {
  //console.log(`highlight xyChain`);
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

  update(grid, state){
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
    
    //console.log(`${state} ${f[state]}`);

    f[state](grid)
  }
  input(grid, action) {
    const state = this.currentState;
  
    this.currentState = this.transition(state, action)    

    //console.log(`${ state } + ${ action } --> ${ this.currentState }`);
    this.update(grid, this.currentState)
    
  }
}

  



