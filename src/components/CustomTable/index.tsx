import React, { useMemo } from 'react';
import CustomTableProps from './types/CustomTableProps';
import { makeStyles } from 'tss-react/mui';
import {
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';
import SearchBar from './SearchBar';
import CustomCell from './CustomCell';
import CustomButton from '../CustomButton';
import TuneIcon from '@mui/icons-material/Tune';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: '10px 4%',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.common.white,
    padding: '1rem',
    borderRadius: '0.5rem',
    boxShadow: '0px 20px 80px 0px rgba(35, 35, 35, 0.15)',
    marginTop: '1rem',
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
    'textTransform': 'uppercase',
    'th , span': {
      'fontWeight': '500',
      'paddingBottom': '0.2rem',
      'text-align': 'center !important',
      'color': theme.palette.grey[500] + ' !important',
      'fontSize': '0.8rem',
    },
    'svg': {
      color: theme.palette.grey[500] + ' !important',
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
  checkboxContainer: {
    'color': theme.palette.primary.dark,
    '&.Mui-checked': {
      color: theme.palette.primary.dark,
    },
  },
  title: {
    fontWeight: 300,
    color: theme.palette.grey[600],
    fontSize: theme.typography.h6.fontSize,
  },
  icon: {
    fontSize: 'large',
    color: theme.palette.grey[500],
  },
  menuIcon: {
    fontSize: 'large',
    marginRight: '0.5rem',
    color: theme.palette.text.primary,
  },
  menuText: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
}));

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string | Date },
  b: { [key in Key]: number | string | Date }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  data,
  title,
  search,
  filter,
  children,
  select,
  statusEnum,
  editMenu,
  deleteMenu,
}) => {
  const { classes } = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchValue, setSearchValue] = React.useState('');

  const searchableColumns = columns.filter((column) => column.searchable);
  const filterableColumns = columns.filter((column) => column.filterable);
  const defaultSortIndex = columns.indexOf(
    columns.find((column) => column.defaultSort) ?? columns[0]
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<number>(defaultSortIndex);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRequestSort = (property: number) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
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
    return stableSort(
      filterData,
      getComparator(order, columns[orderBy].field)
    ).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [filterData, page, rowsPerPage, order, orderBy]);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title}>
          {data.length + ' ' + title}
        </Typography>
        <div className={classes.headerActions}>
          {search ? (
            <SearchBar search={searchValue} setSearch={setSearchValue} />
          ) : null}
          {children ?? null}
          {filter ? (
            <CustomButton
              onClick={() => {
                console.log('Filtered');
              }}
              minWidth='100px'
              title='Filter'
            >
              <TuneIcon className={classes.icon} />
            </CustomButton>
          ) : null}
        </div>
      </div>
      <div className={classes.body}>
        <TableContainer className={classes.tableContainer}>
          <Table stickyHeader>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                {select ? (
                  <TableCell
                    padding='checkbox'
                    style={{ backgroundColor: 'transparent' }}
                  ></TableCell>
                ) : null}
                {columns?.map((column, index) => (
                  <TableCell
                    key={column.label}
                    style={{
                      minWidth: column.minWidth,
                    }}
                  >
                    {column.sortable ? (
                      <TableSortLabel
                        active={orderBy === index}
                        direction={orderBy === index ? order : 'asc'}
                        onClick={() => {
                          handleRequestSort(index);
                        }}
                      >
                        {column.label}
                      </TableSortLabel>
                    ) : (
                      column.label
                    )}
                  </TableCell>
                ))}
                {editMenu || deleteMenu ? (
                  <TableCell
                    padding='checkbox'
                    style={{ backgroundColor: 'transparent' }}
                  ></TableCell>
                ) : null}
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {visibleData.map((row, index) => {
                return (
                  <TableRow hover={select} key={`${row}-${index.toString()}`}>
                    {select ? (
                      <TableCell padding='checkbox'>
                        <Checkbox className={classes.checkboxContainer} />
                      </TableCell>
                    ) : null}

                    {columns.map((column) => {
                      return (
                        <CustomCell
                          row={row}
                          column={column}
                          key={column.field}
                          statusEnum={statusEnum}
                        />
                      );
                    })}

                    {editMenu || deleteMenu ? (
                      <TableCell padding='checkbox'>
                        <IconButton onClick={handleMenuOpen}>
                          <MoreHorizIcon />
                        </IconButton>
                      </TableCell>
                    ) : null}
                  </TableRow>
                );
              })}
              {emptyRows > 0 ? (
                // add emptyRows number of rows here
                <TableRow style={{ height: 54 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              ) : null}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 30]}
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
        <Menu open={open} anchorEl={anchorEl} onClose={handleMenuClose}>
          {editMenu ? (
            <MenuItem onClick={handleMenuClose}>
              <EditOutlinedIcon className={classes.menuIcon} />
              <Typography className={classes.menuText}>{'Edit'}</Typography>
            </MenuItem>
          ) : null}
          {deleteMenu ? (
            <MenuItem onClick={handleMenuClose}>
              <DeleteOutlinedIcon className={classes.menuIcon} />
              <Typography className={classes.menuText}>{'Delete'}</Typography>
            </MenuItem>
          ) : null}
        </Menu>
      </div>
    </div>
  );
};

export default CustomTable;
