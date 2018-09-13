const mutations = {
  saveOrigin (state, origin) {
    state.origin = origin
  },
  saveToken (state, token) {
    state.token = token
  },
  savePhone (state, phone) {
    state.phone = phone
  },
  saveName (state, name) {
    state.name = name
  },
  saveId (state, id) {
    state.id = id
  },
  saveOid (state, oid) {
    state.oid = oid
  },
  savePaySet (state, paySet) {
    state.paySet = paySet
  },
  // 保存选择的发布对象
  savePublishObject (state, publishObject) {
    state.publishObject.push(publishObject)
  },
  clearPublishObject (state, publishObject) {
    state.publishObject = publishObject
  },
  // 保存借款用途
  savePurpose (state, purpose) {
    state.purpose = purpose
  },
  // 保存银卡卡
  saveBankCard (state, card) {
    state.card = card
  },
  savePayedMoney (state, payedMoney) {
    state.payedMoney = payedMoney
  },
  saveGapMoney (state, gapMoney) {
    state.gapMoney = gapMoney
  }
}
export default mutations
