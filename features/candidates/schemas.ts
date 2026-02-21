import { z } from 'zod'

export const candidatesSchema = z.object({
  firstName: z.string().min(2, 'The name should have at least 2 letters'),
  lastName: z.string().min(2, 'The last name should have at least 2 letters'),
  email: z.email('Invalid email address'),
  status: z.enum(['NEW', 'SCREENING', 'INTERVIEW', 'OFFER', 'REJECTED', 'HIRED']),
  skills: z.string().optional()
})

export type CandidateFormValues = z.infer<typeof candidatesSchema>