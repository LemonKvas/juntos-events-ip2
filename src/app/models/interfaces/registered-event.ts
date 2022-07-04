/**
 * DE:
 * Interface um ein gespeichertes Event zu repräsentieren, für welches sich ein Nutzer angemeldet hat.
 * EN:
 * Interface to represent a stored event for which a user has registered.
 */
export interface RegisteredEvent {
  eventId: string;
  ticket: boolean;
}
