module.exports = {
  apps: [
    {
      name: 'watch-twa-frontend',
      cwd: '/opt/websites/twa.moditime-watch.ru/frontend-sveltekit',
      script: 'build/index.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: '3113',
        ORIGIN: 'https://twa.moditime-watch.ru',
        PUBLIC_BACKEND_URL: 'https://twa.moditime-watch.ru'
      },
      error_file: '/opt/websites/twa.moditime-watch.ru/logs/frontend-error.log',
      out_file: '/opt/websites/twa.moditime-watch.ru/logs/frontend-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },
    {
      name: 'watch-twa-backend',
      cwd: '/opt/websites/twa.moditime-watch.ru/backend-expressjs',
      script: 'dist/index.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: '3112'
      },
      error_file: '/opt/websites/twa.moditime-watch.ru/logs/backend-error.log',
      out_file: '/opt/websites/twa.moditime-watch.ru/logs/backend-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    },
    {
      name: 'watch-twa-bot',
      cwd: '/opt/websites/twa.moditime-watch.ru/telegram-bot',
      script: 'dist/index.js',
      instances: 1,
      exec_mode: 'fork',
      autorestart: false,  // Disabled until bot is configured
      env: {
        NODE_ENV: 'production'
      },
      error_file: '/opt/websites/twa.moditime-watch.ru/logs/bot-error.log',
      out_file: '/opt/websites/twa.moditime-watch.ru/logs/bot-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
};
