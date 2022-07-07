import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import RenderMainHeading from "../../components/commonComponents/RenderMainHeading"
import { makeAPICall } from "../../utilities"

const Collections = ({ allCollections = [] }) => {
  const collectionItemCB = (collection) => {
    const { id, title, body_html, handle } = collection

    const {
      src = "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      width = 1032,
      height = 581,
      alt = "Abstract Image of a fying cube",
    } = collection?.image || {}

    return (
      <div
        className="relative  mx-auto max-w-md overflow-hidden  rounded-xl shadow-md"
        key={id}
      >
        <Link href={`/collections/${id}`}>
          <a className="block">
            <div className="block aspect-video h-full w-full">
              <Image
                className=""
                src={src}
                alt={alt}
                loading="lazy"
                objectPosition={"center"}
                objectFit="cover"
                placeholder="blur"
                blurDataURL={src}
                layout="fill"
              />
            </div>

            <h4 className="absolute inset-0 top-[unset] bg-gradient-to-r  from-[#111] via-[#000000bc] to-transparent p-2 font-dosis text-3xl font-bold text-white">
              {title}
            </h4>
          </a>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-custom-light-blue px-4 py-6">
      {<RenderMainHeading heading="Top Categories" />}
      <div className="space-y-8 px-4">
        {allCollections.length > 0 && allCollections.map(collectionItemCB)}
      </div>
    </div>
  )
}

export default Collections

export async function getStaticProps() {
  let data = []
  let allPromises = []

  const smartCollectionsAPCcall = makeAPICall(
    `https://my-vanaspati-store.myshopify.com/admin/api/2022-04/smart_collections.json`
  )
  const customCollectionsAPCcall = makeAPICall(
    `https://my-vanaspati-store.myshopify.com/admin/api/2022-04/custom_collections.json`
  )

  try {
    allPromises = await Promise.all([
      smartCollectionsAPCcall,
      customCollectionsAPCcall,
    ])
  } catch (err) {
    console.log(err)
  }

  data = allPromises
    .map((obj) => obj?.["smart_collections"] || obj?.["custom_collections"])
    .flat()

  return {
    props: {
      allCollections: data ?? [],
    }, // will be passed to the page component as props
  }
}
