import React from 'react';
import CollectionPreview from '../../components/collection-preview/collectionpreview.component';
import SHOP_DATA from './shoppage.data';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = { collections: SHOP_DATA };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} /> //here otherCollectionProps are title and items from "collections"
        ))}
      </div>
    );
  }
}

export default ShopPage;
