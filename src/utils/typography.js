import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['200'],
    },{
        name: 'Permanent Marker',
        styles: ['400'],
    },{
        name: 'Rock Salt',
        styles: ['400'],
    },{
        name: 'Quattrocento Sans',
        styles: ['700'],
    }
  ],
  headerFontFamily: [
    "Permanent Marker",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Montserrat", "serif"],
  overrideStyles: () => ({
      a: {
          textDecoration: 'none',
          color: 'white'
      },
      'a:hover': {
        textDecoration: 'underline',
      },
      'h3': {
          fontFamily: "Rock Salt, serif",
        //   color: '#c47c4c'
      }
  })
})

export default typography