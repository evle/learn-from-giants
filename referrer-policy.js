/**
 * 当你点击一个链接，从你的网站导航，目的地网站将收到你的网站上最后一个位置的URL在一个 referrer 头。
 * 该URL可能包含敏感数据和半敏感数据（例如会话令牌和用户ID），这些数据永远都不应公开。
 */

const ALLOWED_TOKENS = new Set([
  "no-referrer",
  "no-referrer-when-downgrade",
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url",
  "",
]);

res.setHeader("Referrer-Policy", headerValue);
