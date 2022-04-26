const FontsFamily = {
  Raleway: {
    bold: {
      fontFamily: 'Raleway-Bold'
    },
    regular: {
      fontFamily: 'Raleway-Regular'
    },
    light: {
      fontFamily: 'Raleway-Light'
    }
  }
}

const Fonts = {
  text: {
    regular: {
      ...FontsFamily.Raleway.regular,
      fontSize: 14
    },
    bold: {
      ...FontsFamily.Raleway.bold,
      fontSize: 14
    }
  }
}

export default Fonts