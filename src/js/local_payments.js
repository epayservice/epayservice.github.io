(function($) {
  var API_ENDPOINT = "https://online.epayservices.com/public/local_payments";
  var DEFAULT_CURRENCY = "USD";

  var cached_rates = {};
  var current_rate;

  var fetchCountries = function() {
    var url = API_ENDPOINT + "/countries";
    var appendToSelect = function(json) {
      var options;

      options = json.map(function(arr) {
        return "<option value='" + arr[1] + "'>" + arr[0] + "</option>";
      });

      $country.append(options.join(""));
      $country.dropkick({ mobile: true });
    };

    return $.getJSON(url, { payment_mode: payment_mode }, appendToSelect);
  };

  var changeCountry = function() {
    var countryCode = $country.val();
    if (countryCode) {
      updateRates(countryCode);
    } else {
      disableAmount();
      clearCountryFields();
      clearReceiveFields();
    }
  };

  var updateRates = function(countryCode) {
    var cacheRates = function(json) {
      var rate;
      for (code in json) {
        rate = [code, parseFloat(json[code])];
        break;
      }
      cached_rates[countryCode] = rate;
      current_rate = rate;
    };
    var updateFieldsToCurrent = function() {
      $receiveCurrency.text(current_rate[0]);
      
      if (current_rate[1] != "1.0") {
        $sendCurrency.text("USD");
        $rate.text(current_rate[1].toFixed(2) + " " + current_rate[0]);
      } else {
        $sendCurrency.text(current_rate[0] == "EUR" ? "EUR" : "USD");
        $rate.text("-");
      }
    };
    var update = function() {
      updateFieldsToCurrent();
      enableAmount();
      updateReceive();
    };

    if (cached_rates[countryCode]) {
      current_rate = cached_rates[countryCode];
      update();
    } else {
      disableAmount();
      fetchRates(countryCode)
        .done(function(json) {
          cacheRates(json);
          update();
        });
    }
  };

  var fetchRates = function(countryCode) {
    var url = API_ENDPOINT + "/rates";
    return $.getJSON(url, {
      country: countryCode,
      payment_mode: payment_mode
    });
  };

  var updateReceive = function() {
    var updateFields = function(json) {
      var receiveAmount = convertCurrency(amount);
      $receive.val(receiveAmount);
      $fee.text(json.fee.value + " " + $sendCurrency.text());
    };

    var amount = $amount.val();
    var countryCode = $country.val();

    if (!countryCode || !amount) {
      clearReceiveFields();
      return;
    };

    fetchFee(countryCode, amount)
      .done(updateFields);
  };

  var fetchFee = function(countryCode, amount) {
    var url = API_ENDPOINT + "/fee";
    return $.getJSON(url, {
      amount: amount,
      country: countryCode,
      payment_mode: payment_mode
    });
  };

  var convertCurrency = function(amount) {
    var currency = current_rate[0];
    var rate = current_rate[1];
    var result;

    if (currency === DEFAULT_CURRENCY) return amount;

    if (amount && rate) {
      result = (amount * rate).toFixed(2);
      if (!isNaN(result)) {
        return result;
      }
    }

    return "-";
  };

  var enableAmount = function() {
    $amount.prop("disabled", false);
  };

  var disableAmount = function() {
    $amount.prop("disabled", true);
  };

  var clearReceiveFields = function() {
    $receive.val("");
    $fee.text("-");
  };

  var clearCountryFields = function() {
    $sendCurrency.text("USD");
    $receiveCurrency.text("-");
    $rate.text("-");
  };

  var $form = $("#local-payments-form");
  var $country = $("#local-payments-country");
  var $amount = $("#local-payments-amount");
  var $receive = $("#local-payments-receive");
  var $sendCurrency = $("#local-payments-send-currency");
  var $receiveCurrency = $("#local-payments-receive-currency");
  var $fee = $("#local-payments-fee");
  var $rate = $("#local-payments-rate");

  var payment_mode = $form.data("type");

  $country.on("change", changeCountry);
  $amount.on("input", updateReceive);

  fetchCountries();

})(jQuery);
