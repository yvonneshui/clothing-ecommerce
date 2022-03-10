import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from "reselect";
import {selectCollectionsForPreview} from '../../redux/shop/shop-selector'

import PreviewCollection from '../preview-collection/PreviewCollection'

import './CollectionOverview.styles.scss'

function CollectionOverview({collections}) {
	return (
		<div className="collections-overview">
			{collections
			.map(({id, ...otherCollectionProps})=>(
			<PreviewCollection key={id} {...otherCollectionProps}/>
			))}
		</div>
	)
}
const mapStateToProps=createStructuredSelector({
		collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)

