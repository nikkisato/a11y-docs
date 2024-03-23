export default function hasTouchSupport() {
  if (typeof window === 'undefined') {
    return false // Not in a browser environment, assume no touch support
  }
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

//if (typeof window !== 'undefined' && hasTouchSupport()) {
//     console.log('Mobile device detected');
// } else {
//   console.log('Desktop device detected');
// }
