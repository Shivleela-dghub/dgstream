import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid work email"),
  company: z.string().min(2, "Company name is required"),
 city: z
    .string()
    .trim()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be less than 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Please enter a valid city name"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number"),
  services: z.array(z.string()).min(1, "Select at least 1 service"),
  budget: z.string().min(1, "Please select a budget range"),
  about_project:z.string().optional()
});

