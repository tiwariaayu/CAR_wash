import Navigation from "@/components/Navigation";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Shield, Palette, Car, Zap, Wrench, Glass, Droplets, Vacuum, Star, Clock, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Ceramic Coating",
      description: "Long-lasting protection that repels water, dirt, and UV rays while maintaining your car's shine for years.",
      icon: <Sparkles className="h-8 w-8 text-blue-600" />,
      price: "$500-800",
      duration: "4-6 hours",
      features: ["9H hardness protection", "Hydrophobic effect", "UV resistance", "5+ years warranty"]
    },
    {
      title: "Gaffar Coating",
      description: "Advanced protective coating that provides superior durability and gloss enhancement.",
      icon: <Shield className="h-8 w-8 text-green-600" />,
      price: "$400-600",
      duration: "3-4 hours",
      features: ["Superior durability", "Enhanced gloss", "Chemical resistance", "3+ years warranty"]
    },
    {
      title: "PPF",
      description: "Paint Protection Film that shields your vehicle from rock chips, scratches, and environmental damage.",
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      price: "$800-1500",
      duration: "1-2 days",
      features: ["Rock chip protection", "Self-healing properties", "Invisible protection", "10+ years warranty"]
    },
    {
      title: "Paint Correction",
      description: "Professional paint restoration that removes scratches, swirls, and oxidation to restore your car's original finish.",
      icon: <Palette className="h-8 w-8 text-orange-600" />,
      price: "$300-600",
      duration: "6-8 hours",
      features: ["Swirl removal", "Scratch repair", "Oxidation removal", "Mirror finish"]
    },
    {
      title: "Interior Decline",
      description: "Deep cleaning and protection of your vehicle's interior surfaces including leather, fabric, and plastics.",
      icon: <Car className="h-8 w-8 text-red-600" />,
      price: "$150-250",
      duration: "2-3 hours",
      features: ["Leather conditioning", "Fabric protection", "Odor elimination", "UV protection"]
    },
    {
      title: "Anti Rust Coating",
      description: "Protective coating that prevents rust formation and corrosion on your vehicle's undercarriage.",
      icon: <Shield className="h-8 w-8 text-yellow-600" />,
      price: "$200-350",
      duration: "2-3 hours",
      features: ["Rust prevention", "Undercarriage protection", "Long-lasting", "Environmental resistance"]
    },
    {
      title: "Silencer Coating",
      description: "Specialized coating for exhaust systems to reduce noise and prevent corrosion.",
      icon: <Zap className="h-8 w-8 text-gray-600" />,
      price: "$100-200",
      duration: "1-2 hours",
      features: ["Noise reduction", "Heat resistance", "Corrosion protection", "Performance enhancement"]
    },
    {
      title: "Engine Coating",
      description: "Protective coating for engine components to prevent corrosion and improve heat dissipation.",
      icon: <Wrench className="h-8 w-8 text-indigo-600" />,
      price: "$150-300",
      duration: "2-4 hours",
      features: ["Heat resistance", "Corrosion protection", "Performance improvement", "Longevity"]
    },
    {
      title: "Engine Cleaning",
      description: "Thorough cleaning of engine bay to remove dirt, grease, and debris for better performance.",
      icon: <Wrench className="h-8 w-8 text-teal-600" />,
      price: "$80-150",
      duration: "1-2 hours",
      features: ["Deep cleaning", "Grease removal", "Performance improvement", "Visual enhancement"]
    },
    {
      title: "Glass Cleaning",
      description: "Professional glass cleaning and treatment for crystal clear visibility and water repellency.",
      icon: <Glass className="h-8 w-8 text-cyan-600" />,
      price: "$50-100",
      duration: "30-60 minutes",
      features: ["Streak-free finish", "Water repellency", "UV protection", "Long-lasting clarity"]
    },
    {
      title: "Wax",
      description: "Traditional car wax application for enhanced shine and basic protection.",
      icon: <Droplets className="h-8 w-8 text-amber-600" />,
      price: "$40-80",
      duration: "1-2 hours",
      features: ["Enhanced shine", "Basic protection", "Water beading", "3-6 months protection"]
    },
    {
      title: "Machine Polish",
      description: "Professional machine polishing to remove defects and enhance paint finish.",
      icon: <Sparkles className="h-8 w-8 text-pink-600" />,
      price: "$200-400",
      duration: "4-6 hours",
      features: ["Defect removal", "Enhanced gloss", "Professional finish", "Long-lasting results"]
    },
    {
      title: "Vacuum Cleaning",
      description: "Comprehensive interior vacuuming to remove dirt, debris, and allergens from all surfaces.",
      icon: <Vacuum className="h-8 w-8 text-slate-600" />,
      price: "$30-60",
      duration: "30-45 minutes",
      features: ["Deep cleaning", "Allergen removal", "Odor elimination", "Fresh interior"]
    },
    {
      title: "Hydraulic lift",
      description: "Professional lift service for thorough undercarriage cleaning and inspection.",
      icon: <Car className="h-8 w-8 text-emerald-600" />,
      price: "$100-200",
      duration: "1-2 hours",
      features: ["Undercarriage access", "Thorough cleaning", "Inspection service", "Professional equipment"]
    },
    {
      title: "Car Fome Washing",
      description: "Gentle foam washing that safely removes dirt without scratching your vehicle's paint.",
      icon: <Droplets className="h-8 w-8 text-blue-500" />,
      price: "$25-50",
      duration: "30-45 minutes",
      features: ["Gentle cleaning", "No scratches", "Foam technology", "Safe for all surfaces"]
    },
    {
      title: "Premium Car Washing",
      description: "Comprehensive car wash service including exterior, interior, and detailing for showroom finish.",
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      price: "$80-150",
      duration: "2-3 hours",
      features: ["Complete cleaning", "Interior detailing", "Exterior protection", "Showroom finish"]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional car care services tailored to keep your vehicle in pristine condition. 
            From basic washing to advanced protection coatings, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600">{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-600 font-semibold">{service.price}</span>
                    </div>
                  </div>

                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <Star className="h-3 w-3 text-blue-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Book Your Service?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and give your car the care it deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 