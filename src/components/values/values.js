import { Grid, Typography } from '@mui/material';
import Smiling from '../../assets/images/smiling.png';

export default function ValuesSection() {
  return (
    <div
      style={{
        height: '100%',
        marginTop: '7%',
        marginBottom: '3%',
      }}
    >
      <Grid
        container
        style={{
          backgroundColor: 'rgba(31, 57, 98, 0.65)',
          color: 'rgba(255, 255, 255)',
          height: '100%',
          paddingLeft: '8%',
          paddingRight: '8%',
          paddingTop: '5%',
          paddingBottom: '5%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid item lg={5}>
          <h2 style={{ fontFamily: 'Open_Sans', fontSize: '3em' }}>
            Our Values
          </h2>
          <Typography
            style={{
              fontFamily: 'Raleway',
              fontSize: '24px',
              paddingBottom: '8%',
            }}
          >
            We believe there is a space for everyone and we work hard to find
            those who are the best fits for your roles.
          </Typography>
          <Typography
            style={{
              fontFamily: 'Raleway',
              fontSize: '24px',
              paddingBottom: '8%',
            }}
          >
            We are a recruiting firm that works across diverse industries,
            hiring employees directly, or on contract and contract to hire
            basis.
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          style={{
            width: '600px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '1%',
          }}
        >
          <img
            src={Smiling}
            alt='smiling people of diverse backgrounds'
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
