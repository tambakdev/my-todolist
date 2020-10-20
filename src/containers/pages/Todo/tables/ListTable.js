import React from "react";

const ListTable = (props) => (
  <table className="table is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>Description</th>
        <th>Created At</th>
        <th>Due Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.lists.length > 0 ? (
        props.lists.map((list) => (
          <tr key={list.id}>
            <th>{list.id}</th>
            <td>{list.description}</td>
            <td>{list.created_at}</td>
            <td>{list.due_date}</td>
            <td>
              {list.id}
              <input name={list.id} 
              onChange={() => props.checkedList(list.id)} 
              type="checkbox" />

              <button
                onClick={() => {
                  props.editRow(list)                  
                }}
                className="button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteList(list.id)}
                className="button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4} align="center">No lists</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ListTable;
