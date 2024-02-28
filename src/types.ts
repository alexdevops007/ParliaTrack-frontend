// Interface OrderOfBusiness
export interface OrderOfBusiness {
  _id: string
  title: string
  description: string
}

export interface OrderOfBusinessData {
  title: string
  description: string
}
// Interface Documents
export interface Document {
  _id: string
  title: string
  description: string
  filePath: string
}

export interface DocumentData {
  title: string
  description: string
  filePath: string
}
// Interface Minutes
export interface Minutes {
  _id: string
  meetingTitle: string
  minutesText: string
  annotations: string[]
  isPublished: boolean
}

export interface MinutesData {
  meetingTitle: string
  minutesText: string
  annotations?: string[]
}
// Interface Debate
export interface Debate {
  _id: string
  topic: string
  notes: string
  keyMoments: string[]
}

export interface DebateData {
  topic: string
  notes: string
  keyMoments?: string[]
}
// Interface Participant
export interface Participant {
  _id: string
  name: string
  position: string
  party: string
  bio: string
}

export interface ParticipantData {
  name: string
  position: string
  party: string
  bio: string
}
// Interface Event
export interface Event {
  _id: string
  title: string
  description: string
  date: string
}

export interface EventData {
  title: string
  description: string
  date: string
}
