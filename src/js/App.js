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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga officiis, expedita possimus necessitatibus itaque quod perferendis voluptatem, odit incidunt voluptatibus iste unde cum eum, repudiandae consectetur in recusandae veritatis reprehenderit at harum nostrum natus ratione nam! Amet illum quo corporis asperiores dolorum nostrum mollitia, similique ab dolor tempora consequatur, veniam labore quas aut nesciunt iure saepe sunt fugiat quam minus! Possimus ipsam dolore pariatur facere quas? Dolore, in nobis? Sit repellendus porro illo nam sapiente similique impedit molestias obcaecati, illum quas soluta, atque maiores officia explicabo, fugiat sunt voluptates fugit nulla neque. Iste ipsa expedita, explicabo ipsum eum doloribus corporis.</p>
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

