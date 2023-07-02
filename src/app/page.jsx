import Form from '@/components/Form'
import DataTable from '@/components/DataTable'
import dbConnect from '@/lib/dbConnect'
import Weight from '@/models/Weight'
import styles from '@/sass/page.module.scss'

async function getData() {
  await dbConnect()

  const documents = await Weight.find().lean()

  const data = documents.map((doc) => ({ ...doc, _id: doc._id.toHexString() }))

  return data
}

export default async function Page() {

  const data = await getData()

  return (
    <main>
      <Form />
      <DataTable data={data} />
    </main>
  )
}
