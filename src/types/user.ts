interface UserObject {
    "id": Number,
    "email": String,
    "type": String,
    "token": String,
    "code": String,
    "ho_code"?: String,
    "personal_info": PersonalInfoObject,
    "extra_data": UserExtraDataObject,
    "permissions": UserPermissionsObject
}

interface PersonalInfoObject {
    "id_document": String,
    "telephone_number"?: String,
    "name": String,
    "last_name"?: String,
    "cellphone": String
}

interface UserExtraDataObject {
    "credits": Number,
    "Configs": [ConfigObjects]
}

interface ConfigObjects {
    "name": String,
    "title": String,
    "type": String,
    "value": String | Number | Boolean,
    "description": String
}

interface UserPermissionsObject {
    "booking": {
        "edit": {
            "public": Boolean,
            "value": Boolean
        },
        "create": {
            "public": Boolean,
            "value": Boolean
        },
        "show": {
            "public": Boolean,
            "value": Boolean
        },
        "delete": {
            "public": Boolean,
            "value": Boolean
        },
        "create_pre": {
            "public": Boolean,
            "value": Boolean
        },
        "fenicio": {
            "public": Boolean,
            "value": Boolean
        },
        "districad": {
            "public": Boolean,
            "value": Boolean
        }
    },
    "client": {
        "edit": {
            "public": Boolean,
            "value": Boolean
        },
        "show": {
            "public": Boolean,
            "value": Boolean
        },
        "delete": {
            "public": Boolean,
            "value": Boolean
        },
        "show_sensitive": {
            "public": Boolean,
            "value": Boolean
        }
    },
    "billing": {
        "create": {
            "public": Boolean,
            "value": Boolean
        },
        "show": {
            "public": Boolean,
            "value": Boolean
        }
    },
    "user": {
        "edit": {
            "public": Boolean,
            "value": Boolean
        },
        "show": {
            "public": Boolean,
            "value": Boolean
        },
        "delete": {
            "public": Boolean,
            "value": Boolean
        },
        "create": {
            "public": Boolean,
            "value": Boolean
        },
        "create_ho": {
            "public": Boolean,
            "value": Boolean
        },
        "show_sensitive": {
            "public": Boolean,
            "value": Boolean
        }
    }

}
