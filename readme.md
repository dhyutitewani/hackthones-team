# DOCUMENTATION

const math = require('mathjs');

function tverskyIndex(X, Y, alpha, beta) {
  const intersection = math.intersect(X, Y).size();
  const falsePositives = math.setDifference(X, Y).size();
  const falseNegatives = math.setDifference(Y, X).size();
  
  const numerator = intersection;
  const denominator = intersection + alpha * falsePositives + beta * falseNegatives;
  
  return numerator / denominator;
}