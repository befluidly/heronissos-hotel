import { client } from './sanity'

// Hero slideshow — single document with slides array
export async function getHeroSlides() {
  const doc = await client.fetch(
    `*[_type == "heroSlideshow" && _id == "heroSlideshow"][0]{ slides }`,
    {},
    { next: { revalidate: 60 } }
  )
  return doc?.slides || []
}

// Hotel intro
export async function getHotelIntro() {
  return client.fetch(
    `*[_type == "hotelIntro" && _id == "hotelIntro"][0]{ paragraph1, paragraph2, photo }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Rooms — each room type is its own singleton
export async function getRooms() {
  const [superior, standard, economy] = await Promise.all([
    client.fetch(`*[_type == "superiorRoom" && _id == "superiorRoom"][0]{ mainPhoto, gallery }`, {}, { next: { revalidate: 60 } }),
    client.fetch(`*[_type == "standardRoom" && _id == "standardRoom"][0]{ mainPhoto, gallery }`, {}, { next: { revalidate: 60 } }),
    client.fetch(`*[_type == "economyRoom" && _id == "economyRoom"][0]{ mainPhoto, gallery }`, {}, { next: { revalidate: 60 } }),
  ])
  return { superior, standard, economy }
}

// All-Inclusive
export async function getAllInclusive() {
  return client.fetch(
    `*[_type == "allInclusive" && _id == "allInclusive"][0]{ breakfast, lunch, snacks, dinner, drinks }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Dining
export async function getDining() {
  return client.fetch(
    `*[_type == "dining" && _id == "dining"][0]{ labyrinthPhoto, labyrinthType, labyrinthDesc, nissosPhoto, nissosType, nissosDesc }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Gallery
export async function getGalleryPhotos() {
  const doc = await client.fetch(
    `*[_type == "gallery" && _id == "gallery"][0]{ photos }`,
    {},
    { next: { revalidate: 60 } }
  )
  return doc?.photos || []
}

// Extras
export async function getExtrasItems() {
  return client.fetch(
    `*[_type == "extrasItem"] | order(category asc, order asc) { _id, category, title, shortDesc, longDesc, image, duration, includes, order }`,
    {},
    { next: { revalidate: 60 } }
  )
}

// Scores & Contact
export async function getScoresContact() {
  return client.fetch(
    `*[_type == "scoresContact" && _id == "scoresContact"][0]{ bookingScore, tripadvisorScore, phone1, phone2, email }`,
    {},
    { next: { revalidate: 60 } }
  )
}
