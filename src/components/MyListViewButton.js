import React, { Component } from 'react';
import './../App.css';
import PropTypes from 'prop-types';

class MyListViewButton extends Component {
  render() {
    const { visible, btnTxt,textVisible } = this.props;

    return (
      <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile" visibility={visible}>
          <i className="mdi mdi-eye-outline" aria-hidden="true">
            { (textVisible==='invisible')? '': btnTxt}
          </i>
      </a>

    );
  }
}

MyListViewButton.propTypes = {
  visible: PropTypes.string.isRequired,
  btnTxt: PropTypes.string,
  textVisible: PropTypes.string.isRequired
};

MyListViewButton.defaultProps = {
	visible: 'visible',
	btnTxt: 'Marcar como vista',
  textVisible: 'visible'
};

export default MyListViewButton;
