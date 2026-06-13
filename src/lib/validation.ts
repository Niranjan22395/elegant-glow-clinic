import { z } from 'zod';

// Phone number validation schema (Indian format)
export const phoneSchema = z
  .string()
  .min(1, 'Phone number is required')
  .regex(
    /^(\+91|91)?[6-9]\d{9}$/,
    'Please enter a valid Indian phone number (10 digits starting with 6-9)'
  );

// Email validation schema
export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Please enter a valid email address');

// Name validation schema
export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must not exceed 50 characters')
  .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces');

// Message validation schema
export const messageSchema = z
  .string()
  .max(500, 'Message must not exceed 500 characters')
  .optional();

// Date validation schema (future dates only)
export const futureDateSchema = z
  .string()
  .min(1, 'Date is required')
  .refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, 'Please select a future date');

// Service selection validation schema
export const serviceSchema = z
  .string()
  .min(1, 'Please select a service');

// Appointment form validation schema
export const appointmentFormSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  service: serviceSchema,
  date: futureDateSchema,
  message: messageSchema,
  honeypot: z.string().max(0, 'Bot detected').optional(), // Should be empty
});

// Contact form validation schema
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  subject: z.string().min(1, 'Subject is required').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500),
  honeypot: z.string().max(0, 'Bot detected').optional(),
});

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: emailSchema,
});

// Type exports
export type AppointmentFormInput = z.infer<typeof appointmentFormSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;

// Validation helper functions
export const validateAppointmentForm = (data: unknown) => {
  return appointmentFormSchema.safeParse(data);
};

export const validateContactForm = (data: unknown) => {
  return contactFormSchema.safeParse(data);
};

export const validateNewsletter = (data: unknown) => {
  return newsletterSchema.safeParse(data);
};

// Custom validation functions
export const isValidIndianPhone = (phone: string): boolean => {
  const cleaned = phone.replace(/\s/g, '');
  return /^(\+91|91)?[6-9]\d{9}$/.test(cleaned);
};

export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/\s+/g, ' '); // Normalize whitespace
};

// Made with Bob
