module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
<<<<<<< HEAD
      secret: env('ADMIN_JWT_SECRET', 'dd3650385dba72fb0e3300b7e72d5bb9'),
=======
      secret: env('ADMIN_JWT_SECRET', 'e9abef8ee2c528567bbecbd1e0e03e3d'),
>>>>>>> 6040993b123dd19328bbf66a7fcc3c972e59a0e5
    },
  },
});
