import React, { useState, Fragment } from "react";
import AddListForm from "./forms/AddListForm";
import EditListForm from "./forms/EditListForm";
import ListTable from "./tables/ListTable";

const Todo = () => {
	
  const listData = [
    {
      id: 1,
      description: "Login",
      created_at: "2020-10-20",
      due_date: "2020-10-21",
    },
    {
      id: 2,
      description: "Dashboard",
      created_at: "2020-10-20",
      due_date: "2020-10-21",
    },
  ];

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
    list.created_at = new Date().toISOString().slice(0, 10);
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
	  console.log(showModal)
  };

  const [buttonDelete, setButton] = useState();
  const checkedList = (id) => {
	  alert(id);
	  setButton(false);
	  console.log(buttonDelete);
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

      <h1 className="is-size-1">Your Todo Lists</h1>
      <div className="flex-row">
        <div className="mt-5">
          <ListTable
            lists={lists} 
            editRow={editRow} 
            deleteList={deleteList} 
            checkedList={checkedList}
          />
        </div>
        <div className="columns mt-5">
          <div className="column">
            <button className="button is-info" onClick={() => setShow(true)}>
              ADD
            </button>
          </div>
          <div className="column">
            <button className="button is-dark" disabled>
              EDIT
            </button>
          </div>
          <div className="column">
            <button className="button is-danger is-pulled-right" disabled>
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
