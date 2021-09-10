(function(exports, $) {

  var DEFAULT_SUM = 1000;
  var MAX_SUM = 1000000;
  var MAX_SUM_WARNING_CLS = "calc__warning--hidden";

  var MONEY_FORMATS = {
    ru: {
      thousand: " ",
      decimal: ","
    },
    en: {
      thousand: ",",
      decimal: "."
    }
  };

  function setupFormat(lang) {
    var opts = {
      precision: 2,
      format: "%v %s"
    };

    if (lang === "ru") {
      $.extend(opts, MONEY_FORMATS[lang]);
    } else {
      $.extend(opts, MONEY_FORMATS["en"]);
    }

    return function format(number, currency) {
      opts.symbol = currency || "";
      number = accounting.toFixed(number, 2);

      return accounting.formatMoney(number, opts);
    }
  };

  function setupCalc(blockId, $inputSum, $container, $exchangeSum, $maxSumWarning, format) {
    var $exchangeFee = $container.find('.js-exchange-fee');
    var $exchangeMinFee = $container.find('.js-exchange-min-fee');
    var $exchangeResult = $container.find('.js-exchange-result');
    var $exchangeCommission = $container.find('.js-commission');
    var $currency = $container.find('.js-calc-currency');

    var incoming = $container.is('.exchange__row_incoming');
    var fee = parseFloat($exchangeFee.data("fee"));
    var minFee = parseInt($exchangeMinFee.data("min-fee"));
    var percentageValue = parseFloat($exchangeFee.data("percentage"));
    var percentage = percentageValue / 100;

    return function() {
      var currency = $currency.text();
      var sumValue = $inputSum.val().replace(/[^0-9\.]/g,'');
      var sum = parseFloat(sumValue) || DEFAULT_SUM;
      var pay;
      var result;

      $inputSum.val(sumValue);
      $exchangeSum.text(format(sum));

      // HACK
      if (blockId === "to-card") {
        if (fee === 3 && sum > 500) {
          sum = 500;
        } else if (fee === 6 && sum < 500) {
          sum = 501;
        }
      }

      if (blockId === "cash_remittance") {
        if (fee === 15 && sum > 500) {
          sum = 500;
        } else if (fee === 30 && sum < 500) {
          sum = 501;
        }
      }

      if (sum >= MAX_SUM) {
        sum = DEFAULT_SUM;
        $maxSumWarning.removeClass(MAX_SUM_WARNING_CLS);
      } else if (!$maxSumWarning.hasClass(MAX_SUM_WARNING_CLS)) {
        $maxSumWarning.addClass(MAX_SUM_WARNING_CLS);
      }

      pay = percentage * sum;

      if (fee) {
        pay += fee;
      }

      if (pay < minFee) {
        pay = minFee;
      }

      if (incoming) {
        result = sum - pay;
      } else {
        result = sum + pay;
      }


      if (result < 0) {
        result = 0;
      }

      $exchangeResult.text(format(result));
      $exchangeCommission.text(format(pay, currency));
    }
  }

  exports.ComissionCalculator = function(opts) {
    var $calcButton = opts.form.find(".js-calc-button");
    var $inputSum = opts.form.find(".js-input-sum");
    var $maxSumWarning = opts.form.find(".js-sum-warning");

    var callbacks = [];

    var format = setupFormat(opts.lang);

    var runCallbacks = function(){
      callbacks.forEach(function(cb) { cb(); });
    };

    var setupCallbacks = function(i, calcBlock){
      var $calcBlock = $(calcBlock);
      var blockId = calcBlock.id;
      var $exchangeSum = $calcBlock.find('.js-exchange-sum');

      $calcBlock.find(".exchange__row").each(function(i, row) {
        var callback = setupCalc(blockId, $inputSum, $(row), $exchangeSum, $maxSumWarning, format);
        callbacks.push(callback);
      });
    };

    opts.items.each(setupCallbacks);

    $inputSum.on("input", runCallbacks);
    $calcButton.on("click", runCallbacks);

    runCallbacks();

    return {
      run: runCallbacks
    };
  };
})(window, jQuery);
