export const selectCars = (state) => state.cars.cars;
export const selectCarById = (state) => state.cars.id;
export const selectCarsIsLoading = (state) => state.cars.isLoading;
export const selectCarsError = (state) => state.cars.error;

export const selectCarsByBrand = (state) => state.filters.brand;
export const selectPriceFilter = (state) => state.filters.price;
export const selectMileageFilter = (state) => state.filters.mileage;

export const selectFavoriteCars = (state) => state.favorites.favorite;
export const selectFavoriteIsLoading = (state) => state.favorites.isLoading;
export const selectFavoriteError = (state) => state.favorites.error;
