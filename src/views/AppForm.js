import React from 'react';
import { Button, Form, Input } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class WrappedAppForm extends React.Component {
    constructor(props) {
        super(props);
        const value = props.value || {};
    }
    
    handleSubmit = (e) => {
        console.log('handle', this.props);
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onAddCompany({
                    CompanyName: values.CompanyName,
                    CompanyAddress: 'Kharadi, Nagar Road, Pune',
                    CompanyEmail: 'contact@abc.com',
                    CompanyInfo: 'This Service Based Company'
                })
                
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const companyNameError = isFieldTouched('companyName') && getFieldError('companyName');
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem 
                    label="Company Name"
                    validateStatus={companyNameError ? 'error' : ''}
                    help={companyNameError || ''}
                >
                {getFieldDecorator('companyName', {
                        rules: [{ required: true, message: 'Please input your company Name!' }],
                    })(
                        <Input />
                )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Add
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const AppForm = Form.create()(WrappedAppForm);


export default AppForm;