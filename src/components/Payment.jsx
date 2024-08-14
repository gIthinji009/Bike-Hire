import React, { useState } from 'react';

// Creating dummy data for payment methods
const paymentMethods = [
  { id: 1, name: 'Visa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-kIqA-9wBxUDDSp5W_P3xPIGxnTJJst3iMA&s' },
  { id: 2, name: 'MasterCard', image: 'https://media.wired.com/photos/5926dea77034dc5f91bece36/master/w_1600%2Cc_limit/Mastercard3-1.jpg' },
  { id: 3, name: 'PayPal', image: 'https://facts.net/wp-content/uploads/2023/09/15-facts-about-paypal-1694962132.jpg' },
  { id: 4, name: 'Google Pay', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjjSw-Gs99PAXujWKSCi-cLFFCpVM79SPGg&s' }
];
// using the useState hook to manage the selected payment method ,booking duration, location, and card details
const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });
// updating the selected payment method with provided method value
  const handleSelect = (method) => {
    setSelectedMethod(method);
  };
// updating the card details with provided card details in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };
// Displaying an alert when booking is confirmed
  const handleBooking = () => {
    alert(`Booking confirmed for ${duration} hours at ${location} using ${selectedMethod}.`);
  };

  return (
    <div className="payment-options">
      <h2>Select Your Payment Method</h2>
      
      <div className="booking-details">
        <label>
          Duration (in hours):
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            placeholder="Enter duration"
          />
        </label>

        <label>
          Location:
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            placeholder="Enter location"
          />
        </label>
      </div>

      <div className="payment-grid">
        {/* Mapping over the paymentMethods array and rendering each payment method as a card */}
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`payment-card ${selectedMethod === method.name ? 'selected' : ''}`}
            onClick={() => handleSelect(method.name)}
          >
            <img src={method.image} alt={method.name} className="payment-image" />
            <p>{method.name}</p>
          </div>
        ))}
      </div>

      {/* If a payment method is selected, display the payment details form */}
      {selectedMethod && (
        <div className="payment-summary">
          <h3>Enter Payment Details</h3>
          {/* If the selected payment method is not PayPal or Google Pay, display the card details form */}
          {selectedMethod !== 'PayPal' && selectedMethod !== 'Google Pay' && (
            <>
              <label>
                Card Number:
                <input 
                  type="text" 
                  name="cardNumber" 
                  value={cardDetails.cardNumber} 
                  onChange={handleInputChange} 
                  placeholder="1234 5678 9012 3456"
                />
              </label>

              <label>
                Expiration Date:
                <input 
                  type="text" 
                  name="expirationDate" 
                  value={cardDetails.expirationDate} 
                  onChange={handleInputChange} 
                  placeholder="MM/YY"
                />
              </label>

              <label>
                CVV:
                <input 
                  type="text" 
                  name="cvv" 
                  value={cardDetails.cvv} 
                  onChange={handleInputChange} 
                  placeholder="123"
                />
              </label>
            </>
          )}
          {/* Display a proceed to payment button, which triggers the handleBooking function when clicked */}
          <button className="button" onClick={handleBooking}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;

