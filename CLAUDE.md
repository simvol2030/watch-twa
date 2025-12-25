# Watch TWA - Telegram Web App

**URL:** https://twa.moditime-watch.ru
**Тип:** Telegram Mini App система лояльности
**Workflow:** см. `CLAUDE.local.md`

---

## Пути проекта

| Среда | Путь |
|-------|------|
| **WSL** | `/home/solo18/dev/watch/project/telegram-web-app` |
| **Windows** | `\\wsl$\Ubuntu\home\solo18\dev\watch\project\telegram-web-app` |
| **GitHub** | https://github.com/simvol2030/watch-twa |
| **GitHub ветка** | `main` (единственная) |
| **Сервер** | `/opt/websites/twa.moditime-watch.ru` |

---

## PM2 (Production)

| Процесс | Порт |
|---------|------|
| `watch-twa-frontend` | 3113 |
| `watch-twa-backend` | 3112 |
| `watch-twa-bot` | - |

```bash
source ~/.nvm/nvm.sh && pm2 restart watch-twa-frontend watch-twa-backend watch-twa-bot
```

---

## Доступы

**Admin Panel:** https://twa.moditime-watch.ru/login
- Email: `admin@example.com`
- Password: `Admin123!@#$`

**Telegram Bot:** (настроить позже)
- Token: `TODO`
- Группа заказов: `TODO`

**Database:** SQLite → `/opt/websites/twa.moditime-watch.ru/data/db/sqlite/app.db`

---

## Структура

```
watch-twa/
├── frontend-sveltekit/   # SvelteKit 2.x + Svelte 5
├── backend-expressjs/    # Express.js REST API
├── telegram-bot/         # grammy bot
└── data/db/sqlite/       # SQLite DB
```

---

## Tech Stack

- **Frontend:** SvelteKit 2.x, Svelte 5, TypeScript, Telegram WebApp SDK
- **Backend:** Express.js, Drizzle ORM, SQLite, JWT
- **Bot:** grammy
- **DevOps:** PM2, Nginx, SSH-MCP, GitHub MCP

---

## Deploy

```bash
# На сервере (через SSH MCP)
cd /opt/websites/twa.moditime-watch.ru && git pull origin main
cd backend-expressjs && npm install && npm run build
cd ../frontend-sveltekit && npm install && npm run build
source ~/.nvm/nvm.sh && pm2 restart watch-twa-frontend watch-twa-backend
```

---

## Uploads (в .gitignore)

Путь: `/opt/websites/twa.moditime-watch.ru/backend-expressjs/uploads/`

Директории: branding, products, stories, promotions, stores, campaigns, categories, feed, welcome-messages

---

## НЕ ПУТАТЬ с другими проектами на сервере

| | Этот проект | moditime-watch |
|-|-------------|----------------|
| **URL** | twa.moditime-watch.ru | moditime-watch.ru |
| **Сервер** | `/opt/websites/twa.moditime-watch.ru` | `/opt/websites/moditime-watch.ru` |
| **GitHub** | `watch-twa` | - |
| **PM2** | `watch-twa-*` | `moditime-*` |
| **Порты** | 3112, 3113 | 3000, 4173 |
