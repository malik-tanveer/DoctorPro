const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-3">DoctorPro</h2>
          <p className="text-gray-400">
            Providing compassionate and personalized healthcare for all ages.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">(91) 125 879 786</p>
          <p className="text-gray-400">example@gmail.com</p>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2026 DoctorPro. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;