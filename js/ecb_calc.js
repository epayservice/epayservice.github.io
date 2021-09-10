(function($) {
  var API_ENDPOINT = "https://online.epayservices.com/public/mc_rates";
  var rates = {};

  function fetchRates() {
    var appendToSelect = function(json) {
      rates = json["EUR"];
      var options;

      options = Object.keys(rates).sort().map(function(currency) {
        return "<option value='" + currency + "'>" + currency + "</option>";
      });

      $currencies.html(options.join(""));
      $currencies.val("USD");

      calcResult();

        var $ecbRatesSection = $("#ecb-rates-section");
        var sampleRow = $("#ecb-rate-row").clone();
        sampleRow.id = "";
        $ecbRatesSection.empty();
        Object.keys(rates).sort().forEach(function(currency) {
            var row = sampleRow.clone();
            row.find(".service-info__text").text(rates[currency].currency_name + " (" + currency + ")");
            row.find(".service-info__number").text(rates[currency].over_ecb + "%");
            $ecbRatesSection.append(row)
        });

    };

    $.getJSON(API_ENDPOINT, appendToSelect);
  }

  function calcResult() {
    var amount = $amount.val();
    var currency = $currencies.val();
    var rate = rates[currency];
    var result;

    if (!amount) {
      result = 0;
    } else {
      result = (amount / rate.rate).toFixed(2);
    }

    $result.text(result + " EUR");
    $rate.text("1 EUR = " + rate.rate + " " + currency);
    $markup.text(rate.over_ecb + "%")
  }

  var $form = $("#ecb-calc");
  var $amount = $("#ecb-calc-amount");
  var $currencies = $("#ecb-calc-currencies");
  var $result = $("#ecb-calc-result");
  var $rate = $("#ecb-calc-rate");
  var $markup = $("#ecb-calc-markup");

  fetchRates();

  $amount.on("input", calcResult);
  $currencies.on("change", calcResult);

})(jQuery);
