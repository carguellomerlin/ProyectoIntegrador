import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import MyListRemoveButton from './MyListRemoveButton';
import MyListViewButton from './MyListViewButton';
import MyListAddButton from './MyListAddButton';


class GridItems extends Component {
  render() {
    const { imgSrc,title, date } = this.props;

    return (

      <article className="col-md-2">
         <div className="grid-item">
             <img src={imgSrc} alt="Movie Image" className="img-fluid"/>
             <div className="grid-item-body">
                 <span className="grid-item-title">{title}</span>
                 <span className="grid-item-date">{date}</span>
                 <div className="grid-item-actions">
                     <a href="peliculas-list.html" className="btn btn-primary" aria-label="Profile">
                         <MyListRemoveButton visible="true" textVisible="invisible"
                         onClick={this.props.onClickRemove}
                         />

                         <MyListViewButton visible="true" textVisible="invisible"
                         onClick={this.props.onClickView}
                          />
                     </a>
                 </div>
             </div>
         </div>
     </article>
     
    );
  }
}


GridItems.propTypes = {
	imgSrc: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};

GridItems.defaultProps = {
  imgSrc: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
	title: 'Thor: Ragnarok 2dsada',
	date: 'October 25, 2017'
};

export default GridItems;
