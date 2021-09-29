import * as React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export default function SeekerContact() {
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
        email,
        company,
        phone,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setCompany('');
      setPhone('');
      setMessage('');
      alert('Message submitted!');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Card
      style={{
        padding: '5%',
        border: 'solid 3px',
        borderColor: 'rgba(45, 45, 45, 0.6)',
        boxShadow: '3px 3px rgba(45, 45, 45, 0.6)',
        backgroundColor: 'rgba(32, 163, 226, 0.3)',
        borderRadius: '10px',
        height: '100%',
      }}
    >
      <Grid container display='flex' direction='row'>
        <Grid item lg={12} md={10} xs={10} style={{ marginBottom: '4%' }}>
          <Typography
            variant='h4'
            style={{
              fontFamily: 'Raleway',
              fontWeight: '700',
              fontSize: '2.7em',
            }}
          >
            Contact Us
          </Typography>
        </Grid>
        <Grid item lg={10} md={10} xs={10}>
          <Typography
            variant='body1'
            style={{
              fontFamily: 'Open_Sans',
              fontWeight: 'bold',
              fontSize: '1.1em',
              marginBottom: '5%',
            }}
          >
            Please fill out the fields below, and we'll get right back to you.
          </Typography>
        </Grid>
        <Grid item lg={10} md={10} xs={10}>
          <input
            style={{
              fontSize: '1.25em',
              borderRadius: '5px',
              borderColor: 'rgba(45, 45, 45, 0.7)',
              width: '100%',
              padding: '1%',
              marginTop: '1.5%',
              fontFamily: 'Open_Sans',
            }}
            type='text'
            placeholder='Name'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item lg={10} md={10} xs={10}>
          <input
            style={{
              fontSize: '1.25em',
              borderRadius: '5px',
              borderColor: 'rgba(45, 45, 45, 0.7)',
              width: '100%',
              marginTop: '1.5%',
              padding: '1%',
              fontFamily: 'Open_Sans',
            }}
            type='text'
            placeholder='Company (optional)'
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </Grid>
        <Grid item lg={10} md={10} xs={10}>
          <input
            style={{
              fontSize: '1.25em',
              borderRadius: '5px',
              borderColor: 'rgba(45, 45, 45, 0.7)',
              width: '100%',
              padding: '1%',
              marginTop: '1.5%',
              fontFamily: 'Open_Sans',
            }}
            type='email'
            required
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item lg={10} md={10} xs={10}>
          <input
            style={{
              fontSize: '1.25em',
              borderRadius: '5px',
              borderColor: 'rgba(45, 45, 45, 0.7)',
              width: '100%',
              padding: '1%',
              marginTop: '1.5%',
              fontFamily: 'Open_Sans',
            }}
            type='text'
            required
            placeholder='Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container display='flex' direction='column'>
        <Grid item>
          <textarea
            style={{
              fontSize: '1.25em',
              borderRadius: '5px',
              borderColor: 'rgba(45, 45, 45, 0.9)',
              width: '85%',
              fontFamily: 'Open_Sans',
              marginTop: '1.5%',
              padding: '1%',
            }}
            placeholder='Message'
            required='true'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            style={{
              backgroundImage:
                'linear-gradient(to top right, rgba(86, 199, 253), rgba(78, 253, 137), rgba(255, 237, 172), rgba(255, 185, 123))',
              border: '2px solid',
              borderRadius: '10px',
              fontFamily: 'Open_Sans',
              fontWeight: 'bold',
              fontSize: '1.2em',
              marginTop: '5%',
              marginBottom: '5%',
              color: 'indigo',
            }}
            onClick={submit}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
