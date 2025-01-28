import axios from 'axios'

const BASE_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/query'

export async function fetchEarthquakes(startDate, minMagnitude) {
  const params = {
    format: 'geojson',
    starttime: startDate,
    minmagnitude: minMagnitude,
  }

  try {
    const response = await axios.get(BASE_URL, { params })
    return response.data.features
  } catch (error) {
    console.error('Error fetching earthquake data:', error)
    return []
  }
}
