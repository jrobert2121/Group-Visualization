# Group-Visualization

## Project Overview
Create a visualization to demonstrate the density (or lack thereof) of free wi-fi locations through the neighborhoods of Boston.

## Resources
Data Sources:
 - [Boston Neighborhoods](static/data/Boston_Neighborhoods.geojson)
 - [Free Wi-Fi Locations](Group-Visualization/static/data/Wicked_Free_Wi-Fi_Locations.geojson)
 - [Charging Stations](static/data/Charging_Stations.geojson)

## Process
- We created two basemaps for the user to choose between using layer controls.
- For the wifi locations, we provided markers with popups with the name of the neighborhood and the address of the location.
- For the neighborhoods, we used color to define the boundaries.
- For the charging stations, we used circle markers, with the fuel type and location data.
- When clicking on a neighborhood, we used a d3 listener to enlarge the selected neighborhood to fit the screen, as well as provide a popup with the name of the neighborhood.
- The neighborhood and charging geojson data was added to overlays, for map customization and easy readability.

## Results
The map demonstrates the lack of free wi-fi available in several neighborhoods of Boston.  The majority of free wi-fi is primarily found the Roxbury, Dorchester and Downtown neighborhoods.
In hindsight, the majority of vehicle charging stations were found downtown, but were very limited in the Roxbury area.

Final results: Roxbury district will have strong wifi signals, but if you own a electric vehicle, you may want to live closer to the downtown area.

