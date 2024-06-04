import { useState } from "react";
import currencyFormatter from "../../helpers/currencyFormator";
import useBids from "../../hooks/useBids";
import ReadOnlyRow from "../readOnlyRow";
import EditableRow from "../editableRow";
import styles from './bids.module.css'

const Bids = ({ art }) => {
  const { bids, addBid,updateBid,deleteBid } = useBids(art.id);

  const emptyBid = {
    artId: art.id,
    bidder: "",
    amount: 0,
  };

  const [newBid, setNewBid] = useState(emptyBid);

 const [editconatcId, setEditContactId] =useState(null);
 const [editFormData,seteditFormData] = useState({
  artId: art.id,
  bidder: "",
  amount: 0,
 })
const handleEditFormChange =(event)=>{
  event.preventDefault();
  const fieldName= event.target.getAttribute("name");
  const fieldValue = event.target.value;
  const newFormData = {...editFormData};
  newFormData[fieldName] = fieldValue;
  seteditFormData(newFormData);
}
  const onBidSubmitClick = () => {
    addBid(newBid);
    setNewBid(emptyBid);
  };
  const handleEditClick =(event,contact)=>{
 event.preventDefault();
 setEditContactId(contact.id);

 const formValues ={
  artId: contact.id,
  bidder: contact.bidder,
  amount: contact.amount,
 }
 seteditFormData(formValues);
  };

  const handleEditSubmit =(event)=>{
    event.preventDefault();

    const editedContact ={
      id: editconatcId,
      artId:art.id,
      bidder: editFormData.bidder,
      amount: editFormData.amount,

    }

    const newContacts = [...bids];

    const index = bids.findIndex((contact)=> contact.id === editconatcId)
     newContacts[index] = editedContact;
     updateBid(newContacts,editedContact);

    // updateBid(editedContact)
      setEditContactId(null);
  }

  const handleCancelClick =()=>{
    setEditContactId(null);
  }

  const handleDeleteClick =(contactId)=>{
    const newContacts =[...bids];
    
    const index = bids.findIndex((contact)=> contact.id === contactId)
  const afterSplice =  newContacts.splice(index,1);
    deleteBid(newContacts,afterSplice);
  }

  return (
    <>
         
  
         <div className={styles.luxury}>
            
     
          <form onSubmit={handleEditSubmit}>
          <table className="table table-md">
            <thead>
              <tr>
                <th>Bidder</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((b) => (
         
                <>
                {editconatcId === b.id ? <EditableRow  editFormData={editFormData} handleEditFormChange={handleEditFormChange}  handleCancelClick={handleCancelClick}/> :    <ReadOnlyRow b={b} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
         
               
    
             
                </>
             
            
              ))}
            </tbody>
          </table>
          </form>
      
      
        <div className="row" >
        <div className="col-md-10" >
          <input
            id="bidder"
       
            type="text"
            value={newBid.bidder}
            onChange={(e) => setNewBid({ ...newBid, bidder: e.target.value })}
            placeholder="Bidder"
          ></input>
          </div>
        </div>
        <div className="row">
        <div className="col-md-10" >
          <input
            id="amount"
          
            type="number"
            value={newBid.amount}
            onChange={(e) =>
              setNewBid({ ...newBid, amount: parseInt(e.target.value) })
            }
            placeholder="Amount"
          ></input>
          </div>
        </div >
        <div className="row">
        <div className="col-md-10" >
          <button className="btnbid btn-primary" onClick={onBidSubmitClick}>
            Add
          </button>
        </div>
 </div>
      </div>
    </>
  );
};

export default Bids;