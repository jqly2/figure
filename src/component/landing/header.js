import React from 'react';
import '../../external/css/header.css';
 
export default class extends React.Component {
  render() {
    return (
        <div className="header">
            <p>Figure<br/>–<br />
            An architecture collective led<br/>
            by James Leng and Jennifer Ly,<br />
            based in San Francisco.
            <br />
            <br />
            email: <a href="mailto:hello@figure.us">hello@figure.us</a><br />
            instagram: <a href="https://www.instagram.com/figure.office/">@figure.office</a></p>
        </div>
    )
  }
}