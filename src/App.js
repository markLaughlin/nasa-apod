import React from 'react';
import './App.css';
import Picture from "./Picture"



class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      response: ''
    }
  }

  componentDidMount(){
    console.log("ComponentDidMount method ran")
    fetch("https://api.nasa.gov/planetary/apod?api_key=BXfKXD2hz4UoEc7Ca6JkoM7TjFgZE06ay1pC3D5l")
    .then(response =>  {
      return response.json();
    })
    .then(myJson =>  {
      console.log("JSON response: ")
      console.log(myJson);
      this.setState({response: myJson})
    });
  }

  render(){
    console.log("render method ran")
    console.log("this.state.response: ")
    console.log(this.state.response)

    let url = this.state.response.url
    let title = this.state.response.title
    let date = this.state.response.date
    let explanation = this.state.response.explanation

    
    return (
      <div className="App">
      <h1>NASA Astronomy Picture of The Day</h1>
      <h2>{title}</h2>
      {date}
      <Picture url={url}/>
      <main>
        <h3>explanation</h3>
        {explanation}
      </main>
      </div>
      


    );
  } 
}

export default App;
