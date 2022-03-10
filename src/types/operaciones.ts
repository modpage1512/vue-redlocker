interface BookingTransferObject {
    "location"?: TransferLocationObject,
    "client": TransferClientObject,
    "size"?: TransferSizeObject,
    "fenicio"?: {
        "order_id"?: Number
    },
    "status": {
        "id"?: Number,
    }
    "districad"?: Boolean,
    "special_insert_code"?: String,
    "special_withdraw_code"?: String,
    "expiration_date": Date
}

interface TransferLocationObject {
    "id"?: Number
}

interface TransferClientObject {
    "email"?: String,
    "phone_number"?: String,
    "document"?: String,
    "country"?: String,
    "description": String
}

interface TransferSizeObject {
    "id"?: Number
}