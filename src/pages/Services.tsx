import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const Services: React.FC = () => {
  return (
    <div className="w-full px-8 py-16 bg-gray-50 text-gray-800">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Quality Care Services</h1>
        <p className="text-gray-600 mt-2">
          Comprehensive healthcare solutions for all age groups
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Service 1 */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            Service Image
          </div>

          <h2 className="text-xl font-semibold mb-2">
            Chronic Disease Management
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Tailored treatment plans for managing conditions like diabetes,
            hypertension, and heart disease.
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Personalized treatment plans
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Regular health monitoring
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Lifestyle guidance
            </li>
          </ul>

          <button className="mt-5 flex items-center gap-2 text-blue-600 font-medium">
            Schedule a check-up <ArrowRight size={16} />
          </button>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            Service Image
          </div>

          <h2 className="text-xl font-semibold mb-2">Pediatric Care</h2>

          <p className="text-sm text-gray-600 mb-4">
            Complete healthcare for infants, children, and adolescents with
            preventive and treatment care.
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Vaccination programs
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Growth monitoring
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Nutrition guidance
            </li>
          </ul>

          <button className="mt-5 flex items-center gap-2 text-blue-600 font-medium">
            Schedule a check-up <ArrowRight size={16} />
          </button>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            Service Image
          </div>

          <h2 className="text-xl font-semibold mb-2">Geriatric Care</h2>

          <p className="text-sm text-gray-600 mb-4">
            Specialized healthcare for elderly patients focusing on comfort,
            mobility, and long-term wellness.
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Age-related care support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Chronic illness support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} />
              Physical therapy guidance
            </li>
          </ul>

          <button className="mt-5 flex items-center gap-2 text-blue-600 font-medium">
            Schedule a check-up <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;