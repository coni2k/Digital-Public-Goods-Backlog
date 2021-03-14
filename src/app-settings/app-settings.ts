import { environment } from './environment-settings';

export const appSettings = {
  apiBaseUrls: {
    projects: environment.apiBaseDomain + '/v1/Projects/GetAll',
  },
  production: environment.production,
};
