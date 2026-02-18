'use server'

import { prisma } from '@/lib/prisma'
import { CandidateFormValues, candidatesSchema } from '@/features/candidates/schemas'
import { revalidatePath } from 'next/cache'

export async function createCandidate (data: CandidateFormValues) {
  const result = candidatesSchema.safeParse(data)

  if (!result.success) {
    return { error: 'Provided data is invalid' }
  }

  try {
    await prisma.candidates.create({
      data: {
        firstName: result.data.firstName,
        lastName: result.data.lastName,
        email: result.data.email,
        status: result.data.status,
        skills: result.data.skills
          ? result.data.skills.split(',').map(skill => skill.trim())
          : []
      }
    })

    revalidatePath('/dashboard/candidates')

    return { success: true }
  } catch (error) {
    console.error(error)
    return { error: 'The candidate could not be added' }
  }
}