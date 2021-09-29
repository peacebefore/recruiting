import { Grid } from '@mui/material';
import LogoImage from '../../assets/logos/logo4.png';

export default function NavBar() {
  return (
    <Grid
      container
      spacing={2}
      style={{
        backgroundColor: '#ffffff',
        opacity: '0.7',
      }}
    >
      <Grid item xs={4} md={3}>
        <img
          src={LogoImage}
          alt='TJFJ Sourcing'
          style={{ width: '100%', padding: '10%' }}
        />
      </Grid>
    </Grid>
  );
}
