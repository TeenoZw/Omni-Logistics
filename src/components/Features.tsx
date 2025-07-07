import React from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
  category: string;
  gradient: string;
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: "fas fa-map-marked-alt",
      title: "Real-time Tracking",
      description:
        "Live GPS tracking with precise location updates and historical route playback",
      category: "Core",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: "fas fa-route",
      title: "Trip History & Playback",
      description:
        "Detailed trip records with route visualization and export capabilities",
      category: "Core",
      gradient: "from-green-500 to-blue-600",
    },
    {
      icon: "fas fa-draw-polygon",
      title: "Advanced Geofencing",
      description:
        "Create custom zones with entry/exit alerts and comprehensive reporting",
      category: "Security",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: "fas fa-user-tie",
      title: "Driver Behavior Analytics",
      description:
        "Monitor driving patterns, scoring, and generate safety reports",
      category: "Analytics",
      gradient: "from-orange-500 to-red-600",
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Driving Scores",
      description: "Environmental impact tracking with fuel efficiency ratings",
      category: "Analytics",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: "fas fa-exclamation-circle",
      title: "Harsh Event Detection",
      description:
        "Automated alerts for harsh braking, acceleration, and cornering",
      category: "Security",
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: "fas fa-truck-moving",
      title: "Tow Detection",
      description:
        "Advanced algorithms detect unauthorized vehicle movement and towing",
      category: "Security",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: "fas fa-gas-pump",
      title: "Fuel Monitoring",
      description:
        "Real-time fuel levels, consumption tracking, and theft alerts",
      category: "Management",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: "fas fa-tools",
      title: "Maintenance Scheduling",
      description:
        "Automated service reminders and comprehensive maintenance records",
      category: "Management",
      gradient: "from-gray-500 to-blue-600",
    },
    {
      icon: "fas fa-chart-line",
      title: "Advanced Reporting",
      description:
        "Comprehensive analytics with customizable reports and data export",
      category: "Analytics",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: "fas fa-users-cog",
      title: "Multi-User Management",
      description: "Role-based access control with different permission levels",
      category: "Management",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      icon: "fas fa-power-off",
      title: "Remote Immobilization",
      description:
        "Emergency vehicle shutdown capability for ultimate security",
      category: "Security",
      gradient: "from-red-600 to-pink-600",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-background"></div>
      <div className="section-container">
        <div className="section-header">
          <div className="feature-badge">
            <i className="fas fa-cogs"></i>
            <span>Comprehensive Features</span>
          </div>
          <h2 className="section-title">
            Everything You Need for{" "}
            <span className="gradient-text">Fleet Management</span>
          </h2>
          <p className="section-subtitle">
            Powerful tools and advanced analytics to optimize your fleet
            operations, enhance security, and drive business efficiency
          </p>
        </div>

        {/* Features Grid - 4 columns */}
        <div className="features-grid-modern">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card-modern"
              style={
                {
                  animationDelay: `${index * 0.1}s`,
                  "--gradient": `linear-gradient(135deg, ${feature.gradient
                    .replace("from-", "")
                    .replace("to-", ", ")})`,
                } as React.CSSProperties & { "--gradient": string }
              }
            >
              <div className="feature-card-inner">
                <div className="feature-category">
                  <span className="category-badge">{feature.category}</span>
                </div>

                <div className="feature-icon-modern">
                  <div className="icon-background"></div>
                  <i className={feature.icon}></i>
                </div>

                <div className="feature-content-modern">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>

                <div className="feature-card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
