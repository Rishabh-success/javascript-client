import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import { Button, withStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { AddDialog, EditDialog, DeleteDialog } from './components';
import { Table } from '../../components';
import callApi from '../../libs/utils/api';
import { IsLoadingHOC } from '../../components/HOC';

const useStyles = (theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  dialog: {
    textAlign: 'right',
  },
});

const asend = 'asc';
const dsend = 'desc';
class TraineeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      orderBy: 'createdBy',
      order: asend,
      // eslint-disable-next-line react/no-unused-state
      sortedOrder: -1,
      EditOpen: false,
      RemoveOpen: false,
      skip: 0,
      limit: 20,
      editData: {},
      deleteData: {},
      page: 0,
      rowsPerPage: 10,
      database: [],
    };
  }

  componentDidMount() {
    const { setLoading } = this.props;
    setLoading(true);
    this.renderData();
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    const { open } = this.state;
    this.setState({ open: false });
    return open;
  };

  handleSubmit = () => {
    this.setState({
      open: false,
    });
  }

  handleSelcet = () => {

  }

 handleSort = (field) => () => {
   const { order, orderBy } = this.state;
   let tabOrder = asend;
   let sequence = -1;
   if (orderBy === field && order === asend) {
     tabOrder = dsend;
     sequence = 1;
   }
   this.setState({
     orderBy: field,
     order: tabOrder,
     // eslint-disable-next-line react/no-unused-state
     sortedOrder: sequence,
   });
 };

  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage, skip: newPage * 20 }, () => {
      this.renderData();
    });
  };

  // eslint-disable-next-line no-unused-vars
  handleRemoveDialogOpen = (element) => () => {
    this.setState({
      RemoveOpen: true,
      deleteData: element,
    });
  };

  handleRemoveClose = () => {
    this.setState({
      RemoveOpen: false,
    });
  };

  handleRemove = (value) => {
    const { deleteData } = this.state;
    this.setState({
      RemoveOpen: false,
    });
    // eslint-disable-next-line no-console
    console.log('Deleted Item ', deleteData);
    const { createdAt } = deleteData;
    const isAfter = moment(createdAt).isSameOrAfter('2019-02-14T18:15:11.778Z');
    const message = isAfter
      ? 'This is a success message!'
      : 'This is an error message!';
    const status = isAfter ? 'success' : 'error';
    value(message, status);
  };

  // eslint-disable-next-line no-unused-vars
  handleEditDialogOpen = (element) => (event) => {
    this.setState({
      EditOpen: true,
      editData: element,
    });
  };

  handleEditClose = () => {
    this.setState({
      EditOpen: false,
    });
  };

  handleEdit = (name, email, value) => {
    this.setState({
      EditOpen: false,
    });
    // eslint-disable-next-line no-console
    console.log('Edited Item ', { name, email });
    const message = 'This is a success message';
    const status = 'success';
    value(message, status);
  };

  handlesnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      // snackbarOpen: false,
    });
  };

  renderData = async () => {
    const {
      limit, skip,
    } = this.state;
    const { setLoading } = this.props;
    await callApi(`/trainee/?limit=${limit}&skip=${skip}
    `,
    'GET')
      .then((resp) => {
        setTimeout(() => {
          setLoading(false);
          this.setState({ database: resp.data.data });
        }, 200);
        console.log(resp);
      })
      .catch((err) => {
        setLoading(false);
        console.log('there is an errror: ', err);
      });
  }

  render() {
    const {
      open, order, orderBy, page, rowsPerPage, EditOpen, RemoveOpen, editData, database,
    } = this.state;
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <div className={classes.dialog}>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              ADD TRAINEELIST
            </Button>
            <AddDialog open={open} onClose={this.handleClose} handleSubmit={this.handleSubmit} />
          </div>
          &nbsp;
          &nbsp;
          <EditDialog
            Editopen={EditOpen}
            handleEditClose={this.handleEditClose}
            handleEdit={this.handleEdit}
            data={editData}
          />
          <br />
          <DeleteDialog
            openRemove={RemoveOpen}
            onClose={this.handleRemoveClose}
            remove={this.handleRemove}
          />
          <Table
            id="id"
            data={database}
            column={
              [
                {
                  field: 'name',
                  label: 'Name',
                },
                {
                  field: 'email',
                  label: 'Email Address',
                  format: (value) => value && value.toUpperCase(),
                },
                {
                  field: 'createdAt',
                  label: 'Date',
                  align: 'right',
                  format: this.getDateFormat,
                },
              ]
            }
            actions={[
              {
                icon: <EditIcon />,
                handler: this.handleEditDialogOpen,

              },
              {
                icon: <DeleteIcon />,
                handler: this.handleRemoveDialogOpen,
              },
            ]}
            onSort={this.handleSort}
            orderBy={orderBy}
            order={order}
            onSelect={this.handleSelcet}
            count={database.length}
            page={page}
            onChangePage={this.handleChangePage}
            rowsPerPage={rowsPerPage}
          />
        </div>
      </>
    );
  }
}
TraineeList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  setLoading: PropTypes.func.isRequired,
};
export default withStyles(useStyles)(IsLoadingHOC(TraineeList));