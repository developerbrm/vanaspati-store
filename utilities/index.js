export const makeAPICall = async (url, headers) => {
  let data

  try {
    const headers = new Headers()
    headers.append("X-Shopify-Access-Token", process.env.shopifyAccessToken)

    const res = await fetch(url, {
      method: "GET",
      headers,
    })
    data = await res.json()
  } catch (err) {
    console.log(err)
  }

  return data
}
