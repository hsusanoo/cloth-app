import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // converting usd to cents
    const publishableKey = 'pk_test_DXo4jsaV7xBeClwcQHvFfZem00PJXawDvL';

    const onToken = token => {
        axios({
            url: 'payment', // append '/payment' to the current url
            method: 'post',
            data: {
                token,
                amount: priceForStripe,
            },
        })
            .then(response => alert('Payment Successful'))
            .catch(error => {
                console.log('Payment failed: ', error);
                alert(
                    'There was an issue with your payment, please make sure to use the provided card'
                );
            });
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
