# 🚴 Biking Website - Group Ride Planning

A modern, responsive website for planning and organizing group biking rides, inspired by the Travel Like AP website design.

## ✨ Features

### 🎯 **Three Main Pages**
- **Upcoming Rides** (`/`) - Hero section with upcoming group rides
- **Previous Rides** (`/previous`) - Past rides with statistics and galleries
- **Contact** (`/contact`) - Contact form and information

### 📱 **Fully Responsive Design**
- **Mobile-First Approach** - Optimized for all device sizes
- **Dynamic Breakpoints** - Automatically adapts to screen dimensions
- **Flexible Grid System** - Cards and layouts adjust seamlessly
- **Touch-Friendly Interface** - Optimized for mobile devices

## 🎨 **Responsive Breakpoints**

| Device | Width Range | Layout | Features |
|--------|-------------|---------|----------|
| **Mobile (Small)** | < 480px | Single column | Stacked navigation, full-width cards |
| **Mobile (Large)** | 481px - 767px | Single column | Horizontal navigation, optimized spacing |
| **Tablet** | 768px - 1023px | Two columns | Side-by-side contact layout |
| **Desktop** | 1024px - 1199px | Multi-column | Full grid layout, enhanced spacing |
| **Large Desktop** | ≥ 1200px | Maximum width | Optimal viewing experience |

## 🚀 **CSS Features**

### **CSS Variables & Theming**
```css
:root {
  --primary-color: #ff6b35;
  --mobile: 480px;
  --tablet: 768px;
  --desktop: 1024px;
  --large-desktop: 1200px;
}
```

### **Fluid Typography**
```css
.hero-title {
  font-size: clamp(2rem, 8vw, 3.5rem);
}
```

### **Responsive Spacing**
```css
.rides-section {
  padding: 0 1rem clamp(2rem, 5vw, 3rem);
}
```

### **Flexible Grid System**
```css
.rides-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
}
```

## 🧪 **Testing Responsiveness**

### **Development Server**
```bash
cd biking-website
npm run dev
```

### **Browser Testing**
1. **Open DevTools** (F12)
2. **Toggle Device Toolbar** (Ctrl+Shift+M)
3. **Test Different Devices**:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1024px+)

### **Responsive Test Component**
The website includes a temporary responsive test component (top-right corner) showing:
- Current screen dimensions
- Active breakpoint
- Real-time updates on resize

## 📱 **Mobile Optimizations**

- **Touch-Friendly Buttons** - Minimum 44px touch targets
- **Optimized Typography** - Readable on small screens
- **Efficient Navigation** - Collapsible menu for mobile
- **Fast Loading** - Optimized images and minimal CSS

## 🖥️ **Desktop Enhancements**

- **Hover Effects** - Interactive card animations
- **Enhanced Spacing** - Comfortable reading experience
- **Multi-Column Layouts** - Efficient use of screen space
- **Smooth Transitions** - Professional animations

## 🎯 **Accessibility Features**

- **High Contrast Mode** - Respects user preferences
- **Reduced Motion** - Accommodates motion sensitivity
- **Semantic HTML** - Screen reader friendly
- **Keyboard Navigation** - Full keyboard support

## 🖨️ **Print Styles**

- **Clean Layout** - Optimized for printing
- **Hidden Elements** - Navigation and buttons hidden
- **Card Layouts** - Preserved for documentation

## 🛠️ **Technical Stack**

- **React 19** - Modern React with hooks
- **React Router** - Client-side routing
- **CSS3** - Advanced responsive features
- **Vite** - Fast development server

## 📁 **Project Structure**

```
src/
├── components/
│   ├── Navigation.jsx
│   └── ResponsiveTest.jsx
├── pages/
│   ├── UpcomingRides.jsx
│   ├── PreviousRides.jsx
│   └── Contact.jsx
├── App.jsx
├── App.css
└── main.jsx
```

## 🚀 **Getting Started**

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **View in Browser**
   - Open `http://localhost:5173`
   - Test responsiveness using browser DevTools
   - Resize window to see dynamic changes

## 🎨 **Customization**

### **Colors**
Update CSS variables in `:root` for consistent theming:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
}
```

### **Breakpoints**
Modify responsive breakpoints:
```css
:root {
  --mobile: 480px;
  --tablet: 768px;
  --desktop: 1024px;
}
```

## 📱 **Browser Support**

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🔧 **Performance Features**

- **CSS Variables** - Efficient theming
- **Clamp() Functions** - Fluid responsive values
- **Optimized Transitions** - Smooth animations
- **Efficient Grid** - CSS Grid for layouts

---

**Built with ❤️ using modern web technologies for the best responsive experience across all devices.**
