// src/app/tools/page.tsx
import Navbar from '../components/Navbar'
import AllTools from '../components/AllTools'

export const metadata = {
  title: 'Tools – FileMint',
  description: 'All the PDF tools in one place',
}

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      
      <AllTools />
    </>
  )
}
