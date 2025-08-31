import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with real-time transactions",
      technologies: ["React Native", "Firebase", "Biometric Auth", "Push Notifications"],
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard for SaaS businesses with real-time insights",
      technologies: ["Vue.js", "D3.js", "GraphQL", "PostgreSQL"],
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity and design system for a tech startup",
      technologies: ["Figma", "Adobe Suite", "Brand Guidelines", "Style Guide"],
      category: "Design",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Food Delivery Platform",
      description: "Multi-vendor food delivery platform with real-time tracking and payments",
      technologies: ["Flutter", "Laravel", "Google Maps", "PayPal"],
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI-Powered Analytics",
      description: "Machine learning powered analytics platform for business intelligence",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      category: "AI/ML",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Web Development", "Mobile App", "Design", "AI/ML", "Web Application"];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            <span className="text-gradient">Our Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="glass" className="w-10 h-10">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="glass" className="w-10 h-10">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>

                {/* Category Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-background/80 backdrop-blur-md"
                >
                  {project.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="xl">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;