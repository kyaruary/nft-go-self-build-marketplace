const baseUrl = ''

async function dataApiFetcher() {
  const response = await fetch(`${baseUrl}/api/data`)

  const json = await response.json()

  return json
}

export async function dataApiGet() {
  return dataApiFetcher()
}

export async function dataApiPost(data: any) {}
