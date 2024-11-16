import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import ProductCreatedEvent from "../customer-address-changed.event";
import CustomerCreatedEvent from "../customer-created-event";

export default class EnviaConsoleLog1Handler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: ProductCreatedEvent): void {
    console.log(`Esse é o primeiro console.log do evento: CustomerCreated`);
  }
}
