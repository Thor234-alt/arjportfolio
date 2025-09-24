import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SED Intern",
      company: "Aulosa Mediatech Private Limited",
      duration: "Current",
      description: "Contributing to backend development projects and implementing AWS deployment services. Working on scalable cloud solutions and improving system architecture.",
      skills: ["Backend Development", "AWS", "Cloud Deployment", "System Architecture"]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Professional experience and contributions in software development and cloud technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="mb-8 transition-all duration-300 hover:shadow-lg border border-border hover:border-primary/20">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      <Building2 size={20} className="text-primary" />
                      {experience.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground mt-1">
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="font-medium">{experience.duration}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;