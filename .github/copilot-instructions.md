# Jadavpur University Alumni Sydney Website

Static HTML/CSS/JavaScript website for the Jadavpur University Alumni Sydney chapter, built as a traditional multi-page website with image galleries and PDF newsletters. This is a GitHub Pages site hosted at JUAlumniSydney.github.io.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Repository Structure
- **Root contains**: 7 HTML files, 2 CSS files, 7 JavaScript files
- **Key directories**: `css/`, `js/`, `images/`, `img/`
- **Total size**: 163MB (mostly images)
- **Technology**: Pure HTML5, CSS3, jQuery 1.9.1, Jssor slider library

### Server and Development
- **NO BUILD REQUIRED**: This is a static website with no build process
- **Local development server**: `python3 -m http.server 8080`
- **Server startup time**: 2-3 seconds. NEVER CANCEL.
- **Access locally**: `http://localhost:8080`
- **GitHub Pages URL**: `https://jualumnisydney.github.io`

### Essential Commands (All validated and working)
```bash
# Start local server (takes 2-3 seconds)
cd /home/runner/work/JUAlumniSydney.github.io/JUAlumniSydney.github.io
python3 -m http.server 8080

# Test server responsiveness
curl -I http://localhost:8080/

# Stop server (if needed)
pkill -f "python3 -m http.server"
```

## File Structure and Navigation

### Working Pages (All tested and functional)
- **index.html** - Homepage with image slider and welcome content
- **about-us.html** - University history, alumni association info, leadership table
- **events.html** - Event photo galleries organized chronologically (2008-2025)
- **newsletters.html** - PDF newsletter downloads (HQRS and Sydney chapters)
- **upcoming events.html** - Future events calendar
- **executive-committe.html** - Executive committee information

### Known Issues
- **contact-us.php** - Links to non-existent PHP file
- **contact-us.php.html** - Actual contact form exists but not linked properly
- **Missing docs/ directory** - Newsletter PDFs return 404 errors
- **Missing image files** - Some event images return 404 errors

### Key Technologies
- **jQuery 1.9.1**: `js/jquery-1.9.1.min.js`
- **Jssor Slider**: `js/jssor.js`, `js/jssor.slider.js`, `js/jssor.slider1.js`
- **Lightbox**: `js/lightbox.js`, `css/lightbox.css`
- **Custom styles**: `css/style.css`
- **Prototype/Scriptaculous**: `js/prototype.js`, `js/scriptaculous.js`

## Validation and Testing

### Manual Testing Scenarios
After making changes, ALWAYS run through these validation steps:

1. **Start local server** and verify it responds within 5 seconds
2. **Test navigation**:
   - Click each menu item: Home, About Us, Executive Committee, Events, Newsletters, Upcoming Events
   - Verify pages load without JavaScript errors
   - Check footer navigation links work
3. **Test responsive elements**:
   - Image slider on homepage (should auto-advance)
   - Event photo galleries (lightbox functionality)
   - External links in sidebar (should open correctly)
4. **Cross-browser validation**: Test in Chrome/Firefox if possible

### Expected Console Errors (Normal)
- **404 errors for images**: Many event photos are missing - this is expected
- **404 errors for PDFs**: Newsletter docs/ directory doesn't exist - this is expected
- **contact-us.php 404**: Known issue with contact form linking

### Performance Expectations
- **Page load time**: 1-3 seconds for most pages
- **Events page load**: 5-10 seconds (many images)
- **Server response**: Under 500ms
- **Image slider**: Should start within 2 seconds

## Development Guidelines

### Making Changes
- **HTML files**: Direct editing, no compilation needed
- **CSS changes**: Edit `css/style.css` directly
- **JavaScript**: Modify existing JS files or add new ones
- **Images**: Add to `images/` directory, reference in HTML
- **Testing**: Always test locally before committing

### Common Tasks
- **Adding new events**: Update `events.html` with new image gallery section
- **Newsletter updates**: Add links in `newsletters.html` (note: PDFs need to be uploaded separately)
- **Content updates**: Edit HTML files directly
- **Styling changes**: Modify `css/style.css`

### File Naming Conventions
- **HTML files**: lowercase with hyphens (e.g., `about-us.html`)
- **Images**: Mixed case, organized in subdirectories (e.g., `images/event29/1.JPG`)
- **Documents**: Descriptive names in docs/ directory (currently missing)

## Troubleshooting

### Common Issues
1. **Contact form not working**: Use `contact-us.php.html` instead of `contact-us.php`
2. **Images not loading**: Check file paths and case sensitivity
3. **Slider not working**: Verify jQuery and Jssor scripts load correctly
4. **404 errors**: Expected for missing docs/ and some images
5. **Server won't start**: Check if port 8080 is already in use

### Quick Fixes
- **Server issues**: Restart with `python3 -m http.server 8080`
- **Cache problems**: Hard refresh browser (Ctrl+F5)
- **JavaScript errors**: Check browser console for specific issues
- **Broken links**: Update href attributes in HTML files

## Architecture Notes

### Website Structure
- **Multi-page traditional website**: No SPA or modern framework
- **Static hosting**: Designed for GitHub Pages
- **Image-heavy**: Large photo galleries for events
- **PDF integration**: Newsletter downloads (when docs/ exists)
- **Responsive design**: CSS-based responsive layout

### External Dependencies
- **jQuery 1.9.1**: Core JavaScript functionality
- **Jssor**: Image slider/carousel component
- **Lightbox**: Photo gallery overlays
- **Prototype/Scriptaculous**: Legacy JavaScript framework

### Browser Compatibility
- **Modern browsers**: Chrome, Firefox, Safari, Edge
- **Legacy support**: IE8+ (based on CSS comments)
- **Mobile responsive**: Basic responsive design implemented

## Quick Reference

### Essential File Locations
```
├── index.html              # Homepage
├── about-us.html           # About page
├── events.html             # Events gallery (largest file)
├── newsletters.html        # Newsletter downloads
├── upcoming events.html    # Future events
├── contact-us.php.html     # Contact form (note .php.html extension)
├── css/
│   ├── style.css          # Main stylesheet
│   └── lightbox.css       # Photo gallery styles
├── js/
│   ├── jquery-1.9.1.min.js
│   ├── jssor.js           # Image slider
│   └── lightbox.js        # Photo gallery
└── images/                # Event photos, UI elements (163MB total)
```

### Validation Checklist
- [ ] Local server starts in under 5 seconds
- [ ] All main navigation pages load successfully
- [ ] Image slider works on homepage
- [ ] Event galleries load (with expected 404s for missing images)
- [ ] Newsletter links are present (may 404 for missing PDFs)
- [ ] No critical JavaScript errors in console
- [ ] Footer navigation functions correctly
- [ ] Contact form issue documented (php vs php.html)

Always complete this full validation before considering any changes complete.