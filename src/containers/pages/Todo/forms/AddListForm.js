import React, { useState } from "react";

const AddListForm = (props) => {
  const initialFormState = {
    id: null,
    description: "",
    created_at: "",
    due_date: "",
  };
  const [list, setList] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setList({ ...list, [name]: value });
  };

  const handleCancel = () => {
	  props.closeModal()
	  setList(initialFormState)
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!list.description || !list.due_date) return;

      props.addList(list);
          setList(initialFormState);
        }}
    >
      <label>Description</label>
      <textarea
        className="input mb-5"
        placeholder="Write your todo here"
        style={{minHeight: "70px"}}
        name="description"
        value={list.description}
        onChange={handleInputChange} 
      />
      <label>Due Date</label>
      <input
        className="input"
        type="date"
        name="due_date"
        value={list.due_date}
        onChange={handleInputChange}
      />
	  <button 
      type="button"
      className="button is-danger mt-2"
      onClick={handleCancel}
    >
      Cancel
    </button>
	  <button 
	    className="button is-info is-pulled-right mt-2"
	  >
		  Save
	  </button>
    </form>
  );
};

export default AddListForm;
