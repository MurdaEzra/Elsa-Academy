import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Admissions = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Admissions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Join Our Academic Community
            </p>
          </div>
          <div className="mt-10">
            <div className="prose prose-lg mx-auto">
              <p>
                We shall conduct Interviews for new students from play group(BC) to Grade 8.</p>
               <p> Requirements:
              </p>
              <ul>
                <li>1.Original birth certificate/ photocopy.</li>
                <li>2.Former school file and assessment report.</li>
                <li>3.Interview Fee of Ksh.500.</li>
                <li>4.Ready to pay School Fees.</li>
                <li>5.Upon admission some 2025 term 1 Fee should be remitted and BEGINNERS CLASS 
                  should remit all 2025 term 1 Fee because of limited vacancies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Admissions;