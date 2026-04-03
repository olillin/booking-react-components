import { useEffect, useState, type ReactNode } from 'react'

export interface HubbenRoomSelection {
    storhubben: boolean
    grupprummet: boolean
    ctc: boolean
}

export const EMPTY_SELECTION: HubbenRoomSelection = {
    storhubben: false,
    grupprummet: false,
    ctc: false,
}

export interface HubbenRoomPickerProps {
    initialValue?: HubbenRoomSelection
    onChange?: (value: HubbenRoomSelection) => void
}

export default function HubbenRoomPicker({
    initialValue,
    onChange,
}: HubbenRoomPickerProps) {
    const [selected, setSelected] = useState<HubbenRoomSelection>(
        initialValue ?? EMPTY_SELECTION
    )

    const toggleStorhubben = () => {
        setSelected({
            ...selected,
            storhubben: !selected.storhubben,
        })
    }
    const toggleGrupprummet = () => {
        setSelected({
            ...selected,
            grupprummet: !selected.grupprummet,
        })
    }
    const toggleCtc = () => {
        setSelected({
            ...selected,
            ctc: !selected.ctc,
        })
    }

    useEffect(() => {
        if (onChange) {
            onChange(selected)
        }
    }, [selected, onChange])

    return (
        <div className="hubben-room-picker">
            <HubbenRender
                selected={selected}
                onClickStorhubben={toggleStorhubben}
                onClickGrupprummet={toggleGrupprummet}
                onClickCtc={toggleCtc}
                onClickStudierummet={() => {
                    console.warn('Studierummet kan inte bokas!')
                }}
            />

            <div className="selector-panel">
                <label htmlFor="selectStorhubben">Storhubben</label>
                <input
                    type="checkbox"
                    name="selectStorhubben"
                    checked={selected.storhubben}
                    readOnly
                    onClick={toggleStorhubben}
                />

                <label htmlFor="selectGrupprummet">Grupprummet</label>
                <input
                    type="checkbox"
                    name="selectGrupprummet"
                    checked={selected.grupprummet}
                    readOnly
                    onClick={toggleGrupprummet}
                />

                <label htmlFor="selectCtc">Ctc</label>
                <input
                    type="checkbox"
                    name="selectCtc"
                    checked={selected.ctc}
                    readOnly
                    onClick={toggleCtc}
                />
            </div>
        </div>
    )
}

interface HubbenRenderProps {
    selected: HubbenRoomSelection
    onClickStorhubben: () => void
    onClickGrupprummet: () => void
    onClickCtc: () => void
    onClickStudierummet: () => void
}

/** Inlined and heavily modified version of hubben.svg in TSX. */
function HubbenRender({
    selected,
    onClickStorhubben,
    onClickGrupprummet,
    onClickCtc,
    onClickStudierummet,
}: HubbenRenderProps): ReactNode {
    const theme = {
        storhubben: '#1098bc',
        grupprummet: '#e28413',
        ctc: '#ac2e4d',
        unselected: '#ffffff',
        disabled: '#4a4a4a',
        border: '#000000',
    }

    return (
        <svg
            version="1.1"
            width="200"
            height="300"
            viewBox="0 0 13.153574 26.15"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                style={{
                    display: 'inline',
                    fill: theme.disabled,
                }}
                d="M 9.500426,16 H 15 v 6 H 9.500426 Z"
                onClick={onClickStudierummet}
            />
            <path
                d="M 2,0 V 4.9960937 H 7 7.00391 V 5 10.003906 H 7 V 16 21.998047 L 4,22 v 4 H 9.500426 V 22 16 H 15 V 5 H 9.500426 V 3 H 7 V 0 Z M 7,10.003906 V 5 H 2 V 4.99609 H 1.99609 v 5.007812 z"
                style={{
                    display: 'inline',
                    fill: selected.storhubben
                        ? theme.storhubben
                        : theme.unselected,
                }}
                onClick={onClickStorhubben}
            />
            <path
                d="M 10,0 7,0.01757813 V 3 H 9.500426 V 5 H 15 V 0 Z"
                style={{
                    display: 'inline',
                    fill: selected.grupprummet
                        ? theme.grupprummet
                        : theme.unselected,
                }}
                onClick={onClickGrupprummet}
            />
            <path
                style={{
                    display: 'inline',
                    fill: selected.ctc ? theme.ctc : theme.unselected,
                }}
                d="M 9.500426,22 H 15 v 4 H 9.500426 Z"
                onClick={onClickCtc}
            />
            <rect
                style={{
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                    strokeLinejoin: 'miter',
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                    paintOrder: 'normal',
                }}
                width="5"
                height="5"
                x="2"
                y="0"
            />
            <rect
                style={{
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                    strokeLinejoin: 'miter',
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                    paintOrder: 'normal',
                }}
                width="2.5004261"
                height="2"
                x="7"
                y="3"
            />
            <path
                d="M 10,0 7,0.01757813 V 3 H 9.500426 V 5 H 15 V 0 Z"
                style={{
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                    strokeLinejoin: 'miter',
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                    paintOrder: 'normal',
                }}
            />
            <rect
                style={{
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                    strokeLinejoin: 'miter',
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                    paintOrder: 'normal',
                }}
                width="5.4995742"
                height="6"
                x="9.5004263"
                y="16"
            />
            <rect
                style={{
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                    strokeLinejoin: 'miter',
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                    paintOrder: 'normal',
                }}
                width="5.4995737"
                height="4"
                x="9.5004263"
                y="22"
            />
            <path
                d="m 7,5 v 11 5.998047 L 4,22 l -10e-8,4 5.5004261,0 V 22 16 H 15 V 5 Z"
                style={{
                    display: 'inline',
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                }}
            />
            <path
                d="m 6.0004261,26 -1e-7,-1 H 7 l -1e-7,-1.5 H 4"
                style={{
                    display: 'inline',
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                }}
            />
            <rect
                style={{
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                    strokeLinejoin: 'miter',
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                    paintOrder: 'normal',
                }}
                width="5.0071483"
                height="5.0071478"
                x="1.996426"
                y="4.9964261"
            />
            <path
                style={{
                    display: 'inline',
                    fill: 'none',
                    stroke: theme.border,
                    strokeWidth: 0.15,
                    paintOrder: 'normal',
                }}
                d="M 15,7.4999999 9.421426,7.51"
            />
        </svg>
    )
}
