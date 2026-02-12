import React, { useState, useEffect } from 'react';
import { Beaker } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Navbar theme={theme} />
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col lg:flex-row gap-12">
        <Sidebar />
        
        <div className="flex-1">
          <Section id="education" title="Education">
            <div className="space-y-8">
              <div className="group">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="text-xl font-bold text-black dark:text-white transition-colors">Sun Yat-sen University</h3>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-gray-500">2022 — 2026 (Expected)</span>
                </div>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">B.S. in Software Engineering</p>
                <p className="text-gray-500 dark:text-gray-500 mb-4">School of Software Engineering</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Relevant Courses</h4>
                    <p className="text-sm">Data Structures, Algorithms, Operating Systems, Distributed Systems, Computer Architecture</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Academic Standing</h4>
                    <p className="text-sm">GPA: 3.x / 4.0 (Top x%)</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="scholarships" title="Scholarships">
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: "National Scholarship", rank: "Top 1%", years: "2023, 2024" },
                { name: "Outstanding Student Award", rank: "Top 5%", years: "2023" },
                { name: "First-class Academic Scholarship", rank: "Top 10%", years: "2022" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.03] hover:bg-white/60 dark:hover:bg-white/[0.05] transition-colors">
                  <div>
                    <span className="font-bold text-black dark:text-white">{item.name}</span>
                    <span className="ml-3 text-xs font-medium text-gray-400 uppercase tracking-tight">{item.rank}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-500">{item.years}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section id="research" title="Research Experience">
            <div className="space-y-10">
              <div className="relative pl-6 border-l-2 border-black/5 dark:border-white/5">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-black/20 dark:border-white/20" />
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">MLSys & LLM Inference Acceleration</h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Focusing on optimizing large language model inference through advanced scheduling techniques and hardware-aware optimizations. 
                  Exploring <span className="text-black dark:text-white font-medium">KV-cache management</span> and <span className="text-black dark:text-white font-medium">speculative decoding</span> to reduce latency in high-throughput environments.
                </p>
              </div>
              <div className="relative pl-6 border-l-2 border-black/5 dark:border-white/5">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-black/20 dark:border-white/20" />
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Multi-agent Systems</h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  Investigating coordination mechanisms and communication protocols in decentralized multi-agent reinforcement learning (MARL). 
                  Developed a <span className="text-black dark:text-white font-medium">scalable framework</span> for agent cooperation in complex environments.
                </p>
              </div>
            </div>
          </Section>

          <Section id="publications" title="Publications">
            <div className="italic text-gray-500 py-4">
              Coming soon. Research papers in progress for top-tier MLSys and AI conferences.
            </div>
          </Section>

          <Section id="more" title="More About Me">
            <div className="space-y-10">
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Beyond coding and research, I'm an avid photographer capturing the minimalism in urban architecture. 
                I enjoy long-distance running and exploring the intersection of technology and art.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900 border border-black/5 dark:border-white/5">
                  <img src="https://images.unsplash.com/photo-1502982722222-8858204b4d6c?auto=format&fit=crop&q=80&w=800" alt="Minimalist Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white font-medium text-sm">Urban Minimalism</p>
                  </div>
                </div>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900 border border-black/5 dark:border-white/5">
                  <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800" alt="Photography Hobby" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <p className="text-white font-medium text-sm">Mountain Trails</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 rounded-[2rem] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/[0.03] dark:to-white/[0.01] border border-black/5 dark:border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Beaker className="w-24 h-24" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-black dark:text-white">"Ambitious Goals"</h4>
                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed relative z-10">
                  "To build systems that bridge the gap between human intelligence and machine efficiency, 
                  and to contribute to open-source communities that shape the future of computing."
                </p>
              </div>
            </div>
          </Section>
        </div>
      </main>

      <footer className="py-20 text-center text-gray-500 text-sm transition-colors duration-700">
        © {new Date().getFullYear()} Software Engineer. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
