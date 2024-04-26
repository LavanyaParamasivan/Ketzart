 import React from 'react'
 import currencyFormator from '../helpers/currencyFormator';

const  ReadOnlyRow=({b, handleEditClick, handleDeleteClick})=> {
  return (
    <tr  >
    <td>{b.bidder}</td>
    <td>{currencyFormator.format(b.amount)}</td>
    <td>
    <button><img src="./artImages/edit.png" className="imgsrc" alt="logo" type="button" onClick={(event)=> handleEditClick(event,b)} ></img> Edit</button>
    <button><img src="./artImages/trash.png" className="imgsrc" alt="logo" type="button" onClick={()=>handleDeleteClick(b.id)}></img>Delete</button>
    </td>
  
  </tr>
  )
}
export default ReadOnlyRow;
