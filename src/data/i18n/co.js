module.exports = {
  menu: {
    services: 'Servicios',
    fees: 'Tarifas',
    contactUs: 'Contáctenos',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Manejo de Cuentas',
    bankTransfers: 'Transferencias de Dinero',
    personalIBAN: 'IBAN personal',
    personalUSAccount: 'Cuenta personal de US',
    debitCards: 'Tarjetas de débito',
    affiliatePayouts: 'Pagos de Afiliados',
    payrollSolutions: 'Soluciones de Nómina Salarial',
    virtualCards: 'Tarjetas Virtuales',
    localPayments: 'Transferencia bancaria local',
    sendMoneyToCard: 'Transferencias a tarjetas',
    cashRemittance: 'Pagos en efectivo'
  },

  footer: {
    information: 'Información',
    contactUs: 'Contáctenos',
    signIn: 'Iniciar Sesión',
    affiliateProgram: 'Programa de Afiliados',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Noticias',
    terms: 'Términos',
    userAgreement: 'Acuerdo del Usuario',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Síganos',
    twitter: 'Twitter',
    copyRight: '© Derechos de autor MTACC Inc. DBA ePayService 2007–<span></span>, <br>Todos los derechos reservados.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Dirección',
      fee: 'Tarifa',
      minFee: 'Tarifa mínimo',
      deposit: 'Depósitos',
      withdraw: 'Retiro',
      toWallet: 'a su billetera con ePayService',
      toBankAccount: 'a su cuenta bancaria',
      toCompanyBankAccount: 'a su cuenta bancaria empresarial',
      toIndividualBankAccount: 'a una cuenta bancaria personal'
    },

    moneyTransfersUS: {
      navText: 'ACH y DirectDeposit, transferencias nacionales',
      title: 'Transferencias de Dinero en Estados Unido (ACH y DirectDeposit, transferencias nacionales)',
      linkText: 'Más información acerca de ACH y DirectDeposit',
      direction: 'Dirección',
      fee: 'Tarifa',
      item1title: 'Ingreso de ACH y DirectDeposit',
      item2title: 'Ingreso de transferencias nacionales',
      item3title: 'Envío de ACH y DirectDeposit',
      item4title: 'Envío de transferencias nacionales',
      toWallet: 'a su billetera con ePayService',
      toAccount: 'a una cuenta personal o empresarial con un banco de EE.UU.'
    },

    sepa: {
      title: 'Transferencias de Dinero en Euro',
      linkText: 'Más información acerca SEPA',
    },

    localPayments: {
      forAllCurrencies: 'por todas las divisas a continuación',
      max: 'hasta {{value}}'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Ninguna',
    betweenEpayCustomers: 'Tarifa de comisión para transferir entre clientes de ePayService',
    posFree: 'Ninguna',
    pos: 'Tarifa de transacción POS',
    bankTransfersFee: '{{value}}, min {{min}}',
    bankTransfersDescr: 'Transferencias bancarias por parte de sus empleadores y socios',
    posLimit: 'Hasta {{value}} límite de gasto en POS',
    atmLimit: 'Hasta {{value}} límite de gasto cajeros automáticos',
    cardLoadingFeesFree: '¡Ninguna!',
    cardLoadingFees: 'Tarifa de recarga de la tarjeta',
    atnWithdrawalFeesValue: 'Solo {{value}}',
    atnWithdrawalFeesDescr: 'Tarifa de retiro del cajero automático (por cada transacción)'
  },

  payments: 'Transferencias',
  cards: 'Tarjetas Prepago',

  cardsList: {
    standart: {
      title: 'Tarjeta Estándar Epayservice',
      descr: 'Mastercard® Débito',
      tabName: 'Tarjeta de débito ePayService Mastercard® Standard',
      moreAbout: 'Más información acerca de las tarjetas ePayService'
    },

    premium: {
      title: 'Tarjeta Premium Epayservice',
      descr: 'Mastercard® Prepagada'
    },

    single: {
      title: 'Individual Virtual Epayservice',
      descr: 'Mastercard® Prepagada'
    },

    multi: {
      title: 'Virtual Epayservice',
      descr: 'Mastercard® Débito',
      tabName: 'Tarjeta de débito ePayService Mastercard® Virtual',
      moreAbout: 'Más información acerca de virtual ePayService'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Expedición y Activación de la Tarjeta Mastercard® de ePayService Estándar {{ value }}',
    cardIssuanceAndActivationVirtual: 'Expedición y Activación de la Tarjeta Mastercard® de ePayService Virtual {{ value }}',
    monthlyMaintenance: 'Cuota mensual de mantenimiento',
    minimumLoadLimit: 'Límite mínimo de recarga diaria de',
    maximumDailyLoadLimit: 'Límite máximo de recarga diaria de',
    currencyExchange: 'Cambio de Moneda (Tarifa FX)',
    ATMWithdrawalFeePerTransaction: 'Tarifa por retiro del cajero automático por cada transacción de',
    maximumNumberOfLoadsPerDay: 'Número máximo de recargas por día',
    maximumBalance: 'Saldo máximo',
    ATMBalanceInquiry: 'Consulta del saldo en el cajero automático',
    regularMail: 'Correo Regular',
    expressDelivery: 'Entrega Exprés',
    maximumCumulativeLoadValuePerYear: 'Cantidad de carga máxima acumulada por año de',
    onlinePurchases: 'POS/Compras en Línea',
    maximumAmountOfActiveCards: 'Cantidad máxima de tarjetas activas'
  },

  important: '¡Importante!',
  cardValidPeriod: 'La tarjeta tendrá una validez de 3 años',

  deliveryMethod: 'Método de entrega',

  free: 'GRATIS',

  virtual: {
    controlPurchases: 'Controle sus compras',
    useCard: 'Utilizar la tarjeta virtual recargable',
    dailyPurchaseLimit: 'Límite de compra diario ${{ sum }} USD',
    instantLoad: 'Añadir fontos a la tarjeta es gratis',
    freeUnload: 'Volver fondos a la cuenta de ePayService es gratis',
    noMonthlyFee: 'Sin cuota mensual'
  },

  appDownload: {
    title: 'Verdadera Flexibilidad',
    text: 'Maneje su Cartera de ePayService a través de su dispositivo favorito',
    downloadText: 'Acciónela con el sistema de pago Online.ePayServices',
    openFreeAccount: 'Abra Una Cuenta Gratuita'
  }
}
