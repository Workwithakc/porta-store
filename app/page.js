export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '1rem 0' }}>
        <nav style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>PortaStore</h1>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#services" style={{ color: 'white', textDecoration: 'none' }}>Services</a>
            <a href="#portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</a>
            <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Automation Agency</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: '0.9' }}>Transform your business with cutting-edge automation solutions. We build intelligent workflows that save time and drive growth.</p>
          <button style={{ background: 'white', color: '#667eea', padding: '1rem 2rem', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '4rem 2rem', background: '#f7fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#2d3748' }}>Our Services</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#667eea' }}>Workflow Automation</h4>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>Streamline your business processes with intelligent automation solutions that save time and reduce errors.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#667eea' }}>E-Commerce Solutions</h4>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>Build powerful online stores with automated inventory, order processing, and customer management.</p>
            </div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#667eea' }}>Custom Integrations</h4>
              <p style={{ color: '#4a5568', lineHeight: '1.6' }}>Connect your tools and platforms seamlessly with custom API integrations and automated workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#2d3748' }}>Recent Projects</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748' }}>E-Commerce Platform</h4>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Full-stack automated online store with inventory management and payment integration.</p>
              <span style={{ color: '#667eea', fontWeight: 'bold' }}>Next.js • Stripe • MongoDB</span>
            </div>
            <div style={{ background: '#f7fafc', padding: '2rem', borderRadius: '12px' }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#2d3748' }}>CRM Automation</h4>
              <p style={{ color: '#4a5568', marginBottom: '1rem' }}>Automated customer relationship management system with email campaigns and analytics.</p>
              <span style={{ color: '#667eea', fontWeight: 'bold' }}>React • Node.js • PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Build Something Amazing</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>Ready to transform your business with automation? Get in touch with us today.</p>
          <button style={{ background: 'white', color: '#667eea', padding: '1rem 2.5rem', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>Contact Us</button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#2d3748', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p>© 2026 PortaStore. Built with Next.js • Deployed on Vercel</p>
      </footer>
    </div>
  )
}
