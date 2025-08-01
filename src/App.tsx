import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Star, 
  Shield, 
  Zap, 
  Award,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
  Smartphone,
  TrendingUp,
  Palette,
  Settings,
  FileText,
  BarChart3,
  Users,
  Clock,
  Lock,
  Brain,
  Rocket,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Play
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Project Inquiry - ${formData.projectType}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nMessage: ${formData.message}`;
    window.location.href = `mailto:100xdropship@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="font-bold text-white text-lg">100x</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Agency</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold hover:from-blue-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-200/50 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2">Home</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium py-2">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              Digital Solutions That Scale
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Launch. Grow. 
              <span className="bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent"> Dominate</span>
              <br />
              <span className="text-4xl md:text-6xl text-gray-700">— The 100x Way.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              All advanced digital solutions under one roof. Designed to scale you to 100x.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center space-x-2"
              >
                <span>See Our Services</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Who We Are</h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              100x Agency is a cutting-edge team of digital warriors from Prayagraj, Uttar Pradesh. 
              We create, scale, and automate brands using power-packed strategies, creative tech, and performance ads.
            </p>
            
            <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl px-8 py-6">
              <p className="text-2xl font-semibold text-blue-700">
                "Every click matters. Every rupee counts."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: 'Modern Website Development', desc: 'Custom, responsive websites built for performance', color: 'from-blue-500 to-blue-600' },
              { icon: Target, title: 'Meta Ads (Facebook + Instagram)', desc: 'Strategic ad campaigns that convert', color: 'from-purple-500 to-purple-600' },
              { icon: Smartphone, title: 'Dropshipping Store Setup', desc: 'Complete e-commerce solutions', color: 'from-indigo-500 to-indigo-600' },
              { icon: TrendingUp, title: 'Digital Marketing Campaigns', desc: 'Multi-channel marketing strategies', color: 'from-cyan-500 to-cyan-600' },
              { icon: Palette, title: 'Branding & Visual Identity', desc: 'Professional brand development', color: 'from-pink-500 to-pink-600' },
              { icon: Settings, title: 'Business Automation & CRM', desc: 'Streamlined business processes', color: 'from-emerald-500 to-emerald-600' },
              { icon: FileText, title: 'Custom Landing Pages', desc: 'High-converting landing pages', color: 'from-orange-500 to-orange-600' },
              { icon: BarChart3, title: 'Strategy & Funnel Building', desc: 'Optimized sales funnels', color: 'from-violet-500 to-violet-600' }
            ].map((service, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose 100x Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Why Choose 100x</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just deliver projects—we build partnerships that drive exponential growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'End-to-End Digital Execution', desc: 'Complete solutions from strategy to implementation', color: 'from-blue-500 to-blue-600' },
              { icon: Zap, title: 'Fast & Strategic Setup', desc: 'Quick deployment without compromising quality', color: 'from-purple-500 to-purple-600' },
              { icon: Lock, title: 'No Hidden Fees', desc: 'Transparent pricing with no surprises', color: 'from-indigo-500 to-indigo-600' },
              { icon: Brain, title: '100x Mindset: We think, you scale', desc: 'Strategic thinking that multiplies results', color: 'from-cyan-500 to-cyan-600' },
              { icon: CheckCircle, title: 'Real Team, Real Results', desc: 'Experienced professionals delivering measurable outcomes', color: 'from-emerald-500 to-emerald-600' },
              { icon: Rocket, title: 'We Build Brands That Sell', desc: 'Converting visitors into loyal customers', color: 'from-pink-500 to-pink-600' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">100x Clients Speak</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from businesses that chose to scale the 100x way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "100x Agency transformed our online presence completely. ROI increased by 300% within 3 months.",
                name: "Rajesh Kumar",
                role: "E-commerce Business Owner"
              },
              {
                quote: "Their strategic approach to digital marketing helped us scale from startup to market leader.",
                name: "Priya Sharma",
                role: "Tech Startup Founder"
              },
              {
                quote: "Professional, results-driven, and incredibly responsive. Best investment we made for our business.",
                name: "Amit Verma",
                role: "Restaurant Chain Owner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Let's Build Something 100x Together</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to scale your business? Let's discuss your project and create a strategy that delivers results.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                >
                  <option value="">Select project type</option>
                  <option value="Website">Website</option>
                  <option value="Ads">Ads</option>
                  <option value="Dropshipping">Dropshipping</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-200"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="font-bold text-white text-lg">100x</span>
                </div>
                <span className="font-bold text-xl tracking-tight">Agency</span>
              </div>
              <p className="text-gray-400">
                Scaling businesses to 100x through strategic digital solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors duration-200">Services</button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors duration-200">About</button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-gray-400 hover:text-white transition-colors duration-200">Testimonials</button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors duration-200">Contact</button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">100xdropship@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">Prayagraj, Uttar Pradesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">www.100xagency.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 100x Agency. Built by 100x Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918858185272?text=Hi%2C%20shall%20we%20discuss%20our%20project%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-200 transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}

export default App;