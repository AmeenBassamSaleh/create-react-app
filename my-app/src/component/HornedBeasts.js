import React from 'react';

class HornedBeast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numOfClike : 0
        }
    }

    sumNumperOfClike = () => {
        this.setState({numOfClike: this.state.numOfClike +1})
    }

    render() {
        return (
            <div>
                 <h2>{this.props.keyword}</h2>
                 <img onClick={this.sumNumperOfClike} src = {this.props.url} alt = {this.props.alt} title = {this.props.title}></img>
                 <p>{ this.props.description}</p>  
                 <p> &#128512; {this.state.numOfClike} </p>
            </div>
        )
    }
}
export default HornedBeast;





//  <h2>{this.props.name}</h2>
// <img src = {this.props.url} alt = {this.props.alt} title = {this.props.title}></img>
//  <p>{ this.props.description}</p>  