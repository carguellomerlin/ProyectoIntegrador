import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import MyListRemoveButton from './MyListRemoveButton';
import MyListViewButton from './MyListViewButton';
import MyListAddButton from './MyListAddButton';


class ListItem extends Component {
  render() {
    const { imgSrc, title, descripcion } = this.props;
    return (
      <article className="col-md-6">
           <div className="list-item">
               <div className="list-item-img">
                   <img src={imgSrc}  alt="Movie Image" className="img-fluid" />
               </div>
               <div className="list-item-body">
                   <h3 className="list-item-title">{title}</h3>
                   <div className="list-item-description">
                       <p>{descripcion}</p>
                   </div>
                   <div className="list-item-actions">
                       <MyListAddButton visible="true" textVisible="visible"
                       onClick={this.props.onClickAdd}
                       />
                   </div>
               </div>
           </div>
       </article>

    );
  }
}


ListItem.propTypes = {
	imgSrc: PropTypes.string,
  title: PropTypes.string,
  descripcion: PropTypes.string
};

ListItem.defaultProps = {
  imgSrc: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg',
	title: 'Thor: Ragnarok 2',
	descripcion: 'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela'
};

export default ListItem;
