import React from "react"

export default class Explanation extends React.Component{

    render(){
        return(
            <div>
                <h3>Explanation</h3>
                {this.props.explanation}
            </div>
        )
    }
}