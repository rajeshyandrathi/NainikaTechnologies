export type Role = {
  slug: string;
  title: string;
  type: string;
  location: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

// Add open roles here. When the list is empty, the Careers page shows a
// general application message instead.
export const roles: Role[] = [];

export const talentAreas = [
  "Salesforce development (Apex, LWC, Flows)",
  "HubSpot and RevOps",
  "AI agent engineering",
  "QA and test automation",
];
