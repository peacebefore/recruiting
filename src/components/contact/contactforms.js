import { Grid } from '@mui/material';
import ContactWithValidation from './contact';

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
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          style={{
            width: '80%',
          }}
        >
          <ContactWithValidation />
        </Grid>
      </Grid>
    </div>
  );
}
