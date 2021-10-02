import { Grid, Typography } from '@mui/material';
import ContactForm from './updatedForm';

export default function ContactSection() {
  return (
    <div id='contactform'>
      <Grid
        container
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(238, 242, 246)',
        }}
      >
        <Grid
          item
          xs={10}
          md={8}
          lg={5}
          style={{ marginTop: '10%', marginBottom: '10%' }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}
