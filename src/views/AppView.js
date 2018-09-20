import React from 'react';
import { Button, Layout, Menu, Icon } from 'antd';
import AppMain from './AppMain';
import AppForm from './AppForm';
const { Header, Content, Footer, Sider } = Layout;
class AppView extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showAddForm: false,
      }
  }

  ShowAddForm = () => {
    this.setState({
      showAddForm: true
    });
  }

  handleClick = (e) => {
    this.setState({
      showAddForm: false
    })
    this.props.onToggleCompany(e.key)
  }

  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible>
            <p style={{ textAlign:'center', color: '#08c', margin: '10px' }}>
              Companies
            </p>
              <Menu
                  onClick={this.handleClick}
                  theme="dark"
                  defaultSelectedKeys={["id-1"]}
                  mode="inline"
                >
              {[...this.props.companies.values()].map(company => (
                <Menu.Item key={company.id}>
                  <Icon type="team" />
                  <span>{company.CompanyName}</span>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ textAlign: 'center', background: '#fff', padding: 0, marginBottom: '15px' }}>
              <h1>Flux Example</h1>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div style={{marginBottom: '24px'}}>
                  <Button type="primary" onClick={this.ShowAddForm}>Add New Company</Button>
                </div>
                  {this.state.showAddForm ? (
                  <AppForm {...this.props}/>) : (
                  <AppMain {...this.props} />) }
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
}
  
export default AppView;
