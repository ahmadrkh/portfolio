import { z } from "zod";

/** Shared validation contract used by both the form and the API route. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail, please (10+ characters).")
    .max(2000, "That's a bit long — keep it under 2000 characters."),
});

export type ContactInput = z.infer<typeof contactSchema>;
