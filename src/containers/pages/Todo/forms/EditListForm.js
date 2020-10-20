import React, { useState, useEffect } from "react";

const EditListForm = (props) => {
  const [list, setList] = useState(props.currentList);

  useEffect(() => {
    setList(props.currentList);
  }, [props]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setList({ ...list, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateList(list.id, list);
      }}
    >
      <label>Description</label>
      <textarea
        className="input mb-5"
        placeholder="Write your todo here"
        style={{ minHeight: "70px" }}
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
      >
        Cancel
      </button>
      <button 
        className="button is-info is-pulled-right mt-2"
      >
        Update
      </button>
    </form>
  );
};

export default EditListForm;
