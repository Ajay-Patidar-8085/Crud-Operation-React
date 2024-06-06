import React from 'react';
import '../styles/CRUDButtons.css';

const CRUDButtons = ({ onCreate }) => {
    return (
        <div className="crud-buttons">
            <button onClick={onCreate}>Create</button>
        </div>
    );
};

export default CRUDButtons;
