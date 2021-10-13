import React, { useRef } from 'react';
import { Form } from 'react-final-form';
import { makeRequired, makeValidate } from 'mui-rff';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

//mui components
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from 'mui-rff';
import { CssBaseline } from '@mui/material';

//icons
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

const phoneRegExp =
  '^[+]?1?[s-]?[(.]?[s]?[0-9]{3}[).-]?[s]?[0-9]{3}[-s.]?[0-9]{4}$';

// We define our schema based on the same keys as our form:
const schema = Yup.object().shape({
  fullName: Yup.string().required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Please enter a valid phone number.')
    .required('Required'),
  email: Yup.string()
    .email('Please enter a valid email address.')
    .required('Required'),
  message: Yup.string().required('Required'),
});

// Run the makeValidate function...
const validate = makeValidate(schema);
const required = makeRequired(schema);

const formFields = [
  {
    size: 6,
    field: (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <AccountBoxRoundedIcon
          sx={{ color: 'action.active', mr: 1.25, my: 2.5 }}
        />
        <TextField
          label='Name'
          name='fullName'
          margin='none'
          required={required.fullName}
        />
      </Box>
    ),
  },
  {
    size: 6,
    field: (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <BusinessCenterRoundedIcon
          sx={{ color: 'action.active', mr: 1.25, my: 2.5 }}
        />
        <TextField label='Company' name='company' margin='none' />
      </Box>
    ),
  },
  {
    size: 6,
    field: (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <LocalPhoneRoundedIcon
          sx={{ color: 'action.active', mr: 1.25, my: 2.5 }}
        />
        <TextField
          label='Phone Number'
          name='phone'
          margin='none'
          required={required.phone}
        />
      </Box>
    ),
  },
  {
    size: 6,
    field: (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <EmailRoundedIcon sx={{ color: 'action.active', mr: 1.25, my: 2.5 }} />
        <TextField
          type='email'
          label='Email Address'
          name='email'
          margin='none'
          required={required.email}
        />
      </Box>
    ),
  },
  {
    size: 12,
    field: (
      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
        <SubjectRoundedIcon
          sx={{ color: 'action.active', mr: 1.25, my: 2.5 }}
        />
        <TextField
          name='message'
          multiline
          label='Message'
          margin='none'
          required={required.message}
        />
      </Box>
    ),
  },
];

export default function ContactWithValidation() {
  const contactFormEmail = useRef();

  const sendEmail = () => {
    emailjs.sendForm(
      'service_2su3vfl',
      'template_jp3b8eb',
      contactFormEmail.current,
      'user_CzKqoI66CxRTLZGh20lAF'
    );
  };

  const onSubmit = async (values) => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await sleep(300);
    sendEmail();
    window.alert("Thank you! We'll be in touch!");
    window.location.reload(false);
  };

  return (
    <div style={{ marginTop: '12%', marginBottom: '12%' }}>
      <CssBaseline />
      <Typography
        variant='h3'
        align='center'
        component='h1'
        gutterBottom
        style={{ marginBottom: '3%', fontFamily: 'Arima_Madurai' }}
      >
        Let's Work Together
      </Typography>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          fullName: '',
          company: '',
          phone: '',
          email: '',
          message: '',
        }}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form ref={contactFormEmail} onSubmit={handleSubmit} noValidate>
            <Grid
              container
              display='flex'
              alignItems='flex-start'
              spacing={2}
              justifyContent='center'
            >
              {formFields.map((item, idx) => (
                <Grid item xs={item.size} key={idx}>
                  {item.field}
                </Grid>
              ))}
              <Grid item lg={2} md={4} xs={4} style={{ marginTop: 20 }}>
                <Button
                  type='button'
                  size='large'
                  fullWidth
                  style={{
                    fontFamily: 'Aleo',
                    fontSize: '1.2em',
                    paddingTop: '2%',
                    paddingBottom: '2%',
                    borderRadius: '5px',
                  }}
                  variant='contained'
                  color='text'
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  <ClearRoundedIcon /> Reset
                </Button>
              </Grid>
              <Grid
                item
                lg={2}
                md={4}
                xs={4}
                style={{ marginTop: 20, marginLeft: '4%' }}
              >
                <Button
                  variant='contained'
                  size='large'
                  fullWidth
                  style={{
                    fontFamily: 'Aleo',
                    fontSize: '1.2em',
                    paddingTop: '2%',
                    paddingBottom: '2%',
                    borderRadius: '5px',
                  }}
                  color='secondary'
                  type='submit'
                  disabled={submitting}
                >
                  <SendRoundedIcon style={{ marginRight: '10%' }} /> Send
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </div>
  );
}
