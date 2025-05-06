module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  testMatch: ["**/e2e/**/*.test.ts"],
  testEnvironment: "node",
};
