function componentData() {
    return {
        message: '🤖 Hello World 🤓'
    }
}

var map = new jsVectorMap({
    selector: "#warrandyte-map",
    map: "australia",

    focusOn: {
        regions: ['AU-VIC']
    },
    markers: [
        { name: "Warrandyte", coords: [-37.758255, 145.2031923], label: 'Warrandyte' },
        { name: "Melbourne", coords: [-37.7925192, 144.9782945], label: 'Melbourne' },
        { name: "Sydney", coords: [-33.8479271, 150.6518015], label: 'Sydney' },
        { name: "Brisbane", coords: [-27.3812534,152.7130232], label: 'Brisbane' },
        { name: "Sale", coords: [-38.10603,147.0356643], label: 'Sale' },
        { name: "Mornington", coords: [-38.2277575,145.0447436], label: 'Mornington' },
    ],
    zoomMax: 50,
    zoomMin: 30,
    lines: [
        { from: 'Sydney', to: 'Warrandyte' }, 
        { from: 'Melbourne', to: 'Warrandyte' },
        { from: 'Brisbane', to: 'Warrandyte' }, 
        { from: 'Sale', to: 'Warrandyte' },
        { from: 'Mornington', to: 'Warrandyte' },
    ],
    markerStyle: {
        initial: { fill: "#1E40AF" },
        selected: { fill: "#7C3AED" }
    },
    selectedMarkers: [0],
    labels: {
        markers: {
            render: marker => marker.name
        }
    },
    lineStyle: {
        stroke: "#676767",
        strokeWidth: 2.5,
        fill: '#ff5566',
        fillOpacity: 1,
        strokeDasharray: '6 3 6', // OR: [6, 2, 6]
        animation: true
    },
    firstLoad: true, // Custom param for tracking first load, used for initial focus on particular spot
    onViewportChange(scale, transX, transY) {
        if (map.params.firstLoad) {
            // Focus on Warrandyte
            var moveXBy = -50;
            var moveYBy = 300;
            map.transX -= moveXBy / map.scale
            map.transY -= moveYBy / map.scale
            map.applyTransform()
            map.params.zoomMin = 1
            map.params.firstLoad = false
        }
    }
});

