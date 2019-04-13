import React, { Component } from 'react';

import Gallery from './slide';
import Videos from './videos';
import './galerie.css';

class Gallerie extends Component {
  render() {
    return (
      <div className="slide">
<Gallery/>
<Videos/>


      </div>
    );
  }
}

export default Gallerie
;
