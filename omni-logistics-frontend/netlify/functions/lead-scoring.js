exports.handler = async (event, context) => {
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
    const {
      email,
      company,
      fleetSize,
      planType,
      message,
      phone,
      industry,
      urgency,
      budget,
    } = JSON.parse(event.body);

    let score = 0;
    const scoringFactors = [];

    // Fleet size scoring (0-30 points)
    const fleetSizeScore = {
      "1-2": 5,
      "3-10": 15,
      "11-50": 25,
      "51-100": 30,
      "100+": 30,
    };

    if (fleetSize && fleetSizeScore[fleetSize]) {
      const points = fleetSizeScore[fleetSize];
      score += points;
      scoringFactors.push({
        factor: "Fleet Size",
        value: fleetSize,
        points: points,
        reasoning: "Larger fleets indicate higher potential revenue",
      });
    }

    // Plan type scoring (0-20 points)
    const planScore = {
      "personal-essential": 5,
      "personal-professional": 10,
      "personal-elite": 15,
      "business-starter": 10,
      "business-growth": 15,
      "business-enterprise": 20,
    };

    if (planType && planScore[planType]) {
      const points = planScore[planType];
      score += points;
      scoringFactors.push({
        factor: "Plan Interest",
        value: planType,
        points: points,
        reasoning: "Higher-tier plans indicate serious buying intent",
      });
    }

    // Company presence (0-15 points)
    if (company && company.trim().length > 0) {
      const points = 15;
      score += points;
      scoringFactors.push({
        factor: "Company Name Provided",
        value: company,
        points: points,
        reasoning: "Business leads are typically higher value",
      });
    }

    // Contact completeness (0-15 points)
    let contactPoints = 0;
    if (email) contactPoints += 5;
    if (phone) contactPoints += 10; // Phone is stronger indicator

    if (contactPoints > 0) {
      score += contactPoints;
      scoringFactors.push({
        factor: "Contact Information",
        value: `Email: ${!!email}, Phone: ${!!phone}`,
        points: contactPoints,
        reasoning: "Complete contact info indicates genuine interest",
      });
    }

    // Message quality scoring (0-10 points)
    if (message && message.trim().length > 0) {
      let messagePoints = 0;
      const messageLength = message.trim().length;

      if (messageLength > 100) messagePoints = 10; // Detailed message
      else if (messageLength > 50) messagePoints = 7; // Good message
      else if (messageLength > 20) messagePoints = 5; // Basic message
      else messagePoints = 2; // Very short message

      // Bonus for keywords indicating buying intent
      const buyingKeywords = [
        "price",
        "cost",
        "quote",
        "demo",
        "trial",
        "purchase",
        "buy",
        "implement",
        "install",
        "when",
        "how much",
        "timeline",
      ];
      const urgencyKeywords = [
        "urgent",
        "asap",
        "immediately",
        "soon",
        "quickly",
        "emergency",
      ];

      if (
        buyingKeywords.some((keyword) =>
          message.toLowerCase().includes(keyword)
        )
      ) {
        messagePoints += 5;
      }

      if (
        urgencyKeywords.some((keyword) =>
          message.toLowerCase().includes(keyword)
        )
      ) {
        messagePoints += 3;
      }

      score += messagePoints;
      scoringFactors.push({
        factor: "Message Quality",
        value: `${messageLength} characters`,
        points: messagePoints,
        reasoning: "Detailed, specific messages indicate serious interest",
      });
    }

    // Industry bonus (0-10 points)
    const highValueIndustries = [
      "logistics",
      "transportation",
      "delivery",
      "trucking",
      "shipping",
      "construction",
      "mining",
      "oil",
      "gas",
    ];
    if (
      industry &&
      highValueIndustries.some((ind) => industry.toLowerCase().includes(ind))
    ) {
      const points = 10;
      score += points;
      scoringFactors.push({
        factor: "Industry Match",
        value: industry,
        points: points,
        reasoning: "Industry aligns with our core market",
      });
    }

    // Urgency indicator (0-5 points)
    if (urgency === "high" || urgency === "urgent") {
      const points = 5;
      score += points;
      scoringFactors.push({
        factor: "Urgency Level",
        value: urgency,
        points: points,
        reasoning: "High urgency indicates immediate opportunity",
      });
    }

    // Determine lead quality
    let quality, priority, recommendation;

    if (score >= 70) {
      quality = "Hot";
      priority = "High";
      recommendation = "Contact within 1 hour. Schedule immediate demo.";
    } else if (score >= 50) {
      quality = "Warm";
      priority = "Medium";
      recommendation =
        "Contact within 24 hours. Send detailed information packet.";
    } else if (score >= 30) {
      quality = "Cold";
      priority = "Low";
      recommendation = "Add to nurture campaign. Follow up in 3-5 days.";
    } else {
      quality = "Low";
      priority = "Low";
      recommendation = "Add to general mailing list. Automated follow-up only.";
    }

    // Generate follow-up actions
    const followUpActions = generateFollowUpActions(
      score,
      planType,
      fleetSize,
      message
    );

    const leadScore = {
      success: true,
      score: Math.min(score, 100), // Cap at 100
      quality,
      priority,
      recommendation,
      scoringFactors,
      followUpActions,
      calculatedAt: new Date().toISOString(),
      leadId: `LEAD-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)
        .toUpperCase()}`,
    };

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadScore),
    };
  } catch (error) {
    console.error("Lead scoring error:", error);

    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message: "Error calculating lead score. Please try again later.",
      }),
    };
  }
};

function generateFollowUpActions(score, planType, fleetSize, message) {
  const actions = [];

  if (score >= 70) {
    actions.push({
      action: "Immediate Phone Call",
      timeline: "Within 1 hour",
      priority: "Critical",
    });
    actions.push({
      action: "Schedule Demo",
      timeline: "Same day",
      priority: "High",
    });
    actions.push({
      action: "Prepare Custom Quote",
      timeline: "Within 24 hours",
      priority: "High",
    });
  } else if (score >= 50) {
    actions.push({
      action: "Phone Call",
      timeline: "Within 24 hours",
      priority: "High",
    });
    actions.push({
      action: "Send Information Packet",
      timeline: "Same day",
      priority: "Medium",
    });
    actions.push({
      action: "Schedule Follow-up",
      timeline: "3-5 days",
      priority: "Medium",
    });
  } else if (score >= 30) {
    actions.push({
      action: "Email Response",
      timeline: "Within 48 hours",
      priority: "Medium",
    });
    actions.push({
      action: "Add to Nurture Campaign",
      timeline: "Immediate",
      priority: "Low",
    });
    actions.push({
      action: "Follow-up Call",
      timeline: "1 week",
      priority: "Low",
    });
  } else {
    actions.push({
      action: "Automated Email Response",
      timeline: "Immediate",
      priority: "Low",
    });
    actions.push({
      action: "Add to Newsletter",
      timeline: "Immediate",
      priority: "Low",
    });
  }

  return actions;
}
