import React from 'react';
import Possibilities from './Possibilities';

export default class Cell extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    isHighlighted(cell, highlight){
        let highLightClass = ''


        //if( highlight.on){
        //  if( highlight.cell){

    
          // if( highlight.cell.id === cell.id ){
          //   highLightClass = 'targetCell' 
          // }
    
          // if(highlight.strategy.type === 'NakedSingle'){
          //   // if( highlight.cell.column === cell.column ){
          //   //   highLightClass = highLightClass + ' highlightColumn'
          //   // }    
        
          //   // if(  highlight.cell.row === cell.row ){
          //   //   highLightClass = highLightClass + ' highlightRow'
          //   // }       
          
          //   // if(  highlight.cell.square === cell.square ){
          //   //   highLightClass = highLightClass + ' highlightSquare'
          //   // }  
          // }            
        

          // if(highlight.strategy.type === 'HiddenSingle'){
          //  // console.log(highlight)
          //   if( highlight.house.type === 'row' &&  highlight.house.id === cell.rowID){
          //     highLightClass = highLightClass + ' highlightRow'
          //   }    
        
          //   if( highlight.house.type === 'column' &&  highlight.house.id === cell.columnID){
          //     highLightClass = highLightClass + ' highlightColumn'
          //   }       
          
          //   if( highlight.house.type === 'square' &&  highlight.house.id === cell.squareID){
          //     highLightClass = highLightClass + ' highlightSquare'
          //   }  
          // }  
       // }

          // if(highlight.strategy.type === 'Naked'){
            
          //   //  if( highlight.house.type === 'row' &&  highlight.house.id === cell.rowID){
          //   //    highLightClass = highLightClass + ' highlightRow'
          //   //  }    
         
          //   //  if( highlight.house.type === 'column' &&  highlight.house.id === cell.columnID){
          //   //    highLightClass = highLightClass + ' highlightColumn'
          //   //  }       
           
          //   //  if( highlight.house.type === 'square' &&  highlight.house.id === cell.squareID){
          //   //    highLightClass = highLightClass + ' highlightSquare'
          //   //  }  
          //  }  
           
          //  if( highlight.strategy.type === 'LockedCandidate'){
            
          //   //  if( (highlight.house.type === 'row' &&  highlight.house.id === cell.rowID) || (highlight.locked.type === 'row' &&  highlight.locked.id === cell.rowID)){
          //   //    highLightClass = highLightClass + ' highlightRow'
          //   //  }    
         
          //   //  if( (highlight.house.type === 'column' &&  highlight.house.id === cell.columnID) || (highlight.locked.type === 'column' &&  highlight.locked.id === cell.columnID)){
          //   //    highLightClass = highLightClass + ' highlightColumn'
          //   //  }       
           
          //   //  if( (highlight.house.type === 'square' &&  highlight.house.id === cell.squareID) || (highlight.locked.type === 'square' &&  highlight.locked.id === cell.squareID)){
          //   //    highLightClass = highLightClass + ' highlightSquare'
          //   //  }  
          //  }              
        //}
    
        if( highlight.on){
          let facet = highlight.facets.filter( v => v.id === cell.id)[0]
          if(facet){
            highLightClass = highLightClass + facet.box
          }
                  

          if(highlight.boxClasses[cell.id]){
            highLightClass = highLightClass + highlight.boxClasses[cell.id]
          } 

            if(highlight.boxClasses[cell.id]){
              highLightClass = highLightClass + highlight.boxClasses[cell.id]
            } 
            
            if( highlight.ruleOut.includes(cell.id) ){
              highLightClass = highLightClass +  ' highlight2 ' 
            }            
          }
          else{
            if(cell.locked){
              highLightClass = highLightClass +  '  locked '
            }
          }

        return highLightClass
      }    

      showContent(cell, highlight){

        // remove zero from blanks
        let content = ''  
        if(cell.digit){
          content = cell.digit
        }      
    
        if( highlight.on){
          if( highlight.cell){
            if(highlight.cell && highlight.cell.id === cell.id && highlight.digits.length === 1){
              content = highlight.digits
            }  
          }       

          if(highlight.cellContent[cell.id]){
            content = highlight.cellContent[cell.id]
          } 
        }

        return content
      }   

      digitClasses(cell, highlight){   
        let classes = 'digit ' 

        if( highlight.on){
          if(highlight.cell && highlight.cell.id === cell.id){
            classes = classes + 'tentative '
          }  

          if(highlight.digitClasses[cell.id]){
            classes = classes + highlight.digitClasses[cell.id]
          }                    
        } 
        
        
        return classes
      }       

    render() {
        const { cell, highlight} = this.props

        return (
            <div className={`box ${this.isHighlighted(cell, highlight)}`} id={`cell-${cell.id}`} key={cell.id}>
                <Possibilities cell={cell} possibilities={[...cell.possibilities]} highlight={highlight} />
                {/* <div className='possibilities'>{cell.possibilities}</div> */}
                <div className={this.digitClasses(cell, highlight)}>
                    {this.showContent(cell, highlight)}
                </div>
            </div>
        );
    }
}
