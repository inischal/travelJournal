import React from 'react'
import japan from '../assets/mountFuji.jpg'
import sydney from '../assets/sydneyOperaHouse.jpg'
import norway from '../assets/geirangerfJord.jpg'

const Card = (props) => {
  const {
    id,
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props.data
  return (
    <div className='card--container'>
      <div className='left--container'>
        <img src={imageUrl} className='left--image' />
      </div>
      <div className='right--container'>
        <div className='location'>
          <div className='locationicon'>
            <img src={props.mapicon} alt='' />
            <span>{location}</span>
          </div>
          <div className='google--map'>
            <a href={googleMapsUrl}>View On Google Maps</a>
          </div>
        </div>
        <div className='heading'>
          <h1 className='heading--part'>{title}</h1>
        </div>
        <div className='content'>
          <h6 className>
            {startDate} - {endDate}
          </h6>
          <p className='description'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
