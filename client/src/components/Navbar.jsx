import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: {}
    };
  }

  render() {
    return (
      <p>Navbar</p>
    );
  }
}
export default Navbar;