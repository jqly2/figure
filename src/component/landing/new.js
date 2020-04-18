import React from 'react';
import Image from '../../external/img/figure_new_img.jpg';
import '../../external/css/news.css';
 
export default class extends React.Component {
  render() {
    return (
        <div className="news">
            <p>News</p>
            <img src={Image} alt="Image"/>
            <div className="news-align">
                <p>
                Veil Craft is the inaugural exhibition of M&A x Craft Contemporary, a five-year<br/>
                partnership between the two institutions exploring craft through art and<br />
                architecture. <a href="/">Read More</a>
                </p> 
            </div>
        </div>
    )
  }
}