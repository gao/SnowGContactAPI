<!-- google contact Dao -->		
	var GoogleContactDao = (function(){
		
		function GoogleContactDao(){};

		// ------ DAO Generic CRUD Interface ------ //
		GoogleContactDao.prototype.getIdName = function(objectType) {
			return "id";
		}
				
		GoogleContactDao.prototype.get = function(objectType,id){
			
			return null;
		};

		GoogleContactDao.prototype.list = function(objectType,opts){
			var dfd = $.Deferred();
			
			var callBack = function(data){
			};
			
			chrome.extension.getBackgroundPage().ng.contact.fetchContactList(callBack).done( function(contactList) {
				dfd.resolve(contactList);
			});
			return dfd.promise();
		};
										
		GoogleContactDao.prototype.create = function(objectType,data){
											
		};
		
		GoogleContactDao.prototype.update = function(objectType,data){
											
		};
							
		GoogleContactDao.prototype.remove = function(objectType,id){
			
		};
		
		// ------ /DAO Generic CRUD Interface ------ //
						
		return GoogleContactDao;

	})();
<!-- /google contact Dao -->