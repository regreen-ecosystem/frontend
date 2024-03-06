import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import { IconButton, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CustomTextInput from '../../../../components/CustomTextInput';
import { PlasticCategory } from '../../../../commons/enums';

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
  textRow: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    margin: '1rem 0rem',
    gap: '1rem',
  },
}));

const CreditDetailsPage: React.FC<{ title: string }> = ({ title }) => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const data = useLoaderData() as any;

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
              {/* <div>
                <Typography className={classes.heading}>{'Status:'}</Typography>
                <Select
                  name='status'
                  className={classes.select}
                  defaultValue={data.status ?? 'R'}
                  type='text'
                >
                  {Object.keys(PendingStatus).map((status) => (
                    <MenuItem key={status} value={status}>
                      {PendingStatus[status as keyof typeof PendingStatus]}
                    </MenuItem>
                  ))}
                </Select>
              </div> */}
              {data.category.map((category: string, index: number) => {
                return (
                  <div key={category} className={classes.textRow}>
                    <CustomTextInput
                      title={
                        PlasticCategory[
                          category as keyof typeof PlasticCategory
                        ]
                      }
                      minWidth='18vw'
                      placeholder='Enter Amount'
                      name={category}
                      defaultValue={data.credits[index] ?? '0'}
                      type='number'
                    />
                    <CustomTextInput
                      title={
                        PlasticCategory[
                          category as keyof typeof PlasticCategory
                        ] + ' Cost'
                      }
                      minWidth='18vw'
                      placeholder='Enter Cost'
                      name={`cost${category}`}
                      defaultValue={data.cost[index] ?? '0'}
                      type='number'
                    />
                  </div>
                );
              })}
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

export default CreditDetailsPage;
