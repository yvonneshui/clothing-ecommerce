import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menu-item/MenuItem';
import './Directory.styles.scss'

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class Directory extends React.Component {
constructor(props) {
	super(props);

	this.state = {
		sections:[
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
      ]
	};
}

	render() {
		return 			(
		<div className="directory-menu">
			{this.state.sections.map(({title,imageUrl,id,size})=>(
					<MenuItem key={id} title={title} imageUrl={imageUrl}/>
				))}
		</div>)
;
	}
}

Directory.propTypes = propTypes;
Directory.defaultProps = defaultProps;
// #endregion

export default Directory;