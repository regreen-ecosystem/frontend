import React from 'react';
import { CreditExch, PlasticTypes } from './charts';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1vw 4vw 0 4vw',
  },
  boxes: {
    'backgroundColor': '#ECEFF3',
    'width': '16vw',
    'aspectRatio': '4/3',
    'display': 'flex',
    'flexDirection': 'column',
    'borderRadius': '25px',
    'boxShadow': '0px 20px 80px 0px rgba(35, 35, 35, 0.15)',
    'minHeight': '100%',
    'placeContent': 'center',
    '> *': {
      marginLeft: '1.8vw !important',
    },
  },
  box1: {
    width: '40vw',
    aspectRatio: '5/3',
    outline: '1.75vw solid #ECEFF3',
    borderRadius: '5px',
    margin: '2vw 2vw 4vw 2vw',
    padding: '1vw',
    boxShadow: '0px 20px 40px 20px rgba(35, 35, 35, 0.15)',
    backgroundColor: theme.palette.common.white,
  },
  box2: {
    width: '35vw',
    aspectRatio: '5/3',
    objectFit: 'initial',
    outline: '1.75vw solid #ECEFF3',
    borderRadius: '5px',
    margin: '2vw 2vw 4vw 2vw',
    padding: '1vw',
    boxShadow: '0px 30px 40px 20px rgba(35, 35, 35, 0.15)',
    backgroundColor: theme.palette.common.white,
  },
  num: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: '500',
  },
  head: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: '400',
  },
  desc: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: '1.3rem',
    margin: '0.5vw 0 0 0',
    fontWeight: 'bold',
  },
  val: {
    color: theme.palette.text.primary,
    fontSize: '1.6rem',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '0.5rem',
  },
  numTitle: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

const Dashboard: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.boxes}>
          <PeopleAltOutlinedIcon />
          <div className={classes.textContainer}>
            <div className={classes.titleContainer}>
              <Typography className={classes.num}>{'231'}</Typography>
              <Typography className={classes.numTitle}>{'PIBOs'}</Typography>
            </div>
            <Typography className={classes.head}>{'Monthly active'}</Typography>
            <Typography className={classes.desc}>
              {'Total registered: 456'}
            </Typography>
          </div>
        </div>
        <div className={classes.boxes}>
          <PeopleAltOutlinedIcon />
          <div className={classes.textContainer}>
            <div className={classes.titleContainer}>
              <Typography className={classes.num}>{'115'}</Typography>
              <Typography className={classes.numTitle}>{'PWPs'}</Typography>
            </div>
            <Typography className={classes.head}>{'Monthly active'}</Typography>
            <Typography className={classes.desc}>
              {'Total registered: 257'}
            </Typography>
          </div>
        </div>
        <div className={classes.boxes}>
          <ShareOutlinedIcon />
          <Typography className={classes.num}>{'164'}</Typography>
          <Typography className={classes.head}>{'Monthly Matches'}</Typography>
          <Typography className={classes.desc}>{'Last Month: 119'}</Typography>
        </div>
        <div className={classes.boxes}>
          <DescriptionOutlinedIcon />
          <Typography className={classes.num}>{'15'}</Typography>
          <Typography className={classes.head}>{'PIBO Bills'}</Typography>
          <Typography className={classes.desc}>
            {'Bills cleared yearly: 512'}
          </Typography>
        </div>
        <div className={classes.boxes} style={{ marginRight: 0 }}>
          <DescriptionOutlinedIcon />
          <Typography className={classes.num}>{'--'}</Typography>
          <Typography className={classes.head}>{'PWP Bills'}</Typography>
          <Typography className={classes.desc}>
            {'Bills cleared yearly: 315'}
          </Typography>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.box1}>
          <div>
            <Typography className={classes.title} style={{ margin: 0 }}>
              {'Quarterly Credit Exchange'}
            </Typography>
            <Typography
              className={classes.val}
              style={{ marginTop: 5, marginBottom: 5 }}
            >
              {'32,454'}
            </Typography>
          </div>
          <CreditExch />
        </div>
        <div className={classes.box2}>
          <Typography
            className={classes.title}
            style={{ marginTop: 5, marginBottom: 30 }}
          >
            {'Types of Plastic'}
          </Typography>
          <PlasticTypes />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
