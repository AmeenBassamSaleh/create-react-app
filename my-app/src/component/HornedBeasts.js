import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import HornedBeast from './HornedBeasts';
// import array from './array';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfClike: 0
        }
    }

    sumNumperOfClike = () => {
        this.setState({ numOfClike: this.state.numOfClike + 1 })
    }

    render() {
        return (
            <div>{
                <Card style={{ width: '18rem', margin: "20px" }}>
                <Card.Img variant="top" src={this.props.url} />
                <Card.Body>
                    <Card.Title>{this.props.keyword}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text>
                        {this.state.numOfClike}
                    </Card.Text>
                    <Button onClick={this.sumNumperOfClike} variant='primary'>sum of the clikcs
                        </Button>
                </Card.Body>
                </Card>
            }
            </div>
        )
    };
}
export default HornedBeast;


// this.stste.sumNumperOfClike
    // render() {
    //     return (
    //         <div>
    //              <h2>{this.props.keyword}</h2>
    //              <img onClick={this.sumNumperOfClike} src = {this.props.url} alt = {this.props.alt} title = {this.props.title}></img>
    //              <p>{ this.props.description}</p>  
    //              <p> &#128512; {this.state.numOfClike} </p>
    //         </div>
    //     )
    // }


//  <h2>{this.props.name}</h2>
// <img src = {this.props.url} alt = {this.props.alt} title = {this.props.title}></img>
//  <p>{ this.props.description}</p>  