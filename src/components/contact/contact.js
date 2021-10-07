import React from 'react';
import { Form } from 'react-final-form';
import { TextField, showErrorOnBlur } from 'mui-rff';
import { Typography, Paper, Grid, Button, CssBaseline } from '@mui/material';
import { makeValidate } from 'mui-rff';
import * as Yup from 'yup';

const phoneRegExp =
  /^[+]?1?[\s-]?[(.]?[\s]?[0-9]{3}[).-]?[\s]?[0-9]{3}[-\s.]?[0-9]{4}$/;

const schema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Please enter a valid email.').required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Please enter a valid phone number.')
    .required('Required'),
  message: Yup.string().required('Required'),
});

const validate = makeValidate(schema);

const onSubmit = async (values) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const formFields = [
  {
    size: 6,
    field: (
      <TextField
        label='Name'
        name='name'
        margin='none'
        required={true}
        showError={showErrorOnBlur}
      />
    ),
  },
  {
    size: 6,
    field: <TextField label='Company' name='company' margin='none' />,
  },
  {
    size: 6,
    field: (
      <TextField
        type='phone'
        label='Phone Number'
        name='phone'
        margin='none'
        required={true}
        showError={showErrorOnBlur}
      />
    ),
  },
  {
    size: 6,
    field: (
      <TextField
        type='email'
        label='Email Address'
        name='email'
        margin='none'
        required={true}
        showError={showErrorOnBlur}
      />
    ),
  },

  {
    size: 12,
    field: (
      <TextField
        required
        name='message'
        multiline
        label='Message'
        margin='none'
      />
    ),
  },
];

export default function ContactUs() {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant='h4' align='center' component='h1' gutterBottom>
        Contact Us
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          Name: '',
          Company: '',
          Phone: '',
          Email: '',
          Message: '',
        }}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems='flex-start' spacing={2}>
                {formFields.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type='button'
                    variant='contained'
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant='contained'
                    color='info'
                    type='submit'
                    disabled={submitting}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}
