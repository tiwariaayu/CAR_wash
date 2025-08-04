import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  service: string;
  avatar?: string;
}

const ReviewCard = ({ name, rating, comment, service, avatar }: ReviewCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            {avatar ? (
              <Image
                src={avatar}
                alt={name}
                width={48}
                height={48}
                className="rounded-full"
              />
            ) : (
              <span className="text-blue-600 font-semibold text-lg">
                {name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{service}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{rating}.0</span>
        </div>
        <p className="text-gray-700 leading-relaxed">"{comment}"</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard; 