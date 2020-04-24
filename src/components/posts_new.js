import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';


class PostsNew extends Component {
    renderField(field) {

        const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`

       return(
        <div className= {className}>
            <label> {field.label}</label>
            <input
            className="form-control"
            type="text"
            /// onChange ={field.input.onChange}
            /// onFocus ={field.input.onFocus}
            /// onBlur ={field.input.onBlur}
            /// Following is shorthand notation
            /// for the above syntax
                {...field.input}
            />
            <div className="text-help">

            {field.meta.touched ? field.meta.error:''}
            </div>
        </div>
       );
    }


    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        
        });
    }

    render() { 
        const {handleSubmit} = this.props
        return ( 
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                        label="Title"
                        name="title"
                        component = {this.renderField}

                />
                <Field
                        label="Categories"
                        name="categories"
                        component = {this.renderField}

                />
                <Field
                        label="Post Content"
                        name="content"
                        component = {this.renderField}

                />

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger"> Cancel</Link>
            </form>
         );
    }
}

// This function will be automatically called
// at certain points in form's lifecycle
// most notably whenever the user submits the form 
// this function accepts a single argument that 
// contains all the different values enterd into the form

function validate (values) {
   
   //console.log(values) -> {title:'asdf', categories: 'adf', content: 'frew'}
    const errors = {}

    // Validate the inputs from 'values
    if(!values.title){
        errors.title="Enter a title!";
    }
    if(!values.categories){
        errors.categories="Enter some categories please!";
    }
    if(!values.content){
        errors.content="Enter some content please!";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux forms assumes form is invalid
    return errors;
} 

// Contains configuration options
export default reduxForm(
    {   validate,
        form:'PostsNewForm'
    }) (
    connect(null,{createPost})(PostsNew)
    );
