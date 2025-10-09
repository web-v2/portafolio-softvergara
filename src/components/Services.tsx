import { Code, Smartphone, Wrench, Zap, Database, Paintbrush } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web Frontend",
      description:
        "Creación de interfaces de usuario modernas, responsivas y optimizadas con React, Angular o Vue.js.",
      features: ["Single Page Applications", "Progressive Web Apps", "Responsive Design", "Optimización SEO"],
    },
    {
      icon: Database,
      title: "Desarrollo Backend",
      description: "Implementación de APIs REST, gestión de bases de datos y lógica del servidor con Laravel y Node.js.",
      features: ["API REST/GraphQL", "Autenticación JWT", "Base de datos SQL/NoSQL", "Arquitectura escalable"],
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Desarrollo de aplicaciones móviles híbridas con tecnologías web modernas.",
      features: ["Cross-platform", "Rendimiento nativo", "Integración de APIs", "UI/UX optimizada"],
    },
    {
      icon: Paintbrush,
      title: "Diseño UI/UX",
      description: "Diseño de interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
      features: ["Prototipado", "Design Systems", "Wireframes", "Testing de usabilidad"],
    },
    {
      icon: Wrench,
      title: "Mantenimiento Web",
      description:
        "Soporte técnico continuo, actualizaciones de seguridad y optimización de sitios web existentes.",
      features: ["Actualizaciones", "Backups automáticos", "Monitoreo 24/7", "Corrección de bugs"],
    },
    {
      icon: Zap,
      title: "Optimización & SEO",
      description: "Mejora del rendimiento web y posicionamiento en motores de búsqueda.",
      features: ["Page Speed", "Core Web Vitals", "SEO técnico", "Analytics"],
    },
  ];

  return (
    <section 
      ref={ref}
      id="services" 
      className={`py-20 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones completas de desarrollo web adaptadas a tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
