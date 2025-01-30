

import { db } from '@/service/firebaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserTripCard from './components/UserTripCard'

export default function MyTrips() {
    const navigate = useNavigate()
    const [userTrips, setUserTrips] = useState([])

    useEffect(() => {
        GetUserTrips()
    }, [])

    //Use get all user trips
    const GetUserTrips = async() => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (!user) {
            navigate('/')
            return
        }

        
        //This is how we get data from firestore
        const q = query(collection(db, 'AITrips'),where('userEmail', '==', user?.email))
        const querySnapshot = await getDocs(q);
        setUserTrips([])
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            setUserTrips((prevVal) => [...prevVal, doc.data()])
        });
        console.log(userTrips);
    }
    return (
        <div className='sm:px-10 md:px-32 lg:px56 xl:px-10 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
                {userTrips?.length > 0 ? userTrips.map((trip, index) => (
                    <UserTripCard trip={trip} key={trip.id}/>
                ))
            :[1,2,3,4,5,6].map((item, index) => (
                <div key={index} className='h-[250px] w-full bg-slate-200 animate-pulse rounded-xl'>

                </div>
            ))
            }
            </div>
        </div>
    )
}
