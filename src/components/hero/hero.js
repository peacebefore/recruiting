import LogoImage from '../../assets/logos/logo4.png';
import { Typography } from '@mui/material';
import Cover from '../../assets/images/cover.jpg';
import TextLoop from 'react-text-loop';
import ValuesSection from '../values/values';

export default function HeroSection() {
  return (
    <div
      style={{
        background: `url(${Cover})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        paddingBottom: '5%',
      }}
    >
      <div style={{ marginBottom: '4%' }}>
        <img
          src={LogoImage}
          alt=''
          style={{ width: '20em', zIndex: '-1', padding: '2%' }}
        />
      </div>
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.45)',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyItems: 'center',
          paddingLeft: '3%',
        }}
      >
        <Typography
          variant='h2'
          style={{
            fontFamily: 'Aleo',
            fontWeight: 'bold',
            alignSelf: 'center',
            paddingTop: '5%',
            paddingBottom: '10%',
          }}
        >
          We create{' '}
          <TextLoop
            children={[
              'diverse',
              'happy',
              'tenacious',
              'fun',
              'inclusive',
              'proactive',
              'formidable',
              'gutsy',
              'resourceful',
              'scrappy',
            ]}
          />{' '}
          teams
        </Typography>
        <Typography
          variant='h4'
          style={{
            fontFamily: 'Amaranth',
            alignSelf: 'center',
            paddingBottom: '5%',
          }}
        >
          Achieve the best fit for you and your team
        </Typography>
      </div>
      <div>
        <ValuesSection />
      </div>
    </div>
  );
}
