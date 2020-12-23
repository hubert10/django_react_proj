import React, { Component } from 'react';
import CustomersService from './CustomersService';

const customersService = new CustomersService();

class StudentCreateUpdate extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          customersService.getCustomer(params.pk).then((c)=>{
            this.refs.name.value = c.name;
            this.refs.document.value = c.document;
            this.refs.email.value = c.email;
            this.refs.phone.value = c.phone;
            this.refs.address.value = c.address;
          })
        }
      }

      handleCreate(){
        customersService.createCustomer(
          {
            "name": this.refs.name.value,
            "document": this.refs.document.value,
            "email": this.refs.email.value,
            "phone": this.refs.phone.value,
            "address": this.refs.address.value,
        }
        ).then((result)=>{
          alert("Student created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        customersService.updateCustomer(
          {
            "pk": pk,
            "name": this.refs.name.value,
            "document": this.refs.document.value,
            "email": this.refs.email.value,
            "phone": this.refs.phone.value,
            "address": this.refs.address.value,
        }
        ).then((result)=>{
          console.log(result);
          alert("Student updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name:</label>
              <input className="form-control"  type="text" ref='name' />

            <label>
              Document:</label>
              <input className="form-control" type="text" ref='lastName'/>

            <label>
              Email:</label>
              <input className="form-control" type="text" ref='email' />

            <label>
              Phone:</label>
              <input className="form-control" type="text" ref='phone' />

            <label>
              Address:</label>
              <input className="form-control" type="text" ref='address' />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
      }
}

export default StudentCreateUpdate;