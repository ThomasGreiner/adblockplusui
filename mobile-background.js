"use strict";

browser.tabs.getCurrent((currentTab) =>
{
  browser.tabs.create({url: "mobile-options.html"}, (optionsTab) =>
  {
    browser.tabs.sendMessage(optionsTab.id, {
      type: "app.respond",
      action: "showPageOptions",
      args: [
        {
          host: new URL(currentTab.url).host,
          whitelisted: false
        }
      ]
    });
  });
});
