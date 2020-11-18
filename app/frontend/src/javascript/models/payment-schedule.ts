export interface PaymentScheduleItem {
  id: number,
  amount: number,
  due_date: Date
  details: {
    recurring: number,
    adjustment: number,
    other_items: number
  }
}

export interface PaymentSchedule {
  id: number,
  scheduled_type: string,
  scheduled_id: number,
  total: number,
  stp_subscription_id: string,
  reference: string,
  payment_method: string,
  wallet_amount: number,
  items: Array<PaymentScheduleItem>
}