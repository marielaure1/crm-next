import { QueryClient, InvalidateQueryFilters } from '@tanstack/react-query';
import { Axios } from '@api/configs/axios';
import { queryClient } from '@api/configs/react-query';

export class ReactQuery<DataInterface> {
  public queryClient: QueryClient;
  public apiAxios: Axios<DataInterface>;
  private customMethods: { [key: string]: Function };

  constructor(
    protected readonly type: InvalidateQueryFilters,
    private readonly path: string,
    token?: string,
    customMethods?: { [key: string]: Function }
  ) {
    this.queryClient = queryClient;
    this.apiAxios = new Axios<DataInterface>(this.path, token);
    this.customMethods = customMethods || {};
  }

  async findAll() {
    try {
      const response = await this.apiAxios.findAllAxios();
      const datas = response?.data[this.type.queryKey];
      this.queryClient.setQueryData([this.type.queryKey], datas);
      return datas;
    } catch (error) {
      return error?.response;
    }
  }

  async create(datas: DataInterface) {
    try {
      const response = await this.apiAxios.createAxios(datas);
      this.queryClient.invalidateQueries({ queryKey: [this.type.queryKey] });
      return response;
    } catch (error) {
      return error?.response;
    }
  }

  async findOne(id: string) {
    try {
      const response = await this.apiAxios.findOneAxios(id);
      this.queryClient.setQueryData([this.type.queryKey, id], response);
      return response?.data[this.type.queryKey];
    } catch (error) {
      return error?.response;
    }
  }

  async update(id: string, datas: DataInterface) {
    try {
      const response = await this.apiAxios.updateAxios(id, datas);
      this.queryClient.invalidateQueries({ queryKey: [this.type.queryKey] });
      return response;
    } catch (error) {
      return error?.response;
    }
  }

  async delete(id: string) {
    try {
      const response = await this.apiAxios.deleteAxios(id);
      this.queryClient.invalidateQueries({ queryKey: [this.type.queryKey] });
      return response;
    } catch (error) {
      return error?.response;
    }
  }

  addCustomMethod(name: string, method: Function) {
    this.customMethods[name] = method;
  }

  callCustomMethod(name: string, ...args: any[]) {
    if (!this.customMethods[name]) {
      throw new Error(`Custom method "${name}" not found.`);
    }
    return this.customMethods[name](...args);
  }
}

export default ReactQuery;
