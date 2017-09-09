const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_9zQrlxm90E7Ecb31ad6ZexGC'
  : 'pk_test_TDKKjTNKqYZOyFQVmD7MU46D';

export default STRIPE_PUBLISHABLE;