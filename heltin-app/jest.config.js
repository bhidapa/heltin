/**
 *
 * jest config
 *
 */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['src'],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      diagnostics: {
        warnOnly: true,
        ignoreCodes: [
          151001, // ts-jest.Errors.ConfigNoModuleInterop
        ],
      },
    },
  },
};
