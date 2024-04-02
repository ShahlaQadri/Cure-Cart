import React from 'react'

export default function Checkoutpage() {
  return (
    <div>
      <body class="bg-gray-100">
    <div class="max-w-3xl mx-auto px-4 py-8">
        <h1 class="text-2xl font-semibold mb-4">Checkout</h1>
        <div class="bg-white shadow-md rounded-lg px-8 py-6">
            
            <h2 class="text-lg font-semibold mb-4">Billing Information</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div class="mb-4">
                    <label for="address" class="block text-gray-700 font-semibold mb-2">Address</label>
                    <input type="text" id="address" name="address" placeholder="123 Street, City" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div class="mb-4">
                    <label for="zipcode" class="block text-gray-700 font-semibold mb-2">ZIP Code</label>
                    <input type="text" id="zipcode" name="zipcode" placeholder="12345" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
            </div>
            
            <h2 class="text-lg font-semibold mb-4 mt-8">Payment Information</h2>
            <div class="grid grid-cols-1 gap-4">
                <div class="mb-4">
                    <label for="card" class="block text-gray-700 font-semibold mb-2">Card Number</label>
                    <input type="text" id="card" name="card" placeholder="1234 5678 9012 3456" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div class="mb-4">
                    <label for="expiry" class="block text-gray-700 font-semibold mb-2">Expiration Date</label>
                    <input type="text" id="expiry" name="expiry" placeholder="MM/YY" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div class="mb-4">
                    <label for="cvv" class="block text-gray-700 font-semibold mb-2">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="123" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
            </div>
        
            <div class="mt-8">
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300">Place Order</button>
            </div>
        </div>
    </div>
</body>
    </div>
  )
}
