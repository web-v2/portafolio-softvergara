import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const projects = [
    {
      title: "Reto Factus - Consumo de API RESTful",
      description:
        "Se cumplio el reto de construir una aplicación web que consuma una API RESTful de FACTUS, para emitir facturas electrónicas y estas a la vez sean validadas por la DIAN Colombia.",
      technologies: ["Angular", "API RESTful", "TypeScript", "Tailwind CSS", "JSON"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      githubUrl: "https://github.com/web-v2/factus-frontend",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas para proyectos locales, con commits y notas generales así como el manejo de los estados en cada etapa de los diferentes proyectos.",
      technologies: ["React", "TypeScript", "LocalStorage", "En Desarrollo"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      githubUrl: "https://github.com",
      liveUrl: "https://todo-softvergara.netlify.app/",
    },
    {
      title: "Tekball - App de ejercicios físicos - Para niños y niñas",
      description:
        "Aplicación de ejercicios físicos para niños y niñas con seguimiento de progreso, gamificación y puntuaciones. En esta app los usuarios cumplen los retos de ejercicios para fortalecer las habilidades motoras y físicas.",
      technologies: ["Angular", "API RESTful", "TypeScript", "Bootstrap"],
      image: "https://images.pexels.com/photos/9648765/pexels-photo-9648765.jpeg?w=800&q=80",
      githubUrl: "https://github.com/web-v2/TEKBALL",
      liveUrl: "https://tekball-softvergara-921597.netlify.app",
      
    },
    {
      title: "Web Saico Ingeniería",
      description:
        "Aplicación web para una empresa de ingeniería que muestra sus servicios, proyectos y permite a los clientes solicitar cotizaciones en línea.",
      technologies: ["React", "API REST", "Netlify", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
      githubUrl: "https://github.com",
      liveUrl: "https://saico-ingenieria.netlify.app",
    },
    {
      title: "RIPS JSON Assembler - Generador de archivos RIPS",
      description:
        "Aplicación web para la generación de archivos RIPS (Res. 2275 de 2023) en formato JSON. Convierte RIPS TXT a JSON y viceversa, facilitando la gestión de información en el sector salud.",
      technologies: ["React", "JSON", "Netlify", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg",
      githubUrl: "https://github.com/web-v2/rips-txt-json",
      liveUrl: "https://rips-assembler.netlify.app/",
    },
    {
      title: "AudiRIPS - JSON",
      description:
        "Aplicación web Creador y Editor de RIPS JSON (Res. 2275 de 2023). Convierte RIPS TXT a JSON y viceversa, facilitando la gestión de información en el sector salud.",
      technologies: ["Angular", "JSON", "Netlify", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/7191157/pexels-photo-7191157.jpeg",
      githubUrl: "https://github.com/web-v2/audiRIPSJson",
      liveUrl: "https://audi-rips-json.netlify.app/#/",
    },
  ];

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`py-20 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Algunos de los proyectos en los que he trabajado recientemente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="font-medium">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    <Button variant="default" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
