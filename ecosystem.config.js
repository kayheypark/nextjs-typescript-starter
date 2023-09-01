module.exports = {
  apps: [
    {
      name: 'my-app',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'node_modules/next/dist/bin/next',
      watch: false,
      args: 'start',
      env_development: {
        APP_ENV: 'dev',
        PORT: '3001'
      },
      env_staging: {
        APP_ENV: 'stag',
        PORT: '3002'
      },
      env_production: {
        APP_ENV: 'prod',
        PORT: '3003'
      }
    }
  ]
}