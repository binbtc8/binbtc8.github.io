/**
 * 交易所全局配置中心 (config.js)
 * 统一管理所有平台的名称、描述、邀请码、专属注册链接及主题色
 */
window.SITE_CONFIG = {
  // 网站全局基础信息
  site: {
    title: "新手加密货币入门全指南｜主流交易所注册与买币实操",
    brand: "BINBTC8",
    updateDate: "2026-11-04"
  },
  
  // 交易所核心数据池
  exchanges: {
    binance: {
      name: "Binance 币安",
      color: "#f0b90b",
      code: "XUGRIPB2",
      link: "https://www.bsmkweb.net/join?ref=XUGRIPB2",
      tag: "全球交易量第一",
      desc: "深度与流动性最佳，适合现货配置与理财定投。"
    },
    okx: {
      name: "OKX 欧易",
      color: "#000000",
      code: "2198730",
      link: "https://www.mitxcqvwnhj.com/join/2198730",
      tag: "Web3 体验最佳",
      desc: "中文体验极佳，出入金深度足，Web3 钱包功能强大。"
    },
    bybit: {
      name: "Bybit",
      color: "#f7a600",
      code: "RU2025",
      link: "https://partner.bybit.com/b/RU2025",
      tag: "衍生品极速",
      desc: "合约与衍生品流动性极佳，适合打新与杠杆交易。"
    },
    gate: {
      name: "Gate.io 芝麻开门",
      color: "#18c19a",
      code: "YOUR_GATE_CODE",
      link: "https://www.gate.io/signup/YOUR_GATE_CODE",
      tag: "百倍山寨币大本营",
      desc: "新币上线速度最快，涵盖极丰富的微市值币种。"
    },
    bitget: {
      name: "Bitget",
      color: "#00f0e6",
      code: "YOUR_BITGET_CODE",
      link: "https://www.bitget.com/expressly?languageType=0&channelCode=YOUR_BITGET_CODE",
      tag: "跟单/跟投首选",
      desc: "跟单交易生态成熟，适合新手一键复制优质策略。"
    },
    htx: {
      name: "HTX 火币",
      color: "#2a70f6",
      code: "YOUR_HTX_CODE",
      link: "https://www.htx.com/invite/zh-cn/1g/YOUR_HTX_CODE",
      tag: "老牌交易所",
      desc: "品牌积淀深厚，C2C 出入金快捷，活动奖励丰富。"
    }
  }
};
