import React from 'react';
import '../../external/css/about.css';
 
export default class extends React.Component {
  render() {
    return (
        <div className="about">
            <p>About</p>
            <div className="about-align">
                <p>
                Figure operates as an open studio, collaborating with an international network <br />of <br/>
                architects, designers, entrepreneurs and thinkers. It seeks projects that <br />explore the <br />
                relationships between art, architecture, and community.
                </p> 
                <p>James Leng and Jennifer Ly received their Master in Architecture from Harvard<br />
                Graduate School of Design and Bachelor of Arts in Architecture from the <br />University<br />
                of California, Berkeley. They have received numberous fellowships and <br />awards,<br />
                and have been published in The Architectural Review, Log, and CLOG, among <br />others.<br />
                They currently teach design studios at the University of California, Berkeley.</p>
            </div>
        </div>
    )
  }
}