import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Italic } from 'lucide-react';
const FeeStructure = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Fee Structure
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Academic Year 2024-2025
            </p>
          </div>
          <div className="mt-10">
            <div className="prose prose-lg mx-auto">
              <p>
                We thank you parents for your financial and resource support throughout the year. You are always consistently and concerned for your beloved 
                school.May God bless you. You are encouraged to start paying Fees as early as possible for proper readiness of the academic year.
                Thank You.
              </p>
            
            </div>
            {/* Fee Structure Table */}
            <div className="overflow-x-auto mt-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">School</th>
                    <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Term 1</th>
                    <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Term 2</th>
                    <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Term 3</th>
                    <th className="px-6 py-3 border-b text-left text-sm font-semibold text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-6 py-4 border-b">Pre-School</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 30,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-b">Lower School</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 30,000</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-b">Middle School(Day)</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 10,000</td>
                    <td className="px-6 py-4 border-b">Ksh 30,000</td>
                   </tr>
                   <tr>
                    <td className="px-6 py-4 border-b">Middle School(Boarder)</td>
                    <td className="px-6 py-4 border-b">Ksh 30,000</td>
                    <td className="px-6 py-4 border-b">Ksh 30,000</td>
                    <td className="px-6 py-4 border-b"></td>
                    <td className="px-6 py-4 border-b">Ksh 60,000</td>
                   </tr>
                   <tr>
                    <td className="px-6 py-4 border-b">JSS</td>
                    <td className="px-6 py-4 border-b">Ksh 30,000</td>
                    <td className="px-6 py-4 border-b">Ksh 30,000</td>
                    <td className="px-6 py-4 border-b"></td>
                    <td className="px-6 py-4 border-b">Ksh 60,000</td>
                   </tr>
                </tbody>
              </table>
              
            </div>
          </div>
          <li style={{ marginTop: '1rem' }}>TRANSPORT PER TERM(OTHER ROUTES)   = Ksh. 5000</li>
              <li>TRANSPORT PER TERM(KENYERERE ROUTES)   = Ksh. 6500</li>
              <li>LUNCH PROGRAMME PER TERM = Ksh. 4500</li>

              <h2 style={{fontWeight: 'bold', marginTop: '1rem'}}>SCHOOL ACCOUNTS</h2>
        <li>ABSA KISII BRANCH
          <ul>PAYBILL: 807124 </ul>
          <ul>ACC NO: CHILD'S NAME/CLASS</ul>
        </li>
        <li style ={{marginTop :'1rem'}}>KCB WEST
          <ul>1181733308</ul>
        </li>
        <li style={{ marginTop: '1rem' }}>KISII MAIN
          <ul>1116797275</ul>
        </li>
        <li style={{ marginTop: '1rem' }}>WAKENYA PAMOJA
          <ul>6433 020 00017</ul>
        </li>

        </div>
        
      </main>
      <Footer />
    </div>;
};
export default FeeStructure;