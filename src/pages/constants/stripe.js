const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_TDKKjTNKqYZOyFQVmD7MU46D'
  : 'pk_test_TDKKjTNKqYZOyFQVmD7MU46D';

export default STRIPE_PUBLISHABLE;