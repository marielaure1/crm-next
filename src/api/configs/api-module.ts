import { ReactQuery } from "@api/configs/react-query-module";

export class ApiModule<DataInterface, CustomMethods = {}> extends ReactQuery<DataInterface> {
  constructor(
    route: string,
    token?: string,
    customMethods?: CustomMethods
  ) {
    super({ queryKey: route }, route, token);
    if (customMethods) {
      Object.assign(this, customMethods);
    }
  }
}

