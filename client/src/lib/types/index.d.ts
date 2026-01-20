type Activity = {
    id: string
    title: string
    description: string
    category: string
    date: Date
    isCancelled: boolean
    city: string
    venue: string
    latitude: number
    longitude: number
    attendees: Profile[]
    isGoing: boolean
    isHost: boolean
    hostId: string
    hostDisplayName: string
}
type ChatComment={
    id: string
    createdAt: Date
    body: string
    userId: string
    displayName: string
    imageUrl?: string
}
type User={
    id: string
    email: string
    displayName: string
    imageUrl?: string
}

type Profile = {
    id: string
    displayName: string
    bio?: string
    imageUrl?: string
}