let mapSource = document.querySelector('img').src;

let latitude;
let longitude;
let zoom;

document.addEventListener('click', (event) => {
  const elementId = event.target.id;

  switch (elementId) {
    case 'locate':
      latitude = document.querySelector("#latitude").value;
      longitude = document.querySelector("#longitude").value;
      zoom = document.querySelector("#zoom-level").value;

      createLink(latitude, longitude, zoom);
      refresh(mapSource);
      break;      
  }
}) 

function refresh(mapSource) {
  let container = document.querySelector("#map-container");container.innerHTML = "";
  let mapImage = document.createElement("img");
  mapImage.setAttribute('src', mapSource);
  mapImage.setAttribute('id', 'map');
  container.append(mapImage);
}

function createLink(latitude, longitude, zoom) {
  mapSource = `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/${longitude},${latitude},${zoom},0/600x300@2x?access_token=pk.eyJ1IjoiZGFuYXN0b25zaGluZyIsImEiOiJja28wcGdrcDUwMzJ1Mm9zNWxqMTBkMjVhIn0.p-bu4zt5kUJAZ9rVi6-noQ`;
}