import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Wrapper,
  FormWrapper,
  Form,
  InputWrapper,
  Title,
  Submit,
  TopBar,
  Heading
} from "./Form-Style";
import {Input, Label, Alert} from 'reactstrap';
// nav?
import axiosWithAuth from "../../utils/axiosWithAuth";
import {createProduct} from "../../actions/ProductActions";

const initialValues = {
    name: "",
    description: "",
    price: ""
};

const AddForm = (props) => {
    const [newProduct, setNewProduct] = useState(initialValues);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [warning, setWarning] = useState(false);
    const [valid, setValid] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const onDismiss = () => {
        setSuccess(false);
        setWarning(false);
    }

        console.log('product form values are:', newProduct);

        //to grab username-----
        // useEffect(() => {
        //     axiosWithAuth()
        //       .get("https://african-marketplace-back-end.herokuapp.com/users")
        //       .then(res => {
        //         console.log(res.data);
        //         setCurrentUser(res.data);
        //       })
        //       .catch(err => console.log(err.messsage));
        //   }, []);

        const handleChanges = (event) => {
            event.preventDefault();
            setNewProduct({
              ...newProduct,
              [e.target.name]: e.target.value
            });
            if(event.target.value === ''){
              event.target.classList.remove('is-valid')
            }else{
              event.target.classList.add('is-valid')
              setInvalid(false);
            }
            console.log('target is valid:', e.target.value);
          };

          // handle submit

          const handleSubmit = (event) => {
            event.preventDefault();
            const isValid = validateProduct(newProduct);
            (console.log('Uploading Product...', newProduct));
            if(isValid){
              setSuccessAlert(true);
              setWarning(false);
              setTimeout(function(){ 
                props.history.push("/market");
              }, 3000);
              props.createProduct(newProduct);
            }else{
              setWarning(true);
            }
          };

          // form validation

          const validateProduct = (props) =>{
            console.log('Register Validation Props:', props);
            if(props.name === '' && props.descriptions === '' && props.price === ''){
              setError(`Fields Cannot Be Blank`);
              setValid(false);
              return false;
            }
            if(props.name === ''){
              setError(`Product Name Cannot Be Blank`);
              return false
            }
            if(props.description === ''){
              setError(`Description Cannot Be Blank`);
              return false
            }
            if(props.price === ''){
              setError(`Price Cannot Be Blank`);
              return false
            }
            return true;
          }
          console.log(newProduct);


    return (
        <div>
            <Wrapper>
                <Heading>
                    <Title>POST NEW PRODUCTS</Title>
                </Heading>

                <FormWrapper>
                    <TopBar>
                    <Title>Fill out Form</Title>
                    </TopBar>

                    <Form onSubmit={handleSubmit}>
                    <div>
                    <InputWrapper>
                    <Label>Product:</Label>
                    <Input 
                    type="text"
                    name="name"
                    placeholder="name of product"
                    value={newProduct.product}
                    onChange={handleChanges}
                    valid={valid}
                    invalid={invalid}
                    />
                    </InputWrapper>

                    <InputWrapper>
                    <Label>Description: </Label>
                    <Input
                    type="text"
                    name="description"
                    placeholder="description of product"
                    value={newProduct.description}
                    onChange={handleChanges}
                    valid={valid}
                    />
                    </InputWrapper>

                    <InputWrapper>
                    <Label>Price: </Label>
                    <Input
                    type="text"
                    name="price"
                    placeholder="price"
                    value={newProduct.price}
                    onChange={handleChanges}
                    valid={valid}
                    />
                    </InputWrapper>
                    </div>
                    </Form>
                </FormWrapper>
                </Wrapper>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
    productData: state.productsReducer.productData,
    isFetching: state.productsReducer.isFetching,
    error: state.productsReducer.error
    }
  }

  const mapDispatchToProps = {createProduct};

  export default connect(mapStateToProps, mapDispatchToProps)(AddForm);