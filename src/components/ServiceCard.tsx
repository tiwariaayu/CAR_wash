import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Car, Shield, Wrench, Droplets, Spray, Zap, Scissors, Palette, Vacuum, Glass, Star } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  comingSoon?: boolean;
}

const ServiceCard = ({ title, description, icon, comingSoon = false }: ServiceCardProps) => {
  const getIcon = (serviceName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Ceramic Coating": <Sparkles className="h-8 w-8 text-blue-600" />,
      "Gaffar Coating": <Shield className="h-8 w-8 text-green-600" />,
      "PPF": <Shield className="h-8 w-8 text-purple-600" />,
      "Paint Correction": <Palette className="h-8 w-8 text-orange-600" />,
      "Interior Decline": <Car className="h-8 w-8 text-red-600" />,
      "Anti Rust Coating": <Shield className="h-8 w-8 text-yellow-600" />,
      "Silencer Coating": <Zap className="h-8 w-8 text-gray-600" />,
      "Engine Coating": <Wrench className="h-8 w-8 text-indigo-600" />,
      "Engine Cleaning": <Wrench className="h-8 w-8 text-teal-600" />,
      "Glass Cleaning": <Glass className="h-8 w-8 text-cyan-600" />,
      "Wax": <Droplets className="h-8 w-8 text-amber-600" />,
      "Machine Polish": <Sparkles className="h-8 w-8 text-pink-600" />,
      "Vacuum Cleaning": <Vacuum className="h-8 w-8 text-slate-600" />,
      "Hydraulic lift": <Car className="h-8 w-8 text-emerald-600" />,
      "Car Fome Washing": <Spray className="h-8 w-8 text-blue-500" />,
      "Premium Car Washing": <Star className="h-8 w-8 text-gold-600" />,
    };
    return iconMap[serviceName] || <Car className="h-8 w-8 text-gray-600" />;
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-3">
          {icon || getIcon(title)}
        </div>
        <CardTitle className="text-lg font-semibold text-gray-800">
          {title}
        </CardTitle>
        {comingSoon && (
          <Badge variant="secondary" className="w-fit mx-auto">
            Coming Soon
          </Badge>
        )}
      </CardHeader>
      <CardContent className="text-center">
        <CardDescription className="text-gray-600">
          {description || "Professional car care service to keep your vehicle in pristine condition."}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard; 