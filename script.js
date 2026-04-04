const destinations = [
  {
    name: "Sajek Valley",
    region: "Rangamati",
    description: "Experience cloud-kissed hills and beautiful sunrise views in Sajek Valley.",
    image: "image.jpg/Sajek.jpg",
    price: "From ৳7,200",
    duration: "2 Days / 1 Night",
    type: "Adventure"
  },
  {
    name: "Bandarban",
    region: "Bandarban",
    description: "Enjoy amazing mountain landscapes and scenic hill views in Bandarban.",
    image: "image.jpg/Bandarban.jpg",
    price: "From ৳8,100",
    duration: "3 Days / 2 Nights",
    type: "Adventure"
  },
  {
    name: "Sylhet",
    region: "Sylhet",
    description: "Explore the beauty of nature and peaceful green landscapes in Sylhet.",
    image: "image.jpg/Sylhet.jpg",
    price: "From ৳5,900",
    duration: "2 Days / 1 Night",
    type: "Nature"
  },
  {
    name: "Lama",
    region: "Bandarban",
    description: "Watch breathtaking sunrise views and misty hills in Lama.",
    image: "image.jpg/Lama.jpg",
    price: "From ৳6,500",
    duration: "2 Days / 1 Night",
    type: "Nature"
  },
  {
    name: "Sundarban",
    region: "Khulna",
    description: "Discover wildlife and the famous tiger in the Sundarban mangrove forest.",
    image: "image.jpg/Sundarban_Tiger.jpg",
    price: "From ৳9,500",
    duration: "3 Days / 2 Nights",
    type: "Wildlife"
  }
];

const destinationGrid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const liveFilter = document.getElementById("liveFilter");
const regionFilter = document.getElementById("regionFilter");
const travelType = document.getElementById("travelType");
const searchBtn = document.getElementById("searchBtn");

function createCard(place) {
  return `
    <div class="card">
      <img src="${place.image}" alt="${place.name}">
      <div class="card-content">
        <div class="top-line">
          <div>
            <h3>${place.name}</h3>
            <div class="region">${place.region}</div>
          </div>
          <span class="tag">${place.duration}</span>
        </div>
        <p>${place.description}</p>
        <div class="card-footer">
          <span class="price">${place.price}</span>
          <button class="btn btn-secondary">Explore More</button>
        </div>
      </div>
    </div>
  `;
}

function renderDestinations(list) {
  if (!list.length) {
    destinationGrid.innerHTML = `<div class="no-result">No tours found for your search.</div>`;
    return;
  }

  destinationGrid.innerHTML = list.map(createCard).join("");
}

function filterDestinations() {
  const mainSearch = searchInput.value.toLowerCase().trim();
  const liveSearch = liveFilter.value.toLowerCase().trim();
  const searchText = mainSearch || liveSearch;

  const selectedRegion = regionFilter.value.toLowerCase();
  const selectedType = travelType.value.toLowerCase();

  const filtered = destinations.filter((place) => {
    const matchesText =
      place.name.toLowerCase().includes(searchText) ||
      place.region.toLowerCase().includes(searchText) ||
      place.description.toLowerCase().includes(searchText);

    const matchesRegion =
      selectedRegion === "all" || place.region.toLowerCase() === selectedRegion;

    const matchesType =
      selectedType === "all" || place.type.toLowerCase() === selectedType;

    return matchesText && matchesRegion && matchesType;
  });

  renderDestinations(filtered);
}

searchBtn.addEventListener("click", filterDestinations);
searchInput.addEventListener("input", filterDestinations);

liveFilter.addEventListener("input", () => {
  searchInput.value = liveFilter.value;
  filterDestinations();
});

regionFilter.addEventListener("change", filterDestinations);
travelType.addEventListener("change", filterDestinations);

renderDestinations(destinations);