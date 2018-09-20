import React from 'react';
import { Button, Form, Input, message } from 'antd';

const FormItem = Form.Item;

class WrappedAppMain extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onEditCompany({
                    id: values.companyId,
                    CompanyName: values.companyName,
                    CompanyAddress: values.companyAddress,
                    CompanyEmail: values.companyEmail,
                    CompanyInfo: values.companyInfo,
                    Selected: false,
                })
                message.success('Company details updated successfully!');
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
                                    Delete Company
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Edit Company
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