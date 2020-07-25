import axios from '../utils/configured-axios'
import {useEggheadUser} from '../hooks/useEggheadUser'

export default async function fetchLesson(url) {
  console.log('******', url)
  const {authToken} = useEggheadUser()
  console.log(authToken)
  const token = authToken()
  const headers = token
    ? {
        Authorization: `Bearer ${authToken()}`,
      }
    : {}

  const {data} = await axios({
    url,
    method: 'GET',
    headers,
  })

  console.log(data)

  return data
}
