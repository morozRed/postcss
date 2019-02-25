/**
 * Visitor performs actions on nodes
 */
class Visitor {
  constructor (visitRule, callback) {
    this.visitRule = visitRule
    this._callback = callback
  }

  onDecl (decl) {
    console.log('\ndeclaration visited')
    this._callback(decl)
  }

  onRule (rule) {
    console.log('\nrule visited')
    this._callback(rule)
  }

  onAtRule (atrule) {
    console.log('\natrule visited')
    this._callback(atrule)
  }

  ableToAccept (node) {
    return node.type === this.visitRule
  }
}

export default Visitor
