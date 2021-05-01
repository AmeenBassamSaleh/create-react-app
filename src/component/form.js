import React from 'react';
import Form from 'react-bootstrap/Form';
// import array from './array';


class FormFun extends React.Component {

  horsH = (e) => {
    e.preventDefault();
    // this.props.funResat();
    // array(this.setState ({array:array}));
    this.props.printHornsNumberOfCarts(e.target.value); // need re
    // this.props.ofChange(); // hornsprintHornsNumber //   newState = horns => this.props.updateState(horns);

  //   console.log(this.props);
  }

  render() {
    console.log();
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>number of horns</Form.Label>
            <Form.Control type="password" placeholder="Password" name='ameen'
              as='select' onChange={this.horsH} onInput ={this.props.funResat} defaultValue = {'All'}>
              <option >All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FormFun;
