export function convertSecondsToReadableObject(seconds: number) {
  seconds = seconds || 0
  seconds = Number(seconds)
  seconds = Math.abs(seconds)

  const d = Math.floor(seconds / (3600 * 24))
  const h = Math.floor((seconds % (3600 * 24)) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  let parts = {}

  if (d >= 0) {
    parts = { ...parts, day: d }
  }

  if (h >= 0) {
    parts = { ...parts, hours: h }
  }

  if (m >= 0) {
    parts = { ...parts, min: m }
  }

  if (s >= 0) {
    parts = { ...parts, second: s }
  }

  return parts
}

export function convertSecondsToReadableString(seconds: number) {
  seconds = seconds || 0
  seconds = Number(seconds)
  seconds = Math.abs(seconds)

  const d = Math.floor(seconds / (3600 * 24))
  const h = Math.floor((seconds % (3600 * 24)) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  const parts = []

  if (d > 0) {
    parts.push(d + " day" + (d > 1 ? "s" : ""))
  }

  if (h > 0) {
    parts.push(h + " hour" + (h > 1 ? "s" : ""))
  }

  if (m > 0) {
    parts.push(m + " minute" + (m > 1 ? "s" : ""))
  }

  if (s > 0) {
    parts.push(s + " second" + (s > 1 ? "s" : ""))
  }

  return parts.join(" : ")
}
