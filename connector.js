// Embed the CO2 Emissions Map
var vg_1 = "Vis1_CO_emissions_by_country_map.json";  
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance for the map
}).catch(console.error);

// Embed the Bubble Chart
var vg_2 = "Vis2_CO2_reductions_and_renewable_energy_investment.json";  
vegaEmbed("#bubble-chart", vg_2).then(function(result) {
    // Access the Vega view instance for the bubble chart
}).catch(console.error);

// Embed the Line Chart 
var vg_3 = "Vis3_CO2_emissions_by_sector.json";  
vegaEmbed("#line-chart", vg_3).then(function(result) {
    // Access the Vega view instance for the stacked bar chart
}).catch(console.error);

// Embed the Heatmap 
var vg_4 = "Vis4_CO2_emissions_from_manufacturing_and_transport.json";  
vegaEmbed("#heatmap", vg_4).then(function(result) {
    // Access the Vega view instance for the heatmap
}).catch(console.error);

// Embed the Streamgraph 
var vg_5 = "Vis5_renewable_energy_capacity_vs_GDP_per_capita.json";  
vegaEmbed("#streamgraph", vg_5).then(function(result) {
    // Access the Vega view instance for the grouped bar chart
}).catch(console.error);
