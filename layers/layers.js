var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Petakan_1 = new ol.format.GeoJSON();
var features_Petakan_1 = format_Petakan_1.readFeatures(json_Petakan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Petakan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Petakan_1.addFeatures(features_Petakan_1);
var lyr_Petakan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Petakan_1, 
                style: style_Petakan_1,
                popuplayertitle: 'Petakan',
                interactive: true,
                title: '<img src="styles/legend/Petakan_1.png" /> Petakan'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_BlokD_3 = new ol.format.GeoJSON();
var features_BlokD_3 = format_BlokD_3.readFeatures(json_BlokD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokD_3.addFeatures(features_BlokD_3);
var lyr_BlokD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokD_3, 
                style: style_BlokD_3,
                popuplayertitle: 'Blok D',
                interactive: true,
                title: '<img src="styles/legend/BlokD_3.png" /> Blok D'
            });
var format_BlokG_4 = new ol.format.GeoJSON();
var features_BlokG_4 = format_BlokG_4.readFeatures(json_BlokG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokG_4.addFeatures(features_BlokG_4);
var lyr_BlokG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokG_4, 
                style: style_BlokG_4,
                popuplayertitle: 'Blok G',
                interactive: true,
                title: '<img src="styles/legend/BlokG_4.png" /> Blok G'
            });
var format_BlokF_5 = new ol.format.GeoJSON();
var features_BlokF_5 = format_BlokF_5.readFeatures(json_BlokF_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokF_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokF_5.addFeatures(features_BlokF_5);
var lyr_BlokF_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokF_5, 
                style: style_BlokF_5,
                popuplayertitle: 'Blok F',
                interactive: true,
                title: '<img src="styles/legend/BlokF_5.png" /> Blok F'
            });
var format_BlokE_6 = new ol.format.GeoJSON();
var features_BlokE_6 = format_BlokE_6.readFeatures(json_BlokE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokE_6.addFeatures(features_BlokE_6);
var lyr_BlokE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokE_6, 
                style: style_BlokE_6,
                popuplayertitle: 'Blok E',
                interactive: true,
                title: '<img src="styles/legend/BlokE_6.png" /> Blok E'
            });
var format_BlokI_7 = new ol.format.GeoJSON();
var features_BlokI_7 = format_BlokI_7.readFeatures(json_BlokI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokI_7.addFeatures(features_BlokI_7);
var lyr_BlokI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokI_7, 
                style: style_BlokI_7,
                popuplayertitle: 'Blok I',
                interactive: true,
                title: '<img src="styles/legend/BlokI_7.png" /> Blok I'
            });
var format_BlokH_8 = new ol.format.GeoJSON();
var features_BlokH_8 = format_BlokH_8.readFeatures(json_BlokH_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokH_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokH_8.addFeatures(features_BlokH_8);
var lyr_BlokH_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokH_8, 
                style: style_BlokH_8,
                popuplayertitle: 'Blok H',
                interactive: true,
                title: '<img src="styles/legend/BlokH_8.png" /> Blok H'
            });
var format_BlokJ_9 = new ol.format.GeoJSON();
var features_BlokJ_9 = format_BlokJ_9.readFeatures(json_BlokJ_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokJ_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokJ_9.addFeatures(features_BlokJ_9);
var lyr_BlokJ_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokJ_9, 
                style: style_BlokJ_9,
                popuplayertitle: 'Blok J',
                interactive: true,
                title: '<img src="styles/legend/BlokJ_9.png" /> Blok J'
            });
var format_BlokK_10 = new ol.format.GeoJSON();
var features_BlokK_10 = format_BlokK_10.readFeatures(json_BlokK_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokK_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokK_10.addFeatures(features_BlokK_10);
var lyr_BlokK_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokK_10, 
                style: style_BlokK_10,
                popuplayertitle: 'Blok K',
                interactive: true,
                title: '<img src="styles/legend/BlokK_10.png" /> Blok K'
            });
var format_BlokL_11 = new ol.format.GeoJSON();
var features_BlokL_11 = format_BlokL_11.readFeatures(json_BlokL_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokL_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokL_11.addFeatures(features_BlokL_11);
var lyr_BlokL_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokL_11, 
                style: style_BlokL_11,
                popuplayertitle: 'Blok L',
                interactive: true,
                title: '<img src="styles/legend/BlokL_11.png" /> Blok L'
            });
var format_BlokM_12 = new ol.format.GeoJSON();
var features_BlokM_12 = format_BlokM_12.readFeatures(json_BlokM_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokM_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokM_12.addFeatures(features_BlokM_12);
var lyr_BlokM_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokM_12, 
                style: style_BlokM_12,
                popuplayertitle: 'Blok M',
                interactive: true,
                title: '<img src="styles/legend/BlokM_12.png" /> Blok M'
            });
var format_BlokN_13 = new ol.format.GeoJSON();
var features_BlokN_13 = format_BlokN_13.readFeatures(json_BlokN_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokN_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokN_13.addFeatures(features_BlokN_13);
var lyr_BlokN_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokN_13, 
                style: style_BlokN_13,
                popuplayertitle: 'Blok N',
                interactive: true,
                title: '<img src="styles/legend/BlokN_13.png" /> Blok N'
            });
var format_BlokO_14 = new ol.format.GeoJSON();
var features_BlokO_14 = format_BlokO_14.readFeatures(json_BlokO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokO_14.addFeatures(features_BlokO_14);
var lyr_BlokO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokO_14, 
                style: style_BlokO_14,
                popuplayertitle: 'Blok O',
                interactive: true,
                title: '<img src="styles/legend/BlokO_14.png" /> Blok O'
            });
var format_BlokP_15 = new ol.format.GeoJSON();
var features_BlokP_15 = format_BlokP_15.readFeatures(json_BlokP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokP_15.addFeatures(features_BlokP_15);
var lyr_BlokP_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokP_15, 
                style: style_BlokP_15,
                popuplayertitle: 'Blok P',
                interactive: true,
                title: '<img src="styles/legend/BlokP_15.png" /> Blok P'
            });
var format_BlokQ_16 = new ol.format.GeoJSON();
var features_BlokQ_16 = format_BlokQ_16.readFeatures(json_BlokQ_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokQ_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokQ_16.addFeatures(features_BlokQ_16);
var lyr_BlokQ_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokQ_16, 
                style: style_BlokQ_16,
                popuplayertitle: 'Blok Q',
                interactive: true,
                title: '<img src="styles/legend/BlokQ_16.png" /> Blok Q'
            });
var format_BlokR_17 = new ol.format.GeoJSON();
var features_BlokR_17 = format_BlokR_17.readFeatures(json_BlokR_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokR_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokR_17.addFeatures(features_BlokR_17);
var lyr_BlokR_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokR_17, 
                style: style_BlokR_17,
                popuplayertitle: 'Blok R',
                interactive: true,
                title: '<img src="styles/legend/BlokR_17.png" /> Blok R'
            });
var format_BlokS_18 = new ol.format.GeoJSON();
var features_BlokS_18 = format_BlokS_18.readFeatures(json_BlokS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokS_18.addFeatures(features_BlokS_18);
var lyr_BlokS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokS_18, 
                style: style_BlokS_18,
                popuplayertitle: 'Blok S',
                interactive: true,
                title: '<img src="styles/legend/BlokS_18.png" /> Blok S'
            });
var format_Mushola_19 = new ol.format.GeoJSON();
var features_Mushola_19 = format_Mushola_19.readFeatures(json_Mushola_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mushola_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mushola_19.addFeatures(features_Mushola_19);
var lyr_Mushola_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mushola_19, 
                style: style_Mushola_19,
                popuplayertitle: 'Mushola',
                interactive: true,
                title: '<img src="styles/legend/Mushola_19.png" /> Mushola'
            });
var format_BlokT_20 = new ol.format.GeoJSON();
var features_BlokT_20 = format_BlokT_20.readFeatures(json_BlokT_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokT_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokT_20.addFeatures(features_BlokT_20);
var lyr_BlokT_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokT_20, 
                style: style_BlokT_20,
                popuplayertitle: 'Blok T',
                interactive: true,
                title: '<img src="styles/legend/BlokT_20.png" /> Blok T'
            });
var format_Taman_21 = new ol.format.GeoJSON();
var features_Taman_21 = format_Taman_21.readFeatures(json_Taman_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Taman_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Taman_21.addFeatures(features_Taman_21);
var lyr_Taman_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Taman_21, 
                style: style_Taman_21,
                popuplayertitle: 'Taman',
                interactive: true,
                title: '<img src="styles/legend/Taman_21.png" /> Taman'
            });
var format_BlokC_22 = new ol.format.GeoJSON();
var features_BlokC_22 = format_BlokC_22.readFeatures(json_BlokC_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokC_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokC_22.addFeatures(features_BlokC_22);
var lyr_BlokC_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokC_22, 
                style: style_BlokC_22,
                popuplayertitle: 'Blok C',
                interactive: true,
                title: '<img src="styles/legend/BlokC_22.png" /> Blok C'
            });
var format_BlokB_23 = new ol.format.GeoJSON();
var features_BlokB_23 = format_BlokB_23.readFeatures(json_BlokB_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokB_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokB_23.addFeatures(features_BlokB_23);
var lyr_BlokB_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokB_23, 
                style: style_BlokB_23,
                popuplayertitle: 'Blok B',
                interactive: true,
                title: '<img src="styles/legend/BlokB_23.png" /> Blok B'
            });
var format_BlokA_24 = new ol.format.GeoJSON();
var features_BlokA_24 = format_BlokA_24.readFeatures(json_BlokA_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokA_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokA_24.addFeatures(features_BlokA_24);
var lyr_BlokA_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokA_24, 
                style: style_BlokA_24,
                popuplayertitle: 'Blok A ',
                interactive: true,
                title: '<img src="styles/legend/BlokA_24.png" /> Blok A '
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Petakan_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_BlokD_3.setVisible(true);lyr_BlokG_4.setVisible(true);lyr_BlokF_5.setVisible(true);lyr_BlokE_6.setVisible(true);lyr_BlokI_7.setVisible(true);lyr_BlokH_8.setVisible(true);lyr_BlokJ_9.setVisible(true);lyr_BlokK_10.setVisible(true);lyr_BlokL_11.setVisible(true);lyr_BlokM_12.setVisible(true);lyr_BlokN_13.setVisible(true);lyr_BlokO_14.setVisible(true);lyr_BlokP_15.setVisible(true);lyr_BlokQ_16.setVisible(true);lyr_BlokR_17.setVisible(true);lyr_BlokS_18.setVisible(true);lyr_Mushola_19.setVisible(true);lyr_BlokT_20.setVisible(true);lyr_Taman_21.setVisible(true);lyr_BlokC_22.setVisible(true);lyr_BlokB_23.setVisible(true);lyr_BlokA_24.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Petakan_1,lyr_Jalan_2,lyr_BlokD_3,lyr_BlokG_4,lyr_BlokF_5,lyr_BlokE_6,lyr_BlokI_7,lyr_BlokH_8,lyr_BlokJ_9,lyr_BlokK_10,lyr_BlokL_11,lyr_BlokM_12,lyr_BlokN_13,lyr_BlokO_14,lyr_BlokP_15,lyr_BlokQ_16,lyr_BlokR_17,lyr_BlokS_18,lyr_Mushola_19,lyr_BlokT_20,lyr_Taman_21,lyr_BlokC_22,lyr_BlokB_23,lyr_BlokA_24];
lyr_Petakan_1.set('fieldAliases', {'id': 'id', });
lyr_Jalan_2.set('fieldAliases', {'id': 'id', });
lyr_BlokD_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokG_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokF_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokE_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokI_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokH_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokJ_9.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokK_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokL_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokM_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokN_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokO_14.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokP_15.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokQ_16.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokR_17.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokS_18.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Mushola_19.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokT_20.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Taman_21.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokC_22.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokB_23.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BlokA_24.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Petakan_1.set('fieldImages', {'id': '', });
lyr_Jalan_2.set('fieldImages', {'id': '', });
lyr_BlokD_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokG_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokF_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokE_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokI_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokH_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokJ_9.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokK_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokL_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokM_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokN_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokO_14.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokP_15.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokQ_16.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokR_17.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokS_18.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Mushola_19.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokT_20.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Taman_21.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokC_22.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokB_23.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_BlokA_24.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Petakan_1.set('fieldLabels', {'id': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'id': 'no label', });
lyr_BlokD_3.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokG_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokF_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokE_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokI_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokH_8.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokJ_9.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokK_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokL_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokM_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokN_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokO_14.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokP_15.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokQ_16.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokR_17.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokS_18.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Mushola_19.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokT_20.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Taman_21.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokC_22.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokB_23.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokA_24.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_BlokA_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});