

// Loading the dependencies. We don't need pretty
// because we shall not log html to the terminal

const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// URL of the page we want to scrape
const url = "https://www.oldbookillustrations.com/subjects/people/page/1/";

// Async function which scrapes the data
async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    const listItems = $(".archive-title");
    // Stores data for all Urls
    const pageUrls = [];
    // Use .each method to loop through the li we selected
    listItems.each((idx, el) => {
      // Object holding data for each country/jurisdiction
      const pageUrl = { url: "" };
      // Select the text content of a and span elements
      // Store the textcontent in the above object
      pageUrl.url = $(el).children("a").attr("href");
      // Populate Urls array with country data
      pageUrls.push(pageUrl);
    });
    // Logs Urls array to the console
    console.dir(pageUrls);
    // Write Urls array in Urls.json file
    fs.writeFile("PageUrls.json", JSON.stringify(pageUrls, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successfully written data to file");
    });
  } catch (err) {
    console.error(err);
  }
}
// Invoke the above function
scrapeData();