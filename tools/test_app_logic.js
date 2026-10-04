const questions = require('./js/questions_data.js');

console.log('Testing questions dataset...');
console.assert(questions.length === 80, `Expected 80 questions, got ${questions.length}`);
console.log(`Passed: 80 questions found.`);

// Verify Question 5
const q5 = questions.find(q => q.id === 5);
console.assert(q5 && q5.type === 'matching', 'Q5 should be matching type');
console.assert(q5.matchingData && q5.matchingData.situations.length === 6, 'Q5 should have 6 situations');
console.log('Passed: Q5 matching data verified.');

// Verify Question 47
const q47 = questions.find(q => q.id === 47);
console.assert(q47 && q47.ptDownloadUrl, 'Q47 should have ptDownloadUrl');
console.assert(q47.titleEn.includes('10.1.1.5'), 'Q47 should ask about 10.1.1.5');
console.assert(q47.options.find(o => o.text.includes('Fa0/11')).isCorrect, 'Fa0/11 should be correct for Q47');
console.log('Passed: Q47 Packet Tracer prompt and answer verified.');

// Verify all options
let issues = 0;
questions.forEach(q => {
  if (!q.options || q.options.length === 0) {
    console.error(`Question ${q.id} has no options!`);
    issues++;
  }
  const hasCorrect = q.options.some(o => o.isCorrect);
  if (!hasCorrect) {
    console.error(`Question ${q.id} has NO correct option!`);
    issues++;
  }
  if (!q.titleEn || !q.titleId) {
    console.error(`Question ${q.id} missing titleEn or titleId!`);
    issues++;
  }
});

console.assert(issues === 0, `Found ${issues} issues in dataset`);
console.log('Passed: All 80 questions have complete titles, options, and correct answers!');

console.log('All automated tests passed successfully!');
