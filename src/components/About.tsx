import { Code2, Palette, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "Angular", icon: "angular" },
        { name: "React", icon: "react" },
        { name: "Vue.js", icon: "vuedotjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Bootstrap", icon: "bootstrap" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Laravel", icon: "laravel" },
        { name: "PHP", icon: "php" },
        { name: "Node.js", icon: "nodedotjs" },
		{ name: "Express.js", icon: "express" },
        { name: "MySQL", icon: "mysql" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "REST APIs", icon: "fastapi" },
        { name: "Nestjs", icon: "nestjs" },
		{ name: "SupaBase", icon: "supabase"},
		{ name: "Prima", icon: "prisma" }
      ],
    },
    {
      category: "Herramientas",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "VS Code", icon: "visualstudiocode" },
        { name: "Figma", icon: "figma" },
		{ name: "NetBeans" , icon: "apachenetbeanside" },
        { name: "Postman", icon: "postman" },
        { name: "Docker", icon: "docker" },
        { name: "Linux", icon: "linux" },
		{ name: "CLI", icon: "gnometerminal" },
		{ name: "Pinia", icon: "pinia" },
		{ name: ".ENV", icon: "dotenv" },
      ],
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Código Limpio",
      description: "Escribo código mantenible, escalable y siguiendo las mejores prácticas de la industria.",
    },
    {
      icon: Rocket,
      title: "Rendimiento",
      description: "Optimizo cada proyecto para garantizar velocidad, eficiencia y una excelente experiencia de usuario.",
    },
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Creo interfaces intuitivas y atractivas que los usuarios aman usar.",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajo en equipo, comunicándome efectivamente y adaptándome a diferentes metodologías.",
    },
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-20 bg-gradient-to-b from-background to-secondary/20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mí</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desarrollador web apasionado por crear experiencias digitales excepcionales
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8">Stack Tecnológico</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-xl font-semibold mb-4 text-primary">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary/20 transition-all duration-300 hover:scale-125 group"
                      >
                        <img
                          src={`https://cdn.simpleicons.org/${skill.icon}`}
                          alt={skill.name}
                          className="h-4 w-4 group-hover:scale-110 transition-transform"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
