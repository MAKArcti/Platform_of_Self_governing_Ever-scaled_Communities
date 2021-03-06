export default {
  abi: {
    "ABI version": 2,
    version: "2.1",
    header: ["pubkey", "time", "expire"],
    functions: [
      {
        name: "constructor",
        inputs: [],
        outputs: [],
      },
      {
        name: "getVersion",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [{ name: "value0", type: "uint32" }],
      },
      {
        name: "balance",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [{ name: "value0", type: "uint128" }],
      },
      {
        name: "getDetails",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [
          {
            components: [
              { name: "root_address", type: "address" },
              { name: "wallet_public_key", type: "uint256" },
              { name: "owner_address", type: "address" },
              { name: "balance", type: "uint128" },
              { name: "receive_callback", type: "address" },
              { name: "bounced_callback", type: "address" },
              { name: "allow_non_notifiable", type: "bool" },
            ],
            name: "value0",
            type: "tuple",
          },
        ],
      },
      {
        name: "getWalletCode",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [{ name: "value0", type: "cell" }],
      },
      {
        name: "accept",
        inputs: [{ name: "tokens", type: "uint128" }],
        outputs: [],
      },
      {
        name: "allowance",
        inputs: [{ name: "answerId", type: "uint32" }],
        outputs: [
          {
            components: [
              { name: "remaining_tokens", type: "uint128" },
              { name: "spender", type: "address" },
            ],
            name: "value0",
            type: "tuple",
          },
        ],
      },
      {
        name: "approve",
        inputs: [
          { name: "spender", type: "address" },
          { name: "remaining_tokens", type: "uint128" },
          { name: "tokens", type: "uint128" },
        ],
        outputs: [],
      },
      {
        name: "disapprove",
        inputs: [],
        outputs: [],
      },
      {
        name: "transferToRecipient",
        inputs: [
          { name: "recipient_public_key", type: "uint256" },
          { name: "recipient_address", type: "address" },
          { name: "tokens", type: "uint128" },
          { name: "deploy_grams", type: "uint128" },
          { name: "transfer_grams", type: "uint128" },
          { name: "send_gas_to", type: "address" },
          { name: "notify_receiver", type: "bool" },
          { name: "payload", type: "cell" },
        ],
        outputs: [],
      },
      {
        name: "transfer",
        inputs: [
          { name: "to", type: "address" },
          { name: "tokens", type: "uint128" },
          { name: "grams", type: "uint128" },
          { name: "send_gas_to", type: "address" },
          { name: "notify_receiver", type: "bool" },
          { name: "payload", type: "cell" },
        ],
        outputs: [],
      },
      {
        name: "transferFrom",
        inputs: [
          { name: "from", type: "address" },
          { name: "to", type: "address" },
          { name: "tokens", type: "uint128" },
          { name: "grams", type: "uint128" },
          { name: "send_gas_to", type: "address" },
          { name: "notify_receiver", type: "bool" },
          { name: "payload", type: "cell" },
        ],
        outputs: [],
      },
      {
        name: "internalTransfer",
        inputs: [
          { name: "tokens", type: "uint128" },
          { name: "sender_public_key", type: "uint256" },
          { name: "sender_address", type: "address" },
          { name: "send_gas_to", type: "address" },
          { name: "notify_receiver", type: "bool" },
          { name: "payload", type: "cell" },
        ],
        outputs: [],
      },
      {
        name: "internalTransferFrom",
        inputs: [
          { name: "to", type: "address" },
          { name: "tokens", type: "uint128" },
          { name: "send_gas_to", type: "address" },
          { name: "notify_receiver", type: "bool" },
          { name: "payload", type: "cell" },
        ],
        outputs: [],
      },
      {
        name: "burnByOwner",
        inputs: [
          { name: "tokens", type: "uint128" },
          { name: "grams", type: "uint128" },
          { name: "send_gas_to", type: "address" },
          { name: "callback_address", type: "address" },
          { name: "callback_payload", type: "cell" },
        ],
        outputs: [],
      },
      {
        name: "burnByRoot",
        inputs: [
          { name: "tokens", type: "uint128" },
          { name: "send_gas_to", type: "address" },
          { name: "callback_address", type: "address" },
          { name: "callback_payload", type: "cell" },
        ],
        outputs: [],
      },
      {
        name: "setReceiveCallback",
        inputs: [
          { name: "receive_callback_", type: "address" },
          { name: "allow_non_notifiable_", type: "bool" },
        ],
        outputs: [],
      },
      {
        name: "setBouncedCallback",
        inputs: [{ name: "bounced_callback_", type: "address" }],
        outputs: [],
      },
      {
        name: "destroy",
        inputs: [{ name: "gas_dest", type: "address" }],
        outputs: [],
      },
    ],
    data: [
      { key: 1, name: "root_address", type: "address" },
      { key: 2, name: "code", type: "cell" },
      { key: 3, name: "wallet_public_key", type: "uint256" },
      { key: 4, name: "owner_address", type: "address" },
    ],
    events: [],
    fields: [
      { name: "_pubkey", type: "uint256" },
      { name: "_timestamp", type: "uint64" },
      { name: "_constructorFlag", type: "bool" },
      { name: "root_address", type: "address" },
      { name: "code", type: "cell" },
      { name: "wallet_public_key", type: "uint256" },
      { name: "owner_address", type: "address" },
      { name: "balance_", type: "uint128" },
      {
        components: [
          { name: "remaining_tokens", type: "uint128" },
          { name: "spender", type: "address" },
        ],
        name: "allowance_",
        type: "optional(tuple)",
      },
      { name: "receive_callback", type: "address" },
      { name: "bounced_callback", type: "address" },
      { name: "allow_non_notifiable", type: "bool" },
    ],
  },
  image:
    "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",
};
