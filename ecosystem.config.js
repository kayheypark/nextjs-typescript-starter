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
        APP_ENV: 'dev'
      },
      env_production: {
        APP_ENV: 'prod'
      }
    }
  ]
}