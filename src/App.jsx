import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const serviceLines = [
  {
    name: 'Digital Product Engineering',
    icon: 'stack',
    accent: 'from-cyan-400/40 via-sky-400/15 to-transparent',
    summary:
      'High-end websites, platforms, dashboards, and internal systems designed for scale and clarity.',
    bullets: ['Experience architecture', 'Frontend systems', 'Backend APIs', 'Performance hardening'],
  },
  {
    name: 'AI Operations and Automation',
    icon: 'spark',
    accent: 'from-amber-300/40 via-orange-300/10 to-transparent',
    summary:
      'Workflow automation, applied AI copilots, insight pipelines, and operational intelligence layers.',
    bullets: ['Internal assistants', 'Analytics flows', 'Document intelligence', 'Decision support'],
  },
  {
    name: 'Cloud and Platform Reliability',
    icon: 'cloud',
    accent: 'from-emerald-300/35 via-teal-300/10 to-transparent',
    summary:
      'Secure infrastructure foundations, deployment pipelines, observability, and uptime-first hosting.',
    bullets: ['Cloud architecture', 'Release pipelines', 'Monitoring', 'Capacity planning'],
  },
  {
    name: 'Cyber Security by Design',
    icon: 'shield',
    accent: 'from-rose-300/30 via-pink-300/10 to-transparent',
    summary:
      'Protection across identity, access, environments, and business-critical digital workflows.',
    bullets: ['Threat review', 'Access design', 'Vulnerability checks', 'Policy enforcement'],
  },
];

const operatingSteps = [
  {
    title: 'Discovery and system mapping',
    body: 'We break down business goals, data movement, delivery bottlenecks, and user expectations before we touch implementation.',
  },
  {
    title: 'Architecture and interface design',
    body: 'Complex systems become visual roadmaps, service layers, and interfaces with a clear hierarchy for decision-makers and operators.',
  },
  {
    title: 'Build, secure, and integrate',
    body: 'Engineering work ships in coordinated releases with testing, environment alignment, and security controls built in.',
  },
  {
    title: 'Monitor and continuously improve',
    body: 'After launch we track adoption, performance, reliability, and growth pressure so the platform keeps getting sharper.',
  },
];

const sectors = [
  {
    title: 'Operations-heavy businesses',
    detail: 'Internal tools, reporting systems, service dashboards, and workflow automation for teams with moving parts.',
  },
  {
    title: 'Growth-stage companies',
    detail: 'Fast, polished digital products that help startups look enterprise-ready while keeping the stack flexible.',
  },
  {
    title: 'Enterprise modernization',
    detail: 'Platform rewrites, cloud migration support, and secure interfaces for organizations replacing fragile legacy flows.',
  },
];

const valuePillars = [
  {
    title: 'Design with depth',
    copy: 'Interfaces are shaped like operational tools, not brochure pages. That gives the brand more authority at first glance.',
  },
  {
    title: 'Engineering with restraint',
    copy: 'We choose structure, scale, and maintainability over flashy decisions that become expensive later.',
  },
  {
    title: 'Security as a baseline',
    copy: 'Risk review, access design, and deployment discipline are treated as part of delivery, not a separate cleanup step.',
  },
  {
    title: 'Partnership over handoff',
    copy: 'The goal is not only to ship software, but to leave teams clearer, faster, and easier to support internally.',
  },
];

const contactChannels = [
  {
    label: 'Office',
    value: 'Unit No 606, Plot No-8, SG Shopping Mall, Sector-9, Rohini City, New Delhi - 110085',
    icon: 'pin',
  },
  {
    label: 'Primary email',
    value: 'infotechsalazar3@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Alternate email',
    value: 'sundrsingh0333@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Call',
    value: '+91 8796925526',
    icon: 'phone',
  },
];

const deliveryTracks = [
  'New website and product builds',
  'Dashboard and internal platform systems',
  'Automation and AI enhancement projects',
  'Security and infrastructure modernization',
];

function IconGlyph({ name, className = 'h-5 w-5' }) {
  const baseProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '1.6',
    viewBox: '0 0 24 24',
    className,
  };

  switch (name) {
    case 'cloud':
      return (
        <svg {...baseProps}>
          <path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6.3 8.7 3.8 3.8 0 0 0 7 18Z" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...baseProps}>
          <path d="M12 3 5 6v5c0 4.7 2.8 7.9 7 10 4.2-2.1 7-5.3 7-10V6l-7-3Z" />
          <path d="m9.5 12 1.7 1.7 3.3-3.5" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...baseProps}>
          <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z" />
          <path d="m5 17 .8 2 .7-2 2-.7-2-.8-.7-2-.8 2-2 .8 2 .7Z" />
          <path d="m18.5 15 .9 2.3 2.3.9-2.3.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.3Z" />
        </svg>
      );
    case 'stack':
      return (
        <svg {...baseProps}>
          <path d="m12 4 8 4-8 4-8-4 8-4Z" />
          <path d="m4 12 8 4 8-4" />
          <path d="m4 16 8 4 8-4" />
        </svg>
      );
    case 'network':
      return (
        <svg {...baseProps}>
          <circle cx="6" cy="7" r="2.2" />
          <circle cx="18" cy="7" r="2.2" />
          <circle cx="12" cy="17" r="2.2" />
          <path d="M8 8.2 10.5 15M16 8.2 13.5 15M8.1 7h7.8" />
        </svg>
      );
    case 'chart':
      return (
        <svg {...baseProps}>
          <path d="M4 19h16" />
          <path d="M7 16V9" />
          <path d="M12 16V5" />
          <path d="M17 16v-7" />
        </svg>
      );
    case 'compass':
      return (
        <svg {...baseProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="m14.8 9.2-2 5.6-5.6 2 2-5.6 5.6-2Z" />
        </svg>
      );
    case 'support':
      return (
        <svg {...baseProps}>
          <path d="M6 14v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1" />
          <path d="M7 11a5 5 0 0 1 10 0" />
          <path d="M5 11h2v4H5zM17 11h2v4h-2z" />
        </svg>
      );
    case 'mail':
      return (
        <svg {...baseProps}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
          <path d="m5.5 8 6.5 5 6.5-5" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...baseProps}>
          <path d="M7 5.5c0 6.5 5 11.5 11.5 11.5l1.8-3.2-3.8-2.1-2 1.3a12.2 12.2 0 0 1-3.6-3.6l1.3-2-2.1-3.8L7 5.5Z" />
        </svg>
      );
    case 'pin':
      return (
        <svg {...baseProps}>
          <path d="M12 20s5-5.6 5-10a5 5 0 1 0-10 0c0 4.4 5 10 5 10Z" />
          <circle cx="12" cy="10" r="1.8" />
        </svg>
      );
    default:
      return (
        <svg {...baseProps}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

function LogoMark() {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/8 shadow-[0_0_40px_rgba(56,189,248,0.12)]">
      <div className="absolute inset-[7px] rounded-xl border border-cyan-300/30" />
      <div className="grid grid-cols-2 gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
      </div>
    </div>
  );
}

function SectionLead({ eyebrow, title, copy, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <div className="panel-label mb-5">{eyebrow}</div>
      <h2 className="display-font text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{copy}</p>
    </div>
  );
}

function SurfaceCard({ children, className = '' }) {
  return <div className={`glass-panel lift-card rounded-[28px] ${className}`}>{children}</div>;
}

function Navbar() {
  return (
    <nav className="nav-frame fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[26px] border border-white/10 bg-slate-950/60 px-5 py-4 backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-4">
          <LogoMark />
          <div>
            <p className="display-font text-base font-semibold tracking-[0.28em] text-white">
              SALAZAR
            </p>
            <p className="text-xs uppercase tracking-[0.38em] text-slate-400">
              Infotech
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navLinks.map((item) => (
            <Link key={item.to} to={item.to} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-300/20"
        >
          Start a project
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <LogoMark />
            <div>
              <p className="display-font text-base font-semibold tracking-[0.28em] text-white">
                SALAZAR
              </p>
              <p className="text-xs uppercase tracking-[0.38em] text-slate-400">
                Infotech
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
            Enterprise-minded websites, intelligent systems, secure infrastructure,
            and modern digital experiences shaped to look credible and operate cleanly.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Navigate
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to} className="block transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Focus
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <p>Digital product engineering</p>
            <p>AI and automation systems</p>
            <p>Cloud reliability</p>
            <p>Cyber security strategy</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Contact
          </p>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
            <p>Unit No 606, Plot No-8, SG Shopping Mall, Sector-9, Rohini City, New Delhi - 110085</p>
            <p>infotechsalazar3@gmail.com</p>
            <p>+91 8796925526</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        Copyright 2026 Salazar Infotech Private Limited. All rights reserved.
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="site-shell text-slate-50">
      <section className="relative overflow-hidden px-4 pb-24 pt-32 md:px-8 md:pt-36">
        <div className="ambient-blob ambient-blob-one" aria-hidden="true" />
        <div className="ambient-blob ambient-blob-two" aria-hidden="true" />
        <div className="subtle-grid absolute inset-0 opacity-60" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl gap-16 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
          <div className="relative z-10">
            <div className="panel-label mb-6">Advanced digital systems for serious businesses</div>
            <h1 className="display-font max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-7xl xl:text-[5.8rem]">
              A sharper, more technical web presence for complex technology work.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Salazar Infotech builds digital products, AI-powered workflows, cloud platforms,
              and secure operating systems for teams that need more than a simple brochure site.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Explore capability stack
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
              >
                Talk with the team
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ['150+', 'projects aligned to delivery goals'],
                ['24/7', 'monitoring and support mindset'],
                ['4', 'core capability pillars integrated'],
              ].map(([value, label]) => (
                <SurfaceCard key={value} className="p-5">
                  <p className="display-font text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
                </SurfaceCard>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
              {['Product engineering', 'Automation systems', 'Cloud delivery', 'Security architecture'].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <SurfaceCard className="relative overflow-hidden p-6 md:p-7">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
                    Transformation command center
                  </p>
                  <h2 className="mt-2 display-font text-2xl font-semibold text-white">
                    Delivery visibility at every layer
                  </h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <IconGlyph name="network" className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-7 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-slate-300">System readiness</p>
                    <p className="text-sm text-cyan-200">89%</p>
                  </div>
                  <div className="metric-track mt-4">
                    <div className="metric-fill w-[89%]" />
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {[
                      ['06', 'active delivery streams'],
                      ['14', 'automation opportunities mapped'],
                      ['99.9%', 'availability target'],
                      ['03', 'security gates in release path'],
                    ].map(([value, text]) => (
                      <div key={text} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <p className="display-font text-2xl font-semibold text-white">{value}</p>
                        <p className="mt-2 text-xs leading-5 text-slate-400">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-cyan-300/18 via-sky-400/8 to-transparent p-5">
                    <div className="flex items-center gap-3 text-cyan-100">
                      <IconGlyph name="chart" />
                      <p className="text-sm font-semibold uppercase tracking-[0.24em]">
                        Execution
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-200">
                      Websites, automation, security, and cloud work run through one delivery model,
                      so brand quality and technical quality move together.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Current stack view
                    </p>
                    <div className="mt-4 space-y-3">
                      {[
                        ['Frontend systems', 'w-[82%]'],
                        ['Workflow automation', 'w-[68%]'],
                        ['Infrastructure stability', 'w-[76%]'],
                      ].map(([label, width]) => (
                        <div key={label}>
                          <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                            <span>{label}</span>
                            <span className="text-slate-500">live</span>
                          </div>
                          <div className="metric-track">
                            <div className={`metric-fill ${width}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-5 text-sm text-slate-400">
          <span className="uppercase tracking-[0.26em] text-slate-500">Operational coverage</span>
          <div className="flex flex-wrap gap-3">
            {['React platforms', 'Cloud delivery', 'AI integrations', 'Security reviews', 'Support retainers'].map((item) => (
              <span key={item} className="rounded-full border border-white/8 bg-slate-950/70 px-4 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLead
            eyebrow="Capability architecture"
            title="A website that feels like the front door to a real technology operation."
            copy="Instead of a flat landing page, the experience now layers service depth, system language, metrics, and structure so the company appears more established and technically mature."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-12">
            <SurfaceCard className="relative overflow-hidden p-7 lg:col-span-7">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-cyan-300/[0.06]" />
              <div className="relative">
                <div className="flex items-center gap-3 text-cyan-100">
                  <IconGlyph name="compass" />
                  <p className="text-sm font-semibold uppercase tracking-[0.24em]">
                    Experience strategy
                  </p>
                </div>
                <h3 className="mt-5 display-font text-3xl font-semibold text-white">
                  The interface now mixes brand storytelling with operational signals.
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                  Rich cards, internal dashboards, service layers, and structured page sections
                  make the site feel closer to a product ecosystem than a one-dimensional company profile.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    ['Visual hierarchy', 'Bold type, glass surfaces, and asymmetrical layouts create depth.'],
                    ['System language', 'Every section uses technical framing that reinforces capability.'],
                    ['Conversion flow', 'Calls to action appear inside high-value content instead of feeling separate.'],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-[22px] border border-white/8 bg-slate-950/65 p-5">
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-7 lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Presence scorecard
              </p>
              <div className="mt-7 space-y-5">
                {[
                  ['Authority', 'Dense but readable structure'],
                  ['Depth', 'Multi-layer capability messaging'],
                  ['Trust', 'Clear contact and delivery framing'],
                  ['Polish', 'Motion, spacing, and custom surfaces'],
                ].map(([title, text]) => (
                  <div key={title} className="flex items-start gap-4 rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-cyan-200">
                      <IconGlyph name="chart" className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            {serviceLines.map((service, index) => (
              <SurfaceCard
                key={service.name}
                className={`relative overflow-hidden p-7 ${index < 2 ? 'lg:col-span-6' : 'lg:col-span-3'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent}`} />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-white">
                    <IconGlyph name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 display-font text-2xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.bullets.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLead
              eyebrow="Operating model"
              title="Complex-looking does not have to mean chaotic."
              copy="The sections are stacked like a real delivery organization: strategy, systems, execution, governance, and contact points. That makes the site feel richer while keeping it readable."
            />
          </div>

          <div className="grid gap-5">
            {operatingSteps.map((step, index) => (
              <SurfaceCard key={step.title} className="flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/75 display-font text-lg font-semibold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{step.body}</p>
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLead
            eyebrow="Who this serves"
            title="Built for companies that need to look sharper before the first call even starts."
            copy="A more advanced presentation helps when selling technical work, pitching larger clients, or building confidence with teams that expect maturity from the vendors they hire."
            align="center"
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {sectors.map((sector) => (
              <SurfaceCard key={sector.title} className="p-7">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Industry fit</p>
                <h3 className="mt-4 display-font text-2xl font-semibold text-white">{sector.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{sector.detail}</p>
              </SurfaceCard>
            ))}
          </div>

          <SurfaceCard className="mt-6 flex flex-col items-start justify-between gap-6 rounded-[34px] p-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Ready to move</p>
              <h3 className="mt-3 display-font text-3xl font-semibold text-white">
                Turn the site into a stronger sales asset.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                The redesign now supports deeper storytelling, better perceived scale, and a more premium first impression.
              </p>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Connect with Salazar
            </Link>
          </SurfaceCard>
        </div>
      </section>
    </div>
  );
}

function Services() {
  return (
    <div className="site-shell px-4 pb-24 pt-32 text-slate-50 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionLead
          eyebrow="Services"
          title="Four integrated capability lanes, presented with more weight and structure."
          copy="Each area is positioned like part of a wider transformation stack, which makes the business appear broader and more established than a standard card grid."
        />

        <div className="mt-14 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <SurfaceCard className="p-7">
            <div className="grid gap-5 md:grid-cols-2">
              {serviceLines.map((service) => (
                <div key={service.name} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-white">
                    <IconGlyph name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 display-font text-2xl font-semibold text-white">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{service.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-cyan-300" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SurfaceCard>

          <div className="grid gap-5">
            <SurfaceCard className="p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Delivery tracks</p>
              <div className="mt-5 space-y-3">
                {deliveryTracks.map((track, index) => (
                  <div key={track} className="flex items-center gap-4 rounded-[22px] border border-white/8 bg-white/[0.03] p-4">
                    <div className="display-font flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-slate-300">{track}</p>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Why this feels more premium</p>
              <div className="mt-6 space-y-5">
                {[
                  ['Layered composition', 'Large and small surfaces are mixed to avoid a repetitive brochure rhythm.'],
                  ['Technical vocabulary', 'The copy is framed around systems, visibility, reliability, and architecture.'],
                  ['Custom motion and texture', 'Subtle background grids and lift effects give the UI more depth.'],
                ].map(([title, body]) => (
                  <div key={title}>
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">{body}</p>
                  </div>
                ))}
              </div>
            </SurfaceCard>
          </div>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {[
            {
              icon: 'network',
              title: 'Systems thinking',
              body: 'Projects are framed as connected platforms, not isolated pages or one-off tasks.',
            },
            {
              icon: 'support',
              title: 'Support continuity',
              body: 'Post-launch care is presented as part of the offer, which increases trust for larger clients.',
            },
            {
              icon: 'shield',
              title: 'Risk awareness',
              body: 'Security and operational discipline show up early in the experience, not buried in the footer.',
            },
          ].map((item) => (
            <SurfaceCard key={item.title} className="p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-white">
                <IconGlyph name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 display-font text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.body}</p>
            </SurfaceCard>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="site-shell px-4 pb-24 pt-32 text-slate-50 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 xl:grid-cols-[1fr_0.95fr]">
          <div>
            <SectionLead
              eyebrow="About the company"
              title="A more developed visual identity gives the business more gravity."
              copy="The refreshed site positions Salazar Infotech less like a generic vendor and more like a technical partner with process, systems awareness, and long-term delivery capacity."
            />
          </div>

          <SurfaceCard className="overflow-hidden p-7">
            <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-300/15 via-white/[0.04] to-transparent p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Company profile</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ['10+', 'technology domains covered'],
                  ['100+', 'client relationships supported'],
                  ['24/7', 'monitoring mindset'],
                  ['99%', 'satisfaction-oriented delivery'],
                ].map(([value, text]) => (
                  <div key={text} className="rounded-[22px] border border-white/8 bg-slate-950/70 p-5">
                    <p className="display-font text-3xl font-semibold text-white">{value}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </SurfaceCard>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {valuePillars.map((pillar) => (
            <SurfaceCard key={pillar.title} className="p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Principle</p>
              <h3 className="mt-4 display-font text-2xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{pillar.copy}</p>
            </SurfaceCard>
          ))}
        </div>

        <div className="mt-16 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <SurfaceCard className="p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Narrative shift</p>
            <h3 className="mt-4 display-font text-3xl font-semibold text-white">
              The site now sells confidence, not just services.
            </h3>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
              For technology companies, perception matters early. Better hierarchy, stronger typography,
              and multi-layer sections suggest capability before a prospect reads every sentence.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ['Brand authority', 'More intentional spacing and structure make the company feel established.'],
                ['Technical credibility', 'Dashboards, process sections, and systems framing reinforce expertise.'],
                ['Commercial readiness', 'Calls to action appear in the flow of content, making outreach feel natural.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[22px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>

          <SurfaceCard className="p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Team posture</p>
            <div className="mt-6 space-y-4">
              {[
                'Discovery-first planning to reduce project ambiguity.',
                'Engineering and interface work handled as one integrated system.',
                'Security, support, and infrastructure thinking included in the narrative.',
                'Visual style aimed at premium, modern, and enterprise-adjacent buyers.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-[22px] border border-white/8 bg-slate-950/70 p-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="site-shell px-4 pb-24 pt-32 text-slate-50 md:px-8 md:pt-36">
      <div className="mx-auto max-w-7xl">
        <SectionLead
          eyebrow="Contact"
          title="The close now feels more like a strategic intake page than a simple contact block."
          copy="That helps the company look prepared for larger conversations while still keeping the contact details direct and easy to reach."
        />

        <div className="mt-14 grid gap-5 xl:grid-cols-[1fr_0.9fr]">
          <SurfaceCard className="p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Reach Salazar Infotech</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {contactChannels.map((item) => (
                <div key={`${item.label}-${item.value}`} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-white">
                    <IconGlyph name={item.icon} className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </SurfaceCard>

          <div className="grid gap-5">
            <SurfaceCard className="p-7">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">What happens next</p>
              <div className="mt-6 space-y-4">
                {[
                  'Share the business goal, website need, or systems challenge.',
                  'We map scope, timeline pressure, and the right capability mix.',
                  'The project gets shaped into a clearer delivery path with next actions.',
                ].map((item, index) => (
                  <div key={item} className="flex items-start gap-4 rounded-[22px] border border-white/8 bg-slate-950/70 p-4">
                    <div className="display-font flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard className="relative overflow-hidden p-7">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-sky-400/8 to-transparent" />
              <div className="relative">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Engagement fit</p>
                <h3 className="mt-4 display-font text-3xl font-semibold text-white">
                  Best for teams that want a more credible, more advanced digital presence.
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Whether the need is a polished company site, an internal platform, or a broader transformation initiative,
                  the new design now supports that conversation from the first screen onward.
                </p>
                <Link
                  to="/services"
                  className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  Review service areas
                </Link>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 font-sans text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

