import React from 'react';
import { Button, Form, Input } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;

class AppMain extends React.Component {
    render() {
        console.log(this.props)
        if (this.props.companies.size === 0) {
            return null;
        }
        
        return (
            <section id="main">
                {[...this.props.companies.values()].map(company => (
                    company.Selected ? (
                        <Form>
                            <FormItem label="Company Name" >
                                <Input value={company.CompanyName} />
                            </FormItem>
                            <FormItem label="E-mail">
                                <Input value={company.CompanyEmail} />
                            </FormItem>
                            <FormItem label="Company Address">
                                <TextArea  value={company.CompanyAddress} />
                            </FormItem>
                            <FormItem label="Company Info" >
                                <TextArea value={company.CompanyInfo} />
                            </FormItem>
                            <FormItem>
                                <Button
                                type="primary"
                                onClick={() => this.props.onDeleteCompany(company.id)}>
                                    Delete
                                </Button>
                            </FormItem>
                        </Form>
                    ) : null
                ))}
            </section>
        );
    }
}

export default AppMain;