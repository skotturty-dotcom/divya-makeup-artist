import React, { useEffect } from 'react';

export const SEO = ({
  title = "Makeover by Divyas | Best Bridal Makeup Artist in Hyderabad",
  description = "Looking for the best bridal makeup artist in Hyderabad? Makeover by Divyas offers bridal makeup, reception makeup, HD makeup, airbrush makeup, saree draping, hairstyling, and party makeup in Nizampet, Kukatpally, and all across Hyderabad.",
  keywords = "Bridal Makeup Artist in Hyderabad, Best Bridal Makeup Artist in Hyderabad, Professional Makeup Artist Hyderabad, HD Makeup Artist Hyderabad, Airbrush Makeup Hyderabad, Reception Makeup Artist Hyderabad, Engagement Makeup Artist Hyderabad, Party Makeup Artist Hyderabad, Saree Draping Services Hyderabad, Bridal Hairstylist Hyderabad, Wedding Makeup Artist Hyderabad, Bridal Makeup Near Me, Professional Makeup Near Me, Makeup Artist in Telangana, Wedding Makeup Hyderabad, Bridal Makeup Packages Hyderabad, Makeup Studio Hyderabad, Luxury Bridal Makeup Hyderabad, Destination Wedding Makeup Artist, Bridal Saree Draping Hyderabad",
  canonicalUrl = "https://www.makeoverbydivyas.in/",
  ogImage = "https://www.makeoverbydivyas.in/src/assets/logo.jpg",
  ogType = "website",
  schemaData = null
}) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set or update meta tag
    const setMetaTag = (nameAttr, nameVal, contentVal, isProperty = false) => {
      if (!contentVal) return;
      let attributeName = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attributeName}="${nameVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, nameVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Standard Meta
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // Open Graph
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'Makeover by Divyas', true);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Schema JSON-LD Script Insertion
    const schemaScriptId = 'seo-schema-jsonld';
    let existingScript = document.getElementById(schemaScriptId);
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaData) {
      const script = document.createElement('script');
      script.id = schemaScriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaData]);

  return null;
};
