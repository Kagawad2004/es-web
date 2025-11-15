// Responsive utility functions and breakpoint helpers
export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

// Check if screen is mobile
export const isMobile = () => {
  return typeof window !== 'undefined' && window.innerWidth < 768
}

// Check if screen is tablet
export const isTablet = () => {
  return typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024
}

// Check if screen is desktop
export const isDesktop = () => {
  return typeof window !== 'undefined' && window.innerWidth >= 1024
}

// Get current screen size
export const getScreenSize = () => {
  if (typeof window === 'undefined') return 'lg'
  
  const width = window.innerWidth
  if (width < 640) return 'xs'
  if (width < 768) return 'sm'
  if (width < 1024) return 'md'
  if (width < 1280) return 'lg'
  if (width < 1536) return 'xl'
  return '2xl'
}

// Responsive text sizes
export const responsiveText = {
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
  h4: 'text-lg sm:text-xl md:text-2xl',
  body: 'text-sm sm:text-base md:text-lg',
  caption: 'text-xs sm:text-sm'
}

// Responsive spacing
export const responsiveSpacing = {
  section: 'py-12 sm:py-16 md:py-20 lg:py-24',
  container: 'px-4 sm:px-6 lg:px-8',
  gap: 'gap-4 sm:gap-6 lg:gap-8'
}

// Responsive grid columns
export const responsiveGrid = {
  features: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  cards: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  stats: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
}