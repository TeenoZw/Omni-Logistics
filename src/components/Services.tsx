interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  featured: boolean;
}

export default function Services() {
  const services: Service[] = [
    {
      icon: "fas fa-eye",
      title: "Real-time Tracking",
      description:
        "Professional GPS tracking with live location updates, trip history, and comprehensive fleet visibility through our Omni Eye Portal.",
      features: ["Live Tracking", "Trip History", "Fleet Dashboard"],
      featured: false,
    },
    {
      icon: "fas fa-shield-halved",
      title: "Advanced Security",
      description:
        "Multi-tier security features including geofencing, immobilization, tow detection, and instant alerts for complete vehicle protection.",
      features: ["Geofencing", "Immobilization", "Instant Alerts"],
      featured: true,
    },
    {
      icon: "fas fa-cogs",
      title: "Fleet Management",
      description:
        "Complete fleet operations including maintenance scheduling, driver behavior monitoring, fuel tracking, and comprehensive reporting.",
      features: ["Maintenance", "Driver Behavior", "Fuel Monitoring"],
      featured: false,
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Complete Fleet Solutions</h2>
          <p className="section-subtitle">
            Comprehensive tracking and management services for individuals and
            businesses
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${service.featured ? "featured" : ""}`}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
