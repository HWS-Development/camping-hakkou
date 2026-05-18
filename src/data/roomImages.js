// Build URLs for images stored in public/images/<folder>/<file>
const pub = (path) => `${process.env.PUBLIC_URL}${path}`

/**
 * Map room keys -> folder name in /public/images and file list.
 * Keep this list in sync with your /public/images folders.
 */
export const ROOM_IMAGES = {
  double: {
    folder: 'chambreStandard',
    files: [
      
      'Screenshot 2025-09-15 160254.png',
      'Screenshot 2025-09-15 160330.png',
      'Screenshot 2025-09-15 160346.png',
     
    ]
  },
  familySuite: {
    folder: 'suiteFamill', // <- folder name exactly as in your tree
    files: [
      'Screenshot 2025-09-15 160955.png',
      'Screenshot 2025-09-15 160926.png',
      'Screenshot 2025-09-15 160942.png',
      
   
    ]
  },
  juniorSuite: {
    folder: 'suiteJunior',
    files: [
      '43bc7c69-8a3e-4307-bdf3-3600de8d6def.jpg',
      '107da34b-e0b8-430d-9bb6-1692997692e0.jpg',
      '06243471-50cb-4a8e-9458-30dfa28c0d53.jpg',
    ]
  },
  triplePool: {
    folder: 'tripleRoom',
    files: [
    
      'Screenshot 2025-09-15 161322.png',
      'Screenshot 2025-09-15 161339.png',
      'Screenshot 2025-09-15 161354.png',
    
    ]
  }
}

export const getRoomImages = (key) => {
  const entry = ROOM_IMAGES[key]
  if (!entry) return []
  return entry.files.map((f) => pub(`/images/${entry.folder}/${f}`))
}

export const getCover = (key) => {
  const imgs = getRoomImages(key)
  return imgs[0] || pub('/images/placeholder.jpg')
}
