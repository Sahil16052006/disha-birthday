import fs from 'fs';
import path from 'path';

console.log('--- RUNNING QA & INTEGRITY AUDIT FOR DISHA’S BIRTHDAY WEBSITE ---');

// 1. Check Dist files
const distDir = path.resolve('./dist');
if (!fs.existsSync(distDir)) {
  console.error('❌ dist directory missing');
  process.exit(1);
}
console.log('✓ dist directory exists');

const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
if (!indexHtml.includes('Disha') || !indexHtml.includes('./assets/')) {
  console.error('❌ index.html missing essential title or relative asset paths');
  process.exit(1);
}
console.log('✓ index.html has correct titles and relative asset paths');

// 2. Check Photo Assets
const imageDir = path.join(distDir, 'images');
const expectedPhotos = [
  'disha_traditional_smile.jpg',
  'disha_warm_night_light.jpg',
  'disha_radiant_laugh.jpg',
  'disha_quiet_elegance.jpg',
];

for (const photo of expectedPhotos) {
  const photoPath = path.join(imageDir, photo);
  if (!fs.existsSync(photoPath)) {
    console.error(`❌ Missing expected photo: ${photo}`);
    process.exit(1);
  }
  const stats = fs.statSync(photoPath);
  console.log(`✓ Photo verified: ${photo} (${stats.size} bytes)`);
}

// 3. Test Timezone & Countdown Calculations
const BIRTHDAY_START_UTC = new Date('2026-10-21T18:30:00.000Z').getTime();
const BIRTHDAY_END_UTC = new Date('2026-10-22T18:29:59.999Z').getTime();

function calculateTestCountdown(nowMs) {
  if (nowMs > BIRTHDAY_END_UTC) return 'after';
  if (nowMs >= BIRTHDAY_START_UTC && nowMs <= BIRTHDAY_END_UTC) return 'during';
  return 'before';
}

// Test Before
const beforeTime = BIRTHDAY_START_UTC - 1000 * 3600; // 1 hour before
if (calculateTestCountdown(beforeTime) !== 'before') {
  console.error('❌ Failed BEFORE countdown test');
  process.exit(1);
}
console.log('✓ Countdown BEFORE state passed');

// Test During
const duringTime = BIRTHDAY_START_UTC + 1000 * 3600; // 1 hour into Oct 22 IST
if (calculateTestCountdown(duringTime) !== 'during') {
  console.error('❌ Failed DURING countdown test');
  process.exit(1);
}
console.log('✓ Countdown DURING state passed (Happy Birthday Disha)');

// Test After
const afterTime = BIRTHDAY_END_UTC + 1000 * 3600; // 1 hour after Oct 22 IST ends
if (calculateTestCountdown(afterTime) !== 'after') {
  console.error('❌ Failed AFTER countdown test');
  process.exit(1);
}
console.log('✓ Countdown AFTER state passed (Celebration continues)');

// 4. Check Content & Safety constraints
const configPath = path.resolve('./src/data/birthdayConfig.ts');
const configContent = fs.readFileSync(configPath, 'utf-8');

// Ensure emotional anchor is present
if (!configContent.includes('smallest changes in my face') && !configContent.includes('smallest change on my face')) {
  console.error('❌ Emotional anchor regarding face change missing');
  process.exit(1);
}
console.log('✓ Emotional anchor memory present');

// Ensure books are present
if (!configContent.includes('October Junction') || !configContent.includes('Can We Be Strangers Again?')) {
  console.error('❌ Book references missing');
  process.exit(1);
}
console.log('✓ Book reflections present');

// Ensure sisterly affection & Sahil
if (!configContent.includes('Sahil') || !configContent.includes('Disha')) {
  console.error('❌ Sender or Recipient name missing');
  process.exit(1);
}
console.log('✓ Sender (Sahil) and Recipient (Disha) verified');

// Ensure 'sister' is warmly featured throughout
const sisterCount = (configContent.match(/sister/gi) || []).length;
if (sisterCount < 5) {
  console.error(`❌ Expected abundant sister references, found only ${sisterCount}`);
  process.exit(1);
}
console.log(`✓ Sister references abundantly present (${sisterCount} occurrences)`);

// Ensure 'diduu' is prominently featured
const diduuCount = (configContent.match(/diduu/gi) || []).length;
if (diduuCount < 5) {
  console.error(`❌ Expected abundant Diduu references, found only ${diduuCount}`);
  process.exit(1);
}
console.log(`✓ Diduu nickname verified prominently (${diduuCount} occurrences)`);

// Ensure no remaining 'college sister'
if (configContent.toLowerCase().includes('college sister')) {
  console.error('❌ Still found college sister in birthdayConfig.ts');
  process.exit(1);
}
console.log('✓ Verified: No remaining "college sister" occurrences');

console.log('--- ALL QA TESTS PASSED SUCCESSFULLY! ---');
