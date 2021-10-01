import LogoImage from '../../assets/logos/logo4.png';
import { Card, Grid, Typography } from '@mui/material';
import Cover from '../../assets/images/cover.jpg';
import TextLoop from 'react-text-loop';

export default function HeroSection() {
  return (
    <Grid
      container
      display='flex'
      justifyContent='center'
      alignItems='center'
      direction='row'
      sx={{
        background: `url(${Cover})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
      }}
    >
      <Grid item lg={12} md={12} xs={12} style={{ marginBottom: '2%' }}>
        <img
          src={LogoImage}
          alt=''
          style={{ width: '20em', zIndex: '-1', padding: '1.5%' }}
        />
      </Grid>
      <Grid
        item
        style={{
          paddingBottom: '5%',
          width: '65%',
        }}
      >
        <Grid
          item
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.45)',
            padding: '5%',
          }}
        >
          <Typography
            variant='h2'
            style={{
              fontFamily: 'Open_Sans',
              fontWeight: 'bold',
            }}
          >
            We create{' '}
            <TextLoop
              children={[
                'creative',
                'tenacious',
                'proactive',
                'formidable',
                'gutsy',
                'resourceful',
                'scrappy',
              ]}
            />{' '}
            teams
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.45)',
            padding: '5%',
            paddingTop: '15%',
            marginBottom: '10%',
          }}
        >
          <Typography
            variant='h4'
            style={{
              fontFamily: 'Raleway',
              fontWeight: 'bold',
            }}
          >
            Achieve the best fit for you and your team
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
