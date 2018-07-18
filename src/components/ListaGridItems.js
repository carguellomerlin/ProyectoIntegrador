import React from 'react';
import GridItems from './GridItems'



const ListaGridItems = ({items, onClickRemove,onClickView})=>{

    const itemsTotales = items.map((item, i) => <GridItems key={i} title={item.title}
      date={item.date} imgSrc={item.imgSrc}
      onClickRemove={onClickRemove(item)}     onClickView={onClickView(item)}
      />)

    return itemsTotales;
  }



export default ListaGridItems;
