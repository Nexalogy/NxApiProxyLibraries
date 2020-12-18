
				const NxApiEndpoints = {
			
			Users : {
				url : "/Users",
			
						login : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/login";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						remove : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/remove";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						createApiKey : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/createApiKey";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modifyApiKey : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modifyApiKey";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						removeApiKey : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/removeApiKey";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getApiKey : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getApiKey";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modify : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modify";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						addToGroup : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/addToGroup";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						removeFromGroup : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/removeFromGroup";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						addPermission : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/addPermission";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						removePermission : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/removePermission";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						createGroup : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/createGroup";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						deleteGroup : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/deleteGroup";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getPermissionList : function(data,callback){
						let callUrl = this.url + "/getPermissionList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getGroupList : function(data,callback){
						let callUrl = this.url + "/getGroupList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getUsersGroups : function(data,callback){
						let callUrl = this.url + "/getUsersGroups";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						renameGroup : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/renameGroup";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Download : {
				url : "/Download",
			
				},
			
			Toad : {
				url : "/Toad",
			
						getStatus : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getStatus";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getPublisherSeedsFromActorByQuery : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getPublisherSeedsFromActorByQuery";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Alert : {
				url : "/Alert",
			
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getRecordedAlerts : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getRecordedAlerts";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getDocumentsForRecordedAlerts : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getDocumentsForRecordedAlerts";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						delete : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/delete";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modify : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modify";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						check : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/check";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						testEmail : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/testEmail";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			CaptureApi : {
				url : "/CaptureApi",
			
						subscribeProject : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/subscribeProject";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						unsubscribeProject : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/unsubscribeProject";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Twitter : {
				url : "/Twitter",
			
						callApi : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/callApi";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Instance : {
				url : "/Instance",
			
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						createAsync : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/createAsync";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						update : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/update";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						grantAccess : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/grantAccess";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						removeAccess : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/removeAccess";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getAccessList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getAccessList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Test : {
				url : "/Test",
			
				},
			
			Home : {
				url : "/Home",
			
				},
			
			Export : {
				url : "/Export",
			
						download : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/download";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						adminDownload : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/adminDownload";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						reportAsCsv : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/reportAsCsv";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						data : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/data";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						project : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/project";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Import : {
				url : "/Import",
			
						search : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/search";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						file : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/file";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						augmentation : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/augmentation";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Geoplaces : {
				url : "/Geoplaces",
			
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modify : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modify";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						remove : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/remove";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						autocomplete : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/autocomplete";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Reports : {
				url : "/Reports",
			
						update : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/update";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getReportNames : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getReportNames";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getTypes : function(data,callback){
						let callUrl = this.url + "/getTypes";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						generate : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/generate";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Feature : {
				url : "/Feature",
			
						changeAccess : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/changeAccess";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getInstanceAccess : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getInstanceAccess";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Translation : {
				url : "/Translation",
			
						translateText : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/translateText";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						translateData : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/translateData";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getAvailableLangs : function(data,callback){
						let callUrl = this.url + "/getAvailableLangs";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Jobs : {
				url : "/Jobs",
			
						status : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/status";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getArchivedJob : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getArchivedJob";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Transmit : {
				url : "/Transmit",
			
						data : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/data";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Js : {
				url : "/Js",
			
						getScript : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getScript";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getToken : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getToken";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			AutomatedReport : {
				url : "/AutomatedReport",
			
						addToAlert : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/addToAlert";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						removeFromAlert : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/removeFromAlert";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getListForAlert : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getListForAlert";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modify : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modify";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						delete : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/delete";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						generateForAlert : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/generateForAlert";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						loadRenderObjsFile : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/loadRenderObjsFile";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						generateAnalyzeDoc : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/generateAnalyzeDoc";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						generate : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/generate";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getSnapshotList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getSnapshotList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getLastSnapshotsForAlert : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getLastSnapshotsForAlert";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						downloadSnapshot : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/downloadSnapshot";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			ProxyController : {
				url : "/proxyController",
			
				},
			
			JobTemplate : {
				url : "/JobTemplate",
			
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modify : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modify";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						execute : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/execute";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						start : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/start";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						stop : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/stop";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						status : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/status";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Filter : {
				url : "/Filter",
			
						compileFilter : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/compileFilter";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modify : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modify";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						delete : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/delete";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						setForProject : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/setForProject";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Search : {
				url : "/Search",
			
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modify : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modify";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						delete : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/delete";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						duplicate : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/duplicate";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						preview : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/preview";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						test : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/test";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						capture : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/capture";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getDownload : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getDownload";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getSuggestedInterval : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getSuggestedInterval";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			BaseController : {
				url : "/BaseController",
			
				},
			
			Upload : {
				url : "/Upload",
			
						getToken : function(data,callback){
						let callUrl = this.url + "/getToken";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						progress : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/progress";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			AutoCapture : {
				url : "/AutoCapture",
			
						run : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/run";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						start : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/start";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						reschedule : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/reschedule";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						stop : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/stop";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						stopAll : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/stopAll";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						status : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/status";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Dictionary : {
				url : "/Dictionary",
			
						getWords : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getWords";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						autocomplete : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/autocomplete";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						addCustom : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/addCustom";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modifyCustom : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modifyCustom";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						deleteCustom : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/deleteCustom";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getCustomList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getCustomList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						cleanCustom : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/cleanCustom";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						applyCsvCustom : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/applyCsvCustom";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						exportCsv : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/exportCsv";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getWordList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getWordList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Document : {
				url : "/Document",
			
						delete : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/delete";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						renameFile : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/renameFile";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						saveMetadata : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/saveMetadata";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Ingestion : {
				url : "/Ingestion",
			
						retrieveProjects : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/retrieveProjects";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						IngestMessagesInProjects : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/IngestMessagesInProjects";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Publisher : {
				url : "/Publisher",
			
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getNb : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getNb";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			ReportConfig : {
				url : "/ReportConfig",
			
						set : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/set";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						remove : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/remove";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getSchema : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getSchema";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Project : {
				url : "/Project",
			
						duplicate : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/duplicate";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						duplicateWithData : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/duplicateWithData";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						cloneWithData : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/cloneWithData";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						copyData : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/copyData";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						get : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/get";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						createFromProjectData : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/createFromProjectData";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getAutocaptureList : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getAutocaptureList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getPreprocessingState : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getPreprocessingState";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						reprocess : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/reprocess";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						waitForPreprocessing : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/waitForPreprocessing";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						resultsByQuery : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/resultsByQuery";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getProjectDataDates : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getProjectDataDates";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						modify : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/modify";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						find : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/find";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						remove : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/remove";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						archive : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/archive";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						unarchive : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/unarchive";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						state : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/state";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						rawReprocess : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/rawReprocess";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						filterMultipleProjectsIntoOne : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/filterMultipleProjectsIntoOne";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Docs : {
				url : "/Docs",
			
				},
			
			ProjectFolder : {
				url : "/ProjectFolder",
			
						getList : function(data,callback){
						let callUrl = this.url + "/getList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						create : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/create";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						rename : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/rename";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						delete : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/delete";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			ProcessData : {
				url : "/ProcessData",
			
						processNERD : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/processNERD";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						reprocessAspect : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/reprocessAspect";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			_asyncInfo : [
				"/Alert/check",
		"/Alert/testEmail",
		"/Instance/create",
		"/Export/data",
		"/Export/project",
		"/Import/search",
		"/Import/file",
		"/Import/augmentation",
		"/Reports/generate",
		"/AutomatedReport/generateForAlert",
		"/AutomatedReport/generateAnalyzeDoc",
		"/AutomatedReport/generate",
		"/JobTemplate/execute",
		"/Filter/compileFilter",
		"/Filter/create",
		"/Filter/modify",
		"/Search/capture",
		"/AutoCapture/run",
		"/Dictionary/applyCsvCustom",
		"/Project/duplicateWithData",
		"/Project/cloneWithData",
		"/Project/copyData",
		"/Project/createFromProjectData",
		"/Project/waitForPreprocessing",
		"/Project/filterMultipleProjectsIntoOne",
		"/ProcessData/processNERD",
		"/ProcessData/reprocessAspect"
				]
		};