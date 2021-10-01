import { Typography } from '@mui/material';

export default function ValuesSection() {
  return (
    <div
      style={{
        padding: '8%',
        height: '100%',
        backgroundImage:
          'linear-gradient(to top right, rgba(86, 199, 253), rgba(78, 253, 137, 0.7), rgba(255, 237, 172), rgba(255, 185, 123, 0.8))',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255)',
          color: 'black',
          border: '3px solid orange',
          padding: '3%',
          borderRadius: '15px',
        }}
      >
        <h2 style={{ fontFamily: 'Raleway', fontSize: '3em' }}>Our Values</h2>
        <Typography style={{ fontFamily: 'Open_Sans', fontSize: '24px' }}>
          We believe there is a space for everyone and we work hard to find
          those who are the best fits for your roles.
        </Typography>
        <p style={{ fontFamily: 'Open_Sans', fontSize: '24px' }}>
          We are a recruiting firm that works across diverse industries, hiring
          employees directly, or on contract and contract to hire basis.
        </p>
      </div>
    </div>
  );
}
