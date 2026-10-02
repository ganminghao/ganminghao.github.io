import React, { useState, useEffect } from 'react';
import snowboardImg from '../images/snowboarding.jpg';
import guitarImg from '../images/guitar.JPG';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ThemeToggle from './components/ThemeToggle';

const WEBSITE_DATA = {
  vision: {
    id: "about",
    title: "About Me",
    headline: {
      main: "A Researcher interested in",
      highlight1: "AI Infra",
      and: "and",
      highlight2: "MLSys"
    },
    description: "Hello! I am Minghao Gan (甘明昊), a final-year undergraduate student at Sun Yat-sen University. I spent Spring 2026 as an exchange student at the University of Hong Kong, and I continue to work there as a Research Assistant in NAISS Lab. My research interests lie in developing low-latency Large Language Model (LLM) inference systems and optimizing scalable AI agent frameworks."
  },
  updates: {
    id: "updates",
    title: "What's New",
    items: [
      { date: "Oct 2026", content: "Awarded the National Scholarship again." },
      { date: "Aug 2026", content: "Continue working as a Research Assistant in NAISS Lab, HKU." },
      { date: "Mar 2026", content: "My first paper got accepted by OSDI'26, See you in Seattle!!!" },
      { date: "Jan 2026", content: "Awarded Fung Scholarship." },
      { date: "Jan 2026", content: "Joined NAISS Lab in HKU, directed by Prof. Shinan Liu." },
      { date: "Jan 2026", content: "Started my exchange student program in University of Hong Kong." },
      { date: "Dec 2025", content: "Completed a low latency LLM inference system based on activation sparsity. Paper summited to OSDI 2026" },
      { date: "Oct 2024", content: "Awarded the National Scholarship." },
      { date: "June 2024", content: "Joined InplusLab in Sun Yat-sen University, directed by Prof. Wuhui Chen" }
    ]
  },
  education: {
    id: "education",
    title: "Education",
    items: [
      {
        university: "The University of Hong Kong",
        period: "Jan 2026 — May 2026",
        degree: "Exchange Student",
        school: "School of Computing and Data Science",
        schoolLink: "https://www.cds.hku.hk/"
      },
      {
        university: "Sun Yat-sen University",
        period: "2023 — 2027 (Expected)",
        degree: "B.E. in Software Engineering",
        school: "School of Software Engineering",
        schoolLink: "https://sse.sysu.edu.cn/",
        courses: {
          label: "Relevant Courses",
          list: "Data Structures and Algorithms, Operating Systems, Computer Architecture, Distributed Systems, Deep Learning, Natural Language Processing"
        },
        standing: {
          label: "Academic Standing",
          value: ["GPA: 4.2 / 5.0", "Ranking: 10 / 231 (Top 5%)"]
        }
      }
    ]
  },
  scholarships: {
    id: "scholarships",
    title: "Scholarships & Awards",
    items: [
      {
        name: "National Scholarship for Undergraduates (twice)",
        issuer: "Ministry of Education of China",
        years: "2026, 2023"
      },
      {
        name: "First Prize, Outstanding Student Scholarship (twice)",
        issuer: "Sun Yat-sen University",
        years: "2026, 2023"
      },
      {
        name: "Fung Scholarship",
        issuer: "Fung Foundation & The University of Hong Kong",
        years: "2025"
      },
      {
        name: "Second Prize, Outstanding Student Scholarship",
        issuer: "Sun Yat-sen University",
        years: "2024"
      },
      {
        name: "Special Scholarship",
        issuer: "School of Software Engineering, Sun Yat-sen University",
        years: "2023"
      }
    ]
  },
  research: {
    id: "research",
    title: "Research Experience",
    items: [
      {
        lab: "NAISS Lab, The University of Hong Kong",
        role: "Research Assistant, advised by Prof. Shinan Liu",
        location: "Hong Kong",
        period: "Jan. 2026 \u2013 Present",
        bullets: [
          {
            title: "Mixed-precision KV cache serving for long-context inference.",
            text: "Existing mixed-precision KV cache systems rely on custom attention kernels and lag behind vLLM/SGLang. Building a serving backend with a slab-based memory pool and an attention wrapper that reuses native kernels per precision and merges outputs via log-sum-exp, deployed as a vLLM/SGLang plugin supporting multiple KV cache quantization algorithms."
          },
          {
            title: "Other explorations.",
            text: "Cross-architecture and positional KV cache reuse to cut redundant prefill in multi-turn agent interactions; scheduling that reclaims KV cache idle periods caused by tool-call latency."
          }
        ]
      },
      {
        lab: "InPlus Lab, Sun Yat-sen University",
        role: "Research Intern, advised by Prof. Wuhui Chen",
        location: "Guangzhou, China",
        period: "Nov. 2024 \u2013 Dec. 2025",
        bullets: [
          {
            title: "KAIROX: GPU\u2013CPU hybrid LLM inference (USENIX OSDI '26).",
            link: "https://github.com/ganminghao/SparkInfer",
            text: "Sparsity-based edge inference systems split neurons between GPU and CPU statically, leaving hardware underutilized. Co-designed bottleneck-aware neuron caching and an asynchronous hybrid pipeline with runtime neuron transfer, and implemented the sparse CUDA kernels, reaching up to 7.57\u00d7 speedup over llama.cpp and 6.35\u00d7 over sparse baselines."
          }
        ]
      }
    ]
  },
  publications: {
    id: "publications",
    title: "Publications",
    items: [
      {
        title: "KAIROX: Adaptive GPU–CPU Hybrid LLM Inference via Online Neuron Balancing",
        venue: "USENIX OSDI '26",
        authors: "Yapeng Jiang, Minghao Gan, Zicong Hong, Wuhui Chen, Junyuan Liang, Yue Yu, Meng Guo, Zibin Zheng"
      }
    ],
    emptyMessage: "More work in progress."
  },
  more: {
    id: "more",
    title: "More About Me",
    description: [
      "Beyond research, I am a sports lover and music enthusiast.",
      "I enjoy playing soccer ⚽, basketball 🏀, gyming🏋️‍♀️, and snowboarding 🏂. I'm co-founder of the Sun Yat-sen University Ski & Snowboard Association.",
      "I also love playing guitar 🎸. I'm the president of the Sun Yat-sen University Guitar Club on the Zhuhai campus, sometimes I will do small live sessions with friends."
    ],
    interestTags: ["⚽ Soccer", "🏀 Basketball", "🏂 Snowboarding", "🏋️‍♂️ Gym", "🎸 Guitar & Live Music"],
    images: [
      {
        url: snowboardImg,
        alt: "Snowboarding in Jilin Province",
        caption: "Snowboarding in Jilin Province"
      },
      {
        url: guitarImg,
        alt: "Guitar flash mob in the school canteen",
        caption: "Guitar flash mob in the school canteen"
      }
    ]
  },
  footer: {
    text: "Gan Minghao. Built with React & Tailwind CSS."
  }
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
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
      
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col lg:flex-row gap-12">
        <Sidebar />
        
        <div className="flex-1">
          <Section id={WEBSITE_DATA.vision.id} title={WEBSITE_DATA.vision.title}>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white leading-tight">
                {WEBSITE_DATA.vision.headline.main} <span className="text-blue-600 dark:text-blue-400">{WEBSITE_DATA.vision.headline.highlight1}</span> {WEBSITE_DATA.vision.headline.and} <span className="text-purple-600 dark:text-purple-400">{WEBSITE_DATA.vision.headline.highlight2}</span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {WEBSITE_DATA.vision.description}
              </p>
            </div>
          </Section>

          <Section id={WEBSITE_DATA.updates.id} title={WEBSITE_DATA.updates.title}>
            <div className="space-y-0">
              {WEBSITE_DATA.updates.items.map((update, i, arr) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 mt-2.5 group-hover:scale-150 transition-transform" />
                    {i !== arr.length - 1 && (
                      <div className="w-px h-full bg-black/5 dark:bg-white/10 mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 block">{update.date}</span>
                    <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {update.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id={WEBSITE_DATA.education.id} title={WEBSITE_DATA.education.title}>
            <div className="space-y-8">
              {WEBSITE_DATA.education.items.map((edu, i) => (
                <div key={i} className="group">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-black dark:text-white transition-colors">{edu.university}</h3>
                    <span className="text-sm font-semibold px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-gray-500">{edu.period}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{edu.degree}</p>
                  <p className="text-gray-500 dark:text-gray-500 mb-4">
                    {edu.schoolLink ? (
                      <a
                        href={edu.schoolLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline decoration-2 underline-offset-4"
                      >
                        {edu.school}
                      </a>
                    ) : (
                      edu.school
                    )}
                  </p>
                  {(edu.courses || edu.standing) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      {edu.courses && (
                        <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{edu.courses.label}</h4>
                          <p className="text-sm">{edu.courses.list}</p>
                        </div>
                      )}
                      {edu.standing && (
                        <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/5">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">{edu.standing.label}</h4>
                          {Array.isArray(edu.standing.value) ? (
                            edu.standing.value.map((line, idx) => (
                              <p key={idx} className="text-sm">{line}</p>
                            ))
                          ) : (
                            <p className="text-sm">{edu.standing.value}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          <Section id={WEBSITE_DATA.scholarships.id} title={WEBSITE_DATA.scholarships.title}>
            <div className="grid grid-cols-1 gap-3">
              {WEBSITE_DATA.scholarships.items.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.03] hover:bg-white/60 dark:hover:bg-white/[0.05] transition-colors">
                  <div>
                    <div className="font-bold text-black dark:text-white">{item.name}</div>
                    {item.issuer && (
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {item.issuer}
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-500">{item.years}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section id={WEBSITE_DATA.research.id} title={WEBSITE_DATA.research.title}>
            <div className="space-y-10">
              {WEBSITE_DATA.research.items.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-black/5 dark:border-white/5">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-black/20 dark:border-white/20" />
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-1 sm:gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        {item.lab}
                      </h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {item.role}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-right shrink-0">
                      {item.period && <div>{item.period}</div>}
                      {item.location && <div>{item.location}</div>}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed text-gray-600 dark:text-gray-400">
                        <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20 shrink-0" />
                        <p>
                          <span className="font-semibold text-black dark:text-white">
                            {b.link ? (
                              <a
                                href={b.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline decoration-2 underline-offset-4"
                              >
                                {b.title}
                              </a>
                            ) : (
                              b.title
                            )}
                          </span>{' '}
                          {b.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id={WEBSITE_DATA.publications.id}
            title={WEBSITE_DATA.publications.title}
          >
            {WEBSITE_DATA.publications.items && WEBSITE_DATA.publications.items.length > 0 ? (
              <div className="space-y-4 py-2">
                {WEBSITE_DATA.publications.items.map((pub, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.03]"
                  >
                    <div className="min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 font-semibold text-black dark:text-white">
                          <a href="/osdi26-paper1769.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4">
                            {pub.title}
                          </a>
                        </div>
                        {pub.venue && (
                          <div className="shrink-0 text-right font-bold text-black dark:text-white">
                            {pub.venue}
                          </div>
                        )}
                      </div>
                      {pub.authors && (
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {pub.authors}
                        </div>
                      )}
                      {pub.note && (
                        <div className="text-xs text-gray-500 dark:text-gray-500 italic mt-1">
                          {pub.note}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="italic text-gray-500 py-4">
                {WEBSITE_DATA.publications.emptyMessage}
              </div>
            )}
          </Section>

          <Section id={WEBSITE_DATA.more.id} title={WEBSITE_DATA.more.title}>
            <div className="space-y-10">
              <div className="space-y-4 w-full">
                {Array.isArray(WEBSITE_DATA.more.description) ? (
                  WEBSITE_DATA.more.description.map((para, idx) => (
                    <p
                      key={idx}
                      className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400"
                    >
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="w-full text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    {WEBSITE_DATA.more.description}
                  </p>
                )}
              </div>

              {WEBSITE_DATA.more.interestTags && WEBSITE_DATA.more.interestTags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {WEBSITE_DATA.more.interestTags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-sm text-gray-700 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WEBSITE_DATA.more.images.map((img, i) => (
                  <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900 border border-black/5 dark:border-white/5">
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <p className="text-white font-medium text-sm">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </main>

      <footer className="py-20 text-center text-gray-500 text-sm transition-colors duration-700">
        © {new Date().getFullYear()} {WEBSITE_DATA.footer.text}
      </footer>
    </div>
  );
}

export default App;
