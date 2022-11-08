import React from "react";
class Exp7state extends React.Component {

    constructor(props) {
      super(props);
      this.state = {brand: "Ford"};
    }
    render() {
      return (
        <div>
          <h1>My Car {this.state.brand}</h1>
        </div>
      );
    }
  }

  export default Exp7state;