// theme.js - Sistema di Design Completo per Swidpo

export const theme = {
    // Palette Colori - Luxury Dark
    colors: {
        primary: {
            main: '#E91E63',      // Rosa sensuale
            light: '#F48FB1',
            dark: '#C2185B',
            gradient: 'linear-gradient(135deg, #E91E63 0%, #9C27B0 100%)'
        },
        secondary: {
            main: '#9C27B0',      // Viola profondo
            light: '#BA68C8',
            dark: '#7B1FA2',
            gradient: 'linear-gradient(135deg, #9C27B0 0%, #673AB7 100%)'
        },
        accent: {
            gold: '#FFD700',
            copper: '#B87333',
            platinum: '#E5E4E2'
        },
        background: {
            primary: '#0A0A0F',   // Nero profondo
            secondary: '#151520',
            tertiary: '#1E1E2E',
            card: '#1A1A28',
            overlay: 'rgba(10, 10, 15, 0.95)'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B8B8C8',
            muted: '#7A7A8A',
            disabled: '#4A4A5A'
        },
        border: {
            subtle: 'rgba(255, 255, 255, 0.08)',
            medium: 'rgba(255, 255, 255, 0.15)',
            strong: 'rgba(255, 255, 255, 0.25)'
        },
        status: {
            success: '#4CAF50',
            warning: '#FF9800',
            error: '#F44336',
            info: '#2196F3'
        }
    },

    // Tipografia Raffinata
    typography: {
        fontFamily: {
            primary: '"Playfair Display", "Georgia", serif',
            secondary: '"Inter", "Helvetica Neue", sans-serif',
            mono: '"JetBrains Mono", monospace'
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem'
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            black: 900
        },
        lineHeight: {
            tight: 1.2,
            normal: 1.5,
            relaxed: 1.75
        }
    },

    // Spacing System
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem'
    },

    // Breakpoints Responsive
    breakpoints: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    },

    // Animazioni Fluide
    animations: {
        duration: {
            fast: '150ms',
            normal: '300ms',
            slow: '500ms',
            slower: '700ms'
        },
        easing: {
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }
    },

    // Effetti & Shadows
    effects: {
        shadow: {
            sm: '0 2px 8px rgba(0, 0, 0, 0.4)',
            md: '0 4px 16px rgba(0, 0, 0, 0.5)',
            lg: '0 8px 32px rgba(0, 0, 0, 0.6)',
            xl: '0 16px 48px rgba(0, 0, 0, 0.7)',
            glow: '0 0 20px rgba(233, 30, 99, 0.5)',
            glowStrong: '0 0 40px rgba(233, 30, 99, 0.7)'
        },
        blur: {
            sm: 'blur(4px)',
            md: 'blur(8px)',
            lg: 'blur(16px)',
            xl: 'blur(24px)'
        },
        gradient: {
            overlay: 'linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(10,10,15,0.8) 100%)',
            shimmer: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
        }
    },

    // Border Radius
    borderRadius: {
        none: '0',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px'
    },

    // Z-Index Layers
    zIndex: {
        base: 0,
        dropdown: 1000,
        sticky: 1020,
        fixed: 1030,
        modalBackdrop: 1040,
        modal: 1050,
        popover: 1060,
        tooltip: 1070
    }
};

// CSS Global Styles (da inserire nel CSS principale)
export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&family=Inter:wght@300;400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.typography.fontFamily.secondary};
    background-color: ${theme.colors.background.primary};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.normal};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.primary};
    font-weight: ${theme.typography.fontWeight.bold};
    line-height: ${theme.typography.lineHeight.tight};
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color ${theme.animations.duration.normal} ${theme.animations.easing.easeInOut};
  }

  a:hover {
    color: ${theme.colors.primary.light};
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.background.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary.main};
    border-radius: ${theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary.light};
  }

  ::selection {
    background: ${theme.colors.primary.main};
    color: ${theme.colors.text.primary};
  }
`;

export default theme;