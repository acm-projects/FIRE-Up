<p align="center">
<img src="https://github.com/acm-projects/FIRE-Up/blob/main/Bonfire.gif" width="256"/>
</p>

# FIRE-Up
FIRE Up is a mobile app that allows you to work towards financial independence, tracking your progress and telling you the steps to reach your monetary goals! Users enter in their retirement goals (age, spending, etc.), and FIRE Up provides them with the path to get there.

FIRE = Financial Independence, Retire Early
## MVP
* Ability to enter in desired retirement spendings and withdrawal rate
* Ability to enter in current age, net worth, and yearly salary
* Ability to enter in expected yearly investment return in percentage
  * Average for the S&P 500 index, adjusted for inflation, is [7%](https://www.investopedia.com/ask/answers/042415/what-average-annual-return-sp-500.asp)
* Calculate the age at which financial independence will be reached
* Graph user’s financial growth by year and visually show what year they will reach financial independence
## Stretch Goals
* Graphically separate the increases of out-of-pocket investments and interest earned on those investments, as seen below
<p align="center">
<img src="https://imguploader.net/if/ck9kIbwf1vDx.png" width="550"/>
</p>

* Separate assets (stocks, bonds, cash) by allocation percentage and return percentage, then calculate FIRE output
* Provide in-app resources, blog posts, and articles about the pros and cons (return and risk) of different asset categories by age
* Suggest yearly spending decreases to user (“if you decrease your yearly spending by X, then you can retire Y years earlier”)
## Tech Stack
* Frontend:
  * Figma/Adobe XD for wireframing 
  * React Native 
* Backend: 
  * MongoDB 
  * Express 
* Dependencies: 
  * Git Bash 
  * Node.js 
  * VS Code
## Software to Install/Resources
* [Git](https://git-scm.com/downloads)
  * [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
* Wireframing: 
  * [Figma](https://www.figma.com/) (free for 3 designs)
  * [Adobe XD](https://www.adobe.com/products/xd.html)
* General Resources:
  * [Visual Studio Code](https://code.visualstudio.com/)
  * [JavaScript Basics](https://learnjavascript.online/)
  * [Node.js Download](https://nodejs.org/en/download/)
* Mobile Framework (Frontend): [React Native](https://reactnative.dev/docs/environment-setup)
  * Uses JavaScript and has a mature and vast community
  * [Documentation](https://reactnative.dev/docs/getting-started) — use for any questions you may have
  * [YouTube Tutorial](https://www.youtube.com/watch?v=Hf4MJH0jDb4) (51 minutes)
  * Potential dependencies to make UI/UX design much easier:
    * [NativeBase](https://v2.nativebase.io/) and [Documentation](https://docs-v2.nativebase.io/)
    * [React Native Paper](https://reactnativepaper.com/), [Installation](https://www.npmjs.com/package/react-native-paper) and [Documentation](https://callstack.github.io/react-native-paper/index.html)
* Backend: 
  * [MongoDB](https://www.mongodb.com/)
    * Database which is used to store data such as age, income, annual spending, etc.
  * [Mongoose](https://www.npmjs.com/package/mongoose)
    * Allows you to define different types of objects for use with API Calls in relation to MongoDB
    * [Introduction to Mongoose](https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527)
  * [Express.js Installation](https://expressjs.com/en/starter/installing.html) (first install Node.js)
    * Used for API Calls
    * [Express tutorial with MongoDB](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
  * Building a REST API with MongoDB, Express, and Node.js [Tutorial](https://youtu.be/fgTGADljAeg) (very helpful for backend)
* [MERN Stack Tutorial](https://www.youtube.com/watch?v=mrHNSanmqQ4&t=0s) on YouTube
## Some FIRE Calculators to Get Ideas From
* [WalletBurst](https://walletburst.com/tools/fire-calculator/) (great UI, nicely color coded, easy to understand, and lots of options)
* [Playing With FIRE](https://www.playingwithfire.co/retirementcalculator/) (simple but effective)
* [How To Fire](https://www.howtofire.com/calculators/ultimate-financial-independence-calculator/) (simple inputs with a good UI — includes graphs and tables)
* [Engaging Data](https://engaging-data.com/fire-calculator/) (many parameters, outdated UI, pretty confusing for most people)
* [Milennial Money](https://millennialmoney.com/calculators/fire-calculator/) (lack of graph, although it does update in real time)

These calculators are great for getting ideas about our app. Consider the parameters used in each calculator and think about which are necessary and which ones you want to use. Also note the UI/UX of the above calculators and whether they are easy to understand or not. 
## GitHub Cheat Sheet
(Thanks Emily ^-^)

General Use

| Command | Description |
| ------ | ------ |
| cd "FIREUp" | Change directories over to our repository |
| git branch | Lists branches for you |
| git branch "branch name" | Makes new branch |
| git checkout "branch name" | Switch to branch |
| git checkout -b "branch name" | Same as 2 previous commands together |
| git add . | Finds all changed files |
| git commit -m "Testing123" | Commit with message |
| git push origin "branch" | Push to branch |
| git pull origin "branch" | Pull updates from a specific branch |

## Miscellaneous Resources and Thoughts
* [ACM’s Advice](https://docs.google.com/document/d/18Zi3DrKG5e6g5Bojr8iqxIu6VIGl86YBSFlsnJnlM88/edit) for you to be successful in ACM Projects
* [Inflation Calculator API](https://www.statbureau.org/en/inflation-api) for more accurate inflation calculations

The bare-bones way to do a FIRE calculation (with a 4% retirement withdrawal rate) is to take your wanted spending/year in retirement and times it by 25. (e.g. $40,000/year X 25 = $1,000,000). That is your goal amount for saving.

Then we simply have to do a dynamic tracking of a person’s amount saved per year, while accounting for interest. (e.g. we take a person’s savings, times that by 1.07 [7% average S&P 500 gain], add in the money made for the next year, and continue repeating that for every year — showing the monetary gain on a graph of that person’s finances until age 80 or 100). 

This may evoke the question, "how can I be sure that a 4% retirement withdrawal rate works?". The short answer is that, given the historical information we have from the US stock market, there is a very strong chance that you will retain your money over many years with such restrained spending. If the stock market crashes, it is highly likely that it will do so in a scenario in which the US Dollar loses a large amount of its value as well. Therefore, because both the S&P 500 and the US dollar rely on the premise of civilization continuing, it is best to invest in the more optimal option — the S&P 500 — while civilization lasts. It is essential that you read this [article](https://www.mrmoneymustache.com/2012/05/29/how-much-do-i-need-for-retirement/) by Mr. Money Mustache on the reasoning and data behind the 4% withdrawal rule.

If you would like to get a general overview of the merits of FIRE and how to get there as an individual, I would highly recommend JL Collins's book, ["A Simple Path to Wealth"](https://www.amazon.com/Simple-Path-Wealth-financial-independence-ebook/dp/B01H97OQY2/ref=sr_1_2?crid=1G61G2WMFTGMF&keywords=jl+collins&qid=1642827308&s=digital-text&sprefix=jl+collins%2Cdigital-text%2C716&sr=1-2). To get a proper perception of money and exterior goods, I would highly recommend reading classical Stoic writings. These have been topically compiled by a great scholar who teaches at UT Austin, Ward Farnsworth, in his book ["The Practicing Stoic"](https://www.amazon.com/Practicing-Stoic-Philosophical-Users-Manual-ebook/dp/B085H5R3JJ/ref=sr_1_3?crid=1CG4YHBO2GSPW&keywords=ward+farnsworth&qid=1642827392&s=digital-text&sprefix=ward+farnswort%2Cdigital-text%2C268&sr=1-3). Reading the Stoics is a crucial part of a true liberal education — one that frees you to fulfill your highest calling —, as opposed to the intellectual indigestion suffered after consuming elective soup.
