import * as React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import Grid from '@mui/material/Grid';

export default function FormPropsTextFields() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    if (name && email && message && phone) {
      const serviceId = 'service_2su3vfl';
      const templateId = 'template_jp3b8eb';
      const userId = 'user_CzKqoI66CxRTLZGh20lAF';
      const templateParams = {
        name,
        company,
        email,
        phone,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      setMessage('');
      alert('Message submitted!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <Typography
          variant='h3'
          style={{ marginBottom: '3%', fontFamily: 'Arima_Madurai' }}
        >
          Contact Us
        </Typography>
      </div>
      <Grid container>
        <Grid item lg={5} md={10} xs={10} style={{ marginRight: '2%' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '3%' }}
          >
            <AccountBoxRoundedIcon
              sx={{ color: 'action.active', mr: 0.5, my: 3 }}
            />
            <TextField
              required
              fullWidth
              id='name'
              label='Name'
              variant='outlined'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={5} md={10} xs={10}>
          <Box
            sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '3%' }}
          >
            <BusinessCenterRoundedIcon
              sx={{ color: 'action.active', mr: 0.5, my: 3 }}
            />
            <TextField
              id='company'
              fullWidth
              label='Company'
              variant='outlined'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={5} md={10} xs={10} style={{ marginRight: '2%' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '3%' }}
          >
            <EmailRoundedIcon sx={{ color: 'action.active', mr: 0.5, my: 3 }} />
            <TextField
              id='email'
              required
              fullWidth
              label='Email Address'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={5} md={10} xs={10}>
          <Box
            sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '3%' }}
          >
            <LocalPhoneRoundedIcon
              sx={{ color: 'action.active', mr: 0.5, my: 3 }}
            />
            <TextField
              id='phone'
              required
              fullWidth
              label='Phone Number'
              variant='outlined'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={10} md={10} xs={10} style={{ marginTop: '1%' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <SubjectRoundedIcon sx={{ color: 'action.active', mr: 1, my: 3 }} />
            <TextField
              id='message'
              required
              fullWidth
              multiline
              rows={8}
              variant='outlined'
              label='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <div
            style={{
              width: '50%',
              marginTop: '3%',
              marginLeft: '20%',
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
              onClick={submit}
            >
              <SendRoundedIcon style={{ marginRight: '4%' }} /> Send Message
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
