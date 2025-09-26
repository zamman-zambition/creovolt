import { Code, Smartphone, Palette } from "lucide-react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
   <section
  className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1653050819678-c6ee0f84810d?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0')",
  }}
>
  {/* Gradient + Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl text-center px-6">
    <h1 className="text-6xl font-extrabold text-white drop-shadow-lg animate-fadeInUp">
      Welcome to <span className="text-blue-400">Creovolt</span>
    </h1>
    <p className="mt-6 text-xl text-gray-200 animate-fadeInUp delay-200">
      We craft stunning websites, powerful apps, and seamless digital experiences.
    </p>

    <div className="mt-8 flex justify-center gap-4 animate-fadeInUp delay-300">
      <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition">
        Get Started
      </button>
      <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition">
        View Portfolio
      </button>
    </div>
  </div>

  {/* Floating shapes for extra fanciness */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-bounce"></div>
</section>



      {/* Services Section */}
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-gray-500 mt-2">
          We help brands go digital with modern solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto px-6">
          {/* Card 1 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition">
            <Code className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
            <p className="mt-3 text-gray-600">
              Custom websites built with the latest technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition">
            <Smartphone className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Mobile Apps</h3>
            <p className="mt-3 text-gray-600">
              Android & iOS apps that connect you with your audience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white rounded-2xl shadow-lg border hover:-translate-y-2 hover:shadow-2xl transition">
            <Palette className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Branding</h3>
            <p className="mt-3 text-gray-600">
              Logos, colors, and styles that make your brand stand out.
            </p>
          </div>
        </div>
      </section>
      
{/* Portfolio Section */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <h2 className="text-4xl font-bold text-center text-gray-800">
    Our Portfolio
  </h2>
  <p className="text-center text-gray-500 mt-2">
    A glimpse of our latest digital creations.
  </p>

  <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto px-6">
    {/* Project Card */}
    {[
      {
        title: "E-Commerce Website",
        desc: "Built with Next.js & Stripe integration.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Mobile App Design",
        desc: "Cross-platform app with React Native.",
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Brand Identity",
        desc: "Logo & branding for a startup.",
        img: "https://plus.unsplash.com/premium_photo-1677087122601-ddf112401f01?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ].map((project, idx) => (
      <div
        key={idx}
        className="relative group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2"
      >
        {/* Image */}
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
        {/* Text */}
        <div className="absolute bottom-0 p-6 text-white opacity-0 group-hover:opacity-100 transition">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm mt-2">{project.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>
{/* About Section */}
<section className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Image */}
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img
        src="https://plus.unsplash.com/premium_photo-1661526579038-aea87aecd898?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Team working"
        className="w-full h-full object-cover"
      />
    </div>
    {/* Text */}
    <div>
      <h2 className="text-4xl font-bold text-gray-800">About Creovolt</h2>
      <p className="mt-4 text-gray-600 leading-relaxed">
        We are a team of designers, developers, and strategists passionate
        about building digital products that help businesses grow. Our goal
        is to turn your ideas into impactful experiences.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
        Learn More
      </button>
    </div>
  </div>
</section>
{/* Contact Section */}
<section className="py-20 bg-gradient-to-b from-blue-50 to-white">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
    <p className="mt-2 text-gray-600">
      Let’s talk about your project. We’re just one message away.
    </p>

    <form className="mt-8 grid gap-6 md:grid-cols-2">
      <input
        type="text"
        placeholder="Your Name"
       className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600"
      />
      <textarea
        placeholder="Your Message"
        className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-600 md:col-span-2"
        rows="4"
      ></textarea>
      <button className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  </div>
</section>

      <Footer />
    </div>
  );
}
