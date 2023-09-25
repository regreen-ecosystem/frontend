import React from 'react';
import {CreditExch,PlasticTypes} from './charts';
import { makeStyles } from 'tss-react/mui';
import {Typography} from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const useStyles = makeStyles()((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2vw 2vw 0 2vw',
        overflow: 'auto'
    },
    boxes: {
        backgroundColor: '#ECEFF3',
        width: '13.5%',
        aspectRatio: '3/2',
        justifyContent: 'space-between',
        marginRight: '2vw',
        borderRadius: '25px',
        padding: '2vw'
    },
    box1: {
        width: '40vw',
        aspectRatio: '5/3',
        outline: '1.75vw solid #ECEFF3',
        borderRadius: '5px',
        padding: '2vw',
        margin: '35px 6vw 0 0'
    },
    box2: {
        width: '35vw',
        aspectRatio: '5/3',
        objectFit: 'initial',
        outline: '1.75vw solid #ECEFF3',
        borderRadius: '5px',
        padding: '2vw',
        marginTop: '35px'
    },
    num: {
        color: theme.palette.text.primary,
        fontSize: '1.5rem',
        margin: '0.5vw 0 0 0',
        fontWeight: 'bold'
    },
    head: {
        color: theme.palette.text.primary,
        fontSize: '1.2rem',
        margin: '0.5vw 0 0 0'
    },
    desc: {
        color: theme.palette.text.secondary,
        fontSize: '1rem',
        margin: '0.5vw 0 0 0'
    },
    title: {
        color: theme.palette.text.primary,
        fontSize: '1.3rem',
        margin: '0.5vw 0 0 0',
        fontWeight: 'bold'
    },
    val: {
        color: theme.palette.text.primary,
        fontSize: '1.6rem'
    }
  }));

  const Dashboard: React.FC = () => {
    const { classes } = useStyles();

    return (
      <div>
        <div className={classes.root}>
            <div className={classes.boxes}>
                <PeopleAltOutlinedIcon/>
                <Typography className={classes.num}>{'231'}</Typography>
                <Typography className={classes.head}>{'PIBOs active'}</Typography>
                <Typography className={classes.desc}>{'Total registered: 456'}</Typography>
            </div>
            <div className={classes.boxes}>
                <PeopleAltOutlinedIcon/>
                <Typography className={classes.num}>{'155'}</Typography>
                <Typography className={classes.head}>{'PWPs active'}</Typography>
                <Typography className={classes.desc}>{'Total registered: 257'}</Typography>
            </div>
            <div className={classes.boxes}>
                <ShareOutlinedIcon/>
                <Typography className={classes.num}>{'164'}</Typography>
                <Typography className={classes.head}>{'Monthly Matches'}</Typography>
                <Typography className={classes.desc}>{'Last Month: 119'}</Typography>
            </div>
            <div className={classes.boxes}>
                <DescriptionOutlinedIcon/>
                <Typography className={classes.num}>{'15'}</Typography>
                <Typography className={classes.head}>{'PIBO Bills'}</Typography>
                <Typography className={classes.desc}>{'Bills cleared yearly: 512'}</Typography>
            </div>
            <div className={classes.boxes} style={{marginRight:0}}>
                <DescriptionOutlinedIcon/>
                <Typography className={classes.num}>{'--'}</Typography>
                <Typography className={classes.head}>{'PWP Bills'}</Typography>
                <Typography className={classes.desc}>{'Bills cleared yearly: 315'}</Typography>
            </div>
        </div>
        <div className={classes.root} style={{padding:'4vh 0 5vh 0',margin:'0 0 5vh 0'}}>
            <div className={classes.box1}>
                <div>
                    <Typography className={classes.title} style={{margin:0}}>{'Quarterly Credit Exchange'}</Typography>
                    <Typography className={classes.val} style={{marginTop:5, marginBottom:5}}>{'32,454'}</Typography>
                 </div>
                 <CreditExch/>
            </div>
            <div className={classes.box2}>
            <Typography className={classes.title} style={{marginTop:5, marginBottom:30}}>{'Types of Plastic'}</Typography>
                <PlasticTypes/>
            </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;