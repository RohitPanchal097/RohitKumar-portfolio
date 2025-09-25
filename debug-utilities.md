# How to Check if Utility Classes and @apply are Working

## Method 1: Visual Test (Current Page)
I've added test elements to your Home component that will show:
- **Star utility**: White circular elements with glow effect
- **Meteor utility**: White gradient elements
- **Cosmic button**: Styled button with hover effects
- **Gradient border**: Element with gradient border
- **Text glow**: Text with glow effect

## Method 2: Browser Developer Tools

### Step 1: Open Developer Tools
- Press `F12` or right-click → "Inspect Element"
- Go to the "Elements" tab

### Step 2: Check if Classes are Applied
1. Find an element with your utility class (e.g., `<div class="star">`)
2. In the "Styles" panel, look for:
   - The utility class name (e.g., `.star`)
   - The `@apply` rules should be expanded showing the actual CSS properties

### Step 3: Check Computed Styles
1. Select an element with your utility class
2. In the "Computed" tab, look for the properties that should be applied:
   - For `.star`: `position: absolute`, `border-radius: 50%`, `background-color: white`, `box-shadow`
   - For `.meteor`: `position: absolute`, `background: linear-gradient(...)`, `border-radius: 50%`

## Method 3: Console Testing

### Test in Browser Console
```javascript
// Check if a utility class exists
const starElement = document.querySelector('.star');
if (starElement) {
    const computedStyle = window.getComputedStyle(starElement);
    console.log('Star element found!');
    console.log('Position:', computedStyle.position);
    console.log('Background:', computedStyle.backgroundColor);
    console.log('Box-shadow:', computedStyle.boxShadow);
} else {
    console.log('No star element found');
}
```

## Method 4: CSS Inspection

### Check if @apply is Working
1. In Developer Tools → Elements tab
2. Find an element with your utility class
3. In the Styles panel, you should see:
   ```
   .star {
     position: absolute;
     border-radius: 50%;
     background-color: white;
     box-shadow: 0 0 10px 2px rgba(255,255,255,0.4);
   }
   ```

## Method 5: Build Process Check

### Check if Tailwind is Processing @utility
1. Look for any build errors in the terminal
2. Check if the CSS is being generated correctly
3. Verify that `@utility` directives are being processed

## Common Issues:

1. **@utility not processed**: Make sure you're using a Tailwind CSS plugin that supports `@utility`
2. **Classes not applied**: Check if the class name matches exactly
3. **Styles not visible**: Check z-index, positioning, or color contrast
4. **Build errors**: Check terminal for CSS compilation errors

## Quick Fix Test:
If utilities aren't working, try adding the styles directly:
```css
.test-star {
  position: absolute;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0 10px 2px rgba(255,255,255,0.4);
}
```

