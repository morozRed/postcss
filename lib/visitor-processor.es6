const VisitorProcessor = {
  run (ast) {
    ast.walk(node => {
      for (let visitor of ast.visitors) {
        visitor.ableToAccept(node) && node.accept(visitor)
      }
    })
  }
}

export default VisitorProcessor
