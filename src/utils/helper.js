export function filterData(searchInput, restaurants) {
  const filteredData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchInput.toLowerCase());
  });
  return filteredData;
}
