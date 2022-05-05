import React from "react"

const RenderMainHeading = ({ heading = "" }) => {
  return (
    <h2 className="my-4 text-center font-dosis text-4xl font-[700] text-custom-medium-black">
      {heading}
    </h2>
  )
}

export default RenderMainHeading
