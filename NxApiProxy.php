
			class NxApiResponse{
				/**
				 * Response object from the API
				 * @var object
				 */
				public $response;

				/**
				 * HTTP response status code
				 * @var int
				 */
				public $httpStatus;

				/**
				 * Indicates successful transport - 200 OK and valid JSON
				 * @var bool
				 */
				public $OK;

				/**
				 * HTTP error message, if any
				 * @var string
				 */
				public $httpErrorMessage = "";

				/**
				 * Indicates a successful API call
				 * @var bool
				 */
				public $success;

				/**
				 * API error code, if any
				 * @var int
				 */
				public $apiErrorCode;

				/**
				 * API error message, if any
				 * @var string
				 */
				public $apiErrorMessage;

				/**
				 * reference to the resource returned by curl_init
				 * @var resource
				 */
				public $curl;

				/**
				 * If the call had some warnings
				 * @var bool
				 */
				public $hasWarnings;

				/**
				 * reference to the warnings contained in the response object
				 * @var array
				 */
				public $warnings;

				/**
				 * the url of the call
				 * @var string
				 */
				public $url;

				/**
				 * the post array that was passed to the call
				 * @var array
				 */
				public $postVars;

				public function __construct(&$curlReference,$url,$post_vars){
					$this->curl = $curlReference;
					$this->url = $url;
					$this->postVars = $post_vars;
					$response = curl_exec($this->curl);
					curl_close($this->curl);
					$this->httpStatus = curl_getinfo($this->curl, CURLINFO_HTTP_CODE);
					if($this->httpStatus != 200){
						$this->OK = false;
						$this->httpErrorMessage = curl_error($this->curl);
						$this->postVars="[****]";
						$this->response = $response;
					} else {

						try {
							$this->response = json_decode($response);
							if(!$this->response){
								$this->OK = false;
								$this->httpErrorMessage = "Response Invalid JSON, undecodable";
								$this->response = $response;
								$this->responseError='';
								$this->errorCode=0;
								return;
							}
							$this->OK = true;
							$this->success = $this->response->success;
							if(!$this->success){
								$this->apiErrorMessage = $this->response->error->message;
								$this->apiErrorCode = $this->response->error->code;
							} else {
								$this->apiErrorMessage = '';
								$this->apiErrorCode = 0;
							}

							if(isset($this->response->warnings) && $this->response->warnings) {
								$this->hasWarnings = true;
								$this->warnings = $this->response->warnings;
							} else {
								$this->hasWarnings = false;
								$this->warnings = array();
							}
						} catch(Exception $x) {
							$this->response = null;
							$this->OK = false;
							$this->httpErrorMessage = "Response Invalid JSON, an exception was catched";
							$this->responseError='';
							$this->errorCode=0;
						}
					}
				}
			}

			class NxApi {

				public static $instance = "";
				public static $key = "";
				public static $url = "";
				public static $token = "";
				public static $filterId = "";

				public static function setInstance($instanceName){
					NxApi::$instance = $instanceName;
				}

				public static function setKey($key){
					NxApi::$key = $key;
				}

				public static function setToken($token){
					NxApi::$token = $token;
				}

				public static function setFilterId($filterId)
				{
					NxApi::$filterId = $filterId;
				}

				/**
				 * @return NexaApiResponse The executed and decoded cUrl in a wrapper;
				 */
				public static function call($url,$data = array())
				{
					$ch = curl_init();
					if(NxApi::$token) {
						$data["token"] = NxApi::$token;
					} else {
						$data["api_key"] = NxApi::$key;
						if($data["api_key"] == "" && defined("NEXA_API_KEY")){
							$data["api_key"] = NEXA_API_KEY;
						}
					}

					if(NxApi::$filterId != "" && !isset($data["filterId"])){
						$data["filterId"] = NxApi::$filterId;
					}

					$data["instance"] = NxApi::$instance;

					curl_setopt($ch, CURLOPT_HEADER, 0);
					curl_setopt($ch, CURLOPT_VERBOSE, 0);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible;)");
					curl_setopt($ch, CURLOPT_POST, true);
					curl_setopt($ch, CURLOPT_URL, (NxApi::$url?NxApi::$url:NEXA_API_URL) . $url);
					curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

					if(defined("SSL_USERNAME") && defined("SSL_PASSWORD")){
						curl_setopt($ch, CURLOPT_USERPWD, SSL_USERNAME . ":" . SSL_PASSWORD);
					}

					return new NxApiResponse($ch,$url,$data);
				}
			}
		
				class NxApiAlert
				{
			
					public static function get($projectId, $alertId, $options=array())
					{
						$url = '/Alert/get';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($projectId, $options=array('sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Alert/getList';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getRecordedAlerts($projectId, $options=array())
					{
						$url = '/Alert/getRecordedAlerts';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getDocumentsForRecordedAlerts($projectId, $detected_alert_id, $options=array())
					{
						$url = '/Alert/getDocumentsForRecordedAlerts';

						$post = array(
								'projectId'=>$projectId,
			'detected_alert_id'=>$detected_alert_id,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function create($projectId, $alertName, $rule, $options=array('threshold'=>'', 'activated'=>'', 'interval'=>'', 'send_email'=>'', 'search_terms_included'=>'', 'alertEmailList'=>'', 'apply_to_all'=>''))
					{
						$url = '/Alert/create';

						$post = array(
								'projectId'=>$projectId,
			'alertName'=>$alertName,
			'rule'=>$rule,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function delete($projectId, $alertId, $options=array())
					{
						$url = '/Alert/delete';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modify($projectId, $alertId, $options=array('alertName'=>'', 'rule'=>'', 'threshold'=>'', 'activated'=>'', 'interval'=>'', 'send_email'=>'', 'search_terms_included'=>'', 'alertEmailList'=>'', 'apply_to_all'=>''))
					{
						$url = '/Alert/modify';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function check($projectId, $alertId, $options=array())
					{
						$url = '/Alert/check';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function testEmail($projectId, $alertId, $options=array())
					{
						$url = '/Alert/testEmail';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiAutoCapture
				{
			
					public static function run($projectId, $options=array('callbackUrl'=>''))
					{
						$url = '/AutoCapture/run';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function start($projectId, $interval, $options=array())
					{
						$url = '/AutoCapture/start';

						$post = array(
								'projectId'=>$projectId,
			'interval'=>$interval,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function reschedule($projectId, $interval, $options=array())
					{
						$url = '/AutoCapture/reschedule';

						$post = array(
								'projectId'=>$projectId,
			'interval'=>$interval,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function stop($projectId, $options=array())
					{
						$url = '/AutoCapture/stop';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function stopAll($options=array('apiKeyOfUser'=>'', 'instanceName'=>''))
					{
						$url = '/AutoCapture/stopAll';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function status($projectId, $options=array())
					{
						$url = '/AutoCapture/status';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiAutomatedReport
				{
			
					public static function addToAlert($projectId, $alertId, $automatedReportTemplateId, $options=array('filterId'=>''))
					{
						$url = '/AutomatedReport/addToAlert';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
			'automatedReportTemplateId'=>$automatedReportTemplateId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function updateReport($projectId, $filePath, $renderObjsFilename, $content, $options=array())
					{
						$url = '/AutomatedReport/updateReport';

						$post = array(
								'projectId'=>$projectId,
			'filePath'=>$filePath,
			'renderObjsFilename'=>$renderObjsFilename,
			'content'=>$content,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function removeFromAlert($projectId, $alertId, $automatedReportTemplateId, $filterId, $options=array())
					{
						$url = '/AutomatedReport/removeFromAlert';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
			'automatedReportTemplateId'=>$automatedReportTemplateId,
			'filterId'=>$filterId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getListForAlert($projectId, $alertId, $options=array())
					{
						$url = '/AutomatedReport/getListForAlert';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($projectId, $options=array('sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/AutomatedReport/getList';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $id, $options=array())
					{
						$url = '/AutomatedReport/get';

						$post = array(
								'projectId'=>$projectId,
			'id'=>$id,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function create($projectId, $name, $options=array('intervalEvaluated'=>'', 'scheduleCrontab'=>'', 'scheduleActive'=>'', 'scheduleFilterId'=>'', 'scheduleStartOn'=>'', 'scheduleRecipientList'=>'', 'reportList'=>'', 'reportTypes'=>''))
					{
						$url = '/AutomatedReport/create';

						$post = array(
								'projectId'=>$projectId,
			'name'=>$name,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modify($projectId, $id, $name, $options=array('intervalEvaluated'=>'', 'scheduleCrontab'=>'', 'scheduleActive'=>'', 'scheduleFilterId'=>'', 'scheduleStartOn'=>'', 'scheduleRecipientList'=>'', 'reportList'=>'', 'reportTypes'=>''))
					{
						$url = '/AutomatedReport/modify';

						$post = array(
								'projectId'=>$projectId,
			'id'=>$id,
			'name'=>$name,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function delete($projectId, $id, $options=array())
					{
						$url = '/AutomatedReport/delete';

						$post = array(
								'projectId'=>$projectId,
			'id'=>$id,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function generateForAlert($projectId, $alertId, $options=array())
					{
						$url = '/AutomatedReport/generateForAlert';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function loadRenderObjsFile($projectId, $filename, $options=array())
					{
						$url = '/AutomatedReport/loadRenderObjsFile';

						$post = array(
								'projectId'=>$projectId,
			'filename'=>$filename,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function generateAnalyzeDoc($projectId, $metas, $reportsConfigs, $options=array())
					{
						$url = '/AutomatedReport/generateAnalyzeDoc';

						$post = array(
								'projectId'=>$projectId,
			'metas'=>$metas,
			'reportsConfigs'=>$reportsConfigs,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function generate($projectId, $id, $reason, $filename, $options=array('filterDescription'=>'', 'notify'=>''))
					{
						$url = '/AutomatedReport/generate';

						$post = array(
								'projectId'=>$projectId,
			'id'=>$id,
			'reason'=>$reason,
			'filename'=>$filename,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getSnapshotList($projectId, $id, $options=array())
					{
						$url = '/AutomatedReport/getSnapshotList';

						$post = array(
								'projectId'=>$projectId,
			'id'=>$id,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getLastSnapshotsForAlert($projectId, $alertId, $options=array())
					{
						$url = '/AutomatedReport/getLastSnapshotsForAlert';

						$post = array(
								'projectId'=>$projectId,
			'alertId'=>$alertId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function downloadSnapshot($projectId, $id, $filename, $options=array())
					{
						$url = '/AutomatedReport/downloadSnapshot';

						$post = array(
								'projectId'=>$projectId,
			'id'=>$id,
			'filename'=>$filename,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiBaseController
				{
			
				}
			
				class NxApiCaptureApi
				{
			
					public static function testCaptureRateUpdateBySearchHash($searchHash, $content, $options=array())
					{
						$url = '/CaptureApi/testCaptureRateUpdateBySearchHash';

						$post = array(
								'searchHash'=>$searchHash,
			'content'=>$content,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function testCaptureRateUpdate($projectId, $filePath, $content, $options=array())
					{
						$url = '/CaptureApi/testCaptureRateUpdate';

						$post = array(
								'projectId'=>$projectId,
			'filePath'=>$filePath,
			'content'=>$content,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $filePath, $options=array())
					{
						$url = '/CaptureApi/get';

						$post = array(
								'projectId'=>$projectId,
			'filePath'=>$filePath,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function subscribeProject($projectId, $options=array('searchId'=>''))
					{
						$url = '/CaptureApi/subscribeProject';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function unsubscribeProject($projectId, $options=array())
					{
						$url = '/CaptureApi/unsubscribeProject';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function unsubscribeSearch($projectId, $searchId, $options=array())
					{
						$url = '/CaptureApi/unsubscribeSearch';

						$post = array(
								'projectId'=>$projectId,
			'searchId'=>$searchId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function test($projectId, $type, $options=array('exactPhrase'=>'', 'ands'=>'', 'ors'=>'', 'nots'=>'', 'language'=>'', 'latitude'=>'', 'longitude'=>'', 'city'=>'', 'radius'=>'', 'url'=>'', 'metric'=>'', 'tag'=>'', 'rule'=>'', 'slices'=>'', 'langTag'=>'', 'siteType'=>'', 'siteCategory'=>'', 'site'=>'', 'hasVideo'=>'', 'polygons'=>'', 'startFrom'=>''))
					{
						$url = '/CaptureApi/test';

						$post = array(
								'projectId'=>$projectId,
			'type'=>$type,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiDictionary
				{
			
					public static function getWords($partOfWord, $languageTag, $options=array())
					{
						$url = '/Dictionary/getWords';

						$post = array(
								'partOfWord'=>$partOfWord,
			'languageTag'=>$languageTag,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function autocomplete($partOfWord, $languageTag, $options=array('noStopWords'=>'', 'limit'=>''))
					{
						$url = '/Dictionary/autocomplete';

						$post = array(
								'partOfWord'=>$partOfWord,
			'languageTag'=>$languageTag,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function addCustom($projectId, $wordId, $options=array('replacement'=>'', 'regroupWithCustomWordId'=>'', 'isStopword'=>''))
					{
						$url = '/Dictionary/addCustom';

						$post = array(
								'projectId'=>$projectId,
			'wordId'=>$wordId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modifyCustom($projectId, $customWordId, $options=array('wordId'=>'', 'replacement'=>'', 'regroupWithCustomWordId'=>'', 'isStopword'=>''))
					{
						$url = '/Dictionary/modifyCustom';

						$post = array(
								'projectId'=>$projectId,
			'customWordId'=>$customWordId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function deleteCustom($projectId, $customWordId, $options=array())
					{
						$url = '/Dictionary/deleteCustom';

						$post = array(
								'projectId'=>$projectId,
			'customWordId'=>$customWordId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getCustomList($projectId, $options=array())
					{
						$url = '/Dictionary/getCustomList';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function cleanCustom($projectId, $options=array())
					{
						$url = '/Dictionary/cleanCustom';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function applyCsvCustom($projectId, $file, $options=array())
					{
						$url = '/Dictionary/applyCsvCustom';

						$post = array(
								'projectId'=>$projectId,
			'file'=>$file,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function exportCsv($projectId, $options=array())
					{
						$url = '/Dictionary/exportCsv';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getWordList($wordId, $options=array('projectId'=>''))
					{
						$url = '/Dictionary/getWordList';

						$post = array(
								'wordId'=>$wordId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiDocs
				{
			
				}
			
				class NxApiDocument
				{
			
					public static function delete($projectId, $fileName, $options=array())
					{
						$url = '/Document/delete';

						$post = array(
								'projectId'=>$projectId,
			'fileName'=>$fileName,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function renameFile($projectId, $actualFileName, $newFileName, $options=array())
					{
						$url = '/Document/renameFile';

						$post = array(
								'projectId'=>$projectId,
			'actualFileName'=>$actualFileName,
			'newFileName'=>$newFileName,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $dataId, $options=array('getComment'=>''))
					{
						$url = '/Document/get';

						$post = array(
								'projectId'=>$projectId,
			'dataId'=>$dataId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($projectId, $options=array('filterDescription'=>'', 'wordIds'=>'', 'dataIds'=>'', 'publisherIds'=>'', 'dimensions'=>'', 'orderBy'=>'', 'isOrderAscending'=>'', 'withTotalCount'=>'', 'removeDuplicates'=>'', 'sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Document/getList';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function saveMetadata($projectId, $dataId, $status, $comment, $options=array())
					{
						$url = '/Document/saveMetadata';

						$post = array(
								'projectId'=>$projectId,
			'dataId'=>$dataId,
			'status'=>$status,
			'comment'=>$comment,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiDownload
				{
			
				}
			
				class NxApiDrdc
				{
			
					public static function schedule($scheduleCrontab, $config, $reportTypes, $options=array('scheduleStartOn'=>''))
					{
						$url = '/Drdc/schedule';

						$post = array(
								'scheduleCrontab'=>$scheduleCrontab,
			'config'=>$config,
			'reportTypes'=>$reportTypes,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function unschedule($scheduleCrontabId, $options=array())
					{
						$url = '/Drdc/unschedule';

						$post = array(
								'scheduleCrontabId'=>$scheduleCrontabId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getScheduleList($options=array())
					{
						$url = '/Drdc/getScheduleList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function generate($config, $reportTypes, $options=array())
					{
						$url = '/Drdc/generate';

						$post = array(
								'config'=>$config,
			'reportTypes'=>$reportTypes,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getSnapshotList($options=array())
					{
						$url = '/Drdc/getSnapshotList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function downloadSnapshot($filename, $options=array())
					{
						$url = '/Drdc/downloadSnapshot';

						$post = array(
								'filename'=>$filename,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiExport
				{
			
					public static function download($projectId, $fileId, $fileName, $options=array())
					{
						$url = '/Export/download';

						$post = array(
								'projectId'=>$projectId,
			'fileId'=>$fileId,
			'fileName'=>$fileName,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function adminDownload($projectId, $fileId, $options=array())
					{
						$url = '/Export/adminDownload';

						$post = array(
								'projectId'=>$projectId,
			'fileId'=>$fileId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function data($projectId, $format, $options=array('start'=>'', 'file'=>'', 'limit'=>'', 'options'=>'', 'filterDescription'=>''))
					{
						$url = '/Export/data';

						$post = array(
								'projectId'=>$projectId,
			'format'=>$format,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function project($projectId, $options=array())
					{
						$url = '/Export/project';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiFeature
				{
			
					public static function changeAccess($instanceId, $featureId, $access, $options=array())
					{
						$url = '/Feature/changeAccess';

						$post = array(
								'instanceId'=>$instanceId,
			'featureId'=>$featureId,
			'access'=>$access,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($options=array('sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Feature/getList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getInstanceAccess($options=array('instance'=>'', 'instanceId'=>''))
					{
						$url = '/Feature/getInstanceAccess';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiFilter
				{
			
					public static function getElasticsearchFilter($projectId, $filterId, $options=array())
					{
						$url = '/Filter/getElasticsearchFilter';

						$post = array(
								'projectId'=>$projectId,
			'filterId'=>$filterId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function compileFilter($projectId, $options=array('filterId'=>'', 'minDataId'=>'', 'maxDataId'=>'', 'dataIds'=>'', 'publisherIds'=>'', 'generateForAllFilters'=>''))
					{
						$url = '/Filter/compileFilter';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function create($projectId, $filter, $options=array())
					{
						$url = '/Filter/create';

						$post = array(
								'projectId'=>$projectId,
			'filter'=>$filter,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modify($projectId, $filter, $options=array())
					{
						$url = '/Filter/modify';

						$post = array(
								'projectId'=>$projectId,
			'filter'=>$filter,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($projectId, $options=array('sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Filter/getList';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $filterId, $format, $options=array())
					{
						$url = '/Filter/get';

						$post = array(
								'projectId'=>$projectId,
			'filterId'=>$filterId,
			'format'=>$format,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function delete($projectId, $filterId, $options=array())
					{
						$url = '/Filter/delete';

						$post = array(
								'projectId'=>$projectId,
			'filterId'=>$filterId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function setForProject($projectId, $filterId, $options=array())
					{
						$url = '/Filter/setForProject';

						$post = array(
								'projectId'=>$projectId,
			'filterId'=>$filterId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiGeoplaces
				{
			
					public static function create($options=array('name'=>'', 'geometry'=>''))
					{
						$url = '/Geoplaces/create';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modify($id, $options=array('name'=>'', 'geometry'=>''))
					{
						$url = '/Geoplaces/modify';

						$post = array(
								'id'=>$id,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($id, $options=array())
					{
						$url = '/Geoplaces/get';

						$post = array(
								'id'=>$id,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($options=array('sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Geoplaces/getList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function remove($id, $options=array())
					{
						$url = '/Geoplaces/remove';

						$post = array(
								'id'=>$id,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function autocomplete($name, $options=array('limit'=>''))
					{
						$url = '/Geoplaces/autocomplete';

						$post = array(
								'name'=>$name,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function autocompleteCities($name, $countryCode, $options=array('limit'=>''))
					{
						$url = '/Geoplaces/autocompleteCities';

						$post = array(
								'name'=>$name,
			'countryCode'=>$countryCode,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getCountryList($options=array())
					{
						$url = '/Geoplaces/getCountryList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiHome
				{
			
				}
			
				class NxApiImport
				{
			
					public static function search($projectId, $options=array('searchIds'=>'', 'callbackUrl'=>'', 'reset'=>'', 'regenerateLexicon'=>''))
					{
						$url = '/Import/search';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function file($projectId, $dataType, $options=array('file'=>'', 'reset'=>'', 'callbackUrl'=>'', 'waitForPreprocessing'=>'', 'strict'=>'', 'UPLOAD_IDENTIFIER'=>''))
					{
						$url = '/Import/file';

						$post = array(
								'projectId'=>$projectId,
			'dataType'=>$dataType,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function augmentation($projectId, $data, $options=array())
					{
						$url = '/Import/augmentation';

						$post = array(
								'projectId'=>$projectId,
			'data'=>$data,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiIngestion
				{
			
					public static function retrieveProjects($options=array('destination'=>'', 'searchHash'=>''))
					{
						$url = '/Ingestion/retrieveProjects';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function IngestMessagesInProjects($jsonMessages, $options=array('destination'=>'', 'searchHash'=>''))
					{
						$url = '/Ingestion/IngestMessagesInProjects';

						$post = array(
								'jsonMessages'=>$jsonMessages,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiInstance
				{
			
					public static function create($name, $label, $options=array('hostname'=>''))
					{
						$url = '/Instance/create';

						$post = array(
								'name'=>$name,
			'label'=>$label,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function createAsync($name, $label, $options=array('hostname'=>''))
					{
						$url = '/Instance/createAsync';

						$post = array(
								'name'=>$name,
			'label'=>$label,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function update($name, $label, $options=array('hostname'=>''))
					{
						$url = '/Instance/update';

						$post = array(
								'name'=>$name,
			'label'=>$label,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function grantAccess($userId, $instanceId, $domainId, $options=array())
					{
						$url = '/Instance/grantAccess';

						$post = array(
								'userId'=>$userId,
			'instanceId'=>$instanceId,
			'domainId'=>$domainId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function removeAccess($userId, $instanceId, $domainId, $options=array())
					{
						$url = '/Instance/removeAccess';

						$post = array(
								'userId'=>$userId,
			'instanceId'=>$instanceId,
			'domainId'=>$domainId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($options=array('domainId'=>'', 'sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Instance/getList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getAccessList($options=array('domainId'=>''))
					{
						$url = '/Instance/getAccessList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function createProjectBuffers($options=array('bufferSize'=>''))
					{
						$url = '/Instance/createProjectBuffers';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function createProjectBuffersAsync($options=array('bufferSize'=>''))
					{
						$url = '/Instance/createProjectBuffersAsync';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiJobTemplate
				{
			
					public static function get($jobTemplateId, $options=array())
					{
						$url = '/JobTemplate/get';

						$post = array(
								'jobTemplateId'=>$jobTemplateId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($options=array('public'=>'', 'sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/JobTemplate/getList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function create($name, $comment, $jobsDescription, $options=array('public'=>''))
					{
						$url = '/JobTemplate/create';

						$post = array(
								'name'=>$name,
			'comment'=>$comment,
			'jobsDescription'=>$jobsDescription,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modify($jobTemplateId, $name, $comment, $jobsDescription, $options=array('public'=>''))
					{
						$url = '/JobTemplate/modify';

						$post = array(
								'jobTemplateId'=>$jobTemplateId,
			'name'=>$name,
			'comment'=>$comment,
			'jobsDescription'=>$jobsDescription,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function execute($jobTemplateId, $variables, $options=array('globalDynamicFilterDescription'=>''))
					{
						$url = '/JobTemplate/execute';

						$post = array(
								'jobTemplateId'=>$jobTemplateId,
			'variables'=>$variables,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function start($jobTemplateId, $jobTemplateVariables, $options=array('jobTemplateDynamicFilter'=>'', 'autoCaptureId'=>'', 'projectId'=>'', 'schedule'=>''))
					{
						$url = '/JobTemplate/start';

						$post = array(
								'jobTemplateId'=>$jobTemplateId,
			'jobTemplateVariables'=>$jobTemplateVariables,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function stop($options=array('jobTemplateScheduledId'=>'', 'autoCaptureId'=>'', 'projectId'=>''))
					{
						$url = '/JobTemplate/stop';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function status($options=array('jobTemplateScheduledId'=>'', 'autocaptureId'=>'', 'projectId'=>''))
					{
						$url = '/JobTemplate/status';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiJobs
				{
			
					public static function status($jobId, $options=array())
					{
						$url = '/Jobs/status';

						$post = array(
								'jobId'=>$jobId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getArchivedJob($jobId, $options=array())
					{
						$url = '/Jobs/getArchivedJob';

						$post = array(
								'jobId'=>$jobId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($options=array('sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Jobs/getList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiJs
				{
			
					public static function getScript($uuid, $options=array())
					{
						$url = '/Js/getScript';

						$post = array(
								'uuid'=>$uuid,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getToken($uuid, $options=array())
					{
						$url = '/Js/getToken';

						$post = array(
								'uuid'=>$uuid,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiProcessData
				{
			
					public static function processNERD($projectId, $options=array())
					{
						$url = '/ProcessData/processNERD';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiProject
				{
			
					public static function duplicate($projectId, $options=array('name'=>'', 'destinationInstance'=>'', 'fork'=>''))
					{
						$url = '/Project/duplicate';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function cloneWithData($projectId, $options=array('name'=>'', 'destinationInstance'=>''))
					{
						$url = '/Project/cloneWithData';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function copyData($projectId, $options=array('toProjectId'=>'', 'destinationInstance'=>''))
					{
						$url = '/Project/copyData';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function create($name, $lang, $type, $options=array('projectLeader'=>'', 'projectManager'=>'', 'client'=>'', 'maxTopWords'=>'', 'maxTopCoWords'=>'', 'maxTopPublishers'=>'', 'isPublic'=>'', 'userDefinedId'=>'', 'userDefinedStatusId'=>'', 'userDefinedFolderId'=>'', 'isStreamingProject'=>'', 'isElasticSearchProject'=>''))
					{
						$url = '/Project/create';

						$post = array(
								'name'=>$name,
			'lang'=>$lang,
			'type'=>$type,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $options=array())
					{
						$url = '/Project/get';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function createFromProjectData($projectId, $projectName, $dataSource, $options=array())
					{
						$url = '/Project/createFromProjectData';

						$post = array(
								'projectId'=>$projectId,
			'projectName'=>$projectName,
			'dataSource'=>$dataSource,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getLatestFork($projectId, $amountGeneration, $options=array())
					{
						$url = '/Project/getLatestFork';

						$post = array(
								'projectId'=>$projectId,
			'amountGeneration'=>$amountGeneration,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($options=array('status'=>'', 'sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Project/getList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getAutocaptureList($options=array('status'=>''))
					{
						$url = '/Project/getAutocaptureList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getPreprocessingState($projectId, $options=array())
					{
						$url = '/Project/getPreprocessingState';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function reprocessML($projectId, $options=array('reprocessingState'=>''))
					{
						$url = '/Project/reprocessML';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function reprocess($projectId, $options=array('reprocessingState'=>''))
					{
						$url = '/Project/reprocess';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function waitForPreprocessing($projectId, $options=array('waitType'=>''))
					{
						$url = '/Project/waitForPreprocessing';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function resultsByQuery($projectId, $options=array())
					{
						$url = '/Project/resultsByQuery';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getProjectDataDates($projectId, $options=array())
					{
						$url = '/Project/getProjectDataDates';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modify($projectId, $options=array('name'=>'', 'lang'=>'', 'projectLeader'=>'', 'projectManager'=>'', 'client'=>'', 'maxTopWords'=>'', 'maxTopCoWords'=>'', 'maxTopPublisher'=>'', 'isPublic'=>'', 'userDefinedId'=>'', 'userDefinedStatusId'=>'', 'userDefinedFolderId'=>'', 'kijThreshold'=>'', 'status'=>'', 'defaultGeneralFilterId'=>'', 'alertEmails'=>'', 'isStreamingProject'=>'', 'isElasticSearchProject'=>''))
					{
						$url = '/Project/modify';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function find($options=array('name'=>'', 'creator'=>'', 'createdMin'=>'', 'createdMax'=>'', 'modifiedMin'=>'', 'modifiedMax'=>''))
					{
						$url = '/Project/find';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function remove($projectId, $options=array())
					{
						$url = '/Project/remove';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function archive($projectId, $options=array())
					{
						$url = '/Project/archive';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function unarchive($projectId, $options=array())
					{
						$url = '/Project/unarchive';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function state($options=array('projectId'=>''))
					{
						$url = '/Project/state';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function rawReprocessViaStreaming($options=array('projectId'=>''))
					{
						$url = '/Project/rawReprocessViaStreaming';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function rawReprocess($options=array('projectId'=>''))
					{
						$url = '/Project/rawReprocess';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function filterMultipleProjectsIntoOne($fromProjectIds, $fromInstanceName, $toProjectId, $toInstanceName, $filterDescription, $options=array())
					{
						$url = '/Project/filterMultipleProjectsIntoOne';

						$post = array(
								'fromProjectIds'=>$fromProjectIds,
			'fromInstanceName'=>$fromInstanceName,
			'toProjectId'=>$toProjectId,
			'toInstanceName'=>$toInstanceName,
			'filterDescription'=>$filterDescription,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiProjectFolder
				{
			
					public static function getList($options=array('sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/ProjectFolder/getList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function create($folderName, $options=array('order'=>''))
					{
						$url = '/ProjectFolder/create';

						$post = array(
								'folderName'=>$folderName,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function rename($folderId, $folderName, $options=array('order'=>''))
					{
						$url = '/ProjectFolder/rename';

						$post = array(
								'folderId'=>$folderId,
			'folderName'=>$folderName,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function delete($folderId, $options=array())
					{
						$url = '/ProjectFolder/delete';

						$post = array(
								'folderId'=>$folderId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiPublisher
				{
			
					public static function getList($projectId, $options=array('options'=>'', 'sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Publisher/getList';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $options=array('publisherId'=>'', 'publisherIds'=>''))
					{
						$url = '/Publisher/get';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getNb($projectId, $options=array())
					{
						$url = '/Publisher/getNb';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiReportConfig
				{
			
					public static function set($projectId, $type, $config, $options=array('name'=>''))
					{
						$url = '/ReportConfig/set';

						$post = array(
								'projectId'=>$projectId,
			'type'=>$type,
			'config'=>$config,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $name, $type, $options=array())
					{
						$url = '/ReportConfig/get';

						$post = array(
								'projectId'=>$projectId,
			'name'=>$name,
			'type'=>$type,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($projectId, $options=array('name'=>'', 'type'=>'', 'sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/ReportConfig/getList';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function remove($name, $options=array())
					{
						$url = '/ReportConfig/remove';

						$post = array(
								'name'=>$name,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getSchema($options=array('format'=>''))
					{
						$url = '/ReportConfig/getSchema';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiReports
				{
			
					public static function update($projectId, $filePath, $content, $options=array())
					{
						$url = '/Reports/update';

						$post = array(
								'projectId'=>$projectId,
			'filePath'=>$filePath,
			'content'=>$content,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getReportNames($projectId, $type, $options=array())
					{
						$url = '/Reports/getReportNames';

						$post = array(
								'projectId'=>$projectId,
			'type'=>$type,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $type, $format, $options=array('accessibility'=>'', 'options'=>'', 'reportName'=>'', 'filterDescription'=>''))
					{
						$url = '/Reports/get';

						$post = array(
								'projectId'=>$projectId,
			'type'=>$type,
			'format'=>$format,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getTypes($options=array())
					{
						$url = '/Reports/getTypes';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function generate($type, $projectId, $options=array('limit'=>'', 'options'=>'', 'filterDescription'=>'', 'reportName'=>'', 'force'=>''))
					{
						$url = '/Reports/generate';

						$post = array(
								'type'=>$type,
			'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiSearch
				{
			
					public static function create($projectId, $type, $name, $options=array('exactPhrase'=>'', 'ands'=>'', 'ors'=>'', 'nots'=>'', 'latitude'=>'', 'longitude'=>'', 'country_code'=>'', 'city'=>'', 'radius'=>'', 'url'=>'', 'metric'=>'', 'tag'=>'', 'rule'=>'', 'slices'=>'', 'siteType'=>'', 'siteCategory'=>'', 'site'=>'', 'polygons'=>'', 'hasVideo'=>'', 'seeds'=>'', 'dos'=>''))
					{
						$url = '/Search/create';

						$post = array(
								'projectId'=>$projectId,
			'type'=>$type,
			'name'=>$name,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modify($projectId, $searchId, $type, $options=array('name'=>'', 'exactPhrase'=>'', 'ands'=>'', 'ors'=>'', 'nots'=>'', 'latitude'=>'', 'longitude'=>'', 'country_code'=>'', 'city'=>'', 'url'=>'', 'radius'=>'', 'tag'=>'', 'rule'=>'', 'metric'=>'', 'slices'=>'', 'siteType'=>'', 'siteCategory'=>'', 'site'=>'', 'polygons'=>'', 'hasVideo'=>'', 'seeds'=>'', 'dos'=>''))
					{
						$url = '/Search/modify';

						$post = array(
								'projectId'=>$projectId,
			'searchId'=>$searchId,
			'type'=>$type,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($projectId, $searchId, $options=array())
					{
						$url = '/Search/get';

						$post = array(
								'projectId'=>$projectId,
			'searchId'=>$searchId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($projectId, $options=array('sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Search/getList';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function delete($projectId, $searchId, $options=array())
					{
						$url = '/Search/delete';

						$post = array(
								'projectId'=>$projectId,
			'searchId'=>$searchId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function duplicate($projectId, $searchId, $options=array())
					{
						$url = '/Search/duplicate';

						$post = array(
								'projectId'=>$projectId,
			'searchId'=>$searchId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function initial($projectId, $searchTerms, $options=array('force'=>''))
					{
						$url = '/Search/initial';

						$post = array(
								'projectId'=>$projectId,
			'searchTerms'=>$searchTerms,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getInitialResult($projectId, $searchTerms, $options=array())
					{
						$url = '/Search/getInitialResult';

						$post = array(
								'projectId'=>$projectId,
			'searchTerms'=>$searchTerms,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function preview($projectId, $searchId, $options=array())
					{
						$url = '/Search/preview';

						$post = array(
								'projectId'=>$projectId,
			'searchId'=>$searchId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function test($type, $options=array('exactPhrase'=>'', 'ands'=>'', 'ors'=>'', 'nots'=>'', 'language'=>'', 'latitude'=>'', 'longitude'=>'', 'city'=>'', 'radius'=>'', 'url'=>'', 'metric'=>'', 'tag'=>'', 'rule'=>'', 'slices'=>'', 'langTag'=>'', 'siteType'=>'', 'siteCategory'=>'', 'site'=>'', 'hasVideo'=>'', 'polygons'=>'', 'startFrom'=>''))
					{
						$url = '/Search/test';

						$post = array(
								'type'=>$type,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function topicSearch($projectId, $searches, $options=array())
					{
						$url = '/Search/topicSearch';

						$post = array(
								'projectId'=>$projectId,
			'searches'=>$searches,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function capture($projectId, $searchId, $options=array('limit'=>''))
					{
						$url = '/Search/capture';

						$post = array(
								'projectId'=>$projectId,
			'searchId'=>$searchId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getDownload($projectId, $searchId, $options=array())
					{
						$url = '/Search/getDownload';

						$post = array(
								'projectId'=>$projectId,
			'searchId'=>$searchId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getSuggestedInterval($options=array('projectId'=>'', 'showValues'=>''))
					{
						$url = '/Search/getSuggestedInterval';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiTest
				{
			
				}
			
				class NxApiToad
				{
			
					public static function getStatus($projectId, $options=array())
					{
						$url = '/Toad/getStatus';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getPublisherSeedsFromActorByQuery($projectId, $options=array())
					{
						$url = '/Toad/getPublisherSeedsFromActorByQuery';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiTranslation
				{
			
					public static function translateText($service, $toLang, $textArray, $options=array('fromLang'=>''))
					{
						$url = '/Translation/translateText';

						$post = array(
								'service'=>$service,
			'toLang'=>$toLang,
			'textArray'=>$textArray,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function translateData($service, $toLang, $projectId, $dataIds, $options=array('fromLang'=>''))
					{
						$url = '/Translation/translateData';

						$post = array(
								'service'=>$service,
			'toLang'=>$toLang,
			'projectId'=>$projectId,
			'dataIds'=>$dataIds,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getAvailableLangs($options=array())
					{
						$url = '/Translation/getAvailableLangs';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiTransmit
				{
			
					public static function data($destination, $calls, $options=array())
					{
						$url = '/Transmit/data';

						$post = array(
								'destination'=>$destination,
			'calls'=>$calls,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiTwitter
				{
			
					public static function callApi($method, $url, $params, $options=array())
					{
						$url = '/Twitter/callApi';

						$post = array(
								'method'=>$method,
			'url'=>$url,
			'params'=>$params,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiUnitTest
				{
			
					public static function resetTestInstance($options=array())
					{
						$url = '/UnitTest/resetTestInstance';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiUpload
				{
			
					public static function getToken($options=array())
					{
						$url = '/Upload/getToken';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function progress($UPLOAD_IDENTIFIER, $options=array())
					{
						$url = '/Upload/progress';

						$post = array(
								'UPLOAD_IDENTIFIER'=>$UPLOAD_IDENTIFIER,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiUsers
				{
			
					public static function login($email, $password, $domainId, $options=array())
					{
						$url = '/Users/login';

						$post = array(
								'email'=>$email,
			'password'=>$password,
			'domainId'=>$domainId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function create($email, $role, $options=array('password'=>'', 'lang'=>'', 'userName'=>'', 'company'=>'', 'phone'=>'', 'domainId'=>''))
					{
						$url = '/Users/create';

						$post = array(
								'email'=>$email,
			'role'=>$role,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function remove($userId, $options=array())
					{
						$url = '/Users/remove';

						$post = array(
								'userId'=>$userId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function createApiKey($userId, $domainId, $options=array('status'=>''))
					{
						$url = '/Users/createApiKey';

						$post = array(
								'userId'=>$userId,
			'domainId'=>$domainId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modifyApiKey($userId, $domainId, $status, $options=array())
					{
						$url = '/Users/modifyApiKey';

						$post = array(
								'userId'=>$userId,
			'domainId'=>$domainId,
			'status'=>$status,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function removeApiKey($userId, $domainId, $options=array())
					{
						$url = '/Users/removeApiKey';

						$post = array(
								'userId'=>$userId,
			'domainId'=>$domainId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getApiKey($userId, $domainId, $options=array())
					{
						$url = '/Users/getApiKey';

						$post = array(
								'userId'=>$userId,
			'domainId'=>$domainId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function get($options=array('id'=>'', 'email'=>''))
					{
						$url = '/Users/get';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getList($options=array('domainId'=>'', 'all'=>'', 'sort'=>'', 'fields'=>'', 'desc'=>'', 'offset'=>'', 'limit'=>'', 'page'=>''))
					{
						$url = '/Users/getList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function modify($id, $options=array('email'=>'', 'password'=>'', 'role'=>'', 'lang'=>'', 'userName'=>'', 'company'=>'', 'phone'=>'', 'tos'=>''))
					{
						$url = '/Users/modify';

						$post = array(
								'id'=>$id,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function addToGroup($userId, $groupId, $options=array())
					{
						$url = '/Users/addToGroup';

						$post = array(
								'userId'=>$userId,
			'groupId'=>$groupId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function removeFromGroup($userId, $groupId, $options=array())
					{
						$url = '/Users/removeFromGroup';

						$post = array(
								'userId'=>$userId,
			'groupId'=>$groupId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function addPermission($projectId, $options=array('userId'=>'', 'groupId'=>''))
					{
						$url = '/Users/addPermission';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function removePermission($projectId, $options=array('userId'=>'', 'groupId'=>''))
					{
						$url = '/Users/removePermission';

						$post = array(
								'projectId'=>$projectId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function createGroup($groupName, $options=array())
					{
						$url = '/Users/createGroup';

						$post = array(
								'groupName'=>$groupName,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function deleteGroup($groupId, $options=array())
					{
						$url = '/Users/deleteGroup';

						$post = array(
								'groupId'=>$groupId,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getPermissionList($options=array())
					{
						$url = '/Users/getPermissionList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getGroupList($options=array())
					{
						$url = '/Users/getGroupList';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function getUsersGroups($options=array())
					{
						$url = '/Users/getUsersGroups';

						$post = array(
							);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
					public static function renameGroup($groupId, $groupName, $options=array())
					{
						$url = '/Users/renameGroup';

						$post = array(
								'groupId'=>$groupId,
			'groupName'=>$groupName,
		);
						if(@$options && is_array($options))
						$post = array_merge($post,$options);
						return NxApi::call($url,$post);
					}
				
				}
			
				class NxApiProxyController
				{
			
				}
			

