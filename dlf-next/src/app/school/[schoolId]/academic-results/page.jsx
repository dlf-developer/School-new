import { redirect } from 'next/navigation'
export default async function Page({ params }) {
  const { schoolId } = await params
  redirect(`/school/${schoolId}/curriculum/academic-results`)
}
