import React, { Component } from 'react';
import Background from './components/background';
import './App.css';
import morning from './morning.jpg';
import afternoon from './afternoon.jpg';
import evening from './evening.jpg';
import night from './night.jpg';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      date:new Date(),
      msg:"",
      msg2:"What's your plan for Today?",
      imageUrl:"",
      name:""
      
    }
  }
  
  componentDidMount(){
     this.timeId = setInterval(()=> this.
     tick(), 1000);
     
    this.fetchWeather()
    
  }
  
  componentWillUnmount(){
    clearInterval(this.timerId);
  }
  fetchWeather = async (e)=>{
    //e.preventDefault();
    const response = await fetch("https://api.coinmarketcap.com/v1/ticker/?limit=2");
    const data =await response.json();
    console.log(data)
    this.setState({
      name:data[0].name
    })
    console.log(data[0].name)
  }
  tick(){
    const hours = Number(this.state.date.getHours());
    
    this.setState({
      date:new Date()
    });
    
    if(hours >= 5 && hours < 12){
      this.setState({
        msg:"Good Morning,Aditya",
        imageUrl:morning
      });
    }
    else if(hours >= 12 && hours < 17){
      this.setState({
        msg:"Good Afternoon,Aditya",
        imageUrl:afternoon
      });
    }
      
    else if(hours >= 17 && hours < 22){
      this.setState({
        msg:"Good Evening,Aditya",
        imageUrl:evening
      });
    }
    else if(hours >= 22){
      this.setState({
        msg:"Good Night,Aditya",
        msg2:"Take rest and sleep well",
        imageUrl:night
      });
    } 
    else {
      this.setState({
        msg:"Keep Working hard"
      });
    }
  }
  render(){
    return(
      <div className="App" style={{backgroundImage:`url(${this.state.imageUrl})`}}>
        <p id="p1">{`It's ${this.state.date.toLocaleTimeString()}`}</p>
      
      <p id="p2"><Background handleChangeName={this.state.msg} change={this.handleChangeMessage} weather={this.fetchWeather} name={this.state.name}/></p>
      <h6>{this.state.msg2}</h6>

      
      </div>
    );
  }
}

export default App;
