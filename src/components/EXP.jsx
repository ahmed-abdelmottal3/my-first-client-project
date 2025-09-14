import React from "react";

export default function EXP() {
  return (
    <section className="w-[85%] sm:w-[75%]  max-w-5xl mx-auto mt-10 mb-20">
      <h1 className="flex items-center text-3xl font-semibold text-blue-600 border-b-1 border-gray-300 pb-2 mb-8 gap-3">
        <span className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></span>
        Work Experience
      </h1>

      {/* Experience 1 */}
      <div className="mb-6 p-5 border-l-4 border-blue-600 bg-blue-50 rounded-lg shadow-sm exp">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">
          Interior Design & Home Decor – Al-Ramadi Company, Beheira
        </h3>
        <span className="text-gray-500 text-sm">Duration: 3 months</span>
        <p className="mt-2 text-gray-700">
          Specialized in designing wallpaper patterns and apartment decorations.
        </p>
      </div>

      {/* Experience 2 */}
      <div className="mb-6 p-5 border-l-4 border-blue-600 bg-blue-50 rounded-lg shadow-sm exp">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">
          Home Appliances & Tools – Mounir Atash Company, Desouk
        </h3>
        <span className="text-gray-500 text-sm">Duration: 1 year</span>
        <p className="mt-2 text-gray-700">
          Worked on designing and promoting household appliances and tools.
        </p>
      </div>

      {/* Experience 3 */}
      <div className="mb-6 p-5 border-l-4 border-blue-600 bg-blue-50 rounded-lg shadow-sm exp">
        <h3 className="text-xl sm:text-2xl font-semibold text-blue-700">
          Freelance Designer – Various Projects, Egypt & International
        </h3>
        <span className="text-gray-500 text-sm">Duration: 2 years</span>
        <p className="mt-2 text-gray-700">
          - Collaborated with teachers across Alexandria, Cairo, and other governorates.<br />
          - Worked on multiple centers in Cairo and on the “Little Geniuses” program in Kafr El-Sheikh.<br />
          - Collaborated remotely with <strong>Toptal</strong>, Nigeria.
        </p>
      </div>
    </section>
  );
}
