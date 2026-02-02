# Mercedes 124 300CE-24 Restoration Donation Website - PRD

## Original Problem Statement
Build a donation website for Mercedes 124 3.0L coupe from 1990 restoration project with:
- Bank account details: LT26 3250 0291 3196 9055, BIC/SWIFT: REVOLT21
- Multiple donation options
- Complete features: story, gallery, progress tracker, blog
- Vintage/classic design style (nostalgic Mercedes era feel)
- Animated web timeline showing funny 15-year journey
- Black Mercedes 124 300CE24 two-door coupe images

## User Personas
1. **Classic Car Enthusiasts** - Appreciate Mercedes heritage and want to support restoration
2. **Nostalgic Donors** - Connect emotionally with the 15-year journey story
3. **Automotive History Buffs** - Value preserving vintage vehicles

## Architecture & Tech Stack
- **Frontend**: React, Tailwind CSS, Shadcn UI components
- **Backend**: FastAPI, Python
- **Database**: MongoDB
- **Styling**: Vintage color palette (cream, tan, brown, gold)

## What's Been Implemented (Jan 2025)

### Frontend (Complete)
✅ Hero section with vintage styling and Mercedes background
✅ Story section with car history and value propositions
✅ Animated timeline (9 humorous milestones from 2010-2025)
✅ Donation section with:
  - Bank transfer details (Revolut)
  - Card payment placeholder
  - Mobile payment placeholder
  - Suggested contribution tiers (€25, €100, €500, Custom)
  - Copy-to-clipboard functionality
✅ Photo gallery (8 Mercedes 124 images)
✅ Progress tracker (6 restoration phases)
✅ Blog section (3 recent updates)
✅ Footer with contact and social links
✅ Responsive design
✅ Smooth scroll animations
✅ Hover effects and transitions

### Design Features
- Vintage color scheme (cream #f5f1e8, tan #d4c5a9, brown #8b7355, gold #d4af37)
- Classic Mercedes era aesthetic
- Parallax hero background
- Animated timeline with emojis
- Gold accents throughout
- Vintage badges and borders

## Current Mock Data
- All content is currently static
- Blog posts are placeholder content
- Progress percentages are demo values
- Gallery uses curated Mercedes images from Unsplash
- Timeline milestones are humorous story elements

## Prioritized Backlog

### P0 (Critical)
- Add actual owner photos when available
- Update blog with real restoration updates

### P1 (High Priority)
- Backend API for blog management
- Progress tracker backend (update restoration phases)
- Email collection for donation notifications
- Stripe payment integration
- PayPal integration

### P2 (Medium Priority)
- Admin dashboard for content updates
- Email newsletter for milestone updates
- Gallery upload functionality
- Social media sharing buttons
- Donation tracking/goal counter

### P3 (Nice to Have)
- Donation wall (show donor names with permission)
- Video upload for restoration updates
- Before/after slider for restoration progress
- Multi-language support

## Next Tasks
1. User to provide actual photos/content (optional)
2. Build backend API for dynamic content
3. Integrate payment gateways (Stripe/PayPal)
4. Add email collection system
5. Create admin panel for updates
6. Testing and deployment

## Notes
- Frontend is fully functional with mock data
- Bank details are prominently displayed for manual transfers
- Website has strong emotional appeal through storytelling
- Vintage design successfully evokes Mercedes heritage era
- Timeline animation creates engagement and humor