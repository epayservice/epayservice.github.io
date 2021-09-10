(function($) {
  var API_ENDPOINT = "https://online.epayservices.com/public/services";
  var GOOGLE_API_KEY = "AIzaSyBvDYN2cN2R4yTCRF6TwsnJMYqPRKIRWno";
  var SERVICES = {
    "local_payments/bank_deposit": "Local Bank Deposit",
    "local_payments/cash_pickup": "Cash Remittance",
    ach: "ACH & DirectDeposit",
    wires: "Wire Transfer (SWIFT)",
    sepa: "EU Bank Transfer (SEPA)"
  };

  var debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var drawRegionsMap = function(data) {
    var options = {
      backgroundColor: { color:'none;', stroke:'0' ,strokeWidth:0 },
      datalessRegionColor: '#E5F7FA',
      defaultColor: '#00ADD1',
      displayMode: 'regions',
      resolution: 'countries',
      legend: 'none',
      sizeAxis: { minValue: 1, maxValue:1,minSize:10,  maxSize: 10 },
      region: 'world',
      keepAspectRatio: true,
      width: null,
      height: null,
      tooltip: { trigger: 'focus', isHtml: true, showTitle: false }
    };

    var chart = new google.visualization.GeoChart(document.getElementById("local-payments-map"));
    chart.draw(data, options);
  };

  var renderPopup = function(countryName, services) {
    return (
      '<div class="map-popup">' +
        '<h3 class="map-popup__title">' + countryName + '</h3>' +
        '<ul class="map-popup__list">' +
          services.map(function(service_name) {
            var icon = '<i class="map-popup__check map-popup__check"></i>';
            return '<li class="map-popup__service">' + icon + SERVICES[service_name] + '</li>';
          }).join("") +
      '</ul></div>'
    );
  };

  var fetchCountries = function() {
    var prepareData = function(json) {
      var data = new google.visualization.DataTable();

      data.addColumn("string", "Country");
      data.addColumn({ type: "string", role: "tooltip", p: { html: true } });

      for (name in json) {
        data.addRow([name, renderPopup(name, json[name])]);
      }

      drawRegionsMap(data);
      window.addEventListener("resize", debounce(function() {
        drawRegionsMap(data);
      }, 300));
    };

    $.getJSON(API_ENDPOINT, prepareData);
  };

  var initMap = function() {
    google.charts.load('current', {'packages':['geochart'], mapsApiKey: GOOGLE_API_KEY });
    google.charts.setOnLoadCallback(fetchCountries);
  };

  initMap();

})(jQuery);
