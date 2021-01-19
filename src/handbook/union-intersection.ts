// Union types
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${typeof padding}'`)
}
padLeft('Hello World', 4)
// let indentedString = padLeft('Hello World', true)


// Unions with Common Fields
interface Bird {
  fly(): void
  layEggs(): void
}
interface Fish {
  swim(): void
  layEggs(): void
}
declare function getSmallPet(): Fish | Bird

// let pet = getSmallPet()
// pet.layEggs()
// pet.swim()


// Discriminating Unions
type NetworkLoadingState = {
  state: 'loading'
}
type NetworkFailedState = {
  state: 'failed'
  code: number
}
type NetworkSuccessState = {
  state: 'success'
  response: {
    title: string
    duration: number
    summary: string
  }
}
type NetworkFromCachedState = {
  state: 'from_cache'
  id: string
  response: NetworkSuccessState['response']
}
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | NetworkFromCachedState
function logger(state: NetworkState): string | undefined {
  // state.code
  switch (state.state) {
    case 'loading':
      return 'Downloading...'

    case 'failed':
      return `Error ${state.code} downloading`

    case 'success':
      return `Downloaded ${state.response.title} - ${state.response.summary}`

    default:
      // return assertNever(state)
  }
}


// Union Exhaustiveness checking
function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x)
}


// Intersection Types
interface ErrorHandling {
  success: boolean
  error?: { message: string }
}
interface ArtworksData {
  artworks: { title: string }[]
}
interface ArtistsData {
  artists: { name: string }[]
}
type ArtworksResponse = ArtworksData & ErrorHandling
type ArtistsResponse = ArtistsData & ErrorHandling
const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message)
    return
  }

  console.log(response.artists)
}
