import React, { useState } from 'react';
import "../styles/Table.css";
import ReusableButton from "./ReusableButton";
import AddEditForm from "./AddEditForm";

const Table = () => {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const handleAdd = (item) => {
    setData(prevData => [...prevData, { ...item }]);
  };

  const handleUpdate = (item) => {
    setData(prevData => prevData.map(dataItem => dataItem.id === item.id ? item : dataItem));
  };

  const handleSave = (item) => {
    if (isEditing) {
      handleUpdate(item);
      setIsEditing(false);
    } else {
      handleAdd(item);
    }
    setCurrentData(null);
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find(item => item.id === id);
    setCurrentData(itemToEdit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this data?")) {
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
    }
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Employee Table</h2>
      <AddEditForm
        onSave={handleSave}
        currentData={isEditing ? currentData : null}
        onCancel={() => {
          setIsEditing(false);
          setCurrentData(null);
        }}
      />
      <table className="crud-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td style={{ width: "300px" }}>
                <span>
                  <ReusableButton
                    name="Edit"
                    color="orange"
                    width="90px"
                    fontWeight="900"
                    onClick={() => handleEdit(item.id)}
                  />
                  <ReusableButton
                    name="Delete"
                    color="red"
                    width="90px"
                    fontWeight="900"
                    onClick={() => handleDelete(item.id)}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
