exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: JSON.stringify({ message: "Method not allowed" }),
    };
  }

  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    };
  }

  try {
    const { planType, fleetSize, addOns, billingCycle } = JSON.parse(
      event.body
    );

    // Pricing structure
    const pricing = {
      personal: {
        essential: { monthly: 25, annual: 250 },
        professional: { monthly: 45, annual: 450 },
        elite: { monthly: 75, annual: 750 },
      },
      business: {
        starter: { monthly: 15, annual: 150 },
        growth: { monthly: 25, annual: 250 },
        enterprise: { monthly: 35, annual: 350 },
      },
    };

    // Add-ons pricing
    const addOnPricing = {
      "advanced-analytics": { monthly: 10, annual: 100 },
      "fuel-monitoring": { monthly: 15, annual: 150 },
      "driver-behavior": { monthly: 12, annual: 120 },
      "maintenance-alerts": { monthly: 8, annual: 80 },
      geofencing: { monthly: 5, annual: 50 },
      "custom-reports": { monthly: 20, annual: 200 },
    };

    // Fleet size multipliers
    const fleetMultipliers = {
      "1-2": 1,
      "3-10": 0.9, // 10% discount for 3-10 vehicles
      "11-50": 0.8, // 20% discount for 11-50 vehicles
      "51-100": 0.7, // 30% discount for 51-100 vehicles
      "100+": 0.6, // 40% discount for 100+ vehicles
    };

    // Validate inputs
    if (!planType || !fleetSize || !billingCycle) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          message:
            "Missing required fields: planType, fleetSize, and billingCycle are required",
        }),
      };
    }

    // Parse plan type (e.g., "personal-essential" -> ["personal", "essential"])
    const [category, plan] = planType.split("-");

    if (!pricing[category] || !pricing[category][plan]) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          message: "Invalid plan type",
        }),
      };
    }

    // Calculate base price
    const basePrice = pricing[category][plan][billingCycle];

    // Apply fleet size multiplier
    const fleetMultiplier = fleetMultipliers[fleetSize] || 1;
    const adjustedBasePrice = basePrice * fleetMultiplier;

    // Calculate add-ons cost
    let addOnsTotal = 0;
    const selectedAddOns = [];

    if (addOns && Array.isArray(addOns)) {
      addOns.forEach((addOn) => {
        if (addOnPricing[addOn]) {
          const addOnCost = addOnPricing[addOn][billingCycle] * fleetMultiplier;
          addOnsTotal += addOnCost;
          selectedAddOns.push({
            name: addOn,
            cost: addOnCost,
          });
        }
      });
    }

    // Calculate totals
    const subtotal = adjustedBasePrice + addOnsTotal;
    const discount = billingCycle === "annual" ? subtotal * 0.1 : 0; // 10% annual discount
    const total = subtotal - discount;

    // Calculate savings for annual vs monthly
    const monthlyCost = pricing[category][plan].monthly * fleetMultiplier;
    const annualSavings =
      billingCycle === "annual" ? monthlyCost * 12 - total : 0;

    // Generate quote ID
    const quoteId = `OL-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;

    const quote = {
      success: true,
      quoteId,
      planType,
      fleetSize,
      billingCycle,
      pricing: {
        basePrice: adjustedBasePrice,
        addOns: selectedAddOns,
        addOnsTotal,
        subtotal,
        discount,
        total,
        currency: "USD",
      },
      savings: {
        fleetDiscount: basePrice - adjustedBasePrice,
        annualDiscount: discount,
        annualSavings: annualSavings,
      },
      details: {
        pricePerVehicle: category === "business" ? adjustedBasePrice : null,
        fleetMultiplier,
        validUntil: new Date(
          Date.now() + 30 * 24 * 60 * 60 * 1000
        ).toISOString(), // 30 days
      },
      inclusions: getInclusions(category, plan),
      nextSteps: [
        "Contact our sales team to discuss your requirements",
        "Schedule a personalized demo",
        "Receive professional installation quote",
        "Start your implementation within 7 days",
      ],
    };

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    };
  } catch (error) {
    console.error("Quote calculator error:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message: "Error calculating quote. Please try again later.",
      }),
    };
  }
};

function getInclusions(category, plan) {
  const baseInclusions = [
    "Real-time GPS tracking",
    "Mobile app access",
    "Basic reporting",
    "Email notifications",
    "Customer support",
  ];

  const planInclusions = {
    personal: {
      essential: [...baseInclusions],
      professional: [
        ...baseInclusions,
        "Advanced analytics",
        "Route optimization",
        "Maintenance tracking",
      ],
      elite: [
        ...baseInclusions,
        "Advanced analytics",
        "Route optimization",
        "Maintenance tracking",
        "Driver behavior monitoring",
        "Custom dashboards",
      ],
    },
    business: {
      starter: [
        ...baseInclusions,
        "Multi-user access",
        "Basic fleet analytics",
      ],
      growth: [
        ...baseInclusions,
        "Multi-user access",
        "Advanced fleet analytics",
        "Route optimization",
        "Fuel monitoring",
      ],
      enterprise: [
        ...baseInclusions,
        "Multi-user access",
        "Advanced fleet analytics",
        "Route optimization",
        "Fuel monitoring",
        "Driver behavior analysis",
        "Custom integrations",
        "Dedicated account manager",
      ],
    },
  };

  return planInclusions[category][plan] || baseInclusions;
}
