export default [
  { heading: 'Apps & Pages' },
  // {
  //
  //   title: 'Ecommerce',
  //   icon: { icon: 'ri-shopping-bag-3-line' },
  //   children: [
  //     {
  //       title: 'Dashboard',
  //       to: 'apps-ecommerce-dashboard',
  //     },
  //     {
  //       title: 'Product',
  //       children: [
  //         { title: 'List', to: '/seller/product' },
  //         { title: 'Add', to: '/seller/product/create' },
  //         { title: 'Category', to: '/seller/product/category' },
  //       ],
  //     },
  //     {
  //       title: 'Order',
  //       children: [
  //         { title: 'List', to: 'apps-ecommerce-order-list' },
  //         { title: 'Details', to: { name: 'login', params: { id: '9042' } } },
  //       ],
  //     },
  //     {
  //       title: 'Customer',
  //       children: [
  //         { title: 'List', to: 'apps-ecommerce-customer-list' },
  //         { title: 'Details', to: { name: 'login', params: { id: 478426 } } },
  //       ],
  //     },
  //     {
  //       title: 'Manage Review',
  //       to: 'apps-ecommerce-manage-review',
  //     },
  //     {
  //       title: 'Referrals',
  //       to: 'apps-ecommerce-referrals',
  //     },
  //     {
  //       title: 'Settings',
  //       to: 'apps-ecommerce-settings',
  //     },
  //   ],
  // },
  {
    title: 'Dashboard',
    icon: { icon: 'ri-dashboard-line' },
    to: '/seller/dashboard',
  },
  {
    title: 'Product',
    icon: { icon: 'ri-box-3-line' },
    children: [
      { title: 'All Products', to: '/seller/product' },
      { title: 'Add Product', to: '/seller/product/create' },
      { title: 'Product Features', to: '/product/features' },
      { title: 'Categories', to: '/product/category' },
      { title: 'Tags', to: '/product/tag' },
      { title: 'Brands', to: '/product/brand' },
      { title: 'Coupons', to: '/product/coupon' },
      { title: 'Barcodes', to: '/product/barcode' },
      { title: 'Attributes', to: '/product/attribute' },
      { title: 'Reviews', to: '/product/review' },

    ],
  },
  {
    title: 'Orders',
    icon: { icon: 'ri-order-play-fill' },
    children: [
      { title: 'All Orders', to: 'order' },
      { title: 'Order Status', to: 'order/status' },
      // { title: 'Order Status', to: { name: 'login', params: { id: '9042' } } },
    ],
  },
  {
    title: 'Customer',
    icon: { icon: 'ri-user-line' },
    children: [
      { title: 'List', to: 'apps-ecommerce-customer-list' },
      { title: 'Details', to: { name: 'login', params: { id: 478426 } } },
    ],
  },
  {
    title: 'Referrals',
    icon: { icon: 'ri-reply-all-line' },
    to: 'apps-ecommerce-referrals',
  },
  {
    title: 'Settings',
    icon: { icon: 'ri-settings-4-line' },
    to: 'apps-ecommerce-settings',
  },
  // {
  //   title: 'Academy',
  //   icon: { icon: 'ri-graduation-cap-line' },
  //   children: [
  //     { title: 'Dashboard', to: 'apps-academy-dashboard' },
  //     { title: 'My Course', to: 'apps-academy-my-course' },
  //     { title: 'Course Details', to: 'apps-academy-course-details' },
  //   ],
  // },
  // {
  //   title: 'Logistics',
  //   icon: { icon: 'ri-car-line' },
  //   children: [
  //     { title: 'Dashboard', to: 'apps-logistics-dashboard' },
  //     { title: 'Fleet', to: 'apps-logistics-fleet' },
  //   ],
  // },
  {
    title: 'Email',
    icon: { icon: 'ri-mail-open-line' },
    to: 'apps-email',
  },
  {
    title: 'Chat',
    icon: { icon: 'ri-wechat-line' },
    to: 'apps-chat',
  },
  {
    title: 'Calendar',
    icon: { icon: 'ri-calendar-line' },
    to: '/seller/calendar',
  },
  {
    title: 'Kanban',
    icon: { icon: 'ri-drag-drop-line' },
    to: 'apps-kanban',
  },
  {
    title: 'Invoice',
    icon: { icon: 'ri-bill-line' },
    children: [
      { title: 'List', to: 'apps-invoice-list' },
      { title: 'Preview', to: { name: 'login', params: { id: '5036' } } },
      { title: 'Edit', to: { name: 'login', params: { id: '5036' } } },
      { title: 'Add', to: 'apps-invoice-add' },
    ],
  },
  {
    title: 'Delivery Riders',
    icon: { icon: 'ri-e-bike-2-line' },
    children: [
      { title: 'All Drivers', to: 'apps-user-list' },
      { title: 'Add Driver', to: { name: 'login', params: { id: 21 } } },
    ],
  },
  {
    title: 'Roles & Permissions',
    icon: { icon: 'ri-lock-2-line' },
    children: [
      { title: 'Roles', to: 'apps-roles' },
      { title: 'Permissions', to: 'apps-permissions' },
    ],
  },
  {
    title: 'Pages',
    icon: { icon: 'ri-layout-left-line' },
    children: [
      { title: 'User Profile', to: { name: 'login', params: { tab: 'profile' } } },
      { title: 'Account Settings', to: { name: 'login', params: { tab: 'account' } } },
      { title: 'Pricing', to: 'pages-pricing' },
      { title: 'FAQ', to: 'pages-faq' },
      {
        title: 'Miscellaneous',
        children: [
          { title: 'Coming Soon', to: 'pages-misc-coming-soon', target: '_blank' },
          { title: 'Under Maintenance', to: 'pages-misc-under-maintenance', target: '_blank' },
          { title: 'Page Not Found - 404', to: { name: 'login' }, target: '_blank' },
          { title: 'Not Authorized - 401', to: { name: 'login' }, target: '_blank' },
        ],
      },
    ],
  },
  {
    title: 'Authentication',
    icon: { icon: 'ri-shield-keyhole-line' },
    children: [
      {
        title: 'Login',
        children: [
          { title: 'Login v1', to: 'pages-authentication-login-v1', target: '_blank' },
          { title: 'Login v2', to: 'pages-authentication-login-v2', target: '_blank' },
        ],
      },
      {
        title: 'Register',
        children: [
          { title: 'Register v1', to: 'pages-authentication-register-v1', target: '_blank' },
          { title: 'Register v2', to: 'pages-authentication-register-v2', target: '_blank' },
          { title: 'Register Multi-Steps', to: 'pages-authentication-register-multi-steps', target: '_blank' },
        ],
      },
      {
        title: 'Verify Email',
        children: [
          { title: 'Verify Email v1', to: 'pages-authentication-verify-email-v1', target: '_blank' },
          { title: 'Verify Email v2', to: 'pages-authentication-verify-email-v2', target: '_blank' },
        ],
      },
      {
        title: 'Forgot Password',
        children: [
          { title: 'Forgot Password v1', to: 'pages-authentication-forgot-password-v1', target: '_blank' },
          { title: 'Forgot Password v2', to: 'pages-authentication-forgot-password-v2', target: '_blank' },
        ],
      },
      {
        title: 'Reset Password',
        children: [
          { title: 'Reset Password v1', to: 'pages-authentication-reset-password-v1', target: '_blank' },
          { title: 'Reset Password v2', to: 'pages-authentication-reset-password-v2', target: '_blank' },
        ],
      },
      {
        title: 'Two Steps',
        children: [
          { title: 'Two Steps v1', to: 'pages-authentication-two-steps-v1', target: '_blank' },
          { title: 'Two Steps v2', to: 'pages-authentication-two-steps-v2', target: '_blank' },
        ],
      },
    ],
  },
  {
    title: 'Wizard Examples',
    icon: { icon: 'ri-git-commit-line' },
    children: [
      { title: 'Checkout', to: { name: 'login' } },
      { title: 'Property Listing', to: { name: 'login' } },
      { title: 'Create Deal', to: { name: 'login' } },
    ],
  },
  {
    title: 'Store Settings',
    icon: { icon: 'ri-store-2-line' },
    to: '/seller/product/list',
  },
]
