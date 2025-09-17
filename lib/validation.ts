// Validation utilities
export interface ValidationResult {
  isValid: boolean
  error?: string
}

// Email validation
export function validateEmail(email: string): ValidationResult {
  if (!email) {
    return { isValid: false, error: 'Email é obrigatório' }
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Email inválido' }
  }
  
  return { isValid: true }
}

// Phone validation (configurable for different regions)
export function validatePhone(phone: string, countryCode: string = 'PT'): ValidationResult {
  if (!phone) {
    return { isValid: false, error: 'Telefone é obrigatório' }
  }
  
  const cleanedPhone = phone.replace(/\s/g, '')
  
  // Different regex patterns for different countries
  const patterns = {
    PT: /^(\+351|351)?[0-9]{9}$/,
    ES: /^(\+34|34)?[0-9]{9}$/,
    FR: /^(\+33|33)?[0-9]{10}$/,
    INTERNATIONAL: /^(\+[1-9]\d{1,14})$/
  }
  
  const phoneRegex = patterns[countryCode as keyof typeof patterns] || patterns.INTERNATIONAL
  
  if (!phoneRegex.test(cleanedPhone)) {
    return { isValid: false, error: 'Telefone inválido. Use o formato: +351 912 345 678' }
  }
  
  return { isValid: true }
}

// Name validation
export function validateName(name: string): ValidationResult {
  if (!name) {
    return { isValid: false, error: 'Nome é obrigatório' }
  }
  
  if (name.length < 2) {
    return { isValid: false, error: 'Nome deve ter pelo menos 2 caracteres' }
  }
  
  if (name.length > 50) {
    return { isValid: false, error: 'Nome deve ter no máximo 50 caracteres' }
  }
  
  return { isValid: true }
}

// Message validation
export function validateMessage(message: string): ValidationResult {
  if (!message) {
    return { isValid: false, error: 'Mensagem é obrigatória' }
  }
  
  if (message.length < 10) {
    return { isValid: false, error: 'Mensagem deve ter pelo menos 10 caracteres' }
  }
  
  if (message.length > 1000) {
    return { isValid: false, error: 'Mensagem deve ter no máximo 1000 caracteres' }
  }
  
  return { isValid: true }
}

// Form validation
export interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export function validateForm(data: FormData): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}
  
  const nameResult = validateName(data.name)
  if (!nameResult.isValid) {
    errors.name = nameResult.error!
  }
  
  const emailResult = validateEmail(data.email)
  if (!emailResult.isValid) {
    errors.email = emailResult.error!
  }
  
  const phoneResult = validatePhone(data.phone)
  if (!phoneResult.isValid) {
    errors.phone = phoneResult.error!
  }
  
  const messageResult = validateMessage(data.message)
  if (!messageResult.isValid) {
    errors.message = messageResult.error!
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// URL validation
export function validateUrl(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, error: 'URL é obrigatória' }
  }
  
  try {
    new URL(url)
    return { isValid: true }
  } catch {
    return { isValid: false, error: 'URL inválida' }
  }
}

// Password validation
export function validatePassword(password: string): ValidationResult {
  if (!password) {
    return { isValid: false, error: 'Senha é obrigatória' }
  }
  
  if (password.length < 8) {
    return { isValid: false, error: 'Senha deve ter pelo menos 8 caracteres' }
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return { isValid: false, error: 'Senha deve conter pelo menos uma letra minúscula' }
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return { isValid: false, error: 'Senha deve conter pelo menos uma letra maiúscula' }
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return { isValid: false, error: 'Senha deve conter pelo menos um número' }
  }
  
  return { isValid: true }
}
