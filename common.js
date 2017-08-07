//Common file shared through the app, contains services paths, common codes and messages.
const API_DOMAIN = "https://galilee-api.herokuapp.com/";
const BILLS_BASE = API_DOMAIN + "bills";
const EQUIPMENT_BASE = API_DOMAIN + "equipment";
const CLIENTS_BASE = API_DOMAIN + "clients"

const CLOUDINARY_UPLOAD_PRESET = 'default';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/frank18cr/image/upload';

const common = {
	codes : {
		SUCCESS: 0,
		ERROR: 999
	},
	messages: {
		POST_ERROR: "Error in post",
		GET_ERROR: "Error in get",
		SUCCESS: "Success"
	},
	services:{
		GET_BILLS: BILLS_BASE + "/getBills/",
		CREATE_BILL: BILLS_BASE + "/createBill/",
		DELETE_BILL: BILLS_BASE + "/deleteBill/{billId}",
		GET_EQUIPMENT_LIST: EQUIPMENT_BASE + "/getEquipmentList/",
		CREATE_EQUIPMENT: EQUIPMENT_BASE + "/createEquipment/",
		DELETE_EQUIPMENT: EQUIPMENT_BASE + "/deleteEquipment/{equipmentId}",
		CLOUDINARY_UPLOAD_PRESET: 'default',
		CLOUDINARY_UPLOAD_URL: 'https://api.cloudinary.com/v1_1/frank18cr/image/upload',
		CREATE_CLIENT: CLIENTS_BASE + "/createClient/"
	}
}

module.exports = common;