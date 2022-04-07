import axios from "axios"
import qs from 'qs'

export const processDate = (date) => (
    date.slice(0, 16).replaceAll('-', '/').replaceAll('T', ' ')
)

export async function getJournalData({ campaign, username, password, apiUrl }) {
    const campaignQueryString = qs.stringify({
        campaign: campaign,
    })
    const response = await axios.get(`${apiUrl}journal-entries/?${campaignQueryString}`, { auth: { username, password } })
    const journalEntries = response.data.map((item) => ({
        name: String(item.name),
        entry_text: String(item.entry_text),
        creation_date: String(item.creation_date)
    }))

    return journalEntries
}

export async function getCampaignData({ campaign, username, password, apiUrl }) {
    const response = await axios.get(`${apiUrl}campaigns/?${campaign}`, { auth: { username, password } })
    if (response.data.length > 0) {
        return {
            master: String(response.data[0].master),
            user: username,
            cover_image: String(response.data[0].cover_image),
            name: String(response.data[0].name),
            description: String(response.data[0].description)
        }
    } else {
        return {
            master: 'No dungeon master campaign data was found',
            user: username,
            cover_image: 'No image data was found',
            name: 'No name campaign data was found',
            description: 'No description campaign data was found'
        }
    }
}

export async function getPartyData({ campaign, username, password, apiUrl }) {
    const partyQueryString = qs.stringify({
        campaign: campaign,
    })
    const response = await axios.get(`${apiUrl}playable-characters/?${partyQueryString}`, { auth: { username, password } })
    return response.data.map((item) => (item))
}

export async function getItemData({ character, username, password, apiUrl }) {
    const queryString = qs.stringify({
        character: character.uuid,
    })
    const response = await axios.get(`${apiUrl}items/?${queryString}`, { auth: { username, password } })
    return response.data
}

export async function getWeaponData({ character, username, password, apiUrl }) {
    const queryString = qs.stringify({
        character: character.uuid,
    })
    const response = await axios.get(`${apiUrl}weapons/?${queryString}`, { auth: { username, password } })
    return response.data
}

export async function getArmorData({ character, username, password, apiUrl }) {
    const queryString = qs.stringify({
        character: character.uuid,
    })
    const response = await axios.get(`${apiUrl}armor/?${queryString}`, { auth: { username, password } })
    return response.data
}

export async function getTalentData({ character, username, password, apiUrl }) {
    const queryString = qs.stringify({
        character: character.uuid,
    })
    const response = await axios.get(`${apiUrl}talents/?${queryString}`, { auth: { username, password } })
    return response.data
}

export async function getAdvancedSkillData({ character, username, password, apiUrl }) {
    const queryString = qs.stringify({
        character: character.uuid,
    })
    const response = await axios.get(`${apiUrl}advanced-skills/?${queryString}`, { auth: { username, password } })
    return response.data
}

export async function getSpellData({ character, username, password, apiUrl }) {
    const queryString = qs.stringify({
        character: character.uuid,
    })
    const response = await axios.get(`${apiUrl}spells/?${queryString}`, { auth: { username, password } })
    return response.data
}

export async function getCreatureData({ username, password, apiUrl }) {

    const response = await axios.get(`${apiUrl}creatures/`, { auth: { username, password } })
    return response.data
}

export async function getCreatureTraitData({ username, password, apiUrl }) {

    const response = await axios.get(`${apiUrl}creature-traits/`, { auth: { username, password } })
    return response.data
}

export async function getMemoriesData({ campaign, username, password, apiUrl }) {
    const partyQueryString = qs.stringify({
        campaign: campaign,
    })
    const response = await axios.get(`${apiUrl}memories/?${partyQueryString}`, { auth: { username, password } })
    return response.data.map((item) => (item))
}