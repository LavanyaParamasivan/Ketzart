 import React from 'react'
const EditableRow = ({editFormData, handleEditFormChange,handleCancelClick}) =>{
  return (
  <tr>
    <td>
    <input
            className="h-100"
            type="text"
            placeholder="Bidder"
            name="bidder"
            value={editFormData.bidder}
            onChange={handleEditFormChange}
          ></input>
    </td>
    <td>
    <input
            className="h-100"
            type="number"
            name="amount"
            placeholder="Amount"
            value={editFormData.amount}
            onChange={handleEditFormChange}
          ></input>
    </td>
    <td>
    <button type="submit"  ><img src="./artImages/save.png" className="imgsrc" alt="logo" border="0" ></img>Save</button>
    <button type="button"  ><img src="./artImages/cancel.png" className="imgsrc" alt="logo" onClick={handleCancelClick} ></img>Cancel</button>
    </td>
  </tr>
  )
}

export default EditableRow;