const NxApiEndpoints = {
        
          
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
      
      
          
      Metadata : {
          
          url : "/metadata",
      
          getFields : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getFields";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          addField : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/addField";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          updateField : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/updateField";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          deleteField : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/deleteField";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          clear : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/clear";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          import : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/import";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
            
                      
          autocomplete : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/autocomplete";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
          
      UnitTest : {
          
          url : "/unitTest",
      
          resetTestInstance : function(data,callback){    
              let callUrl = this.url + "/resetTestInstance";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
      
      
          
      CaptureApi : {
          
          url : "/captureApi",
      
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
            
                      
          create : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/create";
              
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
            
                      
          get : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/get";
              
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
            
                      
          ingestMessagesInProjects : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/ingestMessagesInProjects";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
          
      Publisher : {
          
          url : "/publisher",
      
          getRatedStats : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getRatedStats";
              
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
            
                      
          getNb : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getNb";
              
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
            
                      
          saveMetadatas : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/saveMetadatas";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          deleteMetadata : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/deleteMetadata";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getMetadata : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getMetadata";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
              //ignoring /billing/subscriptionSettings
              //ignoring /billing/product
              //ignoring /billing/paypalReference
              //ignoring /billing/apiKey
              //ignoring /billing/admin
              //ignoring /billing/subscription
              //ignoring /billing/invoice
              //ignoring /billing/creditUsage
              //ignoring /billing/invoiceItem
              //ignoring /billing/purchasedProduct
              //ignoring /billing/transaction
              //ignoring /billing/module
              //ignoring /billing/paypalVault
              //ignoring /billing/creditBalance
              //ignoring /billing/domainGroup
              //ignoring /billing/credit
              //ignoring /billing/plan
              //ignoring /billing/gastank
              //ignoring /billing/exchange
              //ignoring /billing/address
              //ignoring /billing/subscriptionModule
              //ignoring /billing/domain
          
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
            
                      
          getExamples : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getExamples";
              
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
      
      
          
      Filter : {
          
          url : "/filter",
      
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
      
      
          
      Dshistorical : {
          
          url : "/dshistorical",
      
          request : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/request";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          deleteRequest : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/deleteRequest";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          generateCSDL : function(data,callback){    
              let callUrl = this.url + "/generateCSDL";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getGeneratedCSDL : function(data,callback){    
              let callUrl = this.url + "/getGeneratedCSDL";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          confirmRevisedCSDL : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/confirmRevisedCSDL";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          prepare : function(data,callback){    
              let callUrl = this.url + "/prepare";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getPreparedList : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getPreparedList";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          start : function(data,callback){    
              let callUrl = this.url + "/start";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          cleanHistoricalArchive : function(data,callback){    
              let callUrl = this.url + "/cleanHistoricalArchive";
              
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
      
      
          
      Category : {
          
          url : "/category",
      
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
      
      
          
      Brandwatch : {
          
          url : "/brandwatch",
      
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
              let callUrl = this.url + "/remove";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
          
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
          
      Account : {
          
          url : "/account",
      
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
            
                      
          remove : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/remove";
              
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
            
                      
          getSearches : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getSearches";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
          
      AccountOauth : {
          
          url : "/accountOauth",
      
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
            
                      
          remove : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/remove";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
          
      Gniphistorical : {
          
          url : "/gniphistorical",
      
          request : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/request";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          deleteRequest : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/deleteRequest";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getRequestList : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getRequestList";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getRequest : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getRequest";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getPreparedJobs : function(data,callback){    
              let callUrl = this.url + "/getPreparedJobs";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          prepareJobs : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/prepareJobs";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          startJobs : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/startJobs";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getJobStatus : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getJobStatus";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          generateQuote : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/generateQuote";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          modifyRequest : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/modifyRequest";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          redownloadPreparedJob : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/redownloadPreparedJob";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
          
      AccountProvider : {
          
          url : "/accountProvider",
      
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
            
                      
          remove : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/remove";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
      
      
          
      SdaBag : {
          
          url : "/sdaBag",
      
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
            
                      
          remove : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/remove";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
              //ignoring /data/clean
              //ignoring /data/enhance
          
      SdaWord : {
          
          url : "/sdaWord",
      
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
            
                      
          remove : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/remove";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          resetBag : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/resetBag";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
      },
      
      
          
      SdaLink : {
          
          url : "/sdaLink",
      
          createAllLinks : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/createAllLinks";
              
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
            
                      
          get : function(data,callback){    
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
              let callUrl = this.url + "/remove";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
            
                      
          hydrateTweets : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/hydrateTweets";
              
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
      
      
          
      AccountOauthLogin : {
          
          url : "/accountOauthLogin",
      
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
            
                      
          remove : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/remove";
              
              return Nx.Api.call(callUrl,data,callback);
            },
            
                      
          getForm : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/getForm";
              
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
            
                      
          delete : function(data,callback){
              if(typeof(data)==="function")
              {
                  callback = data;
                  data = {};   
              }    
              let callUrl = this.url + "/delete";
              
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
      
      
    _asyncInfo : [
		"/alert/check",
		"/alert/testEmail",
		"/search/capture",
		"/reports/generate",
		"/metadata/import",
		"/processData/processNERD",
		"/processData/reprocessAspect",
		"/autoCapture/run",
		"/export/data",
		"/export/project",
		"/project/duplicateWithData",
		"/project/cloneWithData",
		"/project/createFromProjectData",
		"/project/waitForPreprocessing",
		"/project/filterMultipleProjectsIntoOne",
		"/filter/compileFilter",
		"/filter/create",
		"/filter/modify",
		"/dictionary/applyCsvCustom",
		"/jobTemplate/execute",
		"/gniphistorical/prepareJobs",
		"/gniphistorical/generateQuote",
		"/automatedReport/generateForAlert",
		"/automatedReport/generateAnalyzeDoc",
		"/automatedReport/generate",
		"/import/search",
		"/import/hydrateTweets",
		"/import/file",
		"/import/augmentation",
		"/instance/create"
        ]
};