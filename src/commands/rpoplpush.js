export function rpoplpush(source, destination) {
  if (this.data.has(source) && !(this.data.get(source) instanceof Array)) {
    throw new Error(
      'WRONGTYPE Operation against a key holding the wrong kind of value'
    )
  }
  if (
    this.data.has(destination) &&
    !(this.data.get(destination) instanceof Array)
  ) {
    return null
  }

  if (!this.data.has(source) || this.data.get(source).length === 0) {
    return null
  }

  if (!this.data.has(destination)) {
    this.data.set(destination, [])
  }

  const newSource = this.data.get(source)
  const item = newSource.pop()

  const newDest = this.data.get(destination)
  newDest.unshift(item)

  this.data.set(source, newSource)
  this.data.set(destination, newDest)

  return item
}

export function rpoplpushBuffer(source, destination) {
  return rpoplpush.call(this, source, destination)
}
