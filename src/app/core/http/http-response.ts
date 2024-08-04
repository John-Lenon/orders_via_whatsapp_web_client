import { HttpNotification } from './http-notification';

export interface HttpResponse<TResponse> {
  tipo: HttpNotification;
  dados: TResponse;
}
