import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">
        SALAZAR INFOTECH
      </h1>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/services" className="hover:text-blue-600">Services</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center mt-20">
      <h2 className="text-2xl font-bold text-white mb-2">
        SALAZAR INFOTECH PRIVATE LIMITED
      </h2>
      <p>Empowering Businesses Through Technology</p>
      <p className="mt-2 text-sm text-gray-400">
        Unit No 606, Plot No-8, SG Shopping Mall, Sector-9, Rohini City, New Delhi - 110085
      </p>
      <p className="text-sm text-gray-400">
        Email: infotechsalazar3@gmail.com | Phone: +91 8796925526
      </p>
      <p className="mt-4 text-sm text-gray-500">
        © 2026 SALAZAR INFOTECH PRIVATE LIMITED. All rights reserved.
      </p>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Welcome to SALAZAR INFOTECH
        </h1>

        <p className="max-w-3xl text-lg md:text-xl text-blue-100 mb-8">
          SALAZAR INFOTECH PRIVATE LIMITED is a modern IT company delivering
          software development, cloud services, AI solutions, cyber security,
          and digital transformation services for businesses.
        </p>

        <div className="flex gap-4">
          <Link
            to="/services"
            className="bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore Services
          </Link>

          <Link
            to="/contact"
            className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: 'Web Development',
      desc: 'Responsive websites and scalable business web applications.',
      details: [
        'Custom Business Websites',
        'E-Commerce Platforms',
        'React & Modern Frontend Development',
        'Backend API Development',
        'Portfolio & Corporate Websites',
        'Website Maintenance & Optimization',
      ],
    },
    {
      title: 'AI & Machine Learning',
      desc: 'AI-powered software, automation systems, and analytics solutions.',
      details: [
        'Predictive Analytics Models',
        'Chatbots & AI Assistants',
        'Computer Vision Applications',
        'Recommendation Systems',
        'Data Analysis & Visualization',
        'Automation & Smart Workflows',
      ],
    },
    {
      title: 'Cloud Services',
      desc: 'Cloud hosting, deployment, maintenance, and infrastructure management.',
      details: [
        'Cloud Hosting Solutions',
        'AWS & Cloud Deployment',
        'Database Management',
        'Server Monitoring',
        'DevOps & CI/CD Integration',
        'Infrastructure Scaling',
      ],
    },
    {
      title: 'Cyber Security',
      desc: 'Secure systems, authentication, and data protection solutions.',
      details: [
        'Data Protection & Encryption',
        'Secure Authentication Systems',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Network Security Solutions',
        'Business Security Audits',
      ],
    },
  ];

  return (
    <div className="py-20 px-8 bg-gray-50 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional IT services designed to help your business grow faster.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              {service.title}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.desc}
            </p>

            <div>
              <h3 className="font-semibold text-gray-800 mb-3">
                Services Included:
              </h3>

              <ul className="space-y-2 text-gray-600">
                {service.details.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="py-20 px-8 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
          alt="Team"
          className="rounded-3xl shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold mb-6">About Us</h1>

          <p className="text-gray-700 leading-relaxed mb-4">
            SALAZAR INFOTECH PRIVATE LIMITED is focused on delivering advanced
            digital products, IT consulting, software solutions, and enterprise
            services.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            We help startups and enterprises build innovative technology
            solutions with modern development practices.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
              <h2 className="text-3xl font-bold text-blue-600">150+</h2>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 shadow-md">
              <h2 className="text-3xl font-bold text-blue-600">100+</h2>
              <p className="text-gray-600">Clients Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="py-20 px-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          Reach out to us for professional IT solutions.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            Company Information
          </h2>

          <div className="space-y-5 text-gray-700 text-lg">
            <p>
              <strong>Company Name:</strong><br />
              SALAZAR INFOTECH PRIVATE LIMITED
            </p>

            <p>
              <strong>Registered Address:</strong><br />
              Unit No 606, Plot No-8, SG Shopping Mall,
              Sector-9, Rohini City, New Delhi - 110085
            </p>

            <p>
              <strong>Primary Email:</strong><br />
              infotechsalazar3@gmail.com
            </p>

            <p>
              <strong>Alternate Email:</strong><br />
              sundrsingh0333@gmail.com
            </p>

            <p>
              <strong>Phone Number:</strong><br />
              +91 8796925526
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl p-10 text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Us?
          </h2>

          <ul className="space-y-5 text-lg leading-relaxed">
            <li>✔ Modern and scalable IT solutions</li>
            <li>✔ Expert web and software development</li>
            <li>✔ Secure cloud and cyber security services</li>
            <li>✔ AI-powered automation solutions</li>
            <li>✔ Dedicated support and maintenance</li>
            <li>✔ Business-focused digital transformation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
