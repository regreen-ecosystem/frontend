import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import {
  IconButton,
  MenuItem,
  Select,
  Typography,
  Button,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomTextInput from '../../../../components/CustomTextInput';
import { PlasticCategory } from '../../../../commons/enums';
import { PendingStatus } from '../../Pending';

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
    flexDirection: 'column',
    // justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin: '2rem 2rem',
    gap: '2em',
    alignContent: 'center',
    width: '100%',
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

const RequestDetailsPage: React.FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const data = (useLoaderData() as any).data;

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
              <div>
                <Typography className={classes.heading}>{'Status:'}</Typography>
                <Select
                  name='status'
                  className={classes.select}
                  defaultValue={data.status ?? 'R'}
                  type='text'
                  readOnly={true}
                >
                  {Object.keys(PendingStatus).map((status) => (
                    <MenuItem key={status} value={status}>
                      {PendingStatus[status as keyof typeof PendingStatus]}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              {Array.isArray(data.plastic_type.split(',')) ? (
                data.plastic_type
                  .split(',')
                  .map((category: string, index: number) => {
                    return (
                      <CustomTextInput
                        title={
                          PlasticCategory[
                            category as keyof typeof PlasticCategory
                          ]
                        }
                        key={category}
                        minWidth='18vw'
                        placeholder='Enter Amount'
                        name={category}
                        defaultValue={data.credits[index] ?? '0'}
                        type='number'
                        disabled={data.status === 'I' || data.status === 'C'}
                      />
                    );
                  })
              ) : (
                <CustomTextInput
                  title={
                    PlasticCategory[
                      data.plastic_type as keyof typeof PlasticCategory
                    ]
                  }
                  key={data.plastic_type}
                  minWidth='18vw'
                  placeholder='Enter Amount'
                  name={data.plastic_type}
                  defaultValue={data.total_credits ?? '0'}
                  type='number'
                  disabled={data.status === 'I' || data.status === 'C'}
                />
              )}
              {data.status === 'I' ? (
                <CustomTextInput
                  title='Enter Cost'
                  minWidth='18vw'
                  placeholder='Enter Price'
                  name='selling_price'
                  defaultValue={data.selling_price ?? '0'}
                  type='number'
                />
              ) : null}
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
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default RequestDetailsPage;
