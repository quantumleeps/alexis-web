import Typography from "typography"

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400'],
    },{
        name: 'Pacifico',
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
    "Quattrocento Sans",
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
          color: '#007c61'
      },
      'a:hover': {
        color: '#0adbd7',
      },
      'h3': {
          fontFamily: "Rock Salt, serif",
        //   color: '#c47c4c'
      }
  })
})

export default typography