import React from 'react';
import Directory from '../../components/directory/directory';

import './homepage.style.scss';

class HomePage extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            let element = document.querySelector('.homepage');
            element.classList.add('fade-in');
        }, 100);
    }
    
    render() { 
        return ( 
            <section className="homepage">
                <Directory />
            </section>
        );
    }
}
 
export default HomePage;