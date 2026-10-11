
// import React from 'react'

// const DogCard = ({ dog, isLoading, fetchDogDetails }) => {
//   return (
//     <div className='flex w-full max-w-md flex-col gap-4 rounded-2xl p-5 bg-white shadow-xl'>

//       {
//         dog && (
//           <>

//             <img
//               src={dog.image.url}
//               alt={dog.name}
//               className='h-60 w-full rounded-xl object-cover'
//             />

//             <h1 className='text-center text-3xl font-bold text-gray-900'>
//               {dog.name}
//             </h1>

//             <ul className='flex flex-col gap-2.5'>
//               <li>
//                 <strong>Breed Group:</strong> {dog.breed_group || 'Not available'}
//               </li>

//               <li>
//                 <strong>Bred For:</strong> {dog.bred_for || 'Not available'}
//               </li>

//               <li>
//                 <strong>Life Span:</strong> {dog.life_span || 'Not available'}
//               </li>

//               <li>
//                 <strong>Temperament:</strong> {dog.temperament || 'Not available'}
//               </li>

//               <li>
//                 <strong>Height:</strong> {dog.height?.imperial || 'Not available'} inches
//               </li>

//               <li>
//                 <strong>Weight:</strong> {dog.weight?.imperial || 'Not available'} lbs
//               </li>
//             </ul>

//           </>
//         )
//       }

//       <button
//         className='w-full rounded-lg bg-orange-500 font-semibold text-white transition hover:bg-orange-600 py-3'
//         onClick={fetchDogDetails}
//         disabled={isLoading}
//       >
//         {isLoading ? 'fetching...' : 'Get Random Dog'}
//       </button>

//     </div>
//   )
// }

// export default DogCard




import React from 'react'

const DogCard = ({ dog, isLoading, fetchDogDetails, error }) => {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 rounded-2xl bg-white p-4 shadow-xl">

      {error && (
        <p className="text-center text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {dog && !error && (
        <>
          {dog.image?.url ? (
            <img
              src={dog.image.url}
              alt={dog.name || 'Dog'}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
              className="h-36 w-full rounded-xl object-cover"
            />
          ) : (
            <div className="flex h-36 items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-500">
              Image unavailable
            </div>
          )}

          <h1 className="break-words text-center text-2xl font-bold text-gray-900">
            {dog.name || 'Unknown Dog'}
          </h1>

          <ul className="flex flex-col gap-2 text-sm text-gray-800">
            <li className="break-words">
              <strong>Breed Group:</strong>{' '}
              {dog.breed_group || 'Not available'}
            </li>

            <li className="break-words">
              <strong>Bred For:</strong>{' '}
              {dog.bred_for || 'Not available'}
            </li>

            <li className="break-words">
              <strong>Life Span:</strong>{' '}
              {dog.life_span || 'Not available'}
            </li>

            <li className="break-words">
              <strong>Temperament:</strong>{' '}
              {dog.temperament || 'Not available'}
            </li>

            <li className="break-words">
              <strong>Height:</strong>{' '}
              {dog.height?.imperial || 'Not available'}
              {dog.height?.imperial ? ' inches' : ''}
            </li>

            <li className="break-words">
              <strong>Weight:</strong>{' '}
              {dog.weight?.imperial || 'Not available'}
              {dog.weight?.imperial ? ' lbs' : ''}
            </li>
          </ul>
        </>
      )}

      {!dog && !error && !isLoading && (
        <p className="text-center text-sm text-gray-500">
          No dog details available.
        </p>
      )}

      {isLoading && (
        <p className="text-center text-sm text-gray-500">
          Fetching dog details...
        </p>
      )}

      <button
        className="w-full rounded-lg bg-orange-500 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
        onClick={fetchDogDetails}
        disabled={isLoading}
      >
        {isLoading ? 'Fetching...' : 'Get Random Dog'}
      </button>
    </div>
  )
}

export default DogCard
