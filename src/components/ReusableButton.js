import React from 'react';
import '../styles/ReusableButton.css';
import Button from "@mui/material/Button";

const ReusableButton = ({ name= "Add", color= "Green", width, height,fontWeight, onClick }) => {
    return (
        <>
        <Button 
        variant="contained"
            className="reusable-button" 
            style={{ backgroundColor: color,width:width, fontWeight:fontWeight}}
            onClick={onClick}
             
        >
            {name}


        </Button>


</>
    );
};

export default ReusableButton;
