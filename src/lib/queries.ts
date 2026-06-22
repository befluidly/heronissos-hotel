import { client } from './sanity'

export async function getHeroSlides() {
  const doc = await client.fetch(
    `*[_type == "heroSlideshow" && _id == "heroSlideshow"][0]{ slides }`,
    {}, { next: { revalidate: 60 } }
  )
  return doc?.slides || []
}

export async function getReviewScores() {
  return client.fetch(
    `*[_type == "reviewScores" && _id == "reviewScores"][0]{ bookingScore, tripadvisorScore }`,
    {}, { next: { revalidate: 60 } }
  )
}

export async function getHotelIntro() {
  return client.fetch(
    `*[_type == "hotelIntro" && _id == "hotelIntro"][0]{ paragraph1, paragraph2, photo }`,
    {}, { next: { revalidate: 60 } }
  )
}

export async function getRooms() {
  const [superior, standard, economy] = await Promise.all([
    client.fetch(
      `*[_type == "superiorRoom" && _id == "superiorRoom"][0]{
        mainPhoto, gallery, description, size, location, views, bedType, facilities, frenchBalconyNote
      }`,
      {}, { next: { revalidate: 60 } }
    ),
    client.fetch(
      `*[_type == "standardRoom" && _id == "standardRoom"][0]{
        mainPhoto, gallery, description, size, location, views, bedType, facilities
      }`,
      {}, { next: { revalidate: 60 } }
    ),
    client.fetch(
      `*[_type == "economyRoom" && _id == "economyRoom"][0]{
        mainPhoto, gallery, description, size, location, views, bedType, facilities
      }`,
      {}, { next: { revalidate: 60 } }
    ),
  ])
  return { superior, standard, economy }
}

export async function getAllInclusive() {
  return client.fetch(
    `*[_type == "allInclusive" && _id == "allInclusive"][0]{ breakfast, lunch, snacks, dinner, drinks }`,
    {}, { next: { revalidate: 60 } }
  )
}

export async function getDining() {
  return client.fetch(
    `*[_type == "dining" && _id == "dining"][0]{ labyrinthPhoto, labyrinthType, labyrinthDesc, nissosPhoto, nissosType, nissosDesc }`,
    {}, { next: { revalidate: 60 } }
  )
}

export async function getGalleryPhotos() {
  const doc = await client.fetch(
    `*[_type == "gallery" && _id == "gallery"][0]{ "photos": photos[0...20] }`,
    {}, { next: { revalidate: 60 } }
  )
  return doc?.photos || []
}

export async function getExtrasItems() {
  return client.fetch(
    `*[_type == "extrasItem"] | order(category asc, order asc) { _id, category, title, shortDesc, longDesc, image, duration, includes, order }`,
    {}, { next: { revalidate: 60 } }
  )
}

export async function getContactDetails() {
  return client.fetch(
    `*[_type == "contactDetails" && _id == "contactDetails"][0]{ phone1, phone2, email }`,
    {}, { next: { revalidate: 60 } }
  )
}
