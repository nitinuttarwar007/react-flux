import React from 'react';
import { Button, Form, Input, Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const FormItem = Form.Item;
const { TextArea } = Input;

function AppView(props) {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible>
            <p style={{ textAlign:'center', color: '#08c', margin: '10px' }}>
              Companies
            </p>
            {[...props.companies.values()].reverse().map(company => (
              <Menu
                  onClick={() => props.onToggleCompany(company.id)}
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys= {'[' + company.id + ']' }
                >
                <Menu.Item key={company.id}>
                  <Icon type="team" />
                  <span>{company.CompanyName}</span>
                </Menu.Item>
              </Menu>
            ))}
          </Sider>
          <Layout>
            <Header style={{ textAlign: 'center', background: '#fff', padding: 0, marginBottom: '15px' }}>
              <h1>Flux Example</h1>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <AppMain {...props} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Created with Ant Design
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
  
  function AppMain(props) {
    if (props.companies.size === 0) {
      return null;
    }
    return (
      <section id="main">
          {[...props.companies.values()].reverse().map(company => (
            company.Selected ? (
              <Form>
                <FormItem
                  label="Company Name"
                >
                  <Input 
                    value={company.CompanyName}
                   />
                </FormItem>
                <FormItem
                  label="E-mail"
                >
                  <Input 
                    value={company.CompanyEmail}
                   />
                </FormItem>
                <FormItem
                  label="Company Address"
                >
                  <TextArea 
                    value={company.CompanyAddress}
                   />
                </FormItem>
                <FormItem
                  label="Company Info"
                >
                  <TextArea 
                    value={company.CompanyInfo}
                   />
                </FormItem>
                <FormItem>
                    <Button
                      type="primary"
                      onClick={() => props.onDeleteCompany(company.id)}>
                        Delete
                    </Button>
                </FormItem>
              </Form>
            ) : null
          ))}
      </section>
    );
  }
export default AppView;
