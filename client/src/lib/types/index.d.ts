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
}

type User={
    id: string
    email: string
    displayName: string
    imageUrl?: string
}

