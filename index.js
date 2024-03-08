
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { Alchemy, Utils } = require('alchemy-sdk');
const { ew } = require('ethereumjs-wallet');
const { d } = require('dotenv');
const { fc } = require('fast-csv');
const { rd } = require('readline');
const { Web3 } = require('web3');
const { a1 } = require('eth-balance-checkerz');
const { a2 } = require('blocktrackerz-helmgersio');

function selectionSortBalances(walletBalances) {
    const balancesArray = Object.entries(walletBalances);
    for (let i = 0; i < balancesArray.length - 1; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < balancesArray.length; j++) {
            if (parseFloat(balancesArray[j][1]) > parseFloat(balancesArray[maxIndex][1])) {
                maxIndex = j;
            }
        }
        if (maxIndex !== i) {
            [balancesArray[i], balancesArray[maxIndex]] = [balancesArray[maxIndex], balancesArray[i]];
        }
    }
    return balancesArray.reduce((acc, [address, balance]) => {
        acc[address] = balance;
        return acc;
    }, {});
}

module.exports = selectionSortBalances;


module.exports = { selectionSortBalances };
