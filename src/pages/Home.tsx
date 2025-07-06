import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion'; 
import axios from 'axios';
const Home = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative bg-black">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="School building" />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
         <motion.h1
                 initial={{ opacity: 0, y: -30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1 }}
                className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
                 >
                 Elsa Preparatory And Junior Academy
                </motion.h1>

          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Nurturing excellence and building a strong educational foundation
            for the future leaders of tomorrow.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link to="/admissions" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-yellow-500 hover:bg-yellow-600">
              Apply Now
            </Link>
            <Link to="/about" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gray-800">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* School Divisions */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our School Divisions
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Providing quality education across all age groups
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[{
            name: 'Pre-School',
            description: 'Foundation years for children ages 3-5, focusing on basic skills and social development.',
            image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          }, {
            name: 'Lower-School',
            description: 'Primary education for grades 1-3, building fundamental academic and life skills.',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          }, {
            name: 'Upper-School',
            description: 'Advanced primary education for grades 4-6, preparing students for junior secondary.',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          }, {
            name: 'JSS',
            description: 'Junior Secondary School for grades 7-9, offering comprehensive education and specialization.',
            image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          }].map(division => 
          <div
               key={division.name}
               className="flex flex-col rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
               >

                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={division.image} alt={division.name} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {division.name}
                    </h3>
                    <p className="mt-3 text-base text-gray-500">
                      {division.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link to="/admissions" className="text-yellow-600 hover:text-yellow-700 flex items-center">
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase">
              Why Choose Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Excellence in Education
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At Elsa Academy, we are committed to providing an enriching
              educational experience that prepares students for future success.
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-yellow-500">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Quality Curriculum
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our curriculum integrates the current country's education
                  system, ensuring students receive comprehensive and relevant
                  education.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-yellow-500">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Dedicated Faculty
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our experienced teachers are committed to nurturing each
                  student's potential and providing personalized attention.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-yellow-500">
                    <Award className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Proven Results
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our students consistently achieve excellent results and
                  proceed to prestigious high school institutions across the
                  country.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="bg-yellow-500">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            <span className="block">Ready to join our community?</span>
            <span className="block text-white">Apply for admission today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/admissions" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-gray-50">
                Apply Now
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>;
};
export default Home;