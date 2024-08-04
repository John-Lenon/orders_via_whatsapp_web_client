import { EnumNotificationType } from '../enums/enum-notification-type';

export interface HttpNotification {
  tipo: EnumNotificationType;
  mensagem: string;
}
