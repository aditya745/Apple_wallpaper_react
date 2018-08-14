import React,{Component} from 'react';
class Background extends Component{
  render(){

    return(
      <div>
        <span>{this.props.handleChangeName}</span>
        
        {this.props.name}
        
        
        
        
      </div>
    );
  }
}
export default Background;