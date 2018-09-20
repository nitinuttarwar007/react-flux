import React from 'react';
import { Button, Form, Input, message } from 'antd';
const FormItem = Form.Item;

class WrappedAppForm extends React.Component {
    constructor(props) {
        super(props);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onAddCompany({
                    CompanyName: values.companyName,
                    CompanyAddress: values.companyAddress,
                    CompanyEmail: values.companyEmail,
                    CompanyInfo: values.companyInfo,
                    Selected: false,
                })
                message.success('New company details successfully added!');
            }

        });
    }

    render() {
        const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
        const companyNameError = isFieldTouched('companyName') && getFieldError('companyName');
        const companyEmailError = isFieldTouched('companyEmail') && getFieldError('companyEmail');
        const companyAddressError = isFieldTouched('companyAddress') && getFieldError('companyAddess');
        const companyInfoError = isFieldTouched('companyInfo') && getFieldError('companyInfo');

        return (
            <Form onSubmit={this.handleSubmit}>
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
                <FormItem 
                    label="Company Email"
                    validateStatus={companyEmailError ? 'error' : ''}
                    help={companyEmailError || ''}
                >
                {getFieldDecorator('companyEmail', {
                        rules: [{
                            type: 'email', 
                            required: true, 
                            message: 'The input is not valid E-mail!' 
                        }],
                    })(
                    <Input />
                )}
                </FormItem>
                <FormItem 
                    label="Company Address"
                    validateStatus={companyAddressError ? 'error' : ''}
                    help={companyAddressError || ''}
                >
                {getFieldDecorator('companyAddress', {
                        rules: [{ 
                            required: true, 
                            message: 'Please input your company address!' 
                        }],
                    })(
                        <Input/>
                    )
                }
                </FormItem>
                <FormItem 
                    label="Company Info"
                    validateStatus={companyInfoError ? 'error' : ''}
                    help={companyInfoError || ''}
                >
                {getFieldDecorator('companyInfo', {
                        rules: [{ 
                            required: true, 
                            message: 'Please input your company Information!' 
                        }],
                    })(
                        <Input/>
                    )
                }
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Add Company
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const AppForm = Form.create()(WrappedAppForm);


export default AppForm;