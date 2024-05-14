export default function hasTouchSupport() {
  if (typeof window === 'undefined') {
    return false // Not in a browser environment, assume no touch support
  }
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}
