(function(){

	var fileType = 'plain text';
	var createdBy = 'bargitta';
	var summary = function(){
		console.log("Bargitta's files");
	}
	this.bargitta = this.bargitta || {};
	this.bargitta.files = {
		fileType: fileType,
		createdBy: createdBy,
		summary: summary
	};

}).call(global);
module.exports = bargitta;
bargitta.files.summary();