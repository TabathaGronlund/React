// import React from 'react'


//     function tossCoin() {
//     return Math.random() > 0.5 ? "heads" : "tails";
// }

//     function fiveHeadsSync() {
//         let headsCount = 0;
//         let attempts = 0;
//         let maxAttempts= 100;

//         while(headsCount < 5 && attempts<= maxAttempts) {
//             attempts++;
//             let result = tossCoin();
//             console.log(`${result} was flipped`);
//             if(result === "heads") {
//                 headsCount++;
//             } else {
//                 headsCount = 0;
//             }
//         }
//         if (attempts<= maxAttempts) {
//             resolve(`it took ${attempts} tries to flip five "heads"`);
//         } else {
//             reject (`attempts have exceeded ${maxAttempts} flips.`)
//         }
//     });
// const CoinFlip = () => {
//     return (
//     <div>

//     </div>
// })
// export default CoinFlip
