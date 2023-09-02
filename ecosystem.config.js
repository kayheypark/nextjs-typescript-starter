module.exports = {
  apps: [
    {
      name: 'web-prod',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'node_modules/next/dist/bin/next',
      watch: false,
      args: 'start',
      env_production: {
        APP_ENV: 'prod',
        PORT: '3003'
      }
    },
    {
      name: 'web-stag',
      exec_mode: 'cluster',
      instances: '2',
      script: 'node_modules/next/dist/bin/next',
      watch: false,
      args: 'start',
      env_staging: {
        APP_ENV: 'stag',
        PORT: '3002'
      }
    },
    {
      name: 'web-dev',
      exec_mode: 'cluster',
      instances: '2',
      script: 'node_modules/next/dist/bin/next',
      watch: false,
      args: 'start',
      env_development: {
        APP_ENV: 'dev',
        PORT: '3001'
      }
    },
  ]
}