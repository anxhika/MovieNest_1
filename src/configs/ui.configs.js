const uiConfigs = {
  // 🎨 Updated Color & Style Configurations
  style: {
    // Gradient Background Styles - Using Muted & Sophisticated Tones
    gradientBgImage: {
      dark: {
        // Dark theme: More charcoal/indigo fade
        backgroundImage: "linear-gradient(to top, #131417, rgba(19, 20, 23, 0))"
      },
      light: {
        // Light theme: Subtle, warm fade from light background
        backgroundImage: "linear-gradient(to top, #F7F7F7, rgba(247, 247, 247, 0))"
      }
    },
    horizontalGradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to right, #131417, rgba(19, 20, 23, 0))"
      },
      light: {
        backgroundImage: "linear-gradient(to right, #F7F7F7, rgba(247, 247, 247, 0))"
      }
    },

    // Truncate Text Utility (Remains functional)
    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines
    }),

    // Main Content Styling (Remains for structural integrity)
    mainContent: {
      maxWidth: "1440px", // Slightly wider max-width for modern screens
      margin: "auto",
      padding: 3 // Increased padding for more breathing room
    },

    // Dynamic Background Image (Remains functional)
    backgroundImage: (imgPath) => ({
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "darkgrey",
      backgroundImage: `url(${imgPath})`
    }),

    // Card Style - Introducing subtle depth (Post-Neumorphism)
    card: {
      borderRadius: "12px", // Slightly rounder corners
      // Subtle, layered shadow for a 'floating' effect
      boxShadow: "0 6px 16px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.05)",
      overflow: "hidden",
      backgroundColor: "background.paper",
      transition: "transform 0.2s ease-in-out" // Added transition for hover
    },

    // Button Styles - Vibrant Gradient & Clean Secondary
    primaryButton: {
      padding: "0.8rem 1.75rem",
      borderRadius: "8px", // Modern square/soft corners
      textTransform: "uppercase", // Use a clean uppercase look
      fontWeight: 600,
      fontSize: "0.9rem",
      color: "white",
      // Digital Lavender / Blue-Purple Gradient
      background: "linear-gradient(45deg, #7C4DFF 30%, #A78BFA 90%)", 
      "&:hover": {
        // Slightly darker/shifted gradient on hover
        background: "linear-gradient(45deg, #6200EA 30%, #7C4DFF 90%)"
      }
    },
    secondaryButton: {
      padding: "0.8rem 1.75rem",
      borderRadius: "8px",
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "0.9rem",
      color: "#A78BFA", // Primary color outline
      border: "1px solid",
      borderColor: "#A78BFA",
      "&:hover": {
        backgroundColor: "rgba(167, 139, 250, 0.1)", // Light transparent fill
        borderColor: "#A78BFA",
        color: "#7C4DFF"
      }
    },

    // Overlay Utility (Remains functional, slightly higher default opacity)
    overlay: (opacity = 0.6, color = "black") => ({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: color,
      opacity: opacity,
      zIndex: 1
    }),

    // Responsive Container (Updated max-width definitions for common breakpoints)
    responsiveContainer: {
      padding: "1.5rem", // Increased base padding
      margin: "auto",
      maxWidth: {
        xs: "100%",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1440px"
      }
    },

    // Avatar Style - Clean border, subtle change in size
    avatar: {
      width: 64, // Slightly larger avatar
      height: 64,
      borderRadius: "50%",
      border: "3px solid", // Thicker border
      borderColor: "#A78BFA" // Updated to new primary color
    }
  },

  // Size Configurations (Slightly adjusted values)
  size: {
    sidebarWidth: "320px",
    contentMaxWidth: "1440px",
    smallIcon: "20px",
    mediumIcon: "28px",
    largeIcon: "40px"
  },

  // Z-Index Levels (Standardized)
  zIndex: {
    appBar: 1100, // Standard Material UI AppBar zIndex
    drawer: 1200,
    modal: 1300,
    overlay: 1400
  }
};

export default uiConfigs;