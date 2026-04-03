import HubbenRoomPicker, {
    type HubbenRoomSelection,
    EMPTY_SELECTION,
} from '@/src/components/HubbenRoomPicker'
import type { Route } from './+types/home'
import { useState } from 'react'

export function meta(_: Route.MetaArgs) {
    return [{ title: 'Booking Components Demo' }]
}

export default function Home() {
    const [currentSelection, setCurrentSelection] =
        useState<HubbenRoomSelection>(EMPTY_SELECTION)

    return (
        <main className="flex justify-center align-center">
            <HubbenRoomPicker
                initialValue={currentSelection}
                onChange={value => setCurrentSelection(value)}
            />
            <h2>Current selection</h2>
            <pre>{JSON.stringify(currentSelection, null, 4)}</pre>
        </main>
    )
}
