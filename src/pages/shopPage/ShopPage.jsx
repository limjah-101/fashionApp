import React from 'react';
import shopData from './shopData';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';
import './shopPage.styles.scss';


class ShopPage extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: shopData
        }
    }
    componentDidMount() {
        setTimeout(() => {
            let element = document.querySelector('.shop-page');
            element.classList.add('fade-in');
        }, 100);
    }


    render() { 
        // console.log(this.state.collections)
        const { collections } = this.state;
        return ( 
            <section className="shop-page">
                { collections.map( ({ id, ...collectionsProps }) => {
                    return (
                        <CollectionPreview  
                            key={ id } 
                            { ...collectionsProps }
                        />
                    )
                } )}
            </section>
         );
    }
}
 
export default ShopPage;