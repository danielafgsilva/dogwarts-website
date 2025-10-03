"use client"

import { useState, useCallback } from 'react'
import { validateForm, type FormData } from '@/lib/validation'

export interface UseFormOptions {
  initialValues?: Partial<FormData>
  onSubmit?: (data: FormData) => void | Promise<void>
  validateOnChange?: boolean
  validateOnBlur?: boolean
}

export interface UseFormReturn {
  values: Partial<FormData>
  errors: Record<string, string>
  isSubmitting: boolean
  isValid: boolean
  setValue: (field: keyof FormData, value: string) => void
  setError: (field: keyof FormData, error: string) => void
  clearError: (field: keyof FormData) => void
  clearErrors: () => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  handleChange: (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleBlur: (field: keyof FormData) => (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  reset: () => void
}

export function useForm(options: UseFormOptions = {}): UseFormReturn {
  const {
    initialValues = {},
    onSubmit,
    validateOnChange = true,
    validateOnBlur = true,
  } = options

  const [values, setValues] = useState<Partial<FormData>>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = useCallback((data: Partial<FormData>) => {
    const validation = validateForm(data as FormData)
    setErrors(validation.errors)
    return validation.isValid
  }, [])

  const setValue = useCallback((field: keyof FormData, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }))
    
    if (validateOnChange) {
      const newValues = { ...values, [field]: value }
      validate(newValues)
    }
  }, [values, validateOnChange, validate])

  const setError = useCallback((field: keyof FormData, error: string) => {
    setErrors(prev => ({ ...prev, [field]: error }))
  }, [])

  const clearError = useCallback((field: keyof FormData) => {
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }, [])

  const clearErrors = useCallback(() => {
    setErrors({})
  }, [])

  const handleChange = useCallback((field: keyof FormData) => {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(field, e.target.value)
    }
  }, [setValue])

  const handleBlur = useCallback((field: keyof FormData) => {
    return (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (validateOnBlur) {
        const newValues = { ...values, [field]: e.target.value }
        validate(newValues)
      }
    }
  }, [values, validateOnBlur, validate])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    const isValid = validate(values as FormData)
    if (!isValid) return

    setIsSubmitting(true)
    try {
      await onSubmit?.(values as FormData)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }, [values, validate, onSubmit])

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
  }, [initialValues])

  const isValid = Object.keys(errors).length === 0 && 
    Boolean(values.name && 
    values.email && 
    values.phone && 
    values.message)

  return {
    values,
    errors,
    isSubmitting,
    isValid,
    setValue,
    setError,
    clearError,
    clearErrors,
    handleSubmit,
    handleChange,
    handleBlur,
    reset,
  }
}
