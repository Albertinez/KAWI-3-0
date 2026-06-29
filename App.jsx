import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Gauge,
  Leaf,
  Menu,
  Mountain,
  ShieldCheck,
  Sun,
  ThermometerSun,
  Waves,
  X,
} from "lucide-react";
import React, { useState } from "react";

const asset = (name) => `/kawi-assets/${name}`;

const metrics = [
  { value: "$15-30", label: "estimated cost per kWh", detail: "Up to 90% cheaper than lithium storage." },
  { value: "430.1 deg C", label: "prototype peak temperature", detail: "Safely below the 573 deg C quartz transition limit." },
  { value: "6.4x", label: "higher thermal diffusivity", detail: "CNT-enhanced sand moved heat faster than pure sand." },
  { value: "500+", label: "cycle durability target", detail: "Next milestone for industrial pilot readiness." },
];

const processSteps = [
  "Sieve sand",
  "Dry at 110 deg C",
  "Mix with carbon nanotubes",
  "Pack into an insulated vessel",
  "Heat to 430 deg C",
  "Store or discharge heat",
];

const advantages = [
  { icon: Mountain, title: "Abundant material", text: "Quartz sand is locally available, non-toxic, and inexpensive." },
  { icon: ShieldCheck, title: "Stable operation", text: "The system works below phase-transition temperatures with no complex chemistry." },
  { icon: Gauge, title: "Low degradation", text: "Thermal storage avoids the annual capacity losses common in electrochemical batteries." },
  { icon: Factory, title: "Industrial fit", text: "Designed for heat-heavy users such as tea, cement, dairy, meat, hospitality, schools, and hospitals." },
];

const applications = [
  {
    image: "image43.jpeg",
    icon: Leaf,
    title: "Tea and Agro-Processing",
    text: "Stored solar heat supports drying and steam needs when weather or grid power is unreliable.",
  },
  {
    image: "image58.jpeg",
    icon: Waves,
    title: "Water Heating",
    text: "Hotels, schools, and hospitals can charge during the day and draw heat at night for showers, kitchens, laundry, and sterilization.",
  },
  {
    image: "image61.jpeg",
    icon: ThermometerSun,
    title: "Air Heating",
    text: "Controlled heat for fish drying, fruit drying, greenhouses, poultry brooding, incubation, and crop drying.",
  },
  {
    image: "image63.jpeg",
    icon: Sun,
    title: "Concentrated Solar Power",
    text: "A safer, cheaper thermal store for dispatchable renewable power and industrial heating after sunset.",
  },
];

const comparison = [
  ["Cost per kWh", "$200-500", "$50-100", "$15-30"],
  ["Materials", "Lithium, cobalt", "Nitrates, corrosive salts", "Sand + CNT"],
  ["Safety", "Fire risk", "Freezing risk", "Non-toxic and stable"],
  ["Kenyan local supply", "No", "No", "Yes, abundant"],
];

const phases = [
  { phase: "Phase 1", title: "Prove", text: "Lab prototype, thermal validation, and material integrity." },
  { phase: "Phase 2", title: "Pilot", text: "12-18 months for a 100-1000 kg pilot with an industrial partner and 500+ cycle data." },
  { phase: "Phase 3", title: "Scale", text: "2-4 years toward modular commercial units with 1-10 ton sand capacity." },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <header className="nav-bar">
        <a className="brand-mark" href="#top" aria-label="KAWI home">
          <span>K</span>
          <div>
            <strong>KAWI</strong>
            <small>Metrics Technologies</small>
          </div>
        </a>
        <button className="nav-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "open" : ""} aria-label="Primary navigation">
          {["solution", "results", "applications", "market", "team"].map((item) => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Pilot with us
          </a>
        </nav>
      </header>

      <section className="hero-section" id="top" aria-label="KAWI sand battery">
        <div className="hero-media" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Sand battery for industrial heat</p>
          <h1>KAWI turns abundant sand into long-duration clean heat storage.</h1>
          <p className="hero-copy">
            Renewable power is intermittent. Industrial heat is expensive. KAWI stores excess solar or wind energy as heat in
            CNT-enhanced quartz sand, then discharges it when factories, farms, hospitals, schools, and grids need it most.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#solution">
              Explore the technology <ArrowRight size={18} />
            </a>
            <a className="secondary-action" href="#results">
              View prototype results
            </a>
          </div>
        </div>
        <div className="hero-proof" aria-label="Prototype highlights">
          {metrics.slice(0, 3).map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="problem-band">
        <div className="section-inner problem-grid">
          <div>
            <p className="eyebrow">The storage problem</p>
            <h2>Industrial heat still runs on fossil fuels because storage is too expensive.</h2>
          </div>
          <div className="problem-stat">
            <strong>74%</strong>
            <span>of industrial heat still comes from fossil fuels.</span>
          </div>
          <p>
            Batteries are powerful, but they are costly for heat, flammable at scale, and degrade over time. KAWI focuses on
            the direct need: store heat cheaply, safely, and locally.
          </p>
        </div>
      </section>

      <section className="section light" id="solution">
        <div className="section-inner split-layout">
          <div className="section-copy">
            <p className="eyebrow">The solution</p>
            <h2>Meet the sand battery: simple material, serious thermal performance.</h2>
            <p>
              The system uses quartz sand enhanced with carbon nanotubes, sealed in an insulated vessel, heated below 450 deg C,
              and discharged through heat exchangers when hot air, hot water, steam, or process heat is required.
            </p>
            <div className="check-list">
              {["No moving parts", "No toxic chemistry", "No phase-transition damage", "Locally available sand"].map((item) => (
                <span key={item}>
                  <CheckCircle2 size={18} /> {item}
                </span>
              ))}
            </div>
          </div>
          <div className="solution-visual">
            <img src={asset("image16.jpeg")} alt="Quartz sand held in a hand" />
            <img src={asset("image9.jpeg")} alt="KAWI prototype vessel" />
          </div>
        </div>
      </section>

      <section className="section dark" id="results">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">What we achieved</p>
            <h2>Built, tested, and ready for durability validation.</h2>
          </div>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
          <div className="evidence-grid">
            <img src={asset("image29.jpeg")} alt="Temperature measurement during prototype testing" />
            <img src={asset("image30.png")} alt="Charging cycle temperature graph" />
            <img src={asset("image31.png")} alt="Discharge cycle temperature graph" />
          </div>
        </div>
      </section>

      <section className="section light process-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>A six-step thermal storage process with industrial simplicity.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article key={step} className="process-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section advantage-band">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Why sand wins</p>
            <h2>Cheaper than lithium. Safer than molten salt. Better aligned with Kenya.</h2>
          </div>
          <div className="advantage-grid">
            {advantages.map(({ icon: Icon, title, text }) => (
              <article key={title} className="advantage-card">
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="comparison-table" role="table" aria-label="Energy storage comparison">
            <div className="table-row table-head" role="row">
              <span>Measure</span>
              <span>Lithium Batteries</span>
              <span>Molten Salt</span>
              <span>Quartz Sand</span>
            </div>
            {comparison.map((row) => (
              <div className="table-row" role="row" key={row[0]}>
                {row.map((cell) => (
                  <span role="cell" key={cell}>
                    {cell}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light" id="applications">
        <div className="section-inner">
          <div className="section-heading wide">
            <p className="eyebrow">Practical applications</p>
            <h2>From industrial heat to rural livelihoods.</h2>
            <p>
              KAWI supports heat use cases that already exist today, replacing diesel, kerosene, charcoal, and expensive
              direct electric heating with stored renewable heat.
            </p>
          </div>
          <div className="application-grid">
            {applications.map(({ image, icon: Icon, title, text }) => (
              <article key={title} className="application-card">
                <img src={asset(image)} alt="" />
                <div>
                  <Icon size={22} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="market-section" id="market">
        <div className="section-inner market-grid">
          <div>
            <p className="eyebrow">Go-to-market pathways</p>
            <h2>Start where heat demand is constant and fuel costs hurt.</h2>
            <p>
              KAWI is seeking industrial pilot partners in cement, tea, agro-processing, manufacturing, concentrated solar,
              and wind-linked power systems.
            </p>
          </div>
          <div className="phase-list">
            {phases.map((item) => (
              <article key={item.phase}>
                <span>{item.phase}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section light team-section" id="team">
        <div className="section-inner team-grid">
          <div>
            <p className="eyebrow">The team</p>
            <h2>Built by operators and technical builders focused on Kenya's heat economy.</h2>
          </div>
          <div className="team-card">
            <img src={asset("image73.jpeg")} alt="Nester Isogol" />
            <div>
              <span>Operations Lead</span>
              <h3>Nester Isogol</h3>
            </div>
          </div>
          <div className="team-card">
            <img src={asset("image74.jpeg")} alt="Francis Mulwa presenting" />
            <div>
              <span>Technical Lead</span>
              <h3>Francis Mulwa</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-inner contact-grid">
          <div>
            <p className="eyebrow">Pilot partners wanted</p>
            <h2>Bring KAWI into a real heat environment.</h2>
            <p>
              The prototype has reached 430.1 deg C and validated the thermal model. The next step is a larger pilot with
              cycle durability data and an industrial site.
            </p>
          </div>
          <a className="primary-action" href="mailto:hello@kawimetrics.com">
            Start a pilot conversation <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
