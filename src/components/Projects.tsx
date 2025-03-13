
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, Github } from 'lucide-react';

const projectsData = [
  {
    title: "AI Conversation Assistant",
    description: "A web-based chatbot leveraging GPT-4 to provide contextually relevant responses with memory retention capabilities.",
    tags: ["React", "LLM", "API Integration"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Tailwind CSS to showcase projects and skills.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    github: "#",
    demo: "#"
  },
  {
    title: "Smart Task Manager",
    description: "A task management application with AI-powered prioritization and natural language processing for task entry.",
    tags: ["Python", "NLP", "Web Development"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    github: "#",
    demo: "#"
  },
  {
    title: "Language Learning Bot",
    description: "An educational chatbot that helps users learn new languages through interactive conversations and exercises.",
    tags: ["LLM", "Python", "Educational Tech"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    github: "#",
    demo: "#"
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
