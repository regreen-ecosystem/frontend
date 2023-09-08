import React, { useMemo } from 'react';
import CustomTableProps from './types/CustomTableProps';
import { makeStyles } from 'tss-react/mui';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';
import { ReactComponent as User } from '../../assets/images/user.svg';

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: '10px 4%',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.primary.main,
    padding: '1rem',
    borderRadius: '0.5rem',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  headerActions: {
    gap: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {},
  tableHeader: {
    'color': theme.palette.text.primary,
    'fontSize': '0.8rem',
    'textTransform': 'uppercase',
    '& th': {
      fontWeight: 'normal',
      borderBottom: `1px solid ${theme.palette.primary.light}`,
    },
  },
  tablePagination: {},
  tableBody: {
    '& .MuiTableCell-root': {
      borderBottom: '0px !important',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
    },
  },
  tableContainer: {
    // borderBottom: '1px solid rgba(224, 224, 224, 1)',
  },
}));

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  title,
  search,
  filter,
  headerContent,
  select,
}) => {
  const { classes } = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = React.useState('');

  const searchableColumns = columns?.filter((column) => column.searchable);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filterData = useMemo(() => {
    setPage(0);
    return data.filter((row) => {
      return searchableColumns.some((value) => {
        return String(row[value.field]).toLowerCase().includes(searchValue);
      });
    });
  }, [searchValue]);

  const visibleData = useMemo(() => {
    return filterData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [filterData, page, rowsPerPage]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h6' style={{ fontWeight: 400 }}>
          {data.length + ' ' + title}
        </Typography>
        <div className={classes.headerActions}>
          {search ? (
            <SearchBar search={searchValue} setSearch={setSearchValue} />
          ) : null}
          {headerContent}
          {filter ? (
            <FilterButton
              onClick={() => {
                console.log('OMG');
              }}
            />
          ) : null}
        </div>
      </div>
      <div className={classes.body}>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                {columns?.map((column) => (
                  <th
                    key={column.label}
                    style={{
                      minWidth: column.minWidth,
                    }}
                  >
                    {column.label}
                  </th>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {visibleData.map((row, index) => {
                return (
                  <TableRow hover={select} key={index + row.companyName}>
                    {columns?.map((column) => {
                      return (
                        <TableCell key={column.field}>
                          {column.field === 'companyName' ? (
                            <>
                              <User />
                              {row[column.field]}
                            </>
                          ) : (
                            row[column.field] + index
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component='div'
          count={filterData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={classes.tablePagination}
          showFirstButton
          showLastButton
          labelRowsPerPage='Entries per page:'
        />
      </div>
    </div>
  );
};

export default CustomTable;
