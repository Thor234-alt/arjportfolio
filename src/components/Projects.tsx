
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Github, Code, Timer, Music, Book } from 'lucide-react';

const projectsData = [
  {
    title: "IdeaTinder",
    description: "A web application where users can post ideas, receive feedback, swipe through concepts, save ideas, connect with like-minded creators, and collaborate on innovative projects.",
    tags: ["React", "Node.js", "DyanomoDB"],
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fillustrations%2Fidea-symbol-innovation-logo-3383766%2F&psig=AOvVaw164jkzzqxylXcs2qjlWs8e&ust=1758823269685000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLDt47T98Y8DFQAAAAAdAAAAABAE",
    github: "https://github.com/ARJ2004",
    demo: "https://ideatinder.vercel.app/",
    icon: <Code size={24} />
  },
  {
    title: "Music Player using GUI Python",
    description: "A desktop music player application built with Python's GUI framework, enabling users to play and manage their music library.",
    tags: ["Python", "Tkinter", "GUI"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/ARJ2004",
    demo: "https://github.com/ARJ2004",
    icon: <Music size={24} />
  },
  {
    title: "Exam Room Allocation",
    description: "A system that optimizes exam room allocation based on various constraints, improving resource utilization for educational institutions.",
    tags: ["Python", "Algorithms", "Database"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/ARJ2004/ERA",
    demo: "https://github.com/ARJ2004/ERA",
    icon: <Book size={24} />
  },
  {
    title: "AI Chatbot using LLM and RAASA",
    description: "An intelligent chatbot leveraging Large Language Models and Retrieval-Augmented Generation for context-aware conversations.",
    tags: ["Python", "LLM", "RAG"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/ARJ2004/AI-Chat-Bot",
    demo: "https://github.com/ARJ2004/AI-Chat-Bot",
    icon: <Code size={24} />
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore a collection of my work that demonstrates my skills in web development, 
            artificial intelligence, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 border border-border hover:border-primary/20 hover:shadow-lg">
                <div className="relative h-60 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute top-4 left-4 p-2 rounded-full bg-background/80 backdrop-blur-sm">
                    {project.icon}
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-2 py-1 rounded-full bg-accent text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm" className="gap-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  
                  <Button size="sm" className="gap-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
