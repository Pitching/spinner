process.stdout.write('hello from spinner1.js... \rheyyy\n');

let animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
let mult = 200;

for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
    process.stdout.write(animation[i]);
  }, mult + 100);
  mult += 200;
}