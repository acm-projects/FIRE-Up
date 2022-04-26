import axios from "axios";

var stocks, bonds, cash;
const stocksArr = [], bondsArr = [], cashArr = [], netWorthArr = [];

const updateStocks = (response) => {
    stocksArr = response.stocksArr;
    // update array
}






axios.get(`http://localhost:3000/money/6260baf00f13e5376d47f9e7`)
    .then((response) => {
        updateStocks(response);
    })

module.exports = {stocksArr}