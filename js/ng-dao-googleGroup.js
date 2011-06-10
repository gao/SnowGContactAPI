<!-- google group Dao -->	
	var GoogleGroupDao = (function(){
			
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
			
			chrome.extension.getBackgroundPage().ng.contact.fetchGroupList(function(){}).done( function(groupList) {
				dfd.resolve(groupList);
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