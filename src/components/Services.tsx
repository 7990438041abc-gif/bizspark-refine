import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Code, 
  Megaphone,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Tech Stack"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Push Notifications"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Stunning visual designs and intuitive user experiences that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive targeted traffic.",
      features: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"]
    },
    {
      icon: Code,
      title: "E-commerce Solutions",
      description: "Powerful online stores and e-commerce platforms that maximize conversions and sales.",
      features: ["Payment Integration", "Inventory Management", "Analytics", "Mobile Commerce"]
    },
    {
      icon: Megaphone,
      title: "Brand Strategy",
      description: "Complete brand identity and strategy development to establish your unique market presence.",
      features: ["Logo Design", "Brand Guidelines", "Market Research", "Positioning"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform glow-primary">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold font-display">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Let's discuss your project and create something amazing together
              </p>
              <Button variant="glass" size="xl">
                Start Your Project Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;