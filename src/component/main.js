import React from 'react';
import HornedBeast from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from './form';
import array from './array';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // horns: horns,
      printHornsNumber: 1,
      array: array
    };
  }
  funResat = () => { // need re
    this.setState({ array: array });
  }

  printHornsNumberOfCarts = (e) => { // need re
    console.log(typeof e);
    let moh = [];
    if (Number(e) !== 'All') {
      this.setState({ array: array });
      this.state.array.filter(option => {
        if (option.horns === Number(e)) {
          return moh.push(option);
        }
        return this.setState({ array: moh });
      });
    }
    if (e === 'All') {
      console.log('else');
      this.setState({ array: array });
    }
  }


  render() {
    // console.log(this.state.array);
    return (
      <div>
        <Form printHornsNumberOfCarts={this.printHornsNumberOfCarts} funResat={this.funResat} />
        <div>
          <CardColumns>
            {
              this.state.array.map((carta) => {
                return (
                  <HornedBeast
                    key={carta.title}
                    url={carta.image_url}
                    title={carta.title}
                    description={carta.description}
                    keyword={carta.keyword}
                    horns={carta.horns}
                    showDataBeast={this.props.showDataBeast} />
                );
              })
            }
          </CardColumns>
        </div>
      </div>
    );
  }
}
export default Main;
