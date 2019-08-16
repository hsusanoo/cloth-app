import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // converting usd to cents
    const publishableKey = 'pk_test_DXo4jsaV7xBeClwcQHvFfZem00PJXawDvL';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return (
        <StripeCheckout
            name={'ClothApp Ltd.'}
            label={'Pay now'}
            token={onToken}
            stripeKey={publishableKey}
            billingAddress
            shippingAddress
            image={
                'https://upload.wikimedia.org/wikipedia/commons/2/26/Kingdom_Hearts-Crown_Symbol.svg'
            }
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel={'Payment'}
        />
    );
};

export default StripeCheckoutButton;
