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
			$.when(ng.contact.fetchContactList(callback)).done( function(contactList) {
				dfd.resolve(resultList);
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