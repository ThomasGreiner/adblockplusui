browser.tabs.getCurrent((currentTab) =>
{
  browser.tabs.create({url: "mobile-options.html"}, (optionsTab) =>
  {
    browser.tabs.sendMessage(optionsTab.id, {
      type: "app.respond",
      action: "showPageOptions",
      // TODO: convert to domain name
      args: [currentTab.url, true]
    });
  });
});
