function classNames() {
  return Array.prototype.slice.call(arguments).filter(Boolean).join(' ')
}

module.exports = {
  classNames
}
