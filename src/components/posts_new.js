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
                        label="Tags"
                        name="tags"
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
 
export default reduxForm(
    {
        form:'PostsNewForm'
    }
) (PostsNew);
