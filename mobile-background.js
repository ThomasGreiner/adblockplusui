browser.tabs.getCurrent((currentTab) =>
{
  browser.tabs.create({url: "mobile-options.html"}, (optionsTab) =>
  {
    browser.tabs.sendMessage(optionsTab.id, {
      type: "app.respond",
      action: "showPageOptions",
      args: [
        {
          // TODO: convert to domain name
          host: currentTab.url,
          whitelisted: false
        }
      ]
    });
  });
});
