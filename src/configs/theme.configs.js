import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light"
};

const themeConfigs = {
  custom: ({ mode }) => {
    // 🎨 Deep Indigo/Violet Color Palette
    const VIOLET = colors.deepPurple; 
    const CYAN = colors.cyan;

    const customPalette = mode === themeModes.dark ? {
      // --- Dark Mode Palette ---
      primary: {
        // Deep Violet (500-700 range) for better contrast against dark surfaces
        main: VIOLET[500], // #673AB7
        light: VIOLET[300], // For hover/active states
        dark: VIOLET[700],
        contrastText: "#ffffff"
      },
      secondary: {
        // Vibrant, slightly desaturated Cyan for accent (A200-A400 range)
        main: CYAN.A400, // #00E5FF
        contrastText: "#121212" // Dark text for contrast on bright accent
      },
      background: {
        // According to modern Material Design: Use dark grey, not pure black
        default: "#121212", // Recommended very dark grey
        paper: "#1E1E1E"    // Slightly lighter for elevated surfaces
      },
      text: {
        primary: "#E0E0E0", // Off-white for high-emphasis text
        secondary: "#A0A0A0" // Light grey for secondary text
      }
    } : {
      // --- Light Mode Palette ---
      primary: {
        // Standard Violet (700-900 range) for a bold, clean look
        main: VIOLET[700], // #512DA8
        light: VIOLET[500],
        dark: VIOLET[900],
        contrastText: "#ffffff"
      },
      secondary: {
        // Standard Cyan (A400) for a clean accent
        main: CYAN.A700, // #0091EA
      },
      background: {
        // Soft, off-white background
        default: colors.grey["50"], // Very light off-white
        paper: "#ffffff"
      },
    };

    return createTheme({
      palette: {
        mode,
        ...customPalette
      },
      components: {
        // 🛠️ Component Overrides
        MuiButton: {
          defaultProps: { disableElevation: true },
          styleOverrides: {
            // Apply a subtle radius to all buttons for a softer look
            root: { borderRadius: "6px" } 
          }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    // Slight border radius for a modern feel on paper components (like cards)
                    borderRadius: "8px", 
                }
            }
        }
      }
    });
  }
};

export default themeConfigs;