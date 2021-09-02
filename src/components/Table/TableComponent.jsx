/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {
  Table as Tables, TableCell, TableContainer, TableHead, TableRow, Paper, withStyles, TableBody,
  TableSortLabel, TablePagination, IconButton,
} from '@material-ui/core';
import { hoc } from '../HOC/index';

const useStyles = (theme) => ({
  table: {
    minWidth: 650,
  },
  header: {
    color: 'grey',
  },
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      backgroundColor: 'rgb(200,200,200)',
      cursor: 'pointer',
    },
  },
});

const Table = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    classes, data, column, order, orderBy, onSort, onSelect, count, page, actions,
    rowsPerPage, onChangePage,
  } = props;

  return (
    <TableContainer component={Paper}>
      <Tables className={classes.table}>
        <TableHead>
          <TableRow>
            {
              column.map((Data) => (
                <TableCell
                  className={classes.header}
                  align={Data.align}
                  sortDirection={orderBy === Data.label ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === Data.label}
                    direction={orderBy === Data.label ? order : 'asc'}
                    onClick={onSort(Data.label)}
                  >
                    {Data.label}
                  </TableSortLabel>
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          )
            .map((data) => (
              <TableRow
                key={data.id}
                className={classes.root}
                onMouseEnter={onSelect(data)}
              >
                {column.map(({ field, align, format }) => (
                  <TableCell onClick={(event) => onSelect(event, element.name)} align={align} component="th" scope="row" order={order} orderBy={orderBy}>
                    {format !== undefined
                      ? format(data[field])
                      : data[field]}
                  </TableCell>
                ))}
                {actions.map(({ icon, handler }) => (
                  <IconButton onClick={handler(data)} className={classes.action}>
                    {icon}
                  </IconButton>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Tables>
      {
        count ? (
          <TablePagination
            component="div"
            rowsPerPageOptions={0}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage}
          />
        ) : ''

      }
    </TableContainer>
  );
};
Table.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  column: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  onSort: PropTypes.func,
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  // onChangeRowsPerPage: PropTypes.func.isRequired,
};
Table.defaultProps = {
  order: 'asc',
  orderBy: '',
  onSort: () => {},
};
export default withStyles(useStyles)(Table);
