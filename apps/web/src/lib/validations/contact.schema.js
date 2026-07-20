import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid work email"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  services: z.array(z.string()).min(1, "Select at least 1 service"),
  budget: z.string().min(1, "Please select a budget range"),
  about_project:z.string().optional()
});

