// Object utilities
export function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  keys.forEach(key => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
}

export function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  const result = { ...obj }
  keys.forEach(key => {
    delete result[key]
  })
  return result
}

export function keys<T extends Record<string, any>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

export function values<T extends Record<string, any>>(obj: T): T[keyof T][] {
  return Object.values(obj)
}

export function entries<T extends Record<string, any>>(obj: T): [keyof T, T[keyof T]][]
export function entries<T>(obj: T): [string, any][] {
  return Object.entries(obj)
}

export function isEmpty(obj: any): boolean {
  if (obj == null) return true
  if (Array.isArray(obj) || typeof obj === 'string') return obj.length === 0
  if (typeof obj === 'object') return Object.keys(obj).length === 0
  return false
}

export function isEqual(a: any, b: any): boolean {
  if (a === b) return true
  if (a == null || b == null) return false
  if (typeof a !== typeof b) return false
  
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    return a.every((val, index) => isEqual(val, b[index]))
  }
  
  if (typeof a === 'object') {
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    
    if (keysA.length !== keysB.length) return false
    return keysA.every(key => isEqual(a[key], b[key]))
  }
  
  return false
}

export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime()) as any
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as any
  if (typeof obj === 'object') {
    const cloned = {} as T
    Object.keys(obj).forEach(key => {
      cloned[key as keyof T] = deepClone((obj as any)[key])
    })
    return cloned
  }
  return obj
}

export function merge<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T {
  const result = { ...target }
  
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      const sourceValue = source[key]
      const targetValue = result[key]
      
      if (isObject(sourceValue) && isObject(targetValue)) {
        result[key] = merge(targetValue, sourceValue)
      } else {
        result[key] = sourceValue
      }
    })
  })
  
  return result
}

export function deepMerge<T extends Record<string, any>>(target: T, ...sources: Partial<T>[]): T {
  const result = deepClone(target)
  
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      const sourceValue = source[key]
      const targetValue = result[key]
      
      if (isObject(sourceValue) && isObject(targetValue)) {
        result[key] = deepMerge(targetValue, sourceValue)
      } else {
        result[key] = sourceValue
      }
    })
  })
  
  return result
}

export function flattenObject(obj: any, prefix = ''): Record<string, any> {
  const flattened: Record<string, any> = {}
  
  Object.keys(obj).forEach(key => {
    const newKey = prefix ? `${prefix}.${key}` : key
    const value = obj[key]
    
    if (isObject(value) && !Array.isArray(value)) {
      Object.assign(flattened, flattenObject(value, newKey))
    } else {
      flattened[newKey] = value
    }
  })
  
  return flattened
}

export function unflattenObject(obj: Record<string, any>): any {
  const result: any = {}
  
  Object.keys(obj).forEach(key => {
    const keys = key.split('.')
    let current = result
    
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i]
      if (!(k in current)) {
        current[k] = {}
      }
      current = current[k]
    }
    
    current[keys[keys.length - 1]] = obj[key]
  })
  
  return result
}

export function mapValues<T, U>(
  obj: Record<string, T>,
  fn: (value: T, key: string) => U
): Record<string, U> {
  const result: Record<string, U> = {}
  Object.keys(obj).forEach(key => {
    result[key] = fn(obj[key], key)
  })
  return result
}

export function mapKeys<T>(
  obj: Record<string, T>,
  fn: (key: string, value: T) => string
): Record<string, T> {
  const result: Record<string, T> = {}
  Object.keys(obj).forEach(key => {
    const newKey = fn(key, obj[key])
    result[newKey] = obj[key]
  })
  return result
}

export function invert<T extends Record<string, string | number>>(obj: T): Record<T[keyof T], keyof T> {
  const result: any = {}
  Object.keys(obj).forEach(key => {
    result[obj[key]] = key
  })
  return result
}

export function fromPairs<T>(pairs: [string, T][]): Record<string, T> {
  const result: Record<string, T> = {}
  pairs.forEach(([key, value]) => {
    result[key] = value
  })
  return result
}

export function toPairs<T>(obj: Record<string, T>): [string, T][] {
  return Object.entries(obj)
}

export function get<T>(obj: any, path: string, defaultValue?: T): T | undefined {
  const keys = path.split('.')
  let current = obj
  
  for (const key of keys) {
    if (current == null || typeof current !== 'object') {
      return defaultValue
    }
    current = current[key]
  }
  
  return current !== undefined ? current : defaultValue
}

export function set<T>(obj: any, path: string, value: T): any {
  const keys = path.split('.')
  const result = { ...obj }
  let current = result
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {}
    }
    current = current[key]
  }
  
  current[keys[keys.length - 1]] = value
  return result
}

export function has(obj: any, path: string): boolean {
  const keys = path.split('.')
  let current = obj
  
  for (const key of keys) {
    if (current == null || typeof current !== 'object' || !(key in current)) {
      return false
    }
    current = current[key]
  }
  
  return true
}

export function unset(obj: any, path: string): any {
  const keys = path.split('.')
  const result = { ...obj }
  let current = result
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (!(key in current) || typeof current[key] !== 'object') {
      return result
    }
    current = current[key]
  }
  
  delete current[keys[keys.length - 1]]
  return result
}

function isObject(value: any): value is Record<string, any> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}
