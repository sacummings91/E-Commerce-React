import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import './ProductForm.css';
import { Form, Header, Segment, Dropdown } from 'semantic-ui-react';

const categories = [
  { key: 's', text: 'Shirt', value: 'Shirts' },
  { key: 'j', text: 'Jacket', value: 'Jackets' },
  { key: 'b', text: 'Bottoms', value: 'Botoms' },
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
    const products = this.props.clothingItems.map(item => {
      return {
        key: item.nid,
        text: item.name,
        value: item.nid,
        image: item.imageUrl
      };
    });

    return (
      <div>
        <div className="admin-selector">
          <Dropdown
            className="item-selector"
            placeholder="Select Product"
            fluid
            selection
            options={products}
            onChange={this._selectProductClick}
            value={this.state.formValues.nid || ''}
          />
          <Header className="create-new-item" as="h1">
            UPDATE PRODUCTS
          </Header>
        </div>
        <Segment inverted>
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
            <Form.Group>
              <Form.Input
                label="Product Name"
                name="name"
                placeholder="Product Name"
                value={this.state.formValues.name}
                onChange={this._handleChangeFormValue}
                width={6}
              />
              <Form.Select
                label="category"
                options={categories}
                name="category"
                placeholder="Category"
                value={this.state.formValues.category}
                onChange={this._handleChangeFormValue}
                width={4}
              />
              <Form.Input
                label="Image Url"
                name="imageUrl"
                placeholder="Image Url"
                value={this.state.formValues.imageUrl}
                onChange={this._handleChangeFormValue}
                width={6}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label="description"
                name="description"
                placeholder="description"
                value={this.state.formValues.description}
                onChange={this._handleChangeFormValue}
                width={14}
              />
              <Form.Input
                label="price"
                name="price"
                placeholder="price"
                value={this.state.formValues.price}
                onChange={this._handleChangeFormValue}
                width={2}
              />
            </Form.Group>
            <Form.Checkbox
              label="Featured Item"
              name="isFeatured"
              checked={this.state.formValues.isFeatured === true}
              onChange={this._handleChangeFormValue}
            />
            <div className="update-buttons">
              <Form.Button className="submit-new-item" color="grey">
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
            </div>
          </Form>
        </Segment>
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
    onSubmit({
      ...this.state.formValues,
      price: parseFloat(this.state.formValues.price)
    }).then(() => {
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
      return itemObj.nid === data.value;
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
}
