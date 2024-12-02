import { ApiModule } from "@api/configs/api-module";

export function createModule<DataInterface, CustomMethods>(
  route: string,
  customMethods: CustomMethods
) {
  return new ApiModule<DataInterface, CustomMethods>(route, undefined, customMethods);
}
