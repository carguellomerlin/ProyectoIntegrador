import React from 'react';
import ListItem from './ListItem'



const ListaListItem = ({items, onClickRemove,onClickView})=>{

    const itemsTotales = items.map((item, i) => <ListItem key={i} title={item.title}
      date={item.date} imgSrc={item.imgSrc} descripcion={item.descripcion}
      onClickRemove={onClickRemove(item)}  onClickView={onClickView(item)}
      />)

    return itemsTotales;
  }



export default ListaListItem;
