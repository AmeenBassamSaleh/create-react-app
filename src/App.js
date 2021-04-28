import React from 'react';
import array from './component/array';
import Header from './component/header';
import Footer from './component/footer';
import SelectedBeast from './component/SelectedBeast';
import Main from './component/main';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: array,
      show: false,
      descr: {}
    };
  }

  showDataBeast = (e) => {
    this.setState ({
      show: true,
      descr: e
    });
  }

  closing = () => {
    this.setState ({
      show: false,
      descr: {}
    });
  }

  render() {
    return (
      <div>
        <Header />
        <SelectedBeast show={this.state.show} ameen={this.state.descr} closing={this.closing} />
        <Main data={this.state.data} showDataBeast={this.showDataBeast} />
        <Footer />
      </div >
    );
  }
}

export default App;
