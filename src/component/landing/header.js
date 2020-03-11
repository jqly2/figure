import React from 'react';
import Figure from '../../external/img/Figure.jpg'
import '../../external/css/header.css';
 
export default class extends React.Component {
  render() {
    return (
        <div className="header">
            <p><img src={Figure} alt="Figure"/><br/>–<br />
            An architecture collective led<br/>
            by James Leng and Jennifer Ly,<br />
            based in San Francisco.
            </p> 
            <p>email:<a href="mailto:hello@figure.us">hello@figure.us</a><br />
            instagram:<a href="https://www.instagram.com/figure.office/">@figure.office</a></p>
        </div>
    )
  }
}