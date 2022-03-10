interface Reservas {

    "id": Number,
    "insert_code": String,
    "status": StatusObject,
    "location": PartialLocationObject | FullLocationObject,
    "client": PartialClientObject | FullClientObject,
    "size": PartialSizeObject,
    "fenicio": {
        "order_id"?: Number
    },
    "districad": {
        "token"?: String,
        "status"?: String,
        "notes"?: String
    },
    "special_insert_code"?: String,
    "special_withdraw_code"?: String,
    "created_at": Date,
    "updated_at": Date

}

interface StatusObject {
    "id": Number,
    "name": String
}

interface PartialLocationObject {
    "id": Number,
    "address": String
}

interface FullLocationObject {
    "id": Number,
    "address": String,
    "availabilty": [AvailabilityObjects],
    "latitude": Number,
    "longitude": Number,
    "street": String,
    "door_number": String,
    "city": CityObject,
    "country": String
}

interface PartialClientObject {
    "id": Number,
    "email"?: String,
    "phone_number"?: String,
    "document"?: String,
    "country": String,
    "description": String
    "created_at": Date
    "updated_at": Date,
}

interface FullClientObject {
    "id": Number,
    "email"?: string,
    "phone_number"?: string,
    "document"?: String,
    "country": String,
    "booking_code": String,
    "description": String,
    "created_at": Date,
    "updated_at": Date,
}

interface PartialSizeObject {
    "id": Number,
    "name": String
}

interface FullSizeObject {
    "id": Number,
    "name": String,
    "width": Number,
    "height": Number,
    "depth": Number
}

interface AvailabilityObjects {
    "size": PartialSizeObject | FullSizeObject
}

interface CityObject {
    "id": Number,
    "name": String
}

