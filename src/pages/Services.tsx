import { Link } from "react-router";

const services = [
  {
    num: "01",
    category: "STRATEGIC THINKING",
    title: "Structured Problem Analysis",
    tagline: "When the problem is real but the path forward isn't clear.",
    description:
      "We work with leadership teams to define the actual problem — not the presenting symptom. Stakeholder interviews, hypothesis mapping, and constraint analysis to produce a clear decision framework.",
    deliverables: [
      "Problem definition document",
      "Stakeholder interview synthesis",
      "Hypothesis map with ranked priorities",
      "Decision framework and recommended path forward",
    ],
    howItWorks: [
      { step: "01", label: "Diagnose", desc: "Map the presenting symptoms to root causes through structured interviews and data review." },
      { step: "02", label: "Frame", desc: "Translate findings into a clear problem statement and decision criteria." },
      { step: "03", label: "Deliver", desc: "Hand off a decision framework the leadership team can act on immediately." },
    ],
    caseStudy: true,
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80",
    bg: "#FFFFFF",
    categoryBg: "#FFF5F0",
  },
  {
    num: "02",
    category: "AI ENABLEMENT",
    title: "AI Readiness & Integration",
    tagline: "When leadership knows AI is important but doesn't know where to start.",
    description:
      "We assess your organization's AI readiness and design an integration roadmap. Not a technology audit — a strategic alignment exercise that identifies where AI creates leverage, and where it doesn't.",
    deliverables: [
      "AI readiness assessment report",
      "Integration opportunity map",
      "Prioritized use-case roadmap",
      "Governance and risk framework",
    ],
    howItWorks: [
      { step: "01", label: "Assess", desc: "Evaluate current data infrastructure, team capability, and strategic fit for AI." },
      { step: "02", label: "Map", desc: "Identify the highest-leverage integration points across the organization." },
      { step: "03", label: "Roadmap", desc: "Produce a sequenced implementation plan with clear ownership and milestones." },
    ],
    caseStudy: true,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    bg: "#F7F8FA",
    categoryBg: "#FFF5F0",
  },
  {
    num: "03",
    category: "DECISION DESIGN",
    title: "Decision Architecture",
    tagline: "When decisions are slow, inconsistent, or politically charged.",
    description:
      "We design the decision-making infrastructure: frameworks, roles, and processes that turn difficult decisions into repeatable, defensible ones.",
    deliverables: [
      "Decision authority matrix (RACI)",
      "Criteria-weighted evaluation framework",
      "Escalation protocols and exception rules",
      "Implementation playbook for leadership teams",
    ],
    howItWorks: [
      { step: "01", label: "Observe", desc: "Shadow existing decision processes to identify where breakdowns occur." },
      { step: "02", label: "Design", desc: "Build the framework: roles, criteria, and process rules tailored to the context." },
      { step: "03", label: "Activate", desc: "Run decision simulations with the team before full deployment." },
    ],
    caseStudy: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    bg: "#FFFFFF",
    categoryBg: "#FFF5F0",
  },
  {
    num: "04",
    category: "EXECUTION",
    title: "From Insight to Execution",
    tagline: "When the research is done but nothing has changed.",
    description:
      "We bridge the gap between strategic insight and operational reality, translating research findings into actionable product decisions and organizational change.",
    deliverables: [
      "Implementation roadmap with sequenced initiatives",
      "Stakeholder alignment documentation",
      "Change management communication templates",
      "Progress measurement framework",
    ],
    howItWorks: [
      { step: "01", label: "Translate", desc: "Convert strategic findings into specific, ownable actions per team." },
      { step: "02", label: "Align", desc: "Facilitate stakeholder sessions to build implementation consensus." },
      { step: "03", label: "Track", desc: "Establish checkpoints and success metrics to sustain momentum." },
    ],
    caseStudy: false,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    bg: "#F7F8FA",
    categoryBg: "#FFF5F0",
  },
  {
    num: "05",
    category: "GOVERNANCE",
    title: "Responsible AI Implementation",
    tagline: "When speed creates risk and risk creates liability.",
    description:
      "We design governance frameworks for AI systems: bias assessment, transparency requirements, accountability structures, and ongoing monitoring protocols.",
    deliverables: [
      "AI ethics and bias assessment report",
      "Transparency and explainability requirements",
      "Accountability structure and ownership map",
      "Ongoing monitoring protocol and review cadence",
    ],
    howItWorks: [
      { step: "01", label: "Audit", desc: "Review existing AI systems or planned deployments for risk and blind spots." },
      { step: "02", label: "Design", desc: "Build accountability structures with clear escalation and review processes." },
      { step: "03", label: "Monitor", desc: "Establish ongoing monitoring cadence with defined triggers for intervention." },
    ],
    caseStudy: true,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    bg: "#FFFFFF",
    categoryBg: "#FFF5F0",
  },
];

export function Services() {
  return (
    <main>
      {/* Section 1: Header */}
      <section
        className="px-6 py-10 md:px-20 md:py-20"
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #F3F4F6",
        }}
      >
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4" style={{ maxWidth: "640px" }}>
            <p
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "11px",
                color: "#FF5C00",
                letterSpacing: "2px",
                fontWeight: 500,
              }}
            >
              SERVICES
            </p>
            <h1
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.1,
              }}
            >
              Five ways we make
              <br />
              complexity navigable.
            </h1>
            <p
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: "16px",
                color: "#666666",
                lineHeight: 1.6,
              }}
            >
              Each engagement is structured to deliver clarity, not just
              analysis. We work in defined phases with specific outputs at every
              stage — so you always know what you're getting and when.
            </p>
          </div>
          <div
            className="hidden md:flex flex-col items-end gap-1"
            style={{ flexShrink: 0 }}
          >
            <p
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "11px",
                color: "#888888",
                letterSpacing: "1px",
              }}
            >
              5 SERVICE AREAS
            </p>
            <p
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "13px",
                color: "#1A1A1A",
              }}
            >
              Strategy · AI · Decisions · Execution · Governance
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Service Flow Map */}
      <section
        className="px-6 py-10 md:px-20 md:py-16"
        style={{
          backgroundColor: "#1A1A1A",
          borderBottom: "1px solid #2E2E2E",
        }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#888888",
            letterSpacing: "2px",
            marginBottom: "32px",
          }}
        >
          HOW OUR SERVICES CONNECT
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
          {services.map((s, i) => (
            <div key={s.num} className="flex flex-row md:flex-col md:flex-1 items-center md:items-stretch">
              {/* Service node */}
              <div
                className="flex flex-col gap-2 rounded-xl flex-1 md:flex-none"
                style={{
                  backgroundColor: "#242424",
                  border: "1px solid #333333",
                  padding: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "10px",
                    color: "#FF5C00",
                    fontWeight: 600,
                  }}
                >
                  {s.num}
                </span>
                <span
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                  }}
                >
                  {s.title}
                </span>
                <span
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "10px",
                    color: "#FF5C00",
                    backgroundColor: "#2E1A10",
                    borderRadius: "9999px",
                    padding: "3px 10px",
                    alignSelf: "flex-start",
                  }}
                >
                  {s.category}
                </span>
              </div>
              {/* Connector arrow */}
              {i < services.length - 1 && (
                <div
                  className="flex items-center justify-center md:justify-center"
                  style={{
                    width: "32px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="hidden md:block"
                    style={{
                      fontFamily: "'Funnel Sans', sans-serif",
                      fontSize: "16px",
                      color: "#FF5C00",
                    }}
                  >
                    →
                  </span>
                  <span
                    className="md:hidden"
                    style={{
                      fontFamily: "'Funnel Sans', sans-serif",
                      fontSize: "16px",
                      color: "#FF5C00",
                    }}
                  >
                    ↓
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "13px",
            color: "#666666",
            lineHeight: 1.6,
            marginTop: "24px",
            maxWidth: "640px",
          }}
        >
          Most engagements start with Problem Analysis, then expand into AI or
          Decision work. Some clients engage all five. Each service has defined
          outputs — not open-ended retainers.
        </p>
      </section>

      {/* Section 3+: Services */}
      {services.map((s, idx) => (
        <section
          key={s.num}
          className="px-6 py-10 md:px-20 md:py-16"
          style={{
            backgroundColor: s.bg,
            borderBottom: "1px solid #F3F4F6",
          }}
        >
          {/* Service header */}
          <div className="flex flex-col gap-2 mb-8 md:mb-10">
            <div className="flex gap-3 items-center">
              <span
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "12px",
                  color: "#FF5C00",
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#FF5C00",
                  backgroundColor: s.categoryBg,
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  letterSpacing: "1px",
                }}
              >
                {s.category}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Newsreader', serif",
                fontSize: "clamp(22px, 2.5vw, 30px)",
                fontWeight: 700,
                color: "#1A1A1A",
                lineHeight: 1.2,
              }}
            >
              {s.title}
            </h2>
            <p
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "14px",
                color: "#FF5C00",
                fontStyle: "italic",
              }}
            >
              {s.tagline}
            </p>
          </div>

          {/* 2-col layout: left text + right dark card */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-10 md:items-start">
            {/* Left column: description + how it works */}
            <div className="flex flex-col gap-8 md:flex-1">
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "15px",
                  color: "#444444",
                  lineHeight: 1.7,
                }}
              >
                {s.description}
              </p>

              {/* How it works */}
              <div className="flex flex-col gap-1">
                <p
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "11px",
                    color: "#888888",
                    letterSpacing: "2px",
                    marginBottom: "16px",
                  }}
                >
                  HOW IT WORKS
                </p>
                <div className="flex flex-col gap-4">
                  {s.howItWorks.map((h, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "9999px",
                          backgroundColor: "#FF5C00",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Funnel Sans', sans-serif",
                            fontSize: "10px",
                            color: "#FFFFFF",
                            fontWeight: 600,
                          }}
                        >
                          {h.step}
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span
                          style={{
                            fontFamily: "'Funnel Sans', sans-serif",
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1A1A1A",
                          }}
                        >
                          {h.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontSize: "13px",
                            color: "#666666",
                            lineHeight: 1.6,
                          }}
                        >
                          {h.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case study link */}
              {s.caseStudy && (
                <Link
                  to="/work"
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "13px",
                    color: "#FF5C00",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontWeight: 500,
                  }}
                >
                  → See the case study
                </Link>
              )}
            </div>

            {/* Right column: dark deliverables card + image */}
            <div
              className="flex flex-col gap-0 md:w-[340px] md:shrink-0"
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              {/* Image */}
              <div
                style={{
                  height: "180px",
                  backgroundImage: `url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  flexShrink: 0,
                }}
              />
              {/* Deliverables */}
              <div
                style={{
                  backgroundColor: "#1A1A1A",
                  padding: "28px",
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "11px",
                    color: "#FF5C00",
                    letterSpacing: "2px",
                    marginBottom: "20px",
                  }}
                >
                  WHAT YOU GET
                </p>
                <div className="flex flex-col gap-3">
                  {s.deliverables.map((d, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span
                        style={{
                          color: "#FF5C00",
                          fontSize: "14px",
                          lineHeight: 1,
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontFamily: "'Geist', sans-serif",
                          fontSize: "13px",
                          color: "#d1d1d1",
                          lineHeight: 1.5,
                        }}
                      >
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Bar */}
      <section
        className="flex flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-20 md:py-20"
        style={{ backgroundColor: "#FF5C00" }}
      >
        <div className="flex flex-col gap-2">
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.2,
            }}
          >
            Not sure which service fits?
          </h2>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "15px",
              color: "#7A2800",
              lineHeight: 1.5,
            }}
          >
            Most engagements begin with a single conversation. We'll identify
            the right entry point together.
          </p>
        </div>
        <Link
          to="/contact"
          style={{
            display: "inline-block",
            backgroundColor: "#1A1A1A",
            color: "#ffffff",
            borderRadius: "9999px",
            padding: "14px 28px",
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
            alignSelf: "flex-start",
            flexShrink: 0,
          }}
        >
          Start a conversation
        </Link>
      </section>
    </main>
  );
}
