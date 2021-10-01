import SeekerContact from './seeker';
import { Grid } from '@mui/material';
import Smiling from '../../assets/images/smiling.png';

export default function ContactSection() {
  return (
    <div id='contactform'>
      <Grid
        container
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: 'rgba(238, 242, 246)',
        }}
      >
        <Grid item xs={10} md={5} lg={5}>
          <img
            src={Smiling}
            alt=''
            style={{ width: '100%', marginTop: '5%' }}
          />
        </Grid>
        <Grid
          item
          xs={10}
          md={4}
          lg={4}
          style={{ marginTop: '4%', marginBottom: '4%' }}
        >
          <SeekerContact />
        </Grid>
      </Grid>
    </div>
  );
}