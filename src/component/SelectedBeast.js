import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedBeast extends React.Component {

  render() { // this.props data from the app.js and log an opj, ameen the name of the array in app.js , the titel from the main.
    return (
      <div className='focused'>
        <Modal show={this.props.show} onHide={this.props.closing} >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.ameen.title}</Modal.Title>
          </Modal.Header>

          <Card.Img style={{ width: '50 px', height: '50 px', }} variant='top' src={this.props.ameen.url} />

          <Modal.Body>
            <p>{this.props.ameen.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closing} >Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
