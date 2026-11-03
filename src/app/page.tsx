'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { 
  getProfile, 
  getProjects, 
  getSkills, 
  getExperiences 
} from '@/lib/data-service';
import { 
  initialProfileData, 
  initialProjects, 
  initialSkills, 
  initialExperiences 
} from '@/lib/mock-data';
import { ProfileData, ProjectItem, SkillItem, ExperienceItem } from '@/lib/types';

export default function HomePage() {
  const [profile, setProfile] = useState<ProfileData>(initialProfileData);
  const [projects, setProjects] = useState<ProjectItem[]>(initialProjects);
  const [skills, setSkills] = useState<SkillItem[]>(initialSkills);
  const [experiences, setExperiences] = useState<ExperienceItem[]>(initialExperiences);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function loadAllData() {
      try {
        const [prof, projs, sks, exps] = await Promise.all([
          getProfile(),
          getProjects(),
          getSkills(),
          getExperiences(),
        ]);
        setProfile(prof);
        setProjects(projs);
        setSkills(sks);
        setExperiences(exps);
      } catch (err) {
        console.warn('Data load fallback used:', err);
      } finally {
        setLoaded(true);
      }
    }
    loadAllData();
  }, []);

  return (
    <div className="relative min-h-screen text-[#2a1f14] dark:text-[#f5ece4] bg-[#f8f3ec] dark:bg-[#15110e] selection:bg-[#f5b942] selection:text-[#15110e]">
      {/* Background Interactive Particle Network */}
      <ParticleCanvas />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero profile={profile} />
        <Stats />
        <About profile={profile} />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Education />
        <ContactForm profile={profile} />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
