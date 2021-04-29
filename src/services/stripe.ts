import Stripe from 'stripe'
import { version } from '../../package.json'

export const STRIPE_API_KEY = 'sk_test_51IkRwRKmRdPeIMh0F3zDzMjkkGn8BPVcV6s6cHQvY4vQKpt5N0lU2hp4dZy2lJzveLC90bWOkQwcpSZoJL6KGQ1f00ZMbtTIxR';

export const stripe = new Stripe(  
  STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version
    },
  }
)