/**
 *
 * jest config
 *
 */

module.exports = {
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  testPathIgnorePatterns: ['/node_modules/', '(/__tests__/.*|(\\.|/)(test))\\.d.ts$'],
  transformIgnorePatterns: ['node_modules/(?!(@domonda)/)'],
};
