import * as React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form } from 'react-final-form';
import { makeRequired, makeValidate, showErrorOnBlur } from 'mui-rff';
import * as Yup from 'yup';

//mui components
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from 'mui-rff';

//icons
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const phoneRegExp =
    '^[+]?1?[s-]?[(.]?[s]?[0-9]{3}[).-]?[s]?[0-9]{3}[-s.]?[0-9]{4}$';

  const schema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('Required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Please enter a valid phone number.')
      .required('Required'),
    message: Yup.string().required('Required'),
  });

  const validate = makeValidate(schema);
  const required = makeRequired(schema);

  const serviceID = 'service_2su3vfl';
  const templateID = 'template_jp3b8eb';
  const userID = 'user_CzKqoI66CxRTLZGh20lAF';
  const templateParams = { fullName, company, phone, email, message };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const resetForm = () => {
    setFullName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const onSubmit = async (values) => {
    emailjs.sendForm(serviceID, templateID, templateParams, userID);

    await sleep(300);
    resetForm();
  };

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
            sx={{ color: 'action.active', mr: 1.25, my: 3 }}
          />
          <TextField
            label='Name'
            name='fullName'
            margin='none'
            fullWidth
            value={fullName}
            required={required.fullName}
            showError={showErrorOnBlur}
            onChange={(e) => setFullName(e.target.value)}
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
            sx={{ color: 'action.active', mr: 1.25, my: 3 }}
          />
          <TextField
            label='Company'
            name='company'
            margin='none'
            fullWidth
            value={company}
            onChange={(e) => setCompany(e.target.value)}
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
          <EmailRoundedIcon sx={{ color: 'action.active', mr: 1.25, my: 3 }} />
          <TextField
            type='email'
            label='Email Address'
            name='email'
            margin='none'
            fullWidth
            value={email}
            required={true}
            showError={showErrorOnBlur}
            onChange={(e) => setEmail(e.target.value)}
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
          <LocalPhoneRoundedIcon
            sx={{ color: 'action.active', mr: 1.25, my: 3 }}
          />
          <TextField
            type='phone'
            label='Phone Number'
            name='phone'
            value={phone}
            margin='none'
            fullWidth
            required={true}
            showError={showErrorOnBlur}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
      ),
    },
    {
      size: 12,
      field: (
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <SubjectRoundedIcon
            sx={{ color: 'action.active', mr: 1.25, my: 3 }}
          />
          <TextField
            name='message'
            fullWidth
            multiline
            label='Message'
            margin='none'
            value={message}
            required={true}
            showError={showErrorOnBlur}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
      ),
    },
  ];

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={{
        fullName: '',
        company: '',
        phone: '',
        email: '',
        message: '',
      }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Grid
            container
            display='flex'
            justifyContent='space-evenly'
            alignContent='center'
            style={{ paddingRight: '5%' }}
          >
            <Grid item lg={10} md={10} xs={10}>
              <div>
                <Typography
                  variant='h3'
                  style={{ marginBottom: '3%', fontFamily: 'Arima_Madurai' }}
                >
                  Contact Us
                </Typography>
              </div>
            </Grid>

            <Grid
              container
              display='flex'
              justifyContent='space-evenly'
              spacing={2}
            >
              {formFields.map((item, idx) => (
                <Grid item xs={item.size} key={idx}>
                  {item.field}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            container
            display='flex'
            justifyContent='space-evenly'
            alignContent='center'
            style={{ paddingRight: '5%' }}
          >
            <Grid item lg={3} md={5} xs={5}>
              <div
                style={{
                  width: '100%',
                  marginTop: '7%',
                }}
              >
                <Button
                  type='button'
                  variant='contained'
                  fullWidth
                  size='large'
                  color='inherit'
                  style={{
                    fontFamily: 'Aleo',
                    fontSize: '1.1em',
                    paddingTop: '3%',
                    paddingBottom: '3%',
                    borderRadius: '5px',
                    borderWidth: '2px',
                  }}
                  onClick={resetForm}
                >
                  Reset
                </Button>
              </div>
            </Grid>

            <Grid item lg={3} md={5} xs={5}>
              <div
                style={{
                  width: '100%',
                  marginTop: '7%',
                }}
              >
                <Button
                  variant='contained'
                  fullWidth
                  size='large'
                  color='inherit'
                  style={{
                    fontFamily: 'Aleo',
                    color: 'rgba(3, 97, 119)',
                    backgroundColor: 'rgba(255, 255, 255)',
                    fontSize: '1.1em',
                    paddingTop: '3%',
                    paddingBottom: '3%',
                    borderRadius: '5px',
                    borderWidth: '2px',
                  }}
                >
                  <SendRoundedIcon style={{ marginRight: '4%' }} /> Send
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
}
