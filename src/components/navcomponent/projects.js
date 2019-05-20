import React, { Component } from 'react'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Tab, Tabs, Card, CardTitle, CardActions, Button, CardText } from 'react-mdl';
import axios from 'axios';


class projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: 0,
      projects: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/projects')
      .then(response => {
        console.log(response);
        this.setState({ projects: response.data })
      })
      .catch(error => {
        console.log(error)
      });
  }
  changeHandler = (tabId) => {
    this.setState({ activeTab: tabId })



  }

  render() {
    const { projects, activeTab } = this.state

    return (

      <div className="demo-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={this.changeHandler} ripple>
          <Tab>React</Tab>
          <Tab>Php</Tab>
          <Tab>Angular</Tab>
          <Tab>Static Template</Tab>
        </Tabs>
        <section>
          <div className="content">
            {
              projects.map(project => {

                if (activeTab === project.groupid) {
                  return (
                    <Card key={project.projectid} shadow={0} style={{ width: '320px', height: '320px', margin: 'auto' }}>

                      <CardTitle expand style={{ color: 'rgb(108, 100, 232)', background: 'url(' + `${project.img}` + ') no-repeat', backgroundSize: 'cover' }}></CardTitle>
                      <CardText>
                        <span>{project.title}</span>
                        <p>{project.description}</p>
                      </CardText>
                      <CardActions border>
                        <Button colored>Live Demo</Button>
                      </CardActions>
                    </Card>
                  )
                }

              })


            }
          </div>
        </section>
      </div>

    )
  }
}

export default projects
