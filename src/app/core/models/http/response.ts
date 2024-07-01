import { NotificationMessage } from "./notificationMessage";

export interface Response<TResult> {
    dados: TResult, 
    mensagens: NotificationMessage[]
}