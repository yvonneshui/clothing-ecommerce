import React from 'react'
import { withRouter } from 'react-router-dom'

import "./MenuItem.styles.scss"

function MenuItem({title, imageUrl, size, history, linkURL, match}) {
	console.log(history);
	return (
	<div 
	className={`${size} menu-item`} 
	onClick={()=>history.push(`${match.url}${linkURL}`)}
	>
		<div className="background-image" 	
		style={{
		backgroundImage:`url(${imageUrl})`
		}}
		/>
		<div className="content">
			<h1 className="title">
				{title}
			</h1>
			<span className='subtitle'>
				Shop now
			</span>
		</div>
	</div>
	)
}

export default withRouter(MenuItem)