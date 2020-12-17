
			
			/**
			 *
			 * Generated Nx.Api calls
			 *
			 */
			Nx = Nx || {};
			Nx.Api = Nx.Api || {};
		
							Nx.Api.Users = Nx.Api.Users || {};
						
							Nx.Api.Users.php = Nx.Api.Users.php || {};
						
				Nx.Api.Users.php = {
					url : "/Users.php",
			
						login : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								email : "",  //the email address user handle
								password : "",  //the password of the user
								domainId : "",  //the domain that the user is login into
							},data);
						    
						var callUrl = this.url + "/login";
						Nx.Api.call(callUrl,data,callback);
					},
					
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								email : "",  //The user's email
								password : "",  //(default=null) The user's password
								role : "",  //"1 | 10 | 100" <br />1 = superadmin, 10 = admin, 100 = analyst, will refuse to create a user with greater priviledge than it's own
								lang : "",  //(default=en) optional language "en | fr"
								userName : "",  //(default=null) optional user name
								company : "",  //(default=null) optional company
								phone : "",  //(default=null) optional phone number
								domainId : "",  //(default=null) optional if set, an api key will be created for the domainId
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						remove : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //The Id of the user to remove
							},data);
						    
						var callUrl = this.url + "/remove";
						Nx.Api.call(callUrl,data,callback);
					},
					
						createApiKey : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //the user to create the api key for
								domainId : "",  //the App Domain to create the api key for
								status : "",  //(default=1) the status of the key
							},data);
						    
						var callUrl = this.url + "/createApiKey";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modifyApiKey : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //the id of the user
								domainId : "",  //the domain of the associated key
								status : "",  //the status of the api key
							},data);
						    
						var callUrl = this.url + "/modifyApiKey";
						Nx.Api.call(callUrl,data,callback);
					},
					
						removeApiKey : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //the id of the user
								domainId : "",  //the domain of the associated key
							},data);
						    
						var callUrl = this.url + "/removeApiKey";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getApiKey : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //the user Id
								domainId : "",  //the domainId
							},data);
						    
						var callUrl = this.url + "/getApiKey";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								id : "",  //(default=null) optional The user's id
								email : "",  //(default=null) optional The user's email
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								domainId : "",  //(default=null) the id of the domain to filter
								all : "",  //(default=true) if domainId provided, performs outer join
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modify : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								id : "",  //user Id
								email : "",  //(default=null) optional user email
								password : "",  //(default=null) optional user password
								role : "",  //(default=null) optional role "1 | 10 | 100" <br />1 = superadmin, 10 = admin, 100 = analyst
								lang : "",  //(default=null) optional language "en | fr"
								userName : "",  //(default=null) optional user name
								company : "",  //(default=null) optional company
								phone : "",  //(default=null) optional phone number
								tos : "",  //(default=null) optional Terms of Service 1 or 0
							},data);
						    
						var callUrl = this.url + "/modify";
						Nx.Api.call(callUrl,data,callback);
					},
					
						addToGroup : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //the id of the user
								groupId : "",  //the id of the group
							},data);
						    
						var callUrl = this.url + "/addToGroup";
						Nx.Api.call(callUrl,data,callback);
					},
					
						removeFromGroup : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //the id of the user
								groupId : "",  //the id of the group
							},data);
						    
						var callUrl = this.url + "/removeFromGroup";
						Nx.Api.call(callUrl,data,callback);
					},
					
						addPermission : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //(default=null) the id of the user
								projectId : "",  //the id of the project
								groupId : "",  //(default=null) the id of the group
							},data);
						    
						var callUrl = this.url + "/addPermission";
						Nx.Api.call(callUrl,data,callback);
					},
					
						removePermission : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //(default=null) the id of the user
								projectId : "",  //the id of the project
								groupId : "",  //(default=null) the id of the group
							},data);
						    
						var callUrl = this.url + "/removePermission";
						Nx.Api.call(callUrl,data,callback);
					},
					
						createGroup : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								groupName : "",  //the name of the group to be created
							},data);
						    
						var callUrl = this.url + "/createGroup";
						Nx.Api.call(callUrl,data,callback);
					},
					
						deleteGroup : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								groupId : "",  //the id of the group to be deleted
							},data);
						    
						var callUrl = this.url + "/deleteGroup";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getPermissionList : function(data,callback){
					    
						var callUrl = this.url + "/getPermissionList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getGroupList : function(data,callback){
					    
						var callUrl = this.url + "/getGroupList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getUsersGroups : function(data,callback){
					    
						var callUrl = this.url + "/getUsersGroups";
						Nx.Api.call(callUrl,data,callback);
					},
					
						renameGroup : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								groupId : "",  //the id of the group to be renamed
								groupName : "",  //the new name of the group
							},data);
						    
						var callUrl = this.url + "/renameGroup";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Download = Nx.Api.Download || {};
						
							Nx.Api.Download.php = Nx.Api.Download.php || {};
						
				Nx.Api.Download.php = {
					url : "/Download.php",
			
				}
			
							Nx.Api.Toad = Nx.Api.Toad || {};
						
							Nx.Api.Toad.php = Nx.Api.Toad.php || {};
						
				Nx.Api.Toad.php = {
					url : "/Toad.php",
			
						getStatus : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to duplicate
							},data);
						    
						var callUrl = this.url + "/getStatus";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getPublisherSeedsFromActorByQuery : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to duplicate
							},data);
						    
						var callUrl = this.url + "/getPublisherSeedsFromActorByQuery";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Alert = Nx.Api.Alert || {};
						
							Nx.Api.Alert.php = Nx.Api.Alert.php || {};
						
				Nx.Api.Alert.php = {
					url : "/Alert.php",
			
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //the alert id
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getRecordedAlerts : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
							},data);
						    
						var callUrl = this.url + "/getRecordedAlerts";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getDocumentsForRecordedAlerts : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								detected_alert_id : "",  //The detected_alert_id
							},data);
						    
						var callUrl = this.url + "/getDocumentsForRecordedAlerts";
						Nx.Api.call(callUrl,data,callback);
					},
					
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertName : "",  //The name of the alert
								rule : "",  //A filter description
								threshold : "",  //(default=0) The minimum amount of data to be received to say there is an alert, 0 mean everything is an alert
								activated : "",  //(default=0) If the alert is activated or not
								interval : "",  //(default=0) Interval in seconds
								send_email : "",  //(default=0) Does the alert send email notifications?
								search_terms_included : "",  //(default=0) Does the alert send email notifications containing the search terms?
								alertEmailList : "",  //(default="") List of emails to send the notification to
								apply_to_all : "",  //(default="false") Apply $send_email $search_terms_included $alertEmailList to all alerts
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						delete : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The alert id to modify
							},data);
						    
						var callUrl = this.url + "/delete";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modify : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The alert id to modify
								alertName : "",  //(default=null) The name of the alert
								rule : "",  //(default=null) rule A filter description
								threshold : "",  //(default=0) The minimum amount of data to be received to say there is an alert, 0 mean everything is an alert
								activated : "",  //(default=0) If the alert is activated or not
								interval : "",  //(default=0) Interval in seconds
								send_email : "",  //(default=0) Does the alert send email notifications?
								search_terms_included : "",  //(default=0) Does the alert send email notifications containing the search terms?
								alertEmailList : "",  //(default="") List of emails to send the notification to
								apply_to_all : "",  //(default="false") Apply $send_email $search_terms_included $alertEmailList to all alerts
							},data);
						    
						var callUrl = this.url + "/modify";
						Nx.Api.call(callUrl,data,callback);
					},
					
						check : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The alert id to modify
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/check";
						Nx.Api.call(callUrl,data,callback);
					},
					
						testEmail : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The alert id to modify
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/testEmail";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.CaptureApi = Nx.Api.CaptureApi || {};
						
							Nx.Api.CaptureApi.php = Nx.Api.CaptureApi.php || {};
						
				Nx.Api.CaptureApi.php = {
					url : "/CaptureApi.php",
			
						subscribeProject : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //Project Id of the project to subscribe to his stream.
								searchId : "",  //(default=0) The search id of a new search to subscribe to.
								backfillDate : "",  //(default=null) The timestamp from which to backfill data; if it is more than 21 days before the start, it will be reduced to 21 days before the current time
							},data);
						    
						var callUrl = this.url + "/subscribeProject";
						Nx.Api.call(callUrl,data,callback);
					},
					
						unsubscribeProject : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //Project Id of the project to subscribe to his stream.
							},data);
						    
						var callUrl = this.url + "/unsubscribeProject";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Twitter = Nx.Api.Twitter || {};
						
							Nx.Api.Twitter.php = Nx.Api.Twitter.php || {};
						
				Nx.Api.Twitter.php = {
					url : "/Twitter.php",
			
						callApi : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								method : "",  //{{validation=/^(get|GET|post|POST)$/}}{{error=GET or POST only}} either GET or POST
								url : "",  //the url to call. only the path segment, not domain
								params : "",  //{{validation=validateJSON}} {{error=params are not valid JSON}} a JSON array of data to pass
							},data);
						    
						var callUrl = this.url + "/callApi";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Instance = Nx.Api.Instance || {};
						
							Nx.Api.Instance.php = Nx.Api.Instance.php || {};
						
				Nx.Api.Instance.php = {
					url : "/Instance.php",
			
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  //The name of the db instance
								label : "",  //The label of the db instance
								hostname : "",  //{{default=null}} The hostname of the SQL server receiving the instance. Required in staging/production.
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						createAsync : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  //The name of the db instance
								label : "",  //The label of the db instance
								hostname : "",  //(default=null) The hostname of the SQL server receiving the instance, the default value is null which will add the instance to the default content server
							},data);
						    
						var callUrl = this.url + "/createAsync";
						Nx.Api.call(callUrl,data,callback);
					},
					
						update : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  //The name of the db instance
								label : "",  //The label of the db instance
								hostname : "",  //(default = "") The hostname of the SQL server receiving the instance, the default value is "" which will add the instance to the default content server
							},data);
						    
						var callUrl = this.url + "/update";
						Nx.Api.call(callUrl,data,callback);
					},
					
						grantAccess : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //The id of the user to add access
								instanceId : "",  //The id of the instance to add access
								domainId : "",  //The id of the domain for the instance/user binding
							},data);
						    
						var callUrl = this.url + "/grantAccess";
						Nx.Api.call(callUrl,data,callback);
					},
					
						removeAccess : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								userId : "",  //The id of the user to remove access
								instanceId : "",  //The id of the instance to remove access
								domainId : "",  //The id of the domain for the instance/user binding
							},data);
						    
						var callUrl = this.url + "/removeAccess";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								domainId : "",  //(default=null) this must be set for anyone who is not a superadministrator
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getAccessList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								domainId : "",  //(default=null) domain id to filter against
							},data);
						    
						var callUrl = this.url + "/getAccessList";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Test = Nx.Api.Test || {};
						
							Nx.Api.Test.php = Nx.Api.Test.php || {};
						
				Nx.Api.Test.php = {
					url : "/Test.php",
			
				}
			
							Nx.Api.Home = Nx.Api.Home || {};
						
							Nx.Api.Home.php = Nx.Api.Home.php || {};
						
				Nx.Api.Home.php = {
					url : "/Home.php",
			
				}
			
							Nx.Api.Export = Nx.Api.Export || {};
						
							Nx.Api.Export.php = Nx.Api.Export.php || {};
						
				Nx.Api.Export.php = {
					url : "/Export.php",
			
						download : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to process
								fileId : "",  //This is the ID the file to download
								fileName : "",  //This is the name of the file for download
							},data);
						    
						var callUrl = this.url + "/download";
						Nx.Api.call(callUrl,data,callback);
					},
					
						adminDownload : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to process
								fileId : "",  //This is the ID the file to download
							},data);
						    
						var callUrl = this.url + "/adminDownload";
						Nx.Api.call(callUrl,data,callback);
					},
					
						reportAsCsv : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to process
								reportType : "",  //The report type to transfer into CSV and download
							},data);
						    
						var callUrl = this.url + "/reportAsCsv";
						Nx.Api.call(callUrl,data,callback);
					},
					
						data : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to process
								format : "",  //This is the format in which the file will be generated. Support "xlsx", "codingxlsx", "socialmeasurement", "raw" and "csv".
								start : "",  //(default = 0) The starting index of posts to export. Putting 0 means to start the export at the very first row.
								limit : "",  //(default = 0) The limit of posts to export. Putting 0 means to export all the data.
								options : "",  //(default = null) A json associative array containing keypair of custom settings for specific needs of exports
								filterDescription : "",  //(default=false) filter description as the filter, but for immediate application on top of the current filter
								//for uploads
							
								"formId":"", // file
								"uploadStarted":function(e){},
								"uploadProgress":function(e){},
								"uploadComplete":function(e){},
								"uploadError":function(e){},
							
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/data";
						Nx.Api.call(callUrl,data,callback);
					},
					
						project : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to process
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/project";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Import = Nx.Api.Import || {};
						
							Nx.Api.Import.php = Nx.Api.Import.php || {};
						
				Nx.Api.Import.php = {
					url : "/Import.php",
			
						search : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								searchIds : "",  //(default=null) you can provide json array of ids [id1,id2,id3] of search within a project you want to be imported. If empty, will import every search from that project
								projectId : "",  //provide a projectId to import all of its searches. if you provide searchIds, only the ones specified will be imported from within the project
								callbackUrl : "",  //(default=null) A callback url to call when the import is complete
								reset : "",  //(default=null) Set to true to reset data before importing
								regenerateLexicon : "",  //(default=TRUE) Set to true to regenerate the lexicon after importing the data.  Set to false to not regenerate the lexicon.
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/search";
						Nx.Api.call(callUrl,data,callback);
					},
					
						file : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project
								dataType : "",  //the data type
								reset : "",  //(default=false) clears all existing project data. If it's a .nexa file, filters/searches/alerts/data will be erased.
								callbackUrl : "",  //(default = null) Url callback when import is complete
								waitForPreprocessing : "",  //(default=100) After the import, the job wait until the preprocessing has reached the specified percentage.
								strict : "",  //(default=false) Verify that imported data match project data type. If any data doesn't match, prevent import and send back and error.
								//for uploads
							
								"formId":"", // file
								"uploadStarted":function(e){},
								"uploadProgress":function(e){},
								"uploadComplete":function(e){},
								"uploadError":function(e){},
							
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/file";
						Nx.Api.call(callUrl,data,callback);
					},
					
						augmentation : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project
								data : "",  //text from which to get the augmentation
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/augmentation";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Geoplaces = Nx.Api.Geoplaces || {};
						
							Nx.Api.Geoplaces.php = Nx.Api.Geoplaces.php || {};
						
				Nx.Api.Geoplaces.php = {
					url : "/Geoplaces.php",
			
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  // {{default=""}} The name description 
								geometry : "",  // {{default=""}} The geometry description 
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modify : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								id : "",  //The id description  to modify
								name : "",  // {{default=""}} The name description 
								geometry : "",  // {{default=""}} The geometry description 
							},data);
						    
						var callUrl = this.url + "/modify";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								id : "",  //The id description  to get
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						remove : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								id : "",  //The id description  to remove
							},data);
						    
						var callUrl = this.url + "/remove";
						Nx.Api.call(callUrl,data,callback);
					},
					
						autocomplete : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  // The name description 
								limit : "",  // {{default=10}} The limit 
							},data);
						    
						var callUrl = this.url + "/autocomplete";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Reports = Nx.Api.Reports || {};
						
							Nx.Api.Reports.php = Nx.Api.Reports.php || {};
						
				Nx.Api.Reports.php = {
					url : "/Reports.php",
			
						update : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the id of the project
								filePath : "",  //the name of the file
								content : "",  //the content of the file
							},data);
						    
						var callUrl = this.url + "/update";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getReportNames : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the id of the project
								type : "",  //the type of analytic to fetch. use /reports/getTypes to get a list of available reports
							},data);
						    
						var callUrl = this.url + "/getReportNames";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the id of the project
								type : "",  //The type of analytic to fetch. use /reports/getTypes to get a list of available reports
								format : "",  //format in which to receive the report, Either 'json' or 'widget'
								accessibility : "",  //(default=private) could be public for public widget, or private for internal application usage
								options : "",  //(default=null) JSON containing extra options to configure widgets
								reportName : "",  //(default=false) If specified, will name the report for later recovery using that name, according to the currently selected filter.
								filterDescription : "",  //(default=false) filter description as the filter, but for immediate application on top of the current filter
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getTypes : function(data,callback){
					    
						var callUrl = this.url + "/getTypes";
						Nx.Api.call(callUrl,data,callback);
					},
					
						generate : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								type : "",  //{{validation=validateMultiReportTypes}} The type of analytic to generate. Comma delimited list of reports to generate :  <ul><li>tsa_data</li><li>aspect_timeline</li><li>aspect_treemap</li><li>lexical_map</li><li>authentic_chatter</li><li>nerd_map</li><li>timeline</li><li>top_hashtags</li><li>top_links</li><li>top_publishers</li><li>top_users</li><li>top_words</li><li>retweet_stats</li><li>top_interactions</li><li>interactions_map</li><li>publisher_map</li><li>duplicate_posts_vs_unique</li><li>results_by_search</li><li>publisher_distribution</li><li>publisher_distribution_alt</li><li>searches_overlaping</li><li>pareto_distribution</li><li>datatype_distribution</li><li>twitter_influence_reach</li><li>word_timeline</li><li>word_as_publisher</li><li>top_interactions</li><li>top_mentionned_users</li><li>week_day_hour_frequency</li><li>sentiments</li><li>follower_timeline</li><li>top_hashtag_per_screenname</li><li>nb_mentions_per_screenname</li><li>timeline_concept_peaks</li><li>timeline_concept_peaks_v2</li><li>timeline_category_peaks</li><li>heat_map</li><li>tsa</li><li>tsa2</li></ul>
								limit : "",  //{{default=0}} The limit of posts to analyse. Putting 0 means to analyze all the data.
								projectId : "",  //The project id
								options : "",  //{{validation=validateJSON}}{{default=null}} JSON containing extra options to configure the report generation
								filterDescription : "",  //{{default=null}} filter description as the filter, but for immediate application on top of the current filter
								reportName : "",  //{{validation=/^[a-zA-Z0-9_]+$/}}{{default=null}} If specified, will name the report for later recovery using that name, according to the currently selected filter.
								force : "",  //{{default=false}} If specified, will force the generation of report even if the data didn't change
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/generate";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Feature = Nx.Api.Feature || {};
						
							Nx.Api.Feature.php = Nx.Api.Feature.php || {};
						
				Nx.Api.Feature.php = {
					url : "/Feature.php",
			
						changeAccess : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								instanceId : "",  //The instance to change
								featureId : "",  //the id of the feature for which to change the access
								access : "",  //Either 0 or 1, 0 = no access, 1 = access
							},data);
						    
						var callUrl = this.url + "/changeAccess";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getInstanceAccess : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								instance : "",  //(default=null) the instance name to check
								instanceId : "",  //(default=null) the instance id to check
							},data);
						    
						var callUrl = this.url + "/getInstanceAccess";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Translation = Nx.Api.Translation || {};
						
							Nx.Api.Translation.php = Nx.Api.Translation.php || {};
						
				Nx.Api.Translation.php = {
					url : "/Translation.php",
			
						translateText : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								service : "",  //{{validation=/^ms|google$/}}{{error=ms or google only}} either "ms" or "google"
								fromLang : "",  //{{default=""}} the source language
								toLang : "",  //the language to translate the text into (2-3 character codes)
								textArray : "",  // A JSON array of texts,
							},data);
						    
						var callUrl = this.url + "/translateText";
						Nx.Api.call(callUrl,data,callback);
					},
					
						translateData : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								service : "",  //{{validation=/^ms|google$/}}{{error='ms' or 'google'}} either "ms" or "google"
								fromLang : "",  //{{default=""}} the source language
								toLang : "",  //the language to translate the text into
								projectId : "",  //the id of the project
								dataIds : "",  // A JSON array of data ids,
							},data);
						    
						var callUrl = this.url + "/translateData";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getAvailableLangs : function(data,callback){
					    
						var callUrl = this.url + "/getAvailableLangs";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Jobs = Nx.Api.Jobs || {};
						
							Nx.Api.Jobs.php = Nx.Api.Jobs.php || {};
						
				Nx.Api.Jobs.php = {
					url : "/Jobs.php",
			
						status : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								jobId : "",  //The id(or a list of ids separated by a coma) of the job(s) to get the status of
							},data);
						    
						var callUrl = this.url + "/status";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getArchivedJob : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								jobId : "",  //The Id of the job to
							},data);
						    
						var callUrl = this.url + "/getArchivedJob";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Transmit = Nx.Api.Transmit || {};
						
							Nx.Api.Transmit.php = Nx.Api.Transmit.php || {};
						
				Nx.Api.Transmit.php = {
					url : "/Transmit.php",
			
						data : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								destination : "",  //The URL to which send the data
								calls : "",  //A JSON describing the calls to do, in order
							},data);
						    
						var callUrl = this.url + "/data";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Js = Nx.Api.Js || {};
						
							Nx.Api.Js.php = Nx.Api.Js.php || {};
						
				Nx.Api.Js.php = {
					url : "/Js.php",
			
						getScript : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								uuid : "",  //unique client identifier
							},data);
						    
						var callUrl = this.url + "/getScript";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getToken : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								uuid : "",  //unique client identifier
							},data);
						    
						var callUrl = this.url + "/getToken";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.AutomatedReport = Nx.Api.AutomatedReport || {};
						
							Nx.Api.AutomatedReport.php = Nx.Api.AutomatedReport.php || {};
						
				Nx.Api.AutomatedReport.php = {
					url : "/AutomatedReport.php",
			
						addToAlert : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The alert
								automatedReportTemplateId : "",  //The id of the report template
								filterId : "",  //{{default=null}} The id of the report template, if left empty will use the alert search terms
							},data);
						    
						var callUrl = this.url + "/addToAlert";
						Nx.Api.call(callUrl,data,callback);
					},
					
						removeFromAlert : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The alert
								automatedReportTemplateId : "",  //The id of the report template
								filterId : "",  //The id of the filter
							},data);
						    
						var callUrl = this.url + "/removeFromAlert";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getListForAlert : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The alert
							},data);
						    
						var callUrl = this.url + "/getListForAlert";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								id : "",  //The id of the report template
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								name : "",  //The name of the report template
								intervalEvaluated : "",  //{{default=false}} The last filter operator value
								scheduleCrontab : "",  //{{default=false}} The definition of the schedule, crontab like definition
								scheduleActive : "",  //{{default=false}} Is the schedule active or not
								scheduleFilterId : "",  //{{default=false}} Filter used when generating using schedule
								scheduleStartOn : "",  //{{default=false}} When to start the schedule, format is YYYY-MM-DD HH:MM:SS.
								scheduleRecipientList : "",  //{{default=false}} List of recipient to be notified based on schedule
								reportList : "",  //{{default=false}} Comma separated value of report types included in this report
								reportTypes : "",  //{{default=false}} Comma separated value of document types for this report
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modify : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								id : "",  //The id of the report template
								name : "",  //The name of the report template
								intervalEvaluated : "",  //{{default=false}} The last filter operator value
								scheduleCrontab : "",  //{{default=false}} The definition of the schedule, crontab like definition
								scheduleActive : "",  //{{default=false}} Is the schedule active or not
								scheduleFilterId : "",  //{{default=false}} Filter used when generating using schedule
								scheduleStartOn : "",  //{{default=false}} When to start the schedule
								scheduleRecipientList : "",  //{{default=false}} List of recipient to be notified based on schedule
								reportList : "",  //{{default=false}} Comma separated value of report types included in this report
								reportTypes : "",  //{{default=false}} Comma separated value of document types for this report
							},data);
						    
						var callUrl = this.url + "/modify";
						Nx.Api.call(callUrl,data,callback);
					},
					
						delete : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								id : "",  //The id of the report template
							},data);
						    
						var callUrl = this.url + "/delete";
						Nx.Api.call(callUrl,data,callback);
					},
					
						generateForAlert : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The id of the report template
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/generateForAlert";
						Nx.Api.call(callUrl,data,callback);
					},
					
						loadRenderObjsFile : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								filename : "",  //The filename for the renderObjs data
							},data);
						    
						var callUrl = this.url + "/loadRenderObjsFile";
						Nx.Api.call(callUrl,data,callback);
					},
					
						generateAnalyzeDoc : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								metas : "",  //A JSON document representing metadata about the report
								reportsConfigs : "",  //A JSON document representing the reports/tweets/users to be included
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/generateAnalyzeDoc";
						Nx.Api.call(callUrl,data,callback);
					},
					
						generate : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								id : "",  //The id of the report template
								reason : "",  //The reason why it is generated, ex.: alert, scheduled, etc
								filename : "",  //The name of the file it will be stored with. Will append the date to it.
								filterDescription : "",  //{{default=false}} Filter description to use to get only a subset of data.
								notify : "",  //{{default=false}} Notify the list of recipiants
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/generate";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getSnapshotList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								id : "",  //The id of the report template
							},data);
						    
						var callUrl = this.url + "/getSnapshotList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getLastSnapshotsForAlert : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								alertId : "",  //The id of the alert
							},data);
						    
						var callUrl = this.url + "/getLastSnapshotsForAlert";
						Nx.Api.call(callUrl,data,callback);
					},
					
						downloadSnapshot : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project
								id : "",  //The id of the report template
								filename : "",  //The filename of the snapshot
							},data);
						    
						var callUrl = this.url + "/downloadSnapshot";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Proxy = Nx.Api.Proxy || {};
						
				Nx.Api.Proxy = {
					url : "/proxy",
			
				}
			
							Nx.Api.JobTemplate = Nx.Api.JobTemplate || {};
						
							Nx.Api.JobTemplate.php = Nx.Api.JobTemplate.php || {};
						
				Nx.Api.JobTemplate.php = {
					url : "/JobTemplate.php",
			
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								jobTemplateId : "",  //The job template id
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								public : "",  //(default=false) If you want to get the private or public list of templates(0=private, 1=public)
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  //The name of the job wrapper
								comment : "",  //an explanation of that this template does
								jobsDescription : "",  //The description of the jobs series to execute, in json
								public : "",  //(default=false) Defines if a job template will be seen by all the other users or just by you
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modify : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								jobTemplateId : "",  //The job template id
								name : "",  //The name of the job wrapper
								comment : "",  //an explanation of that this template does
								jobsDescription : "",  //The description of the jobs series to execute, in json
								public : "",  //(default=false) Defines if a job template will be seen by all the other users or just by you
							},data);
						    
						var callUrl = this.url + "/modify";
						Nx.Api.call(callUrl,data,callback);
					},
					
						execute : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								jobTemplateId : "",  //the job template id that could be retrieved from the jobTemplate getList
								variables : "",  //The variable map in json
								globalDynamicFilterDescription : "",  //(default=false) The global filter description
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/execute";
						Nx.Api.call(callUrl,data,callback);
					},
					
						start : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								jobTemplateId : "",  //The job template id.
								jobTemplateVariables : "",  //The job template variables, in JSON format.
								jobTemplateDynamicFilter : "",  //(default=false) The job template dynamic filter descrition.
								autoCaptureId : "",  //(default=false) The autocapture id.
								projectId : "",  //(default=null) Associate this schedule with a projectId, for later retrieval
								schedule : "",  //(default=null) The cron definition of the schedule
							},data);
						    
						var callUrl = this.url + "/start";
						Nx.Api.call(callUrl,data,callback);
					},
					
						stop : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								jobTemplateScheduledId : "",  //(default=false) The jobTemplateScheduledId
								autoCaptureId : "",  //(default=false) The autocaptureId
								projectId : "",  //(default=false) The projectId on which this or theses jobSchedules are associated
							},data);
						    
						var callUrl = this.url + "/stop";
						Nx.Api.call(callUrl,data,callback);
					},
					
						status : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								jobTemplateScheduledId : "",  //(default=false) The jobTemplateScheduledId
								autocaptureId : "",  //(default=false) The autocaptureId
								projectId : "",  //(default=false) The projectId.
							},data);
						    
						var callUrl = this.url + "/status";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Filter = Nx.Api.Filter || {};
						
							Nx.Api.Filter.php = Nx.Api.Filter.php || {};
						
				Nx.Api.Filter.php = {
					url : "/Filter.php",
			
						compileFilter : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to filter
								filterId : "",  //(default=null) The filter to compile
								minDataId : "",  //(default=0) The dataId at which point to do the compiling. If 0 or default, the filter will be recompiled entirely.
								maxDataId : "",  //(default=null) The dataId up to which point to do the compiling. If default, the filter will be compiled for all the available data. It's only available in conjonction with minDataId.
								dataIds : "",  //(default=null) The specific data ids to reprocess, partial compilation. Max 1000 ids at a time.
								publisherIds : "",  //(default=null) The specific list of publisher to reprocess, partial recompilation. Max 100 ids at a time.
								generateForAllFilters : "",  //(default=false) If true, it will create a job for each filter in the project and will compile them. Only available for partial compilation
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/compileFilter";
						Nx.Api.call(callUrl,data,callback);
					},
					
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to filter
								filter : "",  //JSON representing the filter, can be multiple filters. See Structure.
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modify : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to filter
								filter : "",  //JSON representing the filter (can be multiple filters)
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/modify";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project Id
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project Id
								filterId : "",  //The filter Id
								format : "",  //the format of the filter, can be either object, booleanQueryString
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						delete : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The Id of the project
								filterId : "",  //The Id of the filter to be deleted
							},data);
						    
						var callUrl = this.url + "/delete";
						Nx.Api.call(callUrl,data,callback);
					},
					
						setForProject : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The Id of the project
								filterId : "",  //the Id of the filter to be set as default for the project
							},data);
						    
						var callUrl = this.url + "/setForProject";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Search = Nx.Api.Search || {};
						
							Nx.Api.Search.php = Nx.Api.Search.php || {};
						
				Nx.Api.Search.php = {
					url : "/Search.php",
			
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
								type : "",  //The Search type
								name : "",  //The Search name
								exactPhrase : "",  //(default = null) Exact phrase
								ands : "",  //(default = null) The And word list
								ors : "",  //(default = null) The Or Word list
								nots : "",  //(default = null) The Not word list
								latitude : "",  //(default = null) Geo-location if applicable
								longitude : "",  //(default= null) Geo-lodation if applicable
								city : "",  //(default=null) Geo-lodation if applicable
								radius : "",  //(default =null) The radius of the search around a geolocation point
								url : "",  //(default = null) The url of the RSS feed
								metric : "",  //(default = true) Use Km / miles
								tag : "",  //(default = null) Hashtag
								rule : "",  //(default = null) The gnip rule
								slices : "",  //(default = null) The slices in JSON format. Ex : [{"date_start":"2012-12-14","date_end":"2012-12-16","prefix":"2012"},{"date_start":"2013-01-14","date_end":"2012-01-16","prefix":"2013"}]
								siteType : "",  //(default = null) The type of site  Ex: (news, blogs, discussion)
								siteCategory : "",  //(default = null) The category of site  Ex: (search_engine, entertainment, shopping, vehicles, gambling, tech, games, sports, finance, hacking, social, messaging, health, personals, religion, travel, abortion, education, drugs, business, advertising, humor, food, real_estate, virtual_reality, jobs, media, adult, alcohol_and_tobacco, weapons)
								site : "",  //(default = null) The site domain Ex: (yahoo.com, cnn.com)
								polygons : "",  //(default = null) polygons used for the initial search
								hasVideo : "",  //(default = false) Whether the site has video or not
								seeds : "",  //(default = false) For network crawler, list of seeds
								dos : "",  //(default = false) For network crawler, degrees of separation
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modify : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the id of the search
								searchId : "",  //the id of the search
								type : "",  //The Search type
								name : "",  //(default = null) The Search name
								exactPhrase : "",  //(default = null) Exact phrase
								ands : "",  //(default = null) The And word list
								ors : "",  //(default = null) The Or Word list
								nots : "",  //(default = null) The Not word list
								latitude : "",  //(default = null) Geo-location if applicable
								longitude : "",  //(default = null) Geo-lodation if applicable
								city : "",  //(default = null) city - combined lat,long for a city
								url : "",  //(default = null) RSS search feed URL
								radius : "",  //(default = null) radius around the the geolocation point
								tag : "",  //(default = null) Hashtag
								rule : "",  //(default = null) The gnip rule
								metric : "",  //(default = true) for the radius : if true, use km otherwise, use miles
								slices : "",  //(default = null) The slices in JSON format. Ex : [{"date_start":"2012-12-14","date_end":"2012-12-16","prefix":"2012"},{"date_start":"2013-01-14","date_end":"2012-01-16","prefix":"2013"}]
								siteType : "",  //(default = null) The type of site  Ex: (news, blogs, discussion)
								siteCategory : "",  //(default = null) The category of site  Ex: (search_engine, entertainment, shopping, vehicles, gambling, tech, games, sports, finance, hacking, social, messaging, health, personals, religion, travel, abortion, education, drugs, business, advertising, humor, food, real_estate, virtual_reality, jobs, media, adult, alcohol_and_tobacco, weapons)
								site : "",  //(default = null) The site domain Ex: (yahoo.com, cnn.com)
								polygons : "",  //(default = null) polygons used for the initial search
								hasVideo : "",  //(default = false) Whether the site has video or not
								seeds : "",  //(default = false) For network crawler, list of seeds
								dos : "",  //(default = false) For network crawler, degrees of separation
							},data);
						    
						var callUrl = this.url + "/modify";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
								searchId : "",  //The id of the Search
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						delete : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The search Id to delete
								searchId : "",  //The search Id to delete
							},data);
						    
						var callUrl = this.url + "/delete";
						Nx.Api.call(callUrl,data,callback);
					},
					
						duplicate : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project
								searchId : "",  //the search Id to duplicate
							},data);
						    
						var callUrl = this.url + "/duplicate";
						Nx.Api.call(callUrl,data,callback);
					},
					
						preview : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
								searchId : "",  //The id of the search
							},data);
						    
						var callUrl = this.url + "/preview";
						Nx.Api.call(callUrl,data,callback);
					},
					
						test : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								type : "",  //The search type
								exactPhrase : "",  //(default = null) Exact phrase
								ands : "",  //(default = null) The And word list
								ors : "",  //(default = null) The Or Word list
								nots : "",  //(default = null) The Not word list
								language : "",  //(default= null) language of the search test
								latitude : "",  //(default = null) Geo-location if applicable
								longitude : "",  //(default= null) Geo-lodation if applicable
								city : "",  //(default=null) Geo-lodation if applicable
								radius : "",  //(default =null) The radius of the search around a geolocation point
								url : "",  //(default = null) The url of the RSS feed
								metric : "",  //(default = true) Use Km / miles
								tag : "",  //(default = null) Hashtag
								rule : "",  //(default = null) The gnip rule
								slices : "",  //(default = null) The slices in JSON format. Ex : [{"date_start":"2012-12-14","date_end":"2012-12-16","prefix":"2012"},{"date_start":"2013-01-14","date_end":"2012-01-16","prefix":"2013"}]
								langTag : "",  //(default = null) the tag, 2 letters, that identify the language in which to do the capture
								siteType : "",  //(default = null) The type of site  Ex: (news, blogs, discussion)
								siteCategory : "",  //(default = null) The category of site  Ex: (search_engine, entertainment, shopping, vehicles, gambling, tech, games, sports, finance, hacking, social, messaging, health, personals, religion, travel, abortion, education, drugs, business, advertising, humor, food, real_estate, virtual_reality, jobs, media, adult, alcohol_and_tobacco, weapons)
								site : "",  //(default = null) The site domain Ex: (yahoo.com, cnn.com)
								hasVideo : "",  //(default = false) Whether the site has video or not
								polygons : "",  //(default = null) polygons used for the initial search
								startFrom : "",  //(default = null) Preview offset
							},data);
						    
						var callUrl = this.url + "/test";
						Nx.Api.call(callUrl,data,callback);
					},
					
						capture : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
								searchId : "",  //The id of the search
								limit : "",  //(default=null) Max amount of data to capture. Only work as is for twitter.
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/capture";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getDownload : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The ID OF THE project
								searchId : "",  //The ID OF THE SEARCH
							},data);
						    
						var callUrl = this.url + "/getDownload";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getSuggestedInterval : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //(default=0) The id of the project
								showValues : "",  //(default=false) Whether or not we should display the different possible ranges - used for display
							},data);
						    
						var callUrl = this.url + "/getSuggestedInterval";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Base = Nx.Api.Base || {};
						
				Nx.Api.Base = {
					url : "/Base",
			
				}
			
							Nx.Api.Upload = Nx.Api.Upload || {};
						
							Nx.Api.Upload.php = Nx.Api.Upload.php || {};
						
				Nx.Api.Upload.php = {
					url : "/Upload.php",
			
						getToken : function(data,callback){
					    
						var callUrl = this.url + "/getToken";
						Nx.Api.call(callUrl,data,callback);
					},
					
						progress : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								UPLOAD_IDENTIFIER : "",  //the token which identifies the file whose upload progress one retrieves
							},data);
						    
						var callUrl = this.url + "/progress";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.AutoCapture = Nx.Api.AutoCapture || {};
						
							Nx.Api.AutoCapture.php = Nx.Api.AutoCapture.php || {};
						
				Nx.Api.AutoCapture.php = {
					url : "/AutoCapture.php",
			
						run : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
								callbackUrl : "",  //(default=null) Url to call when the auto capture is over
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/run";
						Nx.Api.call(callUrl,data,callback);
					},
					
						start : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
								interval : "",  //"10mins | 15mins | 20mins | 30mins | hour | 2hours | 4hours | 6hours | 12hours | 24hours"
							},data);
						    
						var callUrl = this.url + "/start";
						Nx.Api.call(callUrl,data,callback);
					},
					
						reschedule : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
								interval : "",  //"10mins | 15mins | 20mins | 30mins | hour | 2hours | 4hours | 6hours | 12hours | 24hours"
							},data);
						    
						var callUrl = this.url + "/reschedule";
						Nx.Api.call(callUrl,data,callback);
					},
					
						stop : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
							},data);
						    
						var callUrl = this.url + "/stop";
						Nx.Api.call(callUrl,data,callback);
					},
					
						stopAll : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								apiKeyOfUser : "",  //(default=null) Provide only if you're a super admin and you want to stop someone else capture
								instanceName : "",  //(default=null) Stops all autocapture on a given instance, you can only do that if you have right to that instance(admin) or super-admin
							},data);
						    
						var callUrl = this.url + "/stopAll";
						Nx.Api.call(callUrl,data,callback);
					},
					
						status : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The id of the project
							},data);
						    
						var callUrl = this.url + "/status";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Dictionary = Nx.Api.Dictionary || {};
						
							Nx.Api.Dictionary.php = Nx.Api.Dictionary.php || {};
						
				Nx.Api.Dictionary.php = {
					url : "/Dictionary.php",
			
						getWords : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								partOfWord : "",  //beginning of the word to search for
								languageTag : "",  //the language in which the word is
							},data);
						    
						var callUrl = this.url + "/getWords";
						Nx.Api.call(callUrl,data,callback);
					},
					
						autocomplete : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								partOfWord : "",  //{{validation=/^[A-Za-z][a-zA-Z\-]*$/}} beginning of the word to search for
								noStopWords : "",  //{{default=0}} if true, stop words are eliminated from the results
								languageTag : "",  //the language code of the word (en,fr,etc)
								limit : "",  //{{default=0}}{{validation=/^[1-9][0-9]*$/}}
							},data);
						    
						var callUrl = this.url + "/autocomplete";
						Nx.Api.call(callUrl,data,callback);
					},
					
						addCustom : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the affected project
								wordId : "",  //the word to act on
								replacement : "",  //{{default=null}} the label to use for that word instead
								regroupWithCustomWordId : "",  //{{default=null}} regroup the entry with another custom word
								isStopword : "",  //{{default=false}} defining it as stopword or not(default)
							},data);
						    
						var callUrl = this.url + "/addCustom";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modifyCustom : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the affected project
								customWordId : "",  //the custom entry on which to act
								wordId : "",  //{{default=null}} the word to act on 
								replacement : "",  //{{default=null}} the replacement for the label of that word
								regroupWithCustomWordId : "",  //{{default=null}} regroup the entry with another custom word
								isStopword : "",  //{{default=false}} defining it as stopword or not(default)
							},data);
						    
						var callUrl = this.url + "/modifyCustom";
						Nx.Api.call(callUrl,data,callback);
					},
					
						deleteCustom : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the affected project
								customWordId : "",  //the custom entry to delete
							},data);
						    
						var callUrl = this.url + "/deleteCustom";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getCustomList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the affected project
							},data);
						    
						var callUrl = this.url + "/getCustomList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						cleanCustom : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the affected project
							},data);
						    
						var callUrl = this.url + "/cleanCustom";
						Nx.Api.call(callUrl,data,callback);
					},
					
						applyCsvCustom : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the affected project
								//for uploads
							
								"formId":"", // file
								"uploadStarted":function(e){},
								"uploadProgress":function(e){},
								"uploadComplete":function(e){},
								"uploadError":function(e){},
							
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/applyCsvCustom";
						Nx.Api.call(callUrl,data,callback);
					},
					
						exportCsv : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the affected project
							},data);
						    
						var callUrl = this.url + "/exportCsv";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getWordList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								wordId : "",  //the wordId
								projectId : "",  //{{default=null}} the affected project
							},data);
						    
						var callUrl = this.url + "/getWordList";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Document = Nx.Api.Document || {};
						
							Nx.Api.Document.php = Nx.Api.Document.php || {};
						
				Nx.Api.Document.php = {
					url : "/Document.php",
			
						delete : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id
								fileName : "",  //the name of the search/file for which to delete it's data
							},data);
						    
						var callUrl = this.url + "/delete";
						Nx.Api.call(callUrl,data,callback);
					},
					
						renameFile : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id
								actualFileName : "",  //the actual name of the search/file
								newFileName : "",  //the new name of the search/file
							},data);
						    
						var callUrl = this.url + "/renameFile";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id
								dataId : "",  //id of the data to be retrieved
								getComment : "",  //{{default=false}} If the comment of the data should be retrieved as well
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id
								filterDescription : "",  //(default=false) filter description as the filter, but for immediate application on top of the current filter
								wordIds : "",  //(default=false) json array of the words to view posts, allows for viewing words that are lemmatized
								dataIds : "",  //(default=false) json array of the data Ids  to view posts.
								publisherIds : "",  //(default=false) json array of publisher ids to view posts.
								dimensions : "",  //(default=false) json array of the dimension to recover. Possibilities are : twitter_profile, twitter_psi
								withTotalCount : "",  //(default=false) Get the total amount of data that could be obtain by this endpoint.
								removeDuplicates : "",  //(default=false) Remove duplicate items.
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						saveMetadata : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id
								dataId : "",  // id of the data to be retrieved
								status : "",  //status of the data,1 for valid or 0 for invalid
								comment : "",  //comment about the data itself
							},data);
						    
						var callUrl = this.url + "/saveMetadata";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Ingestion = Nx.Api.Ingestion || {};
						
							Nx.Api.Ingestion.php = Nx.Api.Ingestion.php || {};
						
				Nx.Api.Ingestion.php = {
					url : "/Ingestion.php",
			
						retrieveProjects : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								destination : "",  //(default=false) a json description of the destination project.
								searchHash : "",  //(default=false) unique search identifier, it is needed to match to the correct searches.
							},data);
						    
						var callUrl = this.url + "/retrieveProjects";
						Nx.Api.call(callUrl,data,callback);
					},
					
						IngestMessagesInProjects : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								destination : "",  //(default=false) a json description of the destination project.
								searchHash : "",  //(default=false) unique search identifier, it is needed to match to the correct searches.
								jsonMessages : "",  //json encoded array of messages.
							},data);
						    
						var callUrl = this.url + "/IngestMessagesInProjects";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Publisher = Nx.Api.Publisher || {};
						
							Nx.Api.Publisher.php = Nx.Api.Publisher.php || {};
						
				Nx.Api.Publisher.php = {
					url : "/Publisher.php",
			
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id
								options : "",  //(default=null) A json associative array containing options
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id
								publisherId : "",  //(default=null) The publisher id
								publisherIds : "",  //(default=null) The list of publisher ids you want to get
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getNb : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id
							},data);
						    
						var callUrl = this.url + "/getNb";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.ReportConfig = Nx.Api.ReportConfig || {};
						
							Nx.Api.ReportConfig.php = Nx.Api.ReportConfig.php || {};
						
				Nx.Api.ReportConfig.php = {
					url : "/ReportConfig.php",
			
						set : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id to load for configuring the report configurations
								name : "",  //{{validation=/^[a-zA-Z0-9_\-]+$/}}{{default="default"}} This is the report-name. By default if the report name is not provided 'default' is used
								type : "",  //{{validation=validateReportType}} The report type.
								config : "",  //{{validation=validateJSON}} The config JSON. this is a simple API you get and set JSON.
							},data);
						    
						var callUrl = this.url + "/set";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the project id.
								name : "",  //{{validation=/^[a-zA-Z0-9_\-]+$/}} This is the report-name.the config is keyed on it.
								type : "",  //{{validation=validateReportType}} The report type.
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the id of the project to pull all configs from
								name : "",  //{{default=null}}
								type : "",  //{{default=null}}
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						remove : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  //{{validation=/^[a-zA-Z0-9_\-]+$/}} This is the report-name.the config is keyed on it.
							},data);
						    
						var callUrl = this.url + "/remove";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getSchema : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								format : "",  //{{validation=/(json|example|model|propTypes)/}}{{default=}}
							},data);
						    
						var callUrl = this.url + "/getSchema";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Project = Nx.Api.Project || {};
						
							Nx.Api.Project.php = Nx.Api.Project.php || {};
						
				Nx.Api.Project.php = {
					url : "/Project.php",
			
						duplicate : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to duplicate
								name : "",  //(default=null) unique project name, default to auto-generated
								destinationInstance : "",  //(default=null) The destination instance, default is current instance
								fork : "",  //(default=0) Set to one to relay the capture process to the new copy, and stop the current one
							},data);
						    
						var callUrl = this.url + "/duplicate";
						Nx.Api.call(callUrl,data,callback);
					},
					
						duplicateWithData : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to duplicate
								name : "",  //{{default=null}} unique project name, default to auto-generated
								destinationInstance : "",  //{{default=null}} The destination instance, default is current instance
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/duplicateWithData";
						Nx.Api.call(callUrl,data,callback);
					},
					
						cloneWithData : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to duplicate
								name : "",  //{{default=null}} unique project name, default to auto-generated
								destinationInstance : "",  //{{default=null}} The destination instance, default is current instance
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/cloneWithData";
						Nx.Api.call(callUrl,data,callback);
					},
					
						copyData : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //The project to duplicate
								toProjectId : "",  //{{default=null}} unique project id
								destinationInstance : "",  //{{default=null}} The destination instance, default is current instance
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/copyData";
						Nx.Api.call(callUrl,data,callback);
					},
					
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  //unique project name
								lang : "",  //language en|fr|es|ru|ko|zh|ja
								type : "",  //Type of the project
								projectLeader : "",  //(default=null) optional leader name
								projectManager : "",  //(default=null) optional manager name
								client : "",  //(default=null) optional client name
								maxTopWords : "",  //(default=200) optional number of top words
								maxTopCoWords : "",  //(default=5) optional max number of connections
								maxTopPublishers : "",  //(default=150) optional max number of publishers
								isPublic : "",  //(default=0) optionnal to make a project reports accessible through public widgets
								userDefinedId : "",  //(default=null) optional user defined alphanumeric id
								userDefinedStatusId : "",  //(default=0) optional a numerical user defined status
								userDefinedFolderId : "",  //(default=0) optional a numerical user designed folder id for UI purposes
								isStreamingProject : "",  //(default=0) optional a numerical variable to set for the new streaming projects
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						get : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //unique ID of the project
							},data);
						    
						var callUrl = this.url + "/get";
						Nx.Api.call(callUrl,data,callback);
					},
					
						createFromProjectData : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the unique ID of the base project
								projectName : "",  //the name for the project that is going to be created
								dataSource : "",  //A json array of options regarding the source of the json data, typical data source declaration: {"source":"twitter_influence_reach","options":{"publisherLimit":100,"words":"bacon"}}
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/createFromProjectData";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								status : "",  //(default=1) set to 0 to view archived projects
							},data);
						    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getAutocaptureList : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								status : "",  //(default=1) set to 0 to view archived projects
							},data);
						    
						var callUrl = this.url + "/getAutocaptureList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getPreprocessingState : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //unique ID of the project
							},data);
						    
						var callUrl = this.url + "/getPreprocessingState";
						Nx.Api.call(callUrl,data,callback);
					},
					
						reprocess : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //unique ID of the project
								reprocessingState : "",  //(default=0) The re-preprocessing starting state, will redo all state afterward. 0 to redo all, 3 to do only the not yet done.
							},data);
						    
						var callUrl = this.url + "/reprocess";
						Nx.Api.call(callUrl,data,callback);
					},
					
						waitForPreprocessing : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the Id of the project to wait for
								waitType : "",  //{{default=global}} Either "global", "preprocessing", "link".
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/waitForPreprocessing";
						Nx.Api.call(callUrl,data,callback);
					},
					
						resultsByQuery : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //unique ID of the project
							},data);
						    
						var callUrl = this.url + "/resultsByQuery";
						Nx.Api.call(callUrl,data,callback);
					},
					
						getProjectDataDates : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //unique ID of the project
							},data);
						    
						var callUrl = this.url + "/getProjectDataDates";
						Nx.Api.call(callUrl,data,callback);
					},
					
						modify : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the unique ID of the project to modify
								name : "",  //(default=null) optionnal unique project name
								lang : "",  //(default=null) optionnal language en|fr|sp|ru|ko|zh|ja
								projectLeader : "",  //(default=null) optional leader name
								projectManager : "",  //(default=null) optional manager name
								client : "",  //(default=null) optional client name
								maxTopWords : "",  //(default=200) optional number of top words
								maxTopCoWords : "",  //(default=5) optional max number of connections
								maxTopPublisher : "",  //(default=150) optional max number of publishers
								isPublic : "",  //(default=0) optionnal to make a project reports accessible through public widgets
								userDefinedId : "",  //(default=null) optional user defined alphanumeric id
								userDefinedStatusId : "",  //(default=0) optional a numerical user defined status
								userDefinedFolderId : "",  //(default=0) optional a numerical user designed folder id for UI purposes
								kijThreshold : "",  //(default=0) optional threshold under which to ignore co-relation in the lexical map generation
								status : "",  //(default=null) optionnal status of the project, 1 = active, 0 = archive
								defaultGeneralFilterId : "",  //(default=null) optionnal filter selected by default on the project
								alertEmails : "",  //(default=null) optionnal List of email, csv, to send alerts to
								isStreamingProject : "",  //(default=0) optional a numerical variable to set for the new streaming projects
							},data);
						    
						var callUrl = this.url + "/modify";
						Nx.Api.call(callUrl,data,callback);
					},
					
						find : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								name : "",  //(default =null) will search instances for projects whose name contains this string
								creator : "",  //(default=null) will search instances for projects whose creator contains this string
								createdMin : "",  //(default=null) yyyy-mm-dd lower bound of the creation date
								createdMax : "",  //(default=null) yyyy-mm-dd upper bound of the creation date
								modifiedMin : "",  //(default=null) yyyy-mm-dd lower bound of the last modification date
								modifiedMax : "",  //(default=null) yyyy-mm-dd uppde bound of the last modification date
							},data);
						    
						var callUrl = this.url + "/find";
						Nx.Api.call(callUrl,data,callback);
					},
					
						remove : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //unique ID of the project
							},data);
						    
						var callUrl = this.url + "/remove";
						Nx.Api.call(callUrl,data,callback);
					},
					
						archive : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the unique ID of the project to archive
							},data);
						    
						var callUrl = this.url + "/archive";
						Nx.Api.call(callUrl,data,callback);
					},
					
						unarchive : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the unique ID of the project to archive
							},data);
						    
						var callUrl = this.url + "/unarchive";
						Nx.Api.call(callUrl,data,callback);
					},
					
						state : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //{{default=''}}
							},data);
						    
						var callUrl = this.url + "/state";
						Nx.Api.call(callUrl,data,callback);
					},
					
						rawReprocess : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //{{default=''}}
							},data);
						    
						var callUrl = this.url + "/rawReprocess";
						Nx.Api.call(callUrl,data,callback);
					},
					
						filterMultipleProjectsIntoOne : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								fromProjectIds : "",  //The projects from which to export data
								fromInstanceName : "",  //The origin instance
								toProjectId : "",  //The project to inport data to
								toInstanceName : "",  //The destination instance
								filterDescription : "",  //Filter
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/filterMultipleProjectsIntoOne";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.Docs = Nx.Api.Docs || {};
						
							Nx.Api.Docs.php = Nx.Api.Docs.php || {};
						
				Nx.Api.Docs.php = {
					url : "/Docs.php",
			
				}
			
							Nx.Api.ProjectFolder = Nx.Api.ProjectFolder || {};
						
							Nx.Api.ProjectFolder.php = Nx.Api.ProjectFolder.php || {};
						
				Nx.Api.ProjectFolder.php = {
					url : "/ProjectFolder.php",
			
						getList : function(data,callback){
					    
						var callUrl = this.url + "/getList";
						Nx.Api.call(callUrl,data,callback);
					},
					
						create : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								folderName : "",  //this is the name of the folder to be created
								order : "",  //(default=0) this is an int that order the folders, lowest first, this is optional.
							},data);
						    
						var callUrl = this.url + "/create";
						Nx.Api.call(callUrl,data,callback);
					},
					
						rename : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								folderId : "",  //this is the id of the folder to rename.
								folderName : "",  //this is the new name of the folder.
								order : "",  //(default=0) is the new number that order the folders, lowest first, this is optional.
							},data);
						    
						var callUrl = this.url + "/rename";
						Nx.Api.call(callUrl,data,callback);
					},
					
						delete : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								folderId : "",  //this is the id of the folder to delete.
							},data);
						    
						var callUrl = this.url + "/delete";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
							Nx.Api.ProcessData = Nx.Api.ProcessData || {};
						
							Nx.Api.ProcessData.php = Nx.Api.ProcessData.php || {};
						
				Nx.Api.ProcessData.php = {
					url : "/ProcessData.php",
			
						processNERD : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the Id of the project to process
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/processNERD";
						Nx.Api.call(callUrl,data,callback);
					},
					
						reprocessAspect : function(data,callback){
					
							if(typeof(data)=="function")
							{
								callback = data;
								data = {};   
							}
							$.extend({
						
								projectId : "",  //the Id of the project to process
								//for async methods
							
								"jobQueued":function(e){},
								"jobStarted":function(e){},
								"jobProgress":function(e){},
								"jobComplete":function(e){}
							
							},data);
						    
						var callUrl = this.url + "/reprocessAspect";
						Nx.Api.call(callUrl,data,callback);
					},
					
				}
			
			Nx.Api._asyncInfo = [
				"/Alert.php/check",
		"/Alert.php/testEmail",
		"/Instance.php/create",
		"/Export.php/data",
		"/Export.php/project",
		"/Import.php/search",
		"/Import.php/file",
		"/Import.php/augmentation",
		"/Reports.php/generate",
		"/AutomatedReport.php/generateForAlert",
		"/AutomatedReport.php/generateAnalyzeDoc",
		"/AutomatedReport.php/generate",
		"/JobTemplate.php/execute",
		"/Filter.php/compileFilter",
		"/Filter.php/create",
		"/Filter.php/modify",
		"/Search.php/capture",
		"/AutoCapture.php/run",
		"/Dictionary.php/applyCsvCustom",
		"/Project.php/duplicateWithData",
		"/Project.php/cloneWithData",
		"/Project.php/copyData",
		"/Project.php/createFromProjectData",
		"/Project.php/waitForPreprocessing",
		"/Project.php/filterMultipleProjectsIntoOne",
		"/ProcessData.php/processNERD",
		"/ProcessData.php/reprocessAspect"
];