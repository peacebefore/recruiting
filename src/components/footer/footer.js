import Typography from '@mui/material/Typography';
import Cover from '../../assets/images/cover.jpg';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function FooterSection() {
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyItems: 'center',
        background: `url(${Cover})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'whitesmoke',
      }}
    >
      <Typography
        variant='caption'
        style={{
          fontFamily: 'Open_Sans',
          fontSize: '1.1em',
          backgroundColor: 'rgba(4, 80, 102, 0.4)',
          width: '100%',
          paddingTop: '5%',
          paddingBottom: '2%',
          paddingLeft: '2%',
          alignSelf: 'center',
        }}
      >
        <CopyrightIcon style={{ fontSize: '1em' }} /> Crafted by Willow Luna
        LLC. All Rights Reserved.
      </Typography>
    </div>
  );
}
