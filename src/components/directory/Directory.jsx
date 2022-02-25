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
          id: 1,
          linkURL:'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkURL:'jackets'

        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkURL:'sneakers'

        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkURL:'womens'

        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkURL:'mens'

        }
      ]
	};
}

	render() {
		return 			(
		<div className="directory-menu">
			{this.state.sections.map(({id,...otherSectionProps})=>(
					<MenuItem key={id} {...otherSectionProps}/>
				))}
		</div>)
;
	}
}

Directory.propTypes = propTypes;
Directory.defaultProps = defaultProps;
// #endregion

export default Directory;