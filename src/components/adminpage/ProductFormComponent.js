import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './ProductForm.css';
import { Form, Header, Segment, Dropdown, Grid } from 'semantic-ui-react';

const categories = [
  { key: 's', text: 'Shirt', value: 'Shirts' },
  { key: 'j', text: 'Jacket', value: 'Jackets' },
  { key: 'b', text: 'Bottoms', value: 'Bottoms' },
  { key: 'f', text: 'Footwear', value: 'Footwear' }
];

export default class ProductFormComponent extends Component {
  static defaultProps = {
    onSubmit: () => {},
    onDelete: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      formValues: {}
    };
  }

  render() {
    console.log(this.props);
    let products = [];
    if (this.props.clothingItems) {
      products = this.props.clothingItems.map(item => {
        return {
          key: item.id,
          text: item.name,
          value: item.id,
          image: item.imageUrl
        };
      });
    }

    return (
      <div>
        <div className="admin-panel">
          <Dropdown
            className="dropdown-menu"
            placeholder="Select Product"
            fluid
            search
            selection
            options={products}
            onChange={this._selectProductClick}
            value={this.state.formValues.id || ''}
          />
          <Header className="create-new-item" as="h1">
            UPDATE PRODUCTS
          </Header>
        </div>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment inverted style={{ borderRadius: 0 }}>
              <Form inverted onSubmit={this._submitProductClick}>
                <ToastContainer
                  position="top-right"
                  type="default"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  pauseOnHover
                />
                <Form.Input
                  label="Product Name"
                  name="name"
                  placeholder="Product Name"
                  value={this.state.formValues.name}
                  onChange={this._handleChangeFormValue}
                />
                <Form.Input
                  label="Description"
                  name="description"
                  placeholder="Description"
                  value={this.state.formValues.description}
                  onChange={this._handleChangeFormValue}
                />
                <Form.Select
                  label="Category"
                  options={categories}
                  name="category"
                  placeholder="Category"
                  value={this.state.formValues.category}
                  onChange={this._handleChangeFormValue}
                />
                <Form.Input
                  label="Image Url"
                  name="imageUrl"
                  placeholder="Image Url"
                  value={this.state.formValues.imageUrl}
                  onChange={this._handleChangeFormValue}
                />
                <Form.Input
                  label="Price"
                  name="price"
                  placeholder="Price"
                  value={this.state.formValues.price}
                  onChange={this._handleChangeFormValue}
                />
                <Form.Checkbox
                  label="Featured Item"
                  name="isFeatured"
                  checked={this.state.formValues.isFeatured === true}
                  onChange={this._handleChangeFormValue}
                />
                <div className="update-buttons">
                  <Form.Button
                    positive
                    className="submit-new-item"
                    color="grey">
                    Submit Item
                  </Form.Button>
                  <Form.Button
                    className="delete-item"
                    color="red"
                    onClick={this._deleteProductClick}>
                    Delete Item
                    <ToastContainer
                      position="top-right"
                      type="default"
                      autoClose={2000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      pauseOnHover
                    />
                  </Form.Button>
                  <Form.Button onClick={this._clearFormClick}>
                    Clear Form
                  </Form.Button>
                </div>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  _submitProductClick = (event, data) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    toast('Submit Successful!', {
      className: 'dark-toast',
      progressClassName: 'transparent-progress'
    });
    onSubmit(
      {
        ...this.state.formValues,
        is_featured: this.state.formValues.isFeatured,
        image_URL: this.state.formValues.imageUrl,
        price: parseFloat(this.state.formValues.price)
      },
      this.props.authenticatedUser.id
    ).then(() => {
      this.setState({
        formValues: {
          name: '',
          category: '',
          description: '',
          price: '',
          imageUrl: ''
        }
      });
    });
  };

  _selectProductClick = (event, data) => {
    event.preventDefault();
    let selection = this.props.clothingItems.find(itemObj => {
      return itemObj.id === data.value;
    });
    this.setState({ formValues: selection });
  };

  _handleChangeFormValue = (event, { name, value, checked }) => {
    this.setState(prevState => {
      return {
        ...prevState,
        formValues: {
          ...prevState.formValues,
          [name]: value || checked
        }
      };
    });
  };

  _deleteProductClick = event => {
    event.preventDefault();
    const { onDelete } = this.props;
    const id = this.state.formValues.id;
    toast('Delete Successful!', {
      className: 'delete-toast',
      progressClassName: 'transparent-progress'
    });
    onDelete({ id }).then(() => {
      this.setState({
        formValues: {
          name: '',
          category: '',
          description: '',
          price: '',
          imageUrl: ''
        }
      });
    });
  };

  _clearFormClick = event => {
    event.preventDefault();
    this.setState({
      formValues: {
        name: '',
        category: '',
        description: '',
        price: '',
        imageUrl: ''
      }
    });
  };
}
