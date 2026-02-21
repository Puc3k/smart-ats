'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCandidate } from '@/features/candidates/actions'
import { candidatesSchema, CandidateFormValues } from '@/features/candidates/schemas'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'

export function AddCandidateForm () {
  const [open, setOpen] = useState(true)

  const form = useForm<CandidateFormValues>({
    resolver: zodResolver(candidatesSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      status: 'NEW',
      skills: ''
    }
  })

  async function onSubmit (data: CandidateFormValues) {
    const result = await createCandidate(data)

    if (result.error) {
      toast.error(result.error)
    } else {
      toast.success('Candidate added')
      setOpen(false)
      form.reset()
    }
  }

  return (
    <Sheet open={ open } onOpenChange={ setOpen }>
      <SheetTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4"/> Add Candidate
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Candidate</SheetTitle>
        </SheetHeader>

        <div className="mt-6 p-4">
          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) } className="space-y-4">

              <FormField
                control={ form.control }
                name="firstName"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Johny" { ...field } />
                    </FormControl>
                  </FormItem>
                ) }
              />

              <FormField
                control={ form.control }
                name="lastName"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Kowalsky" { ...field } />
                    </FormControl>
                  </FormItem>
                ) }
              />

              <FormField
                control={ form.control }
                name="email"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="jan@example.com" { ...field } />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                ) }
              />

              <FormField
                control={ form.control }
                name="skills"
                render={ ({ field }) => (
                  <FormItem>
                    <FormLabel>Skills (after the comma)</FormLabel>
                    <FormControl>
                      <Input placeholder="React, TypeScript, SQL" { ...field } />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                ) }
              />

              <Button type="submit" className="w-full" disabled={ form.formState.isSubmitting }>
                { form.formState.isSubmitting ? 'Saving...' : 'Save candidate' }
              </Button>
            </form>
          </Form>
        </div>

      </SheetContent>
    </Sheet>
  )
}