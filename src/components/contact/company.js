import * as React from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

export default function CompanyContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_7me4hg8';
      const templateId = 'template_4jh8kwp';
      const userId = 'user_JPQkjdf7zA1dSCn9fTd0N';
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      alert('Message submitted!');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div>
      <Grid
        container
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={10} md={10} lg={10}>
          <Typography
            variant='h4'
            style={{ paddingTop: '3%', paddingBottom: '1%', color: '#103049' }}
          >
            Looking to Grow your Team? Let's Talk!
          </Typography>
          <Card
            style={{
              backgroundColor: '',
              color: '',
            }}
          >
            <Grid item xs={12} md={12} lg={12}>
              <input
                style={{ marginTop: '4%', marginBottom: '1%' }}
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <input
              style={{ marginBottom: '1%' }}
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              style={{ marginBottom: '1%' }}
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <Grid item xs={12} md={12} lg={12}>
              <Button onClick={submit}>Send Message</Button>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
