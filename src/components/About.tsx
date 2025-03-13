
import React, { useEffect, useRef } from 'react';
import { Code, Laptop, MessagesSquare } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-accent/30" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="section-title after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mt-2">About Me</h2>
            <div className="space-y-6 text-lg">
              <p>
                I'm a third-year Computer Science student passionate about creating intelligent and user-friendly applications. My journey in tech began with Python programming and evolved into exploring the fascinating world of artificial intelligence and web development.
              </p>
              <p>
                With a strong foundation in computer science principles and a keen eye for design, I strive to build solutions that are not only functional but also aesthetically pleasing and intuitive to use.
              </p>
              <p>
                My current focus involves working with Large Language Models (LLMs) to develop conversational AI systems that can understand and respond to user needs effectively. I believe in the power of technology to solve real-world problems and enhance human experiences.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Code className="h-10 w-10 text-primary" />,
                  title: "Web Development",
                  description: "Building responsive and modern web applications using React, TypeScript and other cutting-edge technologies.",
                  delay: "delay-1"
                },
                {
                  icon: <MessagesSquare className="h-10 w-10 text-primary" />,
                  title: "Chatbot Creation",
                  description: "Designing conversational interfaces that leverage NLP to provide helpful and natural interactions.",
                  delay: "delay-2"
                },
                {
                  icon: <Laptop className="h-10 w-10 text-primary" />,
                  title: "LLM Technology",
                  description: "Working with large language models to create intelligent systems that understand and generate human-like text.",
                  delay: "delay-3"
                },
                {
                  icon: <Code className="h-10 w-10 text-primary" />,
                  title: "Python Development",
                  description: "Utilizing Python for backend development, data processing, and machine learning applications.",
                  delay: "delay-4"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`glass rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 reveal ${item.delay}`}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
