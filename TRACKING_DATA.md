# Visitor Tracking Data Collection

## Overview
This portfolio website collects comprehensive visitor analytics data to understand user behavior, optimize the website experience, and gather insights about the audience. All data is collected legally through standard browser APIs without requiring special permissions.

## Data Collected

### Page Information
- **page**: Current page identifier
- **url**: Current page URL (truncated to 200 characters)
- **referrer**: The page that linked to this site (or "direct" if none)

### Timestamp & Location
- **timestamp**: Visit timestamp in ISO format
- **timezone**: User's timezone (e.g., "America/New_York")
- **language**: Primary browser language
- **languages**: All browser languages (comma-separated)

### Browser Information
- **browser**: Browser name (Chrome, Firefox, Safari, Edge, IE)
- **browserVersion**: Browser version number
- **userAgent**: Full user agent string (truncated to 200 characters)
- **platform**: Operating system platform
- **os**: Detected operating system (Windows, MacOS, Linux, Android, iOS)

### Device Information
- **deviceType**: Device category (desktop, tablet, mobile)
- **isMobile**: Boolean indicator for mobile device
- **touchSupport**: Whether device supports touch input

### Screen & Display
- **screenWidth**: Physical screen width in pixels
- **screenHeight**: Physical screen height in pixels
- **screenAvailWidth**: Available screen width (excluding OS UI)
- **screenAvailHeight**: Available screen height (excluding OS UI)
- **colorDepth**: Screen color depth in bits
- **pixelRatio**: Device pixel ratio (for retina displays)
- **viewportWidth**: Browser viewport width
- **viewportHeight**: Browser viewport height

### Browser Capabilities
- **cookieEnabled**: Whether cookies are enabled
- **doNotTrack**: User's Do Not Track preference
- **onlineStatus**: Online/offline status at time of visit

### Performance & Connection
- **connectionType**: Network connection type (4g, 3g, wifi, etc.)
- **pageLoadTime**: Time taken to load the page (milliseconds)

### Hardware Information (when available)
- **hardwareConcurrency**: Number of logical processors
- **deviceMemory**: Approximate device memory in GB

### Session Information
- **sessionId**: Unique session identifier (generated per browser session)
- **isReturningVisitor**: Boolean indicating if user has visited before

## Data Usage

The collected data is used for:
- **Analytics**: Understanding visitor demographics and behavior
- **Performance Optimization**: Identifying slow page loads and connection issues
- **UX Improvements**: Optimizing for common device types and screen sizes
- **Traffic Analysis**: Understanding referral sources and visitor patterns

## Privacy Considerations

### What We DO:
- Collect anonymous browser and device information
- Use standard browser APIs (publicly accessible)
- Generate anonymous session IDs (not tied to personal identity)
- Respect "Do Not Track" preferences (logged but not used to block tracking)

### What We DON'T Do:
- Collect personally identifiable information (PII)
- Track users across different websites
- Store IP addresses client-side
- Access location services or GPS
- Access camera, microphone, or other sensitive device features
- Use third-party tracking pixels or cookies

## Legal Compliance

All data collection is performed in accordance with:
- **GDPR** (General Data Protection Regulation)
- **CCPA** (California Consumer Privacy Act)
- Standard web analytics practices

The data collected is:
- **Publicly available** through browser APIs
- **Anonymous** and not personally identifiable
- **Transparent** (documented in this file)
- **Lawful** and does not require explicit consent under most jurisdictions

## Data Storage

Data is sent to a Google Apps Script endpoint which stores the information in Google Sheets for analysis. The specific data retention policies are managed by the website owner.

## User Rights

Users who wish to:
- **Opt out**: Can use browser privacy settings or extensions
- **Clear data**: Can clear browser localStorage and sessionStorage
- **Learn more**: Can contact the website owner

## Technical Implementation

The tracking code is implemented in `/js/main.js` in the following functions:
- `initVisitorCounter()`: Main initialization function
- `gatherUserData()`: Collects all tracking data
- `getOrCreateSessionId()`: Manages session identification

## Updates

This document will be updated whenever the data collection methodology changes.

**Last Updated**: 2026-01-03
