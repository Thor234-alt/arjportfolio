
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Flask", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "LLM Fine-tuning", level: 80 },
        { name: "Natural Language Processing", level: 85 },
        { name: "Neural Networks", level: 70 },
        { name: "Conversational AI", level: 90 },
        { name: "Data Analysis", level: 75 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 md:py-32 bg-accent/5 dark:bg-accent/5 transition-colors duration-500"
      ref={skillsRef}
    >
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical abilities, highlighting my proficiency
            across various programming languages, frameworks, and AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="glass rounded-2xl p-8 reveal delay-1 dark:bg-gray-800/30 dark:backdrop-blur-xl dark:border-white/10 hover:shadow-xl transition-all duration-500 hover:border-primary/30"
              style={{ 
                animationDelay: `${categoryIndex * 0.2}s`
              }}
            >
              <h3 className="text-xl font-semibold mb-8 pb-2 border-b dark:border-gray-700">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">{category.title}</span>
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="space-y-2"
                    style={{ 
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transition: `all 0.6s ease ${0.3 + skillIndex * 0.1}s`
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.level : 0} 
                      className="h-2 progress-bar-animated"
                      style={{
                        '--initial-value': '0%',
                        '--target-value': skill.level,
                        transition: `all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.5 + skillIndex * 0.1}s`
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 h-full reveal delay-3 dark:bg-gray-800/30 dark:backdrop-blur-xl dark:border-white/10 hover:shadow-xl transition-all duration-500 hover:border-primary/30">
            <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 py-2 relative hover:pl-8 transition-all duration-300">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-3 pulse-slow"></div>
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <p className="text-muted-foreground">University Name, Expected 2025</p>
              </div>
              <div className="border-l-2 border-muted pl-6 py-2 relative hover:pl-8 transition-all duration-300">
                <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-3 pulse-slow"></div>
                <h4 className="font-medium">High School Diploma</h4>
                <p className="text-muted-foreground">High School Name, 2021</p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 h-full reveal delay-4 dark:bg-gray-800/30 dark:backdrop-blur-xl dark:border-white/10 hover:shadow-xl transition-all duration-500 hover:border-primary/30">
            <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Certifications</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/5 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary font-medium">AI</span>
                </div>
                <div>
                  <h4 className="font-medium">AI and Machine Learning</h4>
                  <p className="text-muted-foreground">Stanford Online, 2023</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-accent/10 dark:bg-accent/5 group-hover:bg-accent/20 transition-colors duration-300">
                  <span className="text-accent font-medium">Dev</span>
                </div>
                <div>
                  <h4 className="font-medium">Full-Stack Web Development</h4>
                  <p className="text-muted-foreground">Udemy, 2022</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/5 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary font-medium">Py</span>
                </div>
                <div>
                  <h4 className="font-medium">Python for Data Science</h4>
                  <p className="text-muted-foreground">DataCamp, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
