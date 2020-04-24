import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component {
    state = {  }

    renderTitleField(field) {
        <div>
            <input
            type="text"
            /// onChange ={field.input.onChange}
            /// onFocus ={field.input.onFocus}
            /// onBlur ={field.input.onBlur}
            /// Following is shorthand notation
            /// for the above syntax
                {...field.input}
            />
        </div>
    }

    render() { 
        return ( 
            <form >
                <Field name="title"
                        component = {this.renderTitleField}

                />
                <Field name="title"
                        component = {}

                />
                <Field name="title"
                        component = {}

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
