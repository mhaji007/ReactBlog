import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component {
    renderField(field) {
       return(
        <div className="form-group">
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
            {field.meta.error}
        </div>
       );
    }

    renderTagsField(){

    }

    render() { 
        return ( 
            <form >
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
        errors.title="Enter some categories please!";
    }
    if(!values.content){
        errors.title="Enter some content please!";
    }

    // If errors is empty, the form is fine to submit
    // If errors has *any* properties, redux forms assumes form is invalid
    return errors;
} 

// Contains configuration options
export default reduxForm(
    {   validate,
        form:'PostsNewForm'
    }
) (PostsNew);
