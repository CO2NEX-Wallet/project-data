// Google Earth Engine Export Script
var farm = ee.FeatureCollection('users/your_username/farm_polygon');
var ndvi = ee.ImageCollection('MODIS/006/MOD13Q1')
  .filterBounds(farm)
  .select('NDVI')
  .mean();

Export.table.toDrive({
  collection: farm,
  description: 'FarmBoundary',
  fileFormat: 'GeoJSON'
});

Export.image.toDrive({
  image: ndvi,
  description: 'NDVI_Export',
  scale: 250,
  region: farm.geometry()
});
