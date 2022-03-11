import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function StripeButton({totalPrice}) {
	const priceForStripe = totalPrice * 100
	const publishableKey='pk_test_51KcBeVKxbX6iYBRr3hiWaFWh6wojwP7w4dfu1FH8HtCBvEQ1qJdnKOpHGqaWZ2ZGiKWMMGMiO1cjnszDpv0WdSSf00nUEKvOZM'
	
	function onToken (token){
		console.log(token);
		alert('Payment Successful')
	}

	return (
		<StripeCheckout 
		label='Pay Now' 
		name='clothing-app' 
		billingAddress 
		shippingAddress 
		image='https://svgshare.com/i/CUz.svg'
		description={`Your total is ${totalPrice}`}
		amount={priceForStripe}
		panelLabel='Pay Now'
		token={onToken}
		stripeKey={publishableKey}/>
	)
}

export default StripeButton