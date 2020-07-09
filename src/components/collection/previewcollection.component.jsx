import React from 'react';
import CollectionItem from './collection-item.component';
import './previewcollection.style.scss';

const PreviewCollection = ({title,items})=>(
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items.filter((item,id) => id < 4 ).map(({id,...otherItemProps})=>(
                <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
            
        </div>
    </div>
)

export default PreviewCollection;