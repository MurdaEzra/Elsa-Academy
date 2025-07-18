import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Newsletters = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              School Newsletters
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Stay Updated with Elsa Academy News
            </p>
          </div>
          <div className="mt-10">
            <div className="prose prose-lg mx-auto">
              <p>
                Access our latest newsletters and stay informed about school
                events, achievements, and important announcements.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Newsletters;