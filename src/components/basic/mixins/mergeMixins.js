const mergeMixins = {
  data() {
    return {
      // object yang sama tidak akan replace ke vue
      age: '22',
      language: 'php'
    }
  },
}

export default mergeMixins;