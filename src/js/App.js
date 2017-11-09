import React from 'react';
import image from '../images/expand-vertical-4.svg';

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

                    </div>
                </div>
            </div>
        );
    }
}
export default App;

