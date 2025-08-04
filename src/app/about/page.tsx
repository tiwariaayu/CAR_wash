import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Car, Shield, Clock, Users, Star, Award, CheckCircle, Target, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, ensuring the highest quality results."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Passion",
      description: "Our passion for cars drives us to deliver exceptional care and attention to detail."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Trust",
      description: "Building trust through transparency, reliability, and consistent quality service."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Community",
      description: "We're part of the automotive community and committed to serving our customers."
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      experience: "15+ years",
      specialty: "Ceramic Coating & PPF",
      image: "/car1.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Lead Detailer",
      experience: "10+ years",
      specialty: "Paint Correction & Detailing",
      image: "/img_2_1754144273918.jpg"
    },
    {
      name: "Mike Davis",
      role: "Service Manager",
      experience: "8+ years",
      specialty: "Engine & Interior Services",
      image: "/img_3_1754144274304.jpg"
    }
  ];

  const achievements = [
    { number: "1000+", label: "Cars Serviced" },
    { number: "500+", label: "Happy Customers" },
    { number: "5+", label: "Years Experience" },
    { number: "5.0", label: "Average Rating" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About 3-Square</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are passionate about cars and committed to providing the highest quality car care services. 
            Our mission is to keep your vehicle looking and performing its best.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                3-Square was founded with a simple mission: to provide premium car care services that exceed expectations. 
                What started as a small local car wash has grown into a comprehensive automotive care center.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of certified professionals brings years of experience and a passion for automotive excellence. 
                We use only the highest quality products and state-of-the-art equipment to ensure your vehicle receives 
                the best possible care.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to serve our community with a full range of services, from basic washing to advanced 
                protection coatings, always maintaining the same commitment to quality and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/img_4_1754144283622.jpg"
                alt="3-Square Car Wash"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver the best possible service to our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing you with the best car care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-medium">{member.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Specialty:</span>
                      <span className="font-medium">{member.specialty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose 3-Square?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our commitment to quality, expertise, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-lg">Certified Professionals</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our team consists of certified professionals with extensive training and experience in automotive care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-lg">Quality Guarantee</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We stand behind our work with comprehensive warranties and satisfaction guarantees.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-lg">Convenient Hours</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We offer flexible scheduling and extended hours to accommodate your busy lifestyle.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8 text-yellow-600" />
                  <CardTitle className="text-lg">Premium Products</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We use only the highest quality products and equipment to ensure the best results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-red-600" />
                  <CardTitle className="text-lg">Attention to Detail</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every service is performed with meticulous attention to detail for perfect results.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-pink-600" />
                  <CardTitle className="text-lg">Customer Focus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your satisfaction is our priority. We go above and beyond to exceed your expectations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the 3-Square Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their vehicles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 