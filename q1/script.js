let salaries = {
  John: 100,
  Ptet: 300,
  Mary: 250,
};

const topSalary = Object.entries(salaries)
  .sort(([, a], [, b]) => a - b)
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
console.log(topSalary);
