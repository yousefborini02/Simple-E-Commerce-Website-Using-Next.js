

import React from 'react';
import { ShoppingBag, Truck, Headphones, ThumbsUp } from 'lucide-react';
 import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Our Store</h1>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
                         <Image  width={200} height={5000} alt='' src='data:image/jpeg;base64,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'/>

            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Our Story</div>
              <p className="mt-2 text-gray-600">
                Founded in 2010, our e-commerce store has been dedicated to providing high-quality products and exceptional customer service. We believe in the power of online shopping to connect people with the items they love, no matter where they are in the world.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<ShoppingBag className="h-12 w-12 text-indigo-500" />}
            title="Wide Selection"
            description="Browse through thousands of products across various categories."
          />
          <FeatureCard 
            icon={<Truck className="h-12 w-12 text-indigo-500" />}
            title="Fast Shipping"
            description="Get your orders delivered quickly and efficiently to your doorstep."
          />
          <FeatureCard 
            icon={<Headphones className="h-12 w-12 text-indigo-500" />}
            title="24/7 Support"
            description="Our customer service team is always ready to assist you."
          />
          <FeatureCard 
            icon={<ThumbsUp className="h-12 w-12 text-indigo-500" />}
            title="Satisfaction Guaranteed"
            description="We stand behind the quality of our products with a 100% satisfaction guarantee."
          />
        </div>

        <div className="mt-16 bg-indigo-700 rounded-lg text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To provide our customers with a seamless online shopping experience, offering a curated selection of high-quality products at competitive prices, all while maintaining exceptional customer service and fostering long-lasting relationships with our clients.
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      {icon}
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}