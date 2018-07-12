import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class MyListAddButton extends Component {
  render() {
    const { visible, btnTxt,textVisible } = this.props;

    return (
        <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile" visibility={visible}>
          <i className="mdi mdi-heart-outline" aria-hidden="true">
            { (textVisible==='invisible')? '': btnTxt}
          </i>
        </a>
    );
  }
}

MyListAddButton.propTypes = {
	visible: PropTypes.string.isRequired,
  btnTxt: PropTypes.string,
  textVisible: PropTypes.string.isRequired
};

MyListAddButton.defaultProps = {
	visible: 'visible',
	btnTxt: 'Agregar a Mi Lista',
  textVisible: 'visible'
};

export default MyListAddButton;
