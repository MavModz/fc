// export default defineEventHandler(async (event) => {
//   console.log("events",event)
//   if (event.context) {
//     return { ...event.context.data }
//   } else {
//     return { isLogged: false }
//   }
// });

export default defineEventHandler(async (event) => {
  const userData = event.context?.data

  if (userData && typeof userData === 'object') {
    return { ...userData }
  } else {
    return { isLogged: false }
  }
})