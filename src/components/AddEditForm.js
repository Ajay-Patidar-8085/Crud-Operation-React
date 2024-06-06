

import React, { useState, useEffect } from 'react';
import { Grid, TextField, Button, Container, Paper, Typography } from '@mui/material';


const AddEditForm = ({ onSave, currentData, onCancel }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    if (currentData) {
      setId(currentData.id);
      setName(currentData.Name);
      setAge(currentData.Age);
    } else {
      setId('');
      setName('');
      setAge('');
    }
  }, [currentData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: id || Date.now(), Name: name, Age: age });
    setId('');
    setName('');
    setAge('');
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          {currentData ? 'Edit User' : 'Add User'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <TextField
                label="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                disabled={!!currentData}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <TextField
                label="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Grid>
            <Grid item>
              <Button  style={{width:"90px" ,fontWeight:900, backgroundColor:"green"}} type="submit" variant="contained" color="primary">
                {currentData ? 'Update' : 'Save'}
              </Button>
            </Grid>
            <Grid item>
              <Button  style={{width:"90px" ,fontWeight:900}}type="button" onClick={onCancel} variant="contained" color= "secondary">
                Cancel
              </Button>
          


            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddEditForm;
