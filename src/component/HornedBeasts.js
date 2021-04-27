import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfClike: 0
    };
  }

  sumNumperOfClike = () => {
    this.setState({ numOfClike: this.state.numOfClike + 1 });
  }

  render() {
    return (
      <div id='card'>{
        <Card style={{ width: '18rem', margin: "20px", display: '30%', }}>
          <Card.Img style={{ width : '50 px', height: '50 px', }} onClick={this.sumNumperOfClike} variant="top" src={this.props.url} />
          <Card.Body>
            <Card.Title>{this.props.keyword}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.state.numOfClike}
            </Card.Text>
            <Button variant='primary'>sum of the clikcs
            </Button>
          </Card.Body>
        </Card>
      }
      </div>
    );
  }
}
export default HornedBeast;

