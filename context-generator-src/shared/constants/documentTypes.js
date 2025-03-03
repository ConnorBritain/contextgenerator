/**
 * Types of documents that can be generated by the application
 */
const DOCUMENT_TYPES = {
  TARGET_MARKET_AUDIENCE: 'targetMarketAudience',
  BUSINESS_PROFILE: 'businessProfile',
  STYLE_GUIDE: 'styleGuide'
};

/**
 * Display names for document types
 */
const DOCUMENT_TYPE_NAMES = {
  [DOCUMENT_TYPES.TARGET_MARKET_AUDIENCE]: 'Target Market Audience Profile',
  [DOCUMENT_TYPES.BUSINESS_PROFILE]: 'Business Dimensional Profile',
  [DOCUMENT_TYPES.STYLE_GUIDE]: 'AI Style Guide'
};

/**
 * Icons for document types (can be replaced with actual icon components)
 */
const DOCUMENT_TYPE_ICONS = {
  [DOCUMENT_TYPES.TARGET_MARKET_AUDIENCE]: '=e',
  [DOCUMENT_TYPES.BUSINESS_PROFILE]: '<�',
  [DOCUMENT_TYPES.STYLE_GUIDE]: '=�'
};

/**
 * Descriptions for document types
 */
const DOCUMENT_TYPE_DESCRIPTIONS = {
  [DOCUMENT_TYPES.TARGET_MARKET_AUDIENCE]: 'Comprehensive analysis of your ideal customer segments, including demographics, psychographics, behaviors, and needs.',
  [DOCUMENT_TYPES.BUSINESS_PROFILE]: 'Detailed business strategy document covering market analysis, offerings, business model, operations, and growth projections.',
  [DOCUMENT_TYPES.STYLE_GUIDE]: 'Comprehensive guide for ensuring consistent AI communications that align with your brand voice, audience, and business objectives.'
};

/**
 * Recommended users for document types
 */
const DOCUMENT_TYPE_RECOMMENDED_FOR = {
  [DOCUMENT_TYPES.TARGET_MARKET_AUDIENCE]: 'Marketing teams, startup founders, product managers',
  [DOCUMENT_TYPES.BUSINESS_PROFILE]: 'Business strategists, consultants, entrepreneurs',
  [DOCUMENT_TYPES.STYLE_GUIDE]: 'Brand managers, content teams, AI implementation specialists'
};

module.exports = {
  DOCUMENT_TYPES,
  DOCUMENT_TYPE_NAMES,
  DOCUMENT_TYPE_ICONS,
  DOCUMENT_TYPE_DESCRIPTIONS,
  DOCUMENT_TYPE_RECOMMENDED_FOR
};