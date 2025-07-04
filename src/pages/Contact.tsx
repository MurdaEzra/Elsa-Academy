import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';
const Contact = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Get in Touch with Elsa Academy
            </p>
          </div>
          <div className="mt-10">
            <div className="max-w-lg mx-auto">
              <div className="space-y-8">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-500" />
                  <span className="ml-4 text-gray-500">
                    P.O Box 1730, Ogembo, Kisii, Kenya
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-500" />
                  <a href="tel:+254728135200" className="ml-4 text-gray-500 hover:text-gray-600">
                    +254 728 135 200
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-yellow-500" />
                  <a href="mailto:ezranyamwange2@gmail.com" className="ml-4 text-gray-500 hover:text-gray-600">
                    ezranyamwange2@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Contact;