import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class MyListRemoveButton extends Component {
  render() {
    const { visible, btnTxt, textVisible } = this.props;

    return (
        <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile" visibility={visible}>
          <i className="mdi mdi-delete" aria-hidden="true">
            { (textVisible==='invisible')? '': btnTxt}
          </i>
        </a>
    );
  }
}


MyListRemoveButton.propTypes = {
  visible: PropTypes.string.isRequired,
  btnTxt: PropTypes.string,
  textVisible: PropTypes.string.isRequired
};

MyListRemoveButton.defaultProps = {
	visible: 'visible',
	btnTxt: 'Quitar',
  textVisible: 'visible'
};

export default MyListRemoveButton;
