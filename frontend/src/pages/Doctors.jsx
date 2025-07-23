// import {  useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import {  useAppContext } from '../context/AppContext'


// const Doctors = () => {

//   const { speciality } = useParams()

//   const [filterDoc, setFilterDoc] = useState([])
//   const [showFilter, setShowFilter] = useState(false)
//   const navigate = useNavigate()

//   const { doctor } =  useAppContext()

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctor?.filter(doc => doc.speciality === speciality))
//     } else {
//       setFilterDoc(doctor)
//     }
//   }

//   useEffect(() => {
//     applyFilter()
//     console.log("Doctors:",doctor);
//     console.log(filterDoc);
//     console.log(showFilter)
//   }, [doctor, speciality])

//   return (
//     <div>
//       <p className='text-gray-600'>Browse through the doctors specialists</p>
//       <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
//         <div className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</div>
//         <div className={`flex-col gap-4 text-sm teext-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'} `}>
//           <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black " : ""}`}>General Physician</p>
//           <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black " : ""} `}>Gynecologist</p>
//           <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Dermatologist" ? "bg-indigo-100 text-black " : ""}`}>Dermatologist</p>
//           <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Pediatricians" ? "bg-indigo-100 text-black " : ""}`}>Pediatricians</p>
//           <p onClick={() => speciality === 'Neurologiist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Neurologist" ? "bg-indigo-100 text-black " : ""}`}>Neurologist</p>
//           <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black " : ""}`}>Gastroenterologist</p>
//         </div>
//         <div className='w-full grid grid-cols-auto gap-4'>
//           {
//             filterDoc?.map((item, index) => (
//               <div key={item._id || index} onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
//                 <img className='bg-blue-50' src={item.image} alt="" />
//                 <div className='p-4'>
//                   <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'} `}>
//                     <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} bg-green-500 rounded-full`}> </p> <p>{item.available ? 'Available' : 'Not Available'}</p>
//                   </div>
//                   <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
//                   <p className='text-gray-600 text-sm'>{item.speciality}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Doctors


import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {  useAppContext } from '../context/AppContext'


const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()

  const { doctor } = useAppContext()

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctor?.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctor)
    }
  }

  useEffect(() => {
    applyFilter()
console.log(doctor);
console.log(filterDoc);
console.log(showFilter)
  }, [doctor, speciality])

  return (
    <div className='w-full h-screen'>

    <div className='max-w-6xl mx-auto  '>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</div>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'} `}>
          <p onClick={() => speciality === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General Physician" ? "bg-indigo-100 text-black " : ""}`}>General Physician</p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black " : ""} `}>Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Dermatologist" ? "bg-indigo-100 text-black " : ""}`}>Dermatologist</p>
          <p onClick={() => speciality === 'Psychologist' ? navigate('/doctors') : navigate('/doctors/Psychologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Psychologist" ? "bg-indigo-100 text-black " : ""}`}>Psychologist</p>
          <p onClick={() => speciality === 'Neurologiist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Neurologist" ? "bg-indigo-100 text-black " : ""}`}>Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black " : ""}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-4 gap-4'>
          {
            filterDoc?.map((item) => (
              <div key={item._id} onClick={()=>navigate(`/appointment/${item._id}`)} className='bg-white border-blue-200 border-2 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500'>
                <img src={item.image} alt={item.name} className='bg-blue-50'/>
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center '> 
                    <p className={`${item.available ? "bg-green-500":"bg-gray-500"} h-2 w-2 rounded-full`}>
                    
                    </p> {" "}
                    <p className={`${
                      item.available ? "text-green-500" : "text-gray-500"
                    }` }>
                        {item.available? "Available": "Not Available"}
                    </p>
                  </div>

                  <p className='font-medium text-lg text-gray-900'>{item.name}</p>
                  <p className='text-sm text-gray-700'>{item.speciality}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
            </div>
  )
}

export default Doctors