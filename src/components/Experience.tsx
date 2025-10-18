import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const workExperience = [
    {
      title: "Desarrollador Web Laravel",
      company: "Cootrafluvsuc",
      period: "2025 - Actual",
      description:
        "Diseño y desarrollo de una plataforma web para la gestión de vehículos y ventas utilizando Laravel.",
      achievements: [
        "Modúlos de gestión de vehículos, ventas y reportes",
        "Modúlos de administración de usuarios y roles",
        "Gestión de contratos, prestamos y pagos",
      ],
    },
    {
      title: "Desarrollador Web Laravel",
      company: "Roberts Motos KE",
      period: "2025",
      description:
        "Diseño y desarrollo de una plataforma web para la gestión de inventarios y ventas utilizando Laravel.",
      achievements: [
        "Inventario digitalizado en un 92%",
        "Facturación de tickets tipo POS",
        "Gestión de clientes y proveedores",
      ],
    },
    {
      title: "Desarrollador Frontend Js",
      company: "Reto Factus",
      period: "2024",
      description:
        "Creación de interfaces de usuario responsivas con Angular para el consumo de API RESTful para facturación electrónica.",
      achievements: [
        "Desarrollo de 3 módulos clave del sistema",
        "Desarrollo de componentes reutilizables",
        "Desarrollo y despliegue de API RESTful con Node.js y Express Aux a la de Factus",
        "Implementación de sistema de autenticación y autorización con JWT",
      ],
    },
    {
      title: "Desarrollador Frontend PHP",
      company: "Barragan & Urzola Abogados",
      period: "2023",
      description:
        "Diseño y desarrollo de un sistema de gestión completo que incluye módulos de casos legales, contratos, pagos, clientes, etc. utilizando PHP.",
      achievements: [
        "Desarrollo de 12 módulos del sistema",        
        "Despliegue del proyecto en un entorno de producción - Hostinger",
        "Implementación de sistema de autenticación, roles y permisos",
        "Optimización de consultas SQL para mejorar el rendimiento",
      ],
    },
    {
      title: "Desarrollador Freelance",
      company: "Autónomo",
      period: "2021 - 2022",
      description:
        "Desarrollo de sitios web para pequeñas empresas y emprendedores. Gestión completa de proyectos desde diseño hasta despliegue.",
      achievements: [
        "10+ proyectos completados",
        "Satisfacción del cliente: 95%",
        "Entrega dentro del plazo establecido",
      ],
    },
  ];

  const education = [
    {
      degree: "Técnico en Programación de Software",
      institution: "Servicio Nacional de Aprendizaje - SENA",
      period: "2015",
      description: "Programación básica, desarrollo con JAVA y bases de datos MySql.",
    },
    {
      degree: "Ingeniería en Sistemas",
      institution: "Corporación Universitaria Antonio José de Sucre - UAJS",
      period: "2019 - 2024",
      description: "Programa académico enfocado en desarrollo de software, bases de datos y redes.",
    },
    {
      degree: "NODE: DE CERO A EXPERTO - Fernando Herrera",
      institution: "Udemy Inc.",
      period: "2022",
      description: "Programa intensivo sobre NODE.js.",
    },
    {
      degree: "VUE JS DE CERO A EXPERTO - Fernando Herrera",
      institution: "Udemy Inc.",
      period: "2024",
      description: "Programa intensivo sobre VUE.js.",
    },    
    {
      degree: "TYPESCRIPT: TU COMPLETA GUÍA Y MANUAL DE MANO. - Fernando Herrera",
      institution: "Udemy Inc.",
      period: "2025",
      description: "Programa intensivo sobre TYPESCRIPT.",
    },
    {
      degree: "ANGULAR DE CERO A EXPERTO - Fernando Herrera",
      institution: "Udemy Inc.",
      period: "2025-En curso",
      description: "Programa intensivo sobre ANGULAR.",
    },
  ];

  return (
    <section 
      ref={ref}
      id="experience" 
      className={`py-20 bg-gradient-to-b from-background to-secondary/20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experiencia</h2>
            <p className="text-xl text-muted-foreground">Mi trayectoria profesional y académica</p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experiencia Laboral</h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold">{job.title}</h4>
                    <span className="text-sm text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{job.company}</p>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▪</span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Educación</h3>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent"></div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-6 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center shadow-lg shadow-accent/30">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                    
                    <Card className="p-6 bg-card border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-accent font-medium mb-2 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" />
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
