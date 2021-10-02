import * as React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <Typography variant='h3'>Contact Us</Typography>
      </div>
      <div>
        <TextField
          required
          id='outlined-required'
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id='outlined-required'
          label='Company (optional)'
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id='outlined-required'
          label='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id='outlined-required'
          label='Phone Number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id='outlined-required'
          label='Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </Box>
  );
}
