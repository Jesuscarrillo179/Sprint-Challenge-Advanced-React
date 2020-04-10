import React from 'react';
import PlayerCardList from './components/PlayerCardList'
import './App.css';
import Axios from 'axios';
import Navbar from './components/Navbar'

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      playersData:[]
    }
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      this.setState({
        playersData: res.data
      })
    })
    .catch()
  }

  render(){
    return (
      <div className="container">
      <Navbar />
      <PlayerCardList playersData={this.state.playersData}/>
      </div>
    );
  }
}

export default App;
