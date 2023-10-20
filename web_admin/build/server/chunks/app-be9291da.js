const api_url = "https://api.effective-solution.tech/";
const verifications = ["email", "phone", "documents"];
const wager_types = ["full", "only_bonus", "only_deposit"];
const mail_domains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "aol.com",
  "hotmail.co.uk",
  "hotmail.fr",
  "msn.com",
  "yahoo.fr",
  "wanadoo.fr",
  "orange.fr",
  "comcast.net",
  "yahoo.co.uk",
  "yahoo.com.br",
  "yahoo.co.in",
  "live.com",
  "rediffmail.com",
  "free.fr",
  "gmx.de",
  "web.de",
  "yandex.ru",
  "ymail.com",
  "libero.it",
  "outlook.com",
  "uol.com.br",
  "bol.com.br",
  "mail.ru",
  "cox.net",
  "hotmail.it",
  "sbcglobal.net",
  "sfr.fr",
  "live.fr",
  "verizon.net",
  "live.co.uk",
  "googlemail.com",
  "yahoo.es",
  "ig.com.br",
  "live.nl",
  "bigpond.com",
  "terra.com.br",
  "yahoo.it",
  "neuf.fr",
  "yahoo.de",
  "alice.it",
  "rocketmail.com",
  "att.net",
  "laposte.net",
  "facebook.com",
  "bellsouth.net",
  "yahoo.in",
  "hotmail.es",
  "charter.net",
  "yahoo.ca",
  "yahoo.com.au",
  "rambler.ru",
  "hotmail.de",
  "tiscali.it",
  "shaw.ca",
  "yahoo.co.jp",
  "sky.com",
  "earthlink.net",
  "optonline.net",
  "freenet.de",
  "t-online.de",
  "aliceadsl.fr",
  "virgilio.it",
  "home.nl",
  "qq.com",
  "telenet.be",
  "me.com",
  "yahoo.com.ar",
  "tiscali.co.uk",
  "yahoo.com.mx",
  "voila.fr",
  "gmx.net",
  "mail.com",
  "planet.nl",
  "tin.it",
  "live.it",
  "ntlworld.com",
  "arcor.de",
  "yahoo.co.id",
  "frontiernet.net",
  "hetnet.nl",
  "live.com.au",
  "yahoo.com.sg",
  "zonnet.nl",
  "club-internet.fr",
  "juno.com",
  "optusnet.com.au",
  "blueyonder.co.uk",
  "bluewin.ch",
  "skynet.be",
  "sympatico.ca",
  "windstream.net",
  "mac.com",
  "centurytel.net",
  "chello.nl",
  "live.ca",
  "aim.com",
  "bigpond.net.au"
];
const time_types = [
  {
    value: 60,
    label: "minute"
  },
  {
    value: 3600,
    label: "hour"
  },
  {
    value: 86400,
    label: "day"
  },
  {
    value: 30 * 86400,
    label: "month"
  },
  {
    value: 365 * 86400,
    label: "year"
  }
];
const events_types = [
  {
    value: 1,
    label: "onRegister"
  },
  {
    value: 2,
    label: "onLoginByEmail"
  },
  {
    value: 3,
    label: "onLoginByPhone"
  },
  {
    value: 4,
    label: "onResetPasswordByEmail"
  },
  {
    value: 5,
    label: "onResetPasswordByPhone"
  }
];

export { api_url as a, events_types as e, mail_domains as m, time_types as t, verifications as v, wager_types as w };
//# sourceMappingURL=app-be9291da.js.map
