export enum IPages {
  index = '/',
  schoolboyInfo = '/schoolboy-info'
}

export enum IRequestMethods {
  get = 'get',
  post = 'post'
}

export interface IRequestTemplateParams {
  url: string
  method: IRequestMethods
  payload?: any
}

export enum IFetchedDataStateTypes {
  fetching = 'fetching',
  success = 'success',
  error = 'error'
}
