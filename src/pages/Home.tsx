import React from "react";
import {
  Phone,
  Calendar,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Home: React.FC = () => {
  return (
    <div className="w-full text-gray-800">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-50">
        <div className="max-w-xl">
          <p className="text-blue-600 font-medium">Doctor of Osteopathic Medicine (D.O.)</p>
          <h2 className="text-4xl font-bold mt-2">
            Your Trusted Family Medicine Doctor
          </h2>

          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            <Star size={18} />
            <span className="text-gray-700">4.9/5 from over 120 reviews</span>
          </div>

          <p className="mt-4 text-gray-600">
            With over 15 years of experience, Dr. Carter is dedicated to providing
            compassionate, patient-centered care for individuals of all ages.
          </p>

          <button className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Book an appointment <ArrowRight size={16} />
          </button>
        </div>

        <div className="mt-10 md:mt-0">
          <div className="w-80 h-96 bg-gray-200 rounded-xl shadow-lg flex items-center justify-center">
            Hero Image
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Why choose me?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Personalized care",
            "Comprehensive services",
            "Experienced & certified",
            "Compassionate approach",
            "Convenient telemedicine",
          ].map((item, i) => (
            <div key={i} className="p-5 border rounded-lg shadow-sm">
              <CheckCircle className="text-green-500 mb-2" />
              <h3 className="font-semibold">{item}</h3>
              <p className="text-sm text-gray-600 mt-2">
                High-quality patient focused care tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Quality care options</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Chronic disease management",
            "Pediatric care",
            "Geriatric care",
          ].map((service, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow">
              <div className="h-32 bg-gray-200 rounded mb-4 flex items-center justify-center">
                Service Image
              </div>
              <h3 className="font-semibold">{service}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Tailored medical care and support for better health outcomes.
              </p>
              <button className="mt-4 text-blue-600 font-medium">
                Schedule a check-up →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Appointment */}
      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-6">Make an appointment</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <form className="space-y-3">
            <input className="w-full border p-2 rounded" placeholder="Full name" />
            <input className="w-full border p-2 rounded" placeholder="Email address" />
            <input className="w-full border p-2 rounded" placeholder="Phone number" />
            <input type="date" className="w-full border p-2 rounded" />

            <select className="w-full border p-2 rounded">
              <option>Select Service</option>
              <option>General Checkup</option>
              <option>Pediatric Care</option>
              <option>Geriatric Care</option>
            </select>

            <textarea className="w-full border p-2 rounded" placeholder="Message"></textarea>

            <button className="bg-blue-600 text-white px-5 py-2 rounded">
              Submit
            </button>
          </form>

          <div>
            <h3 className="font-semibold mb-2">Clinic Timing</h3>
            <p className="text-sm text-gray-600">
              Mon-Wed: 8 AM - 7 PM <br />
              Thu: 9 AM - 11 AM & 12 PM - 7 PM <br />
              Fri-Sat: 8 AM - 7 PM <br />
              Sunday: Closed
            </p>

            <p className="mt-6 text-sm text-gray-600">
              Address: 544 Honey Creek Rd., West Des Moines, IA 50265
            </p>

            <p className="text-sm text-gray-600 mt-2">
              Contact: (91) 125 879 786
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;