export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface Plan {
  name: string;
  icon: string;
  description: string;
  features: PlanFeature[];
  action: string;
  badge?: string;
  badgeIcon?: string;
  featured?: boolean;
}

export const personalPlans: Plan[] = [
  {
    name: "Basic",
    icon: "fas fa-route",
    description: "Basic tracking for everyday use",
    features: [
      { name: "Real-time GPS tracking", included: true },
      { name: "Trip history viewing", included: true },
      { name: "Basic geofencing", included: true },
      { name: "Ignition alerts", included: true },
      { name: "Multi-vehicle tracking", included: false },
      { name: "Advanced reports", included: false },
    ],
    action: "Get Started",
  },
  {
    name: "Standard",
    icon: "fas fa-shield-alt",
    description: "Advanced features for power users",
    badge: "Most Popular",
    badgeIcon: "fas fa-star",
    featured: true,
    features: [
      { name: "Multi-vehicle tracking", included: true },
      { name: "Trip history playback", included: true },
      { name: "Data export capabilities", included: true },
      { name: "Basic reporting suite", included: true },
      { name: "Device tamper alerts", included: true },
    ],
    action: "Get Started",
  },
  {
    name: "Premium",
    icon: "fas fa-crown",
    description: "Complete solution with premium features",
    features: [
      { name: "Everything in Standard, plus:", included: true },
      { name: "Advanced geofencing options", included: true },
      { name: "Comprehensive analytics", included: true },
      { name: "Priority customer support", included: true },
      { name: "Custom alert configurations", included: true },
    ],
    action: "Contact Us",
  },
];

export const businessPlans: Plan[] = [
  {
    name: "Gold",
    icon: "fas fa-truck",
    description: "Basic fleet management",
    features: [
      { name: "Unlimited vehicles", included: true },
      { name: "Real-time fleet tracking", included: true },
      { name: "Trip history & playback", included: true },
      { name: "Basic geofencing", included: true },
      { name: "Standard reporting", included: true },
      { name: "Multi-user access", included: true },
    ],
    action: "Contact Us",
  },
  {
    name: "Diamond",
    icon: "fas fa-chart-line",
    description: "Advanced fleet optimization",
    badge: "Best Value",
    badgeIcon: "fas fa-fire",
    featured: true,
    features: [
      { name: "Everything in Gold, plus:", included: true },
      { name: "Advanced geofencing", included: true },
      { name: "Driver behavior monitoring", included: true },
      { name: "Maintenance scheduling", included: true },
      { name: "Fuel consumption tracking", included: true },
      { name: "Advanced analytics dashboard", included: true },
    ],
    action: "Contact Us",
  },
  {
    name: "Platinum",
    icon: "fas fa-crown",
    description: "Enterprise-grade solution",
    features: [
      { name: "Everything in Diamond, plus:", included: true },
      { name: "Custom behavior rules", included: true },
      { name: "Advanced user management", included: true },
      { name: "Maintenance CRUD operations", included: true },
      { name: "Custom report scheduling", included: true },
      { name: "Remote vehicle control", included: true },
      { name: "Premium support & training", included: true },
    ],
    action: "Contact Us",
  },
];

// Combined plans for contact form dropdown
export const getAllPlans = () => {
  return [
    ...personalPlans.map((plan) => ({ ...plan, category: "Personal" })),
    ...businessPlans.map((plan) => ({ ...plan, category: "Business" })),
  ];
};

// Plan options for contact form
export const getPlanOptions = () => {
  const allPlans = getAllPlans();
  return allPlans.map((plan) => ({
    value: plan.name.toLowerCase(),
    label: `${plan.name} - ${plan.category}`,
    description: plan.description,
  }));
};
