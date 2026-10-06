// VoiceIQ settings. Edit ONLY these lines, never index.html.
window.VQ_CONFIG = {
  // 1) Your n8n address. It must start with https:// and end with /webhook. Changes whenever the tunnel changes.
  webhookBase: 'https://draft-suggestion-viewing-embassy.trycloudflare.com/webhook',

  // 2) Shown to customers in Terms & Privacy and on receipts (leave '' until you have them;
  //    Settings -> Support is used as the fallback).
  supportEmail: '',
  businessName: 'VoiceIQ',
  registeredAddress: '',
  kraPin: '',                 // optional: printed on receipts if you set it (ask your accountant)

  // 3) Set to true AFTER a Kenyan lawyer has reviewed the Terms & Privacy page (this hides the admin-only draft box).
  policiesReviewed: false
};
