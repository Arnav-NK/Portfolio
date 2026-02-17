import React from "react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [visible, setVisible] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, i]);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const experiences = [
    {
      role: "LFX Mentee",
      org: "MagmaCore — CNCF Open Source",
      duration: "Jan 2026 – Present",
      type: "Open Source · Remote",
      badge: "LFX 2026",
      highlights: [
        {
          icon: "⚙️",
          title: "YAML Configuration Engineering",
          desc: "Audited and restructured core YAML configuration files across MagmaCore's infrastructure layer, improving readability, schema compliance, and CI pipeline compatibility.",
        },
        {
          icon: "🐛",
          title: "Bug Discovery & Reporting",
          desc: "Investigated runtime anomalies and edge cases within MagmaCore's open-source codebase. Documented reproducible bugs with detailed issue reports, root-cause analysis, and proposed fixes submitted to maintainers.",
        },
        {
          icon: "🔍",
          title: "Codebase Exploration & Onboarding",
          desc: "Navigated a large-scale CNCF-hosted repository, built a deep understanding of the project's architecture, and contributed to developer onboarding documentation to reduce the learning curve for future contributors.",
        },
        {
          icon: "🤝",
          title: "Mentorship & Collaboration",
          desc: "Worked closely with senior maintainers and LFX mentors in a structured open-source mentorship program, participating in code reviews, async communication, and iterative feedback cycles.",
        },
      ],
      chips: ["YAML", "Open Source", "CNCF", "MagmaCore", "Bug", "Git", "Linux", "Docker", "K8s"],
    },
    {
      role: "Qiskit Advocate & Tech Consultant",
      org: "IBM Quantum",
      duration: "sept 2025 – dec 2025",
      type: "Tech Advocate · Remote",
      badge: "IBM Quantum",
      highlights: [
        {
          icon: "⚛️",
          title: "Quantum Circuit Design",
          desc: "Designed and implemented quantum circuits using Qiskit, exploring superposition, entanglement, and interference to solve real-world computational problems on IBM's quantum hardware.",
        },
        {
          icon: "🐍",
          title: "Python & Qiskit Development",
          desc: "Built end-to-end quantum programs in Python leveraging Qiskit's SDK — from circuit construction and transpilation to executing jobs on IBM Quantum backends and analyzing results.",
        },
        {
          icon: "🎓",
          title: "Quantum Education & Advocacy",
          desc: "Delivered workshops, talks, and tutorials introducing quantum computing concepts to developers and students, simplifying qubits, quantum gates, and variational algorithms.",
        },
        {
          icon: "🔬",
          title: "Quantum Physics Consulting",
          desc: "Advised teams on quantum algorithms (Grover's, Shor's, QAOA) and their practical applications, bridging theoretical quantum physics with hands-on implementation on near-term quantum devices.",
        },
      ],
      chips: ["Qiskit", "Python", "Quantum Computing", "IBM Quantum", "Linear Algebra", "Quantum Gates", "QAOA", "Research"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap');

        #section2 {
          z-index: 0;
          background: #000000;
          min-height: 100vh;
          padding: 90px 24px 120px;
          margin-bottom: 80px;
           font-family: 'Arial', sans-serif;
          position: relative;
          overflow: hidden;
        }

        #section2::before {
          content: '';
          position: absolute;
          top: -180px;
          left: -180px;
          width: 580px;
          height: 580px;
          background: radial-gradient(circle, rgba(201, 169, 110, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        #section2::after {
          content: '';
          position: absolute;
          bottom: -180px;
          right: -80px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(210, 180, 140, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .exp-inner {
          max-width: 860px;
          margin: 0 auto;
          position: relative;
          z-index: 0;
        }

        .exp-heading {
          font-size: 80px;
       font-family: 'Times New Roman', Times, serif;
          color: antiquewhite;
          text-align: center;
          margin-top: 15%;
          padding-top: 7%;
          top: 50px;
          position: relative;
          font-weight: normal;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin-bottom: 64px;
        }


        /* --- Timeline --- */
        .timeline {
          position: relative;
          padding-left: 32px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background: linear-gradient(to bottom, #c9a96e55, #a07840aa, transparent);
          border-radius: 2px;
        }

        /* --- Card --- */
        .exp-card {
          position: relative;
          background: rgba(245, 222, 179, 0.03);
          border: 1px solid rgba(201, 169, 110, 0.18);
          border-radius: 16px;
          padding: 36px 36px 32px;
          margin-bottom: 40px;
          backdrop-filter: blur(6px);
          transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
          opacity: 0;
          transform: translateY(32px);
        }

        .exp-card.visible {
          animation: riseIn 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @keyframes riseIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .exp-card:hover {
          border-color: rgba(201, 169, 110, 0.42);
          box-shadow: 0 0 48px rgba(201, 169, 110, 0.07), 0 8px 32px rgba(0,0,0,0.4);
          transform: translateY(-3px);
        }

        /* dot on timeline */
        .exp-card::before {
          content: '';
          position: absolute;
          left: -39px;
          top: 38px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #c9a96e;
          box-shadow: 0 0 12px #c9a96e88;
          border: 2px solid #000000;
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 8px;
        }

        .card-role {
          font-size: 1.5rem;
          font-weight: bold;
          color: antiquewhite;
          letter-spacing: 0.01em;
          font-family: 'Arial', sans-serif;
        }

        .card-badge {
          font-family: 'DM Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #c9a96e;
          background: rgba(201, 169, 110, 0.1);
          border: 1px solid rgba(201, 169, 110, 0.28);
          border-radius: 50px;
          padding: 4px 14px;
          white-space: nowrap;
          align-self: center;
        }

        .card-org {
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          font-weight: 500;
          color: #b8945a;
          margin-bottom: 4px;
          letter-spacing: 0.03em;
        }

        .card-meta {
          font-family: 'DM Mono', monospace;
          font-size: 11.5px;
          color: #7a6242;
          letter-spacing: 0.04em;
          margin-bottom: 28px;
        }

        .card-meta span {
          margin-right: 14px;
        }

        /* highlights grid */
        .highlights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 600px) {
          .highlights {
            grid-template-columns: 1fr;
          }
          .exp-card {
            padding: 26px 20px 22px;
          }
          .exp-heading {
            font-size: 52px;
          }
        }

        .highlight-item {
          background: rgba(245, 222, 179, 0.025);
          border: 1px solid rgba(201, 169, 110, 0.1);
          border-radius: 12px;
          padding: 18px 18px 16px;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .highlight-item:hover {
          background: rgba(201, 169, 110, 0.06);
          border-color: rgba(201, 169, 110, 0.24);
        }

        .hl-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .hl-icon {
          font-size: 17px;
          line-height: 1;
        }

        .hl-title {
           font-family: 'Arial', sans-serif;
          font-size: 0.88rem;
          font-weight: bold;
          color: antiquewhite;
          letter-spacing: 0.01em;
        }

        .hl-desc {
          font-family: 'DM Mono', monospace;
          font-size: 11.5px;
          line-height: 1.75;
          color: #7a6651;
        }

        /* --- Skills chips --- */
        .skills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid rgba(201, 169, 110, 0.1);
        }

        .skill-chip {
          font-family: 'DM Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #a07840;
          background: rgba(201, 169, 110, 0.07);
          border: 1px solid rgba(201, 169, 110, 0.16);
          border-radius: 6px;
          padding: 4px 11px;
          transition: background 0.2s, color 0.2s;
        }

        .skill-chip:hover {
          background: rgba(201, 169, 110, 0.16);
          color: #c9a96e;
        }
      `}</style>

      <section className="exp-section" id="section3">
        <div className="exp-inner">
          <h2 className="exp-heading">
            My <span>Experience</span>
          </h2>

          <div className="timeline">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`exp-card${visible.includes(i) ? " visible" : ""}`}
                ref={(el) => (cardRefs.current[i] = el)}
                style={{ animationDelay: `${i * 0.18}s` }}
              >
                <div className="card-top">
                  <div className="card-role">{exp.role}</div>
                  <div className="card-badge">{exp.badge}</div>
                </div>

                <div className="card-org">{exp.org}</div>
                <div className="card-meta">
                  <span>📅 {exp.duration}</span>
                  <span>🌐 {exp.type}</span>
                </div>

                <div className="highlights">
                  {exp.highlights.map((h, j) => (
                    <div className="highlight-item" key={j}>
                      <div className="hl-top">
                        <span className="hl-icon">{h.icon}</span>
                        <span className="hl-title">{h.title}</span>
                      </div>
                      <p className="hl-desc">{h.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="skills-row">
                  {exp.chips.map((s) => (
                    <span className="skill-chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;