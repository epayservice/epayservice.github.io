module.exports = {
  menu: {
    services: 'Serviços',
    fees: 'Taxas',
    contactUs: 'Contacte-nos',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Gestão de Conta',
    bankTransfers: 'Transferências de Dinheiro',
    personalIBAN: 'IBAN pessoal',
    personalUSAccount: 'Conta Pessoal nos EUA',
    debitCards: 'Cartão de débito',
    affiliatePayouts: 'Pagamentos a Afiliados',
    payrollSolutions: 'Soluções de Pagamento',
    virtualCards: 'Cartões Virtuais',
    localPayments: 'Transferência bancária local',
    sendMoneyToCard: 'Transferências para cartões',
    cashRemittance: 'Pagamentos em dinheiro'
  },

  footer: {
    information: 'Informação',
    contactUs: 'Contacte-nos',
    signIn: 'Entrar',
    affiliateProgram: 'Programa de Afiliação',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Notícia',
    terms: 'Termos',
    userAgreement: 'Acordo do Utilizador',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Siga-nos',
    twitter: 'Twitter',
    copyRight: '© Copyright MTACC Inc. DBA ePayService 2007–<span></span>, <br>Todos os direitos reservados.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Direção',
      fee: 'Comissão',
      minFee: 'Comissão minimo',
      deposit: 'Depósitos',
      withdraw: 'Levantamentos',
      toWallet: 'para a sua carteira com ePayService',
      toBankAccount: 'para a sua conta bancária',
      toCompanyBankAccount: 'para a conta bancária da empresa',
      toIndividualBankAccount: 'para a conta bancária de um indivíduo'
    },

    moneyTransfersUS: {
      navText: 'ACH & DirectDeposit, transferência doméstica',
      title: 'Transferência de Dinheiro nos EUA (ACH & DirectDeposit, transferência doméstica)',
      linkText: 'Mais sobre o ACH & DirectDeposit',
      direction: 'Direção',
      fee: 'Comissão',
      item1title: 'ACH/DirectDeposit de entrada',
      item2title: 'Transferência doméstica de entrada',
      item3title: 'ACH/DirectDeposit de Saída',
      item4title: 'Transferência doméstica de Saída',
      toWallet: 'para a sua carteira com ePayService',
      toAccount: 'para uma conta pessoal ou empresarial para um banco dos EUA'
    },

    sepa: {
      title: 'Transferência de Dinheiro em EUR',
      linkText: 'Mais sobre SEPA',
    },

    localPayments: {
      forAllCurrencies: 'para todas as moedas abaixo',
      max: 'até {{value}}'
    },

    crypto: {
      title: 'Crypto',
      descr: 'Currently we provide cryptocurrency exchange services only. This means that once you deposit cryptocurrency to the deposit address, we will exchange your cryptocurrency into USD, and credit USD to your ePayService wallet.'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Nenhuma',
    betweenEpayCustomers: 'Taxa de Comissão para transferências entre clientes da ePayService',
    posFree: 'GRATUITA',
    pos: 'Taxa de transação POS',
    bankTransfersFee: '{{value}}, min {{min}}',
    bankTransfersDescr: 'Transferências bancárias dos seus empregadores e parceiros de negócio',
    posLimit: 'Até {{value}} Limite de POS',
    atmLimit: 'Até {{value}} Limite e gasto de Multibanco',
    cardLoadingFeesFree: 'Nenhuma!',
    cardLoadingFees: 'Taxa de carregamento do cartão',
    atnWithdrawalFeesValue: 'Apenas {{value}}',
    atnWithdrawalFeesDescr: 'Taxa de levantamento em caixas multibanco (por transação)'
  },

  payments: 'Transferências',
  cards: 'Cartões Pré-pagos',

  cardsList: {
    standart: {
      title: 'Cartão Standard ePayService',
      descr: 'Mastercard® Débito',
      tabName: 'Cartão de débito ePayService Mastercard® Standard',
      moreAbout: 'Mais sobre os cartões ePayService'
    },

    premium: {
      title: 'Cartão Premium ePayService',
      descr: 'Mastercard® Pré-pago'
    },

    single: {
      title: 'Virtual Single ePayService',
      descr: 'Mastercard® Pré-pago'
    },

    multi: {
      title: 'Virtual ePayService',
      descr: 'Mastercard® Débito',
      tabName: 'Cartão de débito ePayService Mastercard® Virtual',
      moreAbout: 'Mais sobre o ePayService Virtual'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Emissão & Ativação do Cartão Normal ePayService Mastercard® {{ value }}',
    cardIssuanceAndActivationVirtual: 'Emissão & Ativação do Virtual ePayService Mastercard® {{ value }}',
    monthlyMaintenance: 'Taxa mensal de manutenção',
    minimumLoadLimit: 'Limite Mínimo de Carregamento Diário',
    maximumDailyLoadLimit: 'Limite Máximo de Carregamento Diário',
    currencyExchange: 'Câmbio de Moeda (Taxa FX)',
    ATMWithdrawalFeePerTransaction: 'Taxa de Levantamento no multibanco por transação',
    maximumNumberOfLoadsPerDay: 'Número máximo de carregamentos por dia',
    maximumBalance: 'Saldo máximo',
    ATMBalanceInquiry: 'Consulta de Saldo no Multibanco',
    regularMail: 'Correio Normal',
    expressDelivery: 'Entrega Expresso',
    maximumCumulativeLoadValuePerYear: 'Valor cumulativo de carregamento máximo por ano',
    onlinePurchases: 'Compras POS/Online',
    maximumAmountOfActiveCards: 'O número máximo de cartões activos'
  },

  important: 'Importante!',
  cardValidPeriod: 'O cartão será válido por 3 anos',

  deliveryMethod: 'Método de entrega',

  free: 'GRÁTIS',

  virtual: {
    controlPurchases: 'Controle suas compras',
    useCard: 'Usar Cartão Virtual Recarregável',
    dailyPurchaseLimit: 'Limite para compras diárias de até € {{ sum }}',
    instantLoad: 'Carregamento instantâneo e sem taxa',
    freeUnload: 'Transferência gratuita para a conta ePayService',
    noMonthlyFee: 'Sem taxas mensais'
  },

  appDownload: {
    title: 'Verdadeira Flexibilidade',
    text: 'Faça a gestão da sua Carteira ePayService utilizando o seu dispositivo favorito',
    downloadText: 'Potencie-a com o sistema de pagamento Online.ePayServices',
    openFreeAccount: 'Abrir Uma Conta Gratuita'
  }
}
