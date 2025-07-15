import React from 'react';
import honeyImg from '../../../assets/honey.png'; // Optional: Add again if needed

const FeaturedProdInfo = ({ onClose }) => {
  return (
    <section className="px-6 py-10 bg-white text-left">
      {/* Close Button */}
      <div className="text-right">
        <button
          onClick={onClose}
          className="text-sm text-red-600 border border-red-600 px-4 py-1 rounded hover:bg-red-600 hover:text-white transition-all"
        >
          Close
        </button>
      </div>

      {/* Product and Farmer Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-6 border p-6 rounded-xl shadow-md">
        {/* Product Details */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold underline">Product Details</h2>
          <p><strong>Name:</strong> Organic Honey</p>
          <p><strong>Price:</strong> ₹0.25 per ml</p>
          <p><strong>Available:</strong> 50 packs</p>
          <p><strong>Harvest Date:</strong> July 2, 2025</p>
          <p><strong>Category:</strong> Syrups</p>
          <p><strong>Description:</strong> Sweet, juicy honey good for health, mix with warm water daily or in sweets.</p>
          <p><strong>Shelf Life:</strong> 3 Months</p>
          <p><strong>Benefits:</strong> Rich in antioxidants, supports heart health, boosts immunity.</p>
          <p><strong>Storage Instructions:</strong> Refrigerated or in shelf dry place</p>
        </div>

        {/* Farmer & Farm Details */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold underline">Farmer & Farm Details</h2>
          <p><strong>Farmer Name:</strong> Ramesh Pawar</p>
          <p><strong>Farm Name:</strong> GreenLeaf Farms</p>
          <p><strong>Location:</strong> Sangli, Maharashtra</p>
          <p><strong>Verified:</strong> ✅ Verified Seller</p>
          <p><strong>Listed Since:</strong> March 2025</p>
          <p><strong>Orders Fulfilled:</strong> 120+</p>
          <p><strong>Farming Practices:</strong> “We grow using traditional organic techniques, compost fertilizers, and natural pest repellents.”</p>
          <p><strong>Farmer Story:</strong> “I started organic farming after seeing the harm chemicals did to my soil. Today, I grow food I’m proud to feed my own children — and yours.”</p>
        </div>
      </div>

      {/* Health Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 p-6 border rounded-xl shadow-md">
        {/* Left: Benefits Text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-green-800 italic">Health Benefits of Honey</h2>
          <ul className="list-decimal pl-5 space-y-1">
            <li><strong>Rich in Vitamin C</strong> – Boosts immunity and helps fight infections.</li>
            <li><strong>High in Antioxidants</strong> – Protects cells from oxidative stress.</li>
            <li><strong>Supports Digestion</strong> – Contains actinidin enzyme and dietary fiber.</li>
            <li><strong>Improves Skin Health</strong> – Promotes collagen production and reduces dryness.</li>
            <li><strong>Good for Heart Health</strong> – Helps manage blood pressure and cholesterol.</li>
            <li><strong>Aids Sleep</strong> – Contains serotonin, which may improve sleep quality.</li>
            <li><strong>Low in Calories</strong> – Ideal for weight-conscious and diabetic-friendly diets.</li>
          </ul>
        </div>

        {/* Right: Image */}
        <img 
          src={honeyImg} 
          alt="Honey Dripping" 
          className="rounded-xl w-full max-h-[400px] object-cover"
        />
      </div>
    </section>
  );
};

export default FeaturedProdInfo;
