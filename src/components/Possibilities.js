import React from 'react';

export default class Possibilities extends React.Component {
    // constructor(props) {
    //     super(props);
    // } 

    exclude(cell, highlight,  possibility){
        let classes = ''

        if( highlight.on){
            let facet = highlight.facets.filter( v => v.id === cell.id)[0]
            if(facet){
                if(facet.cannotBe === possibility){
                    classes = classes + ' cannotBe' 
                }  
                if(facet.mustBe === possibility){
                    classes = classes + ' mustBe' 
                }    
                if(facet.exclude === possibility){
                    classes = classes + ' exclude' 
                }                                                  
            } 

            if( highlight.hiddenCells.includes(cell.id) && !highlight.digits.includes(possibility)){
                classes = classes + ' exclude' 
            }   
            if( highlight.hiddenCells.includes(cell.id) && highlight.digits.includes(possibility)){
                classes = classes + ' keep' 
            }      

            // rule out possibilities in house
            if( highlight.ruleOut.includes(cell.id) && highlight.digits.includes(possibility)){
                classes = classes + ' exclude' 
            }   

            // target cell keep
            if( highlight.keep.includes(cell.id) && highlight.digits.includes(possibility)){
                classes = classes + ' keep' 
            }               
        }
    
        return classes
      } 

    render() {
        const { cell, possibilities, highlight } = this.props 

        return (
            <div className='possibilities'>
                {possibilities.map( possibility => {
                    return <span className={`${this.exclude(cell, highlight, possibility)}`} key={cell.id + '-' + possibility} >{possibility}</span>
                })}
            </div>
        );
    }
}
