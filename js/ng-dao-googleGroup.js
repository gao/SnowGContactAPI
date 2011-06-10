<!-- google group Dao -->	
	var GoogleGroupDao = (function(){
			
		var groups = getGroups();
			
		function GoogleGroupDao(){};

		// ------ DAO Generic CRUD Interface ------ //
		GoogleGroupDao.prototype.getIdName = function(objectType) {
			return "id";
		}
				
		GoogleGroupDao.prototype.get = function(objectType,id){
			
			return null;
		};

		GoogleGroupDao.prototype.list = function(objectType,opts){
			var dfd = $.Deferred();
			$.when(ng.contact.fetchContactList(callback)).done( function(contactList) {
				dfd.resolve(resultList);
			});
			return dfd.promise();
		};
										
		GoogleGroupDao.prototype.create = function(objectType,data){
											
		};
		
		GoogleGroupDao.prototype.update = function(objectType,data){
											
		};
							
		GoogleGroupDao.prototype.remove = function(objectType,id){
			
		};
		// ------ /DAO Generic CRUD Interface ------ //

		return GoogleGroupDao;

	})();

<!-- google group Dao -->	