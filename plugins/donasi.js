let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *XL:* [${global.ppulsa}]
│ • *Indosat:* [${global.ppulsa2}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${global.pdana}]
❏────
`
const templateButtons = [,
    {index: 1, urlButton: {displayText: '📷 Instagram', url: sig}},
    {index: 2, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 3, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler