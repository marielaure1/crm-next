import { ApiModule } from "@api/configs/api-module";

export class Api {
    [key: string]: any;
  
    constructor(config: { name: string; token?: string; methods?: { [key: string]: Function } }[]) {
      config.forEach(({ name, token, methods }) => {
        this[name] = new ApiModule(name, token, methods);
      });
    }
}
