"use client";

import { useState } from "react";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  LayoutDashboard,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const problems = [
  [
    "Scattered information",
    "Attendance records, employee details, and requests can end up spread across spreadsheets and messaging apps.",
    Network,
  ],
  [
    "Manual approvals",
    "Leave requests and other employee permissions can be difficult to organize and track.",
    FileText,
  ],
  [
    "Operational friction",
    "Repeated administrative tasks can take time away from customers, teams, and business growth.",
    Clock3,
  ],
];
const features = [
  [
    "Attendance Management",
    "Help organize employee attendance information in one place.",
    CalendarDays,
  ],
  [
    "Leave and Permission Requests",
    "Give employees a clear way to submit requests and track their status.",
    FileText,
  ],
  [
    "Approval Workflows",
    "Make pending requests easier for authorized managers to review.",
    CheckCircle2,
  ],
  [
    "Employee Notifications",
    "Help teams stay informed about important updates and decisions.",
    Bell,
  ],
];
function Brand() {
  return (
    <a href="#top" className="brand">
      <span className="brand-mark">
        <i />
      </span>
      BeBetter
    </a>
  );
}
function Button({
  children,
  href = "#early-access",
  secondary = false,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`button ${secondary ? "button-secondary" : ""}`}
    >
      {children}
      <ArrowRight size={16} />
    </a>
  );
}
function Dashboard() {
  return (
    <div className="dashboard">
      <aside>
        <div className="dash-brand">
          <span className="brand-mark small">
            <i />
          </span>
          <b>BeBetter</b>
        </div>
        <div className="dash-link active">
          <LayoutDashboard size={15} />
          Overview
        </div>
        <div className="dash-link">
          <Users size={15} />
          Employees
        </div>
        <div className="dash-link">
          <CalendarDays size={15} />
          Attendance
        </div>
        <div className="dash-link">
          <FileText size={15} />
          Requests
        </div>
        <div className="dash-user">
          <span>AM</span>
          <small>Ava Morgan</small>
        </div>
      </aside>
      <div className="dash-content">
        <div className="dash-head">
          <div>
            <small>MONDAY, 14 OCTOBER 2024</small>
            <h3>Good morning, Ava</h3>
          </div>
          <Bell size={16} />
        </div>
        <div className="dash-stats">
          <div>
            <small>Team members</small>
            <b>24</b>
            <span>+3 this month</span>
          </div>
          <div>
            <small>Present today</small>
            <b>21</b>
            <span className="green">87.5% attendance</span>
          </div>
          <div>
            <small>Pending requests</small>
            <b>4</b>
            <span>Needs your review</span>
          </div>
        </div>
        <div className="dash-panels">
          <div className="dash-panel">
            <strong>Attendance overview</strong>
            <div className="chart">
              {[64, 82, 58, 91, 75].map((n, i) => (
                <div className="column" key={i}>
                  <i style={{ height: `${n}%` }} />
                  <small>{["Mon", "Tue", "Wed", "Thu", "Fri"][i]}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="dash-panel requests">
            <strong>Pending requests</strong>
            {[
              ["Jordan Lee", "Annual leave · 18–19 Oct", "JL"],
              ["Riley Kim", "Permission · 17 Oct", "RK"],
              ["Sam Brown", "Sick leave · 16 Oct", "SB"],
            ].map(([name, detail, initials], i) => (
              <div className="request" key={name}>
                <span className={`mini-avatar a${i}`}>{initials}</span>
                <div>
                  <b>{name}</b>
                  <small>{detail}</small>
                </div>
                <em className={i === 1 ? "approved" : ""}>
                  {i === 1 ? "Approved" : "Pending"}
                </em>
              </div>
            ))}
          </div>
        </div>
        <div className="dash-note">
          <Sparkles size={13} />
          Illustrative preview
        </div>
      </div>
    </div>
  );
}
function AccessForm() {
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <div className="form-success">
        <CheckCircle2 size={28} />
        <h3>Thanks for your interest.</h3>
        <p>
          The registration service is not connected yet, so nothing has been
          submitted.
        </p>
        <button onClick={() => setSent(false)}>
          Register another interest <ArrowRight size={15} />
        </button>
      </div>
    );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity()) setSent(true);
        else e.currentTarget.reportValidity();
      }}
    >
      <div className="form-row">
        <label>
          Name
          <input required placeholder="Your name" />
        </label>
        <label>
          Work email
          <input required type="email" placeholder="you@company.com" />
        </label>
      </div>
      <label>
        Company name <span>(optional)</span>
        <input placeholder="Your company" />
      </label>
      <button className="button" type="submit">
        Register Interest <ArrowRight size={16} />
      </button>
      <p className="form-note">
        The registration service is not yet connected. This form is a preview
        only and does not save or send your information.
      </p>
    </form>
  );
}
export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <main id="top">
      <nav>
        <div className="container nav-inner">
          <Brand />
          <div className={`nav-links ${open ? "open" : ""}`}>
            <a href="#product" onClick={close}>
              Product
            </a>
            <a href="#approach" onClick={close}>
              Our Approach
            </a>
            <a href="#about" onClick={close}>
              About
            </a>
            <a href="#early-access" onClick={close}>
              Contact
            </a>
            <Button onClick={close}>Get Early Access</Button>
          </div>
          <button
            className="menu"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">INTRODUCING BEBETTER BUSINESS</p>
            <h1>
              Better tools for <em>better</em> businesses.
            </h1>
            <p className="lead">
              Running a business is demanding enough. BeBetter is exploring
              simpler digital tools to help growing teams organize everyday
              operations and spend more time on what matters...
            </p>
            <div className="actions">
              <Button>Get Early Access</Button>
              <Button href="#approach" secondary>
                Explore Our Approach
              </Button>
            </div>
            <p className="support">
              <i />
              Built around practical business needs.
            </p>
          </div>
          <div className="hero-dashboard">
            <Dashboard />
          </div>
        </div>
      </section>
      <section className="section border-top">
        <div className="container">
          <div className="intro">
            <p className="eyebrow">THE EVERYDAY CHALLENGE</p>
            <h2>
              Too much admin.
              <br />
              <em>Not enough time</em> to grow.
            </h2>
            <p>
              Small businesses often rely on disconnected tools and manual
              processes to coordinate everyday employee operations.
            </p>
          </div>
          <div className="cards three">
            {problems.map(([title, text, Icon]) => (
              <article key={title}>
                <div className="icon">
                  <Icon size={19} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="product" className="section product">
        <div className="container">
          <div className="intro centered">
            <p className="eyebrow">OUR INITIAL PRODUCT DIRECTION</p>
            <h2>
              Employee management,
              <br />
              <em>made simpler.</em>
            </h2>
            <p>
              BeBetter Business is exploring a more organized way for small
              teams to manage everyday employee operations.
            </p>
          </div>
          <div className="cards four">
            {problems.map(([title, text, Icon]) => (
              <article key={title}>
                <Icon className="feature-icon" size={21} />
                <h3>{title}</h3>
                <p>{text}</p>
                <small>Planned capability</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section preview">
        <div className="container">
          <div className="preview-head">
            <div>
              <p className="eyebrow">A CLEARER VIEW</p>
              <h2>
                See the shape of
                <br />
                <em>simpler operations.</em>
              </h2>
            </div>
            <p>
              A conceptual look at how BeBetter could bring the everyday into
              focus. Designed to be clear, calm, and useful.
            </p>
          </div>
          <Dashboard />
        </div>
      </section>
      <section id="approach" className="section approach">
        <div className="container approach-grid">
          <div>
            <p className="eyebrow">OUR APPROACH</p>
            <h2>
              Start with real problems.
              <br />
              <em>Build practical solutions.</em>
            </h2>
          </div>
          <div className="principles">
            {[
              [
                "01",
                "Understand the problem",
                "Focus on operational challenges that businesses actually encounter.",
              ],
              [
                "02",
                "Keep software practical",
                "Prioritize clear interfaces and workflows that are easy to understand.",
              ],
              [
                "03",
                "Improve through feedback",
                "Develop the product iteratively and learn from potential users.",
              ],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>{n}</span>
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="section about">
        <div className="container about-grid">
          <div className="about-badge">
            <ShieldCheck size={20} />
            Early-stage
            <br />
            software venture
          </div>
          <div>
            <p className="eyebrow">ABOUT BEBETTER</p>
            <h2>Small improvements can change how businesses work.</h2>
            <p>
              BeBetter is an early-stage software venture exploring practical
              digital solutions for small and growing businesses. Our initial
              direction is to simplify everyday employee management through
              clearer workflows and approachable software.
            </p>
            <div className="statement">
              Better tools. Clearer workflows. Room to grow.
            </div>
          </div>
        </div>
      </section>
      <section id="early-access" className="section access">
        <div className="container access-grid">
          <div>
            <p className="eyebrow light">STAY IN THE LOOP</p>
            <h2>
              Help shape what
              <br />
              <em>BeBetter becomes.</em>
            </h2>
            <p>
              We&apos;re exploring a simpler approach to employee management. If
              you&apos;re building a business or managing a small team,
              we&apos;d like to hear from you.
            </p>
          </div>
          <AccessForm />
        </div>
      </section>
      <section className="final">
        <div className="container">
          <Sparkles size={20} />
          <h2>
            Better business operations
            <br />
            <em>start with better tools.</em>
          </h2>
          <p>
            Follow BeBetter as we explore simpler software for growing teams.
          </p>
          <Button>Get Early Access</Button>
        </div>
      </section>
      <footer>
        <div className="container footer-grid">
          <div>
            <Brand />
            <p>
              Practical digital tools for small
              <br />
              and growing businesses.
            </p>
          </div>
          <div className="footer-links">
            <div>
              <b>Explore</b>
              <a href="#product">Product</a>
              <a href="#approach">Our Approach</a>
              <a href="#about">About</a>
            </div>
            <div>
              <b>Connect</b>
              <a href="#early-access">Get Early Access</a>
              <a href="mailto:hello@bebetter.business">
                hello@bebetter.business
              </a>
            </div>
          </div>
        </div>
        <div className="container foot-bottom">
          <span>
            © {new Date().getFullYear()} BeBetter. Exploring better ways to
            work.
          </span>
          <span>Made for the next small business.</span>
        </div>
      </footer>
    </main>
  );
}
