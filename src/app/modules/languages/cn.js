function ChineseProvider($translateProvider) {
    'ngInject'

    $translateProvider.translations('cn', {

        // HEADER COMPONENT
        APP_NAME_SUB: '安全界面正在连接NEM平台',
        HEADER_LOGIN_BUTTON: '登录',
        HEADER_SIGNUP_BUTTON: '注册',
        HEADER_LANG_TITLE: '语言',
        HEADER_LANG_SELECT: '选择语言',
        HEADER_NODE_BLOCK_HEIGHT: '区块高',
        HEADER_NODE_CURRENT_NODE: '当前节点',
        HEARDER_NODE_LIST: '节点清单',
        HEADER_NODE_SELECT: '选择节点',
        HEADER_NODE_CUSTOM: '自定义节点',
        HEADER_NODE_CONNECT: '连接',
        HEADER_NODE_CUSTOM_INFO: '节点IP或域名',
        HEADER_PURGE: '清理',
        HEADER_PURGE_MESSAGE: '请确认清理功能将删除您本地保存的全部信息。如确认，点击OK，本地存储的所有钱包信息将被全部删除，请确认所有钱包均已做好备份，确保资金安全。',
        
        // FOOTER COMPONENT
        FOOTER_POWERED_BY: 'Powered by NEM technology.',
        FOOTER_VERSION: '版本',

        // DASHBOARD MODULE
        DASHBOARD_TITLE: '仪表盘',
        DASHBOARD_UNCONFIRMED: '未确认',
        DASHBOARD_CONFIRMED: '已确认',
        DASHBOARD_HARVEST_INCOME_TITLE: '最近创建的25个块的收获',
        DASHBOARD_HARVEST_INCOME_NOTE: '仅包含费用高于0的块',
        DASHBOARD_HARVEST_INCOME_MESSAGE: '最近25个区块中无费用',
        DASHBOARD_NEWS_TITLE: '最新消息',
        DASHBOARD_HARVESTED_BLOCKS_TITLE: '已收获块',
        DASHBOARD_HARVESTED_BLOCKS_TH: '已获取费用',
        DASHBOARD_MARKET_INFO_TITLE: '市场信息',
        DASHBOARD_MARKET_INFO_CAP: '总市值',
        DASHBOARD_MARKET_INFO_PRICE: '价格',
        DASHBOARD_MARKET_INFO_VOLUME: '24小时交易量',
        DASHBOARD_MARKET_INFO_CHANGES: '换手率',
        DASHBOARD_MARKET_INFO_CHANGES_1H: '1h',
        DASHBOARD_MARKET_INFO_CHANGES_24H: '24h',
        DASHBOARD_MARKET_INFO_CHANGES_7D: '7d',
        DASHBOARD_MARKET_INFO_NOTE: '<a href="http://coinmarketcap.com/" target="_blank">CoinMarketCap</a> 数据每5分钟更新一次',

        // GENERAL
        GENERAL_BLOCK: '块',
        GENERAL_NO_RESULTS: '无结果',
        GENERAL_ACCOUNT: '账户',
        GENERAL_MULTISIG_ACCOUNT: '多重签名账户',
        GENERAL_AMOUNT: '量',
        GENERAL_MESSAGE: '消息',
        GENERAL_DATE: '日期',
        GENERAL_TAB_NORMAL: '普通',
        GENERAL_TAB_MULTISIG: '多重签名',
        GENERAL_TOTAL: '总量',
        GENERAL_REMOVE: '删除',
        GENERAL_MOSAIC: '马赛克',
        GENERAL_FEE: '费用',
        GENERAL_LEVY: '征费',
        GENERAL_LEVY_TYPES: '征费类型',
        GENERAL_LEVY_TYPES_NOTE: 'I - 固定费用; II - 百分比方式',
        GENERAL_SEND: '发送',
        GENERAL_TO: '目标',
        GENERAL_HASH: 'Hash',
        GENERAL_NAME: '名称',
        GENERAL_INFORMATION: '信息',
        GENERAL_ADDRESS: '地址',
        GENERAL_PUBLIC_KEY: '公钥',
        GENERAL_PRIVATE_KEY: '私钥',
        GENERAL_CLEAR_ALL: '全部清除',
        GENERAL_CLOSE: '关闭',
        GENERAL_COMING_SOON: '即将推出',
        GENERAL_NONE: '无',
        GENERAL_DROPBOX: '拖拽文件至此，点击或浏览',
        GENERAL_NETWORK_FEE: '网络费用',
        GENERAL_YES: '是',
        GENERAL_NO: '否',
        GENERAL_TAGS: '标签',
        GENERAL_SINK: '下沉',
        GENERAL_REASON: '原因',
        GENERAL_TRANSACTION_HASH: '交互hash',
        GENERAL_TRANSACTION_ID: '交互ID',
        GENERAL_OWNER: '属主',
        GENERAL_RESULTS: '结果集',
        GENERAL_RESULT: '结果',
        GENERAL_STATUS: '状态',
        GENERAL_LOCATION: '位置',
        GENERAL_ACTION: '行动',
        GENERAL_ADD: '添加',
        GENERAL_ADDED: '已添加',
        GENERAL_REMOVED: '已删除',
        GENERAL_COSIGNATORY: '共签人',
        GENERAL_COSIGNATORIES: '共签人集',
        GENERAL_PROCESSING: '处理中',
        GENERAL_ACCOUNT_LABEL: '账户标签',
        GENERAL_OPTIONAL: '(可选)',
	    GENERAL_ERROR: 'Error',
        GENERAL_EXAMPLE: 'Example',
        GENERAL_PUBLIC: 'Public',

        // TRANSFER TRANSACTION MODULE
        TRANSFER_TRANSACTION_TITLE: '发送和接收',
        TRANSFER_TRANSACTION_NAME: '传输交互',
        TRANSFER_TRANSACTION_MULTISIG_NAME: '多重签名传输交互',
        TRANSFER_TRANSACTION_INVOICE: '创建账单',
        TRANSFER_TRANSACTION_TAB_INVOICE: '账单',
        TRANSFER_TRANSACTION_MOSAIC_TRANSFER: '马赛克传输',
        TRANSFER_TRANSACTION_ATTACH_MOSAIC: '附加马赛克',
        TRANSFER_TRANSACTION_ATTACH: '附加',
        TRANSFER_TRANSACTION_MOSAICS_ATTACHED: '马赛克加入完成',
        TRANSFER_TRANSACTION_ENCRYPT_MESSAGE: '加密消息',

        // TRANSACTION LINES
        LINE_TX_DETAILS_FROM: '来自',
        LINE_TX_DETAILS_FROM_MULTISIG: '来自多重签名',
        LINE_TX_DETAILS_WAITING: '交互正在等待成立',
        LINE_TX_DETAILS_NEED_SIG: '需要共签人签名',
        LINE_TX_DETAILS_NEED_SIG_2: '这个交互需要您的签名',
        LINE_TX_DETAILS_MESS_ENC: '加密',
        LINE_TX_DETAILS_MESS_DEC: '揭秘',
        LINE_TX_DETAILS_HASH: 'Hash',
        LINE_TX_DETAILS_DEC_MESS: '解密消息',
        LINE_TX_DETAILS_MOS_ATTACHED: '已附加马赛克',
        LINE_TX_DETAILS_LEVY_TYPE_1: '常量',
        LINE_TX_DETAILS_LEVY_TYPE_2: '百分比方式',
        LINE_TX_DETAILS_ISSUER: '创建者',
        LINE_TX_DETAILS_MULTISIG_FEE: '多重签名费用',
        LINE_TX_DETAILS_MULTISIG_HASH: '多重签名hash',
        LINE_TX_DETAILS_COSIGN: '签名交互',
        LINE_TX_DETAILS_SIGNATURES: '签名',
        LINE_TX_DETAILS_COSIGNATORY: '共签人',
        LINE_TX_DETAILS_TIMESTAMP: '时间戳',
        LINE_TX_DETAILS_MOS_CREATE: '创建马赛克',
        LINE_TX_DETAILS_MOS_EDIT: '编辑马赛克',
        LINE_TX_DETAILS_NS_CREATE: '创建命名空间',
        LINE_TX_DETAILS_NS_NEW_SUB: '新建下属命名空间',
        LINE_TX_DETAILS_NS_ROOT: '根命名空间',
        LINE_TX_DETAILS_RECIPIENT: '接受者',
        LINE_TX_DETAILS_MULTISIG_CREATE: '创建多重签名账户',
        LINE_TX_DETAILS_MULTISIG_EDIT: '编辑多重签名账户',
        LINE_TX_DETAILS_MULTISIG_MOD: '修改',
        LINE_TX_DETAILS_MULTISIG_MIN_COSIG: '最小签署人数',
        LINE_TX_DETAILS_MULTISIG_AFFECTED: '相关账号',

        // IMPORTANCE MODULE
        IMPORTANCE_TRANSFER_NAME: '重要性传输交互',
        IMPORTANCE_TRANSFER_MULTISIG_NAME: '多重签名重要性传输交互',
        IMPORTANCE_TRANSFER_MODE: '模式',
        IMPORTANCE_TRANSFER_MODE_1: '激活',
        IMPORTANCE_TRANSFER_MODE_2: '取消激活',
        IMPORTANCE_TRANSFER_TITLE: '管理远程账户',
	    IMPORTANCE_TRANSFER_MULTISIGNATURE_TITLE: 'Manage delegated account of multisignature accounts',
        IMPORTANCE_TRANSFER_CUSTOM_KEY: '使用远程公钥',
        IMPORTANCE_TRANSFER_MODE_SELECT: '选择模式',
        IMPORTANCE_TRANSFER_REMOTE_ACCOUNT: '远程账户',
        IMPORTANCE_TRANSFER_REMOTE_PUBLIC: '远程公钥',
        IMPORTANCE_TRANSFER_INFO_PART_1: '重要性传输交互产生后，需要等待6小时以完成激活。激活完成后，您将可以选择一个节点用于委托收获，点击账户页的Harvesting按钮开始收获。',
        IMPORTANCE_TRANSFER_INFO_PART_2: '如果您的账户属备份导入，请确认这个账户并未激活委托收获。如果已激活，您需要先使用旧公钥执行解除激活。',
        IMPORTANCE_TRANSFER_INFO_PART_MULTISIG: 'For multisignature accounts only the cosignatory that initiated the importance transfer transaction can start and stop harvesting. If any other cosignatory want to take back power on harvesting, he just need to deactivate and reactivate the remote status.',
        IMPORTANCE_TRANSFER_NO_BLOCKS_HARVESTED: 'No blocks harvested',
        IMPORTANCE_TRANSFER_HARVESTING_PANEL: 'Harvesting panel',
        IMPORTANCE_TRANSFER_REMOTE_ACTIVATING: 'You must wait until your remote status is active to start delegated harvesting',
        IMPORTANCE_TRANSFER_REMOTE_INACTIVE: 'You must send an importance transfer from the right panel to activate your remote account',
        IMPORTANCE_TRANSFER_MULTISIG_NOT_INITIATOR: 'You are not the cosignatory that initiated the importance transfer, therefore it is not possible for you to start or stop delegated harvesting. Please, consult above information tab to know how to take back control on harvesting.',
        IMPORTANCE_TRANSFER_MULTISIG_SELECT: 'Select a multisignature account',
        IMPORTANCE_TRANSFER_MULTISIG_SELECT_MESSAGE: 'Please select a multisig account to show status',

        // CREATE MOSAIC MODULE
        MOSAIC_DEFINITION_TITLE: '创建马赛克',
        MOSAIC_DEFINITION_NAME: '马赛克定义交互',
        MOSAIC_DEFINITION_MULTISIG_NAME: '多重签名马赛克定义交互',
        MOSAIC_DEFINITION_QUANTITY: '量',
        MOSAIC_DEFINITION_DIV: '可分割性',
        MOSAIC_DEFINITION_DESCRPITION: '描述',
        MOSAIC_DEFINITION_INITIAL_SUPPLY: '初始供应',
        MOSAIC_DEFINITION_MUTABLE_SUPPLY: '可变供应量',
        MOSAIC_DEFINITION_TRANSFERABLE: '可传输',
        MOSAIC_DEFINITION_PROPERTIES: '属性',
        MOSAIC_DEFINITION_MOSAIC_PROPERTIES: '马赛克属性',
        MOSAIC_DEFINITION_REQUIRES_LEVY: '需要征费',
        MOSAIC_DEFINITION_LEVY_LIMITATION: 'UI限制： 当前仅允许已拥有的马赛克作为税金。',
        MOSAIC_DEFINITION_LEVY_SELECT_MOSAIC: '选择税金马赛克',
        MOSAIC_DEFINITION_LEVY_ADDRESS: '税费地址',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE: '费用类型',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_1: '绝对值',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2: '百分比值',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_1_NOTE: '选择绝对值，将会产生的常量税金',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE: '选择百分比，将会产生现行的税金为：',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE_2: '发送中',
        MOSAIC_DEFINITION_LEVY_FEE_TYPE_2_NOTE_3: '将包含税金',
        MOSAIC_DEFINITION_PARENT: '父命名空间',
        MOSAIC_DEFINITION_INFORMATION_1: '马赛克允许最长32个字符允许使用的字符集：',
        MOSAIC_DEFINITION_INFORMATION_2: '第一个字符必须是英文字母。',
        MOSAIC_DEFINITION_INFORMATION_3: '描述必须在512个字符以内。描述文字中所使用的字符无限制。',
        MOSAIC_DEFINITION_INFORMATION_4: '马赛克的行为可由属性方式定制:',
        MOSAIC_DEFINITION_INFORMATION_5: '供给量需要以整数个单元马赛克描述，不可使用小数或最小分割单元。 供应量必须在限制区间0到90亿内。',
        MOSAIC_DEFINITION_INFORMATION_6: '分割性将决定马赛克的最小单位可以精确到几位小数。当分割性为3时，这个马赛克可以被定义为最小0.001。分割性需要在0~6区间取值.',
        MOSAIC_DEFINITION_INFORMATION_7: '如果勾选，将允许以后变更马赛克的供应量，否则，将不能变更。',
        MOSAIC_DEFINITION_INFORMATION_8: '允许传输马赛克至创建者以外的账户。如果可传输性未勾选，则只有马赛克的属主作为发送者或者接收者的情形才能生成交互。如果勾选，马赛克将可以被传输至任何账户。',
        MOSAIC_DEFINITION_INFORMATION_9: '如果勾选，创建者可以向交互的发送者征收费用。(创建者可以指定任何有效账户作为费用接收账户)。征费的状态如下:',
        MOSAIC_DEFINITION_INFORMATION_10: '征费所用的马赛克类型，任何现有的马赛克都可以指定。',
        MOSAIC_DEFINITION_INFORMATION_11: '征费的接收者，可以使用任何有效账户。',
        MOSAIC_DEFINITION_INFORMATION_12: '征费量。根据以上类型的选择，指定百分比或绝对值。',
        MOSAIC_DEFINITION_INFORMATION_13: '支持百分比和绝对值两种征费类型。',
        MOSAIC_DEFINITION_INFORMATION_14: '征费已选择使用绝对值，它将不取决于传输的量。',
        MOSAIC_DEFINITION_INFORMATION_15: '征费已选择为百分比。费用将随传输的量线性增加。',
        MOSAIC_DEFINITION_INFORMATION_16: 'Sending mosaics on the NEM blockchain requires a fee. The exact fee is calculated depending on their total number and how many are being sent during a transaction. <b>Small business mosaics</b> are given a discounted flat rate of 1 XEM per mosaic per transfer.  These are mosaics with a quantity of less than 10,000 and a divisibility of 0.',

        // EDIT MOSAIC MODULE
        MOSAIC_SUPPLY_CHANGE_TITLE: '变更马赛克供应量',
        MOSAIC_SUPPLY_CHANGE_NAME: '马赛克供应量变更交互',
        MOSAIC_SUPPLY_CHANGE_MULTISIG_NAME: '多重签名马赛克供应量变更交互',
        MOSAIC_SUPPLY_CHANGE_SELECT: '选择马赛克',
        MOSAIC_SUPPLY_CHANGE_TYPE: '变更类型',
        MOSAIC_SUPPLY_CHANGE_TYPE_1: '创建',
        MOSAIC_SUPPLY_CHANGE_TYPE_2: '删除',
        MOSAIC_SUPPLY_CHANGE_SUPPLY: '供应量',
        MOSAIC_SUPPLY_CHANGE_CURRENT_SUPPLY: '现有供应量',
        MOSAIC_SUPPLY_CHANGE_AMOUNT: '变更量',
        MOSAIC_SUPPLY_CHANGE_RES_SUPPLY: '变更后供应量',

        // NAMESPACE MODULE
        NAMESPACE_PROVISION_TITLE: '创建命名空间和子命名空间',
        NAMESPACE_PROVISION_NAME: '命名空间部署交互',
        NAMESPACE_PROVISION_MULTISIG_NAME: '多重签名命名空间部署交互',
        NAMESPACE_PROVISION_PARENT: '父命名空间 (不包括3层)',
        NAMESPACE_PROVISION_NEW_ROOT: '创建新的根命名空间',
        NAMESPACE_PROVISION_NS_NAME: '命名空间名',
        NAMESPACE_PROVISION_INFORMATION_1: '命名空间所使用的长度和字符均存在限制。根命名空间长度限制为16个字符以内，二级命名空间长度限制为64个字符以内。有效的字符有：',
        NAMESPACE_PROVISION_INFORMATION_2: '命名空间的首个字符必须使用英文字母。 \'alice\'是有效命名空间，而 \'1alice\'不是。部分字符串被保留，不可用于命名空间的申请。不被允许的命名空间包含字符串如下：',
        NAMESPACE_PROVISION_INFORMATION_3: '这个清单将可能会增加内容，请注意查看。 \'user.alice\' 和 \'alice.user\' 都不被NEM命名空间系统允许申请。命名空间最多可以被定义为三层，如\'gimre.metals.silver\' 有效，而 \'gimre.metals.silver.coin\' 无效。', 

        // ACCOUNT MODULE
        ACCOUNT_TITLE: '账户',
        ACCOUNT_ACCOUNT_INFORMATION: '账户信息',
        ACCOUNT_IMPORTANCE_SCORE: '重要性得分',
        ACCOUNT_VESTED_BALANCE: '归属余额',
        ACCOUNT_HARVESTING: '收获',
        ACCOUNT_REMOTE_STATUS: '远程状态',
        ACCOUNT_DELEGATED_PUBLIC: '委托公钥',
        ACCOUNT_HARVESTED_BLOCKS: '已收获块',
        ACCOUNT_START_STOP_HARVESTING: '开始/停止委托收获',
        ACCOUNT_HARVESTING_NOTE: '如果您已经<b>使用纳米钱包</b>开始了收获，且您的本地数据执行过清理，请使用原电脑关闭委托以还原收获状态。 (您未停止收获).',
        ACCOUNT_HARVESTING_NODE_SELECT: '挑选一个用于收获的节点',
        ACCOUNT_HARVESTING_START: '开启委托收获',
        ACCOUNT_HARVESTING_STOP: '停止委托收获',
        ACCOUNT_HARVESTING_NO_SLOTS: '您选取的节点没有空闲收获席位，请选择其他',
        ACCOUNT_HARVESTING_BELOW_THRESHOLD: '您需要10000XEM归属余额以开始委托收获',
        ACCOUNT_ACCOUNT_SELECT: '选择其他账户',
        ACCOUNT_ACCOUNT_SELECT_LABEL: '使用其他账户',
        ACCOUNT_ACCOUNT_SELECT_BTN_NOTE: '变更账户',
        ACCOUNT_WALLET_KEYS: '钱包和密钥',
        ACCOUNT_ADD_NEW_ACCOUNT: '添加新账号',
        ACCOUNT_ADD_NEW_ACCOUNT_BTN: '向钱包中添加新账号',
        ACCOUNT_PRIVATE_KEY_NOTE: '您的私钥掌管着您账号的最高权限。请确保它被<b><u>离线</u></b>安全存储：存储加密的.wlt文件，写在纸张上缩入保险柜，以图片代替文档，或下载<b><u>导出的二维码</u></b>妥善保管。',
        ACCOUNT_PRIVATE_KEY_SHOW: '显示私钥',
        ACCOUNT_EXPORT_MOBILE: '导出至移动钱包',
        ACCOUNT_INFO_QR_BTN: '账户二维码',
        ACCOUNT_WALLET_QR_BTN: 'NEMpay二维码',
        ACCOUNT_WALLET_QR_BTN_2: '移动钱包二维码',
        ACCOUNT_BACKUP_WALLET: '备份钱包',
        ACCOUNT_BACKUP_WALLET_NOTE: '备份您的钱包<b><u>非常重要</u></b>否则您将可能丢失账户',
        ACCOUNT_BACKUP_WALLET_DOWNLOAD: '下载钱包',
        ACCOUNT_INFO_QR_TITLE: '账户信息二维码',
        ACCOUNT_WALLET_QR_NOTE: '这个二维码将被用于未推出的NEMpay移动应用',
        ACCOUNT_WALLET_QR_ANDROID_IOS_TITLE: '移动端钱包二维码',
        ACCOUNT_ADD_NEW_ACCOUNT_WARNING: '所有的账户均使用BIP32由主私钥获取，使用您的主私钥和密码您可以列出所有已导入其他账户信息。 <br><b><u>强烈建议</u></b>添加新账户后再次备份您的新账户私钥',
        ACCOUNT_CUSTOM_NODE: '使用自定义节点',
        ACCOUNT_NODE_FROM_LIST: '使用列表中的节点',
        ACCOUNT_DELEGATED_PRIVATE_KEY: '委托私钥',

        // PORTAL MODULE
        PORTAL_TITLE: '服务',
        PORTAL_MULTISIG_TITLE: '多重签名或多用户账户',
        PORTAL_MULTISIG_TEXT: '多重签名账户中提供可编辑的链上协议，是存储资金，实现共有账户的最佳实现方式',
        PORTAL_MULTISIG_BTN_1: '转换账户为多重签名',
        PORTAL_MULTISIG_BTN_2: '编辑已有协议',
        PORTAL_HARVESTING_TITLE: '委托收获',
        PORTAL_HARVESTING_TEXT: '委托收获是可以实现远程在线“挖矿”而不必保持原账号开启的途径',
        PORTAL_HARVESTING_BTN_1: '管理远程账户',
        PORTAL_HARVESTING_BTN_2: '管理多重签名远程账户',
        PORTAL_CHANGELLY_TITLE: 'Changelly实时交易',
        PORTAL_CHANGELLY_TEXT: '使用Changelly服务，以当前最优定价实时交易XEM!',
        PORTAL_CHANGELLY_BTN: '购买XEM',
        PORTAL_NS_TITLE: '命名空间和子空间',
        PORTAL_NS_TEXT: '命名空间是存储马赛克的域名，每个命名空间在区块链中唯一，可在多层子命名空间上定义和认证马赛克。',
        PORTAL_NS_BTN: '创建命名空间',
        PORTAL_MOSAIC_TITLE: '马赛克',
        PORTAL_MOSAIC_TEXT: 'NEM马赛克是具备丰富属性和功能的智能资产。如需创建马赛克，必须为账户置备根命名空间。',
        PORTAL_MOSAIC_BTN_1: '创建马赛克',
        PORTAL_MOSAIC_BTN_2: '编辑马赛克',
        PORTAL_APOSTILLE_TITLE: 'Apostille',
        PORTAL_APOSTILLE_TEXT: '使用NEM Apostille服务创建区块链公证时间戳,跟踪和审计文件认证状态。',
        PORTAL_APOSTILLE_BTN_1: '创建',
        PORTAL_APOSTILLE_BTN_2: '审计',

        // EXPLORER MODULE NAV
        EXPLORER_NAV_HOME: '主页',
        EXPLORER_NAV_NSM: '命名空间和马赛克', 
        EXPLORER_NAV_APOSTILLES: 'Apostilles',

        // EXPLORER HOME MODULE
        EXPLORER_HOME_TITLE: '浏览 - 主页', 
        EXPLORER_HOME_NS: '您的命名空间',
        EXPLORER_HOME_MOSAICS: '您的马赛克',
        EXPLORER_HOME_NS_MULTISIG: '多重签名账户所属命名空间',
        EXPLORER_HOME_MOSAICS_LEVY: '征费马赛克',

        // EXPLORER APOSTILLES MODULE
        EXPLORER_APOSTILLES_TITLE: '浏览 - 公证',
        EXPLORER_APOSTILLES_YOURS: '您的公证',
        EXPLORER_APOSTILLES_PUBLIC: '公有池',
        EXPLORER_APOSTILLES_NO_NTY: '未加载nty文件，请点击这里检查并导入。',

        // CREATE APOSTILLE MODULE
        APOSTILLE_CREATE_TITLE: '创建Apostille',
        APOSTILLE_TRANSACTION_NAME: '公证交互',
        APOSTILLE_TRANSACTION_MULTISIG_NAME: '多重签名公证交互',
        APOSTILLE_KEEP_PRIVATE: '需保密',
        APOSTILLE_USE_DEDICATED: '使用专一账户',
        APOSTILLE_FILES_TO_NOTARIZE: '需要公证的文件',
        APOSTILLE_REJECTED: '拒绝',
        APOSTILLE_FILE_HASH: '文件hash',
        APOSTILLE_PRIVATE: '私有',
        APOSTILLE_FILENAME: '文件名',
        APOSTILLE_NAME_TOO_LONG: '文件名过长，最多允许40个字符。',
        APOSTILLE_MAX_NUMBER: '最大的一批公证文件数为25',
        APOSTILLE_INFORMATION_1: '每个文件的上传均以在左栏的选项为准自动处理。您可以添加文件，变更类型或添加其他属性。您也可以切换至多重签名标签页添加更多文件',
        APOSTILLE_INFORMATION_2: '"<b>需保密</b>" 在于您文件的hash都会被您的私钥加密，并发送至一个HD账户。以这种方式，除了你以外的任何人都无法获取接受认证的信息或认证本身。', 
        APOSTILLE_INFORMATION_3: 'The dedicated HD account can be put under a multisig contract so that it may be transferred to others via 1-of-1 or any m-of-n multisig contract combination. It can also have additional information sent to it via messages with updates and augments to the original document or the product it represents.',
        APOSTILLE_INFORMATION_4: 'When two or more parties want to both approve of a blockchain timestamp, e.g. binding contracts, the account making the blockchain notarization can be put in an n-of-n multisig contract.',
        APOSTILLE_INFORMATION_5: 'For accounts in a multisignature contract that have checked "<b>Keep private</b>", the initiating cosigner\'s private key is used to sign the hash and create a dedicated HD account, not the account that was multisigged.',
        APOSTILLE_INFORMATION_6: 'The HD account is a dedicated account generated from a hash of the filename that is then signed by your private key. This resulting hash of this process is then used to form a second private key.  This is the time-stamped file\'s private key; a first in blockchain technology only found in Apostille.',
        APOSTILLE_INFORMATION_7: 'The dedicated HD account allows you to store the original file\'s signed hash and its updates on a dedicated account. If "keep private" is not checked, the transaction goes to the public sink address (default).',
        APOSTILLE_INFORMATION_8: 'After the transactions are sent the download of an archive is triggered. It contains your signed files, your Apostille certificate for that file, and the new or updated .nty file to keep track of every file you time stamped on the NEM chain.',
        APOSTILLE_NO_NTY: '没有加载nty文件，请点击这里导入或自动生成。',
        APOSTILLE_IMPORT_FILES: '导入文件',
        APOSTILLE_CREATE_TEXT: '创建字符文档',
        APOSTILLE_ENTER_TEXT: '输入需要公证的信息',
        APOSTILLE_DOCUMENT_TITLE: 'Document title',

        // AUDIT APOSTILLE MODULE
        APOSTILLE_AUDIT_TITLE: '审计公证',
        APOSTILLE_AUDIT_CHOOSE_NODE: '选择节点',
        APOSTILLE_AUDIT_CHOOSE_NODE_NOTE: '只有部分节点可以查阅所有的交互历史(NIS中默认关闭这一选项)。', //
        APOSTILLE_AUDIT_WRONG_FORMAT: '这个文件不符Apostille认证格式!',
        APOSTILLE_AUDIT_FAIL_NO_PUBLIC_KEY: '认证失败，所有者没有公钥。',
        APOSTILLE_AUDIT_SUCCESS: '文件认证成功！',
        APOSTILLE_AUDIT_FAIL: '认证失败！',
        APOSTILLE_AUDIT_WAITING: '公证交互正等待确认！',
        APOSTILLE_AUDIT_NOT_FOUND: '未发现交互，请查验它是否正在等待确认，否则这项公证不存在。',
        APOSTILLE_AUDIT_ERROR_UNCONFIRMED: '获取未确认数据时错误发生，交互不存在。',
        APOSTILLE_AUDIT_ERROR_SIGNER: '获取签署者信息发生错误',
        APOSTILLE_AUDIT_ERROR_SIGNATURE: '确认错误，签名确认中发生故障！',
        APOSTILLE_AUDIT_INFORMATION_1: '待审计文件必须以<b>Apostille格式</b>存在',
        APOSTILLE_AUDIT_INFORMATION_2: '您可通过文件名确认文件：',
        //APOSTILLE_AUDIT_NON_SIGNED: '未签名范例:',
        //APOSTILLE_AUDIT_SIGNED: '已签名范例:',
        APOSTILLE_AUDIT_FILES: '审核文件',

        // ERROR ALERTS
        ALERT_MISSING_FORM_DATA: '请完整填写表格！',
        ALERT_ERROR_WALLET_DOWNLOAD: '无法下载钱包，钱包不存在！',
        ALERT_PASSWORDS_NOT_MATCHING: '您提供的密码和密钥串不匹配！',
        ALERT_INVALID_KEY_FOR_ADDR: '您提供的私钥与地址不匹配！',
        ALERT_NO_WALLET_LOADED: '您无法未不登录钱包状态下访问仪表盘',
        ALERT_WALLET_NAME_EXISTS: '同名钱包已存在！',
        ALERT_INVALID_WALLET_FILE: '您导入的文件并非钱包文件！',
        ALERT_NO_NODE_SET: '请确认并输入合规节点名！',
        ALERT_INVALID_CUSTOM_NODE: '您的自定义节点名不合规！',
        ALERT_INVALID_WEBSOCKET_PORT: '自定义节点名的端口不合规！',
        ALERT_MIJIN_DISABLED: '猕迅网络当前未开放服务，请选择其他网络！',
        ALERT_GET_NS_BY_ID_ERROR: '获取命名空间信息错误，原因： ',
        ALERT_GET_ACCOUNT_DATA_ERROR: '获取账户信息错误，原因：',
        ALERT_ERROR_OCCURRED: '错误发生！ ',
        ALERT_INVALID_ADDR_FOR_NETWORK: '地址与本网规范不符',
        ALERT_INVALID_PASSWORD: '您输入的密码不正确！',
        ALERT_COSIG_ALREADY_IN_LIST: '共签人在列表中已存在！',
        ALERT_COSIGNATORY_HAS_NO_PUBLIC: '共签人账户需要在加入前已发送至少1个交互以获取私钥！',
        ALERT_MULTISIG_HAS_NO_PUBLIC: '多重签名账户需要在加入前已发送至少1个交互以获取私钥！',
        ALERT_COSIG_CANNOT_BE_MULTISIG: '您所选择的带转换账户是其他多重签名账户的共签人，这样的转换无法进行。',
        ALERT_NO_NS_OWNED: '账户不拥有这个命名空间，请重新创建或使用别的账户执行。Account does not own any namespace, please create one or change account',
        ALERT_UNLOCKED_INFO_ERROR: '获取解锁信息错误',
        ALERT_LOCK_ERROR: '锁定账户错误，原因: ',
        ALERT_UNLOCK_ERROR: '解锁账户错误，原因: ',
        ALERT_SUPERNODES_ERROR: '获取超级节点数据错误！',
        ALERT_INVALID_NTY_FILE: '您所提供的文件不是合规的nty文件！',
        ALERT_CREATE_WALLET_FAILED: '创建钱包失败，原因: ',
        ALERT_DERIVATION_FROM_SEED_FAILED: '从种子获取账户失败，原因: ',
        ALERT_BIP32_GENERATION_FAILED: '生成bip32数据失败，原因：',
        ALERT_NO_WALLET_DATA: '错误，空白的钱包数据！',
        ALERT_CANNOT_LOGIN_WITHOU_WALLET: '错误，无法在无钱包状态下登录！',
        ALERT_NO_WALLET_TO_SET: '错误，无法设置当前钱包为空白！',
        ALERT_INVALID_WALLET_INDEX: '错误，所选账户索引不正确！',
        ALERT_NO_CURRENT_WALLET: '错误，当前钱包不存在时无法设置钱包账户！',
        ALERT_ALREADY_MULTISIG: '所选账户已经是多重签名账户！',
        ALERT_INVALID_MODIFICATION_ARRAY: '一个多重签名账户不能作为自身的共签人，请检查并更换！',
        ALERT_GET_MARKET_INFO_ERROR: '获取市场信息失败！',
        ALERT_MULTISIG_CANNOT_BE_COSIG: '多重签名账户无法设为共同签署人！',
        ALERT_PURGE_CANCELLED: '清理已取消！',
        ALERT_MAINNET_DISABLED: '当前版本禁止主网络使用',
        ALERT_EMPTY_DECODED_MSG: '错误，无解密信息！',
        ALERT_INVALID_NS_NAME: '命名空间名不合规！',
        ALERT_INVALID_MOSAIC_NAME: '马赛克名不合规！',
        ALERT_MOSAIC_DESCRIPTION: '马赛克描述不合规！',
        ALERT_GET_INCOMING_TXES_ERROR: '接收交互错误，请检查网络或更换节点后再次尝试',

        // SUCCESS ALERTS
        ALERT_CREATE_WALLET_SUCCESS: '钱包成功创建和加载！',
        ALERT_SUCCESS_PURGE: '本地存储成功清理!',
        ALERT_SUCCESS_LOGOUT: '退出登录成功！',
        ALERT_LOAD_WALLET_SUCCESS: '钱包加载成功！',
        ALERT_TRANSACTION_SUCCESS: '交互发送成功！',
        ALERT_GENERATE_ACCOUNT_SUCCESS: '账户创建成功，请勿遗忘下载您创建的钱包文件 ！',
        ALERT_UPGRADE_SUCCESS: '钱包升级成功！',
        ALERT_SIGNATURE_SUCCESS: '交互已成功签署！',
        ALERT_NTY_FILE_SUCCESS: '成功加载nty文件！',
        ALERT_INCOMING_TX_FROM: '接收交互，来源',

        AGGREGATE_MODIFICATION_TITLE: '变更账户至多重签名',
        AGGREGATE_MODIFICATION_NAME: '共有账户变更',
        AGGREGATE_MODIFICATION_MULTISIG_NAME: '多重签名账户变更交互',
        AGGREGATE_ACCOUNT_SELECT: '选择一个待转换账户',
        AGGREGATE_CUSTOM_ACCOUNT: '使用自定义账户',
        AGGREGATE_ACCOUNT_TO_CONVERT: '待转换账户的地址',
        AGGREGATE_ACCOUNT_TO_CONVERT_PRIVATE: '待转换账户的私钥',
        AGGREGATE_ADD_PLACEHOLDER: '待添加的共签人账户或别名',
        AGGREGATE_ADD_BTN_TITLE: '添加共签人',
        AGGREGATE_MIN_SIGNATURES: '所需最小签名数量',
        AGGREGATE_MIN_SIGNATURES_PLACEHOLDER: '通过交互必须的最小签名数量',
        AGGREGATE_MODIFICATION_LIST: '变更清单',
        AGGREGATE_MODIFICATION_EDIT_TITLE: '编辑多重签名协议',
        AGGREGATE_MODIFICATION_EDIT_SELECT: '选择待编辑的账户',
        AGGREGATE_ADD_REMOVE_PLACEHOLDER: '带变更的共签人账户地址，或别名',
        AGGREGATE_MODIFICATION_RELATIVE_CHANGE: '最小签名数量变更',
        AGGREGATE_MODIFICATION_RELATIVE_CHANGE_PLACEHOLDER: '最小签名数量变更(自动计算）',
        AGGREGATE_SELECTED_ACCOUNT_INFO: '已选账户信息',
        AGGREGATE_MIN_SIGNATURES: '最少签名数',
        AGGREGATE_SELECT_WALLET_ACCOUNT: 'Use wallet account',

        // LOGIN MODULE
        LOGIN_MEMBER_TITLE: '已经是NEMber ？',
        LOGIN_UPGRADE_TITLE: '钱包需要升级',
        LOGIN_UPGRADE_MESSAGE: '您选择的钱包需要升级。这将创建一个子公钥添加至您的主账户。升级成功后将自动下载升级后的钱包，请<b><u>务必</u></b>下载和妥善保存！',
        LOGIN_UPGRADE_BUTTON: '升级钱包',
        LOGIN_IMPORT_BUTTON: '导入钱包',
        LOGIN_SELECT_WALLET: '从本地存储选择钱包',
        LOGIN_LOGIN_BUTTON: '登录',

        // SIGNUP MODULE
        SIGNUP_TITLE: 'NEM新手？',
        SIGNUP_CREATE_WALLET_TITLE: '简单钱包',
        SIGNUP_PRIVATE_KEY_WALLET_TITLE: '私钥钱包',
        SIGNUP_BRAIN_WALLET_TITLE: '脑钱包',
        SIGNUP_CREATE_WALLET_BUTTON: '创建简单钱包',
        SIGNUP_PRIVATE_KEY_WALLET_BUTTON: '创建私钥钱包',
        SIGNUP_BRAIN_WALLET_BUTTON: '创建脑钱包',
        SIGNUP_CREATE_WALLET_WARNING: '请参阅获知客户端生成密钥的<a href="https://www.w3.org/TR/2014/WD-WebCryptoAPI-20140325/#RandomSource-interface" rel="nofollow" target="_blank">风险</a>，推荐从NCC生成或获取私钥。',
        SIGNUP_NETWORK_SELECT: 'Select a network', //
        SIGNUP_BRAIN_WALLET_WARNING: '请阅读脑钱包的<a href="https://en.bitcoin.it/wiki/Brainwallet" rel="nofollow" target="_blank">风险</a>。脑钱包只使用hash处理的单一密码作为私钥，长期或不当使用会导致失窃。使用中选择一个安全的密码至关重要。 请遵从<a href="https://xkcd.com/936/" rel="nofollow" target="_blank">XKCD #936</a>国际密码安全标准。',
        SIGNUP_PRIVATE_KEY_WALLET_WARNING: '脑钱包只使用hash处理的单一密码作为私钥，长期或不当使用会导致失窃。使用中选择一个安全的密码至关重要。',

        // FAQ MODULE
        FAQ_TITLE: '疑难解答',
        FAQ_QUESTION_1: '纳米钱包如何工作？',
        FAQ_ANSWER_1: '纳米钱包使用最新的加密库及ES6和AngularJS开发而成。它是个完全的客户端程序，不会向网络发送任何敏感信息。包括创建私钥，签署交互等行为均发生在您的浏览器内。',
        FAQ_QUESTION_2: '它是免费提供的吗？',
        FAQ_ANSWER_2: '所有的操作都在客户端完成，只有您有权掌控您的账号，纳米钱包不会以任何形式收取费用。',
        FAQ_QUESTION_3: '我为何已经拥有了马赛克？',
        FAQ_ANSWER_3: '每个用户都拥有nem作为命名空间，以及xem作为马赛克。数字货币XEM也是马赛克的一种，即使您的余额为0，您仍拥有"nem:xem"命名空间。',
        FAQ_QUESTION_4: '未来计划?',
        FAQ_ANSWER_4: '当前的计划是集成所有的NEM客户端的功能，并将提供接口使得将来的社区开发项目能够在该钱包中使用。',
        FAQ_QUESTION_5: '我可以免费获得XEM吗？',
        FAQ_ANSWER_5: 'NEM水龙站目前关闭，但您可以在论坛中接受赏金项目以获取大量XEM',
        FAQ_QUESTION_6: '如何获取关于NEM的更多信息？',
        FAQ_ANSWER_6_FORUM: '官方论坛',
        FAQ_ANSWER_6_WEBSITE: '官方网站',
        FAQ_ANSWER_6_BTT: '官方BTT帖子',
        FAQ_QUESTION_7: '如何支持这个项目？',
        FAQ_ANSWER_7: '纳米钱包（Nano Wallet)是Quantum_Mechanics基于Gimre开发的轻钱包（lightwallet）定制而成',
        FAQ_ANSWER_7_2: 'Apostille是一项在<a href="http://apostille.io">apostille.io</a> 网站提供的服务，由Jabo38主持，项目提案：<a href="https://forum.nem.io/t/nem-apostille-a-nem-notary-system-community-fund-proposal/2001" target="_blank">Apostille project</a>.',
        FAQ_ANSWER_7_3: '如果您想要赞助或打赏，请选择以下地址 :)',
        FAQ_ANSWER_7_4: 'NanoWallet项目基金:',
        FAQ_ANSWER_7_5: 'Apostille服务基金:',

        // FORM RELATED
        FORM_PASSWORD_FIELD_PLACEHOLDER: '输入您的钱包密码',
        FORM_WALLET_NAME_FIELD_PLACEHOLDER: '钱包名',
        FORM_SIGNUP_PASSWORD_FIELD_PLACEHOLDER: '密码',
        FORM_CONFIRM_PASSWORD_FIELD_PLACEHOLDER: '确认您的密码',
        FORM_PASSPHRASE_FIELD_PLACEHOLDER: '密钥串',
        FORM_CONFIRM_PASSPHRASE_FIELD_PLACEHOLDER: '确认您的密钥串',
        FORM_ADDRESS_FIELD_PLACEHOLDER: '账户地址',
        FORM_PRIVATE_KEY_FIELD_PLACEHOLDER: '私钥',
        FORM_SIDE_BTN_BALANCE: '余额',
        FORM_SIDE_BTN_PAY_TO: '被支付人',
        FORM_SIDE_BTN_TX_FEE: '交互费',
        FORM_SIDE_BTN_RENTAL_FEE: '租金',
        FORM_SIDE_BTN_LEVY_FEE: '征费',
        FORM_RECIPIENT_PLACEHOLDER: '接收地址或别名',
        FORM_INVOICE_RECIPIENT_PLACEHOLDER: '接收地址',
        FORM_SIDE_BTN_ALIAS_OF: '别名',
        FORM_MESSAGE_PLACEHOLDER: '信息',
        FORM_MOSAIC_NAME_PLACEHOLDER: '马赛克名'
    });

}

export default ChineseProvider;