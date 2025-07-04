import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Elsa Academy
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Excellence in Education Since Establishment
            </p>
          </div>
          <div className="mt-10">
            <div className="prose prose-lg mx-auto">
              <p>
                Elsa Preparatory And Junior Academy (E.P.J.A) is committed to
                providing quality education that prepares students for success
                in their academic journey and beyond.
              </p>
              <p className="mt-4">
                Our institution integrates the current country's education
                system, ensuring our students receive comprehensive and relevant
                education that meets national standards while preparing them for
                future academic challenges.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default About;