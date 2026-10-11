// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import DogCard from './components/DogCard'

// const DOG_URL = "https://api.freeapi.app/api/v1/public/dogs/dog/random"

// const App = () => {
//   const [dog, setDog] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState('')

//   const fetchDogDetails = async () => {
  

//     try {
//       setIsLoading(true)
    
  
//       const response = await axios.get(DOG_URL)
         
//       // response.data contains the actual api response, ignoring all the network headers and details
//       // response.data.data contains the actual dog details that we want to display
//       const body = response.data

//       if(!body.success) {
//         throw new Error(body.message)
//       }
//       setDog(body.data)
//       console.log(body.data)
//       setIsLoading(false)

//     } catch (err) {
//       console.error(err)
//       setIsLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchDogDetails()
//   }, [])
  
  
  
    
//   return (
//     <div className='flex min-h-screen items-center justify-center bg-indigo-400 p-4'>
//       <DogCard dog={dog} isLoading={isLoading}  fetchDogDetails={fetchDogDetails} />
//     </div>
//   )
// }

// export default App
















import { useState, useEffect } from 'react'
import axios from 'axios'
import DogCard from './components/DogCard'

const DOG_URL = 'https://api.freeapi.app/api/v1/public/dogs/dog/random'

function App() {
  const [dog, setDog] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  async function fetchDogDetail() {
    try {
      setIsLoading(true)
      setError('')

      const response = await axios.get(DOG_URL)
      const body = response.data

      if (!body.success || !body.data) {
        throw new Error(body.message || 'Unable to fetch dog details')
      }

      setDog(body.data)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch dog details. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDogDetail()
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-slate-800 sm:text-4xl">
          Dog Profile Viewer
        </h1>

        <p className="mb-6 text-center text-slate-500">
          Discover a random dog and learn about its breed.
        </p>

        <div className="flex justify-center">
          <DogCard
            dog={dog}
            isLoading={isLoading}
            fetchDogDetails={fetchDogDetail}
            error={error}
          />
        </div>
      </div>
    </div>
  )
}

export default App
