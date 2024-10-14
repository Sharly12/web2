var wms_layers = [];


        var lyr_ESRIGraydark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_ZoneFactor_1 = new ol.format.GeoJSON();
var features_ZoneFactor_1 = format_ZoneFactor_1.readFeatures(json_ZoneFactor_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZoneFactor_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneFactor_1.addFeatures(features_ZoneFactor_1);
var lyr_ZoneFactor_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneFactor_1, 
                style: style_ZoneFactor_1,
                popuplayertitle: "Zone Factor ",
                interactive: true,
    title: 'Zone Factor <br />\
    <img src="styles/legend/ZoneFactor_1_0.png" /> 0<br />\
    <img src="styles/legend/ZoneFactor_1_1.png" /> 0.5<br />\
    <img src="styles/legend/ZoneFactor_1_2.png" /> 1<br />\
    <img src="styles/legend/ZoneFactor_1_3.png" /> 1.5<br />\
    <img src="styles/legend/ZoneFactor_1_4.png" /> 2<br />\
    <img src="styles/legend/ZoneFactor_1_5.png" /> 2.5<br />\
    <img src="styles/legend/ZoneFactor_1_6.png" /> 3<br />'
        });
var format_Road_2 = new ol.format.GeoJSON();
var features_Road_2 = format_Road_2.readFeatures(json_Road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_2.addFeatures(features_Road_2);
var lyr_Road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_2, 
                style: style_Road_2,
                popuplayertitle: "Road",
                interactive: false,
                title: '<img src="styles/legend/Road_2.png" /> Road'
            });

lyr_ESRIGraydark_0.setVisible(true);lyr_ZoneFactor_1.setVisible(true);lyr_Road_2.setVisible(true);
var layersList = [lyr_ESRIGraydark_0,lyr_ZoneFactor_1,lyr_Road_2];
lyr_ZoneFactor_1.set('fieldAliases', {'Zone': 'Zone Number ', 'Zone_Facto': 'Zone Factor ', 'Permitted': 'Permitted Activities ', 'Not_Permit': 'Not Permitted Activities ', 'Permissibl': 'Permissble Land Extent for Developpment ', 'Height': 'Height', 'Special_Re': 'Special Regulation ', 'ZF': 'ZF', });
lyr_Road_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name_si': 'name_si', 'constructi': 'constructi', 'path': 'path', 'landuse': 'landuse', 'footway': 'footway', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'intermitte': 'intermitte', 'seasonal': 'seasonal', 'overtaking': 'overtaking', 'width': 'width', 'name_ta': 'name_ta', 'tracktype': 'tracktype', 'horse': 'horse', 'bicycle': 'bicycle', 'man_made': 'man_made', 'natural': 'natural', 'tunnel': 'tunnel', 'embankment': 'embankment', 'motorcycle': 'motorcycle', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'junction': 'junction', 'service': 'service', 'is_in': 'is_in', 'waterway': 'waterway', 'boat': 'boat', 'turn_lanes': 'turn_lanes', 'maxweight_': 'maxweight_', 'layer': 'layer', 'bridge': 'bridge', 'smoothness': 'smoothness', 'foot': 'foot', 'official_n': 'official_n', 'maxheight': 'maxheight', 'loc_name': 'loc_name', 'incline': 'incline', 'toll': 'toll', 'alt_name': 'alt_name', 'sidewalk': 'sidewalk', 'shoulder': 'shoulder', 'surface': 'surface', 'oneway': 'oneway', 'lit': 'lit', 'lanes': 'lanes', 'ref': 'ref', 'old_ref': 'old_ref', 'name': 'name', 'maxspeed': 'maxspeed', 'highway': 'highway', 'type': 'type', 'route': 'route', 'public_tra': 'public_tra', 'network': 'network', });
lyr_ZoneFactor_1.set('fieldImages', {'Zone': 'TextEdit', 'Zone_Facto': 'TextEdit', 'Permitted': 'TextEdit', 'Not_Permit': 'TextEdit', 'Permissibl': 'TextEdit', 'Height': 'Hidden', 'Special_Re': 'TextEdit', 'ZF': 'Hidden', });
lyr_Road_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'name_si': 'TextEdit', 'constructi': 'TextEdit', 'path': 'TextEdit', 'landuse': 'TextEdit', 'footway': 'TextEdit', 'crossing_m': 'TextEdit', 'crossing': 'TextEdit', 'intermitte': 'TextEdit', 'seasonal': 'TextEdit', 'overtaking': 'TextEdit', 'width': 'TextEdit', 'name_ta': 'TextEdit', 'tracktype': 'TextEdit', 'horse': 'TextEdit', 'bicycle': 'TextEdit', 'man_made': 'TextEdit', 'natural': 'TextEdit', 'tunnel': 'TextEdit', 'embankment': 'TextEdit', 'motorcycle': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'junction': 'TextEdit', 'service': 'TextEdit', 'is_in': 'TextEdit', 'waterway': 'TextEdit', 'boat': 'TextEdit', 'turn_lanes': 'TextEdit', 'maxweight_': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'foot': 'TextEdit', 'official_n': 'TextEdit', 'maxheight': 'TextEdit', 'loc_name': 'TextEdit', 'incline': 'TextEdit', 'toll': 'TextEdit', 'alt_name': 'TextEdit', 'sidewalk': 'TextEdit', 'shoulder': 'TextEdit', 'surface': 'TextEdit', 'oneway': 'TextEdit', 'lit': 'TextEdit', 'lanes': 'TextEdit', 'ref': 'TextEdit', 'old_ref': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'highway': 'TextEdit', 'type': 'TextEdit', 'route': 'TextEdit', 'public_tra': 'TextEdit', 'network': 'TextEdit', });
lyr_ZoneFactor_1.set('fieldLabels', {'Zone': 'header label - visible with data', 'Zone_Facto': 'header label - visible with data', 'Permitted': 'header label - visible with data', 'Not_Permit': 'header label - visible with data', 'Permissibl': 'header label - visible with data', 'Special_Re': 'header label - visible with data', });
lyr_Road_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name_si': 'no label', 'constructi': 'no label', 'path': 'no label', 'landuse': 'no label', 'footway': 'no label', 'crossing_m': 'no label', 'crossing': 'no label', 'intermitte': 'no label', 'seasonal': 'no label', 'overtaking': 'no label', 'width': 'no label', 'name_ta': 'no label', 'tracktype': 'no label', 'horse': 'no label', 'bicycle': 'no label', 'man_made': 'no label', 'natural': 'no label', 'tunnel': 'no label', 'embankment': 'no label', 'motorcycle': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'junction': 'no label', 'service': 'no label', 'is_in': 'no label', 'waterway': 'no label', 'boat': 'no label', 'turn_lanes': 'no label', 'maxweight_': 'no label', 'layer': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'foot': 'no label', 'official_n': 'no label', 'maxheight': 'no label', 'loc_name': 'no label', 'incline': 'no label', 'toll': 'no label', 'alt_name': 'no label', 'sidewalk': 'no label', 'shoulder': 'no label', 'surface': 'no label', 'oneway': 'no label', 'lit': 'no label', 'lanes': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'highway': 'no label', 'type': 'no label', 'route': 'no label', 'public_tra': 'no label', 'network': 'no label', });
lyr_Road_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});