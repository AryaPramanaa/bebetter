'use client'

import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="landing-page">
      <nav className="landing-nav" aria-label="Primary navigation">
        <Link href="/" className="landing-brand"><span className="landing-mark"><i /></span><strong>BeBetter</strong></Link>
        <div className="landing-links"><a href="#why">Why BeBetter</a><a href="#features">Features</a><a href="#early-access">Early access</a></div>
        <Link href="/app" className="landing-nav-cta">Open App</Link>
      </nav>
      <section className="landing-hero">
        <div className="landing-copy"><p className="landing-kicker">BETTER TOOLS FOR BETTER BUSINESSES</p><h1>Run your business<br /><em>with clarity.</em></h1><p className="landing-lede">BeBetter brings your people, attendance, and everyday operations into one calm, practical workspace.</p><div className="landing-actions"><Link href="/app" className="landing-primary">Get started <span>↗</span></Link><a href="#early-access" className="landing-secondary">Join early access</a></div><p className="landing-note">Built for small teams that want to spend less time chasing details.</p></div>
        <div className="landing-preview" aria-label="BeBetter app preview"><div className="preview-window"><div className="preview-top"><span className="preview-dots"><i /><i /><i /></span><span>BeBetter Business</span><span>•••</span></div><div className="preview-body"><aside><b><span className="landing-mark small"><i /></span>BeBetter</b><span className="preview-active">Overview</span><span>Employees</span><span>Attendance</span><span>Requests</span></aside><div className="preview-content"><small>MONDAY, OCTOBER 14, 2024</small><h2>Good morning, Ava</h2><p>Here&apos;s what&apos;s happening with your team today.</p><div className="preview-stats"><div><small>Total employees</small><strong>24</strong><span>+2 this month</span></div><div><small>Present today</small><strong>18</strong><span>75% of your team</span></div></div><div className="preview-chart"><div><small>Attendance overview</small><strong>75%</strong></div><div className="preview-ring"><i /></div></div></div></div></div></div>
      </section>
      <section className="landing-trust"><span>Everything your team needs to move forward</span><div><b>People</b><b>Attendance</b><b>Requests</b><b>Clarity</b></div></section>
      <section className="landing-section" id="why"><p className="landing-kicker">A CLEARER WAY TO WORK</p><h2>Less admin. More momentum.</h2><p>Keep the important work visible, organized, and easy for everyone to act on.</p><div className="landing-cards" id="features"><article><span>01</span><h3>One shared workspace</h3><p>Give your team one reliable place for the information they use every day.</p></article><article><span>02</span><h3>Decisions at a glance</h3><p>See what needs attention without digging through spreadsheets and messages.</p></article><article><span>03</span><h3>Made for real teams</h3><p>Simple enough to start today, thoughtful enough to grow with your business.</p></article></div></section>
      <section className="landing-access" id="early-access"><div><p className="landing-kicker">EARLY ACCESS</p><h2>Make space for better work.</h2><p>Be the first to try the BeBetter Business workspace.</p></div><a href="mailto:hello@bebetter.business?subject=BeBetter%20early%20access" className="landing-primary">Join the list <span>↗</span></a></section>
      <footer className="landing-footer"><Link href="/" className="landing-brand"><span className="landing-mark"><i /></span><strong>BeBetter</strong></Link><span>Better tools for better businesses.</span><Link href="/app">Open app ↗</Link></footer>
    </main>
  )
}

