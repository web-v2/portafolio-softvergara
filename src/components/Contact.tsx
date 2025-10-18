import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí iría la lógica para enviar el formulario
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "samirantoniovergaravergara@gmail.com",
      href: "mailto:samirantoniovergaravergara@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+57 300 412 2688",
      href: "tel:+573004122688",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Sincelejo, Colombia",
      href: null,
    },
  ];

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`py-20 bg-gradient-to-b from-background to-secondary/20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-0">
                    <div className="p-1 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.label}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              <Card className="p-6 bg-gradient-to-br from-primary to-accent text-foreground">
                <h3 className="text-xl font-bold mb-2">¿Prefieres WhatsApp?</h3>
                <p className="text-sm mb-4 opacity-90">Escríbeme directamente y responderé pronto</p>
                <Button
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/573004122688"
                    target="_blank"
                    rel="noopener noreferrer"
					className="bg-green-600"
                  >
                    Abrir WhatsApp
                  </a>
                </Button>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      placeholder="¿Sobre qué quieres hablar?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default Contact;
