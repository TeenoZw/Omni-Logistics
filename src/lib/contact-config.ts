// Configuration for contact information
// This can be extended to use environment variables when needed

export const contactConfig = {
  phone: {
    number: "+263 777 233 814",
    availability: "Available Mon-Fri, 8AM-5PM",
  },
  email: {
    address: "info@omnilogistics.co.zw",
    responseTime: "We respond within 24 hours",
  },
  address: {
    street: "1, Emerald Drive, Redcliff",
    city: "Kwekwe, Zimbabwe",
  },
  website: {
    url: "https://omnilogistics.co.zw",
  },
};

// Function to get contact methods array
export const getContactMethods = () => [
  {
    icon: "fas fa-phone",
    title: "Call Us Directly",
    detail: contactConfig.phone.number,
    subtitle: contactConfig.phone.availability,
  },
  {
    icon: "fas fa-envelope",
    title: "Email Support",
    detail: contactConfig.email.address,
    subtitle: contactConfig.email.responseTime,
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Visit Our Office",
    detail: contactConfig.address.street,
    subtitle: contactConfig.address.city,
  },
];
