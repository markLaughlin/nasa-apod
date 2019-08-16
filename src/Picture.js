import React from 'react'
import './App.css'

class Picture extends React.Component{

    render(){

        return(
            <div className="Picture">
                <img alt="APOD" src={this.props.url}/>
            </div>
        )
    }

}

export default Picture