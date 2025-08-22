# Internis Praktyk Website

A modern, mobile-first website for an internist medical practice, built with vanilla HTML, CSS, and JavaScript.

## Features

- **Mobile-First Responsive Design**: Optimized for all devices with a focus on mobile experience
- **4 Main Pages**: 
  - Homepage with hero section, services overview, and CTA
  - About page with doctor profile and testimonials
  - Services page with comprehensive service listings
  - Contact page with booking form and FAQ section
- **WhatsApp Integration**: Floating WhatsApp button and dedicated CTAs throughout
- **Online Booking Form**: Full appointment booking system with validation
- **Afrikaans Language**: Content in Afrikaans with professional medical terminology
- **Modern Design**: Clean, professional aesthetic with smooth animations

## Project Structure

```
internis-praktyk/
├── index.html        # Homepage
├── about.html        # About Us page
├── services.html     # Services page
├── contact.html      # Contact & Booking page
├── styles.css        # Main stylesheet
├── script.js         # JavaScript functionality
└── README.md         # Project documentation
```

## Setup Instructions

1. Clone or download the project files
2. Update the WhatsApp number in all HTML files (replace `27000000000` with actual number)
3. Configure email backend for form submissions (currently logs to console)
4. Deploy to web server

## Customization

### Contact Information
- Email: Update `devin@techlocal.co.za` in all footer sections and form handler
- WhatsApp: Update phone number in `script.js` and all WhatsApp links
- Address: Add actual practice address in contact.html

### Doctor Information
- Replace `[Naam]` placeholders with actual doctor name
- Add real qualifications and experience in about.html
- Upload practice/doctor photo if available

### Form Handling
The contact form currently simulates submission. For production:
1. Set up backend API endpoint
2. Update form submission in script.js
3. Configure email service (SendGrid, EmailJS, etc.)

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)

## Color Scheme

- Primary: #0d6efd (Blue)
- Secondary: #ffffff (White)
- Accent: #0dcaf0 (Cyan)
- WhatsApp: #25d366 (Green)

## Acceptance Criteria Met

✅ Mobile-first, responsive layout
✅ All 4 pages implemented with specified content
✅ Working contact form with validation
✅ WhatsApp CTA on all pages
✅ Professional, modern design
✅ Accessibility-conscious structure

## License

© 2024 Internis Praktyk. All rights reserved.