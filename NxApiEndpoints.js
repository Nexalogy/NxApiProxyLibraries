
				const NxApiEndpoints = {
			
			JobTemplate : {
				url : "/jobTemplate",
			
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
			
			Dictionary : {
				url : "/dictionary",
			
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
				url : "/document",
			
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
			
			Instance : {
				url : "/instance",
			
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

					
						createProjectBuffers : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/createProjectBuffers";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						createProjectBuffersAsync : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/createProjectBuffersAsync";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Upload : {
				url : "/upload",
			
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
			
			CaptureApi : {
				url : "/captureApi",
			
						testCaptureRateUpdateBySearchHash : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/testCaptureRateUpdateBySearchHash";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						testCaptureRateUpdate : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/testCaptureRateUpdate";

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

					
						unsubscribeSearch : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/unsubscribeSearch";

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

					
				},
			
			ProcessData : {
				url : "/processData",
			
						processNERD : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/processNERD";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Reports : {
				url : "/reports",
			
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
			
			Alert : {
				url : "/alert",
			
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
			
			AutoCapture : {
				url : "/autoCapture",
			
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
			
			Feature : {
				url : "/feature",
			
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
			
			BaseController : {
				url : "/baseController",
			
				},
			
			Transmit : {
				url : "/transmit",
			
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
			
			Drdc : {
				url : "/drdc",
			
						schedule : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/schedule";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						unschedule : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/unschedule";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getScheduleList : function(data,callback){
						let callUrl = this.url + "/getScheduleList";

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
						let callUrl = this.url + "/getSnapshotList";

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
			
			Jobs : {
				url : "/jobs",
			
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
			
			AutomatedReport : {
				url : "/automatedReport",
			
						addToAlert : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/addToAlert";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						updateReport : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/updateReport";

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
			
			Test : {
				url : "/test",
			
				},
			
			Home : {
				url : "/home",
			
				},
			
			ReportConfig : {
				url : "/reportConfig",
			
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
			
			Filter : {
				url : "/filter",
			
						getElasticsearchFilter : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getElasticsearchFilter";

						return Nx.Api.call(callUrl,data,callback);
						},

					
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
			
			Export : {
				url : "/export",
			
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
			
			Docs : {
				url : "/docs",
			
				},
			
			ProxyController : {
				url : "/proxyController",
			
				},
			
			Twitter : {
				url : "/twitter",
			
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
			
			Js : {
				url : "/js",
			
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
			
			Import : {
				url : "/import",
			
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
			
			UnitTest : {
				url : "/unitTest",
			
						resetTestInstance : function(data,callback){
						let callUrl = this.url + "/resetTestInstance";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Users : {
				url : "/users",
			
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
			
			Ingestion : {
				url : "/ingestion",
			
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
			
			Search : {
				url : "/search",
			
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

					
						initial : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/initial";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getInitialResult : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getInitialResult";

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

					
						topicSearch : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/topicSearch";

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
			
			Toad : {
				url : "/toad",
			
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
			
			Download : {
				url : "/download",
			
				},
			
			Translation : {
				url : "/translation",
			
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
			
			ProjectFolder : {
				url : "/projectFolder",
			
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
			
			Geoplaces : {
				url : "/geoplaces",
			
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

					
						autocompleteCities : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/autocompleteCities";

						return Nx.Api.call(callUrl,data,callback);
						},

					
						getCountryList : function(data,callback){
						let callUrl = this.url + "/getCountryList";

						return Nx.Api.call(callUrl,data,callback);
						},

					
				},
			
			Publisher : {
				url : "/publisher",
			
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
			
			Project : {
				url : "/project",
			
						duplicate : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/duplicate";

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

					
						getLatestFork : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/getLatestFork";

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

					
						reprocessML : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/reprocessML";

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

					
						rawReprocessViaStreaming : function(data,callback){
							if(typeof(data)==="function")
							{
								callback = data;
								data = {};
							}
						
						let callUrl = this.url + "/rawReprocessViaStreaming";

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
			
			_asyncInfo : [
				"/jobTemplate/execute",
		"/dictionary/applyCsvCustom",
		"/instance/create",
		"/instance/createProjectBuffers",
		"/instance/createProjectBuffersAsync",
		"/processData/processNERD",
		"/reports/generate",
		"/alert/check",
		"/alert/testEmail",
		"/autoCapture/run",
		"/drdc/generate",
		"/automatedReport/generateForAlert",
		"/automatedReport/generateAnalyzeDoc",
		"/automatedReport/generate",
		"/filter/getElasticsearchFilter",
		"/filter/compileFilter",
		"/filter/create",
		"/filter/modify",
		"/export/data",
		"/export/project",
		"/import/search",
		"/import/file",
		"/import/augmentation",
		"/search/initial",
		"/search/topicSearch",
		"/search/capture",
		"/project/cloneWithData",
		"/project/copyData",
		"/project/createFromProjectData",
		"/project/waitForPreprocessing",
		"/project/filterMultipleProjectsIntoOne"
				]
		};