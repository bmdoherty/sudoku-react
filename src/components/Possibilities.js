import React from 'react';

export default class Possibilities extends React.Component {
    // constructor(props) {
    //     super(props);
    // } 

    exclude(cell, highlight,  possibility){
        let classes = ''

        if( highlight.on){
            if( highlight.ruleOut.includes(cell.id) && highlight.digits.includes(possibility)){
                classes = 'exclude' 
            }   
        }
    
        return classes
      } 

    render() {
        const { cell, possibilities, highlight } = this.props 

        return (
            <div className='possibilities'>
                {possibilities.map( possibility => {
                    return <span className={`${this.exclude(cell, highlight, possibility)}`}>{possibility}</span>
                })}
            </div>
        );
    }
}
