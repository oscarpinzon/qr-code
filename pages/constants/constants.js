const USERS = [
  {
    userID: 'user1',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    registeredEvents: ['event1', 'event2'],
  },
  {
    userID: 'user2',
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    registeredEvents: ['event1'],
  },
  // ... more users
];

// Constants for Events collection
const EVENTS = [
  {
    eventID: 'event1',
    eventName: 'Tech Conference 2023',
    eventDate: new Date('2023-11-25T09:00:00'),
    attendees: ['user1', 'user2'],
  },
  {
    eventID: 'event2',
    eventName: 'Webinar on Next.js',
    eventDate: new Date('2023-12-01T12:00:00'),
    attendees: ['user1'],
  },
  // ... more events
];

// Constants for Registrations collection
const REGISTRATIONS = [
  {
    registrationID: 'reg1',
    userID: 'user1',
    eventID: 'event1',
    qrCode: 'qrcode1',
    checkedIn: false,
    swagReceived: false,
    foodReceived: false,
    specialGiftReceived: false,
  },
  {
    registrationID: 'reg2',
    userID: 'user2',
    eventID: 'event1',
    qrCode: 'qrcode2',
    checkedIn: false,
    swagReceived: false,
    foodReceived: false,
    specialGiftReceived: false,
  },
  // ... more registrations
];

// Exporting constants if you're using modules
export { USERS, EVENTS, REGISTRATIONS };