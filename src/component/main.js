import React from 'react';
import HornedBeast from './HornedBeasts';
import array from './array';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {

  render() {
    return (
      <div>
        <CardColumns>
          {
            array.map((carta) => {
              return (
                <HornedBeast
                  key = {carta.title}
                  url={carta.image_url}
                  title={carta.title}
                  description={carta.description}
                  keyword={carta.keyword}
                  horns={'1'}
                  showDataBeast = {this.props.showDataBeast} />
              );
            })
          }
        </CardColumns>
      </div>
    );
  }
}
export default Main;



