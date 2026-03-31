import { Link } from "react-router";

const principles = [
  {
    num: "01",
    text: "Every engagement begins with questions, not proposals.",
  },
  {
    num: "02",
    text: "Complexity is not simplified — it is structured.",
  },
  {
    num: "03",
    text: "We distinguish between the stated problem and the actual problem.",
  },
  {
    num: "04",
    text: "Speed of execution follows clarity of thinking.",
  },
  {
    num: "05",
    text: "Ethics is embedded at synthesis, not added at the end.",
  },
];

const oasaSections = [
  {
    num: "01",
    title: "Observe",
    icon: "◎",
    subtitle: "See what's actually there.",
    description:
      "Before forming any hypothesis, we map the actual landscape. Primary sources, not secondary summaries. Data patterns, not anecdotal examples. We observe without agenda.",
    practice: {
      what: "We embed with the team to record what is actually happening — not what people say is happening.",
      who: "Analysts, stakeholders, process owners, and decision-makers at every level.",
      output: "A structured landscape map: data flows, decision nodes, and system dependencies.",
      duration: "1–2 weeks depending on organizational complexity.",
    },
    methods: ["Stakeholder interviews", "Data audits", "System mapping", "Process observation"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    num: "02",
    title: "Analyze",
    icon: "⬡",
    subtitle: "Break down complexity into structured insights.",
    description:
      "Most complex problems are not single problems — they are clusters of interdependent conditions. We map these dependencies before we name the challenge, because the wrong diagnosis produces the wrong response.",
    practice: {
      what: "We decompose the problem space into its constituent parts and map how they interact.",
      who: "Strategy leads, data analysts, and domain experts from the client organization.",
      output: "Root cause analysis, dependency map, and a ranked hypothesis set.",
      duration: "1–3 weeks. Shortened when Observe data is clean.",
    },
    methods: ["Root cause analysis", "Dependency mapping", "Scenario modeling", "Structured decomposition"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    num: "03",
    title: "Synthesize",
    icon: "◈",
    subtitle: "Connect insights into strategic direction.",
    description:
      "Synthesis is where analysis becomes useful. We draw lines between what we have observed, what the data reveals, and what a credible path forward looks like — grounded in what the organization can actually execute.",
    practice: {
      what: "We translate findings into a strategic frame: options, trade-offs, and a recommended direction.",
      who: "Senior strategists and AI capability leads, with executive review sessions.",
      output: "Strategic framing document, options analysis, and a decision framework.",
      duration: "1–2 weeks. Output is the primary deliverable of each engagement.",
    },
    methods: ["Strategic framing", "Options development", "AI capability assessment", "Decision framework design"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    num: "04",
    title: "Act",
    icon: "▶",
    subtitle: "Enable execution with clarity and alignment.",
    description:
      "A strategy that cannot be acted upon is a document. We stay through the transition from insight to implementation — ensuring the thinking holds when it meets reality.",
    practice: {
      what: "We convert the decision framework into an implementation plan with measurable checkpoints.",
      who: "Implementation leads, change managers, and the full leadership team.",
      output: "Sequenced implementation roadmap, team alignment documentation, and progress review protocol.",
      duration: "Ongoing support model — typically 4–8 weeks of active engagement.",
    },
    methods: ["Implementation planning", "Team alignment", "AI system deployment", "Decision framework activation"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];

export function Approach() {
  return (
    <main>
      {/* SECTION 1: Header */}
      <section
        className="px-6 py-10 md:px-20 md:py-20"
        style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #F3F4F6" }}
      >
        <div className="flex flex-col gap-5" style={{ maxWidth: "720px" }}>
          <p
            style={{
              fontFamily: "'Funnel Sans', sans-serif",
              fontSize: "11px",
              color: "#FF5C00",
              letterSpacing: "2px",
              fontWeight: 500,
            }}
          >
            HOW WE THINK
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
            Four disciplines that separate structured reasoning from reactive decision-making.
          </h1>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              color: "#666666",
              lineHeight: 1.6,
            }}
          >
            Where most thinking stops, we begin. The OASA framework is how we move from
            observation to strategic action — without skipping the hard middle.
          </p>
        </div>
      </section>

      {/* SECTION 2: OASA Progress Indicator */}
      <section
        className="px-6 py-10 md:px-20 md:py-16"
        style={{ backgroundColor: "#1A1A1A", borderBottom: "1px solid #2E2E2E" }}
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
          THE OASA FRAMEWORK
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-0">
          {oasaSections.map((s, i) => (
            <div key={s.num} className="flex flex-row md:flex-col md:flex-1 items-center gap-0">
              {/* Phase node */}
              <div
                className="flex flex-col gap-3 flex-1 md:flex-none"
                style={{
                  backgroundColor: "#242424",
                  border: "1px solid #333333",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: "'Funnel Sans', sans-serif",
                      fontSize: "20px",
                      color: "#FF5C00",
                      lineHeight: 1,
                    }}
                  >
                    {s.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Funnel Sans', sans-serif",
                      fontSize: "10px",
                      color: "#666666",
                    }}
                  >
                    {s.num}
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "'Newsreader', serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  {s.title}
                </span>
                <span
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontSize: "12px",
                    color: "#888888",
                    lineHeight: 1.4,
                  }}
                >
                  {s.subtitle}
                </span>
              </div>

              {/* Arrow connector */}
              {i < oasaSections.length - 1 && (
                <div
                  className="flex items-center justify-center"
                  style={{ width: "40px", height: "40px", flexShrink: 0 }}
                >
                  <span
                    className="hidden md:block"
                    style={{ color: "#FF5C00", fontSize: "18px" }}
                  >
                    →
                  </span>
                  <span
                    className="md:hidden"
                    style={{ color: "#FF5C00", fontSize: "18px" }}
                  >
                    ↓
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Governing Principles — Bold visual treatment */}
      <section
        className="px-6 py-10 md:px-20 md:py-16"
        style={{ backgroundColor: "#F7F8FA", borderBottom: "1px solid #F3F4F6" }}
      >
        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: "11px",
            color: "#888888",
            letterSpacing: "2px",
            marginBottom: "40px",
          }}
        >
          GOVERNING PRINCIPLES
        </p>
        <div className="flex flex-col gap-0">
          {principles.map((p, i) => (
            <div
              key={i}
              className="flex flex-row gap-6 items-start py-8"
              style={{
                borderBottom:
                  i < principles.length - 1 ? "1px solid #E8E9EB" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: "clamp(48px, 5vw, 64px)",
                  fontWeight: 700,
                  color: "#FF5C00",
                  lineHeight: 0.9,
                  flexShrink: 0,
                  opacity: 0.85,
                  width: "80px",
                }}
              >
                {p.num}
              </span>
              <p
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: "clamp(18px, 2vw, 22px)",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  lineHeight: 1.4,
                  paddingTop: "8px",
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTIONS 4–7: OASA phases */}
      {oasaSections.map((s, idx) => (
        <section
          key={s.num}
          className="px-6 py-10 md:px-20 md:py-16"
          style={{
            backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#FAFAFA",
            borderBottom: "1px solid #F3F4F6",
          }}
        >
          {/* Phase header */}
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <span
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "32px",
                color: "#FF5C00",
                lineHeight: 1,
              }}
            >
              {s.icon}
            </span>
            <div>
              <span
                style={{
                  fontFamily: "'Funnel Sans', sans-serif",
                  fontSize: "11px",
                  color: "#888888",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {s.num}
              </span>
              <h2
                style={{
                  fontFamily: "'Newsreader', serif",
                  fontSize: "clamp(24px, 2.5vw, 32px)",
                  fontWeight: 700,
                  color: "#1A1A1A",
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:gap-12 md:items-start">
            {/* Left: text + methods */}
            <div className="flex flex-col gap-6 md:flex-1">
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  lineHeight: 1.5,
                }}
              >
                {s.subtitle}
              </p>
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontSize: "15px",
                  color: "#555555",
                  lineHeight: 1.7,
                }}
              >
                {s.description}
              </p>

              {/* Methods used */}
              <div>
                <p
                  style={{
                    fontFamily: "'Funnel Sans', sans-serif",
                    fontSize: "11px",
                    color: "#888888",
                    letterSpacing: "2px",
                    marginBottom: "12px",
                  }}
                >
                  METHODS USED
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.methods.map((m, i) => (
                    <span
                      key={i}
                      style={{
                        fontFamily: "'Funnel Sans', sans-serif",
                        fontSize: "12px",
                        color: "#1A1A1A",
                        backgroundColor: "#F3F4F6",
                        borderRadius: "9999px",
                        padding: "5px 14px",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: expanded IN PRACTICE card + image */}
            <div
              className="flex flex-col gap-0 md:w-[380px] md:shrink-0"
              style={{ borderRadius: "12px", overflow: "hidden" }}
            >
              {/* Image */}
              <div
                style={{
                  height: "160px",
                  backgroundImage: `url('${s.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* IN PRACTICE card */}
              <div
                style={{
                  backgroundColor: "#1A1A1A",
                  padding: "28px",
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
                  IN PRACTICE
                </p>
                <div className="flex flex-col gap-5">
                  {/* What happens */}
                  <div className="flex flex-col gap-1">
                    <p
                      style={{
                        fontFamily: "'Funnel Sans', sans-serif",
                        fontSize: "10px",
                        color: "#666666",
                        letterSpacing: "1px",
                      }}
                    >
                      WHAT HAPPENS
                    </p>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontSize: "13px",
                        color: "#d1d1d1",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.practice.what}
                    </p>
                  </div>
                  <div
                    style={{ height: "1px", backgroundColor: "#2E2E2E" }}
                  />
                  {/* Who's involved */}
                  <div className="flex flex-col gap-1">
                    <p
                      style={{
                        fontFamily: "'Funnel Sans', sans-serif",
                        fontSize: "10px",
                        color: "#666666",
                        letterSpacing: "1px",
                      }}
                    >
                      WHO'S INVOLVED
                    </p>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontSize: "13px",
                        color: "#d1d1d1",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.practice.who}
                    </p>
                  </div>
                  <div
                    style={{ height: "1px", backgroundColor: "#2E2E2E" }}
                  />
                  {/* Output */}
                  <div className="flex flex-col gap-1">
                    <p
                      style={{
                        fontFamily: "'Funnel Sans', sans-serif",
                        fontSize: "10px",
                        color: "#666666",
                        letterSpacing: "1px",
                      }}
                    >
                      THE OUTPUT
                    </p>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontSize: "13px",
                        color: "#d1d1d1",
                        lineHeight: 1.6,
                      }}
                    >
                      {s.practice.output}
                    </p>
                  </div>
                  <div
                    style={{ height: "1px", backgroundColor: "#2E2E2E" }}
                  />
                  {/* Duration */}
                  <div className="flex flex-col gap-1">
                    <p
                      style={{
                        fontFamily: "'Funnel Sans', sans-serif",
                        fontSize: "10px",
                        color: "#666666",
                        letterSpacing: "1px",
                      }}
                    >
                      TYPICAL DURATION
                    </p>
                    <p
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontSize: "13px",
                        color: "#FF5C00",
                        lineHeight: 1.6,
                        fontWeight: 500,
                      }}
                    >
                      {s.practice.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* SECTION: CTA */}
      <section
        className="px-6 py-16 md:px-20 md:py-20"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="flex flex-col items-center gap-5 text-center">
          <h2
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            Want to see the approach applied?
          </h2>
          <p
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "16px",
              color: "#888888",
              lineHeight: 1.6,
              maxWidth: "560px",
            }}
          >
            Read through a case study to see how Observe → Analyze → Synthesize
            → Act plays out on a real engagement.
          </p>
          <div className="flex flex-col gap-3 mt-2 md:flex-row">
            <Link
              to="/work"
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                backgroundColor: "#FF5C00",
                color: "#FFFFFF",
                borderRadius: "9999px",
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              View case study
            </Link>
            <Link
              to="/contact"
              style={{
                fontFamily: "'Funnel Sans', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                backgroundColor: "transparent",
                border: "1px solid #333333",
                color: "#FFFFFF",
                borderRadius: "9999px",
                padding: "12px 24px",
                textDecoration: "none",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
