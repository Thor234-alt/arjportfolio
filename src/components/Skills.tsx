
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { Figma } from 'lucide-react';

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
        { name: "Figma", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "LLM Fine-tuning", level: 80 },
        { name: "Natural Language Processing", level: 85 },
        { name: "Data Analysis", level: 75 },
        { name: "Retrieval Augmented Generation", level: 80 },
        { name: "Prompt Engineering", level: 90 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 md:py-32 bg-accent/30 dark:bg-accent/5"
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
            <div key={categoryIndex} className="glass rounded-2xl p-8 reveal delay-1 dark:bg-gray-800/30 dark:backdrop-blur-xl dark:border-white/10">
              <h3 className="text-xl font-semibold mb-8 pb-2 border-b dark:border-gray-700">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isVisible ? skill.level : 0} 
                      className="h-2 transition-all duration-1000 ease-out delay-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 h-full reveal delay-3 dark:bg-gray-800/30 dark:backdrop-blur-xl dark:border-white/10">
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 py-2 relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-3"></div>
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <p className="text-muted-foreground">University Name, Expected 2025</p>
              </div>
              <div className="border-l-2 border-muted pl-6 py-2 relative">
                <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-3"></div>
                <h4 className="font-medium">High School Diploma</h4>
                <p className="text-muted-foreground">High School Name, 2021</p>
              </div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 h-full reveal delay-4 dark:bg-gray-800/30 dark:backdrop-blur-xl dark:border-white/10">
            <h3 className="text-xl font-semibold mb-6">Certifications</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/5">
                  <span className="text-primary font-medium">AI</span>
                </div>
                <div>
                  <h4 className="font-medium">AI and Machine Learning</h4>
                  <p className="text-muted-foreground">Stanford Online, 2023</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/5">
                  <span className="text-primary font-medium">Dev</span>
                </div>
                <div>
                  <h4 className="font-medium">Full-Stack Web Development</h4>
                  <p className="text-muted-foreground">Udemy, 2022</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/5">
                  <Figma size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">UI/UX Design with Figma</h4>
                  <p className="text-muted-foreground">DesignLab, 2023</p>
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
