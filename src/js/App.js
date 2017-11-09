import React from 'react';
import image from '../images/expand-vertical-4.svg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                      <Collapsible title="Overview">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione numquam magnam quo maiores ipsa. Eius.</p>
                      </Collapsible>
                      <Collapsible title="Features">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione numquam magnam quo maiores ipsa. Eius.</p>
                      </Collapsible>
                      <Collapsible title="Software">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione numquam magnam quo maiores ipsa. Eius.</p>
                      </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;

