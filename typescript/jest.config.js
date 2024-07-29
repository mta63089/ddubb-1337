module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
  },
};
