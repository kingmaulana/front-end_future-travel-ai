

import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function UserTripCard({ trip }) {
    //   console.log("🚀 ~ UserTripCard ~ trip:", trip)
    const [photoUrl, setPhotoUrl] = useState('')

    useEffect(() => {
        trip && GetPlacePhoto()
    }, [trip])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: trip?.userSelection?.location?.label
        }
        const result = await GetPlaceDetails(data).then(resp => {
            // console.log(resp.data.places[0].photos[3].name);

            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0]?.photos[3]?.name)
            // console.log("🚀 ~ result ~ PhotoUrl:", PhotoUrl)
            setPhotoUrl(PhotoUrl)
        })
    }
    return (
        <Link to={'/view-trip/' + trip.id}>
            <div className='hover:scale-105 transition-all'>
                <img src={photoUrl ? photoUrl : "/placeholder.png"} className="object-cover rounded-xl h-[250px]" />

                <div>
                    <h2 className='font-bold text-lg text-black'>{trip.userSelection?.location?.label}</h2>
                    <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
                </div>
            </div>
        </Link>
    )
}
