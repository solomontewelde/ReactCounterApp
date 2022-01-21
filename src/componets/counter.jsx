import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3'],
      } ;
      styles = {
        fontSize: '10px',
        fontWeight: 'bold'
    };
     increment = () => {
         this.setState({count: this.state.count+1});
     }
     decrement = () =>{
         this.setState({count: this.state.count -1});
     }
    render() {  
        let classes = this.getBadgeClases();   
        return (
       // <React.Fragm> {/*short syntax for <>*/}
        //  </React.Fragm>
        
        <div>
            <button onClick={this.decrement} className='btn btn-secondary btn-sm'>Decrement</button> 
            <span style = {{fontSize: 30}} className= {classes}> {this.formatCount()}</span>
                    <button onClick={this.increment} className='btn btn-secondary btn-sm'>Increment</button>
            <ul>{
                this.renderComponenets()  
                }             
            </ul>
         </div> 
        )
    }
    getBadgeClases() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    renderComponenets(){
        if(this.state.tags.length === 0) return <p>No tags</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Nada' : count;
    }
}
 
export default Counter; 