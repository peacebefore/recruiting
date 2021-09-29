import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function FooterSection() {
  return (
    <Grid
      container
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '80px',
        alignItems: 'center',
        backgroundColor: 'rgba(58, 179, 196, 0.7)',
        color: 'whitesmoke',
        marginLeft: '4%',
        padding: '2%',
        marginTop: '5%',
      }}
    >
      <Grid item>
        <Typography variant='caption' style={{ fontFamily: 'Open_Sans' }}>
          Crafted by Willow Luna LLC. All Rights Reserved.
        </Typography>
      </Grid>
    </Grid>
  );
}
