import React, { Component } from 'react';
import './../App.css';
import PropTypes from 'prop-types';

class Detalle extends Component {
  render() {
    const { imgSrc,title, date } = this.props;

    return (
      <section className="detail-section">
              <div className="row">
                  <div className="col-md-4">
                      <img src={imgSrc} alt="Movie Image" className="img-fluid"/ >
                  </div>
                  <div className="col-md-8">
                      <h1>{title} <span>({date})</span></h1>
                      <div>
                          <h3>Overview</h3>
                          <p>Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.</p>
                      </div>
                      <br/>
                      <br/>
                      <div>
                          <h3>Featured Crew</h3>
                          <div className="row">
                              <div className="col-md-4">
                                  <h5>Taika Waititi</h5>
                                  <p>Director</p>
                              </div>
                              <div className="col-md-4">
                                  <h5>Taika Waititi</h5>
                                  <p>Director</p>
                              </div>
                              <div className="col-md-4">
                                  <h5>Taika Waititi</h5>
                                  <p>Director</p>
                              </div>
                              <div className="col-md-4">
                                  <h5>Taika Waititi</h5>
                                  <p>Director</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    );
  }
}



Detalle.propTypes = {
	imgSrc: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};

Detalle.defaultProps = {
  imgSrc: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
	title: 'Thor: Ragnarok',
	date: '2017'
};

export default Detalle;
