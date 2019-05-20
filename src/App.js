import React, { Component } from 'react';
import {Layout,Content} from 'react-mdl'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'



class App extends Component {
  render() {
    return (
      
      
        <Layout style={{ background:'#f6f6f6' }}>
        <Header/>
        <Content className='container bg-muted mt-4'>
           <Main/>
        </Content>
       <Footer/>
        </Layout>
      
    );
  }
}

export default App;
