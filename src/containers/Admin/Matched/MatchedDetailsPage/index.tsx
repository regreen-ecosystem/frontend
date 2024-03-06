import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import { MatchedStatus } from '..';

const useStyles = makeStyles()((theme) => ({
  backgroundDiv: {
    // width: '100%',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    minHeight: '45vh',
    position: 'absolute',
    top: '0px',
    zIndex: -1,
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '10px 70px 0 70px',
  },
  matchedHeading: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'start',
  },
  detailsContainer: {
    p: {
      padding: '0',
      margin: '0',
    },
  },
  detailsHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '20px !important',
  },
  columnHeading: {
    fontSize: '18px',
  },
  columnData: {
    fontSize: '14px',
    fontWeight: 'normal',
    color: '#898989',
  },
  detailsValue: {
    fontSize: '18px',
    fontWeight: 'normal',
    color: 'black',
  },
}));

const MatchedDetailsPage: React.FC = () => {
  const { classes } = useStyles();
  const data = (useLoaderData() as any).data;
  const { pibo, pwp, credits, selling_price, status, asset, plastic_type } =
    data;

  return (
    <div className={classes.container}>
      <p className={classes.matchedHeading}>Matched</p>
      <div className={classes.root}>
        <div className={classes.detailsContainer}>
          <p className={classes.detailsHeading}>
            Status:
            <p className={classes.detailsValue}>
              {MatchedStatus[status as keyof typeof MatchedStatus]}
            </p>
          </p>
        </div>
        <div className={classes.detailsContainer}>
          <p className={classes.detailsHeading}>PIBO:</p>
          <p className={classes.columnHeading}>{pibo.details.name}</p>
          <p className={classes.columnData}>{pibo.details.email}</p>
          <p className={classes.columnData}>{pibo.details.phone_number}</p>
          <p className={classes.columnData}>{pibo.details.state}</p>
        </div>
        <div className={classes.detailsContainer}>
          <p className={classes.detailsHeading}>PWP:</p>
          <p className={classes.columnHeading}>{pwp.details.name}</p>
          <p className={classes.columnData}>{pwp.details.email}</p>
          <p className={classes.columnData}>{pwp.details.phone_number}</p>
          <p className={classes.columnData}>{pwp.details.state}</p>
        </div>
        <div className={classes.detailsContainer}>
          <p className={classes.detailsHeading}>
            Buying Price: <p className={classes.detailsValue}>{asset.cost}</p>
          </p>
          <p className={classes.detailsHeading}>
            Selling Price:{' '}
            <p className={classes.detailsValue}>{selling_price}</p>
          </p>
        </div>
        <div className={classes.detailsContainer}>
          <p className={classes.detailsHeading}>
            Type:<p className={classes.detailsValue}>{plastic_type}</p>
          </p>
          <p className={classes.detailsHeading}>
            Credits:<p className={classes.detailsValue}>{credits}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchedDetailsPage;
