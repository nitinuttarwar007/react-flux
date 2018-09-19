import React from 'react';
import { Button, Form, Input } from 'antd';

const FormItem = Form.Item;

class WrappedAppMain extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        console.log('handle', this.props);
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.onEditCompany({
                    id: values.companyId,
                    CompanyName: values.companyName,
                    CompanyAddress: values.companyAddress,
                    CompanyEmail: values.companyEmail,
                    CompanyInfo: values.companyInfo,
                    Selected: true,
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        if (this.props.companies.size === 0) {
            return null;
        }
        
        return (
            <div>
                {[...this.props.companies.values()].map(company => (
                    company.Selected ? (
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem label="Company Name" >
                            {getFieldDecorator('companyName', {
                                initialValue: company.CompanyName,
                                rules: [{ required: true, message: 'CompanyName is required!' }],
                            })(
                                <Input />
                            )}
                            </FormItem>
                            <FormItem label="Company Email">
                                {getFieldDecorator('companyEmail', {
                                    initialValue: company.CompanyEmail,
                                    rules: [{
                                        type: 'email', 
                                        required: true, 
                                        message: 'The input is not valid E-mail!' 
                                    }],
                                })(
                                <Input />
                            )}
                            </FormItem>
                            <FormItem label="Company Address">
                                {getFieldDecorator('companyAddress', {
                                    initialValue: company.CompanyAddress,
                                    rules: [{ 
                                        required: true, 
                                        message: 'Please input your company address!' 
                                    }],
                                })(
                                    <Input/>
                                )
                            }
                            </FormItem>
                            <FormItem label="Company Info">
                                {getFieldDecorator('companyInfo', {
                                    initialValue: company.CompanyInfo,
                                    rules: [{ 
                                        required: true, 
                                        message: 'Please input your company Information!' 
                                    }],
                                })(
                                    <Input/>
                                )
                            }
                            </FormItem>
                            <FormItem label="Company Id" style={{display:'none'}}>
                                {getFieldDecorator('companyId', {
                                    initialValue: company.id,
                                    rules: [{ 
                                        required: true, 
                                        message: 'Please input your company Id!' 
                                    }],
                                })(
                                    <Input style={{display:'none'}}/>
                                )
                            }
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    onClick={() => this.props.onDeleteCompany(company.id)}
                                >
                                    Delete
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Edit
                                </Button>
                            </FormItem>
                        </Form>
                    ) : null
                ))}
            </div>
        );
    }
}

const AppMain = Form.create()(WrappedAppMain);

export default AppMain;