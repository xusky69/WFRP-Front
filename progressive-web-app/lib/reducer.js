// export const loadState = (localStorage) => ({
//     campaign_uuid: localStorage.getItem('campaign_uuid') || null
// })

// export function reducer(state, action) {
//     switch (action.type) {
//         case 'loadState':
//             return {...loadState()}
//         case 'clearLocalStorage':
//             localStorage.clear()
//             return { ...state}
//         case 'setCampaignId':
//             return { ...state, campaign_uuid: action.payload }
//         default:
//             return {...state}
//     }
// }