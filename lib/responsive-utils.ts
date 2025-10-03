/**
 * Responsive utility classes for consistent design across all screen sizes
 * Following Tailwind CSS mobile-first approach
 */

export const responsive = {
  // Container and spacing
  container: "container mx-auto px-4 sm:px-6 lg:px-8",
  containerNarrow: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl",
  containerWide: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl",
  
  // Section padding
  sectionPadding: "py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32",
  sectionPaddingSmall: "py-8 sm:py-12 md:py-16 lg:py-20",
  sectionPaddingLarge: "py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40",
  
  // Typography - Headings
  heading1: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight",
  heading2: "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight",
  heading3: "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight",
  heading4: "text-base sm:text-lg md:text-xl lg:text-2xl font-semibold",
  
  // Typography - Body text
  bodyLarge: "text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed",
  bodyMedium: "text-sm sm:text-base md:text-lg leading-relaxed",
  bodySmall: "text-xs sm:text-sm md:text-base leading-relaxed",
  
  // Grid systems
  grid2: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",
  grid3: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
  grid4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
  gridAuto: "grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 lg:gap-8",
  
  // Flexbox utilities
  flexRow: "flex flex-col sm:flex-row gap-4 sm:gap-6",
  flexCol: "flex flex-col gap-4 sm:gap-6",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  
  // Card layouts
  cardGrid: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8",
  cardStack: "space-y-6 lg:space-y-8",
  
  // Button groups
  buttonGroup: "flex flex-col sm:flex-row gap-3 sm:gap-4",
  buttonGroupCenter: "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center",
  
  // Image containers
  imageContainer: "aspect-video sm:aspect-square lg:aspect-video rounded-lg overflow-hidden",
  imageContainerSquare: "aspect-square rounded-lg overflow-hidden",
  imageContainerWide: "aspect-[21/9] rounded-lg overflow-hidden",
  
  // Text alignment
  textCenter: "text-center",
  textCenterLg: "text-center lg:text-left",
  textCenterMd: "text-center md:text-left",
  
  // Max widths for content
  maxWidth: {
    xs: "max-w-xs",
    sm: "max-w-sm", 
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    prose: "max-w-prose",
    screen: "max-w-screen-xl",
  },
  
  // Spacing utilities
  spaceY: {
    sm: "space-y-4 sm:space-y-6",
    md: "space-y-6 sm:space-y-8", 
    lg: "space-y-8 sm:space-y-10",
  },
  
  // Background gradients
  gradient: {
    primary: "bg-gradient-to-br from-primary/10 via-primary/5 to-transparent",
    secondary: "bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent",
    accent: "bg-gradient-to-br from-accent/10 via-accent/5 to-transparent",
    card: "bg-gradient-to-br from-card to-background",
    muted: "bg-gradient-to-br from-muted/30 to-muted/10",
  },
} as const;

// Brand color utilities for consistent usage
export const brand = {
  colors: {
    primary: "text-primary bg-primary border-primary",
    secondary: "text-secondary bg-secondary border-secondary", 
    accent: "text-accent bg-accent border-accent",
    muted: "text-muted-foreground bg-muted border-muted",
  },
  
  // Brand-specific gradients
  gradients: {
    hero: "bg-gradient-to-br from-background via-card to-muted/30",
    card: "bg-gradient-to-br from-card to-background", 
    accent: "bg-gradient-to-br from-accent/10 to-primary/10",
  },
  
  // Brand spacing
  spacing: {
    section: responsive.sectionPadding,
    container: responsive.container,
  },
} as const;
