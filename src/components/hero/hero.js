import LogoImage from '../../assets/logos/logo4.png';
import { Card, Grid, Button, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Grid
      container
      sx={{
        height: '100%',
        paddingTop: '2%',
        paddingLeft: '4%',
        paddingBottom: '15%',
      }}
    >
      <Card
        sx={{
          backgroundColor: '#ffffff',
          opacity: '0.7',
          paddingLeft: '1%',
          width: '100%',
        }}
      >
        <Grid
          container
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <img
              src={LogoImage}
              alt=''
              style={{ width: '20em', zIndex: '-1' }}
            />
          </Grid>
          <Grid item style={{ marginRight: '2%' }}>
            <Button variant='contained' style={{ fontSize: '1.25em' }}>
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Grid container display='flex' justifyContent='center'>
        {' '}
        <Grid
          item
          lg={6}
          md={6}
          xs={12}
          style={{
            backgroundColor: '#ffffff',
            opacity: '0.7',
            marginTop: '5%',
          }}
        >
          <Typography
            variant='h4'
            style={{
              paddingTop: '5%',
              marginLeft: '8%',
              marginRight: '5%',
              fontFamily: 'Raleway',
              fontWeight: 'bold',
            }}
          >
            Achieve the best fit for you and your team
          </Typography>
          <Typography
            style={{
              fontSize: '1.3em',
              fontWeight: 'bold',
              paddingTop: '5%',
              marginLeft: '8%',
              marginRight: '5%',
              fontFamily: 'Open_Sans',
            }}
          >
            We are a recruiting firm that works across diverse industries,
            hiring employees directly, or on contract and contract to hire
            basis.
          </Typography>
          <Typography
            style={{
              fontSize: '1.3em',
              fontWeight: 'bold',
              paddingTop: '5%',
              marginLeft: '8%',
              paddingBottom: '5%',
              marginRight: '5%',
              fontFamily: 'Open_Sans',
            }}
          >
            We believe there is a space for everyone and we work hard to find
            those who are the best fits for your roles.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
