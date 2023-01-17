import { useState, useEffect } from 'react'

function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/read')
    
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>
  console.log(data.data[2].capture);
  const pre = `data:image/png;base64, `
  const b64 = data.data[2].capture
  const source = pre.concat(b64)
  const img = data.data.map(result => `${pre}${result.capture}`)
  console.log(img)
  return (
    <div>
      <h1>{data.datetime}</h1>
      <img id="image" src={source} alt="captured_image"/>
    </div>
  )
}
export default Profile;