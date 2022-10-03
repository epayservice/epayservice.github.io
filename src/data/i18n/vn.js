module.exports = {
  menu: {
    services: 'Dịch vụ',
    fees: 'Biểu phí',
    contactUs: 'Liên Hệ',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Quản lý Tài khoản',
    bankTransfers: 'Chuyển Tiền',
    personalIBAN: 'Personal IBAN',
    personalUSAccount: 'Personal US Account',
    debitCards: 'Thẻ ghi nợ',
    affiliatePayouts: 'Thanh toán Đại lý',
    payrollSolutions: 'Giải pháp Thanh toán lương',
    virtualCards: 'Thẻ ảo',
    localPayments: 'Chuyển khoản ngân hàng địa phương',
    sendMoneyToCard: 'Chuyển khoản vào thẻ',
    cashRemittance: 'Thanh toán tiền mặt'
  },

  footer: {
    information: 'Thông tin',
    contactUs: 'Liên hệ',
    signIn: 'Đăng nhập',
    affiliateProgram: 'Chương trình Liên kết',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Tin tức',
    terms: 'Điều khoản',
    userAgreement: 'Thỏa thuận Người dùng',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Theo dõi Chúng tôi',
    twitter: 'Twitter',
    copyRight: '© Bản quyền MTACC Inc. DBA ePayService 2007–<span></span>, <br>Bảo lưu mọi quyền.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Phương hướng',
      fee: 'Phí',
      minFee: 'Lệ phí tối thiểu',
      deposit: 'Nạp tiền',
      withdraw: 'Rút tiền',
      toWallet: 'vào ví với ePayService',
      toBankAccount: 'vào tài khoản ngân hàng của bạn',
      toCompanyBankAccount: 'vào tài khoản ngân hàng của công ty',
      toIndividualBankAccount: 'vào tài khoản ngân hàng của một cá nhân'
    },

    moneyTransfersUS: {
      navText: 'ACH & Chuyển tiền Trực tiếp, Chuyển khoản nội địa',
      title: 'Chuyển tiền mỹ (ACH & Chuyển tiền Trực tiếp, Chuyển khoản nội địa)',
      linkText: 'Xem thêm về ach & chuyển tiền trực tiếp',
      direction: 'Phương hướng',
      fee: 'Phí',
      item1title: 'Nạp tiền ACH/Gửi tiền trực tiếp',
      item2title: 'Nạp tiền trong nước',
      item3title: 'Rút tiền ACH/ Chuyển khoản trực tiếp',
      item4title: 'Rút tiền trong nước',
      toWallet: 'vào ví với ePayService',
      toAccount: 'vào tài khoản cá nhân hay công ty với một ngân hàng Mỹ'
    },

    sepa: {
      title: 'Chuyển tiền trong Euro',
      linkText: 'Thông tin thêm về SEPA',
    },

    localPayments: {
      forAllCurrencies: 'cho mọi loại tiền tệ bên dưới',
      max: 'lên đến {{value}}'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Không thu phí',
    betweenEpayCustomers: 'Hoa hồng khi chuyển tiền giữa các khách hàng cùng sử dụng ePayService',
    posFree: 'MIỄN PHÍ',
    pos: 'Giao dịch POS',
    bankTransfersFee: 'Phí {{value}}, tối thiểu {{min}}',
    bankTransfersDescr: 'Chuyển khoản ngân hàng từ người thuê bạn và đối tác kinh doanh của bạn',
    posLimit: 'lên tới {{value}} Giới hạn chi tiêu qua POS',
    atmLimit: 'lên tới {{value}} Giới hạn chi tiêu qua ATM',
    cardLoadingFeesFree: 'Không thu phí!',
    cardLoadingFees: 'nạp tiền thẻ',
    atnWithdrawalFeesValue: 'chỉ {{value}}',
    atnWithdrawalFeesDescr: 'Phí rút tiền qua ATM (trên mỗi giao dịch)'
  },

  payments: 'Chuyển tiền',
  cards: 'Thẻ Trả trước',

  cardsList: {
    standart: {
      title: 'Thẻ ePayService tiêu chuẩn',
      descr: 'Thẻ ghi nợ Mastercard®',
      tabName: 'Thẻ ghi nợ ePayService Mastercard® Chuẩn',
      moreAbout: 'Xem thêm về thẻ ePayService'
    },

    premium: {
      title: 'Thẻ epayservice cao cấp',
      descr: 'Thẻ Trả trước Mastercard®'
    },

    single: {
      title: 'Thẻ ePayService ảo một người dùng',
      descr: 'Thẻ Trả trước Mastercard®'
    },

    multi: {
      title: 'ePayService ảo',
      descr: 'Thẻ ghi nợ Mastercard®',
      tabName: 'Thẻ ghi nợ ePayService Mastercard® ảo',
      moreAbout: 'Xem thêm về thẻ ảo ePayService'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Phát hành & Kích hoạt thẻ ePayService Mastercard® Tiêu chuẩn {{ value }}',
    cardIssuanceAndActivationVirtual: 'Phát hành & Kich hoạt Thẻ ePayService Mastercard® Ảo {{ value }}',
    monthlyMaintenance: 'Phí duy trì hàng tháng',
    minimumLoadLimit: 'Giới hạn Nạp Tối thiểu theo Ngày',
    maximumDailyLoadLimit: 'Giới hạn Nạp Tối đa theo Ngày',
    currencyExchange: 'Chuyển đổi Ngoại tệ (phí FX)',
    ATMWithdrawalFeePerTransaction: 'Phí Rút tiền tại ATM trên một giao dịch',
    maximumNumberOfLoadsPerDay: 'Số lần nạp tối đa một ngày là',
    maximumBalance: 'Số dư tối đa',
    ATMBalanceInquiry: 'Số dư ATM Cần thiết',
    regularMail: 'Chuyển phát Thường',
    expressDelivery: 'Chuyển phát Nhanh',
    maximumCumulativeLoadValuePerYear: 'Giá trị nạp lũy tiến tối đa một năm',
    onlinePurchases: 'POS/Mua hàng Trực tuyến',
    maximumAmountOfActiveCards: 'Số lượng thẻ hoạt động tối đa'
  },

  important: 'Lưu ý quan trọng!',
  cardValidPeriod: 'Thẻ sẽ có giá trị trong 3 năm',

  deliveryMethod: 'Chọn phương thức giao nhận',

  free: 'MIỄN PHÍ',

  virtual: {
    controlPurchases: 'Kiểm soát việc mua sắm của bạn',
    useCard: 'Sử dụng thẻ ảo có thể tải lại',
    dailyPurchaseLimit: 'Giá trị mua sắm hàng ngày tối đa là {{ sum }} USD',
    instantLoad: 'Việc sử dụng tiền thẻ ảo thay thẻ thật được thực hiện ngay và miễn phí',
    freeUnload: 'Miễn phí việc hoàn trả tiền vào tài khoản ePayService',
    noMonthlyFee: 'Không phải trả chi phí hàng tháng'
  },

  appDownload: {
    title: 'Thực sự Linh hoạt',
    text: 'Quản lý Ví ePayService của bạn thông qua thiết bị yêu thích',
    downloadText: 'Vận hành nó cùng hệ thống thanh toán Online.ePayServices',
    openFreeAccount: 'Mở một Tài khoản Miễn phí'
  }
}
