import { client } from './sanity'

// Hero slides — ordered by order field
export async function getHeroSlides() {
  return client.fetch(`
    *[_type == "heroSlide"] | order(order asc) {
      _id,
      image,
      alt,
      order
    }
  `, {}, { next: { revalidate: 60 } })
}

// Gallery photos — ordered by order field
export async function getGalleryPhotos() {
  return client.fetch(`
    *[_type == "galleryPhoto"] | order(order asc) {
      _id,
      image,
      alt,
      order
    }
  `, {}, { next: { revalidate: 60 } })
}

// Rooms
export async function getRooms() {
  return client.fetch(`
    *[_type == "room"] {
      _id,
      type,
      mainImage,
      gallery
    }
  `, {}, { next: { revalidate: 60 } })
}

// Hotel info — always returns the first document
export async function getHotelInfo() {
  return client.fetch(`
    *[_type == "hotelInfo"][0] {
      introText1,
      introText2,
      introImage,
      phone1,
      phone2,
      email,
      bookingScore,
      tripadvisorScore
    }
  `, {}, { next: { revalidate: 60 } })
}