const baseUrl='http://makeup-api.herokuapp.com'

export async function getMakeupsByMe(){
    
    const response = await fetch(`${baseUrl}/api/v1/products.json`)
    const responseJson= await response.json()
    return responseJson
}

export async function getMakeupsBySearch (q) {
    const response = await fetch(`${baseUrl}/products.json?brand=${q}`)
    const responseJson = await response.json()
    return responseJson
}

