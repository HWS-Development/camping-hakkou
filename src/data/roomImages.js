const imagePath = (folder, file) => `/images/${folder}/${encodeURIComponent(file)}`

const roomFiles = [
  '_DSC3454-HDR.jpg',
  '_DSC3459-HDR.jpg',
  '_DSC3464-HDR.jpg'
]

const campingFiles = [
  '_DSC3364-HDR-Modifier.jpg',
  '_DSC3369-HDR-Modifier.jpg',
  '_DSC3378-HDR-Modifier.jpg',
  '_DSC3379-HDR.jpg',
  '_DSC3384-HDR.jpg',
  '_DSC3389-HDR.jpg',
  '_DSC3394-HDR-Modifier.jpg',
  '_DSC3394-HDR.jpg',
  '_DSC3399-HDR.jpg',
  '_DSC3404-HDR.jpg',
  '_DSC3409-HDR.jpg',
  '_DSC3414-HDR.jpg',
  '_DSC3423-HDR.jpg',
  '_DSC3424-HDR.jpg',
  '_DSC3429-HDR.jpg',
  '_DSC3434-HDR.jpg',
  '_DSC3439-HDR.jpg',
  '_DSC3444-HDR.jpg',
  '_DSC3449-HDR.jpg',
  '_DSC3469-HDR.jpg'
]

export const getCampingImages = () => campingFiles.map((file) => imagePath('camping', file))

export const getRoomImages = (type = 'room') => {
  if (type === 'camping') return getCampingImages()
  return roomFiles.map((file) => imagePath('room', file))
}

export const getCover = (type = 'room') => {
  const images = getRoomImages(type)
  return images[0] || '/images/placeholder.jpg'
}
