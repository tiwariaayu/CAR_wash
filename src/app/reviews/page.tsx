import Navigation from "@/components/Navigation";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Star, Quote, ThumbsUp, Award, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReviewsPage() {
  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      comment: "Amazing service! My car looks brand new after the ceramic coating. The team was professional and the results exceeded my expectations. Highly recommend 3-Square!",
      service: "Ceramic Coating",
      date: "2 weeks ago"
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Professional team and excellent work. The paint correction service was outstanding. They removed years of scratches and swirls, and my car now has a mirror-like finish. Will definitely return!",
      service: "Paint Correction",
      date: "1 month ago"
    },
    {
      name: "Mike Davis",
      rating: 5,
      comment: "Best car wash service in town. The attention to detail is incredible. They cleaned every nook and cranny of my car. The interior smells amazing and the exterior is spotless. 5 stars!",
      service: "Premium Car Washing",
      date: "3 weeks ago"
    },
    {
      name: "Emily Wilson",
      rating: 5,
      comment: "Great experience with the PPF installation. The team was knowledgeable and professional throughout the entire process. The film is virtually invisible and provides excellent protection.",
      service: "PPF",
      date: "1 month ago"
    },
    {
      name: "David Brown",
      rating: 5,
      comment: "Outstanding interior cleaning service. My car's interior looks and smells amazing! They removed all the stains and odors. The leather conditioning made my seats feel brand new.",
      service: "Interior Decline",
      date: "2 weeks ago"
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      comment: "Fast, reliable, and excellent quality. The engine cleaning service was top-notch. My engine bay looks like new, and the performance has noticeably improved.",
      service: "Engine Cleaning",
      date: "1 week ago"
    },
    {
      name: "Robert Taylor",
      rating: 5,
      comment: "Excellent ceramic coating service. The hydrophobic effect is incredible - water just beads off my car. The shine is amazing and it's been months since the service.",
      service: "Ceramic Coating",
      date: "3 months ago"
    },
    {
      name: "Jennifer Lee",
      rating: 5,
      comment: "Professional and thorough service. The wax job was perfect and the car looks fantastic. The team was friendly and explained everything clearly.",
      service: "Wax",
      date: "2 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "Great experience with the glass cleaning service. All my windows are crystal clear and the water repellency treatment works perfectly. Highly recommend!",
      service: "Glass Cleaning",
      date: "1 week ago"
    },
    {
      name: "Amanda Rodriguez",
      rating: 5,
      comment: "Outstanding service! The machine polish removed all the scratches and my car looks showroom ready. The team was professional and the results are amazing.",
      service: "Machine Polish",
      date: "2 months ago"
    },
    {
      name: "Christopher Kim",
      rating: 5,
      comment: "Excellent anti-rust coating service. They thoroughly cleaned and protected the undercarriage. Peace of mind knowing my car is protected from rust.",
      service: "Anti Rust Coating",
      date: "1 month ago"
    },
    {
      name: "Jessica Martinez",
      rating: 5,
      comment: "Fantastic service! The vacuum cleaning was thorough and my car's interior is spotless. They even cleaned areas I didn't know existed. Great attention to detail.",
      service: "Vacuum Cleaning",
      date: "1 week ago"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "5.0", label: "Average Rating" },
    { number: "1000+", label: "Services Completed" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const featuredReviews = reviews.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">Overall Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5.0</div>
              <p className="text-gray-600">Based on {reviews.length} reviews</p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span>5 stars</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span>100%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real reviews from real customers who have experienced our premium car care services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.service}</p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{review.rating}.0</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Some of our most recent and highly-rated customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredReviews.map((review, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <div className="absolute top-4 left-4">
                    <Quote className="h-8 w-8 text-blue-200" />
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-500">{review.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Love Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Customers Love 3-Square</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We consistently receive high ratings and positive feedback for these key reasons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-white">Quality Service</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Our commitment to excellence ensures every service meets the highest standards of quality.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-green-400" />
                  <CardTitle className="text-white">Professional Team</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Our certified professionals are experienced, friendly, and dedicated to customer satisfaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <ThumbsUp className="h-8 w-8 text-yellow-400" />
                  <CardTitle className="text-white">Attention to Detail</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  We pay attention to every detail, ensuring your vehicle receives the care it deserves.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Happy Customers</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the 3-Square difference and see why our customers consistently rate us 5 stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Your Service
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 