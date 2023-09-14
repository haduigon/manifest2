import GooglePayButton from '@google-pay/button-react';

export const GooglePayB: React.FC = () => {
  return (
    <div className='mt-2'>
      <GooglePayButton
        environment='TEST'
        buttonSizeMode='fill'
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: '1234566',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '344535656',
            merchantName: 'test',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '80',
            currencyCode: 'USD',
            countryCode: 'UA',
          }
        }}
        onLoadPaymentData={paymentData => {
          console.log(paymentData.paymentMethodData);

        }}
      />
    </div>
  )
}