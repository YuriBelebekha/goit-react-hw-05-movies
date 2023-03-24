import { lazy } from 'react';

export const createAsyncView = componentName => {
  return lazy(async () => {
    return import(`../views/${componentName}`)
      .then(module => {
        return {
          ...module,
          default: module[componentName],
        };
      });
  });
};

export const createAsyncComponent = componentName => {
  return lazy(async () => {
    return import(`../components/${componentName}`)
      .then(module => {
        return {
          ...module,
          default: module[componentName],
        };
      });
  });
};