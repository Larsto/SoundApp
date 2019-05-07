export const selectSoundType = (soundType) => {
    return {
        type: 'select_soundType',
        payload: soundType
    }
}