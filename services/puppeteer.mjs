import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://br.linkedin.com/in/gabrielsoarespebr/', {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector('.profile-section-card');

  let selector = '.certifications__list .profile-section-card';
  const certicates = await page.evaluate(resultsSelector => {
      return [...document.querySelectorAll(resultsSelector)].map(anchor => {
        const title = anchor.textContent.split('|')[0].trim();
        return `${title}`;
        // return `${title} - ${anchor.href}`;
      });
    }, selector);
  
    // Print all the files.
    console.log(certicates);

  

  // Type into search box.
  // await page.type('.devsite-search-field', 'Headless Chrome');

  // // Wait for suggest overlay to appear and click "show all results".
  // const allResultsSelector = '.devsite-suggest-all-results';
  // await page.waitForSelector(allResultsSelector);
  // await page.click(allResultsSelector);

  // // Wait for the results page to load and display the results.
  // const resultsSelector = '.gsc-results .gs-title';
  // await page.waitForSelector(resultsSelector);

  // // Extract the results from the page.
  // const links = await page.evaluate(resultsSelector => {
  //   return [...document.querySelectorAll(resultsSelector)].map(anchor => {
  //     const title = anchor.textContent.split('|')[0].trim();
  //     return `${title} - ${anchor.href}`;
  //   });
  // }, resultsSelector);

  // // Print all the files.
  // console.log(links.join('\n'));

  // await browser.close();
})();