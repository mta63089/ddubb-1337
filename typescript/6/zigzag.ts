export function ZigZag(s: string, numRows: number): string {
  if (numRows <= 0) return "";
  if (numRows == 1 || s.length <= 1) return s;

  const rows: string[] = Array.from({ length: numRows }, () => "");
  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}

// export function ZigZag(s: string, numRows: number): string {
//   if (numRows <= 0) return "";
//   if (s.length == 1 || numRows == 1) return s;

//   const step = (numRows - 1) * 2;
//   const len = s.length;
//   const used = new Set<number>();
//   const arr: string[] = [];

//   for (let i = 0; i * step < len; i++) {
//     const index = i * step;
//     arr.push(s[index]);
//     used.add(index);
//   }
//   console.log("Multiples of step", arr);
//   console.log("used after first function: ", used);

//   for (let k = 0; k < len; k++) {
//     if (!used.has(k)) {
//       arr.push(s[k]);
//     }
//   }
//   // input : (THISISATESTSTRING , 4)
//   // output: TATHSTSRIIETIGSSN
//   return arr.join("");
// }
