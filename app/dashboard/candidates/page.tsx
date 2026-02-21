import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getCandidates } from '@/features/candidates/db'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { VariantProps } from 'class-variance-authority'
import { AddCandidateForm } from '@/features/candidates/components/add-candidate-form'

export default async function CandidatePage () {
  const candidates = await getCandidates()

  const getStatusColor = (status: string): VariantProps<typeof badgeVariants>['variant'] => {
    switch (status) {
      case 'HIRED':
        return 'success'
      case 'REJECTED':
        return 'destructive'
      case 'NEW':
        return 'secondary'
      case 'OFFER':
        return 'default'
      default:
        return 'outline'
    }
  }
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Candidates</h1>
        <AddCandidateForm />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All candidates({ candidates.length })</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>First and Last Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>AI rating</TableHead>
                <TableHead className="hidden md:table-cell">Email</TableHead>
                <TableHead className="text-right">Added</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              { candidates.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={ 5 } className="text-center h-24 text-muted-foreground">
                    No candidates. Add the first one!
                  </TableCell>
                </TableRow>
              ) : (
                candidates.map((candidate) => (
                  <TableRow key={ candidate.id }>
                    <TableCell className="font-medium">
                      { candidate.firstName } { candidate.lastName }
                    </TableCell>
                    <TableCell>

                      <Badge variant={ getStatusColor(candidate.status) }>
                        { candidate.status }
                      </Badge>
                    </TableCell>
                    <TableCell>
                      { candidate.rating ? (
                        <span className="font-bold text-yellow-600">★ { candidate.rating }/10</span>
                      ) : (
                        <span className="text-muted-foreground text-sm">-</span>
                      ) }
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">
                      { candidate.email }
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground text-sm">
                      { new Date(candidate.createdAt).toLocaleDateString() }
                    </TableCell>
                  </TableRow>
                ))
              ) }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}