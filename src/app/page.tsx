import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Car, Shield, Clock, Users, Star, Phone, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    "Ceramic Coating",
    "Gaffar Coating", 
    "PPF",
    "Paint Correction",
    "Interior Decline",
    "Anti Rust Coating",
    "Silencer Coating",
    "Engine Coating",
    "Engine Cleaning",
    "Glass Cleaning",
    "Wax",
    "Machine Polish",
    "Vacuum Cleaning",
    "Hydraulic lift",
    "Car Fome Washing",
    "Premium Car Washing"
  ];

  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      comment: "Amazing service! My car looks brand new after the ceramic coating. Highly recommend 3-Square!",
      service: "Ceramic Coating"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Professional team and excellent work. The paint correction service exceeded my expectations.",
      service: "Paint Correction"
    },
    {
      name: "Mike Davis",
      rating: 5,
      comment: "Best car wash service in town. The attention to detail is incredible. Will definitely come back!",
      service: "Premium Car Washing"
    },
    {
      name: "Emily Wilson",
      rating: 5,
      comment: "Great experience with the PPF installation. The team was knowledgeable and professional.",
      service: "PPF"
    },
    {
      name: "David Brown",
      rating: 5,
      comment: "Outstanding interior cleaning service. My car's interior looks and smells amazing!",
      service: "Interior Decline"
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      comment: "Fast, reliable, and excellent quality. The engine cleaning service was top-notch.",
      service: "Engine Cleaning"
    }
  ];

  const stats = [
    { icon: Car, label: "Cars Serviced", value: "1000+" },
    { icon: Users, label: "Happy Customers", value: "500+" },
    { icon: Star, label: "Average Rating", value: "5.0" },
    { icon: Clock, label: "Years Experience", value: "5+" }
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About 3-Square</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a premium car care service provider dedicated to keeping your vehicle in pristine condition. 
              With years of experience and state-of-the-art equipment, we deliver exceptional results every time.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service}
                comingSoon={service === "Coming soon"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reviews">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to give your car the care it deserves? Contact us today to schedule your appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">+1 (555) 123-4567</p>
                <p className="text-gray-300">+1 (555) 987-6543</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">123 Car Wash Street</p>
                <p className="text-gray-300">Automotive City, AC 12345</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">info@3square.com</p>
                <p className="text-gray-300">booking@3square.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/logo.jpg"
                  alt="3-Square Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">3-Square</span>
              </div>
              <p className="text-gray-300">
                Premium car care services for your vehicle's best performance and appearance.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Ceramic Coating</li>
                <li>Paint Correction</li>
                <li>PPF Installation</li>
                <li>Interior Cleaning</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>+1 (555) 123-4567</p>
                <p>info@3square.com</p>
                <p>123 Car Wash Street</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-300">
            <p>&copy; 2024 3-Square Car Wash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 