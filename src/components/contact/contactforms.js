import { Grid } from '@mui/material';
import ContactForm from './updatedForm';

export default function ContactSection() {
  return (
    <div
      id='contactform'
      style={{
        backgroundImage:
          'linear-gradient(to top right, rgba(10, 199, 253), rgba(78, 253, 137, 0.65), rgba(255, 185, 123, 0.8))',
      }}
    >
      <Grid
        container
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={10}
          md={8}
          lg={8}
          style={{
            marginTop: '3%',
            paddingTop: '3%',
            paddingBottom: '3%',
            marginBottom: '3%',
            paddingLeft: '3%',
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
          }}
        >
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
}
