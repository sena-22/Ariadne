import {useEffect} from "react"

import "./App.css"
const {kakao} = window

declare global {
  interface Window {
    kakao: any
  }
}

function App() {
  useEffect(() => {
    const container = document.getElementById("map")
    const options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3,
    }
    const map = new kakao.maps.Map(container, options)
    console.log(map)
  }, [])

  return (
    <div className="App">
      <div id="map" className="map"></div>
    </div>
  )
}

export default App
