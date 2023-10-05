import {
  Button,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomTextInput from '../../../../components/CustomTextInput';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import { PWPstatus } from '..';
import { PlasticCategory } from '../../../../commons/enums';
import { PIBOData } from '../../../../commons/types';

const useStyles = makeStyles()((theme) => ({
  root: {},
  backgroundDiv: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    minHeight: '45vh',
    position: 'absolute',
    top: '0px',
    zIndex: -1,
  },
  formContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '15px',
    height: '80vh',
    margin: '2rem',
    padding: '2rem',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: theme.typography.h6.fontSize,
    fontWeight: '300',
    marginBottom: '1rem',
    color: theme.palette.grey[500],
  },
  headerIcon: {
    fontSize: 'large',
    color: theme.palette.grey[500],
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: '2rem 2rem',
  },
  heading: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: '400',
    marginBottom: '0.5rem',
  },
  select: {
    backgroundColor: theme.palette.grey[200],
    minWidth: '18vw',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '2rem 2rem',
  },
  button: {
    'color': theme.palette.primary.main,
    'borderRadius': '10px',
    'padding': '0.5rem 1 rem',
    'fontSize': theme.typography.body1.fontSize,
    'fontWeight': '400',
    'cursor': 'pointer',
    'borderColor': theme.palette.primary.main,
    ':hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}));

const PWPDetailsPage: React.FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const data = useLoaderData();
  const pibo: PIBOData = data as PIBOData;

  return (
    <>
      <div className={classes.backgroundDiv} />
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.headerContainer}>
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowBackIosIcon className={classes.headerIcon} />
            </IconButton>
            {title}
          </div>
          <Form method='POST'>
            <div className={classes.form}>
              <CustomTextInput
                title='Company Name:'
                minWidth='18vw'
                placeholder='Enter Company Name'
                name={'companyName'}
                defaultValue={pibo.companyName ?? ''}
              />
              <CustomTextInput
                title='Email:'
                minWidth='18vw'
                placeholder='Enter Email'
                name={'email'}
                defaultValue={pibo.email ?? ''}
              />

              <CustomTextInput
                title='CPCB ID:'
                minWidth='18vw'
                placeholder='Enter ID'
                name={'cpcbID'}
                defaultValue={pibo.cpcbId ?? ''}
              />
            </div>
            <div className={classes.form}>
              <CustomTextInput
                title='State:'
                minWidth='18vw'
                placeholder='Enter State'
                name={'state'}
                defaultValue={pibo.state ?? ''}
              />
              <CustomTextInput
                title='Pincode:'
                minWidth='18vw'
                placeholder='Enter Pincode'
                name={'pincode'}
                defaultValue={pibo.pincode ?? ''}
              />
              <CustomTextInput
                title='Address:'
                minWidth='18vw'
                placeholder='Enter Address'
                name={'address'}
                multiline={true}
                rows={4}
                defaultValue={pibo.address ?? ''}
              />
            </div>
            <div className={classes.form}>
              <div>
                <Typography className={classes.heading}>{'Status:'}</Typography>
                <Select
                  name='status'
                  className={classes.select}
                  defaultValue={pibo.status ?? 'Y'}
                  type='text'
                >
                  <MenuItem value={'Y'}>{PWPstatus.Y}</MenuItem>
                  <MenuItem value={'P'}>{PWPstatus.P}</MenuItem>
                  <MenuItem value={'A'}>{PWPstatus.A}</MenuItem>
                </Select>
              </div>
              <div>
                <Typography className={classes.heading}>
                  {'Category:'}
                </Typography>
                <Select
                  name='category'
                  multiple
                  defaultValue={pibo.category ?? []}
                  className={classes.select}
                  type='array'
                >
                  {Object.keys(PlasticCategory).map((category) => (
                    <MenuItem key={category} value={category}>
                      {
                        PlasticCategory[
                          category as keyof typeof PlasticCategory
                        ]
                      }
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                variant='outlined'
                onClick={() => {
                  navigate(-1);
                }}
                className={classes.button}
                type='button'
              >
                {'Cancel'}
              </Button>
              <Button
                variant='outlined'
                className={classes.button}
                type='submit'
              >
                {'Save'}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default PWPDetailsPage;
