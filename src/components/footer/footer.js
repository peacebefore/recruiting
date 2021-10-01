import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Cover from '../../assets/images/cover.jpg';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function FooterSection() {
  return (
    <Grid
      container
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        background: `url(${Cover})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'whitesmoke',
      }}
    >
      <Grid
        item
        style={{
          backgroundColor: 'rgba(4, 80, 102, 0.4)',
          width: '100%',
          padding: '3%',
        }}
      >
        <Typography variant='caption' style={{ fontFamily: 'Open_Sans' }}>
          <CopyrightIcon style={{ fontSize: '1em' }} /> Crafted by Willow Luna
          LLC. All Rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}
