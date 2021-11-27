import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const FieldWrapper = styled(Box)`
  max-width: 200px;
  padding: 10px;
`;

function TaskForm({ onSubmit, task = {}, newTask, onCancel }) {
  const { title = '', description = '', status = '', user = '', id } = task;

  const { control, handleSubmit } = useForm({
    defaultValues: {
      title,
      description,
      status,
      user,
      id,
    },
  });

  function handleOnSubmit(data) {
    onSubmit(data);
  }

  return (
    <FormWrapper onSubmit={handleSubmit(handleOnSubmit)}>
      <FieldWrapper>
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <FormControl>
              <TextField
                label="Title"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            </FormControl>
          )}
          rules={{ required: 'Title is required' }}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Controller
          name="description"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl>
              <TextField
              label="Description"
              multiline
              value={value}
              onChange={onChange}
            />
            </FormControl>
          )}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Controller
          name="user"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl sx={{ width: '100%' }}>
              <InputLabel>User</InputLabel>
              <Select
              value={value}
              label="User"
              onChange={onChange}
            >
                <MenuItem value="">
                  <em>Unassigned</em>
                </MenuItem>
                <MenuItem value="jd">JD</MenuItem>
                <MenuItem value="aj">AJ</MenuItem>
                <MenuItem value="ss">SS</MenuItem>
              </Select>
            </FormControl>
          )}
        />
      </FieldWrapper>
      {!newTask &&
        (
          <FieldWrapper>
            <Controller
            name="status"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl sx={{ width: '100%' }}>
                <InputLabel>Status</InputLabel>
                <Select
                  value={value}
                  label="Status"
                  onChange={onChange}
                >
                  <MenuItem value="toDo">To-do</MenuItem>
                  <MenuItem value="inProgress">In progress</MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                </Select>
              </FormControl>
              )}
            />
          </FieldWrapper>
        )
      }
      <FieldWrapper>
        <Button variant="outlined" type="submit">Submit</Button>
        <Button variant="outlined" onClick={onCancel}>Cancel</Button>
      </FieldWrapper>
    </FormWrapper>
  );
}

export { TaskForm };
