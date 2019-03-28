dataSetVersion = "2019-03-27"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series",
    checked: false,
    sub: [
			{ name: "QP Shooting", key: "qps" },
			{ name: "Christmas Shooting", key: "cms" },
			{ name: "QP Shooting - Dangerous!!", key: "qpsd" },
			{ name: "Xmas Shooting - Scramble!!", key: "xmss" },
      { name: "SUGURI", key: "sugu" },
			{ name: "sora", key: "sora" },
			{ name: "Acceleration of Suguri X", key: "aos" },
			{ name: "Acceleration of Suguri 2", key: "aos2" },
			{ name: "Flying Red Barrel", key: "frb" },
			{ name: "Alicainrone", key: "alicia" },
			{ name: "QP Kiss", key: "qpk" }

    ]
  },
  {
    name: "Remove Non-Girls",
    key: "notgirl",
    tooltip: "Check this to remove all non-female characters."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Alte",
    img: "1uLpuoE.png",
    opts: {
      series: [ "sora", "oj", "mj", "aos2" ]
    }
  },
  {
    name: "Arthur",
    img: "AAE6TUa.png",
    opts: {
      series: [ "cms", "mj", "oj" ]
    }
  },
  {
    name: "Aru",
    img: "Kg08ML1.png",
    opts: {
      series: [ "cms", "oj", "xmss" ]
    }
  },
  {
    name: "Ceoreparque",
    img: "a48YYnr.png",
    opts: {
      series: ["alicia", "oj"]
    }
  },
  {
    name: "Fernet",
    img: "I6vzxkF.png",
    opts: {
      series: [ "frb", "oj", "mj" ]
    }
  },
	{
    name: "Aru",
    img: "Kg08ML1.png",
    opts: {
      series: [ "cms", "oj", "mj", "xmss" ]
    }
  },
	{
    name: "Hime",
    img: "qyvtAAP.png",
    opts: {
      series: [ "sugu", "sora", "aos", "oj", "mj", "aos2" ]
    }
  },
	{
    name: "Iru",
    img: "2fe0ury.png",
    opts: {
      series: [ "sugu", "aos", "mj", "oj", "aos2" ]
    }
  },
	{
    name: "Kae",
    img: "0XgLAON.png",
    opts: {
      series: [ "sugu", "aos", "oj", "mj", "aos2" ]
    }
  },
	{
    name: "Kai",
    img: "LDzx5iY.png",
    opts: {
      series: [ "oj", "mj" ]
    }
  },
	{
    name: "Kiriko",
    img: "rHFVaDh.png",
    opts: {
      series: [ "cms", "oj", "mj", "xmss" ]
    }
  },
	{
    name: "Krilalaris",
    img: "lGdLIzC.png",
    opts: {
      series: [ "qpsd", "oj", "mj" ]
    }
  },
	{
    name: "Kyoko",
    img: "ccm0Xwj.png",
    opts: {
      series: [ "sugu", "aos", "aosx", "oj", "mj" ]
    }
  },
	{
    name: "Kyousuke",
    img: "r28PfSj.png",
    opts: {
      series: [ "qpsd", "oj", "mj", "qpk" ]
    }
  },
	{
    name: "Marc",
    img: "nZZ0mJQ.png",
    opts: {
      series: [ "frb", "oj", "mj" ]
    }
  },
	{
    name: "Marie Poppo",
    img: "HDm0zdn.png",
    opts: {
      series: [ "oj", "mj" ]
    }
  },
	{
    name: "Mei",
    img: "J2Gt6Xm.png",
    opts: {
      series: [ "qps", "cms", "xmss", "oj", "mj" ]
    }
  },
	{
    name: "Mimyuu",
    img: "vC1YLyq.png",
    opts: {
      series: [ "qps", "oj", "mj", "qpsd" ]
    }
  },
	{
    name: "Mira",
    img: "4QKJ6RK.png",
    opts: {
      series: [ "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Miusaki",
    img: "qme8ivx.png",
    opts: {
      series: [ "alicia", "oj" ]
    }
  },
	{
    name: "Nanako",
    img: "CyFZxdc.png",
    opts: {
      series: [ "sugu", "aos", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Nath",
    img: "iLUO5ik.png",
    opts: {
      series: [ "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Natsumi",
    img: "nBMSHYR.png",
    opts: {
      series: [ "cms", "oj", "mj", "xmss" ]
    }
  },
	{
    name: "Nico",
    img: "XCXThLs.png",
    opts: {
      series: [ "xmss", "oj" ]
    }
  },
	{
    name: "NoName",
    img: "PrtWnJV.png",
    opts: {
      series: [ "aos", "oj", "mj" ]
    }
  },
	{
    name: "Peat",
    img: "s9KV2pz.png",
    opts: {
      series: [ "frb", "oj", "mj" ]
    }
  },
	{
    name: "QP",
    img: "sbHS0jh.png",
    opts: {
      series: [ "qps", "oj", "mj", "qpsd", "aos" ]
    }
  },
	{
    name: "Saki",
    img: "NU5ggG3.png",
    opts: {
      series: [ "sugu", "aos", "aos2", "oj", "mj" ]
    }
  },
	{
    name: "Sham",
    img: "eVMBODw.png",
    opts: {
      series: [ "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Sherry",
    img: "qgMi8WP.png",
    opts: {
      series: [ "frb", "oj", "mj" ]
    }
  },
	{
    name: "Sora",
    img: "6BItCqM.png",
    opts: {
      series: [ "aos", "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Star Breaker",
    img: "pxedL6Y.png",
    opts: {
      series: [ "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "SUGURI",
    img: "Lr9Qxnp.png",
    opts: {
      series: [ "sugu", "aos", "sora", "aos2", "mj", "oj" ]
    }
  },
	{
    name: "Sweet Breaker",
    img: "sQLQ1V6.png",
    opts: {
      series: [ "qpsd", "oj", "mj" ]
    }
  },
	{
    name: "Syura",
    img: "xlKr3zc.png",
    opts: {
      series: [ "qpsd", "oj", "mj" ]
    }
  }
];
