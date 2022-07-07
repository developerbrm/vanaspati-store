import React from "react"
import { makeAPICall } from "../../utilities"

const Collection = (data) => {
  console.log(data)

  return <div>{JSON.stringify(data)}</div>
}

export default Collection

export async function getStaticPaths() {
  return {
    paths: [{ params: { collection_id: "270742782045" } }],
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params }) => {
  const { collection_id } = params

  let data = {}

  let allPromises = []

  const collecionData = await makeAPICall(
    `https://my-vanaspati-store.myshopify.com/admin/api/2022-04/collections/${collection_id}.json`
  )
  const collectionProducts = makeAPICall(
    `https://my-vanaspati-store.myshopify.com/admin/api/2022-04/collections/${collection_id}/products.json`
  )

  try {
    allPromises = await Promise.all([collecionData, collectionProducts])
  } catch (err) {
    console.log(err)
  }

  data["collection"] = allPromises.find(obj => obj?.["collection"])?.["collection"]
  data["products"] = allPromises.find(obj => obj?.["products"])?.["products"]
    

  return {
    props: data,
  }
}
