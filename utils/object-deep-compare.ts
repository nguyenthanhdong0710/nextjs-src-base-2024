/**
 * Checks the deep equality of two values.
 * @param obj1 - First object to compare.
 * @param obj2 - Second object to compare.
 * @returns `true` if both objects are deeply equal, otherwise `false`.
 */
export function objectDeepCompare(obj1: Record<any, any>, obj2: Record<any, any>): boolean {
  if (obj1 === obj2) {
    return true
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false
  }

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !objectDeepCompare(obj1[key], obj2[key])) {
      return false
    }
  }

  return true
}
