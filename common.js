//Common file shared through the app, contains services paths, common codes and messages.
const API_DOMAIN = "https://galilee-api.herokuapp.com/";
const BILLS_BASE = API_DOMAIN + "bills";

const common = {
	totalStars: 10,
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
		DELETE_BILL: BILLS_BASE + "/deleteBill/{billId}"
	}
}

module.exports = common;