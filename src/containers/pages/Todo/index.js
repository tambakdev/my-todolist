import React, { useState, Fragment } from "react";
import AddListForm from "./forms/AddListForm";
import EditListForm from "./forms/EditListForm";
import ListTable from "./tables/ListTable";
import "./Todo.scss";

const Todo = () => {
	
  const listData = [];

  const initialFormState = {
    id: null,
    description: "",
    created_at: "",
    due_date: "",
  };

  const [lists, setLists] = useState(listData);
  const [currentList, setCurrentList] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addList = (list) => {
    list.id = lists.length + 1;
    let today = new Date();
    let date=today.getFullYear() + 
      "-" + parseInt(today.getMonth()+1) +
      "-" + today.getDate() ;
    list.created_at = date;
    setLists([...lists, list]);
    setShow(false);
  };

  const deleteList = (id) => {
    setEditing(false);
    setLists(lists.filter((list) => list.id !== id));
  };

  const updateList = (id, updatedList) => {
    setEditing(false);
    setLists(lists.map((list) => (list.id === id ? updatedList : list)));
    setShow(false);
  };


  const editRow = (list) => {
	setEditing(true);
    setShow(true);
    setCurrentList({ 
      id: list.id, 
      description: list.description, 
      created_at: list.created_at, 
      due_date: list.due_date 
    });
  };

  const [showModal, setShow] = useState();
  const closeModal = () => {
    setShow(false);
    setEditing(false);
  };

  
  return (
    <div className="container">
      <div className={showModal ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-card">
          {editing ? (
            <Fragment>
              <header className="modal-card-head">
                <p className="modal-card-title">Edit Todo Item</p>
              </header>
              <section className="modal-card-body">
                <EditListForm
                  editing={editing}
                  setEditing={setEditing}
                  currentList={currentList}
                  updateList={updateList}
                  closeModal={closeModal} 
                />
              </section>
            </Fragment>
          ) : (
            <Fragment>
              <header className="modal-card-head">
                <p className="modal-card-title">Add a New Todo Item</p>
              </header>
              <section className="modal-card-body">
                <AddListForm 
                  closeModal={closeModal} 
                  addList={addList} 
                />
              </section>
            </Fragment>
          )}
        </div>
      </div>

      <h1 className="is-size-1 responsive">Your sTodo Lists</h1>
      <div className="flex-row">
        <div className="mt-5 responsive">
          <ListTable
            lists={lists} 
            editRow={editRow} 
            deleteList={deleteList} 
          />
        </div>
        <div className="columns mt-5">
          <div className="column has-text-centered">
            <button 
              className="button is-info is-add-responsive" 
              onClick={() => setShow(true)}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
