function conOfTime(n) {
  let time = n * 3600;
  time = `${time / 3600}`;
  time = time.split(".");
  let x = `${+time[1] * 60}`;
  x = x.split("0");
  console.log(time[0], x[0]);
  return `${time[0]} hours ${x[0]} minutes.`;
}
conOfTime(44.33)
module.exports = conOfTime;
