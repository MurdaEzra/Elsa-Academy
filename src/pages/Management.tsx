import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion'; 

const Management = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            {/* Animate the Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              Management
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
            >
              Messages from the Management
            </motion.p>
          </div>

          <div className="mt-10">
            <div className="prose prose-lg mx-auto">
              <p>
                We welcome all students and parents to our community not to live as friends but as one large family.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Management;