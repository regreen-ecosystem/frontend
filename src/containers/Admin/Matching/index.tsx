import React, { useEffect } from 'react';
import {
  ColumnDetails,
  ColumnType,
} from '../../../components/CustomTable/types/CustomTableProps';
import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import { Box, Button, Modal, Typography } from '@mui/material';
import CustomTable from '../../../components/CustomTable';
import { makeStyles } from 'tss-react/mui';
import CustomTextInput from '../../../components/CustomTextInput';

const useStyles = makeStyles()((theme) => ({
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '40%',
    backgroundColor: theme.palette.background.paper,
    transform: 'translate(-50%, -50%)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const columnDefs: Array<ColumnDetails> = [
  {
    label: 'Company Name',
    type: ColumnType.NAME,
    minWidth: 80,
    field: 'pwp.details.name',
    searchable: true,
    field2: 'pwp.details.email',
  },
  {
    label: 'Contact No',
    type: ColumnType.TEXT,
    minWidth: 80,
    field: 'pwp.details.phone_number',
    searchable: true,
  },
  // {
  //   label: 'Category',
  //   type: ColumnType.DETAILS,
  //   minWidth: 80,
  //   field: 'plastic_type',
  //   field2: 'type',
  // },
  {
    label: 'Credits',
    type: ColumnType.NUMBER,
    minWidth: 80,
    field: 'credits',
    sortable: true,
    defaultSort: true,
  },
  {
    label: 'Cost',
    type: ColumnType.NUMBER,
    minWidth: 80,
    field: 'cost',
    sortable: true,
    defaultSort: false,
  },
];

const Matching: React.FC = () => {
  const nav = useNavigate();
  const data = (useLoaderData() as any).data;
  const request = (useLoaderData() as any).request;
  const { classes } = useStyles();
  const submitRef = React.useRef<HTMLButtonElement>(null);

  const [remaining, setRemaining] = React.useState<number>(request.credits);
  const [cost, setCost] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Typography
        variant='h5'
        style={{ marginLeft: '6%', fontWeight: 400, marginTop: '4vh' }}
      >
        {'Pending'}
      </Typography>
      <Form method='POST'>
        <CustomTable
          title='Matches'
          search={true}
          columns={columnDefs}
          data={data}
          select={true}
          onSelect={(event, checked, id) => {
            if (checked) {
              const asset = data.find((row: any) => row.id === id);
              const allotedCredits = Math.min(remaining, asset.credits);
              setCost(
                (cost * (request.credits - remaining) +
                  allotedCredits * asset.cost) /
                  (request.credits - remaining + allotedCredits)
              );
              setRemaining(remaining - allotedCredits);
            } else {
              const formData =
                event.currentTarget?.form &&
                new FormData(event.currentTarget.form);
              let newRemaining = request.credits;
              let newCost = 0;
              if (formData) {
                formData.getAll('id').forEach((id) => {
                  const asset = data.find((row: any) => row.id === Number(id));
                  const allotedCredits = Math.min(newRemaining, asset.credits);
                  newRemaining -= allotedCredits;
                  newCost += allotedCredits * asset.cost;
                });
              }
              setRemaining(newRemaining);
              if (newRemaining === request.credits) setCost(0);
              else setCost(newCost / (request.credits - newRemaining));
            }
          }}
        >
          <Typography variant='body1'>
            {'Remaining Credits: ' + remaining}
          </Typography>
          <Button
            variant='contained'
            style={{ borderRadius: '10px' }}
            type='button'
            onClick={() => {
              nav(-1);
            }}
          >
            <Typography variant='body1'>{'Cancel'}</Typography>
          </Button>
          <Button
            variant='contained'
            style={{ borderRadius: '10px' }}
            type='button'
            onClick={() => {
              setOpen(true);
            }}
            disabled={remaining === request.credits}
          >
            <Typography variant='body1'>{'Done'}</Typography>
          </Button>
          <Button hidden type='submit' ref={submitRef} />
          <Modal open={open} onClose={handleClose}>
            <Form>
              <div className={classes.modalBox}>
                <Typography id='modal-modal-title' variant='h6' component='h2'>
                  Please Enter Cost per Credit
                </Typography>
                <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                  {`Buting Cost per Credit: ${cost}`}
                </Typography>

                <CustomTextInput
                  title='Enter Cost per Credit'
                  minWidth='100px'
                  placeholder='Enter Cost'
                  name='sellingCost'
                  type='number'
                  defaultValue={String(cost)}
                />
                <Button
                  variant='contained'
                  style={{ borderRadius: '10px' }}
                  type='button'
                  onClick={(e) => {
                    const formData =
                      e.currentTarget?.form &&
                      new FormData(e.currentTarget.form);
                    if (!submitRef?.current?.form) {
                      setOpen(false);
                      return;
                    }
                    submitRef.current.form.addEventListener(
                      'formdata',
                      (event: FormDataEvent) => {
                        event.formData.append(
                          'sellingCost',
                          formData?.get('sellingCost') as string
                        );
                      }
                    );
                    submitRef.current.click();
                  }}
                >
                  <Typography variant='body1'>{'Done'}</Typography>
                </Button>
              </div>
            </Form>
          </Modal>
        </CustomTable>
      </Form>
    </>
  );
};

export default Matching;
