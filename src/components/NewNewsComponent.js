import React from "react";

export default function NewNewsComponent(props) {

    const articles = [
        {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Aparna Banerjea",
            "title": "RIL Q3 earnings LIVE Updates: Jio's revenue rises 19% YoY; EBITDA margin comes in at 52.2% - Moneycontrol",
            "description": "RIL Q3 earnings Live Updates: Jio reports net profit of Rs 4,638 crore, up 28.3 percent from the year-ago period.",
            "url": "https://www.moneycontrol.com/news/business/earnings/ril-q3-earnings-live-updates-reliance-industries-to-declare-financial-results-today-9906361.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/06/RTX1G6H2-770x433.jpg",
            "publishedAt": "2023-01-20T12:22:55Z",
            "content": "Jio Q3 results: Revenue rises 19% YoY; EBITDA margin comes in at 52.2% \r\nJio's revenue from operations came in at Rs 22,998 crore, rising 18.9 percent YoY from Rs 19,347 crore in the corresponding qu… [+292 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Google Announces 12,000 Job Cuts, Hours After Delaying Bonuses - NDTV",
            "description": "Google's parent Alphabet Inc is eliminating about 12,000 jobs, or 6% of its workforce, it said Friday, as Silicon Valley reels from recent layoffs and faces a troubled outlook.",
            "url": "https://www.ndtv.com/world-news/google-parent-company-alphabet-to-lay-off-12-000-globally-report-3709708",
            "urlToImage": "https://c.ndtvimg.com/2023-01/agi6l91o_google_625x300_20_January_23.jpg",
            "publishedAt": "2023-01-20T11:30:00Z",
            "content": "Google said the layoffs are global and impact US staff immediately.\r\nGoogle's parent Alphabet Inc is eliminating about 12,000 jobs, or 6% of its workforce, it said Friday, as Silicon Valley reels fro… [+1814 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "NDTV News"
            },
            "author": null,
            "title": "Swiggy Announces Job Cuts, CEO Says \"Overhiring Case Of Poor Judgement\" - NDTV",
            "description": "Food delivery platform Swiggy on Friday said it is \"bidding goodbye to 380 talented Swiggsters\" as part of a restructuring exercise, adding it was an \"extremely difficult decision\".",
            "url": "https://www.ndtv.com/india-news/swiggy-lays-off-380-employees-ceo-says-extremely-difficult-decision-3708929",
            "urlToImage": "https://c.ndtvimg.com/2018-12/u0bp14h8_swiggy_625x300_20_December_18.jpg",
            "publishedAt": "2023-01-20T10:30:00Z",
            "content": "Food delivery platform Swiggy on Friday said it is \"bidding goodbye to 380 talented Swiggsters\" as part of a restructuring exercise, adding it was an \"extremely difficult decision\".\r\nThe company said… [+1659 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Rakesh Patil",
            "title": "Closing Bell: Nifty ends near 18,000, Sensex falls 236 points dragged by FMCG, metal, pharma - Moneycontrol",
            "description": "Metal, pharma and FMCG indices shed nearly 1 percent each.",
            "url": "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-january-20-latest-news-bse-nse-sensex-nifty-covid-coronavirus-ril-icici-bank-hul-pvr-sun-pharma-can-fin-homes-hindustan-zinc-lt-technology-tcs-bhel-9898651.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/06/Sensex-3-770x433.jpg",
            "publishedAt": "2023-01-20T10:26:22Z",
            "content": "<li>Nomura keeps 'Buy' rating on Persistent Systems, target at Rs 4,950\r\n</li><li>Expect USDINR spot to trade in a range of Rs 80.50 to Rs 81.80: Anuj Choudhary\r\n</li><li>Jefferies maintains ‘buy’ ra… [+4405 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Moneycontrol"
            },
            "author": "Sunil Shankar Matkar",
            "title": "Union Bank of India Q3 result: Profit up 107% at Rs 2,245 crore, asset quality improvement - Moneycontrol",
            "description": "Union Bank of India Q3 result: Provisions and contingencies at Rs 3,036 crore were up 19 percent from the year-ago quarter but fell 25.5 percent sequentially",
            "url": "https://www.moneycontrol.com/news/business/earnings/union-bank-of-india-q3-result-profit-up-107-at-rs-2245-crore-asset-quality-improvement-9904731.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/01/Union-bank-of-india-770x433.jpg",
            "publishedAt": "2023-01-20T09:26:07Z",
            "content": "Union Bank of India on January 20 reported a standalone profit of Rs 2,245 crore for the December quarter, up 106.81 percent from the year-ago period, with healthy improvement in asset quality and do… [+1661 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "YouTube"
            },
            "author": null,
            "title": "Bajaj-KTM Partnership Crosses 1 Million Unit Production Milestone: Rajiv Bajaj Exclusive | CNBC-TV18 - CNBC-TV18",
            "description": "KTM India reached a major achievement as the one-millionth motorcycle rolled out of Bajaj Chakan plant today. A KTM Adventure 390 rolled off the assembly lin...",
            "url": "https://www.youtube.com/watch?v=4fo7YqBpRqw",
            "urlToImage": "https://i.ytimg.com/vi/4fo7YqBpRqw/maxresdefault.jpg",
            "publishedAt": "2023-01-20T09:15:05Z",
            "content": null
          },
          {
            "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
            },
            "author": "Vidya Sreedhar",
            "title": "HDFC Life Q3 Results: Net profit rises 15% YoY to Rs 315 crore - Economic Times",
            "description": "Net premium income for the quarter increased by 19% YoY to Rs 14,379 crore. The first year premium grew by nearly 29% on year to Rs 2,724 crore.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/hdfc-life-q3-results-net-profit-rises-15-yoy-to-rs-315-crore/articleshow/97168918.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-97168873,width-1070,height-580,imgsize-33974,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-01-20T08:31:00Z",
            "content": "Co on Friday reported a 15% year-on-year (YoY) rise in net profit for the quarter ended December 2022 at Rs 315 crore.Net premium income for the quarter increased by 19% YoY to Rs 14,379 crore. The f… [+2208 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Livemint"
            },
            "author": "Asit Manohar",
            "title": "Rakesh Jhunjhunwala stock hits 52-week high after giving 70% return in six month | Mint - Mint",
            "description": "This Rakesh Jhunjhunwala portfolio stock had climbed to 52-week high on Tuesday and Wednesday sessions as well",
            "url": "https://www.livemint.com/market/stock-market-news/rakesh-jhunjhunwala-stock-hits-52-week-high-after-giving-70-return-in-six-month-11674202649078.html",
            "urlToImage": "https://images.livemint.com/img/2023/01/20/600x338/Rakesh_Jhunjhunwala_1660476535199_1674202880960_1674202880960.jpeg",
            "publishedAt": "2023-01-20T08:30:42Z",
            "content": "Rakesh Jhunjhunwala portfolio: Anant Raj shares have been in uptrend for last seven months. After hitting its 52-week low of 43 apiece in mid June 2022, this Rakesh Jhunjhunwala stock has been contin… [+1817 chars]"
          }
      ]
  return (

    <>
    {
            (articles||[]).map((art, index) =>{
              return (
                <div key={index+1}>
                    <div className="my-5 py-3">
                        <div>
                            <div
                                className={`card bg-${props.mode === 'light'? 'warning' : 'dark'} border-${
                                    props.mode === "light" ? "dark  " : "dark"
                                }`}
                                style={{ width: "18rem" }}
                            >
                                <img src={!art.urlToImage?"https://images.hindustantimes.com/tech/img/2023/01/19/1600x900/nasa_1674116812089_1674116821256_1674116821256.jpg":art.urlToImage} className="card-img-top" alt="..." />
                                <div
                                className={`card-body bg-${
                                    props.mode === "light" ? "light" : "dark"
                                    } text-${props.mode === "light" ? "dark" : "light"}`}
                                    >
                                <h5 className={`card-title xfont text-${props.mode === "light" ? "dark" : "light"}`}>{art.title.slice(0,45)+'...'}</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <a
                                    href="/"
                                    className={`btn rounded-pill text-${props.mode === 'light'?'light':'dark'} btn-${
                                        props.mode === "light" ? "warning" : "light"
                                    }`}
                                    >
                                    Read More
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })
}

    </>
  );
}



