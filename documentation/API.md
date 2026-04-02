# API

## Endpoints

- GET /api/health
- GET /api/analytics/dashboard
- GET /api/rooms
- GET /api/rooms/:roomId
- POST /api/availability/check
- GET /api/bookings
- POST /api/bookings
- GET /api/payments
- POST /api/payments/intent
- GET /api/reviews
- POST /api/newsletter
- POST /api/contact

## Example Booking Payload

{
  "selectedRoomId": "presidential-suite",
  "checkIn": "2026-06-14",
  "checkOut": "2026-06-17",
  "guests": 2,
  "rooms": 1,
  "guest": {
    "name": "Isabella Hart",
    "email": "isabella@example.com"
  },
  "currency": "USD",
  "paymentOption": "deposit",
  "totalAmount": 6400
}
