// Old value
// values: {
//   xs: 0,
//   sm: 425,
//   md: 768,
//   lg: 1024,
//   xl: 1440
// }

const breakpoints = () => ({
  values: {
    xs: 0,
    sm: 768, // max for mobile
    md: 1024, // max for table
    lg: 1440, // from here will be desktop
    xl: 1920,
  },
});

export default breakpoints;
