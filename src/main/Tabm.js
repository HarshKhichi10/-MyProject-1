import React,{Component } from 'react';
import {Tabs, Tab} from 'react-mdl';


class Tabm extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0};
    }

    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Starks</Tab>
                    <Tab>Lannisters</Tab>
                    <Tab>Targaryens</Tab>
                </Tabs>
                <section>
                    <div className="content">Content for the tab: {this.state.activeTab}</div>
                </section>
            </div>  
                  );
                }
            }

 export default Tabm;           