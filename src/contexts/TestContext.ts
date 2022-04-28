import React from 'react';

const TestContext = React.createContext('');

export const TestContextProvider = TestContext.Provider;
export const TestContextConsumer = TestContext.Consumer;

export default TestContext;
