import React from 'react';
import './ListItem.css'

const ListItem =({name})=>(
  <div className="listItem-continer">
    <h3>{name}</h3>
  </div>
)

export default ListItem;