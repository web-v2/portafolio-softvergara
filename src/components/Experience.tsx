import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const workExperience = [
    {
      title: "Desarrollador Web Junior",
      company: "Tech Solutions Inc.",
      period: "2023 - Presente",
      description:
        "Desarrollo de aplicaciones web con Angular y Laravel. Colaboración en proyectos de comercio electrónico y optimización de rendimiento.",
      achievements: [
        "Reducción del tiempo de carga en un 40%",
        "Implementación de nuevas funcionalidades",
        "Trabajo en equipo con metodología Scrum",
      ],
    },
    {
      title: "Desarrollador Frontend",
      company: "Digital Agency",
      period: "2022 - 2023",
      description:
        "Creación de interfaces de usuario responsivas con React y Vue.js. Colaboración estrecha con diseñadores UX/UI.",
      achievements: [
        "Desarrollo de 15+ landing pages",
        "Mejora de accesibilidad web",
        "Implementación de animaciones CSS avanzadas",
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
      degree: "Ingeniería en Sistemas",
      institution: "Universidad Tecnológica",
      period: "2019 - 2023",
      description: "Especialización en desarrollo de software y bases de datos.",
    },
    {
      degree: "Bootcamp Full Stack Development",
      institution: "Coding Academy",
      period: "2022",
      description: "Programa intensivo de 6 meses en desarrollo web moderno.",
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
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
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
                    
                    <Card className="p-6 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
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
