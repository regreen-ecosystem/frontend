import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';

const Heading: React.FC = () => {
  return (
    <>
      <Typography
        variant='h4'
        style={{ fontWeight: 500, width: 'max-content' }}
      >
        Welcome to Regreen Ecosystem
      </Typography>
      <Typography
        variant='body1'
        style={{
          fontWeight: 200,
          color: grey[700],
          width: 'max-content',
          marginBottom: '2rem',
        }}
      >
        Please Enter your Details
      </Typography>
    </>
  );
};

export default Heading;
