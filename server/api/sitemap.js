// import axios from "axios";
// export default defineSitemapEventHandler(async (e) => {
//     const { data } = await axios.get(`${useRuntimeConfig().public.API_URL}/get-links`)
//     let company = data.data.company.map((user) => `/company/${user._id}`)
//     let listing = data.data.listing.map((user) => `/listing/${user._id}`)
//     let blog = data.data.blogs.map((user) => `/blog/${user._id}`)
//     return company.concat(listing, blog)
// })