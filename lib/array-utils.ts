// Array utilities
export function getRandomItem<T>(array: T[]): T | undefined {
  if (array.length === 0) return undefined
  return array[Math.floor(Math.random() * array.length)]
}

// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled
}

export function getRandomItems<T>(array: T[], count: number): T[] {
  if (array.length === 0 || count <= 0) return []
  const shuffled = shuffleArray(array)
  return shuffled.slice(0, count)
}

export function chunkArray<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

export function uniqueArray<T>(array: T[]): T[] {
  return [...new Set(array)]
}

export function uniqueBy<T, K>(array: T[], keyFn: (item: T) => K): T[] {
  const seen = new Set<K>()
  return array.filter(item => {
    const key = keyFn(item)
    if (seen.has(key)) {
      return false
    }
    seen.add(key)
    return true
  })
}

export function groupBy<T, K extends string | number | symbol>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return array.reduce((groups, item) => {
    const key = keyFn(item)
    if (!groups[key]) {
      groups[key] = []
    }
    groups[key].push(item)
    return groups
  }, {} as Record<K, T[]>)
}

export function sortBy<T>(array: T[], keyFn: (item: T) => any, direction: 'asc' | 'desc' = 'asc'): T[] {
  return [...array].sort((a, b) => {
    const aVal = keyFn(a)
    const bVal = keyFn(b)
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1
    if (aVal > bVal) return direction === 'asc' ? 1 : -1
    return 0
  })
}

export function filterBy<T>(array: T[], predicate: (item: T) => boolean): T[] {
  return array.filter(predicate)
}

export function findIndex<T>(array: T[], predicate: (item: T) => boolean): number {
  return array.findIndex(predicate)
}

export function findLast<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      return array[i]
    }
  }
  return undefined
}

export function findLastIndex<T>(array: T[], predicate: (item: T) => boolean): number {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      return i
    }
  }
  return -1
}

export function flatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((flat, item) => {
    return flat.concat(Array.isArray(item) ? item : [item])
  }, [])
}

export function deepFlatten<T>(array: any[]): T[] {
  return array.reduce<T[]>((flat, item) => {
    return flat.concat(Array.isArray(item) ? deepFlatten(item) : [item])
  }, [])
}

export function intersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter(item => array2.includes(item))
}

export function difference<T>(array1: T[], array2: T[]): T[] {
  return array1.filter(item => !array2.includes(item))
}

export function union<T>(array1: T[], array2: T[]): T[] {
  return uniqueArray([...array1, ...array2])
}

export function partition<T>(array: T[], predicate: (item: T) => boolean): [T[], T[]] {
  const truthy: T[] = []
  const falsy: T[] = []
  
  array.forEach(item => {
    if (predicate(item)) {
      truthy.push(item)
    } else {
      falsy.push(item)
    }
  })
  
  return [truthy, falsy]
}

export function zip<T, U>(array1: T[], array2: U[]): [T, U][] {
  const result: [T, U][] = []
  const minLength = Math.min(array1.length, array2.length)
  
  for (let i = 0; i < minLength; i++) {
    result.push([array1[i], array2[i]])
  }
  
  return result
}

export function unzip<T, U>(array: [T, U][]): [T[], U[]] {
  const first: T[] = []
  const second: U[] = []
  
  array.forEach(([a, b]) => {
    first.push(a)
    second.push(b)
  })
  
  return [first, second]
}

export function rotateArray<T>(array: T[], positions: number): T[] {
  const n = array.length
  if (n === 0) return array
  
  const normalizedPositions = ((positions % n) + n) % n
  return [...array.slice(normalizedPositions), ...array.slice(0, normalizedPositions)]
}

export function sample<T>(array: T[], size: number): T[] {
  if (size >= array.length) return shuffleArray(array)
  return getRandomItems(array, size)
}
