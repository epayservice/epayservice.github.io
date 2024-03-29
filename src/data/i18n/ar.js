module.exports = {
  menu: {
    services: 'الخدمات',
    fees: 'الرسوم',
    contactUs: 'إتصل بنا',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'إدارة الحساب',
    bankTransfers: 'تحويل الأموال',
    personalIBAN: 'Personal IBAN',
    personalUSAccount: 'Personal US Account',
    debitCards: 'البطاقات مسبقة الدفع',
    affiliatePayouts: 'دفع الأرباح للشركات المدمجة أو المؤسسات الفرعية',
    payrollSolutions: 'دفع الرواتب',
    virtualCards: 'بطاقات افتراضية',
    localPayments: 'التحويل المصرفي المحلي',
    sendMoneyToCard: 'التحويلات إلى بطاقات',
    cashRemittance: 'دفع نقدًا'
  },

  footer: {
    information: 'المعلومات',
    contactUs: 'إتصل بنا',
    signIn: 'تسجيل الدخول',
    affiliateProgram: 'برنامج للتسويق المشترك',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'أخبار',
    terms: 'الشروط',
    userAgreement: 'إتفاقية المستخدم',
    cardholdersAgreement: 'إتفاقية حاملى بطاقات ePayService ®Mastercard',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'تابعنا',
    twitter: 'Twitter',
    copyRight: '© جميع حقوق الطبع محفوظة لشركة MTACCDBA<br>ePayService 2007–<span></span>.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'اتجاه',
      fee: 'رسوم',
      minFee: 'الرسوم الدنيا',
      deposit: 'الودائع',
      withdraw: 'السحب',
      toWallet: 'في محفظتك مع ePayService',
      toBankAccount: 'إلى حسابك المصرفي',
      toCompanyBankAccount: 'إلى حساب مصرفي بإسم شركة',
      toIndividualBankAccount: 'إلى الحساب المصرفي للفرد'
    },

    moneyTransfersUS: {
      navText: 'ACH و DirectDeposit، حوالة مصرفية محلية',
      title: 'تحويل الأموال داخل الولايات المتحدة ACH و DirectDeposit، حوالة مصرفية محلية',
      linkText: 'المزيد عن ACH و DirectDeposit',
      direction: 'اتجاه',
      fee: 'رسوم',
      item1title: 'الودائع (ACH)/موقع DirectDeposit',
      item2title: 'تحويل مصرفي داخلي وارد',
      item3title: 'السحب (ACH)/موقع DirectDeposit',
      item4title: 'السحب حوالة مصرفية محلية',
      toWallet: 'في محفظتك مع ePayService',
      toAccount: 'إلى حساب شخصي أو إلى حساب شركة في بنك أمريكي'
    },

    sepa: {
      title: 'تحويل الأموال باليورو',
      linkText: 'SEPA المزيد عن',
    },

    localPayments: {
      forAllCurrencies: 'على جميع العملات أدناه',
      max: 'يصل إلى {{value}}'
    },

    crypto: {
      title: 'Crypto',
      descr: 'Currently we provide cryptocurrency exchange services only. This means that once you deposit cryptocurrency to the deposit address, we will exchange your cryptocurrency into USD, and credit USD to your ePayService wallet.'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'لا',
    betweenEpayCustomers: 'يوجد عمولة لتحويل الأموال بين عملاء ePayService',
    posFree: 'لا',
    pos: 'لا يوجد رسوم على معاملات نقاط البيع',
    bankTransfersFee: '{{value}}، بحد أدنى {{min}}',
    bankTransfersDescr: 'رسوم التحويلات البنكية من أصحاب العمل والشركاء',
    posLimit: '{{value}} دولار',
    atmLimit: '{{value}} الحد اليومى للسحب من ماكينات الصراف الآلى ونقاط البيع',
    cardLoadingFeesFree: 'لا!',
    cardLoadingFees: 'يوجد رسوم إيداع فى البطاقة',
    atnWithdrawalFeesValue: 'فقط {{value}}',
    atnWithdrawalFeesDescr: 'رسوم السحب من ماكينات الصراف الآلى (لكل معاملة)'
  },

  payments: 'التحويلات',
  cards: 'البطاقات مسبقة الدفع',

  cardsList: {
    standart: {
      title: 'بطاقة ePayService الاعتيادية',
      descr: 'الخصم من Mastercard®',
      tabName: 'الخصم من ePayService Mastercard® Standart',
      moreAbout: 'المزيد عن بطاقات ePayService'
    },

    premium: {
      title: 'بطاقة ePayServiceالمميزة',
      descr: 'الخصم من Mastercard®'
    },

    single: {
      title: 'بطاقة ePayService الإفتراضية الفردية',
      descr: 'بطاقة ماستركارد® مسبقة الدفع'
    },

    multi: {
      title: 'ePayService الافتراضية',
      descr: 'الخصم من Mastercard®',
      tabName: 'الخصم من ePayService Mastercard® الافتراضية',
      moreAbout: 'المزيد عن بطاقات ePayService الإفتراضية'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'إصدار وتفعيل بطاقة ePayService بطاقة ®Mastercard الإعتيادية {{ value }}',
    cardIssuanceAndActivationVirtual: 'إصدار البطاقة وتفعيل خدمة ePayService ®Mastercard الافتراضية {{ value }}',
    monthlyMaintenance: 'أجرة الصيانة الشهرية',
    minimumLoadLimit: 'الحد اليومى الأدنى للإيداع',
    maximumDailyLoadLimit: 'الحد اليومى الأقصى للإيداع',
    currencyExchange: 'رسوم تحويل العملات (رسوم FX)',
    ATMWithdrawalFeePerTransaction: 'لكل معاملة رسوم السحب من ماكينات الصراف الآلى',
    maximumNumberOfLoadsPerDay: 'أقصى عدد مرات الإيداع في اليوم الواحد بحد',
    maximumBalance: 'الحد الأقصى للرصيد',
    ATMBalanceInquiry: 'الصراف الآلي رسوم الاستعلام عن الرصيد من ماكينات',
    regularMail: 'البريد العادي',
    expressDelivery: 'البريد السريع',
    maximumCumulativeLoadValuePerYear: 'الحد الأقصى التراكمي للإيداع خلال العام',
    onlinePurchases: 'المشتريات عبر الإنترنت ومن خلال نقاط البيع',
    maximumAmountOfActiveCards: 'الحد الأقصى للبطاقات نشطة - ما يصل إلى'
  },

  important: 'هام!',
  cardValidPeriod: 'ستكون البطاقة صالحة لمدة 3 سنوات',

  deliveryMethod: 'أختر طريقة التسليم',

  free: 'مجاناً',

  virtual: {
    controlPurchases: 'إختر بطاقتك حسب حجم مشترياتك',
    useCard: 'استخدم بطاقة افتراضية قابلة لإعادة الشحن',
    dailyPurchaseLimit: 'حد الإنفاق اليومي هو {{ sum }} يورو',
    instantLoad: 'إيداع فورى بدون مصاريف',
    freeUnload: 'سحب مجانى إلى حساب ePayService',
    noMonthlyFee: 'بدون رسوم شهرية'
  },

  appDownload: {
    title: 'مرونة حقيقية',
    text: 'إدارة محفظة ePayService خاصتك من خلال جهازك المفضل ',
    downloadText: 'إدارة محفظة ePayService خاصتك من خلال جهازك المفضل ',
    openFreeAccount: 'قم بفتح حساب مجانى'
  }
}
