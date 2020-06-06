export enum OrderStatus {
	// * when the order has been created, but the associated ticket has not been reserved
	Created = 'created',

	// * either the associated ticket has already been reserved or when the user cancels the order or the order expires before payment
	Cancelled = 'cancelled',

	// * the order has successfully reserved the ticket
	AwaitingPayment = 'awaiting:payment',

	// * The order has reserved the ticket and the user has provided payment successfully
	Complete = 'complete'
}
