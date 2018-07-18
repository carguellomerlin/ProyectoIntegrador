import React, { Component } from 'react';
import './../../App.css';
import MyListRemoveButton from './MyListRemoveButton';
import MyListViewButton from './MyListViewButton';
import MyListAddButton from './MyListAddButton';
import GridItem from './GridItem';

const ItemsList = () => (
<section className="items-section">
	<h5 className="items-section-title">Mi Lista <a href="">Ver todas</a></h5>
	<div className="items-section-body">
		<div className="row">
			<GridItem />
			<GridItem />
			<GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
		</div>
	</div>
</section>
)

export default ItemsList;
